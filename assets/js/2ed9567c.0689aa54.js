(self.webpackChunk=self.webpackChunk||[]).push([[45186],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22938:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03",author:"spacewander",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"},o={permalink:"/blog/2021/06/29/release-apache-apisix-2.7",source:"@site/blog/2021-06-29-release-apache-apisix-2.7.md",title:"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03",description:"@spacewander, Core developer of Apache APISIX from Shenzhen Zhiliu Technology Co.",date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[],readingTime:.63,truncated:!0,prevItem:{title:"Release Apache APISIX 2.7.0",permalink:"/blog/2021/06/29/release-apache-apisix-2.7-en"},nextItem:{title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"}},p=[{value:"Release Notes",id:"release-notes",children:[{value:"\u591a\u8bed\u8a00\u63d2\u4ef6",id:"\u591a\u8bed\u8a00\u63d2\u4ef6",children:[]},{value:"\u589e\u5f3a\u56db\u5c42 TCP \u4ee3\u7406",id:"\u589e\u5f3a\u56db\u5c42-tcp-\u4ee3\u7406",children:[]},{value:"\u589e\u5f3a Nginx \u529f\u80fd",id:"\u589e\u5f3a-nginx-\u529f\u80fd",children:[]}]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"@spacewander"),", Core developer of Apache APISIX from ",(0,l.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,l.kt)("p",null,"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u652f\u6301\u4e86\u591a\u8bed\u8a00\u63d2\u4ef6\u3001\u589e\u5f3a\u4e86\u56db\u5c42 TCP \u4ee3\u7406\u3001\u589e\u5f3a\u4e86 Nginx \u529f\u80fd\uff0c\u6709 20+ \u5f00\u53d1\u8005\u53c2\u4e0e\uff0c\u5171\u63d0\u4ea4\u4e86 70+ PR\uff0c\u4e0b\u9762\u662f\u91cd\u70b9\u529f\u80fd\u7684\u4ecb\u7ecd\u3002"),(0,l.kt)("h2",{id:"release-notes"},"Release Notes"),(0,l.kt)("h3",{id:"\u591a\u8bed\u8a00\u63d2\u4ef6"},"\u591a\u8bed\u8a00\u63d2\u4ef6"),(0,l.kt)("p",null,"\u968f\u7740 apisix-java-plugin-runner \u53d1\u5e03\u7b2c\u4e00\u4e2a\u7248\u672c\uff0c\u5916\u52a0 apisix-go-plugin-runner \u5b8c\u6210\u4e3b\u4f53\u529f\u80fd\uff0cAPISIX \u7684\u591a\u8bed\u8a00\u63d2\u4ef6\u529f\u80fd\u5df2\u7ecf\u652f\u6301\u4e24\u5927\u6700\u5e7f\u6cdb\u4f7f\u7528\u7684\u540e\u7aef\u7f16\u7a0b\u8bed\u8a00\u3002\u5982\u679c\u4f60\u8fd8\u62c5\u5fe7 APISIX \u7684\u63d2\u4ef6\u5f00\u53d1\u4f1a\u53d7\u9650\u4e8e Lua \u751f\u6001\uff0c\u4e0d\u59a8\u8bd5\u8bd5\u4f7f\u7528\u6211\u4eec\u7684\u591a\u8bed\u8a00 plugin runner \u6765\u5f00\u53d1 Java / Go \u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u589e\u5f3a\u56db\u5c42-tcp-\u4ee3\u7406"},"\u589e\u5f3a\u56db\u5c42 TCP \u4ee3\u7406"),(0,l.kt)("p",null,"2.7 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f00\u53d1\u4e86 TCP \u4ee3\u7406\u65b0\u529f\u80fd\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8 upstream \u4e2d\u914d\u7f6e\u57df\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8 mqtt-proxy \u63d2\u4ef6\u914d\u7f6e\u57df\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u63a5\u6536 TLS over TCP \u8fde\u63a5\uff0c\u8fd9\u4e00\u5757\u7684\u8bc1\u4e66\u81ea\u7136\u662f\u53ef\u4ee5\u50cf HTTPS \u7684\u8bc1\u4e66\u4e00\u6837\u52a8\u6001\u914d\u7f6e\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e SNI \u7684\u8def\u7531\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6821\u9a8c\u5ba2\u6237\u7aef\u8bc1\u4e66")),(0,l.kt)("p",null,"\u5728\u540e\u7eed\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u7ee7\u7eed\u5206\u914d\u90e8\u5206\u8d44\u6e90\u6765\u5b8c\u5584\u73b0\u6709\u7684 TCP \u4ee3\u7406\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\uff01"),(0,l.kt)("h3",{id:"\u589e\u5f3a-nginx-\u529f\u80fd"},"\u589e\u5f3a Nginx \u529f\u80fd"),(0,l.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u52a8\u6001\u8bbe\u7f6e\u8d8a\u6765\u8d8a\u591a\u7684 Nginx \u914d\u7f6e\uff0c\u6240\u4ee5\u6211\u4eec\u6dfb\u52a0\u81ea\u5df1\u7684\u8865\u4e01\u548c Nginx C \u6a21\u5757\uff0c\u589e\u5f3a\u539f\u751f Nginx \u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u5305\u542b\u4e86\u4ee5\u4e0b\u65b0\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8bbe\u7f6e mTLS"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8bbe\u7f6e client_max_body_size")),(0,l.kt)("p",null,"\u5728 APISIX \u540e\u7eed\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u9646\u7eed\u5141\u8bb8\u4e0b\u9762\u7684 Nginx \u914d\u7f6e\u80fd\u591f\u88ab\u52a8\u6001\u8bbe\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"upstream \u7684 keepalive"),(0,l.kt)("li",{parentName:"ul"},"gzip"),(0,l.kt)("li",{parentName:"ul"},"real_ip"),(0,l.kt)("li",{parentName:"ul"},"proxy_max_temp_file_size")),(0,l.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4e0b\u8f7d Apache APISIX 2.7.0-Release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"\u4e0b\u8f7d\u9875\u9762")),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"\u5b89\u88c5\u6307\u5357"))))}c.isMDXComponent=!0}}]);