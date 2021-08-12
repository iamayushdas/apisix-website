(self.webpackChunk=self.webpackChunk||[]).push([[62870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,c=m["".concat(p,".").concat(h)]||m[h]||d[h]||l;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51763:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"Router radixtree"},o={unversionedId:"router-radixtree",id:"version-2.8/router-radixtree",isDocsHomePage:!1,title:"Router radixtree",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/router-radixtree.md",sourceDirName:".",slug:"/router-radixtree",permalink:"/zh/docs/apisix/router-radixtree",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/router-radixtree.md",version:"2.8",frontMatter:{title:"Router radixtree"},sidebar:"version-2.8/docs",previous:{title:"\u5065\u5eb7\u68c0\u67e5",permalink:"/zh/docs/apisix/health-check"},next:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/stand-alone"}},p=[{value:"what&#39;s libradixtree?",id:"whats-libradixtree",children:[]},{value:"How to use libradixtree in APISIX?",id:"how-to-use-libradixtree-in-apisix",children:[]},{value:"How to filter route by Nginx builtin variable",id:"how-to-filter-route-by-nginx-builtin-variable",children:[]},{value:"How to filter route by GraphQL attributes",id:"how-to-filter-route-by-graphql-attributes",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"whats-libradixtree"},"what's libradixtree?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree"},"libradixtree"),", adaptive radix trees implemented in Lua for OpenResty."),(0,l.kt)("p",null,"APISIX using libradixtree as route dispatching library."),(0,l.kt)("h3",{id:"how-to-use-libradixtree-in-apisix"},"How to use libradixtree in APISIX?"),(0,l.kt)("p",null,"This is Lua-Openresty implementation library base on FFI for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/antirez/rax"},"rax"),"."),(0,l.kt)("p",null,"Let's take a look at a few examples and have an intuitive understanding."),(0,l.kt)("h4",{id:"1-full-match"},"1. Full match"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/blog/foo\n")),(0,l.kt)("p",null,"It will only match ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/foo"),"."),(0,l.kt)("h4",{id:"2-prefix-matching"},"2. Prefix matching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/blog/bar*\n")),(0,l.kt)("p",null,"It will match the path with the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar"),", eg: ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/a"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/b"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar/c/d/e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/bar")," etc."),(0,l.kt)("h4",{id:"3-match-priority"},"3. Match priority"),(0,l.kt)("p",null,"Full match -> Deep prefix matching."),(0,l.kt)("p",null,"Here are the rules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/blog/foo/*\n/blog/foo/a/*\n/blog/foo/c/*\n/blog/foo/bar\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"path"),(0,l.kt)("th",{parentName:"tr",align:null},"Match result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/bar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/a/b/c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/a/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/c/d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/c/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/foo/gloo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/blog/foo/*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/blog/bar"),(0,l.kt)("td",{parentName:"tr",align:null},"not match")))),(0,l.kt)("h4",{id:"4-different-routes-have-the-same-uri"},"4. Different routes have the same ",(0,l.kt)("inlineCode",{parentName:"h4"},"uri")),(0,l.kt)("p",null,"When different routes have the same ",(0,l.kt)("inlineCode",{parentName:"p"},"uri"),", you can set the priority field of the route to determine which route to match first, or add other matching rules to distinguish different routes."),(0,l.kt)("p",null,"Note: In the matching rules, the ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," field takes precedence over other rules except ",(0,l.kt)("inlineCode",{parentName:"p"},"uri"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Different routes have the same ",(0,l.kt)("inlineCode",{parentName:"li"},"uri")," and set the ",(0,l.kt)("inlineCode",{parentName:"li"},"priority")," field")),(0,l.kt)("p",null,"Create two routes with different ",(0,l.kt)("inlineCode",{parentName:"p"},"priority")," values \u200b\u200b(the larger the value, the higher the priority)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 3,\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 2,\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"Test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:1980/hello\n1980\n")),(0,l.kt)("p",null,"All requests only hit the route of port ",(0,l.kt)("inlineCode",{parentName:"p"},"1980"),"."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Different routes have the same ",(0,l.kt)("inlineCode",{parentName:"li"},"uri")," and set different matching conditions")),(0,l.kt)("p",null,"Here is an example of setting host matching rules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["localhost.com"],\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["test.com"],\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"Test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: localhost.com'\n1980\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: test.com'\n1981\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/hello\n{"error_msg":"404 Route Not Found"}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," rule matches, the request hits the corresponding upstream, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," does not match, the request returns a 404 message."),(0,l.kt)("h4",{id:"5-parameter-match"},"5. Parameter match"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"radixtree_uri_with_parameter")," is used, we can match routes with parameters."),(0,l.kt)("p",null,"For example, with configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    router:\n        http: 'radixtree_uri_with_parameter'\n")),(0,l.kt)("p",null,"route like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/blog/:name\n")),(0,l.kt)("p",null,"will match both ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/dog")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/cat"),"."),(0,l.kt)("p",null,"For more details, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"},"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"),"."),(0,l.kt)("h3",{id:"how-to-filter-route-by-nginx-builtin-variable"},"How to filter route by Nginx builtin variable"),(0,l.kt)("p",null,"Please take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree#new"},"radixtree-new"),",\nhere is an simple example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["http_host", "==", "iresty.com"],\n        ["cookie_device_id", "==", "a66f0cdc4ba2df8c096f74c9110163a9"],\n        ["arg_name", "==", "json"],\n        ["arg_age", ">", "18"],\n        ["arg_address", "~~", "China.*"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"This route will require the request header ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," equal ",(0,l.kt)("inlineCode",{parentName:"p"},"iresty.com"),", request cookie key ",(0,l.kt)("inlineCode",{parentName:"p"},"_device_id")," equal ",(0,l.kt)("inlineCode",{parentName:"p"},"a66f0cdc4ba2df8c096f74c9110163a9")," etc."),(0,l.kt)("h3",{id:"how-to-filter-route-by-graphql-attributes"},"How to filter route by GraphQL attributes"),(0,l.kt)("p",null,"APISIX supports filtering route by some attributes of GraphQL. Currently we support:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"graphql_operation"),(0,l.kt)("li",{parentName:"ul"},"graphql_name"),(0,l.kt)("li",{parentName:"ul"},"graphql_root_fields")),(0,l.kt)("p",null,"For instance, with GraphQL like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql_operation")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"query")),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql_name")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"getRepo"),","),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql_root_fields")," is ",(0,l.kt)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),(0,l.kt)("p",null,"We can filter such route out with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST"],\n    "uri": "/_graphql",\n    "vars": [\n        ["graphql_operation", "==", "query"],\n        ["graphql_name", "==", "getRepo"],\n        ["graphql_root_fields", "has", "owner"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"To prevent spending too much time reading invalid GraphQL request body, we only read the first 1 MiB\ndata from the request body. This limitation is configured via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  max_size: 1048576\n\n")),(0,l.kt)("p",null,"If you need to pass a GraphQL body which is larger than the limitation, you can increase the value in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."))}s.isMDXComponent=!0}}]);