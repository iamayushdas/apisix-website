(self.webpackChunk=self.webpackChunk||[]).push([[51928],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return k},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,c=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72695:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return k}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"kafka-logger"},p={unversionedId:"plugins/kafka-logger",id:"version-2.6/plugins/kafka-logger",isDocsHomePage:!1,title:"kafka-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.6/plugins/kafka-logger.md",sourceDirName:"plugins",slug:"/plugins/kafka-logger",permalink:"/zh/docs/apisix/2.6/plugins/kafka-logger",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/kafka-logger.md",version:"2.6",frontMatter:{title:"kafka-logger"},sidebar:"version-2.6/docs",previous:{title:"tcp-logger",permalink:"/zh/docs/apisix/2.6/plugins/tcp-logger"},next:{title:"udp-logger",permalink:"/zh/docs/apisix/2.6/plugins/udp-logger"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"meta_format \u53c2\u8003\u793a\u4f8b",id:"meta_format-\u53c2\u8003\u793a\u4f8b",children:[]}]},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",children:[{value:"Broker \u5217\u8868",id:"broker-\u5217\u8868",children:[]}]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function k(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AE%80%E4%BB%8B"},(0,l.kt)("strong",{parentName:"a"},"\u7b80\u4ecb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},(0,l.kt)("strong",{parentName:"a"},"\u5de5\u4f5c\u539f\u7406"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u662f\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ef\u7528\u4f5cngx_lua nginx \u6a21\u5757\u7684 Kafka \u5ba2\u6237\u7aef\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u5b83\u53ef\u4ee5\u5c06\u63a5\u53e3\u8bf7\u6c42\u65e5\u5fd7\u4ee5 JSON \u7684\u5f62\u5f0f\u63a8\u9001\u7ed9\u5916\u90e8 Kafka \u96c6\u7fa4\u3002\u5982\u679c\u5728\u77ed\u65f6\u95f4\u5185\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u653e\u5fc3\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u3002\n",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.6/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_list"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u63a8\u9001\u7684 kafka \u7684 broker \u5217\u8868\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka_topic"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u63a8\u9001\u7684 topic\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producer_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"async"),(0,l.kt)("td",{parentName:"tr",align:null},'["async", "sync"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7684\u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6d88\u606f\u7684\u5206\u533a\u5206\u914d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"kafka logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"batch processor \u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta_format"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"default"'),(0,l.kt)("td",{parentName:"tr",align:null},'["default"\uff0c"origin"]'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5\u9ed8\u8ba4\u7684 JSON \u7f16\u7801\u65b9\u5f0f\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"origin"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5 HTTP \u539f\u59cb\u8bf7\u6c42\u65b9\u5f0f\u3002",(0,l.kt)("a",{parentName:"td",href:"#meta_format-%E5%8F%82%E8%80%83%E7%A4%BA%E4%BE%8B"},"\u5177\u4f53\u793a\u4f8b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6bcf\u6279\u53d1\u9001\u65e5\u5fd7\u7684\u6700\u5927\u6761\u6570\uff0c\u5f53\u65e5\u5fd7\u6761\u6570\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u63a8\u9001\u5168\u90e8\u65e5\u5fd7\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"Kafka")," \u670d\u52a1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u5f53\u8fbe\u5230\u6700\u5927\u7684\u5237\u65b0\u65f6\u95f4\u65f6\uff0c\u65e0\u8bba\u7f13\u51b2\u533a\u4e2d\u7684\u65e5\u5fd7\u6570\u91cf\u662f\u5426\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u6761\u6570\uff0c\u4e5f\u4f1a\u81ea\u52a8\u5c06\u5168\u90e8\u65e5\u5fd7\u63a8\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"Kafka")," \u670d\u52a1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u5148\u5904\u7406\u6279\u6b21\u4e2d\u6700\u65e7\u6761\u76ee\u7684\u6700\u957f\u671f\u9650\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5904\u7406\u7ba1\u9053\u4e2d\u79fb\u9664\u4e4b\u524d\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u5219\u5e94\u5ef6\u8fdf\u6267\u884c\u6d41\u7a0b\u7684\u79d2\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u62ec\u8bf7\u6c42 body\u3002false\uff1a \u8868\u793a\u4e0d\u5305\u542b\u8bf7\u6c42\u7684 body \uff1b true\uff1a \u8868\u793a\u5305\u542b\u8bf7\u6c42\u7684 body \u3002")))),(0,l.kt)("h3",{id:"meta_format-\u53c2\u8003\u793a\u4f8b"},"meta_format \u53c2\u8003\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"default"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "upstream": "127.0.0.1:1980",\n "start_time": 1619414294760,\n "client_ip": "127.0.0.1",\n "service_id": "",\n "route_id": "1",\n "request": {\n   "querystring": {\n     "ab": "cd"\n   },\n   "size": 90,\n   "uri": "/hello?ab=cd",\n   "url": "http://localhost:1984/hello?ab=cd",\n   "headers": {\n     "host": "localhost",\n     "content-length": "6",\n     "connection": "close"\n   },\n   "body": "abcdef",\n   "method": "GET"\n },\n "response": {\n   "headers": {\n     "connection": "close",\n     "content-type": "text/plain; charset=utf-8",\n     "date": "Mon, 26 Apr 2021 05:18:14 GMT",\n     "server": "APISIX/2.5",\n     "transfer-encoding": "chunked"\n   },\n   "size": 190,\n   "status": 200\n },\n "server": {\n   "hostname": "localhost",\n   "version": "2.5"\n },\n "latency": 0\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"origin"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-http"},"GET /hello?ab=cd HTTP/1.1\nhost: localhost\ncontent-length: 6\nconnection: close\n\nabcdef\n")))),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,"\u6d88\u606f\u5c06\u9996\u5148\u5199\u5165\u7f13\u51b2\u533a\u3002\n\u5f53\u7f13\u51b2\u533a\u8d85\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_size"),"\u65f6\uff0c\u5b83\u5c06\u53d1\u9001\u5230 kafka \u670d\u52a1\u5668\uff0c\n\u6216\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"buffer_duration"),"\u5237\u65b0\u7f13\u51b2\u533a\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6210\u529f\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\n\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"\uff0c\u5e76\u5e26\u6709\u63cf\u8ff0\u9519\u8bef\u7684\u5b57\u7b26\u4e32\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"buffer overflow"),"\uff09\u3002"),(0,l.kt)("h3",{id:"broker-\u5217\u8868"},"Broker \u5217\u8868"),(0,l.kt)("p",null,"\u63d2\u4ef6\u652f\u6301\u4e00\u6b21\u63a8\u9001\u5230\u591a\u4e2a Broker\uff0c\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "127.0.0.1":9092,\n    "127.0.0.1":9093\n}\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 kafka-logger \u63d2\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "kafka-logger": {\n           "broker_list" :\n             {\n               "127.0.0.1":9092\n             },\n           "kafka_topic" : "test2",\n           "key" : "key1"\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null," \u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u60a8\u8981\u7981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"kafka-logger"),"\u63d2\u4ef6\u65f6\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u53ef\u4ee5\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u5b83\u5c06\u7acb\u5373\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}k.isMDXComponent=!0}}]);