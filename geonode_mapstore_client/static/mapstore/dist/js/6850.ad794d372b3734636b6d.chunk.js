(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6850],{86850:(e,t,r)=>{"use strict";r.d(t,{Mc:()=>M,v$:()=>T,ED:()=>W});var n=r(8575),o=r(84596),a=r.n(o),c=r(14293),s=r.n(c),i=r(13218),u=r.n(i),l=r(89255),p=r(5055),f=r(7526),y=r(75875),m=r.n(y),g=r(47805),b=r(24262),d=r(10284),h=r(39156),v=["totalFeatures","features"],w=["sortOptions","propertyName"];function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function F(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=r.n(h)()({wfsVersion:"1.1.0"}),C=A.getFeature,q=A.query,B=A.sortBy,D=A.propertyName,E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.totalFeatures,r=e.features,n=F(e,v),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.startIndex,c=arguments.length>2?arguments[2]:void 0;return c>t&&c===a+r.length&&t===r.length?P(P({},n),{},{features:r,totalFeatures:c}):P(P({},n),{},{features:r,totalFeatures:t})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.pagination||!s()(t.startIndex)&&!s()(t.maxFeatures)&&{startIndex:t.startIndex,maxFeatures:t.maxFeatures}},k=function(e){return{crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::4326"}},numberMatched:e.length,numberReturned:e.length,timeStamp:"2020-07-20T11:36:20.118Z",totalFeatures:e.length,type:"FeatureCollection",features:e}},G=function(e,t){if(t.filterFields&&0!==t.filterFields.length){var r=e.features.filter((0,g.createFeatureFilter)(t));e.features=r,e.numberMatched=r.length,e.numberReturned=r.length,e.totalFeatures=r.length}return t.sortOptions&&t.sortOptions.sortBy&&t.sortOptions.sortOrder&&"NONE"!==t.sortOptions.sortOrder&&e.features.sort((function(e,r){var n=e.properties[t.sortOptions.sortBy],o=r.properties[t.sortOptions.sortBy],a=n.toLowerCase().localeCompare(o.toLowerCase());return"ASC"===t.sortOptions.sortOrder?a:-1*a})),e},L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,g.getWFSFilterData)(t,r),a=n.parse(e,!0),c=u()(a.query)?a.query:{};c.service="WFS",c.outputFormat="json";var s=n.format({protocol:a.protocol,host:a.host,pathname:a.pathname,query:c});return r.layer&&"vector"===r.layer.type?l.Observable.defer((function(){return new Promise((function(e){var n=k(r.layer.features);e(G(n,t))}))})):l.Observable.defer((function(){return m().post(s,o,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}})})).let(d.oB).map((function(e){return E(e.data,I(t,r),r.totalFeatures)}))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.search,r=void 0===t?{}:t,n=e.url,o=e.name,c=arguments.length>1?arguments[1]:void 0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=s.sortOptions,u=s.propertyName,l=F(s,w);return L(r.url||n,c&&"object"===S(c)?P(P({},c),{},{typeName:o||c.typeName}):C(q(o,[].concat(O(i?[B(i.sortBy,i.sortOrder)]:[]),O(u?[D(u)]:[]),O(c?a()(c):[]))),l),l).catch((function(e){if("OGCError"===e.name&&"NoApplicableCode"===e.code&&!i&&u&&u[0])return L(r.url||n,c&&"object"===S(c)?P(P({},c),{},{typeName:o||c.typeName}):C(q(o,[B(u[0])].concat(O(u?[D(u)]:[]),O(c?a()(c):[]))),l),l);throw e}))},T=function(e){var t=e.layer;return l.Observable.defer((function(){return m().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,o=void 0===r?{}:r,a=e.url,c=e.describeFeatureTypeURL,s=n.parse(c||o.url||a,!0);return n.format(P(P({},s),{},{search:void 0,query:P(P({},s.query),{},{service:"WFS",version:"1.1.0",typeName:t,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(t))})).let(d.oB)},W=function(e){var t=e.layer;return l.Observable.defer((function(){return m().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,o=void 0===r?{}:r,a=e.url,c=(0,b.Fh)({name:t,url:o&&o.url||a}),s=n.parse(c,!0);return n.format(P(P({},s),{},{search:void 0,query:P(P({},s.query),{},{service:"WFS",version:"1.1.1",request:"GetCapabilities"})}))}(t))})).let(d.oB).switchMap((function(e){return l.Observable.bindNodeCallback((function(e,t){return(0,p.parseString)(e,{tagNameProcessors:[f.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data)}))}},39156:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r(2245),s=r(84596),i=r(78889).wfsToGmlVersion,u=function(e){return'service="WFS" version="'+e+'" '+("1.0.0"===e?'outputFormat="GML2" ':"")+'xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs '+"http://schemas.opengis.net/wfs/".concat(e,"1.0.0"===e?'/WFS-basic.xsd"':'/wfs.xsd"')},l=function(e){return'service="WFS" version="'+e+'" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd"'};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.wfsVersion,r=void 0===t?"1.1.0":t,n=e.gmlVersion,a=e.filterNS,p=e.wfsNS,f=void 0===p?"wfs":p,y=n;!y&&r?y=i(r):y||(y="3.1.1");var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.viewParams,n=e.resultType,o=e.outputFormat,a=e.startIndex,c=e.maxFeatures,s=function(e){return 0===r.indexOf("2.")?'count="'.concat(e,'"'):'maxFeatures="'.concat(e,'"')};return(0===r.indexOf("1.")?u(r):l(r))+(n?' resultType="'.concat(n,'"'):"")+(o?' outputFormat="'.concat(o,'"'):"")+(a||0===a?' startIndex="'.concat(a,'"'):"")+(c||0===c?" ".concat(s(c)):"")+(t?' viewParams="'.concat(t,'"'):"")},g=function(e){return s(e).map((function(e){return"<".concat("2.0"===r?"fes":"ogc",":PropertyName>").concat(e,"</").concat("2.0"===r?"fes":"ogc",":PropertyName>")})).join("")};return o(o({propertyName:g},c({gmlVersion:y,wfsVersion:r,filterNS:a||"2.0"===r?"fes":"ogc"})),{},{getFeature:function(e,t){return"<".concat(f,":GetFeature ").concat(m(t),">").concat(Array.isArray(e)?e.join(""):e,"</").concat(f,":GetFeature>")},sortBy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC";return"<".concat(f,":SortBy><").concat(f,":SortProperty>").concat(g(e),"<").concat(f,":SortOrder>").concat(t,"</").concat(f,":SortOrder></").concat(f,":SortProperty></").concat(f,":SortBy>")},query:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.srsName,a=void 0===o?"EPSG:4326":o;return"<".concat(f,":Query ").concat("2.0"===r?"typeNames":"typeName",'="').concat(e,'" srsName="').concat(a,'">')+"".concat(Array.isArray(t)?t.join(""):t)+"</".concat(f,":Query>")}})}}}]);