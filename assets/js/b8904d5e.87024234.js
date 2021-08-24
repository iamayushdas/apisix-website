(self.webpackChunk=self.webpackChunk||[]).push([[7624],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11542:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Plugins"},l={unversionedId:"plugins",id:"version-2.9/plugins",isDocsHomePage:!1,title:"Plugins",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/docs/apisix/plugins",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins.md",version:"2.9",frontMatter:{title:"Plugins"}},u=[{value:"Hot reload",id:"hot-reload",children:[{value:"Hot reload in stand-alone mode",id:"hot-reload-in-stand-alone-mode",children:[]}]}],c={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hot-reload"},"Hot reload"),(0,a.kt)("p",null,"APISIX plugins are hot-loaded. No matter you add, delete or modify plugins, and ",(0,a.kt)("strong",{parentName:"p"},"update codes of plugins in disk"),", you don't need to restart the service."),(0,a.kt)("p",null,"If your APISIX node has the Admin API turned on, just send an HTTP request through admin API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,a.kt)("p",null,"Note: if you disable a plugin which has been configured as part of your rule (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),", etc.),\nthe its execution will be skipped."),(0,a.kt)("h3",{id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),(0,a.kt)("p",null,"For stand-alone mode, see plugin related section in ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/stand-alone"},"stand alone mode"),"."))}s.isMDXComponent=!0}}]);