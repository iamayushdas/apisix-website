(self.webpackChunk=self.webpackChunk||[]).push([[27937],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97768:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=a(22122),n=a(19756),p=(a(67294),a(3905)),i={title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},l={unversionedId:"getting-started",id:"version-2.4/getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/apisix/2.4/getting-started",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/getting-started.md",version:"2.4",frontMatter:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},sidebar:"version-2.4/docs",previous:{title:"\u67b6\u6784\u8bbe\u8ba1",permalink:"/zh/docs/apisix/2.4/architecture-design"},next:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX",permalink:"/zh/docs/apisix/2.4/how-to-build"}},s=[{value:"\u524d\u63d0",id:"\u524d\u63d0",children:[]},{value:"\u7b2c\u4e00\u6b65: \u5b89\u88c5 APISIX",id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-apisix",children:[]},{value:"\u7b2c\u4e8c\u6b65: \u5728 Apache APISIX \u4e2d\u521b\u5efa Route",id:"\u7b2c\u4e8c\u6b65-\u5728-apache-apisix-\u4e2d\u521b\u5efa-route",children:[{value:"\u8bbe\u7f6e Upstream",id:"\u8bbe\u7f6e-upstream",children:[]},{value:"\u4e3a\u8f6c\u53d1 Upstream  \u6dfb\u52a0 Route \u4fe1\u606f",id:"\u4e3a\u8f6c\u53d1-upstream--\u6dfb\u52a0-route-\u4fe1\u606f",children:[]},{value:"\u8bbf\u95ee Apache APISIX \u8fdb\u884c\u6d4b\u8bd5",id:"\u8bbf\u95ee-apache-apisix-\u8fdb\u884c\u6d4b\u8bd5",children:[]}]},{value:"\u7b2c\u4e09\u6b65: \u4e3a\u670d\u52a1\u589e\u52a0\u9274\u6743",id:"\u7b2c\u4e09\u6b65-\u4e3a\u670d\u52a1\u589e\u52a0\u9274\u6743",children:[]},{value:"\u4e3a route \u6dfb\u52a0\u524d\u7f00",id:"\u4e3a-route-\u6dfb\u52a0\u524d\u7f00",children:[]},{value:"Apache APISIX \u63a7\u5236\u53f0",id:"apache-apisix-\u63a7\u5236\u53f0",children:[{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[]}]}],o={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6307\u5357\u7684\u76ee\u7684\u662f\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 APISIX \u6765\u914d\u7f6e\u51fa\u4e00\u4e2a\u5b89\u5168\u7684\u53ef\u4ee5\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684 API\u3002\u5f53\u60a8\u8bfb\u5b8c\u672c\u6307\u5357\uff0c\u4f60\u9700\u8981\u81ea\u5df1\u5b89\u88c5\u4e00\u4e0b APISIX \u5e94\u7528\uff0c\u5e76\u51c6\u5907\u597d\u4e00\u4e2a\u53ef\u4ee5\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684 API\uff0c\u8be5\u670d\u52a1\u5c06\u7531 API key \u8fdb\u884c\u8bbf\u95ee\u4fdd\u62a4\u3002"),(0,p.kt)("p",null,"\u672c\u6307\u5357\u4f1a\u4f7f\u7528\u5230\u4ee5\u4e0b GET \u8bf7\u6c42\uff0c\u8be5\u670d\u52a1\u53ef\u4ee5\u56de\u663e\u53d1\u9001\u5230\u8fd9\u4e2a API \u7684\u4f20\u53c2\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --location --request GET "https://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a URL \u8bf7\u6c42"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Scheme: HTTPS"),(0,p.kt)("li",{parentName:"ul"},"Host/Address: httpbin.org"),(0,p.kt)("li",{parentName:"ul"},"Port: 443"),(0,p.kt)("li",{parentName:"ul"},"URI: /get"),(0,p.kt)("li",{parentName:"ul"},"Query Parameters: foo1, foo2")),(0,p.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u672c\u6307\u5357\u4f7f\u7528 docker \u548c docker compose \u6765\u5b89\u88c5 Apache APISIX\u3002 \u4f46\u662f\uff0c \u5982\u679c\u60a8\u5df2\u7ecf\u4ee5\u5176\u4ed6\u65b9\u5f0f\u5b89\u88c5\u4e86 Apache APISIX \uff0c\u60a8\u53ea\u9700\u8df3\u5230 ",(0,p.kt)("a",{parentName:"li",href:"/zh/docs/apisix/2.4/getting-started#%E7%AC%AC%E4%BA%8C%E6%AD%A5:-%E5%9C%A8-APISIX-%E4%B8%AD%E8%AE%BE%E7%BD%AE%E8%B7%AF%E7%94%B1"},"\u7b2c\u4e8c\u6b65")," \u3002"),(0,p.kt)("li",{parentName:"ul"},"Curl\uff1a\u6307\u5357\u4f7f\u7528 Curl \u547d\u4ee4\u8fdb\u884c API \u6d4b\u8bd5\uff0c\u4f46\u662f\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u5176\u4ed6\u5de5\u5177\uff08 \u4f8b\u5982 Postman \uff09\u3002")),(0,p.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-apisix"},"\u7b2c\u4e00\u6b65: \u5b89\u88c5 APISIX"),(0,p.kt)("p",null,"Apache APISIX \u53ef\u4ee5\u591a\u79cd\u64cd\u4f5c\u73af\u5883\u4e2d\u5b89\u88c5\u3002",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.4/how-to-build#%E9%80%9A%E8%BF%87%E6%BA%90%E7%A0%81%E5%8C%85%E5%AE%89%E8%A3%85"},"\u5982\u4f55\u5b89\u88c5\u6587\u6863")," \u663e\u793a\u4e86\u591a\u4e2a\u5e73\u53f0\u4e2d\u7684\u5b89\u88c5\u6b65\u9aa4\u3002\n\u4e3a\u4e86\u5feb\u901f\u5165\u95e8\uff0c\u8ba9\u6211\u4eec\u57fa\u4e8e docker \u5bb9\u5668\u7684\u5b89\u88c5\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u3002\u542f\u52a8 Apache APISIX \u670d\u52a1\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u7167\u8fd9\u4e2a\u955c\u50cf\u6587\u4ef6",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"repository")," \u5e76\u5207\u6362\u5230 example \u6587\u4ef6\u5939\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u5982\u4e0b\u547d\u4ee4\u4f1a\u542f\u52a8 Apache APISIX \u670d\u52a1\u5e76\u9ed8\u8ba4\u5728 9080 \u7aef\u53e3\uff08 https \u8bf7\u6c42\u662f 9443 \u7aef\u53e3\uff09 \u63d0\u4f9b admin API \u63a5\u53e3\u670d\u52a1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apache/apisix-docker.git\n$ cd apisix-docker/example\n$ docker-compose -p docker-apisix up -d\n")),(0,p.kt)("p",null,"\u7b2c\u4e00\u6b21\u4e0b\u8f7d\u6e90\u4ee3\u7801\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\uff0c\u4e4b\u540e\u5c06\u975e\u5e38\u5feb\u3002\u5728 docker \u5bb9\u5668\u542f\u52a8\u540e\uff0c\u8bf7\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\uff0c\u68c0\u67e5\u60a8\u662f\u5426\u83b7\u5f97\u6210\u529f\u7684\u54cd\u5e94\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl \"http://127.0.0.1:9080/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,p.kt)("p",null,"\u4e0b\u9762\u662f Admin API \u7684\u63a5\u53e3\u54cd\u5e94\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "node": {\n        "createdIndex": 6,\n        "modifiedIndex": 6,\n        "key": "/apisix/services",\n        "dir": true\n        },\n    "action": "get"\n}\n')),(0,p.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u5728-apache-apisix-\u4e2d\u521b\u5efa-route"},"\u7b2c\u4e8c\u6b65: \u5728 Apache APISIX \u4e2d\u521b\u5efa Route"),(0,p.kt)("p",null,"\u4e3a\u4e86\u914d\u7f6e\u5404\u79cd routes / services / plugins \uff0cAPISIX \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 Admin API \u548c\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"web\u63a7\u5236\u53f0"),"\u3002\n\u672c\u6307\u5357\u5c06\u4f1a\u4f7f\u7528\u5230 Admin API \u63a5\u53e3\u3002"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5fae\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7 APISIX \u7684\u8def\u7531\u3001\u670d\u52a1\u3001\u4e0a\u6e38\u548c\u63d2\u4ef6\u7b49\u591a\u4e2a\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb\u8fdb\u884c\u914d\u7f6e\u3002\nRoute\uff08\u8def\u7531\uff09\u4e0e\u5ba2\u6237\u7aef\u8bf7\u6c42\u5339\u914d\uff0c\u5e76\u6307\u5b9a\u5b83\u4eec\u5230\u8fbe APISIX \u540e\u5982\u4f55\u53d1\u9001\u5230 Upstream\uff08\u4e0a\u6e38\uff0c\u540e\u7aef API \u670d\u52a1\uff09\u3002\nService\uff08\u670d\u52a1\uff09\u4e3a\u4e0a\u6e38\u670d\u52a1\u63d0\u4f9b\u4e86\u62bd\u8c61\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u5355\u4e2a Service \u5e76\u5728\u591a\u4e2a Route \u4e2d\u5f15\u7528\u5b83\u3002\n\u67e5\u770b\u67b6\u6784\u6587\u6863\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,p.kt)("p",null,"\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u6240\u6709\u8fd9\u4e9b\u4fe1\u606f\uff08upstream\u3001service\u3001plugins\uff09\u90fd\u53ef\u4ee5\u5305\u542b\u5728\u8def\u7531\u914d\u7f6e\u4e2d\u3002 Route \u8def\u7531\u662f\u7531\u8fd9\u4e09\u4e2a\u4e3b\u8981\u90e8\u5206\u7ec4\u6210\u7684\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8def\u7531\u5339\u914d\u89c4\u5219\uff1a"),(0,p.kt)("p",{parentName:"li"},"  \u8ba9\u6211\u4eec\u6765\u770b\u770b\u4e0b\u9762\u7684\u573a\u666f\n",(0,p.kt)("a",{parentName:"p",href:"http://example.com/services/users"},"http://example.com/services/users")),(0,p.kt)("p",{parentName:"li"},"  \u4e0a\u9762\u7684URL\u6258\u7ba1\u4e86\u7cfb\u7edf\u4e2d\u6240\u6709\u8ddf\u7528\u6237\u6709\u5173\u7684\uff08getUser/GetAllUsers\uff09\u5fae\u670d\u52a1\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7URL\uff08 ",(0,p.kt)("a",{parentName:"p",href:"http://example.com/services/users/GetAllUsers"},"http://example.com/services/users/GetAllUsers")," \uff09 \u8bbf\u95ee\u5230 GetAllUsers \u670d\u52a1\u63a5\u53e3\u3002\n\u73b0\u5728\u8981\u516c\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"users")," \u8def\u5f84\u4e0b\u7684\u6240\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"GET")," \u670d\u52a1\u8bf7\u6c42\uff08\u5fae\u670d\u52a1\uff09\u3002\u4ee5\u4e0b\u662f\u5339\u914d\u6b64\u7c7b\u8bf7\u6c42\u7684\u8def\u7531\u914d\u7f6e\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "methods": ["GET"],\n    "host": "example.com",\n    "uri": "/services/users/*",\n    ... Additional Configurations\n}\n')),(0,p.kt)("p",{parentName:"li"},"  \u901a\u8fc7\u4e0a\u9762\u7684\u5339\u914d\u89c4\u5219\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u547d\u4ee4\u8ddf APISIX \u8fdb\u884c\u4ea4\u4e92\u4e86"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://{apisix_server.com}:{port}/services/users/getAllUsers?limit=10" -H "Host: example.com"\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Upstream \u4fe1\u606f\uff1a"),(0,p.kt)("p",{parentName:"li"},"  Upstream \u662f\u4e00\u4e2a\u865a\u62df\u4e3b\u673a\u62bd\u8c61\uff0c\u5b83\u6839\u636e\u914d\u7f6e\u89c4\u5219\u5728\u7ed9\u5b9a\u7684\u4e00\u7ec4\u670d\u52a1\u8282\u70b9\u4e0a\u6267\u884c\u8d1f\u8f7d\u5e73\u8861\u3002\n\u56e0\u6b64\uff0c\u5355\u4e2a\u4e0a\u6e38\u914d\u7f6e\u53ef\u4ee5\u7531\u63d0\u4f9b\u76f8\u540c\u670d\u52a1\u7684\u591a\u4e2a\u670d\u52a1\u5668\u7ec4\u6210\u3002\u6bcf\u4e2a\u8282\u70b9\u5c06\u5305\u62ec\u4e00\u4e2a key\uff08\u5730\u5740/ip:port\uff09\u548c\u4e00\u4e2a value \uff08\u8282\u70b9\u7684\u6743\u91cd\uff09\u3002\n\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u8f6e\u8be2\u6216\u4e00\u81f4\u54c8\u5e0c\uff08cHash\uff09\u673a\u5236\u8fdb\u884c\u8d1f\u8f7d\u5e73\u8861\u3002"),(0,p.kt)("p",{parentName:"li"},"  \u914d\u7f6e\u8def\u7531\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e Upstream \u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u670d\u52a1\u62bd\u8c61\u6765\u5f15\u7528 Upstream \u4fe1\u606f\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5404\u79cd\u63d2\u4ef6"),(0,p.kt)("p",{parentName:"li"},"  \u63d2\u4ef6\u5141\u8bb8\u60a8\u6269\u5c55 APISIX \u7684\u529f\u80fd\uff0c\u5e76\u5b9e\u73b0\u53ef\u4ee5\u4e0e HTTP request / response \u751f\u547d\u5468\u671f\u63a5\u53e3\u7684\u4efb\u610f\u903b\u8f91\u3002\n\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u60f3\u5bf9 API \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4f7f\u7528\u5bc6\u94a5\u9a8c\u8bc1\u63d2\u4ef6\u6765\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u5f3a\u5236\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"))),(0,p.kt)("h3",{id:"\u8bbe\u7f6e-upstream"},"\u8bbe\u7f6e Upstream"),(0,p.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5728 APISIX \u4e2d\u521b\u5efa id \u4e3a 50 \u7684\u4e0a\u6e38\u4fe1\u606f\uff0c\u5e76\u4f7f\u7528 round-robin \u673a\u5236\u8fdb\u884c\u8d1f\u8f7d\u5e73\u8861\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/upstreams/50" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "type": "roundrobin",\n    "nodes": {\n        "httpbin.org:443": 1\n    }\n}\'\n')),(0,p.kt)("h3",{id:"\u4e3a\u8f6c\u53d1-upstream--\u6dfb\u52a0-route-\u4fe1\u606f"},"\u4e3a\u8f6c\u53d1 Upstream  \u6dfb\u52a0 Route \u4fe1\u606f"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cApache APISIX \u901a\u8fc7 HTTP \u534f\u8bae\u4ee3\u7406\u8bf7\u6c42\u3002\u5982\u679c\u6211\u4eec\u7684\u540e\u7aef\u6258\u7ba1\u5728 HTTPS \u73af\u5883\u4e2d\uff0c\u8ba9\u6211\u4eec\u4f7f\u7528 proxy-rewrite \u63d2\u4ef6\u5c06\u65b9\u6848\u66f4\u6539\u4e3a HTTPS \u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/5" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "host": "httpbin.org",\n    "plugins": {\n        "proxy-rewrite": {\n          "scheme": "https"\n        }\n    },\n    "upstream_id": 50\n}\'\n')),(0,p.kt)("h3",{id:"\u8bbf\u95ee-apache-apisix-\u8fdb\u884c\u6d4b\u8bd5"},"\u8bbf\u95ee Apache APISIX \u8fdb\u884c\u6d4b\u8bd5"),(0,p.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u8c03\u7528 Apache APISIX \u6765\u6d4b\u8bd5\u65b0\u914d\u7f6e\u7684\u8def\u7531\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,p.kt)("p",null,"API \u4e5f\u53ef\u4ee5\u901a\u8fc7 HTTPs\uff089443\uff09\u7aef\u53e3\u670d\u52a1\u8bbf\u95ee\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u90a3\u4e48\u901a\u8fc7 curl \u547d\u4ee4\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"-k")," \u53c2\u6570\u5ffd\u7565\u81ea\u7b7e\u540d\u8bc1\u4e66\u9519\u8bef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -k -X GET "https://127.0.0.1:9443/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,p.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u4e3a\u670d\u52a1\u589e\u52a0\u9274\u6743"},"\u7b2c\u4e09\u6b65: \u4e3a\u670d\u52a1\u589e\u52a0\u9274\u6743"),(0,p.kt)("p",null,"\u7531\u4e8e\u670d\u52a1\u5bf9\u516c\u4f17\u5f00\u653e\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u65b0\u521b\u5efa\u7684 Apache APISIX \u670d\u52a1\u63a5\u53e3\u63d0\u4f9b\u9002\u5f53\u7684\u4fdd\u62a4\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a John \u9700\u8981 api-key \u7684\u7528\u6237\u3002"),(0,p.kt)("p",null,"\u6ce8\uff1aApache APISIX \u652f\u6301\u591a\u79cd\u8ba4\u8bc1\u673a\u5236\uff0c\u67e5\u770b\u63d2\u4ef6\u6587\u6863\u4e86\u89e3\u66f4\u591a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "john",\n    "plugins": {\n        "key-auth": {\n            "key": "superSecretAPIKey"\n        }\n    }\n}\'\n')),(0,p.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5c06\u670d\u52a1\u914d\u7f6e\u4e3a\u5305\u542b KEY \u9a8c\u8bc1\u63d2\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "host": "httpbin.org",\n    "plugins": {\n        "proxy-rewrite": {\n          "scheme": "https"\n        },\n        "key-auth": {}\n    },\n    "upstream_id": 50\n}\'\n')),(0,p.kt)("p",null,"\u7531\u4e8e route \u7531\u5bc6\u94a5\u9a8c\u8bc1\u63d2\u4ef6\u4fdd\u62a4\uff0c\u524d\u4e00\u4e2a\u8bbf\u95ee API \u7684 curl \u547d\u4ee4\u5c06\u4ea7\u751f\u672a\u7ecf\u6388\u6743\u7684\u8bbf\u95ee\u9519\u8bef\u3002\n\u73b0\u5728\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5b89\u5168\u5730\u8bbf\u95ee\u8bf7\u6c42\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i -X GET http://127.0.0.1:9080/get -H \"Host: httpbin.org\" -H 'apikey: superSecretAPIKey'\n")),(0,p.kt)("h2",{id:"\u4e3a-route-\u6dfb\u52a0\u524d\u7f00"},"\u4e3a route \u6dfb\u52a0\u524d\u7f00"),(0,p.kt)("p",null,"\u73b0\u5728\uff0c\u5047\u8bbe\u60a8\u8981\u5411\u8def\u7531\u6dfb\u52a0\u524d\u7f00\uff08\u4f8b\u5982\uff1asamplePrefix\uff09\uff0c\u5e76\u4e14\u4e0d\u60f3\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"host")," \u5934\uff0c \u5219\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u6765\u5b8c\u6210\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/samplePrefix/get",\n    "plugins": {\n        "proxy-rewrite": {\n          "scheme": "https",\n          "regex_uri": ["^/samplePrefix/get(.*)", "/get$1"]\n        },\n        "key-auth": {}\n    },\n    "upstream_id": 50\n}\'\n')),(0,p.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8c03\u7528\u8def\u7531\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i -X GET 'http://127.0.0.1:9080/samplePrefix/get?param1=foo&param2=bar' -H 'apikey: superSecretAPIKey'\n")),(0,p.kt)("h2",{id:"apache-apisix-\u63a7\u5236\u53f0"},"Apache APISIX \u63a7\u5236\u53f0"),(0,p.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u5df2\u7ecf\u901a\u8fc7\u4f7f\u7528 admin API \u63a5\u53e3\u7f16\u6392\u5bf9 Apache APISIX \u7684 API \u7684\u8c03\u7528\u3002\u7136\u800c\uff0cApache APISIX \u8fd8\u63d0\u4f9b\u6267\u884c\u7c7b\u4f3c\u64cd\u4f5c\u7684\u4e00\u4e2a web \u5e94\u7528\uff0c\u5c31\u662fweb\u63a7\u5236\u53f0\u3002\n\u53ef\u4ee5\u5728",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"repository"),"\u4e2d\u4f7f\u7528\u3002\u63a7\u5236\u53f0\u662f\u76f4\u89c2\u7684\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b83\u7f16\u6392\u540c\u6837\u7684\u8def\u7531\u914d\u7f6e\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/dashboard.png",alt:"Dashboard"})),(0,p.kt)("h3",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u9700\u7684\u7aef\u53e3\u672a\u88ab\u5176\u4ed6\u7cfb\u7edf/\u8fdb\u7a0b\u4f7f\u7528\uff08\u9ed8\u8ba4\u7aef\u53e3\u4e3a\uff1a9080\u30019443\u30012379\uff09\u3002\u4e0b\u9762\u662f\u7ec8\u6b62\u6b63\u5728\u4fa6\u542c\u7279\u5b9a\u7aef\u53e3\uff08\u57fa\u4e8eunix\u7684\u7cfb\u7edf\uff09\u7684\u8fdb\u7a0b\u7684\u547d\u4ee4\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fuser -k 9443/tcp\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c docker \u5bb9\u5668\u6301\u7eed\u91cd\u542f\u6216\u8005\u91cd\u542f\u5931\u8d25\uff0c\u8bf7\u767b\u5f55\u5bb9\u5668\u5e76\u89c2\u5bdf\u65e5\u5fd7\u4ee5\u8bca\u65ad\u95ee\u9898\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --tail container_id\n")))))}c.isMDXComponent=!0}}]);