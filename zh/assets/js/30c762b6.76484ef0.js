(self.webpackChunk=self.webpackChunk||[]).push([[34979],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},97641:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={title:"Apache APISIX not affected by NGINX CVE-2021-23017",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"},i={permalink:"/zh/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017",source:"@site/blog/2021-06-07-Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017.md",title:"Apache APISIX not affected by NGINX CVE-2021-23017",description:"@Serendipity96, Apache APISIX contributor from Shenzhen Zhiliu Technology Co.",date:"2021-06-07T00:00:00.000Z",formattedDate:"June 7, 2021",tags:[],readingTime:1.545,truncated:!0,nextItem:{title:"Traffic Split in Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller"}},p=[],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Serendipity96"},"@Serendipity96"),", Apache APISIX contributor from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}l.isMDXComponent=!0}}]);