(self.webpackChunk=self.webpackChunk||[]).push([[61191],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return m}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),k=c(n),m=l,g=k["".concat(i,".").concat(m)]||k[m]||s[m]||r;return n?a.createElement(g,p(p({ref:e},o),{},{components:n})):a.createElement(g,p({ref:e},o))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,p[1]=u;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9045:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return i},default:function(){return o}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),p={title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def"},u={permalink:"/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX",source:"@site/blog/2021-07-14-the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",description:"\u8042\u6c38\uff0c\u5fae\u535a\u57fa\u7840\u67b6\u6784\u5e08\uff0c\u5f00\u6e90\u7231\u597d\u8005\uff0c\u7231\u6298\u817e\u8ffd\u6c42 Geek\u3002",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[],readingTime:2.045,truncated:!0,prevItem:{title:"\u6df1\u5ea6\u5256\u6790 Apache APISIX Mesh Agent",permalink:"/blog/2021/07/16/Analyze-Apache-APISIX-Mesh-Agent-deeply"},nextItem:{title:"Apache APISIX has over 200 contributors in GitHub main repo! ",permalink:"/blog/2021/07/06/celebrate-200-contributors"}},i=[{value:"1 \u80cc\u666f\u8bf4\u660e",id:"1-\u80cc\u666f\u8bf4\u660e",children:[]},{value:"2 \u4e3a\u4ec0\u4e48\u9009\u62e9\u5b9a\u5236\u5316\u5f00\u53d1",id:"2-\u4e3a\u4ec0\u4e48\u9009\u62e9\u5b9a\u5236\u5316\u5f00\u53d1",children:[]},{value:"3 \u5728 Apache APISIX \u7684\u63a7\u5236\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",id:"3-\u5728-apache-apisix-\u7684\u63a7\u5236\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",children:[{value:"3.1 \u652f\u6301 SaaS \u5316\u670d\u52a1",id:"31-\u652f\u6301-saas-\u5316\u670d\u52a1",children:[]},{value:"3.2 \u65b0\u589e\u8def\u7531\u53d1\u5e03\u5ba1\u6838\u5de5\u4f5c\u6d41",id:"32-\u65b0\u589e\u8def\u7531\u53d1\u5e03\u5ba1\u6838\u5de5\u4f5c\u6d41",children:[]},{value:"3.3 \u652f\u6301\u7070\u5ea6\u53d1\u5e03",id:"33-\u652f\u6301\u7070\u5ea6\u53d1\u5e03",children:[]},{value:"3.4 \u652f\u6301\u5feb\u901f\u5bfc\u5165",id:"34-\u652f\u6301\u5feb\u901f\u5bfc\u5165",children:[]}]},{value:"4 \u5728 Apache APISIX \u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",id:"4-\u5728-apache-apisix-\u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",children:[{value:"4.1 \u5b89\u88c5\u5305\u7684\u4fee\u6539",id:"41-\u5b89\u88c5\u5305\u7684\u4fee\u6539",children:[]},{value:"4.2 \u4ee3\u7801\u7684\u5b9a\u5236\u5f00\u53d1",id:"42-\u4ee3\u7801\u7684\u5b9a\u5236\u5f00\u53d1",children:[]},{value:"4.3 \u652f\u6301 Consul KV \u65b9\u5f0f\u670d\u52a1\u53d1\u73b0",id:"43-\u652f\u6301-consul-kv-\u65b9\u5f0f\u670d\u52a1\u53d1\u73b0",children:[]}]},{value:"5 \u5b9a\u5236\u5316\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u601d\u8003",id:"5-\u5b9a\u5236\u5316\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u601d\u8003",children:[{value:"5.1 \u8fc1\u79fb\u6210\u672c\u9ad8",id:"51-\u8fc1\u79fb\u6210\u672c\u9ad8",children:[]},{value:"5.2 \u5b9a\u5236\u5316\u7a0b\u5ea6\u9ad8\uff0c\u5bfc\u81f4\u540e\u7eed\u5347\u7ea7\u6210\u672c\u8f83\u9ad8",id:"52-\u5b9a\u5236\u5316\u7a0b\u5ea6\u9ad8\uff0c\u5bfc\u81f4\u540e\u7eed\u5347\u7ea7\u6210\u672c\u8f83\u9ad8",children:[]},{value:"5.3 \u53cd\u54fa\u793e\u533a",id:"53-\u53cd\u54fa\u793e\u533a",children:[]}]}],c={toc:i};function o(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8042\u6c38\uff0c\u5fae\u535a\u57fa\u7840\u67b6\u6784\u5e08\uff0c\u5f00\u6e90\u7231\u597d\u8005\uff0c\u7231\u6298\u817e\u8ffd\u6c42 Geek\u3002"))),(0,r.kt)("p",null,"\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002"),(0,r.kt)("h2",{id:"1-\u80cc\u666f\u8bf4\u660e"},"1 \u80cc\u666f\u8bf4\u660e"),(0,r.kt)("p",null,"\u5728\u5fae\u535a\uff0c\u8fd0\u7ef4\u540c\u5b66\u8981\u521b\u5efa\u4e00\u4e2a API \u670d\u52a1\uff0c\u4ed6\u9700\u8981\u5148\u5728 nginx conf \u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u5199\u597d\uff0c\u63d0\u4ea4\u5230 git \u4ee3\u7801\u4ed3\u5e93\u91cc\u9762\u53bb\uff0c\u7b49\u5176\u5b83\u8d1f\u8d23\u4e0a\u7ebf\u7684\u8fd0\u7ef4\u540c\u5b66 CheckOut \u4e4b\u540e\uff0c\u786e\u8ba4\u5ba1\u6838\u6210\u529f\uff0c\u624d\u80fd\u5b83\u4eec\u63a8\u9001\u90e8\u7f72\u5230\u7ebf\u4e0a\u53bb\uff0c\u7ee7\u800c\u7c97\u66b4\u901a\u77e5 NGINX \u91cd\u65b0\u52a0\u8f7d\uff0c\u8fd9\u624d\u7b97\u670d\u52a1\u53d8\u66f4\u6210\u529f\u3002"),(0,r.kt)("p",null,"\u6574\u4e2a\u5904\u7406\u6d41\u7a0b\u8f83\u957f\uff0c\u6548\u7387\u8f83\u4f4e\uff0c\u65e0\u6cd5\u6ee1\u8db3\u4f4e\u4ee3\u7801\u5316\u7684 DevOps \u8fd0\u7ef4\u8d8b\u52bf\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u671f\u5f85\u6709\u4e00\u4e2a\u7ba1\u7406\u540e\u53f0\u5165\u53e3\uff0c\u8fd0\u7ef4\u540c\u5b66\u5728 UI \u754c\u9762\u4e0a\u5c31\u53ef\u4ee5\u64cd\u4f5c\u6240\u6709\u7684 http api \u8def\u7531\u7b49\u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125594900-d4c01fb7-3af4-4e8c-8779-f3f16b7f0bca.png",alt:"xinlang1"})),(0,r.kt)("p",null,"\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u671f\u76fc\u7684\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\u3002\u6bd4\u8f83\u770b\u91cd\u7684\u70b9\uff0c\u6709\u8fd9\u4e48\u51e0\u4e2a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e NGINX \uff0c\u6280\u672f\u6808\u524d\u540e\u7edf\u4e00\uff0c\u540e\u671f\u7070\u5ea6\u5347\u7ea7\u3001\u5b89\u5168\u3001\u7a33\u5b9a\u6027\u7b49\u6709\u4fdd\u969c\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5185\u7f6e\u7edf\u4e00\u63a7\u5236\u9762\uff0c\u591a\u53f0\u4ee3\u7406\u670d\u52a1\u7edf\u4e00\u7ba1\u7406\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u52a8\u6001 API \u8c03\u7528\uff0c\u5373\u53ef\u5b8c\u6210\u5e38\u89c1\u8d44\u6e90\u7684\u4fee\u6539\u5b9e\u65f6\u751f\u6548\uff0c\u76f8\u6bd4\u4f20\u7edf NGINX \u914d\u7f6e + reload \u65b9\u5f0f\u8fdb\u6b65\u660e\u663e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u8def\u7531\u9009\u9879\u4e30\u5bcc\uff0c\u6ee1\u8db3\u5fae\u535a\u8def\u7531\u9700\u6c42\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u8f83\u597d\u6269\u5c55\u6027\uff0c\u652f\u6301 Consul kv \u96be\u5ea6\u4e0d\u5927\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u6027\u80fd\u8868\u73b0\u4e5f\u4e0d\u9519\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596483-aee21ac7-a902-4e44-abc4-8bfda4f51f82.png",alt:"xinlang2"})),(0,r.kt)("h2",{id:"2-\u4e3a\u4ec0\u4e48\u9009\u62e9\u5b9a\u5236\u5316\u5f00\u53d1"},"2 \u4e3a\u4ec0\u4e48\u9009\u62e9\u5b9a\u5236\u5316\u5f00\u53d1"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e1a\u52a1\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u662f\u6ca1\u529e\u6cd5\u76f4\u63a5\u4f7f\u7528 Apache APISIX \u7684\uff0c\u539f\u56e0\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apache APISIX \u4e0d\u652f\u6301 SaaS \u591a\u79df\u6237\uff0c\u5b9e\u9645\u9700\u8981\u8fd0\u7ef4\u7684\u4e1a\u52a1\u7ebf\u4e0a\u5c42\u5e94\u7528\u6709\u5f88\u591a\uff0c\u6bcf\u4e2a\u4e1a\u52a1\u7ebf\u7684\u5f00\u53d1\u6216\u8fd0\u7ef4\u540c\u5b66\u53ea\u9700\u8981\u7ba1\u7406\u7ef4\u62a4\u81ea\u5df1\u7684\u5404\u79cd rules\u3001upstreams \u7b49\u89c4\u5219\uff0c\u5f7c\u6b64\u4e4b\u95f4\u4e0d\u76f8\u5173\u8054\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u628a\u8def\u7531\u89c4\u5219\u53d1\u5e03\u5230\u7ebf\u4e0a\u540e\uff0c\u5982\u679c\u51fa\u73b0\u95ee\u9898\u5219\u9700\u8981\u5feb\u901f\u7684\u56de\u6eda\u652f\u6301\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u65b0\u5efa\u6216\u8005\u7f16\u8f91\u73b0\u6709\u7684\u8def\u7531\u89c4\u5219\u65f6\uff0c\u6211\u4eec\u4e0d\u592a\u653e\u5fc3\u76f4\u63a5\u53d1\u5e03\u5230\u7ebf\u4e0a\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u5b83\u80fd\u591f\u652f\u6301\u7070\u5ea6\u53d1\u5e03\u5230\u6307\u5b9a\u7f51\u5173\u5b9e\u4f8b\u4e0a\uff0c\u7528\u4e8e\u4eff\u771f\u6216\u5c40\u90e8\u6d4b\u8bd5\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981 API \u7f51\u5173\u80fd\u591f\u652f\u6301 Consul KV \u65b9\u5f0f\u7684\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u673a\u5236\uff1b")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u8fd9\u4e9b\u9700\u6c42\u76ee\u524d Apache APISIX \u90fd\u6ca1\u6709\u5185\u7f6e\u652f\u6301\uff0c\u6240\u4ee5\u53ea\u80fd\u901a\u8fc7\u5b9a\u5236\u5f00\u53d1\u624d\u80fd\u8ba9 Apache APISIX \u771f\u6b63\u5728\u5fae\u535a\u5185\u90e8\u4f7f\u7528\u8d77\u6765\u3002"),(0,r.kt)("h2",{id:"3-\u5728-apache-apisix-\u7684\u63a7\u5236\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"},"3 \u5728 Apache APISIX \u7684\u63a7\u5236\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"),(0,r.kt)("p",null,"\u6211\u4eec\u5b9a\u5236\u5f00\u53d1\u65f6\uff0c\u4f7f\u7528\u7684 Apache APISIX 1.5 \u7248\u672c\uff0cDashboard \u4e5f\u662f\u548c 1.5 \u76f8\u5339\u914d\u7684\u3002"),(0,r.kt)("p",null,"\u5b9a\u5236\u5f00\u53d1\u7684\u76ee\u6807\u7b80\u5355\u6e05\u6670\uff0c\u5373\u5b8c\u5168\u96f6\u4ee3\u7801\u3001UI \u5316\uff0c\u6240\u6709\u4e03\u5c42 HTTP API \u670d\u52a1\u7684\u521b\u5efa\u3001\u7f16\u8f91\u3001\u66f4\u65b0\u3001\u4e0a\u4e0b\u7ebf\u7b49\u6240\u6709\u884c\u4e3a\u90fd\u5fc5\u987b\u5728 Dashboard \u4e0a\u9762\u5b8c\u6210\u3002\u56e0\u6b64\u5b9e\u9645\u73af\u5883\u4e0b\uff0c\u6211\u4eec\u7981\u6b62\u5f00\u53d1\u548c\u8fd0\u7ef4\u540c\u5b66\u76f4\u63a5\u8c03\u7528 APISIX Admin API\uff0c\u5047\u5982\u7565\u8fc7 Dashboard \u76f4\u63a5\u8c03\u7528 APISIX Admin API\uff0c\u5c31\u4f1a\u5bfc\u81f4\u7f51\u5173\u64cd\u4f5c\u6ca1\u529e\u6cd5\u5728 UI \u5c42\u9762\u4e0a\u5ba1\u8ba1\uff0c\u65e0\u6cd5\u8d70\u5de5\u4f5c\u6d41\uff0c\u81ea\u7136\u4e5f\u5c31\u6ca1\u6709\u591a\u5c11\u5b89\u5168\u6027\u53ef\u8a00\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u79cd\u60c5\u51b5\u7a0d\u5fae\u7279\u6b8a\uff0c\u8fd0\u7ef4\u9700\u8981\u8c03\u7528 API \u5b8c\u6210\u670d\u52a1\u7684\u6279\u91cf\u5bfc\u5165\u7b49\uff0c\u53ef\u4ee5\u8c03\u7528 H5 Dashboard \u7684 API \u6765\u5b8c\u6210\uff0c\u4ece\u800c\u9075\u5b88\u7edf\u4e00\u7684\u5de5\u4f5c\u6d41\u3002"),(0,r.kt)("h3",{id:"31-\u652f\u6301-saas-\u5316\u670d\u52a1"},"3.1 \u652f\u6301 SaaS \u5316\u670d\u52a1"),(0,r.kt)("p",null,"\u4f01\u4e1a\u5c42\u9762\u6709\u5b8c\u6574\u7684\u4ea7\u54c1\u7ebf\u3001\u4e1a\u52a1\u7ebf\u6570\u636e\u5e93\uff0c\u6bcf\u4e00\u4e2a\u5177\u4f53\u4ea7\u54c1\u7ebf\u3001\u4e1a\u52a1\u7ebf\u53ef\u4f7f\u7528\u4e00\u4e2a saas_id \u503c\u8868\u793a\u3002\u7136\u540e\u5728\u521b\u5efa\u7f51\u5173\u914d\u7f6e\u6570\u636e\u63d2\u5165 ETCD \u4e4b\u524d\uff0c\u585e\u5165\u4e00\u4e2a saas_id \u503c\uff0c\u5728\u903b\u8f91\u5c5e\u6027\u4e0a\u6240\u6709\u7684\u6570\u636e\u4fbf\u6709\u4e86 SaaS \u5f52\u5c5e\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u3001\u89d2\u8272\u548c\u5b9e\u9645\u64cd\u4f5c\u7684\u4ea7\u54c1\u7ebf\u5c31\u6709\u4e86\u5982\u4e0b\u5bf9\u5e94\u5173\u8054\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596630-15444f25-0bcb-4f2f-8fd2-7bef6faf6f4e.png",alt:"xinlang3"})),(0,r.kt)("p",null,"\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u88ab\u5206\u6d3e\u627f\u62c5\u4e0d\u540c\u8fd0\u7ef4\u89d2\u8272\u53bb\u7ba1\u7406\u7ef4\u62a4\u4e0d\u540c\u7684\u4ea7\u54c1\u7ebf\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u7ba1\u7406\u5458\u89d2\u8272\u5f88\u597d\u7406\u89e3\uff0c\u64cd\u4f5c\u7ef4\u62a4\u670d\u52a1\u6838\u5fc3\u89d2\u8272\uff0c\u9488\u5bf9\u670d\u52a1\u589e / \u5220 / \u6539 / \u67e5\u7b49\uff1b\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u6709\u53ea\u8bfb\u7528\u6237\u7684\u6982\u5ff5\uff0c\u53ea\u8bfb\u7528\u6237\u4e00\u822c\u662f\u7528\u4e8e\u67e5\u770b\u670d\u52a1\u914d\u7f6e\u3001\u67e5\u770b\u5de5\u4f5c\u6d41\u3001\u8c03\u8bd5\u7b49\u7b49\u3002"),(0,r.kt)("h3",{id:"32-\u65b0\u589e\u8def\u7531\u53d1\u5e03\u5ba1\u6838\u5de5\u4f5c\u6d41"},"3.2 \u65b0\u589e\u8def\u7531\u53d1\u5e03\u5ba1\u6838\u5de5\u4f5c\u6d41"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596773-6ebbb1f2-1287-418b-a5f0-1fc85c9e8e9f.png",alt:"xinlang4"})),(0,r.kt)("p",null,"\u5728\u5f00\u6e90\u7248\u672c\u4e2d\uff0c\u521b\u5efa\u6216\u4fee\u6539\u5b8c\u4e00\u4e2a\u8def\u7531\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u53d1\u5e03\u3002"),(0,r.kt)("p",null,"\u800c\u5728\u6211\u4eec\u7684\u5b9a\u5236\u7248\u672c\u4e2d\uff0c\u8def\u7531\u521b\u5efa\u6216\u4fee\u6539\u4e4b\u540e\uff0c\u8fd8\u9700\u8981\u7ecf\u8fc7\u5ba1\u6838\u5de5\u4f5c\u6d41\u5904\u7406\u4e4b\u540e\u624d\u80fd\u53d1\u5e03\uff0c\u5904\u7406\u6d41\u7a0b\u867d\u7136\u6709\u6240\u62c9\u957f\uff0c\u4f46\u6211\u4eec\u8ba4\u4e3a\u5728\u4f01\u4e1a\u5c42\u9762\u5ba1\u6838\u6388\u6743\u540e\u7684\u53d1\u5e03\u884c\u4e3a\u624d\u66f4\u53ef\u4fe1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596844-7e3f057e-1dc4-4c3e-8d91-2b2c3d8e780f.png",alt:"xinlang5"})),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u8def\u7531\u89c4\u5219\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5fc5\u987b\u8981\u7ecf\u8fc7\u5ba1\u6838\u3002\u4e3a\u4e86\u517c\u987e\u6548\u7387\uff0c\u65b0\u670d\u52a1\u5f55\u5165\u7684\u65f6\u5019\uff0c\u53ef\u9009\u62e9\u514d\u5ba1\u3001\u5feb\u901f\u53d1\u5e03\u901a\u9053\uff0c\u76f4\u63a5\u70b9\u51fb\u53d1\u5e03\u6309\u94ae\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596916-e3a7c3e6-7201-4b37-89b5-bacbbb6f4a9d.png",alt:"xinlang6"})),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u91cd\u8981 API \u8def\u7531\u67d0\u6b21\u8c03\u6574\u89c4\u5219\u53d1\u5e03\u4e0a\u7ebf\u540e\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u8be5\u8def\u7531\u89c4\u5219\u4e0a\u4e00\u4e2a\u7248\u672c\u8fdb\u884c\u5feb\u901f\u56de\u6eda\uff0c\u7c92\u5ea6\u4e3a\u5355\u4e2a\u8def\u7531\u7684\u56de\u6eda\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u5b83\u8def\u7531\u89c4\u5219\u3002"),(0,r.kt)("p",null,"\u5355\u6761\u8def\u7531\u56de\u6eda\u5185\u90e8\u5904\u7406\u6d41\u7a0b\u5982\u4e0b\u56fe\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596979-74aa252c-3a84-44e5-a62a-6d9e254de859.png",alt:"xinlang7"})),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e3a\u5355\u4e2a\u8def\u7531\u7684\u6bcf\u6b21\u53d1\u5e03\u5efa\u7acb\u7248\u672c\u6570\u636e\u5e93\u5b58\u50a8\u3002\u8fd9\u6837\u6211\u4eec\u5728\u5ba1\u6838\u4e4b\u540e\u8fdb\u884c\u5168\u91cf\u53d1\u5e03\uff0c\u6bcf\u53d1\u5e03\u4e00\u6b21\u4f1a\u5c31\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7248\u672c\u53f7\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u5b8c\u6574\u914d\u7f6e\u6570\u636e\uff1b\u7136\u540e\u7248\u672c\u5217\u8868\u8d8a\u79ef\u8d8a\u591a\u3002\u5f53\u6211\u4eec\u9700\u8981\u56de\u6eda\u7684\u65f6\u5019\u53bb\u7248\u672c\u5217\u8868\u91cc\u9762\u9009\u62e9\u4e00\u4e2a\u5bf9\u5e94\u7248\u672c\u56de\u6eda\u5373\u53ef\uff1b\u67d0\u79cd\u610f\u4e49\u4e0a\u6765\u8bb2\uff0c\u56de\u6eda\u5176\u5b9e\u662f\u4e00\u4e2a\u7279\u6b8a\u5f62\u5f0f\u7684\u5168\u91cf\u53d1\u5e03\u3002"),(0,r.kt)("h3",{id:"33-\u652f\u6301\u7070\u5ea6\u53d1\u5e03"},"3.3 \u652f\u6301\u7070\u5ea6\u53d1\u5e03"),(0,r.kt)("p",null,"\u6211\u4eec\u5b9a\u5236\u5f00\u53d1\u7684\u7070\u5ea6\u53d1\u5e03\u529f\u80fd\u548c\u4e00\u822c\u793e\u533a\u7406\u89e3\u7684\u7070\u5ea6\u53d1\u5e03\u6709\u6240\u4e0d\u540c\uff0c\u76f8\u6bd4\u5168\u91cf\u90e8\u7f72\u7684\u98ce\u9669\u6709\u6240\u964d\u4f4e\u3002\u5f53\u67d0\u4e00\u4e2a\u8def\u7531\u89c4\u5219\u7684\u53d8\u66f4\u8f83\u5927\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u53ea\u5728\u7279\u5b9a\u6709\u9650\u6570\u91cf\u7684\u7f51\u5173\u5b9e\u4f8b\u4e0a\u53d1\u5e03\u5e76\u751f\u6548\uff0c\u800c\u4e0d\u662f\u5728\u6240\u6709\u7f51\u5173\u5b9e\u4f8b\u4e0a\u53d1\u5e03\u751f\u6548\uff0c\u4ece\u800c\u7f29\u5c0f\u53d1\u5e03\u8303\u56f4\uff0c\u964d\u4f4e\u98ce\u9669\uff0c\u5feb\u901f\u8bd5\u9519\u3002"),(0,r.kt)("p",null,"\u867d\u7136\u7070\u5ea6\u53d1\u5e03\u662f\u4e00\u4e2a\u4f4e\u9891\u7684\u884c\u4e3a\uff0c\u4f46\u548c\u5168\u91cf\u53d1\u5e03\u4e4b\u95f4\u4f9d\u7136\u5b58\u5728\u72b6\u6001\u7684\u8f6c\u6362\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597330-b3dde9ba-28f3-4899-9f4f-53b89131e653.png",alt:"xinlang8"})),(0,r.kt)("p",null,"\u5f53\u7070\u5ea6\u53d1\u5e03\u7684\u5360\u6bd4\u51cf\u5c11\u5230 0% \u7684\u65f6\u5019\uff0c\u5c31\u662f\u5168\u91cf\u53d1\u5e03\u7684\u72b6\u6001\uff1b\u7070\u5ea6\u53d1\u5e03\u4e0a\u5347\u5230 100% \u7684\u60c5\u51b5\u4e0b\uff0c\u5c31\u662f\u4e0b\u4e00\u6b21\u7684\u5168\u91cf\u53d1\u5e03\uff0c\u8fd9\u5c31\u662f\u5b83\u7684\u72b6\u6001\u8f6c\u6362\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598577-bcf2b13d-031a-440c-9480-c68d41d5ca9c.png",alt:"xinlang9"})),(0,r.kt)("p",null,"\u4e0a\u56fe\u4e3a\u5728\u64cd\u4f5c\u7070\u5ea6\u53d1\u5e03\u9009\u62e9\u5177\u4f53\u7684\u7f51\u5173\u5b9e\u4f8b\u65f6\u7684\u622a\u56fe\u3002"),(0,r.kt)("p",null,"\u7070\u5ea6\u53d1\u5e03\u5b8c\u6574\u529f\u80fd\u9664\u4e86\u7ba1\u7406\u540e\u53f0\u652f\u6301\uff0c\u8fd8\u9700\u8981\u5728\u7f51\u5173\u5b9e\u4f8b\u4e0a\u66b4\u9732\u51fa\u4e00\u4e9b API \u652f\u6301\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597285-cf3c9145-adc6-4fa4-979e-124ea8f376b5.png",alt:"xinlang10"})),(0,r.kt)("p",null,"\u7070\u5ea6\u53d1\u5e03 API \u56fa\u5b9a URI, \u7edf\u4e00\u8def\u5f84\u4e3a /admin/services/gray/{SAAS_ID}/routes\u3002\u4e0d\u540c HTTP Method \u5448\u73b0\u4e0d\u540c\u4e1a\u52a1\u542b\u4e49\uff0cPOST \u8868\u793a\u521b\u5efa\uff0c\u505c\u6b62\u7070\u5ea6\u662f DELETE\uff0c\u67e5\u770b\u5c31\u662f GET\u3002"),(0,r.kt)("h4",{id:"331-\u542f\u52a8\u6d41\u7a0b"},"3.3.1 \u542f\u52a8\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597454-e4ad004e-9f04-495d-bb93-33c4b9942d4d.png",alt:"xinlang11"})),(0,r.kt)("p",null,"\u4ece\u7f51\u5173\u5c42\u9762\u53d1\u5e03\u4e00\u4e2a API\uff0c\u63a5\u6536\u6570\u636e\u540e worker \u8fdb\u7a0b\u6821\u9a8c\u53d1\u9001\u6765\u7684\u6570\u636e\u7684\u5408\u6cd5\u6027\uff0c\u5408\u6cd5\u6570\u636e\u4f1a\u901a\u8fc7\u4e8b\u4ef6\u5e7f\u64ad\u7ed9\u6240\u6709\u7684 worker \u8fdb\u7a0b\u3002\u968f\u540e\u8c03\u7528\u7070\u5ea6\u53d1\u5e03 API \uff0c\u6dfb\u52a0\u5b8c\u7070\u5ea6\u89c4\u5219\uff0c\u5728\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u88ab\u5904\u7406\u65f6\u751f\u6548\u3002"),(0,r.kt)("h4",{id:"332-\u505c\u7528\u6d41\u7a0b"},"3.3.2 \u505c\u7528\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597537-99270698-992a-4f58-91b4-06067f4d44d2.png",alt:"xinlang12"})),(0,r.kt)("p",null,"\u505c\u7528\u6d41\u7a0b\u548c\u7070\u5ea6\u5206\u5e03\u6d41\u7a0b\u57fa\u672c\u4e00\u81f4\uff0c\u901a\u8fc7 DELETE \u7684\u65b9\u6cd5\u8c03\u7528\u7070\u5ea6\u53d1\u5e03\u7684 API\uff0c\u5e7f\u64ad\u7ed9\u6240\u6709\u7684 work \u8fdb\u7a0b\uff0c\u6bcf\u4e2a work \u63a5\u6536\u5230\u9700\u8981\u505c\u7528\u7684\u7070\u5ea6\u7684 ID \u503c\u540e\u5728 route \u8868\u91cc\u8fdb\u884c\u68c0\u6d4b\u3002\u82e5 route \u8868\u91cc\u5b58\u5728\u5c31\u5220\u9664\uff0c\u7136\u540e\u5c1d\u8bd5\u4ece ETCD \u91cc\u9762\u8fd8\u539f\u51fa\u6765\u3002\u5982\u679c\u7070\u5ea6\u505c\u7528\u4e86\uff0c\u8981\u4fdd\u8bc1\u539f\u5148\u5b58\u5728 ETCD \u80fd\u591f\u8fd8\u539f\u51fa\u6765\uff0c\u4e0d\u80fd\u5f71\u54cd\u5230\u6b63\u5e38\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"34-\u652f\u6301\u5feb\u901f\u5bfc\u5165"},"3.4 \u652f\u6301\u5feb\u901f\u5bfc\u5165"),(0,r.kt)("p",null,"\u9664\u4e86\u5728\u7ba1\u7406\u9875\u9762\u652f\u6301\u521b\u5efa\u8def\u7531\u4e4b\u5916\uff0c\u5f88\u591a\u8fd0\u7ef4\u540c\u5b66\u8fd8\u662f\u6bd4\u8f83\u4e60\u60ef\u4f7f\u7528\u811a\u672c\u5bfc\u5165\u3002\u6211\u4eec\u6709\u5927\u91cf\u7684 HTTP API \u670d\u52a1\uff0c\u8fd9\u4e9b\u670d\u52a1\u8981\u662f\u4e00\u4e2a\u4e00\u4e2a\u624b\u52a8\u5f55\u5165\uff0c\u4f1a\u975e\u5e38\u8017\u65f6\u3002\u5982\u679c\u901a\u8fc7\u811a\u672c\u5bfc\u5165\uff0c\u5219\u80fd\u591f\u964d\u4f4e\u5f88\u591a\u670d\u52a1\u8fc1\u79fb\u963b\u529b\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e3a\u7ba1\u7406\u540e\u53f0\u66b4\u9732\u51fa Go Impport HTTP API\uff0c\u8fd0\u7ef4\u540c\u5b66\u53ef\u4ee5\u5728\u73b0\u6210\u7684 Bash Script \u811a\u672c\u6587\u4ef6\u4e2d\u586b\u5199\u5206\u914d\u7684 token\u3001SaaS ID \u4ee5\u53ca\u76f8\u5173\u7684 UID \u7b49\uff0c\u4ece\u800c\u8f83\u4e3a\u5feb\u901f\u5730\u5bfc\u5165\u670d\u52a1\u5230\u7ba1\u7406\u540e\u53f0\u4e2d\u3002\u5bfc\u5165\u670d\u52a1\u540e\u7eed\u64cd\u4f5c\u4f9d\u7136\u8fd8\u662f\u9700\u8981\u5728\u7ba1\u7406\u540e\u53f0 H5 \u754c\u9762\u4e0a\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597641-54bf1649-0238-4973-8501-48c1cead328e.png",alt:"xinlang13"})),(0,r.kt)("h2",{id:"4-\u5728-apache-apisix-\u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"},"4 \u5728 Apache APISIX \u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"),(0,r.kt)("p",null,"\u57fa\u4e8e Apache APISIX \u6570\u636e\u9762\u5b9a\u5236\u5f00\u53d1\u9700\u8981\u9075\u5faa\u4e00\u4e9b\u4ee3\u7801\u8def\u5f84\u89c4\u5219\u3002\u5176\u4e2d\uff0cApache APISIX \u7f51\u5173\u7684\u4ee3\u7801\u548c\u5b9a\u5236\u4ee3\u7801\u5206\u5f00\u5b58\u653e\u4e0d\u540c\u8def\u5f84\uff0c\u4e24\u8005\u534f\u540c\u5de5\u4f5c\uff0c\u5404\u81ea\u53ef\u72ec\u7acb\u8fed\u4ee3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597706-33f97c9a-1e82-43c5-9ed7-e13b051ad9a0.png",alt:"xinlang14"})),(0,r.kt)("h3",{id:"41-\u5b89\u88c5\u5305\u7684\u4fee\u6539"},"4.1 \u5b89\u88c5\u5305\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u56e0\u6b64\u6253\u5305\u65f6\uff0c\u4e0d\u4f46\u6709\u5b9a\u5236\u4ee3\u7801\uff0c\u8fd8\u9700\u8981\u628a\u4f9d\u8d56\u3001\u914d\u7f6e\u7b49\u5168\u90e8\u6253\u5305\u5230\u4e00\u8d77\u8fdb\u884c\u5206\u53d1\u3002\u81f3\u4e8e\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u8981\u4e48\u9009\u62e9 Docker\uff0c\u8981\u4e48\u6253\u5230\u4e00\u4e2a tar \u5305\u4e2d\uff0c\u6309\u9700\u9009\u62e9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597788-24829253-d6f2-4f65-9799-3fc840a7c970.png",alt:"xinlang15"})),(0,r.kt)("h3",{id:"42-\u4ee3\u7801\u7684\u5b9a\u5236\u5f00\u53d1"},"4.2 \u4ee3\u7801\u7684\u5b9a\u5236\u5f00\u53d1"),(0,r.kt)("p",null,"\u6709\u4e9b\u5b9a\u5236\u6a21\u5757\u9700\u8981\u5728\u88ab\u521d\u59cb\u5316\u65f6\u4f18\u5148\u52a0\u8f7d\uff0c\u8fd9\u6837\u5bf9 Apache APISIX \u7684\u4ee3\u7801\u5165\u4fb5\u5c31\u53d8\u5f97\u5f88\u5c0f\uff0c\u53ea\u9700\u8981\u4fee\u6539 NGINX.conf \u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597856-6020f223-dfeb-44a1-8a80-896a24a3d8fb.png",alt:"xinlang16"})),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u9700\u8981\u4e3a upstream \u5bf9\u8c61\u585e\u5165\u4e00\u4e2a saas_id \u5c5e\u6027\u5b57\u6bb5\uff0c\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u65f6\u8c03\u7528\u5982\u4e0b\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598009-75d4aaf7-10b7-476b-af22-97a0630d878c.png",alt:"xinlang17"})),(0,r.kt)("p",null,"\u7c7b\u4f3c\u4fee\u6539\u7b49\uff0c\u9700\u8981\u5728 init",(0,r.kt)("em",{parentName:"p"},"worker_by_lua"),"* \u9636\u6bb5\u5b8c\u6210\u8c03\u7528\uff0c\u5b8c\u6210\u521d\u59cb\u5316\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u60c5\u51b5\uff1a\u5982\u4f55\u76f4\u63a5\u91cd\u5199\u5f53\u524d\u5df2\u6709\u6a21\u5757\u7684\u5b9e\u73b0\u3002\u6bd4\u5982\u6709\u4e00\u4e2a debug \u6a21\u5757\uff0c\u73b0\u5728\u9700\u8981\u5bf9\u5b83\u7684\u521d\u59cb\u5316\u903b\u8f91\u8fdb\u884c\u91cd\u6784\uff0c\u5373\u5bf9 init_worker \u51fd\u6570\u8fdb\u884c\u91cd\u5199\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598066-fd0da722-7fb0-44a2-99cd-15bf07fd1ad6.png",alt:"xinlang18"})),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u7684\u597d\u5904\u5728\u4e8e\uff0c\u65e2\u80fd\u4fdd\u8bc1 API \u539f\u59cb\u7684\u7269\u7406\u6587\u4ef6\u4e0d\u52a8\uff0c\u53c8\u80fd\u52a0\u5165\u81ea\u5b9a\u4e49\u7684 API \u5177\u4f53\u903b\u8f91\u7684\u91cd\u5199\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u540e\u671f\u4ee3\u7801\u7ba1\u7406\u7684\u6210\u672c\uff0c\u4e5f\u4e3a\u540e\u7eed\u5347\u7ea7\u5e26\u6765\u5f88\u5927\u7684\u4fbf\u5229\u3002"),(0,r.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u82e5\u6709\u7c7b\u4f3c\u9700\u6c42\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0a\u505a\u6cd5\u3002"),(0,r.kt)("h3",{id:"43-\u652f\u6301-consul-kv-\u65b9\u5f0f\u670d\u52a1\u53d1\u73b0"},"4.3 \u652f\u6301 Consul KV \u65b9\u5f0f\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,"\u5f53\u524d\u5fae\u535a\u5f88\u591a\u670d\u52a1\u91c7\u7528 Consul KV \u7684\u65b9\u5f0f\u4f5c\u4e3a\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u673a\u5236\u3002\u4ee5\u524d Apache APISIX \u662f\u4e0d\u652f\u6301 Consul KV \u65b9\u5f0f\u670d\u52a1\u53d1\u73b0\u673a\u5236\u7684\uff0c\u5c31\u9700\u8981\u5728\u7f51\u5173\u5c42\u6dfb\u52a0\u4e00\u4e2a consul_kv.lua \u6a21\u5757\uff0c\u540c\u65f6\u4e5f\u9700\u8981\u5728\u7ba1\u7406\u540e\u53f0\u63d0\u4f9b UI \u754c\u9762\u652f\u6301\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598115-d72321e4-b886-4e0d-965f-50c06f0f3104.png",alt:"xinlang19"})),(0,r.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4e2d\u7684 upstream \u5217\u8868\u4e2d\uff0c\u586b\u5199\u7684\u6240\u6709\u4e1c\u897f\u4e00\u76ee\u4e86\u7136\uff0c\u9f20\u6807\u79fb\u52a8\u5230\u6ce8\u518c\u670d\u52a1\u5730\u5740\u4e0a\uff0c\u5c31\u4f1a\u81ea\u52a8\u5448\u73b0\u6240\u6709\u6ce8\u518c\u8282\u70b9\u7684\u5143\u6570\u636e\uff0c\u6781\u5927\u65b9\u4fbf\u4e86\u8fd0\u7ef4\u540c\u5b66\u65e5\u5e38\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598173-0b456929-5c41-4ddc-9675-a80f5129621f.png",alt:"xinlang20"})),(0,r.kt)("p",null,"consul_kv.lua \u6a21\u5757\u5728\u7f51\u5173\u5c42\u7684\u914d\u7f6e\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u540c\u65f6\u652f\u6301\u591a\u4e2a\u4e0d\u540c Consul \u96c6\u7fa4\u8fde\u63a5\uff0c\u5f53\u7136\u8fd9\u4e5f\u662f\u5b9e\u9645\u73af\u5883\u8981\u6c42\u4f7f\u7136\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598228-bd02e3ab-3c70-4f2c-8860-3ddee4bb9dcc.png",alt:"xinlang21"})),(0,r.kt)("p",null,"\u76ee\u524d\u8fd9\u90e8\u5206\u4ee3\u7801\u5df2\u88ab\u5408\u5e76\u5230 APISIX master \u5206\u652f\u4e2d\uff0c2.4 \u7248\u672c\u5df2\u5305\u542b\u3002"),(0,r.kt)("p",null,"\u8be5\u6a21\u5757\u7684\u8fdb\u7a0b\u6a21\u578b\u91c7\u7528\u8ba2\u9605\u53d1\u5e03\u6a21\u5f0f\uff0c\u6bcf\u4e00\u4e2a\u7f51\u5173\u5b9e\u4f8b\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u8fdb\u7a0b\u53bb\u957f\u8fde\u63a5\u8f6e\u8be2\u591a\u4e2a\u7684 Consul \u670d\u52a1\u96c6\u7fa4\uff0c\u4e00\u65e6\u6709\u4e86\u65b0\u6570\u636e\u5c31\u4f1a\u4e00\u4e00\u5e7f\u64ad\u5206\u53d1\u5230\u6240\u6709\u4e1a\u52a1\u5b50\u8fdb\u7a0b\u3002"),(0,r.kt)("h2",{id:"5-\u5b9a\u5236\u5316\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u601d\u8003"},"5 \u5b9a\u5236\u5316\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u601d\u8003"),(0,r.kt)("h3",{id:"51-\u8fc1\u79fb\u6210\u672c\u9ad8"},"5.1 \u8fc1\u79fb\u6210\u672c\u9ad8"),(0,r.kt)("p",null,"\u5728\u8fd0\u7ef4\u5c42\u9762\u5176\u5b9e\u9762\u4e34\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u8fc1\u79fb\u6210\u672c\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4efb\u4f55\u4e00\u4e2a\u65b0\u4e8b\u7269\u51fa\u73b0\uff0c\u7528\u4e8e\u66ff\u6362\u73b0\u6709\u7684\u57fa\u7840\uff0c\u90fd\u4e0d\u4f1a\u4e00\u9a6c\u5e73\u5ddd\uff0c\u800c\u662f\u9700\u8981\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u6162\u6162\u719f\u6089\u3001\u589e\u8fdb\u8ba4\u77e5\uff0c\u7136\u540e\u4e0d\u505c\u8bd5\u9519\uff0c\u6162\u6162\u5411\u524d\u63a8\u8fdb\uff0c\u9010\u6e10\u6d88\u9664\u5927\u5bb6\u5fc3\u4e2d\u7684\u5404\u79cd\u7591\u60d1\u3002\u53ea\u6709\u5728\u7a33\u5b9a\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u5404\u79cd\u95ee\u9898\u90fd\u5f97\u5230\u89e3\u51b3\u4e4b\u540e\uff0c\u624d\u4f1a\u8fdb\u5165\u4e0b\u4e00\u6b65\u8f83\u4e3a\u5feb\u901f\u7684\u66ff\u6362\u9636\u6bb5\u3002\u6beb\u65e0\u7591\u95ee\uff0c\u5f53\u524d APISIX \u5728\u5fae\u535a\u7684\u4f7f\u7528\u8fd8\u5904\u4e8e\u9010\u6b65\u63a8\u8fdb\u7684\u9636\u6bb5\uff0c\u6211\u4eec\u8fd8\u5728\u4e0d\u65ad\u719f\u6089\u3001\u5b66\u4e60\u5e76\u6df1\u5165\u4e86\u89e3\uff0c\u540c\u65f6\u89e3\u51b3\u5404\u79cd\u5404\u6837\u7684\u8fc1\u79fb\u95ee\u9898\uff0c\u4ee5\u671f\u627e\u5230\u6700\u4f73\u5b9e\u8df5\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u4e00\u4e00\u5c06 nginx.conf \u6587\u4ef6\u4e2d\u7684\u5404\u79cd\u4e0a\u6e38\u4ee5\u53ca\u8def\u7531\u7b49\u89c4\u5219\u5bfc\u5165\u5230\u7f51\u5173\u7cfb\u7edf\u7ba1\u7406\u540e\u53f0\u4e2d\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u67af\u71e5\u7684\u624b\u52a8\u64cd\u4f5c\u8fc7\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u5f00\u53d1\u4e86\u5feb\u901f\u5bfc\u5165\u63a5\u53e3\uff0c\u63d0\u4f9b bash script \u811a\u672c\u4e00\u952e\u5f55\u5165\u7b49\u529f\u80fd\u6765\u7b80\u5316\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598279-1fa93710-e5a0-4dc4-b42b-46b02f66f6a8.png",alt:"xinlang22"})),(0,r.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u4f1a\u9047\u5230 NGINX \u5404\u79cd\u590d\u6742\u53d8\u91cf\u5224\u65ad\u8bed\u53e5\uff0c\u76ee\u524d\u4e3b\u8981\u662f\u53d1\u73b0\u4e00\u4e2a\u89e3\u51b3\u4e00\u4e2a\uff0c\u4e0d\u65ad\u79ef\u7d2f\u7ecf\u9a8c\u3002"),(0,r.kt)("h3",{id:"52-\u5b9a\u5236\u5316\u7a0b\u5ea6\u9ad8\uff0c\u5bfc\u81f4\u540e\u7eed\u5347\u7ea7\u6210\u672c\u8f83\u9ad8"},"5.2 \u5b9a\u5236\u5316\u7a0b\u5ea6\u9ad8\uff0c\u5bfc\u81f4\u540e\u7eed\u5347\u7ea7\u6210\u672c\u8f83\u9ad8"),(0,r.kt)("p",null,"\u65e0\u8bba\u662f Apache APISIX \u8fd8\u662f Apache APISIX Dashboard\uff0c\u6211\u4eec\u90fd\u505a\u4e86\u5f88\u591a\u5b9a\u5236\u5316\u5f00\u53d1\u3002\u8fd9\u5bfc\u81f4\u5347\u7ea7\u6700\u65b0\u7248 Dashboard \u8f83\u4e3a\u56f0\u96be\u3002\u4e0d\u8fc7\uff0c\u6211\u4eec\u5b9a\u5236\u5f00\u53d1\u6240\u9009\u62e9\u7684 Dashboard \u7248\u672c\u57fa\u672c\u529f\u80fd\u90fd\u5df2\u5177\u5907\uff0c\u6ee1\u8db3\u65e5\u5e38\u7528\u9014\u5012\u4e5f\u8db3\u591f\u4e86\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9 Apache APISIX \u7684\u5b9a\u5236\u5f00\u53d1\uff0c\u5219\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u5347\u7ea7\uff0c\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u4e86\u82e5\u5e72\u4e2a\u5c0f\u7248\u672c\u7684\u5347\u7ea7\u3002"),(0,r.kt)("h3",{id:"53-\u53cd\u54fa\u793e\u533a"},"5.3 \u53cd\u54fa\u793e\u533a"),(0,r.kt)("p",null,"\u6700\u540e\u6211\u4eec\u804a\u804a\u793e\u533a\uff0c\u6211\u4eec\u4e5f\u5728\u60f3\u600e\u4e48\u628a\u793e\u533a\u611f\u5174\u8da3\u7684\u529f\u80fd\u53cd\u54fa\u7ed9 Apache APISIX \u793e\u533a\uff0c\u8ba9\u5927\u5bb6\u4e00\u8d77\u4f7f\u7528\u548c\u4fee\u6539\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fdb\u884c\u5b9a\u5236\u5f00\u53d1\u7684\u9a71\u52a8\u529b\u4e3b\u8981\u6765\u81ea\u5fae\u535a\u5185\u90e8\u7684\u5b9e\u9645\u9700\u6c42\uff0c\u4e0e Apache APISIX \u793e\u533a\u63a8\u52a8\u7684\u6f14\u8fdb\u6709\u4e00\u4e9b\u51fa\u5165\uff0c\u8fd9\u662f\u5ba2\u89c2\u5b58\u5728\u7684\u4e8b\u5b9e\u3002\u4f46\u9664\u53bb\u4e00\u4e9b\u5305\u542b\u654f\u611f\u6570\u636e\u7684\u4ee3\u7801\uff0c\u4f01\u4e1a\u548c\u793e\u533a\u603b\u4f1a\u5728\u4e00\u4e9b\u6bd4\u8f83\u901a\u7528\u7684\u529f\u80fd\u4ee3\u7801\u5c42\u9762\u5b58\u5728\u5171\u540c\u9700\u6c42\uff0c\u4f01\u4e1a\u548c\u5f00\u6e90\u793e\u533a\u53ef\u4ee5\u4e00\u8d77\u63a8\u52a8\u4f7f\u4e4b\u8fdb\u5316\u5f97\u66f4\u4e3a\u7a33\u5b9a\u6210\u719f\u3002\u6bd4\u5982\u901a\u7528\u7684 Consul KV \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u3001\u4e00\u4e9b\u9ad8\u53ef\u7528\u914d\u7f6e\u6587\u4ef6\u7684\u5904\u7406\uff0c\u4ee5\u53ca\u5176\u5b83\u95ee\u9898\u7684\u4fee\u590d\u7b49\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u5171\u540c\u9700\u6c42\u4e00\u822c\u4f1a\u5728\u4f01\u4e1a\u5185\u90e8\u6253\u78e8\u4e00\u6bb5\u65f6\u95f4\uff0c\u76f4\u5230\u5b8c\u5168\u6ee1\u8db3\u5185\u90e8\u9700\u6c42\u4e4b\u540e\uff0c\u518d\u9010\u6b65\u63d0\u4ea4\u5230\u793e\u533a\u5f00\u6e90\u4ee3\u7801\u5206\u652f\u91cc\uff0c\u4f46\u8fd9\u4e5f\u9700\u8981\u4e00\u4e2a\u8fc7\u7a0b\u3002"))}o.isMDXComponent=!0}}]);