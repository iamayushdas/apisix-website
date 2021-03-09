(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(247)),c={title:"Health Check"},l={unversionedId:"health-check",id:"health-check",isDocsHomePage:!1,title:"Health Check",description:"\x3c!--",source:"@site/docs/apisix/health-check.md",slug:"/health-check",permalink:"/docs/apisix/health-check",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/health-check.md",version:"current",sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/apisix/FAQ"},next:{title:"Router radixtree",permalink:"/docs/apisix/router-radixtree"}},s=[{value:"Health Checks for Upstream",id:"health-checks-for-upstream",children:[]}],o={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"health-checks-for-upstream"},"Health Checks for Upstream"),Object(r.b)("p",null,"Health Check of APISIX is based on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Kong/lua-resty-healthcheck"},"lua-resty-healthcheck"),",\nyou can use it for upstream."),Object(r.b)("p",null,"Note that we only start the health check when the upstream is hit by a request.\nThere won't be any health check if an upstream is configured but isn't in used."),Object(r.b)("p",null,"The following is an example of health check:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),Object(r.b)("p",null,"The configures in ",Object(r.b)("inlineCode",{parentName:"p"},"checks")," are belong to health check, the type of ",Object(r.b)("inlineCode",{parentName:"p"},"checks"),"\ncontains: ",Object(r.b)("inlineCode",{parentName:"p"},"active")," or ",Object(r.b)("inlineCode",{parentName:"p"},"passive"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"active"),": To enable active health checks, you need to specify the configuration items under ",Object(r.b)("inlineCode",{parentName:"p"},"checks.active")," in the Upstream object configuration."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"active.timeout"),": Socket timeout for active checks (in seconds), support decimals. For example ",Object(r.b)("inlineCode",{parentName:"p"},"1.01")," means ",Object(r.b)("inlineCode",{parentName:"p"},"1010")," milliseconds, ",Object(r.b)("inlineCode",{parentName:"p"},"2")," means ",Object(r.b)("inlineCode",{parentName:"p"},"2000")," milliseconds.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"active.http_path"),": The HTTP GET request path used to detect if the upstream is healthy.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"active.host"),": The HTTP request host used to detect if the upstream is healthy.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"active.port"),": The customize health check host port (optional), this will override the port in the ",Object(r.b)("inlineCode",{parentName:"p"},"upstream")," node."))),Object(r.b)("p",{parentName:"li"},"The threshold fields of ",Object(r.b)("inlineCode",{parentName:"p"},"healthy")," are:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"active.healthy.interval"),": Interval between health checks for healthy targets (in seconds), the minimum is 1."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"active.healthy.successes"),": The number of success times to determine the target is healthy, the minimum is 1.")),Object(r.b)("p",{parentName:"li"},"The threshold fields of  ",Object(r.b)("inlineCode",{parentName:"p"},"unhealthy")," are:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"active.unhealthy.interval"),": Interval between health checks for unhealthy targets (in seconds), the minimum is 1."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"active.unhealthy.http_failures"),": The number of http failures times to determine the target is unhealthy, the minimum is 1."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"active.req_headers"),": Additional request headers. Array format, so you can fill in multiple headers."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"passive"),": To enable passive health checks, you need to specify the configuration items under ",Object(r.b)("inlineCode",{parentName:"p"},"checks.passive")," in the Upstream object configuration."),Object(r.b)("p",{parentName:"li"},"The threshold fields of ",Object(r.b)("inlineCode",{parentName:"p"},"healthy")," are:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.healthy.http_statuses"),": If the current response code is equal to any of these, set the upstream node to the ",Object(r.b)("inlineCode",{parentName:"li"},"healthy")," state. Otherwise ignore this request."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.healthy.successes"),": Number of successes in proxied traffic (as defined by ",Object(r.b)("inlineCode",{parentName:"li"},"passive.healthy.http_statuses"),") to consider a target healthy, as observed by passive health checks.")),Object(r.b)("p",{parentName:"li"},"The threshold fields of ",Object(r.b)("inlineCode",{parentName:"p"},"unhealthy")," are:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.unhealthy.http_statuses"),": If the current response code is equal to any of these, set the upstream node to the ",Object(r.b)("inlineCode",{parentName:"li"},"unhealthy")," state. Otherwise ignore this request."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.unhealthy.tcp_failures"),": Number of TCP failures in proxied traffic to consider a target unhealthy, as observed by passive health checks."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.unhealthy.timeouts"),": Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passive.unhealthy.http_failures"),": Number of HTTP failures in proxied traffic (as defined by ",Object(r.b)("inlineCode",{parentName:"li"},"passive.unhealthy.http_statuses"),") to consider a target unhealthy, as observed by passive health checks.")))),Object(r.b)("p",null,"The health check status can be fetched via ",Object(r.b)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," in ",Object(r.b)("a",{parentName:"p",href:"/docs/apisix/control-api"},"control API"),"."))}p.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||b[u]||r;return n?i.a.createElement(m,l(l({ref:t},o),{},{components:n})):i.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);