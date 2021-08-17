(self.webpackChunk=self.webpackChunk||[]).push([[25191],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27029:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"FAQ"},o={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/helm-chart/FAQ",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/FAQ.md",version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Apache APISIX Ingress Controller Helm Chart",permalink:"/docs/helm-chart/apisix-ingress-controller"}},s=[{value:"1. How to install APISIX only?",id:"1-how-to-install-apisix-only",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-how-to-install-apisix-only"},"1. How to install APISIX only?"),(0,l.kt)("p",null,"The Charts will install ETCD ",(0,l.kt)("inlineCode",{parentName:"p"},"3.4.14")," by default. If you want to install Apache APISIX only, please set ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd.enabled=false")," and set ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd.host={http://your_etcd_address:2379}"),"."),(0,l.kt)("p",null,"Please use the FQDN or the IP address of the ETCD cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# if etcd export by kubernetes service need spell fully qualified name\n$ helm install apisix apisix/apisix \\\n    --set etcd.enabled=false \\\n    --set etcd.host={http://etcd_node_1:2379\\,http://etcd_node_2:2379}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Why get 403 when I access Apache APISIX admin api?")),(0,l.kt)("p",null,"We can define ",(0,l.kt)("inlineCode",{parentName:"p"},"admin.allow.ipList")," in CIDR."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix apisix/apisix \\\n    --set admin.allow.ipList="10.22.100.12/8" \\\n    --set admin.allow.ipList="172.0.0.0/24"\n')),(0,l.kt)("p",null,"If you want to allow all IPs for a quick test, just set ",(0,l.kt)("inlineCode",{parentName:"p"},'admin.allow.ipList=""')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix apisix/apisix \\\n    --set admin.allow.ipList=""\n')))}p.isMDXComponent=!0}}]);