(self.webpackChunk=self.webpackChunk||[]).push([[58854],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,I=s["".concat(p,".").concat(f)]||s[f]||h[f]||o;return n?r.createElement(I,c(c({ref:t},u),{},{components:n})):r.createElement(I,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39751:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),c={title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",author:"tokers",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"},i={permalink:"/zh/blog/2021/05/31/\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",source:"@site/blog/2021-05-31-\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90.md",title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",description:"@tokers, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2021-05-31T00:00:00.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:.6,truncated:!0,prevItem:{title:"Apache APISIX not affected by NGINX CVE-2021-23017",permalink:"/zh/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017"},nextItem:{title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03"}},p=[{value:"\u4ec0\u4e48\u662f\u670d\u52a1\u7f51\u683c",id:"\u4ec0\u4e48\u662f\u670d\u52a1\u7f51\u683c",children:[]},{value:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u670d\u52a1\u7f51\u683c",id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u670d\u52a1\u7f51\u683c",children:[{value:"\u6848\u4f8b\u4e00",id:"\u6848\u4f8b\u4e00",children:[]},{value:"\u6848\u4f8b\u4e8c",id:"\u6848\u4f8b\u4e8c",children:[]}]},{value:"\u4f7f\u7528 Apache APISIX \u642d\u5efa\u670d\u52a1\u7f51\u683c",id:"\u4f7f\u7528-apache-apisix-\u642d\u5efa\u670d\u52a1\u7f51\u683c",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]},{value:"\u6587\u6863\u66f4\u65b0",id:"\u6587\u6863\u66f4\u65b0",children:[]}],l={toc:p};function u(e){var t=e.components,c=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX PMC from ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,o.kt)("p",null,"\u57fa\u4e8e Apache APISIX \u5f00\u53d1\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u670d\u52a1\u7f51\u683c"},"\u4ec0\u4e48\u662f\u670d\u52a1\u7f51\u683c"),(0,o.kt)("p",null,"\u670d\u52a1\u7f51\u683c\uff08Service Mesh\uff09\uff0c\u4f5c\u4e3a\u670d\u52a1\u95f4\u901a\u4fe1\u7684\u4e2d\u95f4\u5c42\uff0c\u5c06\u8bf8\u5982\u670d\u52a1\u53d1\u73b0\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u7194\u65ad\u3001\u9650\u6d41\u3001\u91cd\u8bd5\u7b49\u7684\u57fa\u7840\u529f\u80fd\uff0c\u4e0b\u6c89\u5230\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u8fb9\u8f66\uff08Sidecar\uff09\u7ec4\u4ef6\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u805a\u7126\u4e8e\u5e94\u7528\u672c\u8eab\u7684\u5f00\u53d1\uff0c\u4e0d\u9700\u8981\u5173\u6ce8\u8fd9\u7c7b\u57fa\u7840\u529f\u80fd\uff0c\u4ece\u800c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u670d\u52a1\u7f51\u683c"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u670d\u52a1\u7f51\u683c"),(0,o.kt)("h3",{id:"\u6848\u4f8b\u4e00"},"\u6848\u4f8b\u4e00"),(0,o.kt)("p",null,"A \u516c\u53f8\u5fae\u670d\u52a1\u7684\u6280\u672f\u6808\u6d89\u53ca Go\u3001Java \u548c C++ \u7b49\u4e0d\u540c\u8bed\u8a00\uff0c\u540c\u65f6\u4e3a\u6bcf\u79cd\u5f00\u53d1\u8bed\u8a00\u8bbe\u8ba1\u4e86\u57fa\u7840\u6846\u67b6\uff0c\u4ee5\u5b8c\u6210\u670d\u52a1\u6cbb\u7406\u7684\u529f\u80fd\uff0c\u7136\u800c\u6bcf\u6b21\u6846\u67b6\u7684\u66f4\u65b0\u90fd\u9700\u8981\u8986\u76d6\u5404\u8bed\u8a00\u7684\u7248\u672c\u4ee5\u53ca\u8054\u7cfb\u6240\u6709\u4e1a\u52a1\u5f00\u53d1\u56e2\u961f\u8fdb\u884c\u66f4\u65b0\u3002\u5e76\u4e14\u4e0d\u540c\u8bed\u8a00\u7684\u6846\u67b6\u7531\u4e0d\u540c\u56e2\u961f\u7ef4\u62a4\uff0c\u5bfc\u81f4\u6c9f\u901a\u6210\u672c\u9ad8\u6602\u4e14\u5bb9\u6613\u51fa\u73b0\u4e0d\u517c\u5bb9\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u56e0\u800c A \u516c\u53f8\u7684\u67b6\u6784\u5e08\u51b3\u5b9a\u5f15\u5165\u670d\u52a1\u7f51\u683c\u65b9\u6848\uff0c\u5c06\u6240\u6709\u670d\u52a1\u6cbb\u7406\u7684\u80fd\u529b\u4e0b\u6c89\u5230\u7f51\u683c\uff0c\u57fa\u7840\u529f\u80fd\u8fed\u4ee3\u4e0d\u518d\u4e0e\u4e1a\u52a1\u5f00\u53d1\u8026\u5408\uff0c\u540c\u65f6\u4e1a\u52a1\u5f00\u53d1\u4e0d\u518d\u4f9d\u8d56\u5f00\u53d1\u6846\u67b6\uff0c\u4e1a\u52a1\u672c\u8eab\u66f4\u52a0\u7b80\u6d01\u3002"),(0,o.kt)("h3",{id:"\u6848\u4f8b\u4e8c"},"\u6848\u4f8b\u4e8c"),(0,o.kt)("p",null,"B \u516c\u53f8\u73b0\u6709\u7684\u670d\u52a1\u6cbb\u7406\u6846\u67b6\u529f\u80fd\u843d\u540e\uff0c\u5e74\u4e45\u5931\u4fee\uff0c\u56e0\u4e1a\u52a1\u53d1\u5c55\u53ca\u5408\u89c4\u6027\u7b49\u539f\u56e0\uff0c\u73b0\u5728\u9700\u8981\u5b9e\u73b0\u534f\u8bae\u8f6c\u6362\u548c\u53cc\u5411\u8ba4\u8bc1\uff0c\u6280\u672f\u8d1f\u8d23\u4eba\u8c03\u7814\u4ee5\u540e\u51b3\u5b9a\u5f15\u5165\u670d\u52a1\u7f51\u683c\u65b9\u6848\uff0c\u501f\u52a9\u7f51\u683c\u7684\u80fd\u529b\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff0c\u540c\u65f6\u6446\u8131\u73b0\u6709\u670d\u52a1\u6cbb\u7406\u6846\u67b6\u7684\u5386\u53f2\u503a\uff0c\u4f7f\u5f97\u6240\u6709\u5e94\u7528\u53d8\u5f97\u66f4\u52a0\u7a33\u5b9a\u548c\u8f7b\u91cf\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-apache-apisix-\u642d\u5efa\u670d\u52a1\u7f51\u683c"},"\u4f7f\u7528 Apache APISIX \u642d\u5efa\u670d\u52a1\u7f51\u683c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2021-05-31-1",src:n(4053).Z})),(0,o.kt)("p",null,"\u9274\u4e8e Apache APISIX \u7684\u4f18\u79c0\u8bbe\u8ba1\uff0c\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u5c06 Apache APISIX \u7528\u4e8e\u5357\u5317\u5411\u6d41\u91cf\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u7528\u5b83\u7ba1\u7406\u670d\u52a1\u7f51\u683c\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u6211\u4eec\u901a\u8fc7\u5f15\u5165 APISIX-Mesh-Agent \u8fd9\u4e00\u7ec4\u4ef6\uff0c\u914d\u5408 Apache APISIX \u8fdb\u884c\u4f7f\u7528\uff0c\u4ece\u800c\u4f7f\u5f97 Apache APISIX \u53ef\u4ee5\u5bf9\u63a5\u4e1a\u5185\u5e7f\u6cdb\u4f7f\u7528\u7684\u670d\u52a1\u7f51\u683c\u63a7\u5236\u9762\uff0c\u4f8b\u5982\uff1a Istio \u548c Kuma \u7b49\u3002"),(0,o.kt)("p",null,"APISIX-Mesh-Agent \u4f5c\u4e3a Apache APISIX \u7684\u534f\u8bae\u9002\u914d\u5668\uff0c\u5b9e\u73b0\u4e86 Envoy xDS \u534f\u8bae\uff0c\u5c06\u6570\u636e\u4ece xDS \u683c\u5f0f\u8f6c\u6362\u4e3a Apache APISIX \u517c\u5bb9\u7684\u683c\u5f0f\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u5176\u5b9e\u73b0\u4e86 ETCD V3 API \u4f7f\u5f97\u5728 Apache APISIX \u770b\u6765\uff0c\u5b83\u5c31\u662f\u4e00\u4e2a ETCD \u96c6\u7fa4\uff0c\u7531\u4e8e Apache APISIX \u5bf9 ETCD \u7684\u539f\u751f\u652f\u6301, \u914d\u7f6e\u5373\u53ef\u987a\u5229\u5730\u4ece\u67d0\u4e2a\u670d\u52a1\u7f51\u683c\u63a7\u5236\u9762\u4e0b\u53d1\u5230 Apache APISIX \u3002"),(0,o.kt)("p",null,"\u5f97\u76ca\u4e8e Apache APISIX \u7684\u826f\u597d\u8bbe\u8ba1\uff0c\u57fa\u4e8e Apache APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848\u6027\u80fd\u66f4\u4f73\u3001\u8d44\u6e90\u5360\u7528\u66f4\u5c11\u3001\u4e8c\u6b21\u5f00\u53d1\u548c\u5b9a\u5236\u7684\u6210\u672c\u66f4\u4f4e\uff08Lua \u8bed\u8a00\u4e0a\u624b\u5bb9\u6613\uff0c\u4e14 Apache APISIX \u5df2\u7ecf\u652f\u6301\u4f7f\u7528\u591a\u8bed\u8a00\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\uff09\uff0c\u5e76\u4e14\u7531\u4e8e\u517c\u5bb9 xDS \u534f\u8bae\uff0c\u4ece Istio\u3001Kuma \u7b49\u7f51\u683c\u65b9\u6848\u8fdb\u884c\u8fc1\u79fb\u4e5f\u66f4\u52a0\u5e73\u6ed1\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4e0b\u8f7d APISIX-Mesh-Agent 0.6-Release \u6e90\u4ee3\u7801\u53ca\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff0c\u8bf7\u8bbf\u95ee\u4e0b\u8f7d\u9875\u9762\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/api7/apisix-mesh-agent/releases/tag/0.6")),(0,o.kt)("h2",{id:"\u6587\u6863\u66f4\u65b0"},"\u6587\u6863\u66f4\u65b0"),(0,o.kt)("p",null,"\u5728\u672c\u6b21\u53d1\u5e03\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u5728\u6301\u7eed\u66f4\u65b0\u548c\u53d1\u5e03\u65b0\u7684\u4f7f\u7528\u6587\u6863\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u51fa\u5b9d\u8d35\u7684\u610f\u89c1\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/api7/apisix-mesh-agent/tree/main/docs")))}u.isMDXComponent=!0},4053:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-05-31-1-9692f5796757d6f45a0fa0d66629ef40.png"}}]);