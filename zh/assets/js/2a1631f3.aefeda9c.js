(self.webpackChunk=self.webpackChunk||[]).push([[65023],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||c;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51765:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return l}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),i={title:"\u538b\u529b\u6d4b\u8bd5"},s={unversionedId:"benchmark",id:"version-2.6/benchmark",isDocsHomePage:!1,title:"\u538b\u529b\u6d4b\u8bd5",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.6/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/zh/docs/apisix/2.6/benchmark",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/benchmark.md",version:"2.6",frontMatter:{title:"\u538b\u529b\u6d4b\u8bd5"},sidebar:"version-2.6/docs",previous:{title:"\u6279\u5904\u7406\u673a",permalink:"/zh/docs/apisix/2.6/batch-processor"},next:{title:"\u5b89\u88c5\u4f9d\u8d56",permalink:"/zh/docs/apisix/2.6/install-dependencies"}},o=[{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f-2-\u4e2a\u63d2\u4ef6",children:[]}],p={toc:o};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,c.kt)("p",null,"\u4f7f\u7528\u8c37\u6b4c\u4e91\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5\uff0c\u578b\u53f7\u4e3a n1-highcpu-8 (8 vCPUs, 7.2 GB memory)"),(0,c.kt)("p",null,"\u6211\u4eec\u6700\u591a\u53ea\u4f7f\u7528 4 \u6838\u53bb\u8fd0\u884c APISIX, \u5269\u4e0b\u7684 4 \u6838\u7528\u4e8e\u7cfb\u7edf\u548c\u538b\u529b\u6d4b\u8bd5\u5de5\u5177 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk"},"wrk"),"\u3002"),(0,c.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"),(0,c.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u4e0d\u5f00\u542f\u4efb\u4f55\u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,c.kt)("h4",{id:"qps"},"QPS"),(0,c.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/benchmark-1.jpg",alt:"benchmark-1"})),(0,c.kt)("h4",{id:"\u5ef6\u65f6"},"\u5ef6\u65f6"),(0,c.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,c.kt)("strong",{parentName:"p"},"\u5fae\u79d2(\u03bcs)"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/latency-1.jpg",alt:"latency-1"})),(0,c.kt)("h4",{id:"\u706b\u7130\u56fe"},"\u706b\u7130\u56fe"),(0,c.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c:"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flamegraph-1.jpg",alt:"flamegraph-1"})),(0,c.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f-2-\u4e2a\u63d2\u4ef6"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6"),(0,c.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u5f00\u542f\u9650\u901f\u548c prometheus \u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,c.kt)("h4",{id:"qps-1"},"QPS"),(0,c.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/benchmark-2.jpg",alt:"benchmark-2"})),(0,c.kt)("h4",{id:"latency"},"Latency"),(0,c.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,c.kt)("strong",{parentName:"p"},"\u5fae\u79d2(\u03bcs)"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/latency-2.jpg",alt:"latency-2"})),(0,c.kt)("h4",{id:"\u706b\u7130\u56fe-1"},"\u706b\u7130\u56fe"),(0,c.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c:\n",(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flamegraph-2.jpg",alt:"\u706b\u7130\u56fe\u91c7\u6837\u7ed3\u679c"})))}l.isMDXComponent=!0}}]);