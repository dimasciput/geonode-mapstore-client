import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import {createPlugin} from "@mapstore/framework/utils/PluginsUtils";
import {mapInfoSelector} from "@mapstore/framework/selectors/map";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Alert} from "react-bootstrap";
import ResizableModal from "@mapstore/framework/components/misc/ResizableModal";
import {
    DOWNLOAD_IGRAC_DATA, FINISH_DOWNLOADING_IGRAC_DATA
} from "@mapstore/framework/actions/featuregrid";
import featuregrid from "@mapstore/framework/reducers/featuregrid";

const IGRAC_DOWNLOAD_URL = '/groundwater/record/download-request';

const downloadProgressHtml = (taskId) => (
    '<div>' +
    '<h1>Download has been started</h1> <hr> ' +
    '<p> Please check this page to see the progress of the download : <br/><a target="_blank" href="/groundwater/download?task_id=' + taskId + '">' +
    window.location.origin + '/groundwater/download?task_id=' + taskId + '</a></p>' +
    '</div>'
);

const downloadErrorHtml = (
    '<div>' +
    '<h1>Download Error</h1> <hr> ' +
    '<p> Please sign in first before downloading the data' +
    '</div>'
);

// Actions
export const finishDownloadingIGRACData = (taskId) => {
    return {
        type: FINISH_DOWNLOADING_IGRAC_DATA,
        taskId
    };
};

export const errorDownloadingIGRACData = () => {
    return {
        type: 'IGRAC_DOWNLOAD_ERROR'
    };
};

export const downloadIGRACData = () => {
    return {
        type: DOWNLOAD_IGRAC_DATA
    };
};

export const closeDownloadModal = () => {
    return {
        type: 'CLOSE_DOWNLOAD_MODAL'
    };
};

// Epics
export const startDownloadingIGRACData = (action$, { getState } = {}) =>
    action$
        .ofType(DOWNLOAD_IGRAC_DATA)
        .switchMap(() => {
            return window.location.href = IGRAC_DOWNLOAD_URL
        });

// Reducers
export function igracDownloadReducers(state = {}, action) {
    switch (action.type) {
    case DOWNLOAD_IGRAC_DATA: {
        return assign({}, state.featuregrid, {
            isIGRACDownloading: true
        });
    }
    case FINISH_DOWNLOADING_IGRAC_DATA: {
        return assign({}, state, {
            isIGRACDownloading: false,
            data: downloadProgressHtml(action.taskId),
            enabled: true
        });
    }
    case 'CLOSE_DOWNLOAD_MODAL': {
        return assign({}, state, {
            isIGRACDownloading: false,
            data: '',
            enabled: false
        });
    }
    case 'IGRAC_DOWNLOAD_ERROR': {
        return assign({}, state, {
            data: downloadErrorHtml,
            enabled: true
        });
    }
    default:
        return state;
    }
}

function IgracDownload({
    resourceId,
    enabled,
    downloading,
    error,
    data,
    onClose
}) {
    const state = useRef();
    state.current = {
        resourceId,
        data
    };

    return (
        <ResizableModal
            modalClassName="gn-igrac-download-modal"
            title="IGRAC Download"
            show={enabled}
            size={'s'}
            fitContent
            enableFooter={false}
            clickOutEnabled={false}
            onClose={() => onClose()}
        >
            <div
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {error && <Alert bsStyle="danger" style={{ margin: 0 }}>
                    <div>Data cannot be fetched</div>
                </Alert>}
                {data && <div style={{
                    width: '100%',
                    height: 200,
                    paddingLeft: 20,
                    paddingRight: 20}} dangerouslySetInnerHTML={{ __html: data }}/>}
            </div>
        </ResizableModal>
    );
}

IgracDownload.propTypes = {
    resourceId: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    enabled: PropTypes.bool,
    downloading: PropTypes.bool,
    error: PropTypes.obj,
    data: PropTypes.string,
    onClose: PropTypes.func,
    onInit: PropTypes.func
};

IgracDownload.defaultProps = {
    resourceId: null,
    enabled: false,
    downloading: false,
    error: null,
    data: '',
    onClose: () => {},
    onInit: () => {}
};

const IgracDownloadPlugin = connect(
    createSelector([
        state => state?.igracDownloadReducers?.enabled,
        mapInfoSelector,
        state => state?.igracDownloadReducers?.data,
        state => state?.igracDownloadReducers?.isIGRACDownloading,
        state => state?.igracDownloadReducers?.error
    ], (enabled, mapInfo, data, downloading, error) => ({
        enabled,
        resourceId: mapInfo?.id,
        data,
        downloading,
        error
    })),
    {
        onClose: closeDownloadModal.bind(null)
    }
)(IgracDownload);

export default createPlugin('IgracDownload', {
    component: IgracDownloadPlugin,
    containers: {},
    epics: {
        startDownloadingIGRACData
    },
    reducers: {
        igracDownloadReducers,
        featuregrid
    }
});