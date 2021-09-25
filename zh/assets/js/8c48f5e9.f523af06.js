(self.webpackChunk=self.webpackChunk||[]).push([[84515],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,k=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54070:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"\u8def\u7531 RadixTree"},p={unversionedId:"router-radixtree",id:"version-2.7/router-radixtree",isDocsHomePage:!1,title:"\u8def\u7531 RadixTree",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/router-radixtree.md",sourceDirName:".",slug:"/router-radixtree",permalink:"/zh/docs/apisix/2.7/router-radixtree",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/router-radixtree.md",version:"2.7",frontMatter:{title:"\u8def\u7531 RadixTree"},sidebar:"version-2.7/docs",previous:{title:"\u5065\u5eb7\u68c0\u67e5",permalink:"/zh/docs/apisix/2.7/health-check"},next:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/2.7/stand-alone"}},o=[{value:"\u4ec0\u4e48\u662f libradixtree\uff1f",id:"\u4ec0\u4e48\u662f-libradixtree\uff1f",children:[]},{value:"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 libradixtree\uff1f",id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-libradixtree\uff1f",children:[]},{value:"\u5982\u4f55\u901a\u8fc7 Nginx \u5185\u7f6e\u53d8\u91cf\u8fc7\u6ee4\u8def\u7531",id:"\u5982\u4f55\u901a\u8fc7-nginx-\u5185\u7f6e\u53d8\u91cf\u8fc7\u6ee4\u8def\u7531",children:[]},{value:"\u5982\u4f55\u901a\u8fc7 GraphQL \u5c5e\u6027\u8fc7\u6ee4\u8def\u7531",id:"\u5982\u4f55\u901a\u8fc7-graphql-\u5c5e\u6027\u8fc7\u6ee4\u8def\u7531",children:[]}],d={toc:o};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u662f-libradixtree\uff1f"},"\u4ec0\u4e48\u662f libradixtree\uff1f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree"},"libradixtree"),", \u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lua")," \u4e2d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenResty")," \u5b9e\u73b0\u7684\u81ea\u9002\u5e94\n",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%A0%91"},"\u57fa\u6570\u6811")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"libradixtree")," \u4f5c\u4e3a\u8def\u7531\u8c03\u5ea6\u5e93\u3002"),(0,l.kt)("h3",{id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-libradixtree\uff1f"},"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 libradixtree\uff1f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"libradixtree")," \u662f\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/antirez/rax"},"rax")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"lua-resty-*")," \u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0b\u9762\u7684\u793a\u4f8b\u53ef\u4ee5\u6709\u4e00\u4e2a\u76f4\u89c2\u7684\u7406\u89e3\u3002"),(0,l.kt)("h4",{id:"1-\u5b8c\u5168\u5339\u914d"},"1. \u5b8c\u5168\u5339\u914d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/blog/foo\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u53ea\u80fd\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/foo")," \u3002"),(0,l.kt)("h4",{id:"2-\u524d\u7f00\u5339\u914d"},"2. \u524d\u7f00\u5339\u914d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/blog/bar*\n")),(0,l.kt)("p",null,"\u5b83\u5c06\u5339\u914d\u5e26\u6709\u524d\u7f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar")," \u7684\u8def\u5f84\uff0c\n\u4f8b\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/a")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/b")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/c/d/e")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar")," \u7b49\u3002"),(0,l.kt)("h4",{id:"3-\u5339\u914d\u4f18\u5148\u7ea7"},"3. \u5339\u914d\u4f18\u5148\u7ea7"),(0,l.kt)("p",null,"\u5b8c\u5168\u5339\u914d -> \u6df1\u5ea6\u524d\u7f00\u5339\u914d"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u89c4\u5219:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/blog/foo/*\n/blog/foo/a/*\n/blog/foo/c/*\n/blog/foo/bar\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5339\u914d\u7ed3\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/bar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/a/b/c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/a/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/c/d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/c/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/gloo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/bar"),(0,l.kt)("td",{parentName:"tr",align:null},"not match")))),(0,l.kt)("h4",{id:"4-\u4e0d\u540c\u7684\u8def\u7531\u5177\u6709\u76f8\u540c-uri"},"4. \u4e0d\u540c\u7684\u8def\u7531\u5177\u6709\u76f8\u540c ",(0,l.kt)("inlineCode",{parentName:"h4"},"uri")),(0,l.kt)("p",null,"\u5f53\u4e0d\u540c\u7684\u8def\u7531\u6709\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u8def\u7531\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," \u5b57\u6bb5\u6765\u51b3\u5b9a\u5148\u5339\u914d\u54ea\u6761\u8def\u7531\uff0c\u6216\u8005\u6dfb\u52a0\u5176\u4ed6\u5339\u914d\u89c4\u5219\u6765\u533a\u5206\u4e0d\u540c\u7684\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u5339\u914d\u89c4\u5219\u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," \u5b57\u6bb5\u4f18\u5148\u4e8e\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u4e4b\u5916\u7684\u5176\u4ed6\u89c4\u5219\u3002"),(0,l.kt)("p",null,"1\u3001\u4e0d\u540c\u7684\u8def\u7531\u6709\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," \u5b57\u6bb5"),(0,l.kt)("p",null,"\u521b\u5efa\u4e24\u6761 ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," \u503c\u4e0d\u540c\u7684\u8def\u7531\uff08\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 3,\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 2,\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:1980/hello\n1980\n")),(0,l.kt)("p",null,"\u6240\u6709\u8bf7\u6c42\u53ea\u5230\u8fbe\u7aef\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"1980")," \u7684\u8def\u7531\u3002"),(0,l.kt)("p",null,"2\u3001\u4e0d\u540c\u7684\u8def\u7531\u6709\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u5e76\u8bbe\u7f6e\u4e0d\u540c\u7684\u5339\u914d\u6761\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u4e3b\u673a\u5339\u914d\u89c4\u5219\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["localhost.com"],\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["test.com"],\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: localhost.com'\n1980\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: test.com'\n1981\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/hello\n{"error_msg":"404 Route Not Found"}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"host")," \u89c4\u5219\u5339\u914d\uff0c\u8bf7\u6c42\u547d\u4e2d\u5bf9\u5e94\u7684\u4e0a\u6e38\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," \u4e0d\u5339\u914d\uff0c\u8bf7\u6c42\u8fd4\u56de404\u6d88\u606f\u3002"),(0,l.kt)("h4",{id:"5-\u53c2\u6570\u5339\u914d"},"5. \u53c2\u6570\u5339\u914d"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"radixtree_uri_with_parameter")," \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u53c2\u6570\u5339\u914d\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  router:\n    http: 'radixtree_uri_with_parameter'\n")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/blog/:name\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u5c06\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/dog")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/cat")," \u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u4f7f\u7528\u65b9\u5f0f\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"},"lua-resty-radixtree#parameters-in-path")),(0,l.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7-nginx-\u5185\u7f6e\u53d8\u91cf\u8fc7\u6ee4\u8def\u7531"},"\u5982\u4f55\u901a\u8fc7 Nginx \u5185\u7f6e\u53d8\u91cf\u8fc7\u6ee4\u8def\u7531"),(0,l.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u53ca\u4f7f\u7528\u65b9\u5f0f\u8bf7\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree#new"},"radixtree#new")," \u6587\u6863\n\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["http_host", "==", "iresty.com"],\n        ["cookie_device_id", "==", "a66f0cdc4ba2df8c096f74c9110163a9"],\n        ["arg_name", "==", "json"],\n        ["arg_age", ">", "18"],\n        ["arg_address", "~~", "China.*"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u8def\u7531\u9700\u8981\u8bf7\u6c42\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," \u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"iresty.com")," \uff0c\n\u8bf7\u6c42 cookie ",(0,l.kt)("inlineCode",{parentName:"p"},"_device_id")," \u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"a66f0cdc4ba2df8c096f74c9110163a9")," \u7b49\u3002"),(0,l.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7-graphql-\u5c5e\u6027\u8fc7\u6ee4\u8def\u7531"},"\u5982\u4f55\u901a\u8fc7 GraphQL \u5c5e\u6027\u8fc7\u6ee4\u8def\u7531"),(0,l.kt)("p",null,"APISIX \u652f\u6301\u901a\u8fc7 GraphQL \u7684\u4e00\u4e9b\u5c5e\u6027\u8fc7\u6ee4\u8def\u7531\u3002 \u76ee\u524d\u6211\u4eec\u652f\u6301\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"graphql_operation"),(0,l.kt)("li",{parentName:"ul"},"graphql_name"),(0,l.kt)("li",{parentName:"ul"},"graphql_root_fields")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u50cf\u8fd9\u6837\u7684 GraphQL\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"graphql_operation")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"query")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"graphql_name")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"getRepo"),"\uff0c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"graphql_root_fields")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u6cd5\u8fc7\u6ee4\u6389\u8fd9\u6837\u7684\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST"],\n    "uri": "/_graphql",\n    "vars": [\n        ["graphql_operation", "==", "query"],\n        ["graphql_name", "==", "getRepo"],\n        ["graphql_root_fields", "has", "owner"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u82b1\u8d39\u592a\u591a\u65f6\u95f4\u8bfb\u53d6\u65e0\u6548\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQL")," \u8bf7\u6c42\u6b63\u6587\uff0c\u6211\u4eec\u53ea\u8bfb\u53d6\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"1 MiB"),"\n\u6765\u81ea\u8bf7\u6c42\u4f53\u7684\u6570\u636e\u3002 \u6b64\u9650\u5236\u662f\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u914d\u7f6e\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  max_size: 1048576\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f20\u9012\u4e00\u4e2a\u5927\u4e8e\u9650\u5236\u7684 GraphQL \u67e5\u8be2\u8bed\u53e5 \uff0c\u4f60\u53ef\u4ee5\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u503c\u3002"))}u.isMDXComponent=!0}}]);