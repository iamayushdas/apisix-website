(self.webpackChunk=self.webpackChunk||[]).push([[75692],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37685:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"key-auth"},u={unversionedId:"plugins/key-auth",id:"version-2.5/plugins/key-auth",isDocsHomePage:!1,title:"key-auth",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/plugins/key-auth.md",sourceDirName:"plugins",slug:"/plugins/key-auth",permalink:"/docs/apisix/2.5/plugins/key-auth",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/key-auth.md",version:"2.5",frontMatter:{title:"key-auth"},sidebar:"version-2.5/docs",previous:{title:"fault-injection",permalink:"/docs/apisix/2.5/plugins/fault-injection"},next:{title:"jwt-auth",permalink:"/docs/apisix/2.5/plugins/jwt-auth"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:o};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," is an authentication plugin, it should work with ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," together."),(0,i.kt)("p",null,"Add Key Authentication (also sometimes referred to as an API key) to a Service or a Route. Consumers then add their key either in a querystring parameter or a header to authenticate their requests."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"different consumer objects should use different values, it should be unique.")))),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Two steps are required:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"creates a consumer object, and set the attributes of plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"You can open dashboard with a browser: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/key-auth-1.png",alt:null})),(0,i.kt)("p",null,"Then add key-auth plugin:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/key-auth-2.png",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"creates a route or service object, and enable plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"Here is a correct test example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.2:9080/index.html -H 'apikey: auth-one' -i\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"If the request does not set ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," correctly, will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"401")," response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.2:9080/index.html -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing API key found in request"}\n\n$ curl http://127.0.0.2:9080/index.html -H \'apikey: abcabcabc\' -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid API key in request"}\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1 -X PUT -d value=\'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin has been disabled now. It works for other plugins."))}p.isMDXComponent=!0}}]);