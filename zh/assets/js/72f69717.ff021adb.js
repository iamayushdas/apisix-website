(self.webpackChunk=self.webpackChunk||[]).push([[32848],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64571:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"DNS"},l={unversionedId:"discovery/dns",id:"version-2.8/discovery/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/discovery/dns.md",sourceDirName:"discovery",slug:"/discovery/dns",permalink:"/zh/docs/apisix/2.8/discovery/dns",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/dns.md",version:"2.8",frontMatter:{title:"DNS"},sidebar:"version-2.8/docs",previous:{title:"\u96c6\u6210\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh/docs/apisix/2.8/discovery"},next:{title:"consul_kv",permalink:"/zh/docs/apisix/2.8/discovery/consul_kv"}},s=[{value:"\u57fa\u4e8e DNS \u7684\u670d\u52a1\u53d1\u73b0",id:"\u57fa\u4e8e-dns-\u7684\u670d\u52a1\u53d1\u73b0",children:[{value:"SRV \u8bb0\u5f55",id:"srv-\u8bb0\u5f55",children:[]}]}],p={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E4%BA%8E-dns-%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0"},"\u57fa\u4e8e DNS \u7684\u670d\u52a1\u53d1\u73b0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#srv-%E8%AE%B0%E5%BD%95"},"SRV \u8bb0\u5f55"))))),(0,i.kt)("h2",{id:"\u57fa\u4e8e-dns-\u7684\u670d\u52a1\u53d1\u73b0"},"\u57fa\u4e8e DNS \u7684\u670d\u52a1\u53d1\u73b0"),(0,i.kt)("p",null,"\u67d0\u4e9b\u670d\u52a1\u53d1\u73b0\u7cfb\u7edf\u5982 Consul\uff0c\u652f\u6301\u901a\u8fc7 DNS \u63d0\u4f9b\u7cfb\u7edf\u4fe1\u606f\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u76f4\u63a5\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u914d\u7f6e DNS \u670d\u52a1\u5668\u7684\u5730\u5740\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u6dfb\u52a0\u5230 config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # \u4f7f\u7528 DNS \u670d\u52a1\u5668\u7684\u771f\u5b9e\u5730\u5740\n')),(0,i.kt)("p",null,"\u4e0e\u5728 Upstream \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," \u5bf9\u8c61\u4e2d\u914d\u7f6e\u57df\u540d\u4e0d\u540c\u7684\u662f\uff0cDNS \u670d\u52a1\u53d1\u73b0\u5c06\u8fd4\u56de\u6240\u6709\u7684\u8bb0\u5f55\u3002\u4f8b\u5982\u6309\u7167\u4ee5\u4e0b\u7684 upstream \u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"\u4e4b\u540e ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," \u5c06\u88ab\u89e3\u6790\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.2"),"\uff0c\u8fd9\u4e2a\u7ed3\u679c\u7b49\u540c\u4e8e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),(0,i.kt)("p",null,"\u6ce8\u610f\u6240\u6709\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," \u7684 IP \u90fd\u6709\u76f8\u540c\u7684\u6743\u91cd\u3002"),(0,i.kt)("p",null,"\u89e3\u6790\u7684\u8bb0\u5f55\u5c06\u6839\u636e\u5b83\u4eec\u7684 TTL \u6765\u8fdb\u884c\u7f13\u5b58\u3002\n\u5bf9\u4e8e\u8bb0\u5f55\u4e0d\u5728\u7f13\u5b58\u4e2d\u7684\u670d\u52a1\uff0c\u6211\u4eec\u5c06\u6309\u7167 ",(0,i.kt)("inlineCode",{parentName:"p"},"SRV -> A -> AAAA -> CNAME")," \u7684\u987a\u5e8f\u8fdb\u884c\u67e5\u8be2\u3002\n\u5237\u65b0\u7f13\u5b58\u8bb0\u5f55\u65f6\uff0c\u6211\u4eec\u5c06\u4ece\u4e0a\u6b21\u6210\u529f\u7684\u7c7b\u578b\u5f00\u59cb\u5c1d\u8bd5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6307\u5b9a upstream \u670d\u52a1\u5668\u7684\u7aef\u53e3\uff0c\u53ef\u4ee5\u628a\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u901a\u8fc7 SRV \u8bb0\u5f55\uff0c\u89c1\u5982\u4e0b\u3002"),(0,i.kt)("h3",{id:"srv-\u8bb0\u5f55"},"SRV \u8bb0\u5f55"),(0,i.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 SRV \u8bb0\u5f55\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u670d\u52a1\u7684\u7aef\u53e3\u548c\u6743\u91cd\u3002"),(0,i.kt)("p",null,"\u5047\u8bbe\u4f60\u6709\u4e00\u6761\u8fd9\u6837\u7684 SRV \u8bb0\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\n\n; name  TTL         type    priority    weight  port\nsrv     86400 IN    SRV     10          60      1980 A\nsrv     86400 IN    SRV     20          20      1981 B\n")),(0,i.kt)("p",null,"Upstream \u914d\u7f6e\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"\u6548\u679c\u7b49\u540c\u4e8e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60, "priority": -10},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10, "priority": -20},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10, "priority": -20}\n    ]\n}\n')),(0,i.kt)("p",null,"\u6ce8\u610f B \u57df\u540d\u7684\u4e24\u6761\u8bb0\u5f55\u5747\u5206\u6743\u91cd\u3002\n\u5bf9\u4e8e SRV \u8bb0\u5f55\uff0c\u4f4e\u4f18\u5148\u7ea7\u7684\u8282\u70b9\u88ab\u5148\u9009\u4e2d\uff0c\u6240\u4ee5\u6700\u540e\u4e00\u9879\u7684\u4f18\u5148\u7ea7\u662f\u8d1f\u6570\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e 0 \u6743\u91cd\u7684 SRV \u8bb0\u5f55\uff0c\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," \u4e2d\u662f\u8fd9\u4e48\u63cf\u8ff0\u7684\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u6ca1\u6709\u4efb\u4f55\u5019\u9009\u670d\u52a1\u5668\u65f6\uff0c\u57df\u7ba1\u7406\u5458\u5e94\u4f7f\u7528\u6743\u91cd\u4e3a 0 \u7684\uff0c\u4f7f RR \u66f4\u4e3a\u6613\u8bfb\uff08\u566a\u97f3\u66f4\u5c11\uff09\u3002\u5f53\u5b58\u5728\u6743\u91cd\u5927\u4e8e 0 \u7684\u8bb0\u5f55\u65f6\uff0c\u6743\u91cd\u4e3a 0 \u7684\u8bb0\u5f55\u88ab\u9009\u4e2d\u7684\u53ef\u80fd\u6027\u5f88\u5c0f\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u628a\u6743\u91cd\u4e3a 0 \u7684\u8bb0\u5f55\u5f53\u4f5c\u6743\u91cd\u4e3a 1\uff0c\u56e0\u6b64\u8282\u70b9\u201c\u88ab\u9009\u4e2d\u7684\u53ef\u80fd\u6027\u5f88\u5c0f\u201d\uff0c\u8fd9\u4e5f\u662f\u5904\u7406\u6b64\u7c7b\u8bb0\u5f55\u7684\u5e38\u7528\u65b9\u6cd5\u3002"))}c.isMDXComponent=!0}}]);