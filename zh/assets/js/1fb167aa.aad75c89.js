(self.webpackChunk=self.webpackChunk||[]).push([[70558],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<p;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),i={title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/apisix/next/getting-started",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/getting-started.md",version:"current",frontMatter:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},sidebar:"docs",previous:{title:"Debug Mode",permalink:"/zh/docs/apisix/next/architecture-design/debug-mode"},next:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX",permalink:"/zh/docs/apisix/next/how-to-build"}},o=[{value:"\u524d\u63d0",id:"\u524d\u63d0",children:[]},{value:"\u7b2c\u4e00\u6b65: \u5b89\u88c5 Apache APISIX",id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-apache-apisix",children:[]},{value:"\u7b2c\u4e8c\u6b65: \u521b\u5efa\u4e00\u4e2a Route",id:"\u7b2c\u4e8c\u6b65-\u521b\u5efa\u4e00\u4e2a-route",children:[{value:"\u5728\u6211\u4eec\u7ee7\u7eed\u4e4b\u524d",id:"\u5728\u6211\u4eec\u7ee7\u7eed\u4e4b\u524d",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff08Upstream\uff09",id:"\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff08upstream\uff09",children:[]},{value:"\u8def\u7531\u4e0e\u4e0a\u6e38\u7ed1\u5b9a",id:"\u8def\u7531\u4e0e\u4e0a\u6e38\u7ed1\u5b9a",children:[]},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]}]},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",children:[{value:"\u8eab\u4efd\u9a8c\u8bc1",id:"\u8eab\u4efd\u9a8c\u8bc1",children:[]},{value:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00",id:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00",children:[]},{value:"APISIX Dashboard\uff08\u63a7\u5236\u53f0\uff09",id:"apisix-dashboard\uff08\u63a7\u5236\u53f0\uff09",children:[]},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[]}]}],s={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6307\u5357\u65e8\u5728\u8ba9\u5927\u5bb6\u5165\u95e8 Apache APISIX\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u5bf9\u5916\u63d0\u4f9b\u516c\u5171 API \u7684\u670d\u52a1\uff0c\u5e76\u7531 API key \u8fdb\u884c\u8bbf\u95ee\u4fdd\u62a4\u3002"),(0,p.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u5c06\u4ee5\u4e0b\u9762\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"echo")," \u7aef\u70b9\u4e3a\u4f8b\uff0c\u5b83\u5c06\u8fd4\u56de\u6211\u4eec\u4f20\u9012\u7684\u53c2\u6570\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Request")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Response")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u4e0a\u9762\u7684\u8bf7\u6c42 URL\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Protocol: HTTP"),(0,p.kt)("li",{parentName:"ul"},"Port: 80"),(0,p.kt)("li",{parentName:"ul"},"Host: ",(0,p.kt)("inlineCode",{parentName:"li"},"httpbin.org")),(0,p.kt)("li",{parentName:"ul"},"URI/Path: ",(0,p.kt)("inlineCode",{parentName:"li"},"/get")),(0,p.kt)("li",{parentName:"ul"},"Query Parameters: foo1, foo2")),(0,p.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Apache APISIX\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/getting-started#%E7%AC%AC%E4%BA%8C%E6%AD%A5:-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-Route"},"\u7b2c\u4e8c\u6b65"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u672c\u6307\u5357\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," \u548c ",(0,p.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," \u6765\u5b89\u88c5 Apache APISIX\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"curl"),"\uff1a\u672c\u6307\u5357\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"li",href:"https://curl.se/docs/manpage.html"},"curl")," \u547d\u4ee4\u884c\u8fdb\u884c API \u6d4b\u8bd5\uff0c\u4f46\u662f\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5176\u5b83\u5de5\u5177\uff0c\u4f8b\u5982 ",(0,p.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),"\u3002")),(0,p.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-apache-apisix"},"\u7b2c\u4e00\u6b65: \u5b89\u88c5 Apache APISIX"),(0,p.kt)("p",null,"\u5f97\u76ca\u4e8e Docker\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 Apache APISIX \u5e76\u542f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apache/apisix-docker.git\n$ cd apisix-docker/example\n$ docker-compose -p docker-apisix up -d\n")),(0,p.kt)("p",null,"\u4e0b\u8f7d\u6240\u9700\u7684\u6240\u6709\u6587\u4ef6\u5c06\u82b1\u8d39\u4e00\u4e9b\u65f6\u95f4\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u7684\u7f51\u7edc\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"curl")," \u8bbf\u95ee Admin API\uff0c\u4ee5\u5224\u65ad Apache APISIX \u662f\u5426\u6210\u529f\u542f\u52a8\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u8bf7\u5728\u8fd0\u884c Docker \u7684\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c curl \u547d\u4ee4\u3002\n$ curl \"http://127.0.0.1:9080/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,p.kt)("p",null,"\u6211\u4eec\u671f\u671b\u83b7\u5f97\u4ee5\u4e0b\u8fd4\u56de\u6570\u636e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":1,\n  "action":"get",\n  "node":{\n    "key":"/apisix/services",\n    "nodes":{},\n    "dir":true\n  }\n}\n')),(0,p.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u521b\u5efa\u4e00\u4e2a-route"},"\u7b2c\u4e8c\u6b65: \u521b\u5efa\u4e00\u4e2a Route"),(0,p.kt)("p",null,"\u606d\u559c\uff01\u60a8\u73b0\u5728\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684 Apache APISIX \u5b9e\u4f8b\u4e86\uff01\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a Route\u3002"),(0,p.kt)("h3",{id:"\u5728\u6211\u4eec\u7ee7\u7eed\u4e4b\u524d"},"\u5728\u6211\u4eec\u7ee7\u7eed\u4e4b\u524d"),(0,p.kt)("p",null,"\u60a8\u77e5\u9053\u5417\uff1fApache APISIX \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," \u53ef\u4f9b\u6211\u4eec\u4f7f\u7528\uff0c\u4f46\u5728\u672c\u6307\u5357\u4e2d\u6211\u4eec\u4f7f\u7528 Admin API \u6765\u505a\u6f14\u793a\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/route"},"Route")," \u5e76\u4e0e\u540e\u7aef\u670d\u52a1\uff08\u901a\u5e38\u79f0\u4e4b\u4e3a\u4e0a\u6e38\uff1a ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/upstream"},"Upstream"),"\uff09\u7ed1\u5b9a\uff0c\u5f53\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\uff08Request\uff09")," \u5230\u8fbe Apache APISIX \u65f6\uff0cApache APISIX \u5c31\u4f1a\u660e\u767d\u8fd9\u4e2a\u8bf7\u6c42\u5e94\u8be5\u8f6c\u53d1\u5230\u54ea\u4e2a\u4e0a\u6e38\u670d\u52a1\u4e2d\u3002"),(0,p.kt)("p",null,"Apache APISIX \u662f\u5982\u4f55\u77e5\u9053\u7684\u5462\uff1f\u90a3\u662f\u56e0\u4e3a\u6211\u4eec\u4e3a Route \u5bf9\u8c61\u914d\u7f6e\u4e86\u5339\u914d\u89c4\u5219\u3002\u4e0b\u9762\u662f\u4e00\u4e2a Route \u914d\u7f6e\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/services/users/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\n')),(0,p.kt)("p",null,"\u8fd9\u6761\u8def\u7531\u914d\u7f6e\u610f\u5473\u7740\uff0c\u5f53\u5b83\u4eec\u6ee1\u8db3\u4e0b\u8ff0\u7684 ",(0,p.kt)("strong",{parentName:"p"},"\u6240\u6709")," \u89c4\u5219\u65f6\uff0c\u6240\u6709\u5339\u914d\u7684\u5165\u7ad9\u8bf7\u6c42\u90fd\u5c06\u88ab\u8f6c\u53d1\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u4e0a\u6e38\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684 HTTP \u65b9\u6cd5\u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"GET"),";"),(0,p.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5934\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"li"},"Host")," \u5b57\u6bb5\uff0c\u4e14\u5b83\u7684\u503c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"example.com"),";"),(0,p.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8def\u5f84\u5339\u914d ",(0,p.kt)("inlineCode",{parentName:"li"},"/services/users/*"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"li"},"*")," \u610f\u5473\u7740\u4efb\u610f\u7684\u5b50\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"li"},"/services/users/getAll?limit=10"),"\u3002")),(0,p.kt)("p",null,"\u5f53\u8fd9\u6761\u8def\u7531\u521b\u5efa\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u5bf9\u5916\u66b4\u9732\u7684\u5730\u5740\u53bb\u8bbf\u95ee\u540e\u7aef\u670d\u52a1\uff08\u5373\u4e0a\u6e38\uff09\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://{APISIX_BASE_URL}/services/users/getAll?limit=10" -H "Host: example.com"\n')),(0,p.kt)("p",null,"\u8fd9\u5c06\u4f1a\u88ab Apache APISIX \u8f6c\u53d1\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/services/users/getAll?limit=10"),"\u3002"),(0,p.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff08upstream\uff09"},"\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff08Upstream\uff09"),(0,p.kt)("p",null,"\u8bfb\u5b8c\u4e0a\u4e00\u8282\uff0c\u6211\u4eec\u77e5\u9053\u5fc5\u987b\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"\u8def\u7531")," \u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"\u4e0a\u6e38"),"\u3002\u53ea\u9700\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5373\u53ef\u521b\u5efa\u4e00\u4e2a\u4e0a\u6e38\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,p.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"roundrobin")," \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u5e76\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u8bbe\u7f6e\u4e3a\u6211\u4eec\u7684\u4e0a\u6e38\u76ee\u6807\uff08\u540e\u7aef\u670d\u52a1\uff09\uff0c\u5176 ID \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u66f4\u591a\u5b57\u6bb5\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api"},"Admin API"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u521b\u5efa\u4e0a\u6e38\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"\u63d2\u4ef6")," \u62e6\u622a\u8bf7\u6c42\uff0c\u7136\u540e\u76f4\u63a5\u54cd\u5e94\u3002\u4f46\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u9700\u8981\u8bbe\u7f6e\u81f3\u5c11\u4e00\u4e2a\u4e0a\u6e38\u3002"),(0,p.kt)("h3",{id:"\u8def\u7531\u4e0e\u4e0a\u6e38\u7ed1\u5b9a"},"\u8def\u7531\u4e0e\u4e0a\u6e38\u7ed1\u5b9a"),(0,p.kt)("p",null,"We just created an Upstream(Reference to our backend services), let's bind one Route with it!\n\u6211\u4eec\u521a\u521a\u521b\u5efa\u4e86\u4e00\u4e2a\u4e0a\u6e38(\u5f15\u7528\u6211\u4eec\u7684\u540e\u7aef\u670d\u52a1)\uff0c\u8ba9\u6211\u4eec\u4e3a\u5b83\u7ed1\u5b9a\u4e00\u4e2a\u8def\u7531\uff01"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "upstream_id": "1"\n}\'\n')),(0,p.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01"),(0,p.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,p.kt)("p",null,"\u518d\u6b21\u606d\u559c\uff01\u6211\u4eec\u5df2\u521b\u5efa\u4e86\u8def\u7531\u4e0e\u4e0a\u6e38\uff0c\u5e76\u5c06\u5b83\u4eec\u8fdb\u884c\u4e86\u7ed1\u5b9a\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u8bbf\u95ee Apache APISIX \u6765\u6d4b\u8bd5\u8fd9\u6761\u5df2\u7ecf\u521b\u5efa\u7684\u8def\u7531\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,p.kt)("p",null,"\u54c7\u54e6! \u5b83\u5c06\u4ece\u6211\u4eec\u7684\u4e0a\u6e38\uff08\u5b9e\u9645\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"httpbin.org"),"\uff09\u8fd4\u56de\u6570\u636e\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\uff01"),(0,p.kt)("h2",{id:"\u8fdb\u9636"},"\u8fdb\u9636"),(0,p.kt)("h3",{id:"\u8eab\u4efd\u9a8c\u8bc1"},"\u8eab\u4efd\u9a8c\u8bc1"),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u505a\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\uff0c\u7531\u4e8e\u6211\u4eec\u5728\u7b2c\u4e8c\u6b65\u4e2d\u521b\u5efa\u7684\u8def\u7531\u662f\u516c\u5171\u7684\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4eba")," \u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u73b0\u5728\u6211\u4eec\u5e0c\u671b\u53ea\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"John")," \u53ef\u4ee5\u8bbf\u95ee\u5b83\u3002\u8ba9\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"\u63d2\u4ef6\uff08Plugin\uff09")," \u6765\u5b9e\u73b0\u8fd9\u4e2a\u4fdd\u62a4\u63aa\u65bd\u3002"),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},"key-auth")," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09")," ",(0,p.kt)("inlineCode",{parentName:"p"},"John"),"\uff0c\u6211\u4eec\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u6307\u5b9a\u7684\u5bc6\u94a5:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/consumers" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "username": "john",\n  "plugins": {\n    "key-auth": {\n      "key": "key-of-john"\n    }\n  }\n}\'\n')),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u7ed1\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"\u6d88\u8d39\u8005\uff08John\uff09")," \u5230\u8def\u7531\u4e0a\uff0c\u6211\u4eec\u4ec5\u4ec5\u9700\u8981\u4e3a\u8def\u7531 ",(0,p.kt)("strong",{parentName:"p"},"\u542f\u7528")," ",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},"key-auth")," \u63d2\u4ef6\u5373\u53ef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "plugins": {\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,p.kt)("p",null,"OK\uff0c\u73b0\u5728\u5f53\u6211\u4eec\u8bbf\u95ee\u7b2c\u4e8c\u6b65\u521b\u5efa\u7684\u8def\u7531\u65f6\uff0c\u5c06\u4f1a\u4ea7\u751f\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"Unauthorized Error"),"\uff08\u672a\u7ecf\u6388\u6743\u7684\u9519\u8bef\uff09\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u6b63\u786e\u8bbf\u95ee\u90a3\u4e2a\u8def\u7531\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i -X GET http://127.0.0.1:9080/get -H \"Host: httpbin.org\" -H 'apikey: superSecretAPIKey'\n")),(0,p.kt)("p",null,"\u662f\u7684\uff0c\u4ec5\u4ec5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5e26\u6709\u6b63\u786e\u5bc6\u94a5\u7684\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"apikey")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Header"),"\uff01\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u62a4\u4efb\u4f55\u7684\u8def\u7531\u4e86\u3002"),(0,p.kt)("h3",{id:"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00"},"\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00"),(0,p.kt)("p",null,"\u73b0\u5728\uff0c\u5047\u8bbe\u60a8\u8981\u5411\u8def\u7531\u6dfb\u52a0\u524d\u7f00\uff08\u4f8b\u5982\uff1asamplePrefix\uff09\uff0c\u5e76\u4e14\u4e0d\u60f3\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"host")," \u5934\uff0c \u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u6765\u5b8c\u6210\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/samplePrefix/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "regex_uri": ["^/samplePrefix/get(.*)", "/get$1"]\n    },\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,p.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u8c03\u7528\u8def\u7531\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://127.0.0.1:9080/samplePrefix/get?param1=foo&param2=bar" -H "apikey: key-of-john"\n')),(0,p.kt)("h3",{id:"apisix-dashboard\uff08\u63a7\u5236\u53f0\uff09"},"APISIX Dashboard\uff08\u63a7\u5236\u53f0\uff09"),(0,p.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard"),"\uff0c\u8ba9\u6211\u4eec\u7684\u64cd\u4f5c\u66f4\u76f4\u89c2\u66f4\u8f7b\u677e\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/dashboard.jpeg",alt:"Dashboard"})),(0,p.kt)("h3",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u9700\u7684\u6240\u6709\u7aef\u53e3\uff08",(0,p.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7684 9080/9443/2379"),"\uff09\u672a\u88ab\u5176\u4ed6\u7cfb\u7edf/\u8fdb\u7a0b\u4f7f\u7528\u3002"),(0,p.kt)("p",{parentName:"li"},"  \u4e0b\u9762\u662f\u7ec8\u6b62\u6b63\u5728\u4fa6\u542c\u7279\u5b9a\u7aef\u53e3\uff08\u57fa\u4e8e unix \u7684\u7cfb\u7edf\uff09\u7684\u8fdb\u7a0b\u7684\u547d\u4ee4\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo fuser -k 9443/tcp\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c Docker \u5bb9\u5668\u6301\u7eed\u4e0d\u65ad\u5730\u91cd\u542f/\u5931\u8d25\uff0c\u8bf7\u767b\u5f55\u5bb9\u5668\u5e76\u89c2\u5bdf\u65e5\u5fd7\u4ee5\u8bca\u65ad\u95ee\u9898\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker logs -f --tail container_id\n")))))}c.isMDXComponent=!0}}]);