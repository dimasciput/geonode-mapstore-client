(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2794],{83520:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>L});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),a=r(71703),c=(r(50329),r(64317)),l=r(31255),f=r(55105),s=r(22222),p=r(27418),y=r.n(p),b=r(58252);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}var d=["children"],m=["children"];function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function O(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function P(t,e,r){return e&&w(t.prototype,e),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C(t);if(e){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var z=function(t){S(r,t);var e=q(r);function r(){return j(this,r),e.apply(this,arguments)}return P(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=O(t,d);return o().createElement(c.CSSTransitionGroup,h({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),e)}}]),r}(o().Component),D=function(t){S(r,t);var e=q(r);function r(){return j(this,r),e.apply(this,arguments)}return P(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=O(t,m);return o().createElement("div",r,e)}}]),r}(o().Component),_=function(t){S(r,t);var e=q(r);function r(){var t;j(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return v(k(t=e.call.apply(e,[this].concat(o))),"getPanel",(function(t){return!0===t.panel?t.plugin:t.panel})),v(k(t),"getPanels",(function(){return t.getTools().filter((function(t){return t.panel})).map((function(e){return{name:e.name,title:e.title,cfg:e.cfg,panel:t.getPanel(e),items:e.items,wrap:e.wrap||!1}}))})),v(k(t),"getTools",(function(){var e=t.props.items.filter((function(t){return!t.alwaysVisible}))||[];return t.props.items.filter((function(r){return r.alwaysVisible||1===e.length||t.props.allVisible})).filter((function(e){return!e.showWhen||e.showWhen(t.props)})).map((function(t,e){return y()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),t}return P(r,[{key:"render",value:function(){var t=this.props.disableAnimation?D:z;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:t,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);v(_,"propTypes",{id:u().string,tools:u().array,mapType:u().string,style:u().object,panelStyle:u().object,panelClassName:u().string,disableAnimation:u().bool,active:u().string,items:u().array,allVisible:u().bool,layout:u().string,stateSelector:u().string,buttonStyle:u().string,buttonSize:u().string,pressedButtonStyle:u().string,btnConfig:u().object}),v(_,"contextTypes",{messages:u().object,router:u().object}),v(_,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});var E=function(t){return(0,s.P1)([function(e){return e.controls&&e.controls[t]&&e.controls[t].active},function(e){return e.controls&&e.controls[t]&&e.controls[t].expanded},l.Rd,function(t){return(0,f.ic)(t,{right:!0,bottom:!0})}],(function(e,r,n,o){return{active:e,allVisible:r,stateSelector:t,layout:n?"horizontal":"vertical",style:o}}))};const L={ToolbarPlugin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,a.connect)(E(t))(_)},reducers:{controls:r(25108).Z}}},25108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(82904),o=r(27418),i=r.n(o);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return i()({},t,u({},e.control,i()({},t[e.control],u({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?i()({},t,u({},e.control,i()({},t[e.control],u({},e.property,void 0)))):i()({},t,u({},e.control,i()({},t[e.control],u({},e.property,e.value))));case n.dc:return i()({},t,u({},e.control,i()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})),a=o.reduce((function(e,r){return i()(e,u({},r,i()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return i()({},t,a);default:return t}}},31255:(t,e,r)=>{"use strict";r.d(e,{u$:()=>w,PI:()=>P,_w:()=>S,eO:()=>x,kG:()=>q,P3:()=>T,bq:()=>z,LB:()=>D,b4:()=>_,M0:()=>E,Li:()=>L,Rd:()=>F,g5:()=>V,Sj:()=>A,o:()=>N,eK:()=>R,jY:()=>M,ND:()=>G,OK:()=>B,tU:()=>I,ou:()=>K,DK:()=>W,Gl:()=>Q,uz:()=>U,Ci:()=>Z,Ae:()=>H,gz:()=>Y,He:()=>J,P4:()=>X,kd:()=>$,TC:()=>tt,nq:()=>et,Vf:()=>rt});var n=r(91175),o=r.n(n),i=r(27361),u=r.n(i),a=r(13218),c=r.n(a),l=r(75110),f=r(78889),s=r(8316),p=r(52259),y=r(96958),b=r(85148),g=r(74621),d=r(93152),m=r(24260);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=l.CA,w=function(t){return u()(t,"featuregrid.selectedLayer")},P=function(t){return u()(t,"featuregrid.chartDisabled",!1)},S=function(t){return t&&t.featuregrid&&t.featuregrid.select},x=function(t){return t&&t.featuregrid&&t.featuregrid.changes},q=function(t){return t&&t.featuregrid&&t.featuregrid.newFeatures},T=function(t){return o()(S(t))},k=function(t){var e=(0,m.Qs)(t);if(e){var r=(0,f.findGeometryProperty)(e);return r&&r.localType}return null},C=["Geometry","GeometryCollection"],z=function(t){return!o()(C.filter((function(e){return k(t)===e})))},D=function(t){return x(t)&&x(t).length>0},_=function(t){return q(t)&&q(t).length>0},E=function(t){return t&&t.featuregrid&&t.featuregrid.filters},L=function(t){return j(t,w(t))},F=function(t){return t&&t.featuregrid&&t.featuregrid.open},V=function(t,e){return u()(E(t),e)},A=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.title||t.name}(j(t,w(t)));return c()(e)?e[(0,s.Pz)(t)]||e.default||"":e},N=function(t){return((0,m.L)(t)||[]).map((function(e){var r=function(t,e){return u()(t,"featuregrid.attributes[".concat(e.name||e.attribute,"]"))}(t,e);return r?h(h({},e),r):e}))},R=function(t){return t&&t.featuregrid&&t.featuregrid.mode},M=function(t){return(S(t)||[]).length},G=function(t){return(0,y.rK)(x(t))},B=function(t){return function(t){var e=T(t);if(e){var r=(0,y.rK)(x(t));return!((!r[e.id]||null===r[e.id].geometry)&&(r[e.id]&&null===r[e.id].geometry||e._new&&o()(q(t))&&null===o()(q(t)).geometry||(!e._new||!o()(q(t))||null===o()(q(t)).geometry)&&null===e.geometry))}return!1}(t)},I=function(t){return u()(t,"featuregrid.showAgain",!1)},K=function(t){if(u()(t,"featuregrid.showTimeSync",!1)){var e=w(t);return(0,b.jo)({id:e},"time")(t)}return null},W=function(t){return u()(t,"featuregrid.timeSync",!1)},Q=function(t){return u()(t,"featuregrid.showPopoverSync",!0)},U=function(t){return t&&t.featuregrid&&t.featuregrid.saving},Z=function(t){return t&&t.featuregrid&&t.featuregrid.saved},H=function(t){return t&&t.featuregrid&&t.featuregrid.drawing},Y=function(t){return u()(t,"featuregrid.multiselect",!1)},J=function(t){return(0,p.isSimpleGeomType)(k(t))},X=function(t){return t.featuregrid&&t.featuregrid.dockSize},$=function(t){var e=j(t,w(t));return e&&e.name||""},tt=function(t){var e=function(t){return u()(j(t,w(t)),"params")}(t);return{viewParams:e&&(e.VIEWPARAMS||e.viewParams||e.viewparams),cqlFilter:e&&(e.CQL_FILTER||e.cqlFilter||e.cql_filter)}},et=function(t){var e=(0,g.L3)(t),r=function(t){return u()(t,"featuregrid.editingAllowedRoles",["ADMIN"])}(t)||["ADMIN"],n=function(t){return t&&t.featuregrid&&t.featuregrid.canEdit}(t);return(-1!==r.indexOf(e)||n)&&!(0,d.c0)(t)},rt=function(t){return u()(t,"featuregrid.pagination")}},55105:(t,e,r)=>{"use strict";r.d(e,{Nr:()=>s,ic:()=>p,Jz:()=>b,VM:()=>g,CF:()=>d});var n=r(91175),o=r.n(n),i=r(827),u=r(52259);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=function(t){return t.maplayout&&t.maplayout.layout||{}},s=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=f(t);return r&&Object.keys(r).filter((function(t){return e[t]})).reduce((function(t,e){return c(c({},t),{},l({},e,r[e]))}),{})||{}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=f(t),n=!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})));return n},b=function(t){return y(t,[{key:"right",value:658}])},g=function(t){return y(t,[{key:"bottom",value:30,type:"not"}])},d=function(t){var e=(0,i.Od)(t),r=s(t);return r&&e&&e.size&&{left:(0,u.parseLayoutValue)(r.left,e.size.width),bottom:(0,u.parseLayoutValue)(r.bottom,e.size.height),right:(0,u.parseLayoutValue)(r.right,e.size.width),top:(0,u.parseLayoutValue)(r.top,e.size.height)}}},24260:(t,e,r)=>{"use strict";r.d(e,{qj:()=>v,Bu:()=>h,UM:()=>O,X1:()=>j,L:()=>w,HY:()=>P,Mz:()=>S,F0:()=>x,dc:()=>q,b0:()=>T,hk:()=>k,Qs:()=>C,gy:()=>z,M7:()=>D,VD:()=>_});var n=r(14293),o=r.n(n),i=r(27361),u=r.n(i),a=r(91175),c=r.n(a),l=r(1469),f=r.n(l),s=r(30998),p=r.n(s);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return u()(t,"query.filterObj.featureTypeName")},m=function(t){return function(e){return u()(e,'query.featureTypes["'.concat(t,'"]'))}},v=function(t,e){return u()(m(e)(t),"original")},h=function(t){return t&&t.query&&t.query.searchUrl},O=function(t){return t&&t.query&&t.query.url},j=function(t){return t&&t.query&&t.query.filterObj},w=function(t){return u()(m(d(t))(t),"attributes")},P=function(t){return u()(t,"query.typeName")},S=function(t){return u()(t,"query.result.features")},x=function(t){var e=u()(t,"query.result");return b(b({},e),{},{features:(e&&e.features||[]).filter((function(t){return!o()(t.geometry)}))})},q=function(t,e){var r=t&&t.query&&t.query.result&&t.query.result.features;return c()(r.filter((function(t){return t.id===e})))},T={startIndex:function(t){return u()(t,"query.filterObj.pagination.startIndex")},maxFeatures:function(t){return u()(t,"query.filterObj.pagination.maxFeatures")},resultSize:function(t){return u()(t,"query.result.features.length")},totalFeatures:function(t){return u()(t,"query.result.totalFeatures")}},k=function(t,e){var r=m(e)(t);return!!(r&&r.attributes&&r.geometry&&r.original)},C=function(t){return v(t,d(t))},z=function(t){return u()(t,"query.featureLoading")},D=function(t){return u()(t,"query.syncWmsFilter",!1)},_=function(t){var e=u()(t,"query.filterObj.crossLayerFilter"),r=u()(t,"query.filterObj.spatialField"),n=u()(t,"query.filterObj.filterFields");return!!(n&&c()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(t){return t.method&&t.operation&&t.geometry}))>-1)||e&&e.collectGeometries&&e.operation)}},20729:(t,e,r)=>{(t.exports=r(9252)()).push([t.id,".msgapi .mapToolbar {\n    position: absolute;\n    bottom: 5px;\n    right: 0;\n    z-index: 1000;\n    margin-bottom: 35px;\n    margin-right: 5px;\n}\n\n.msgapi .toolbarexpand-enter {\n  opacity: 0.01;\n}\n\n.msgapi .toolbarexpand-enter.toolbarexpand-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in;\n}\n\n.msgapi .toolbarexpand-leave {\n  opacity: 1;\n}\n\n.msgapi .toolbarexpand-leave.toolbarexpand-leave-active {\n  opacity: 0.01;\n  transition: opacity 300ms ease-in;\n}\n\n.msgapi #navigationBar .toolbar-panel {\n    bottom: 80px !important;\n}\n\n.msgapi #identifyBar .mapToolbar {\n    top: auto !important;\n    bottom: 5px;\n    right: 212px !important;\n}\n",""])},87157:(t,e,r)=>{var n=r(40554),o=r(88958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},19873:(t,e,r)=>{var n=r(87157),o=r(16612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},88958:(t,e,r)=>{var n=r(29750),o=r(40554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},64317:(t,e,r)=>{"use strict";var n=i(r(1174)),o=i(r(92381));function i(t){return t&&t.__esModule?t:{default:t}}t.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}},50329:(t,e,r)=>{var n=r(20729);"string"==typeof n&&(n=[[t.id,n,""]]),r(14246)(n,{}),n.locals&&(t.exports=n.locals)}}]);