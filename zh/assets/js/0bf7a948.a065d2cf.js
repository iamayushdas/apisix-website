(self.webpackChunk=self.webpackChunk||[]).push([[46845],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,d=h["".concat(c,".").concat(f)]||h[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58163:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"How to quickly check the synchronization status of CRD"},s={unversionedId:"practices/check-crd-status",id:"practices/check-crd-status",isDocsHomePage:!1,title:"How to quickly check the synchronization status of CRD",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/check-crd-status.md",sourceDirName:"practices",slug:"/practices/check-crd-status",permalink:"/zh/docs/ingress-controller/practices/check-crd-status",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/practices/check-crd-status.md",version:"current",frontMatter:{title:"How to quickly check the synchronization status of CRD"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Take ApisixRoute resource as an example",id:"take-apisixroute-resource-as-an-example",children:[{value:"deploy and check ApisixRoute resource",id:"deploy-and-check-apisixroute-resource",children:[]},{value:"Also supports checking the status of other resources",id:"also-supports-checking-the-status-of-other-resources",children:[]}]},{value:"Frequent Questions",id:"frequent-questions",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When using the Apache APISIX Ingress Controller declarative configuration, often use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command. Only if the configuration was verified by its ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"Open API V3 Schema definition")," and its validation webhooks (if any), can the configuration be accepted by Kubernetes."),(0,a.kt)("p",null,"When the Apache APISIX Ingress Controller watches the resource change, the logic unit of the Apache APISIX Ingress Controller has just started to work.\nIn various operations of the Apache APISIX Ingress Controller, object conversion and more verification will be performed.\nWhen the verification fails, the Apache APISIX Ingress Controller will log an error message and will continue to retry until the declared state is successfully synchronized to APISIX."),(0,a.kt)("p",null,"Therefore, after the declarative configuration is accepted by Kubernetes, it does not mean that the configuration is synchronized to APISIX."),(0,a.kt)("p",null,"In this practice, we will show how to check the status of CRD."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an available Kubernetes cluster (version >= 1.14)"),(0,a.kt)("li",{parentName:"ul"},"an available Apache APISIX (version >= 2.6) and Apache APISIX Ingress Controller (version >= 0.6.0) installation")),(0,a.kt)("h2",{id:"take-apisixroute-resource-as-an-example"},"Take ApisixRoute resource as an example"),(0,a.kt)("h3",{id:"deploy-and-check-apisixroute-resource"},"deploy and check ApisixRoute resource"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"first deploy an ApisixRoute resource")),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: rule1\n      match:\n        hosts:\n          - httpbin.com\n        paths:\n          - /ip\n      backend:\n        serviceName: httpbin-service-e2e-test\n        servicePort: 80\n  EOF\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After apply the ApisixRoute resource, now check the status of CRD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe ar -n test httpbin-route\n")),(0,a.kt)("p",null,"Then, will see the status of ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin-route")," resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nStatus:\n  Conditions:\n    Last Transition time:  2021-06-06T09:50:22Z\n    Message:               Sync Successfully\n    Reason:                ResourceSynced\n    Status:                True\n    Type:                  ReousrceReady\n...\n")),(0,a.kt)("h3",{id:"also-supports-checking-the-status-of-other-resources"},"Also supports checking the status of other resources"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApisixUpstream"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixTls"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixConsumer")),(0,a.kt)("h2",{id:"frequent-questions"},"Frequent Questions"),(0,a.kt)("p",null,"If can not see the Status information, please check the following points:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The version of Apache APISIX Ingress Controller needs to be >= 1.0."),(0,a.kt)("li",{parentName:"ol"},"Use the latest CRD definition file, refer to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/tree/master/samples/deploy/crd/v1beta1"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Use the latest RBAC configuration, refer to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/tree/master/samples/deploy/rbac"},"here"),".")))}u.isMDXComponent=!0}}]);