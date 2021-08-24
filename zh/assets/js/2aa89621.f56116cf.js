(self.webpackChunk=self.webpackChunk||[]).push([[93737],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2093:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"limit-conn"},o={unversionedId:"plugins/limit-conn",id:"version-2.8/plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/plugins/limit-conn.md",sourceDirName:"plugins",slug:"/plugins/limit-conn",permalink:"/zh/docs/apisix/2.8/plugins/limit-conn",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/limit-conn.md",version:"2.8",frontMatter:{title:"limit-conn"},sidebar:"version-2.8/docs",previous:{title:"limit-req",permalink:"/zh/docs/apisix/2.8/plugins/limit-req"},next:{title:"limit-count",permalink:"/zh/docs/apisix/2.8/plugins/limit-count"}},p=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\uff08\u6216\u5e76\u53d1\u8fde\u63a5\uff09\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conn"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"conn > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u5e76\u53d1\u8bf7\u6c42\u6570\u3002\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," \u7684\u9650\u5236\u3001\u4f46\u662f\u4f4e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," \u7684\u8bf7\u6c42\uff0c\u5c06\u88ab\u5ef6\u8fdf\u5904\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"burst"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u88ab\u5ef6\u8fdf\u5904\u7406\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u5178\u578b\u8fde\u63a5(\u6216\u8bf7\u6c42)\u7684\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only_use_default_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4\u7684\u4e25\u683c\u6a21\u5f0f\u3002 \u5982\u679c\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u7684\u8bdd\uff0c\u5c06\u4f1a\u4e25\u683c\u6309\u7167\u8bbe\u7f6e\u7684\u65f6\u95f4\u6765\u8fdb\u884c\u5ef6\u8fdf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6307\u5b9a\u7684\u9650\u5236\u5e76\u53d1\u7ea7\u522b\u7684\u5173\u952e\u5b57\uff0c\u53ef\u4ee5\u662f\u5ba2\u6237\u7aef IP \u6216\u670d\u52a1\u7aef IP\u3002",(0,l.kt)("br",null),"\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e3b\u673a\u540d\uff08\u6216\u670d\u52a1\u5668\u533a\u57df\uff09\u4f5c\u4e3a\u5173\u952e\u5b57\uff0c\u4ee5\u4fbf\u9650\u5236\u6bcf\u4e2a\u4e3b\u673a\u540d\u7684\u5e76\u53d1\u6027\u3002 \u5426\u5219\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5ba2\u6237\u7aef\u5730\u5740\u4f5c\u4e3a\u5173\u952e\u5b57\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u907f\u514d\u5355\u4e2a\u5ba2\u6237\u7aef\u7528\u592a\u591a\u7684\u5e76\u884c\u8fde\u63a5\u6216\u8bf7\u6c42\u6df9\u6ca1\u6211\u4eec\u7684\u670d\u52a1\u3002 ",(0,l.kt)("br",null),'\u5f53\u524d\u63a5\u53d7\u7684 key \u6709\uff1a"remote_addr"\uff08\u5ba2\u6237\u7aef IP \u5730\u5740\uff09, "server_addr"\uff08\u670d\u52a1\u7aef IP \u5730\u5740\uff09, \u8bf7\u6c42\u5934\u4e2d\u7684"X-Forwarded-For" \u6216 "X-Real-IP", "consumer_name"\uff08consumer \u7684 username\uff09\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," \u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\uff1akey \u662f\u53ef\u4ee5\u88ab\u7528\u6237\u81ea\u5b9a\u4e49\u7684\uff0c\u53ea\u9700\u8981\u4fee\u6539\u63d2\u4ef6\u7684\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u5b8c\u6210\u3002\u5e76\u6ca1\u6709\u5728\u63d2\u4ef6\u4e2d\u653e\u5f00\u662f\u5904\u4e8e\u5b89\u5168\u7684\u8003\u8651\u3002")),(0,l.kt)("p",null,"\u5728 stream \u4ee3\u7406\u4e2d\u4f7f\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_addr")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"server_addr")," \u53ef\u4ee5\u88ab\u7528\u4f5c key\u3002\u53e6\u5916\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"rejected_code")," \u6beb\u65e0\u610f\u4e49\u3002"),(0,l.kt)("h4",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 limit-conn \u63d2\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-1.png",alt:null})),(0,l.kt)("p",null,"\u7136\u540e\u5728 route \u9875\u9762\u4e2d\u6dfb\u52a0 limit-conn \u63d2\u4ef6\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/limit-conn-2.png",alt:null})),(0,l.kt)("h4",{id:"test-plugin"},"test plugin"),(0,l.kt)("p",null,"\u4e0a\u9762\u542f\u7528\u7684\u63d2\u4ef6\u7684\u53c2\u6570\u8868\u793a\u53ea\u5141\u8bb8\u4e00\u4e2a\u5e76\u53d1\u8bf7\u6c42\u3002 \u5f53\u6536\u5230\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42\u65f6\uff0c\u5c06\u76f4\u63a5\u8fd4\u56de 503 \u62d2\u7edd\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u8868\u793a limit-conn \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),(0,l.kt)("h4",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 limit-conn \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 limit-conn \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}d.isMDXComponent=!0}}]);