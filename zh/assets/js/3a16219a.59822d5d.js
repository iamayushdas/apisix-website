(self.webpackChunk=self.webpackChunk||[]).push([[55024],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(n),N=r,s=c["".concat(u,".").concat(N)]||c[N]||k[N]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64580:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"\u5065\u5eb7\u68c0\u67e5"},p={unversionedId:"health-check",id:"health-check",isDocsHomePage:!1,title:"\u5065\u5eb7\u68c0\u67e5",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/health-check.md",sourceDirName:".",slug:"/health-check",permalink:"/zh/docs/apisix/next/health-check",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/health-check.md",version:"current",frontMatter:{title:"\u5065\u5eb7\u68c0\u67e5"},sidebar:"docs",previous:{title:"eureka",permalink:"/zh/docs/apisix/next/discovery/eureka"},next:{title:"\u8def\u7531 RadixTree",permalink:"/zh/docs/apisix/next/router-radixtree"}},u=[{value:"Upstream \u7684\u5065\u5eb7\u68c0\u67e5",id:"upstream-\u7684\u5065\u5eb7\u68c0\u67e5",children:[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",children:[]},{value:"\u914d\u7f6e\u793a\u4f8b\uff1a",id:"\u914d\u7f6e\u793a\u4f8b\uff1a",children:[]}]}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"upstream-\u7684\u5065\u5eb7\u68c0\u67e5"},"Upstream \u7684\u5065\u5eb7\u68c0\u67e5"),(0,l.kt)("p",null,"Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kong/lua-resty-healthcheck"},"lua-resty-healthcheck")," \u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u88ab\u8bf7\u6c42\u65f6\u624d\u4f1a\u5f00\u59cb\u5065\u5eb7\u68c0\u67e5\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u88ab\u914d\u7f6e\u4f46\u6ca1\u6709\u88ab\u8bf7\u6c42\uff0c\u4e0d\u4f1a\u89e6\u53d1\u542f\u52a8\u5065\u5eb7\u68c0\u67e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5065\u5eb7\u7684\u8282\u70b9\uff0c\u90a3\u4e48\u8bf7\u6c42\u4f1a\u7ee7\u7eed\u53d1\u9001\u7ed9\u4e0a\u6e38\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u4e2d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\u4e0d\u4f1a\u89e6\u53d1\u542f\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u8be5\u552f\u4e00\u8282\u70b9\u65e0\u8bba\u662f\u5426\u5065\u5eb7\uff0c\u8bf7\u6c42\u90fd\u5c06\u8f6c\u53d1\u7ed9\u4e0a\u6e38\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u662f\u5fc5\u987b\u7684\uff0c\u8fd9\u6837\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\u624d\u4f1a\u6062\u590d\u3002")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")," ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684\u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.concurrency"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u65f6\u540c\u65f6\u68c0\u67e5\u7684\u76ee\u6807\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.http_path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"${upstream.node.host}"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u4e3b\u673a\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"65535")),(0,l.kt)("td",{parentName:"tr",align:null},"${upstream.node.port}"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u4e3b\u673a\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.https_verify_certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u4f7f\u7528 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u662f\u5426\u68c0\u67e5\u8fdc\u7a0b\u4e3b\u673a\u7684SSL\u8bc1\u4e66\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.req_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u4f7f\u7528 HTTP \u6216 HTTPS\u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u8bbe\u7f6e\u989d\u5916\u7684\u8bf7\u6c42\u5934\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 1")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u68c0\u67e5\u7684\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 302]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09 HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u5065\u5eb7\u8282\u70b9\u7684HTTP\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 1")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u68c0\u67e5\u7684\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[429, 404, 500, 501, 502, 503, 504, 505]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09 HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u975e\u5065\u5eb7\u8282\u70b9\u7684HTTP\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.tcp_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09TCP \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.timeouts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u8d85\u65f6\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09 HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u5065\u5eb7\u8282\u70b9\u7684HTTP\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[429, 500, 503]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09 HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u975e\u5065\u5eb7\u8282\u70b9\u7684HTTP\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.tcp_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09TCP \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.timeouts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u8d85\u65f6\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u793a\u4f8b\uff1a"},"\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/control-api"},"\u63a7\u5236\u63a5\u53e3")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," \u63a5\u53e3\u5f97\u5230\u3002"))}m.isMDXComponent=!0}}]);