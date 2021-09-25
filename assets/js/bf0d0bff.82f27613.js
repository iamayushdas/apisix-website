(self.webpackChunk=self.webpackChunk||[]).push([[83437],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74252:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"grpc-transcode"},o={unversionedId:"plugins/grpc-transcode",id:"version-2.10.0/plugins/grpc-transcode",isDocsHomePage:!1,title:"grpc-transcode",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10.0/plugins/grpc-transcode.md",sourceDirName:"plugins",slug:"/plugins/grpc-transcode",permalink:"/docs/apisix/2.10.0/plugins/grpc-transcode",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/grpc-transcode.md",version:"2.10.0",frontMatter:{title:"grpc-transcode"},sidebar:"version-2.10.0/docs",previous:{title:"proxy-rewrite",permalink:"/docs/apisix/2.10.0/plugins/proxy-rewrite"},next:{title:"fault-injection",permalink:"/docs/apisix/2.10.0/plugins/fault-injection"}},p=[{value:"Name",id:"name",children:[{value:"Proto",id:"proto",children:[]}]},{value:"Attribute List",id:"attribute-list",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Use pb_option option of grpc-transcode plugin",id:"use-pb_option-option-of-grpc-transcode-plugin",children:[{value:"option list",id:"option-list",children:[]},{value:"Test pb_option",id:"test-pb_option",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"HTTP(s) -> APISIX -> gRPC server"),(0,l.kt)("h3",{id:"proto"},"Proto"),(0,l.kt)("h4",{id:"attributes"},"Attributes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content"),": ",(0,l.kt)("inlineCode",{parentName:"li"},".proto")," file's content.")),(0,l.kt)("h4",{id:"add-a-proto"},"Add a proto"),(0,l.kt)("p",null,"Here's an example, adding a proto which ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/proto/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc SayHello (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n    }\n    message HelloReply {\n        string message = 1;\n    }"\n}\'\n')),(0,l.kt)("h2",{id:"attribute-list"},"Attribute List"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proto_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string/integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".proto")," content id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the grpc service name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the method name of grpc service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deadline"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"deadline for grpc, ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pb_option"),(0,l.kt)("td",{parentName:"tr",align:null},"array[string(",(0,l.kt)("a",{parentName:"td",href:"#use-pb_option-option-of-grpc-transcode-plugin"},"pb_option_def"),")]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"protobuf options")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Here's an example, to enable the grpc-transcode plugin to specified route:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"attention: the ",(0,l.kt)("inlineCode",{parentName:"li"},"scheme")," in the route's upstream must be ",(0,l.kt)("inlineCode",{parentName:"li"},"grpc")),(0,l.kt)("li",{parentName:"ul"},"the grpc server example\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iresty/grpc_server_example"},"grpc_server_example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "helloworld.Greeter",\n            "method": "SayHello"\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"The above configuration proxy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/grpctest?name=world\n")),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Fri, 16 Aug 2019 11:55:36 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\nProxy-Connection: keep-alive\n\n{"message":"Hello world"}\n')),(0,l.kt)("p",null,"This means that the proxying is working."),(0,l.kt)("h2",{id:"use-pb_option-option-of-grpc-transcode-plugin"},"Use pb_option option of grpc-transcode plugin"),(0,l.kt)("h3",{id:"option-list"},"option list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"enum as result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enum_as_name"),(0,l.kt)("li",{parentName:"ul"},"enum_as_value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"int64 as result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"int64_as_number"),(0,l.kt)("li",{parentName:"ul"},"int64_as_string"),(0,l.kt)("li",{parentName:"ul"},"int64_as_hexstring"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"default values option"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"auto_default_values"),(0,l.kt)("li",{parentName:"ul"},"no_default_values"),(0,l.kt)("li",{parentName:"ul"},"use_default_values"),(0,l.kt)("li",{parentName:"ul"},"use_default_metatable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"hooks option"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enable_hooks"),(0,l.kt)("li",{parentName:"ul"},"disable_hooks")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/23 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/zeebe/WorkflowInstanceCreate",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "gateway_protocol.Gateway",\n            "method": "CreateWorkflowInstance",\n            "pb_option":["int64_as_string"]\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:26500": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"test-pb_option"},"Test pb_option"),(0,l.kt)("p",null,"Visit configured route\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/zeebe/WorkflowInstanceCreate?bpmnProcessId=order-process&version=1&variables=\\{\\"orderId\\":\\"7\\",\\"ordervalue\\":99\\}"\nHTTP/1.1 200 OK\nDate: Wed, 13 Nov 2019 03:38:27 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-encoding: identity\ngrpc-accept-encoding: gzip\nServer: APISIX web server\nTrailer: grpc-status\nTrailer: grpc-message\n\n{"workflowKey":"#2251799813685260","workflowInstanceKey":"#2251799813688013","bpmnProcessId":"order-process","version":1}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'"workflowKey":"#2251799813685260"')," suggests pb_option configuration success."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable ",(0,l.kt)("inlineCode",{parentName:"p"},"grpc-transcode"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/grpctest",\n    "plugins": {},\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);