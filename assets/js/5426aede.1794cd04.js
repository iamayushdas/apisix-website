(self.webpackChunk=self.webpackChunk||[]).push([[21584],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,h=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89782:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={title:"Traffic Split in Apache APISIX Ingress Controller",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?s=460&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4"},i={permalink:"/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller",source:"@site/blog/2021-03-27-traffic-split-in-apache-apisix-ingress-controller.md",title:"Traffic Split in Apache APISIX Ingress Controller",description:"@tokers, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-03-27T00:00:00.000Z",formattedDate:"March 27, 2021",tags:[],readingTime:4.595,truncated:!0,prevItem:{title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03"},nextItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/blog/2021/03/02/get-front-end-test-coverage-with-cypress"}},p=[],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX Committer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}u.isMDXComponent=!0}}]);