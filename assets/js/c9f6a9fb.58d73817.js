(self.webpackChunk=self.webpackChunk||[]).push([[54353],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"ApisixRoute/v1 (Deprecated) Reference"},o={unversionedId:"references/apisix_route_v1",id:"references/apisix_route_v1",isDocsHomePage:!1,title:"ApisixRoute/v1 (Deprecated) Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_route_v1.md",sourceDirName:"references",slug:"/references/apisix_route_v1",permalink:"/docs/ingress-controller/references/apisix_route_v1",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_route_v1.md",version:"current",frontMatter:{title:"ApisixRoute/v1 (Deprecated) Reference"},sidebar:"docs",previous:{title:"Install Ingress APISIX on Tencent TKE",permalink:"/docs/ingress-controller/deployments/tke"},next:{title:"ApisixRoute/v2alpha1 Reference",permalink:"/docs/ingress-controller/references/apisix_route_v2alpha1"}},p=[],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNINIG"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixRoute/v1")," is obsolete and will be unsupported in the future, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixRoute/v2beta1"),"!"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rules"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"ApisixRoute's request matching rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The requested host.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"http"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Route rules are applied to the scope of layer 7 traffic.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paths"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Path-based ",(0,i.kt)("inlineCode",{parentName:"td"},"route")," rule matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"backend"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Backend service information configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serviceName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of backend service. ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"servicePort"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"The port of backend service. ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The URI matched by the route. Supports exact match and prefix match. Example\uff0cexact match: ",(0,i.kt)("inlineCode",{parentName:"td"},"/hello"),", prefix match: ",(0,i.kt)("inlineCode",{parentName:"td"},"/hello*"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom plugin collection (Plugins defined in the ",(0,i.kt)("inlineCode",{parentName:"td"},"route")," level). For more plugin information, please refer to the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/tree/master/docs/en/latest/plugins"},"Apache APISIX plugin docs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the plugin. For more information about the example plugin, please check the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/limit-count.md#Attributes"},"limit-count docs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to enable the plugin, ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),": means enable, ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),": means disable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration of plugin information. Note: The check of configuration schema is missing now, so please be careful when editing.")))))}c.isMDXComponent=!0}}]);