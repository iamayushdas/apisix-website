(self.webpackChunk=self.webpackChunk||[]).push([[92136],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,k=c["".concat(o,".").concat(h)]||c[h]||m[h]||p;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<p;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41395:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return u}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),i={title:"\u5065\u5eb7\u68c0\u67e5"},l={unversionedId:"health-check",id:"version-2.4/health-check",isDocsHomePage:!1,title:"\u5065\u5eb7\u68c0\u67e5",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/health-check.md",sourceDirName:".",slug:"/health-check",permalink:"/zh/docs/apisix/2.4/health-check",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/health-check.md",version:"2.4",frontMatter:{title:"\u5065\u5eb7\u68c0\u67e5"},sidebar:"version-2.4/docs",previous:{title:"Control API",permalink:"/zh/docs/apisix/2.4/control-api"},next:{title:"Router radixtree",permalink:"/zh/docs/apisix/2.4/router-radixtree"}},o=[{value:"Upstream\u7684\u5065\u5eb7\u68c0\u67e5",id:"upstream\u7684\u5065\u5eb7\u68c0\u67e5",children:[]}],s={toc:o};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"upstream\u7684\u5065\u5eb7\u68c0\u67e5"},"Upstream\u7684\u5065\u5eb7\u68c0\u67e5"),(0,p.kt)("p",null,"APISIX\u7684\u5065\u5eb7\u68c0\u67e5\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Kong/lua-resty-healthcheck"},"lua-resty-healthcheck"),"\u5b9e\u73b0\uff0c\u4f60\u53ef\u4ee5\u5728upstream\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,p.kt)("p",null,"\u6ce8\u610f\u53ea\u6709\u5728 upstream \u88ab\u8bf7\u6c42\u65f6\u624d\u4f1a\u5f00\u59cb\u5065\u5eb7\u68c0\u67e5\u3002\n\u5982\u679c\u4e00\u4e2a upstream \u88ab\u914d\u7f6e\u4f46\u6ca1\u6709\u88ab\u8bf7\u6c42\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u6709\u5065\u5eb7\u68c0\u67e5\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u68c0\u67e5\u68c0\u67e5\u7684\u4f8b\u5b50\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,p.kt)("p",null,"\u76d1\u63a7\u68c0\u67e5\u7684\u914d\u7f6e\u5185\u5bb9\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"checks"),"\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"checks"),"\u5305\u542b\u4e24\u4e2a\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"active")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"passive"),"\uff0c\u8be6\u60c5\u5982\u4e0b"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active"),": \u8981\u542f\u52a8\u63a2\u6d3b\u5065\u5eb7\u68c0\u67e5\uff0c\u9700\u8981\u5728upstream\u914d\u7f6e\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"checks.active")," \u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\u3002"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.timeout"),": \u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5 socket \u8d85\u65f6\u65f6\u95f4\uff08\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u652f\u6301\u5c0f\u6570\u70b9\u3002\u6bd4\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"1.01")," \u4ee3\u8868 ",(0,p.kt)("inlineCode",{parentName:"p"},"1010")," \u6beb\u79d2\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"2")," \u4ee3\u8868 ",(0,p.kt)("inlineCode",{parentName:"p"},"2000")," \u6beb\u79d2\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.http_path"),": \u7528\u4e8e\u53d1\u73b0upstream\u8282\u70b9\u5065\u5eb7\u53ef\u7528\u7684HTTP GET\u8bf7\u6c42\u8def\u5f84\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.host"),": \u7528\u4e8e\u53d1\u73b0upstream\u8282\u70b9\u5065\u5eb7\u53ef\u7528\u7684HTTP\u8bf7\u6c42\u4e3b\u673a\u540d\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.port"),": \u7528\u4e8e\u53d1\u73b0upstream\u8282\u70b9\u5065\u5eb7\u53ef\u7528\u7684\u81ea\u5b9a\u4e49\u4e3b\u673a\u7aef\u53e3\uff08\u53ef\u9009\uff09\uff0c\u914d\u7f6e\u6b64\u9879\u4f1a\u8986\u76d6 ",(0,p.kt)("inlineCode",{parentName:"p"},"upstream")," \u8282\u70b9\u4e2d\u7684\u7aef\u53e3\u3002"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"healthy"),"\u7684\u9600\u503c\u5b57\u6bb5\uff1a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.healthy.interval"),": \u5065\u5eb7\u7684\u76ee\u6807\u8282\u70b9\u7684\u5065\u5eb7\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u6700\u5c0f\u503c\u4e3a1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.healthy.successes"),": \u786e\u5b9a\u76ee\u6807\u662f\u5426\u5065\u5eb7\u7684\u6210\u529f\u6b21\u6570\uff0c\u6700\u5c0f\u503c\u4e3a1\u3002"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy"),"\u7684\u9600\u503c\u5b57\u6bb5\uff1a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.unhealthy.interval"),": \u9488\u5bf9\u4e0d\u5065\u5eb7\u76ee\u6807\u8282\u70b9\u7684\u5065\u5eb7\u68c0\u67e5\u4e4b\u95f4\u7684\u95f4\u9694\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u6700\u5c0f\u503c\u4e3a1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.unhealthy.http_failures"),": \u786e\u5b9a\u76ee\u6807\u8282\u70b9\u4e0d\u5065\u5eb7\u7684http\u8bf7\u6c42\u5931\u8d25\u6b21\u6570\uff0c\u6700\u5c0f\u503c\u4e3a1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active.req_headers"),": \u5176\u4ed6\u8bf7\u6c42\u6807\u5934\u3002\u6570\u7ec4\u683c\u5f0f\uff0c\u53ef\u4ee5\u586b\u5199\u591a\u4e2a\u6807\u9898\u3002")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive"),": \u8981\u542f\u7528\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u9700\u8981\u5728upstream\u914d\u7f6e\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"checks.passive")," \u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\u3002"),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("inlineCode",{parentName:"p"},"healthy"),"\u7684\u9600\u503c\u5b57\u6bb5\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.healthy.http_statuses"),": \u5982\u679c\u5f53\u524dHTTP\u54cd\u5e94\u72b6\u6001\u7801\u662f\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u5219\u5c06upstream\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"healthy")," \u72b6\u6001\u3002\u5426\u5219\uff0c\u8bf7\u5ffd\u7565\u6b64\u8bf7\u6c42\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.healthy.successes"),": \u5982\u679cupstream\u8282\u70b9\u88ab\u68c0\u6d4b\u6210\u529f\uff08\u7531 ",(0,p.kt)("inlineCode",{parentName:"p"},"passive.healthy.http_statuses")," \u5b9a\u4e49\uff09\u7684\u6b21\u6570\u8d85\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"successes")," \u6b21\uff0c\u5219\u5c06\u8be5\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"healthy")," \u72b6\u6001\u3002"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy"),"\u7684\u9600\u503c\u5b57\u6bb5\uff1a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.unhealthy.http_statuses"),": \u5982\u679c\u5f53\u524dHTTP\u54cd\u5e94\u72b6\u6001\u7801\u662f\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u5219\u5c06upstream\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy")," \u72b6\u6001\u3002\u5426\u5219\uff0c\u8bf7\u5ffd\u7565\u6b64\u8bf7\u6c42\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.unhealthy.tcp_failures"),": \u5982\u679cTCP\u901a\u8baf\u5931\u8d25\u6b21\u6570\u8d85\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"tcp_failures")," \u6b21\uff0c\u5219\u5c06upstream\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy")," \u72b6\u6001\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.unhealthy.timeouts"),": \u5982\u679c\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u8d85\u65f6\u6b21\u6570\u8d85\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"timeouts")," \u6b21\uff0c\u5219\u5c06upstream\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy")," \u72b6\u6001\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"passive.unhealthy.http_failures"),": \u5982\u679c\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u7684HTTP\u8bf7\u6c42\u5931\u8d25\uff08\u7531 ",(0,p.kt)("inlineCode",{parentName:"p"},"passive.unhealthy.http_statuses")," \u5b9a\u4e49\uff09\u7684\u6b21\u6570\u8d85\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"http_failures"),"\u6b21\uff0c\u5219\u5c06upstream\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"unhealthy")," \u72b6\u6001\u3002"))))),(0,p.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"../control-api.md"},"\u63a7\u5236\u63a5\u53e3")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," \u63a5\u53e3\u5f97\u5230\u3002"))}u.isMDXComponent=!0}}]);