(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{247:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||l;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(247)),i={title:"limit-conn"},c={unversionedId:"plugins/limit-conn",id:"plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\x3c!--",source:"@site/docs/apisix/plugins/limit-conn.md",slug:"/plugins/limit-conn",permalink:"/docs/apisix/plugins/limit-conn",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/limit-conn.md",version:"current",sidebar:"docs",previous:{title:"limit-req",permalink:"/docs/apisix/plugins/limit-req"},next:{title:"limit-connt",permalink:"/docs/apisix/plugins/limit-count"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],b={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#name"},"Name")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#attributes"},"Attributes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#how-to-enable"},"How To Enable")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#test-plugin"},"Test Plugin")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),Object(l.b)("h2",{id:"name"},"Name"),Object(l.b)("p",null,"Limiting request concurrency plugin."),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conn"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"conn > 0"),Object(l.b)("td",{parentName:"tr",align:null},"the maximum number of concurrent requests allowed. Requests exceeding this ratio (and below ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," + ",Object(l.b)("inlineCode",{parentName:"td"},"burst"),") will get delayed(the latency seconds is configured by ",Object(l.b)("inlineCode",{parentName:"td"},"default_conn_delay"),") to conform to this threshold.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"burst"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"burst >= 0"),Object(l.b)("td",{parentName:"tr",align:null},"the number of excessive concurrent requests (or connections) allowed to be delayed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default_conn_delay"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),Object(l.b)("td",{parentName:"tr",align:null},"the latency seconds of request when concurrent requests exceeding ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," but below (",Object(l.b)("inlineCode",{parentName:"td"},"conn")," + ",Object(l.b)("inlineCode",{parentName:"td"},"burst"),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),Object(l.b)("td",{parentName:"tr",align:null},"to limit the concurrency level. ",Object(l.b)("br",null),"For example, one can use the host name (or server zone) as the key so that we limit concurrency per host name. Otherwise, we can also use the client address as the key so that we can avoid a single client from flooding our service with too many parallel connections or requests. ",Object(l.b)("br",null),' Now accept those as key: "remote_addr"(client\'s IP), "server_addr"(server\'s IP), "X-Forwarded-For/X-Real-IP" in request header, "consumer_name"(consumer\'s username).')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rejected_code"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"503"),Object(l.b)("td",{parentName:"tr",align:null},"[200,...,599]"),Object(l.b)("td",{parentName:"tr",align:null},"returned when the request exceeds ",Object(l.b)("inlineCode",{parentName:"td"},"conn")," + ",Object(l.b)("inlineCode",{parentName:"td"},"burst")," will be rejected.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Key can be customized by the user, only need to modify a line of code of the plug-in to complete. It is a security consideration that is not open in the plugin.")),Object(l.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(l.b)("p",null,"Here's an example, enable the limit-conn plugin on the specified route:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"You can open dashboard with a browser: ",Object(l.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-1.png",alt:null})),Object(l.b)("p",null,"Then add limit-conn plugin:\n",Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-2.png",alt:null})),Object(l.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(l.b)("p",null,"The parameters of the plugin enabled above indicate that only one concurrent request is allowed. When more than one concurrent request is received, will return ",Object(l.b)("inlineCode",{parentName:"p"},"503")," directly."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),Object(l.b)("p",null,"This means that the limit request concurrency plugin is in effect."),Object(l.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(l.b)("p",null,"When you want to disable the limit-conn plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"The limit-conn plugin has been disabled now. It works for other plugins."))}u.isMDXComponent=!0}}]);