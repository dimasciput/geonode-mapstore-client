(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8618],{82385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>c,Cp:()=>a});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",c=function(e,t){return{type:r,owner:e,map:t}},a=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>c,AQ:()=>a,Gl:()=>l,wd:()=>s,V9:()=>u,ih:()=>f,B8:()=>p,ww:()=>d,HP:()=>m,ri:()=>y,gd:()=>b,nr:()=>g,ty:()=>v,GZ:()=>E,O6:()=>h,Vt:()=>O,Ug:()=>I,Ke:()=>C,Cp:()=>D,pW:()=>w,Gr:()=>S,gG:()=>T,oo:()=>j,Gh:()=>P,$G:()=>_,I5:()=>A,d8:()=>R,y5:()=>M,Az:()=>k,$Z:()=>N,Ql:()=>B,Ul:()=>Z,TU:()=>G,E0:()=>x,Yt:()=>L});var r=n(13218),o=n.n(r),i=n(27693),c="MEDIA_EDITOR:ADDING_MEDIA",a="MEDIA_EDITOR:CHOOSE_MEDIA",l="MEDIA_EDITOR:EDITING_MEDIA",s="GEOSTORY:EDIT_MEDIA",u="MEDIA_EDITOR:LOAD_MEDIA",f="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",p="MEDIA_EDITOR:HIDE",d="MEDIA_EDITOR:SAVE_MEDIA",m="MEDIA_EDITOR:SET_MEDIA_TYPE",y="MEDIA_EDITOR:SET_MEDIA_SERVICE",b="MEDIA_EDITOR:SELECT_ITEM",g="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",E="MEDIA_EDITOR:IMPORT_IN_LOCAL",h="MEDIA_EDITOR:REMOVE_MEDIA",O="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",I="MEDIA_EDITOR:LOADING_MEDIA_LIST",C=function(e){return{type:a,resource:e}},D=function(){return{type:p}},w=function(e,t,n){return{type:u,params:e,mediaType:t,sourceId:n}},S=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:f,mediaType:t,sourceId:n,params:r,resultData:o}},T=function(e){var t=e.type,n=e.source,r=e.data;return{type:d,mediaType:t,source:n,data:r}},j=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},P=function(e){return{type:b,id:e}},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge";return{type:v,item:e,mode:t}},A=function(e){return{type:c,adding:e}},R=function(e){return{type:y,id:o()(e)?e.value:e}},M=function(e){return{type:m,mediaType:e}},k=function(e){return{type:l,editing:e}},N=function(e,t){return{type:g,owner:e,settings:t}},B=function(e){var t=e.path,n=e.owner;return{type:s,path:t,owner:void 0===n?"geostory":n}},Z=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:E,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory";return{type:h,mediaType:e,owner:t}},x=function(e){return{type:O,loading:e}},L=function(){return{type:I}}},52826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(24852),o=n.n(r),i=n(70390),c=n(32425),a=n(80628),l=n(30294),s=n(92579),u=n(5346);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=(0,a.Z)((function(e){var t=e.src,n=e.width,a=e.height,s=e.resolution,f=e.thumbnail,d=e.controls,y=e.play,b=e.onPlay,g=void 0===b?function(){}:b,v=e.onStart,E=void 0===v?function(){}:v,h=e.fit,O=e.loop,I=e.volume,C=void 0===I?1:I,D=e.muted,w=y,S=m((0,r.useState)(w),2),T=S[0],j=S[1],P=m((0,r.useState)(),2),_=P[0],A=P[1],R=m((0,r.useState)(y),2),M=R[0],k=R[1],N="cover"===h,B=m((0,r.useState)(!1),2),Z=B[0],G=B[1];(0,r.useEffect)((function(){!T&&w&&(j(!0),k(!0)),T&&E(T)}),[T,w]);var x,L=(x=n/a,N?x<s?[a*s,a]:[n,n/s]:"contain"===h?x<s?[n,n/s]:[a*s,a]:[n,n/s]),V="contain"===h||N?a:L[1],H=!N&&d,Y=!!N||O;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:V,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,T&&o().createElement(i.ZP,{url:t,width:L[0],height:L[1],playing:w,loop:Y,volume:C,muted:D,style:N?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:H,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:H?2:0,modestbranding:1,rel:0}},onReady:function(){return k(!1)},onError:function(e){A(e),(""+e).includes("NotAllowedError")&&(g(!1),G(!0),k(!1))},onPause:function(){g(!1)},onPlay:function(){g(!0),Z&&(A(!1),G(!1))}}),(!T||T&&(M||_))&&o().createElement("div",{className:"ms-video-cover",style:p(p({position:"absolute",width:L[0],height:L[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(M||_)&&{cursor:"pointer"}),!w&&f&&{backgroundImage:"url(".concat(f,")"),backgroundSize:N?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){Z?(G(!1),A(!1)):k(!0),j(!0),g(!0)}},M&&o().createElement(c.Z,{size:70}),_&&!Z&&o().createElement("div",{className:"text-center"},o().createElement(l.Glyphicon,{glyph:"alert",style:{fontSize:L[1]/4>100?100:L[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(u.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(M||_)&&!w||_&&Z)&&o().createElement(l.Glyphicon,{glyph:"play",style:{fontSize:L[1]/4>100?100:L[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!H&&!Z&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:L[0],height:L[1]}}))}));const g=function(e){var t=e.id,n=e.src,i=e.resolution,c=void 0===i?16/9:i,a=e.autoplay,l=e.inView,u=e.description,f=e.showCaption,p=e.caption,d=void 0===p?u:p,y=e.thumbnail,g=e.credits,v=e.controls,E=void 0===v||v,h=e.fit,O=e.loop,I=e.muted,C=e.onPlay,D=void 0===C?function(){}:C,w=e.mode,S=e.containerInView,T=(void 0===S||S)&&l,j=m((0,r.useState)(!1),2),P=j[0],_=j[1],A=function(e){_(e),D(e)};return(0,r.useEffect)((function(){w===s.nl.EDIT&&A(!1)}),[w]),(0,r.useEffect)((function(){w===s.nl.VIEW&&T&&(a||"cover"===h)&&A(!0)}),[T,a,h,w]),(0,r.useEffect)((function(){w===s.nl.VIEW&&!T&&P&&A(!1)}),[T,P,w]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(h,"-").concat(w),className:"ms-media ms-media-video"},o().createElement(b,{src:n,play:P&&w===s.nl.VIEW,resolution:c,thumbnail:y,controls:E&&w===s.nl.VIEW,onPlay:A,fit:h,loop:O,muted:I}),g&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,g)),f&&d&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,d)))}},7848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(71703),o=n(22222),i=n(93152);const c=(0,r.connect)((0,o.P1)(i.$v,(function(e){return{mapType:e}})))},19983:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),i=n(45697),c=n.n(i),a=n(52259);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return function(t){var n,i,c,l,u,f,p,d=(null==t||null===(n=t.map)||void 0===n?void 0:n.projection)||"EPSG:3857",m=(null==t||null===(i=t.map)||void 0===i||null===(c=i.mapOptions)||void 0===c||null===(l=c.view)||void 0===l?void 0:l.DPI)||null,y=null==t||null===(u=t.map)||void 0===u||null===(f=u.mapOptions)||void 0===f||null===(p=f.view)||void 0===p?void 0:p.scales,b=(0,r.useMemo)((function(){return y?(0,a.getResolutionsForScales)(y,d,m):null}),[y,d,m]),g=b?s(s({},t),{},{map:s(s({},t.map),{},{mapOptions:s(s({},t.map.mapOptions),{},{view:s(s({},t.map.mapOptions.view),{},{resolutions:b})})})}):t;return o().createElement(e,g)}};f.propTypes={Component:c().element};const p=f},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(27418),o=n.n(r),i=n(45697),c=n.n(i),a=n(24852),l=n.n(a),s=n(80307),u=n.n(s),f=n(30294),p=n(38560),d=n(5346),m=n(7472);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(i){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(){var e;b(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return I(h(e=c.call.apply(c,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&u().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return l().createElement(m.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},l().createElement("span",{role:"header"},l().createElement("span",{className:"user-panel-title"},this.props.title),l().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?l().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):l().createElement("span",null,"×"))),l().createElement("div",{role:"body"},this.props.children),l().createElement("div",{role:"footer"},l().createElement(f.ButtonGroup,null,l().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),l().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&g(t.prototype,n),a}(l().Component);I(C,"propTypes",{show:c().bool,draggable:c().bool,onClose:c().func,onConfirm:c().func,onSave:c().func,modal:c().bool,closeGlyph:c().string,style:c().object,buttonSize:c().string,inputStyle:c().object,title:c().node,confirmButtonContent:c().node,confirmButtonDisabled:c().bool,closeText:c().node,confirmButtonBSStyle:c().string,focusConfirm:c().bool}),I(C,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:l().createElement(d.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:l().createElement(d.Z,{msgId:"confirm"})||"Confirm",closeText:l().createElement(d.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const D=C},7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(27418),o=n.n(r),i=n(45697),c=n.n(i),a=n(24852),l=n.n(a),s=n(85294),u=n.n(s),f=n(72986),p=n.n(f),d=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(i){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(){var e;g(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(O(e=c.call.apply(c,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(d.Z,{msgId:"loading"}),l().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(O(e),"renderRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(O(e),"hasRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(O(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this,t=l().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),n=this.props.draggable?l().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&v(t.prototype,n),a}(l().Component);C(D,"propTypes",{id:c().string.isRequired,style:c().object,backgroundStyle:c().object,className:c().string,maskLoading:c().bool,containerClassName:c().string,headerClassName:c().string,bodyClassName:c().string,footerClassName:c().string,onClickOut:c().func,modal:c().bool,start:c().object,draggable:c().bool,bounds:c().oneOfType([c().string,c().object])}),C(D,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const w=D},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(56936);const i=(0,r.Z)(o.h_)},12122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),i=n(1262),c=n(99534),a=n(5346),l=n(67076),s=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];var u=(0,l.compose)((0,l.withProps)((function(e){var t=e.setConfirming;return{onClose:function(){return t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,n=void 0===t?o().createElement(a.Z,{msgId:"yes"}):t,r=e.confirmNo,l=void 0===r?o().createElement(a.Z,{msgId:"no"}):r,s=e.confirmTitle,u=void 0===s?o().createElement(a.Z,{msgId:"confirm"}):s,f=e.confirmContent,p=e.confirmButtonBSStyle,d=void 0===p?"primary":p,m=e.show,y=void 0!==m&&m,b=e.confirmModal,g=void 0===b||b,v=e.draggable,E=void 0!==v&&v,h=e.onClose,O=void 0===h?function(){}:h,I=e.onConfirm,C=void 0===I?function(){}:I;return y?o().createElement(c.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:E,show:y,modal:g,onClose:O,onConfirm:C,title:u,confirmButtonContent:n,closeText:l,confirmButtonBSStyle:d,closeGlyph:"1-close"},f))):null})),f=function(e){return function(t){var n=t.confirming,r=t.confirmYes,i=t.confirmNo,c=t.confirmTitle,a=t.confirmContent,l=t.confirmModal,f=t.draggable,p=t.onConfirm,d=t.setConfirming,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,s);return o().createElement(o().Fragment,null,o().createElement(u,{show:n,setConfirming:d,confirmYes:r,confirmNo:i,confirmTitle:c,confirmContent:a,confirmModal:l,draggable:f,onConfirm:p}),o().createElement(e,m))}};const p=function(e){return(0,l.compose)((0,l.withState)("confirming","setConfirming",!1),(0,l.withHandlers)({onClick:function(e){var t=e.setConfirming,n=void 0===t?function(){}:t,r=e.onClick,o=void 0===r?function(){}:r,i=e.confirmPredicate,c=void 0===i||i;return function(){c?n(!0):o.apply(void 0,arguments)}},onConfirm:function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),f)(e)}},93152:(e,t,n)=>{"use strict";n.d(t,{$v:()=>i,c0:()=>c,m6:()=>a,tH:()=>l});var r=n(27361),o=n.n(r),i=function(e){return e&&e.maptype&&e.maptype.mapType||"leaflet"},c=function(e){return"cesium"===i(e)},a=function(e){return"openlayers"===i(e)},l=function(e){return o()(e,"maptype.last2dMapType")||"leaflet"}},7501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>l,cM:()=>s,Qi:()=>u,TU:()=>f,IQ:()=>p,hb:()=>d,HL:()=>m,dq:()=>y,Iy:()=>b,Qd:()=>g,ER:()=>v,Gi:()=>E,mA:()=>h,jR:()=>O,mD:()=>I,XG:()=>C,B6:()=>D});var r=n(27361),o=n.n(r),i=n(13311),c=n.n(i),a=n(22222),l=function(e){return o()(e,"mediaEditor.open")},s=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},u=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},f=function(e){return o()(e,"mediaEditor.saveState")},p=function(e){return o()(e,"mediaEditor.settings.sourceId")},d=function(e){return o()(e,"mediaEditor.settings.mediaType")},m=function(e){return o()(e,"mediaEditor.settings.sources")},y=function(e){return o()(m(e),p(e),{})},b=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(d(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(m(e),"".concat(n),{})})(e).name};var n}))},g=function(e){return o()(e,'mediaEditor.data["'.concat(d(e),'"]["').concat(p(e),'"].resultData'))},v=function(e){return o()(e,'mediaEditor.data["'.concat(d(e),'"]["').concat(p(e),'"].params'))},E=function(e){return o()(g(e),"resources")},h=function(e){return o()(g(e),"totalCount")},O=function(e){return o()(e,"mediaEditor.selected")},I=function(e){return o()(e,"mediaEditor.loadingSelected")},C=function(e){return o()(e,"mediaEditor.loadingList")},D=(0,a.P1)(E,O,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return c()(e,{id:t})}))},27693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);