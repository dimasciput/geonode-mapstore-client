(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4440],{7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(27418),o=r.n(n),i=r(45697),l=r.n(i),a=r(24852),c=r.n(a),s=r(85294),u=r.n(s),p=r(72986),f=r.n(p),d=r(5346);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function O(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,r,n,i,l=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(i){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function a(){var e;h(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(w(e=l.call.apply(l,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(w(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(w(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=a,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:m({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(c().Component);C(j,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),C(j,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=j},99534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(61365),o=r(56936);const i=(0,n.Z)(o.h_)},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,r,n,i,l=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(i){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function a(){return c(this,a),l.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);d(b,"propTypes",{disabled:l().bool,className:l().string,checked:l().bool,onChange:l().func,onClick:l().func}),d(b,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const y=b},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),a=r(23560),c=r.n(a),s=r(24198),u=r(17621),p=r.n(u),f=r(80307),d=r(37275);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.value,r=e.format,i=e.onChangeColor,l=e.text,a=e.line,u=e.disabled,d=e.pickerProps,y=e.containerNode,h=e.onOpen,v=e.placement,O=10,w={picker:{opacity:0},arrow:{opacity:0},overlay:{}},k=g((0,n.useState)(),2),C=k[0],j=k[1],P=g((0,n.useState)(w),2),E=P[0],N=P[1],S=g((0,n.useState)(),2),R=S[0],x=S[1],_=p()(t).toString(),T=c()(y)?y():y;(0,n.useEffect)((function(){var e=C&&p()(C).toString();e&&_&&_!==e&&j(t)}),[_]),(0,n.useEffect)((function(){h(R),R||N(w)}),[R]);var A=(0,n.useRef)(),Z=(0,n.useRef)();function D(){var e,t,r,n,o,i,l;if("center"===v)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var a=null==A||null===(e=A.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),c=null==Z||null===(r=Z.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),s=null==Z||null===(o=Z.current)||void 0===o||null===(i=o.querySelector)||void 0===i?void 0:i.call(o,".ms-sketch-picker"),u=null==s||null===(l=s.getBoundingClientRect)||void 0===l?void 0:l.call(s);if(a&&c&&u){var p,f,d,b,y=u.width,m=u.height,h=c.top,g=c.left,w=c.width,k=c.height,C=a.top,j=a.left,P=a.width,E=a.height,N=[j+P/2,C+E/2],S=N[0]-g>y/2+O&&g+w-N[0]>y/2+O,R=N[1]-h>m/2+O&&h+k-N[1]>m/2+O,x={top:{filter:function(){return S&&C-h>m+O},styles:function(){return{picker:{position:"absolute",top:C-m-O-h,left:j+P/2-y/2-g},overlay:{},arrow:{top:C+2,left:j+P/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return R&&g+w-(j+P)>y+O},styles:function(){return{picker:{position:"absolute",top:C-m/2-h,left:j+P+O-g},overlay:{},arrow:{top:C+E/2,left:j+P-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return S&&h+k-(C+E)>m+O},styles:function(){return{picker:{position:"absolute",top:C+E+O-h,left:j+P/2-y/2-g},overlay:{},arrow:{top:C+E-2,left:j+P/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return R&&j-g>y+O},styles:function(){return{picker:{position:"absolute",top:C-m/2-h,left:j-y-O-g},overlay:{},arrow:{top:C+E/2,left:j+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=x&&null!==(p=x[v])&&void 0!==p&&null!==(f=p.filter)&&void 0!==f&&f.call(p))return null==x||null===(d=x[v])||void 0===d||null===(b=d.styles)||void 0===b?void 0:b.call(d);if("top"!==v&&x.top.filter())return x.top.styles();if("right"!==v&&x.right.filter())return x.right.styles();if("bottom"!==v&&x.bottom.filter())return x.bottom.styles();if("left"!==v&&x.left.filter())return x.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return N(D())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){R&&N(D())}),[R]);var I,B,L=u?" ms-disabled":"",z=o().createElement("div",{ref:Z,className:"ms-color-picker-overlay",style:m({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==E?void 0:E.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){x(!1),C&&i(r?p()(C).toString(r):C)}}),o().createElement(s.xS,b({},d,{className:"ms-sketch-picker",styles:{picker:m({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==E?void 0:E.picker)},color:p()(C||t).toRgb(),onChange:function(e){return j(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:m({position:"absolute",borderWidth:12},null==E?void 0:E.arrow)})),X=T?(0,f.createPortal)(z,T):z;return o().createElement("div",{className:"ms-color-picker".concat(L)},o().createElement("div",{className:"ms-color-picker-swatch",ref:A,style:(I=C||t||"transparent",B=p()(I).toRgbString(),a?{boxSizing:"border-box",border:"4px solid ".concat(B),backgroundColor:"transparent"}:{color:"transparent"===I?"#000000":p().mostReadable(B,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:B}),onClick:function(){u||(x(!R),C&&i(r?p()(C).toString(r):C))}},l),R?X:null)}O.propTypes={value:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,onChangeColor:l().func,text:l().string,line:l().bool,disabled:l().bool,pickerProps:l().object,containerNode:l().oneOfType([l().node,l().func]),onOpen:l().function,placement:l().string},O.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const w=O},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),a=r(30294),c=r(57037);function s(e){var t=e.color,r=e.format,n=e.line,i=e.onChangeColor,l=e.disableAlpha,s=e.containerNode,u=e.onOpen,p=e.presetColors,f=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(c.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:i,pickerProps:{disableAlpha:l,presetColors:p},containerNode:s,onOpen:u,placement:f}))}s.propTypes={color:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,line:l().bool,onChangeColor:l().func,disableAlpha:l().bool,containerNode:l().node,onOpen:l().func,presetColors:l().array,placement:l().string},s.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const u=s}}]);