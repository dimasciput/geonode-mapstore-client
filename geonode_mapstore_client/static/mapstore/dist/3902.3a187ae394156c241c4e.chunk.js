(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3902],{42780:(e,t,n)=>{"use strict";n.d(t,{Xp:()=>i,A1:()=>a,Mf:()=>u,wq:()=>c,CD:()=>s,DX:()=>l,GW:()=>p,c4:()=>E,Ne:()=>T,hv:()=>f,x9:()=>O,Lv:()=>d,mA:()=>A,Ge:()=>N,sL:()=>y,B6:()=>I,vG:()=>m,QY:()=>R,X2:()=>b,dC:()=>S,bO:()=>g,eY:()=>D,bI:()=>_,Rr:()=>v,Np:()=>G,pC:()=>h,cM:()=>C,iO:()=>F,R_:()=>L,zT:()=>U,$l:()=>P,qO:()=>w,eK:()=>M,HN:()=>j,Bm:()=>H,Kz:()=>Y,gT:()=>V,JT:()=>x,CO:()=>z,NV:()=>k,Ns:()=>B,Fz:()=>W,Nj:()=>Z,op:()=>K,GI:()=>q,Cg:()=>Q,WD:()=>X,rb:()=>$,it:()=>J,br:()=>ee,Hf:()=>te,Ps:()=>ne,U7:()=>re,aH:()=>oe,qX:()=>ie,cv:()=>ae,QT:()=>ue,z_:()=>ce,Y5:()=>se,wP:()=>le,pv:()=>pe,bM:()=>Ee,Zw:()=>Te,Ay:()=>fe,aS:()=>Oe,LR:()=>de,VR:()=>Ae,A9:()=>Ne,i9:()=>ye,$f:()=>Ie,F4:()=>me,r1:()=>Re,Om:()=>be,_x:()=>Se,dT:()=>ge,jw:()=>De,iY:()=>_e,QD:()=>ve,xD:()=>Ge,kg:()=>he,ob:()=>Ce,nk:()=>Fe,A_:()=>Le,nY:()=>Ue,Bp:()=>Pe,CH:()=>we,Rx:()=>Me,MQ:()=>je,l7:()=>He,VP:()=>Ye,g:()=>Ve,L0:()=>xe,if:()=>ze,tp:()=>ke,TA:()=>Be,yg:()=>We,Hl:()=>Ze,y$:()=>Ke,ts:()=>qe,UJ:()=>Qe,yw:()=>Xe,nz:()=>$e,RC:()=>Je,om:()=>et,XW:()=>tt,WB:()=>nt,pI:()=>rt,Dd:()=>ot,V_:()=>it,TW:()=>at,$:()=>ut,Y_:()=>ct,Ib:()=>st});var r=n(91175),o=n.n(r),i="ANNOTATIONS:INIT_PLUGIN",a="ANNOTATIONS:EDIT",u="ANNOTATIONS:OPEN_EDITOR",c="ANNOTATIONS:SHOW",s="ANNOTATIONS:NEW",l="ANNOTATIONS:REMOVE",p="ANNOTATIONS:REMOVE_GEOMETRY",E="ANNOTATIONS:CONFIRM_REMOVE",T="ANNOTATIONS:CANCEL_REMOVE",f="ANNOTATIONS:CANCEL_EDIT",O="ANNOTATIONS:CANCEL_SHOW",d="ANNOTATIONS:SAVE",A="ANNOTATIONS:TOGGLE_ADD",N="ANNOTATIONS:TOGGLE_STYLE",y="ANNOTATIONS:SET_STYLE",I="ANNOTATIONS:RESTORE_STYLE",m="ANNOTATIONS:SET_INVALID_SELECTED",R="ANNOTATIONS:VALIDATION_ERROR",b="ANNOTATIONS:HIGHLIGHT",S="ANNOTATIONS:CLEAN_HIGHLIGHT",g="ANNOTATIONS:FILTER",D="ANNOTATIONS:CLOSE",_="ANNOTATIONS:CONFIRM_CLOSE",v="ANNOTATIONS:CANCEL_CLOSE",G="ANNOTATIONS:START_DRAWING",h="ANNOTATIONS:UNSAVED_CHANGES",C="ANNOTATIONS:VISIBILITY",F="ANNOTATIONS:TOGGLE_CHANGES_MODAL",L="ANNOTATIONS:TOGGLE_GEOMETRY_MODAL",U="ANNOTATIONS:CHANGED_PROPERTIES",P="ANNOTATIONS:UNSAVED_STYLE",w="ANNOTATIONS:TOGGLE_STYLE_MODAL",M="ANNOTATIONS:ADD_TEXT",j="ANNOTATIONS:DOWNLOAD",H="ANNOTATIONS:LOAD_ANNOTATIONS",Y="ANNOTATIONS:CHANGED_SELECTED",V="ANNOTATIONS:RESET_COORD_EDITOR",x="ANNOTATIONS:CHANGE_RADIUS",z="ANNOTATIONS:CHANGE_TEXT",k="ANNOTATIONS:ADD_NEW_FEATURE",B="ANNOTATIONS:SET_EDITING_FEATURE",W="ANNOTATIONS:HIGHLIGHT_POINT",Z="ANNOTATIONS:TOGGLE_DELETE_FT_MODAL",K="ANNOTATIONS:CONFIRM_DELETE_FEATURE",q="ANNOTATIONS:CHANGE_FORMAT",Q="ANNOTATIONS:UPDATE_SYMBOLS",X="ANNOTATIONS:ERROR_SYMBOLS",$="ANNOTATIONS:SET_DEFAULT_STYLE",J="ANNOTATIONS:LOAD_DEFAULT_STYLES",ee="ANNOTATIONS:LOADING",te="ANNOTATIONS:CHANGE_GEOMETRY_TITLE",ne="ANNOTATIONS:FILTER_MARKER",re="ANNOTATIONS:HIDE_MEASURE_WARNING",oe="ANNOTATIONS:TOGGLE_SHOW_AGAIN",ie="ANNOTATIONS:GEOMETRY_HIGHLIGHT",ae="ANNOTATIONS:UNSELECT_FEATURE",ue=function(){return{type:i}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:Q,symbols:e}},se=function(e){return{type:X,symbolErrors:e}},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:H,features:e,override:t}},pe=function(){return{type:K}},Ee=function(e){return{type:u,id:e}},Te=function(e){return{type:q,format:e}},fe=function(){return{type:Z}},Oe=function(e){return{type:W,point:e}},de=function(e){return{type:j,annotation:e}},Ae=function(e){return function(t,n){var r=o()(o()(n().layers.flat.filter((function(e){return"annotations"===e.id}))).features.filter((function(t){return t.properties.id===e})));"FeatureCollection"===r.type?t({type:a,feature:r,featureType:r.type}):t({type:a,feature:r,featureType:r.geometry.type})}},Ne=function(){return{type:s}},ye=function(e,t,n,r){return{type:Y,coordinates:e,radius:t,text:n,crs:r}},Ie=function(e,t){return{type:m,errorFrom:e,coordinates:t}},me=function(){return{type:M}},Re=function(e,t){return{type:C,id:e,visibility:t}},be=function(e,t){return{type:U,field:e,value:t}},Se=function(e){return{type:l,id:e}},ge=function(e){return{type:p,id:e}},De=function(e,t){return{type:E,id:e,attribute:t}},_e=function(){return{type:T}},ve=function(e){return{type:f,properties:e}},Ge=function(e,t,n,r,o,i){return{type:d,id:e,fields:t,geometry:n,style:r,newFeature:o,properties:i}},he=function(e){return{type:A,featureType:e}},Ce=function(e){return{type:N,styling:e}},Fe=function(){return{type:I}},Le=function(e){return{type:y,style:e}},Ue=function(e,t,n){return{type:"ANNOTATIONS:UPDATE_GEOMETRY",geometry:e,textChanged:t,circleChanged:n}},Pe=function(e){return{type:R,errors:e}},we=function(e){return{type:b,id:e}},Me=function(){return{type:S}},je=function(e){return{type:c,id:e}},He=function(){return{type:O}},Ye=function(e){return{type:g,filter:e}},Ve=function(){return{type:D}},xe=function(e){return{type:_,properties:e}},ze=function(e){return{type:h,unsavedChanges:e}},ke=function(e){return{type:P,unsavedStyle:e}},Be=function(){return{type:k}},We=function(e){return{type:B,feature:e}},Ze=function(){return{type:v}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:G,options:e}},qe=function(){return{type:F}},Qe=function(){return{type:L}},Xe=function(){return{type:w}},$e=function(){return{type:V}},Je=function(){return{type:ae}},et=function(e,t,n){return{type:x,radius:e,components:t,crs:n}},tt=function(e,t){return{type:z,text:e,components:t}},nt=function(e,t){return{type:$,path:e,style:t}},rt=function(e,t,n,r,o){return{type:J,shape:e,size:t,fillColor:n,strokeColor:r,symbolsPath:o}},ot=function(e){return{type:te,title:e}},it=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:ee,name:t,value:e}},at=function(e){return{type:ne,filter:e}},ut=function(e,t){return{type:ie,id:e,state:t}},ct=function(){return{type:re}},st=function(){return{type:oe}}},33528:(e,t,n)=>{"use strict";n.d(t,{gJ:()=>r,Oj:()=>o,jp:()=>i,CM:()=>a,DU:()=>u,aO:()=>c,v6:()=>s,K8:()=>l,IN:()=>p,zh:()=>E,AH:()=>T,Ub:()=>f,_9:()=>O,JB:()=>d,oh:()=>A,AY:()=>N,yi:()=>y,SW:()=>I,Hk:()=>m,iQ:()=>R,dY:()=>b,$:()=>S,_u:()=>g,gG:()=>D,DI:()=>_,dZ:()=>v,qw:()=>G,f$:()=>h,bZ:()=>C,$O:()=>F,sF:()=>L,Gk:()=>U,vO:()=>P,ut:()=>w,MK:()=>M,VV:()=>j,B8:()=>H,VM:()=>Y,a3:()=>V,Xp:()=>x,DA:()=>z,sK:()=>k,yA:()=>B,r:()=>W,iB:()=>Z,Z7:()=>K,nt:()=>q,EH:()=>Q,Yd:()=>X,Hg:()=>$,Lz:()=>J,ye:()=>ee,Jb:()=>te,d:()=>ne,fT:()=>re,Ib:()=>oe,Pl:()=>ie,UB:()=>ae,Uh:()=>ue,QT:()=>ce,oL:()=>se,Ap:()=>le,KD:()=>pe,Z_:()=>Ee,Vw:()=>Te,sY:()=>fe,kA:()=>Oe,gr:()=>de,pX:()=>Ae,F5:()=>Ne,MO:()=>ye,dq:()=>Ie,DY:()=>me,oO:()=>Re,uF:()=>be,a8:()=>Se,Pv:()=>ge,an:()=>De,lg:()=>_e,nY:()=>ve,nG:()=>Ge,lx:()=>he,$S:()=>Ce,gc:()=>Fe,Uz:()=>Le,fO:()=>Ue,$E:()=>Pe,cE:()=>we,JK:()=>Me,YV:()=>je,t9:()=>He,YG:()=>Ye,HT:()=>Ve,MY:()=>xe,ve:()=>ze,hB:()=>ke,Ox:()=>Be,zd:()=>We,i3:()=>Ze,Ye:()=>Ke,aT:()=>qe,VH:()=>Qe,Yb:()=>Xe,Jr:()=>$e,pP:()=>Je});var r="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",a="FEATUREGRID:CLEAR_SELECTION",u="FEATUREGRID:SET_SELECTION_OPTIONS",c="FEATUREGRID:TOGGLE_MODE",s="FEATUREGRID:TOGGLE_FEATURES_SELECTION",l="FEATUREGRID:FEATURES_MODIFIED",p="FEATUREGRID:NEW_FEATURE",E="FEATUREGRID:SAVE_CHANGES",T="FEATUREGRID:SAVING",f="FEATUREGRID:START_EDITING_FEATURE",O="FEATUREGRID:START_DRAWING_FEATURE",d="FEATUREGRID:DELETE_GEOMETRY",A="FEATUREGRID:DELETE_GEOMETRY_FEATURE",N="FEATUREGRID:SAVE_SUCCESS",y="FEATUREGRID:CLEAR_CHANGES",I="FEATUREGRID:SAVE_ERROR",m="FEATUREGRID:DELETE_SELECTED_FEATURES",R="SET_FEATURES",b="FEATUREGRID:SORT_BY",S="FEATUREGRID:SET_LAYER",g="QUERY:UPDATE_FILTER",D="FEATUREGRID:CHANGE_PAGE",_="FEATUREGRID:GEOMETRY_CHANGED",v="DOCK_SIZE_FEATURES",G="FEATUREGRID:TOGGLE_TOOL",h="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",C="ASK_CLOSE_FEATURE_GRID_CONFIRM",F="FEATUREGRID:OPEN_GRID",L="FEATUREGRID:CLOSE_GRID",U="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",P="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",w="FEATUREGRID:SET_PERMISSION",M="FEATUREGRID:DISABLE_TOOLBAR",j="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",H="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",Y="FEATUREGRID:ADVANCED_SEARCH",V="FEATUREGRID:ZOOM_ALL",x="FEATUREGRID:INIT_PLUGIN",z="FEATUREGRID:SIZE_CHANGE",k="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",B="FEATUREGRID:HIDE_SYNC_POPOVER",W="FEATUREGRID:UPDATE_EDITORS_OPTIONS",Z="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",K="FEATUREGRID:DOWNLOAD_IGRAC_DATA",q="FEATUREGRID:FINISH_DOWNLOADING_IGRAC_DATA",Q={EDIT:"EDIT",VIEW:"VIEW"},X="FEATUREGRID:START_SYNC_WMS",$="FEATUREGRID:STOP_SYNC_WMS",J="STORE_ADVANCED_SEARCH_FILTER",ee="LOAD_MORE_FEATURES",te="FEATUREGRID:QUERY_RESULT",ne="FEATUREGRID:SET_TIME_SYNC",re="FEATUREGRID:SET_PAGINATION";function oe(){return{type:k}}function ie(){return{type:B}}function ae(e,t){return{type:te,features:e,pages:t}}function ue(e){return{type:J,filterObj:e}}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:x,options:e}}function se(){return{type:U}}function le(){return{type:P}}function pe(e,t){return{type:o,features:e,append:t}}function Ee(e){return{type:r,options:e}}function Te(e){return{type:_,features:e}}function fe(){return{type:f}}function Oe(){return{type:O}}function de(e){return{type:i,features:e}}function Ae(){return{type:d}}function Ne(e){return{type:A,features:e}}function ye(){return{type:a}}function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,n=void 0!==t&&t;return{type:u,multiselect:n}}function me(e,t){return{type:b,sortBy:e,sortOrder:t}}function Re(e,t){return{type:D,page:e,size:t}}function be(e){return{type:S,id:e}}function Se(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:g,update:e,append:t}}function ge(e,t){return{type:G,tool:e,value:t}}function De(e,t,n){return{type:h,name:e,key:t,value:n}}function _e(){return{type:c,mode:Q.EDIT}}function ve(){return{type:c,mode:Q.VIEW}}function Ge(e,t){return{type:l,features:e,updated:t}}function he(e){return{type:p,features:e}}function Ce(){return{type:E}}function Fe(){return{type:N}}function Le(){return{type:m}}function Ue(){return{type:T}}function Pe(){return{type:y}}function we(){return{type:I}}function Me(){return{type:C}}function je(){return{type:L}}function He(){return{type:F}}function Ye(e){return{type:M,disabled:e}}function Ve(e){return{type:w,permission:e}}function xe(){return{type:Y}}function ze(){return{type:V}}function ke(){return{type:X}}function Be(e,t){return{type:z,size:e,dockProps:t}}var We=function(e){return{type:ee,pages:e}},Ze=function(){return{type:q}},Ke=function(){return{type:K}},qe=function(e){return{type:j,activated:e}},Qe=function(e){return{type:H,deactivated:e}},Xe=function(e){return{type:ne,value:e}},$e=function(e){return{type:re,size:e}},Je=function(e){return{type:Z,updateFilterAction:e}}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(24852),o=n.n(r),i=n(30294),a=n(7472),u=n(80717),c=n(67076),s=n(19081),l=n.n(s),p=n(75480),E={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},T={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const f=(0,c.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,c=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,O=e.title,d=void 0===O?"":O,A=e.clickOutEnabled,N=void 0===A||A,y=e.showClose,I=void 0===y||y,m=e.disabledClose,R=void 0!==m&&m,b=e.showFullscreen,S=void 0!==b&&b,g=e.fullscreenType,D=void 0===g?"full":g,_=e.buttons,v=void 0===_?[]:_,G=e.size,h=void 0===G?"":G,C=e.bodyClassName,F=void 0===C?"":C,L=e.children,U=e.draggable,P=void 0!==U&&U,w=e.fullscreenState,M=e.onFullscreen,j=e.fade,H=void 0!==j&&j,Y=e.fitContent,V=e.modalClassName,x=void 0===V?"":V,z=e.dialogClassName,k=void 0===z?"":z,B=e.enableFooter,W=void 0===B||B,Z=E[h]||"",K=S&&"expanded"===w&&T.className[D]||"",q=n?o().createElement("div",{className:"modal-fixed ".concat(x," ")+(P?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:N?f:function(){},containerClassName:"ms-resizable-modal",draggable:P,modal:!0,className:"modal-dialog modal-content"+Z+K+k+(Y?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},d),S&&T.className[D]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return M("expanded"===w?"collapsed":"expanded")},glyph:T.glyph[w][D]}),I&&f&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:R}))),o().createElement("div",{role:"body",className:F},L),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?c:null),o().createElement(u.Z,{buttons:v})))):null;return H?o().createElement(l(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},q):q}))},38261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(24852),o=n.n(r),i=n(45697),a=n.n(i),u=n(30294),c=n(80717),s=n(25311),l=n(99509),p=n(5346),E=n(18446),T=n.n(E),f=n(81763),O=n.n(f),d=n(77900);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function R(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(s,e);var t,n,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),g(b(t=a.call(this,e)),"onChangeLatLon",(function(e,n){t.setState(y(y({},t.state),{},g({},e,parseFloat(n))),(function(){var e=parseFloat(t.state.lat)!==parseFloat(t.props.component.lat),n=parseFloat(t.state.lon)!==parseFloat(t.props.component.lon);t.setState(y(y({},t.state),{},{disabledApplyChange:!(e||n)}),(function(){"annotations"===t.props.renderer&&t.props.onSubmit(t.props.idx,t.state)}))}))})),g(b(t),"onSubmit",(function(){t.props.onSubmit(t.props.idx,t.state)})),t.state={lat:O()(t.props.component.lat)?t.props.component.lat:"",lon:O()(t.props.component.lon)?t.props.component.lon:"",disabledApplyChange:!0},t}return t=s,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(!T()(e.component,this.props.component)){var t=O()(e.component.lat)?e.component.lat:"",n=O()(e.component.lon)?e.component.lon:"";this.setState({lat:t,lon:n,disabledApplyChange:!0})}}},{key:"render",value:function(){var e=this,t=this.props.idx,n=[{visible:this.props.removeVisible,disabled:!this.props.removeEnabled||this.props.disabled,glyph:"trash",onClick:function(){e.props.onRemove(t)}},{buttonConfig:{title:o().createElement(u.Glyphicon,{glyph:"cog"}),className:"square-button-md no-border",pullRight:!0,tooltipId:"identifyChangeCoordinateFormat"},menuOptions:[{active:"decimal"===this.props.format,onClick:function(){e.props.onChangeFormat("decimal")},text:o().createElement(p.Z,{msgId:"search.decimal"})},{active:"aeronautical"===this.props.format,onClick:function(){e.props.onChangeFormat("aeronautical")},text:o().createElement(p.Z,{msgId:"search.aeronautical"})}],disabled:this.props.disabled,visible:this.props.formatVisible,Element:d.Z},{glyph:"ok",disabled:this.state.disabledApplyChange||this.props.disabled,tooltipId:"identifyCoordinateApplyChanges",onClick:this.onSubmit,visible:"annotations"!==this.props.renderer}],r=o().createElement("div",{role:"button",className:"square-button-md no-border btn btn-default",style:{display:"table",color:!this.props.isDraggableEnabled&&"#999999",pointerEvents:this.props.isDraggableEnabled?"auto":"none",cursor:this.props.isDraggableEnabled&&"grab"}},o().createElement(u.Glyphicon,{glyph:"menu-hamburger"}));return o().createElement("div",{className:"coordinateRow ".concat(this.props.format||""," ").concat(this.props.customClassName||""),onMouseEnter:function(){e.props.onMouseEnter&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseEnter(e.props.component)},onMouseLeave:function(){e.props.onMouseLeave&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseLeave()}},o().createElement("div",{style:{cursor:this.props.isDraggableEnabled?"grab":"not-allowed"}},this.props.showDraggable?this.props.isDraggable?this.props.connectDragSource(r):r:null),o().createElement("div",{className:"coordinate"},o().createElement("div",{className:"input-group-container"},o().createElement(u.InputGroup,null,o().createElement(u.InputGroup.Addon,null,o().createElement(p.Z,{msgId:"latitude"})),o().createElement(l.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lat",idx:t,value:this.state.lat,onChange:function(t){return e.onChangeLatLon("lat",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit}))),o().createElement("div",{className:"input-group-container"},o().createElement(u.InputGroup,null,o().createElement(u.InputGroup.Addon,null,o().createElement(p.Z,{msgId:"longitude"})),o().createElement(l.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lon",idx:t,value:this.state.lon,onChange:function(t){return e.onChangeLatLon("lon",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit})))),this.props.showToolButtons&&o().createElement("div",{key:"tools"},o().createElement(c.Z,{btnGroupProps:{className:"tools"},btnDefaultProps:{className:"square-button-md no-border"},buttons:n})))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o().Component);g(D,"propTypes",{idx:a().number,component:a().object,onRemove:a().func,onSubmit:a().func,onChangeFormat:a().func,onMouseEnter:a().func,format:a().string,type:a().string,onMouseLeave:a().func,connectDragSource:a().func,aeronauticalOptions:a().object,customClassName:a().string,isDraggable:a().bool,isDraggableEnabled:a().bool,showLabels:a().bool,showDraggable:a().bool,showToolButtons:a().bool,removeVisible:a().bool,formatVisible:a().bool,removeEnabled:a().bool,renderer:a().string,disabled:a().bool}),g(D,"defaultProps",{showLabels:!1,formatVisible:!1,onMouseEnter:function(){},onMouseLeave:function(){},showToolButtons:!0,disabled:!1});const _=(0,s.Z)(D)},25311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(24852),o=n.n(r),i=n(90937),a=n(67076),u=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}};const E=(0,a.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,a.compose)((0,i.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,i.GR)("row",{drop:function(e,t){var n=t.getItem();n.sortId!==e.sortId&&e.onSort(e.sortId,n.sortId,{id:e.id,containerId:e.containerId},{id:n.id,containerId:n.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var n=t.connectDragSource,r=t.connectDragPreview,i=t.connectDropTarget,a=t.isDragging,s=t.isOver,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,u),p=l.draggingItem&&l.draggingItem.sortId<l.sortId,E=l.draggingItem&&l.draggingItem.containerId===l.containerId,T=E&&a?" ms-dragging":"",f=E&&s?" ms-over":"",O=E&&p?" ms-above":" ms-below";return r(i(o().createElement("div",{className:"ms-dragg".concat(T).concat(f," ").concat(O)},o().createElement("div",null,o().createElement(e,c({},l,{connectDragSource:n,isDragging:a,isOver:s,onDrop:function(e){return e.stopPropagation()}}))))))}})))},7147:(e,t,n)=>{"use strict";n.d(t,{Yq:()=>i,Iz:()=>a,QF:()=>u,_d:()=>c,pn:()=>s,lI:()=>l,PJ:()=>p,dH:()=>E,Gd:()=>T,tL:()=>f,R4:()=>O,BP:()=>d});var r=n(27361),o=n.n(r),i=function(e){return function(e,t){return function(t){return o()(t,"controls[".concat(e,"][").concat("enabled","]"))}}(e)},a=function(e){return o()(e,"controls.measure.showCoordinateEditor")},u=function(e){return o()(e,"controls.measure.enabled")},c=function(e){return o()(e,"controls.queryPanel.enabled")},s=function(e){return!!o()(e,"controls.layerdownload.available")},l=function(e){return!!o()(e,"controls.layerdownload.enabled")},p=function(e){return o()(e,"controls.widgetBuilder.available",!1)},E=function(e){return o()(e,"controls.widgetBuilder.enabled")},T=function(e){return o()(e,"controls.layersettings.initialSettings")||{}},f=function(e){return o()(e,"controls.layersettings.originalSettings")||{}},O=function(e){return o()(e,"controls.layersettings.activeTab")||"general"},d=function(e){return o()(e,"controls.drawer.enabled",!1)}}}]);