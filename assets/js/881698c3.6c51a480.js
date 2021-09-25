(self.webpackChunk=self.webpackChunk||[]).push([[12092],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52109:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"ip-restriction"},o={unversionedId:"plugins/ip-restriction",id:"version-2.10.0/plugins/ip-restriction",isDocsHomePage:!1,title:"ip-restriction",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10.0/plugins/ip-restriction.md",sourceDirName:"plugins",slug:"/plugins/ip-restriction",permalink:"/docs/apisix/2.10.0/plugins/ip-restriction",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/ip-restriction.md",version:"2.10.0",frontMatter:{title:"ip-restriction"},sidebar:"version-2.10.0/docs",previous:{title:"uri-blocker",permalink:"/docs/apisix/2.10.0/plugins/uri-blocker"},next:{title:"ua-restriction",permalink:"/docs/apisix/2.10.0/plugins/ua-restriction"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Change the restriction",id:"change-the-restriction",children:[]},{value:"Test Plugin after restriction change",id:"test-plugin-after-restriction-change",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ip-restriction")," can restrict access to a Service or a Route by either\nwhitelisting or blacklisting IP addresses. Single IPs, multiple IPs or ranges\nin CIDR notation like 10.10.10.0/24 can be used."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of IPs or CIDR ranges to whitelist.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of IPs or CIDR ranges to blacklist.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Your IP address is not allowed."),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 1024]"),(0,i.kt)("td",{parentName:"tr",align:null},"Message returned in case IP access is not allowed.")))),(0,i.kt)("p",null,"One of ",(0,i.kt)("inlineCode",{parentName:"p"},"whitelist")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"blacklist")," must be specified, and they can not work together.\nThe message can be user-defined."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Creates a route or service object, and enable plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"ip-restriction"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.1",\n                "113.74.26.106/24"\n            ]\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Default returns ",(0,i.kt)("inlineCode",{parentName:"p"},'{"message":"Your IP address is not allowed"}')," when unallowed IP access. If you want to use a custom message, you can configure it in the plugin section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n    "ip-restriction": {\n        "whitelist": [\n            "127.0.0.1",\n            "113.74.26.106/24"\n        ],\n        "message": "Do you want to do something bad?"\n    }\n}\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"Requests from ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"Requests from ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html -i --interface 127.0.0.2\nHTTP/1.1 403 Forbidden\n...\n{"message":"Your IP address is not allowed"}\n')),(0,i.kt)("h2",{id:"change-the-restriction"},"Change the restriction"),(0,i.kt)("p",null,"When you want to change the whitelisted ip, it is very simple,\nyou can send the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.2",\n                "113.74.26.106/24"\n            ]\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin-after-restriction-change"},"Test Plugin after restriction change"),(0,i.kt)("p",null,"Requests from ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.2:9080/index.html -i --interface 127.0.0.2\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"Requests from ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"Your IP address is not allowed"}\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip-restriction")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ip-restriction")," plugin has been disabled now. It works for other plugins."))}u.isMDXComponent=!0}}]);