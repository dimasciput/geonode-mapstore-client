(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7424],{4206:(e,t,n)=>{"use strict";n.d(t,{hZ:()=>r,pb:()=>u,kD:()=>o,DI:()=>i,IC:()=>a,iU:()=>s,W7:()=>c,Vw:()=>E,KD:()=>l,uj:()=>p,lo:()=>f,Yf:()=>R,fo:()=>A,PY:()=>d,bp:()=>T});var r="CHANGE_DRAWING_STATUS",u="DRAW:END_DRAWING",o="DRAW:SET_CURRENT_STYLE",i="DRAW:GEOMETRY_CHANGED",a="DRAW:DRAW_SUPPORT_STOPPED",s="DRAW:FEATURES_SELECTED",c="DRAW:DRAWING_FEATURES";function E(e,t,n,r,u){return{type:i,features:e,owner:t,enableEdit:n,textChanged:r,circleChanged:u}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:s,features:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:c,features:e}}function f(){return{type:a}}function R(e,t,n,u,o,i){return{type:r,status:e,method:t,owner:n,features:u,options:o,style:i}}function A(e,t){return{type:u,geometry:e,owner:t}}function d(e){return{type:o,currentStyle:e}}var T=function(e){return R("clean","",e,[],{})}},33528:(e,t,n)=>{"use strict";n.d(t,{gJ:()=>r,Oj:()=>u,jp:()=>o,CM:()=>i,DU:()=>a,aO:()=>s,v6:()=>c,K8:()=>E,IN:()=>l,zh:()=>p,AH:()=>f,Ub:()=>R,_9:()=>A,JB:()=>d,oh:()=>T,AY:()=>y,yi:()=>I,SW:()=>D,Hk:()=>g,iQ:()=>_,dY:()=>S,$:()=>F,_u:()=>G,gG:()=>O,DI:()=>v,dZ:()=>U,qw:()=>m,f$:()=>w,bZ:()=>h,$O:()=>C,sF:()=>b,Gk:()=>N,vO:()=>P,ut:()=>L,MK:()=>Y,VV:()=>z,B8:()=>M,VM:()=>H,a3:()=>W,Xp:()=>j,DA:()=>k,sK:()=>V,yA:()=>Z,r:()=>K,iB:()=>B,Z7:()=>$,nt:()=>x,EH:()=>J,Yd:()=>Q,Hg:()=>q,Lz:()=>X,ye:()=>ee,Jb:()=>te,d:()=>ne,fT:()=>re,Ib:()=>ue,Pl:()=>oe,UB:()=>ie,Uh:()=>ae,QT:()=>se,oL:()=>ce,Ap:()=>Ee,KD:()=>le,Z_:()=>pe,Vw:()=>fe,sY:()=>Re,kA:()=>Ae,gr:()=>de,pX:()=>Te,F5:()=>ye,MO:()=>Ie,dq:()=>De,DY:()=>ge,oO:()=>_e,uF:()=>Se,a8:()=>Fe,Pv:()=>Ge,an:()=>Oe,lg:()=>ve,nY:()=>Ue,nG:()=>me,lx:()=>we,$S:()=>he,gc:()=>Ce,Uz:()=>be,fO:()=>Ne,$E:()=>Pe,cE:()=>Le,JK:()=>Ye,YV:()=>ze,t9:()=>Me,YG:()=>He,HT:()=>We,MY:()=>je,ve:()=>ke,hB:()=>Ve,Ox:()=>Ze,zd:()=>Ke,i3:()=>Be,Ye:()=>$e,aT:()=>xe,VH:()=>Je,Yb:()=>Qe,Jr:()=>qe,pP:()=>Xe});var r="FEATUREGRID:SET_UP",u="FEATUREGRID:SELECT_FEATURES",o="FEATUREGRID:DESELECT_FEATURES",i="FEATUREGRID:CLEAR_SELECTION",a="FEATUREGRID:SET_SELECTION_OPTIONS",s="FEATUREGRID:TOGGLE_MODE",c="FEATUREGRID:TOGGLE_FEATURES_SELECTION",E="FEATUREGRID:FEATURES_MODIFIED",l="FEATUREGRID:NEW_FEATURE",p="FEATUREGRID:SAVE_CHANGES",f="FEATUREGRID:SAVING",R="FEATUREGRID:START_EDITING_FEATURE",A="FEATUREGRID:START_DRAWING_FEATURE",d="FEATUREGRID:DELETE_GEOMETRY",T="FEATUREGRID:DELETE_GEOMETRY_FEATURE",y="FEATUREGRID:SAVE_SUCCESS",I="FEATUREGRID:CLEAR_CHANGES",D="FEATUREGRID:SAVE_ERROR",g="FEATUREGRID:DELETE_SELECTED_FEATURES",_="SET_FEATURES",S="FEATUREGRID:SORT_BY",F="FEATUREGRID:SET_LAYER",G="QUERY:UPDATE_FILTER",O="FEATUREGRID:CHANGE_PAGE",v="FEATUREGRID:GEOMETRY_CHANGED",U="DOCK_SIZE_FEATURES",m="FEATUREGRID:TOGGLE_TOOL",w="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",h="ASK_CLOSE_FEATURE_GRID_CONFIRM",C="FEATUREGRID:OPEN_GRID",b="FEATUREGRID:CLOSE_GRID",N="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",P="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",L="FEATUREGRID:SET_PERMISSION",Y="FEATUREGRID:DISABLE_TOOLBAR",z="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",M="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",H="FEATUREGRID:ADVANCED_SEARCH",W="FEATUREGRID:ZOOM_ALL",j="FEATUREGRID:INIT_PLUGIN",k="FEATUREGRID:SIZE_CHANGE",V="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",Z="FEATUREGRID:HIDE_SYNC_POPOVER",K="FEATUREGRID:UPDATE_EDITORS_OPTIONS",B="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",$="FEATUREGRID:DOWNLOAD_IGRAC_DATA",x="FEATUREGRID:FINISH_DOWNLOADING_IGRAC_DATA",J={EDIT:"EDIT",VIEW:"VIEW"},Q="FEATUREGRID:START_SYNC_WMS",q="FEATUREGRID:STOP_SYNC_WMS",X="STORE_ADVANCED_SEARCH_FILTER",ee="LOAD_MORE_FEATURES",te="FEATUREGRID:QUERY_RESULT",ne="FEATUREGRID:SET_TIME_SYNC",re="FEATUREGRID:SET_PAGINATION";function ue(){return{type:V}}function oe(){return{type:Z}}function ie(e,t){return{type:te,features:e,pages:t}}function ae(e){return{type:X,filterObj:e}}function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:j,options:e}}function ce(){return{type:N}}function Ee(){return{type:P}}function le(e,t){return{type:u,features:e,append:t}}function pe(e){return{type:r,options:e}}function fe(e){return{type:v,features:e}}function Re(){return{type:R}}function Ae(){return{type:A}}function de(e){return{type:o,features:e}}function Te(){return{type:d}}function ye(e){return{type:T,features:e}}function Ie(){return{type:i}}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,n=void 0!==t&&t;return{type:a,multiselect:n}}function ge(e,t){return{type:S,sortBy:e,sortOrder:t}}function _e(e,t){return{type:O,page:e,size:t}}function Se(e){return{type:F,id:e}}function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:G,update:e,append:t}}function Ge(e,t){return{type:m,tool:e,value:t}}function Oe(e,t,n){return{type:w,name:e,key:t,value:n}}function ve(){return{type:s,mode:J.EDIT}}function Ue(){return{type:s,mode:J.VIEW}}function me(e,t){return{type:E,features:e,updated:t}}function we(e){return{type:l,features:e}}function he(){return{type:p}}function Ce(){return{type:y}}function be(){return{type:g}}function Ne(){return{type:f}}function Pe(){return{type:I}}function Le(){return{type:D}}function Ye(){return{type:h}}function ze(){return{type:b}}function Me(){return{type:C}}function He(e){return{type:Y,disabled:e}}function We(e){return{type:L,permission:e}}function je(){return{type:H}}function ke(){return{type:W}}function Ve(){return{type:Q}}function Ze(e,t){return{type:k,size:e,dockProps:t}}var Ke=function(e){return{type:ee,pages:e}},Be=function(){return{type:x}},$e=function(){return{type:$}},xe=function(e){return{type:z,activated:e}},Je=function(e){return{type:M,deactivated:e}},Qe=function(e){return{type:ne,value:e}},qe=function(e){return{type:re,size:e}},Xe=function(e){return{type:B,updateFilterAction:e}}},67424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(27418),u=n.n(r),o=n(91175),i=n.n(o),a=n(27361),s=n.n(a),c=n(19155),E=n.n(c),l=n(1469),p=n.n(l),f=n(33528),R=n(95797),A=n(4206),d=n(55877),T=n.n(d),y=n(15124);function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F={advancedFilters:{},filters:{},editingAllowedRoles:["ADMIN"],enableColumnFilters:!0,showFilteredObject:!1,timeSync:!1,showTimeSync:!1,open:!1,canEdit:!1,focusOnEdit:!1,showAgain:!1,showPopoverSync:null===(0,y.ac)().getItem("showPopoverSync")||"true"===(0,y.ac)().getItem("showPopoverSync"),mode:f.EH.VIEW,changes:[],pagination:{page:0,size:20},select:[],multiselect:!1,drawing:!1,newFeatures:[],features:[],dockSize:.35,customEditorsOptions:{rules:[]}},G=function(e,t){return t===e||void 0!==e.id&&null!==e.id&&e.id===t.id},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.filter((function(t){return G(e,t)})).length>0},v=function(e,t,n,r){return e.map((function(e){return O(e,t)?function(e,t,n){return _(_({},e),{},n?{properties:_(_({},e.properties),t),geometry:n.geometry}:{properties:_(_({},e.properties),t)})}(e,n,r):e}))};const U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.Xp:return u()({},e,{showPopoverSync:null===(0,y.ac)().getItem("showPopoverSync")||"true"===(0,y.ac)().getItem("showPopoverSync"),editingAllowedRoles:t.options.editingAllowedRoles||e.editingAllowedRoles||["ADMIN"],virtualScroll:!!t.options.virtualScroll,maxStoredPages:t.options.maxStoredPages||5});case f.ye:case f.gG:return u()({},e,{pagination:{page:void 0!==t.page?t.page:e.pagination.page,size:void 0!==t.size?t.size:e.pagination.size}});case f.fT:var n;return _(_({},e),{},{pagination:_(_({},null!==(n=e.pagination)&&void 0!==n?n:{}),{},{size:t.size})});case f.Oj:var r=t.features.filter((function(e){return"empty_row"!==e.id}));return e.multiselect&&t.append?u()({},e,{select:t.append?E()([].concat(I(e.select),I(r)),"id"):r}):r&&e.select&&e.select[0]&&r[0]&&1===e.select.length&&G(r[0],e.select[0])?e:u()({},e,{select:r||[]});case f.v6:var o=e.select.filter((function(e){return!O(e,t.features)})),a=t.features.filter((function(t){return!O(t,e.select)})),c=o.concat(a||[]);return u()({},e,{select:c});case f.jp:return u()({},e,{select:e.select.filter((function(e){return!O(e,t.features)}))});case f.DU:return u()({},e,{multiselect:t.multiselect});case f.r:return u()({},e,{customEditorsOptions:t.payload});case f.gJ:return u()({},e,t.options||{});case f.CM:return u()({},e,{select:[],changes:[]});case f.iQ:return u()({},e,{features:t.features});case f.dZ:return u()({},e,{dockSize:t.dockSize});case f.$:return u()({},e,{selectedLayer:t.id});case f.qw:return u()({},e,{tools:_(_({},e.tools),{},S({},t.tool,void 0===t.value?!(e.tools&&e.tools[t.tool]):t.value))});case f.f$:return u()({},e,{attributes:_(_({},e.attributes),{},S({},t.name,_(_({},e.attributes&&e.attributes[t.name]||{}),{},S({},t.key,t.value||e.attributes&&e.attributes[t.name]&&!e.attributes[t.name][t.key]))))});case f.aO:return u()({},e,{showPopoverSync:null!==(0,y.ac)().getItem("showPopoverSync")?"true"===(0,y.ac)().getItem("showPopoverSync"):t.mode!==f.EH.EDIT,tools:t.mode===f.EH.EDIT?{}:e.tools,mode:t.mode,multiselect:t.mode===f.EH.EDIT,drawing:!1});case f.K8:var l=t.features.filter((function(e){return e._new}))||[];return u()({},e,{newFeatures:l.length>0?v(e.newFeatures,l,t.updated,null):e.newFeatures,changes:[].concat(I(e&&e.changes||[]),I(t.features.filter((function(e){return!e._new})).map((function(e){return{id:e.id,updated:t.updated}}))))});case f.AH:return u()({},e,{saving:!0,loading:!0});case f.AY:return u()({},e,{deleteConfirm:!1,saved:!0,saving:!1,drawing:!1,loading:!1});case f.yi:return u()({},e,{saved:!1,deleteConfirm:!1,drawing:!1,newFeatures:[],changes:[]});case f.IN:var d=T().v1();return u()({},e,{newFeatures:t.features.map((function(e){return _(_({},e),{},{_new:!0,id:d,type:"Feature",geometry:null})})),select:t.features.map((function(e){return _(_({},e),{},{_new:!0,id:d,type:"Feature",geometry:null})}))});case f.SW:return u()({},e,{deleteConfirm:!1,saving:!1,loading:!1,drawing:!1});case f.DI:var D=t.features.filter((function(e){return e._new}))||[];return u()({},e,{newFeatures:D.length>0?v(e.newFeatures,D,null,{geometry:_({},i()(D).geometry)}):e.newFeatures,changes:t.features.filter((function(e){return!e._new})).map((function(e,n){return{id:e.id,updated:{geometry:t.features[n].geometry}}})),drawing:!1});case f.oh:var g=t.features.filter((function(e){return e._new}))||[];return u()({},e,{newFeatures:g.length>0?v(e.newFeatures,g,null,{geometry:null}):e.newFeatures,changes:[].concat(I(e&&e.changes||[]),I(t.features.filter((function(e){return!e._new})).map((function(e){return{id:e.id,updated:{geometry:null}}}))))});case R.u7:return u()({},e,{localType:s()(t,"featureType.original.featureTypes[0].properties[1].localType")});case f._9:return u()({},e,{drawing:!e.drawing});case f.$O:return u()({},e,{open:!0});case f.sF:return u()({},e,{open:!1,pagination:{page:0,size:e.pagination.size},mode:f.EH.VIEW,tools:{},saved:!1,deleteConfirm:!1,drawing:!1,newFeatures:[],changes:[]});case f.MK:return u()({},e,{disableToolbar:t.disabled});case f.ut:return u()({},e,{canEdit:t.permission.canEdit});case A.hZ:return"clean"===t.status?u()({},e,{drawing:!1}):e;case f._u:var U=t.update||{},m=U.attribute;if(m&&t.append){var w=e.filters[m].value,h=[];null!=w&&w.attribute&&(h=[w]),p()(w)&&(h=w);var C=[].concat(I(h),[t.update.value]);return u()({},e,{filters:S({},m,{attribute:m,enabled:!0,type:"geometry",operator:"OR",value:C})})}return m?u()({},e,{filters:_(_({},e.filters),{},S({},m,t.update))}):e;case R.Yx:return u()({},e,{filters:{}});case f.DA:var b=t.dockProps&&t.dockProps.maxDockSize,N=t.dockProps&&t.dockProps.minDockSize,P=b&&N&&N<=t.size&&b>=t.size&&t.size||b&&b<t.size&&b||N&&N>t.size&&N||t.size;return u()({},e,{dockSize:P});case f.Lz:return u()({},e,{advancedFilters:u()({},e.advancedFilters,S({},e.selectedLayer,t.filterObj))});case f.Jb:return u()({},e,{features:t.features||[],pages:t.pages||[]});case f.yA:return u()({},e,{showPopoverSync:!1});case f.sK:return u()({},e,{showAgain:!e.showAgain});case f.d:return u()({},e,{timeSync:t.value});case f.Z7:return u()({},e,{isIGRACDownloading:!0});case f.nt:return u()({},e,{isIGRACDownloading:!1});default:return e}}},19155:(e,t,n)=>{var r=n(67206),u=n(45652);e.exports=function(e,t){return e&&e.length?u(e,r(t,2)):[]}}}]);