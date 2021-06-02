(self.webpackChunk=self.webpackChunk||[]).push([[36038],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"ApisixTls"},s={unversionedId:"concepts/apisix_tls",id:"concepts/apisix_tls",isDocsHomePage:!1,title:"ApisixTls",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/apisix_tls.md",sourceDirName:"concepts",slug:"/concepts/apisix_tls",permalink:"/zh/docs/ingress-controller/concepts/apisix_tls",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/concepts/apisix_tls.md",version:"current",frontMatter:{title:"ApisixTls"}},c=[],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ApisixTls associates with a Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret")," resource and\ngenerates an ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/admin-api#ssl"},"APISIX SSL")," object. It asks the\nSecret must have two keys ",(0,a.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", which used to store the certificate and private key in\nPEM format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  hosts:\n  - httpbin.org\n  secret:\n    name: htpbin-cert\n    namespace: default\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"hosts")," field should be written carefully, it's used by Apache APISIX to match the\ncorrect certificate, what's more, it also should be matched with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.globalsign.com/en/blog/what-is-server-name-indication#:~:text=Server%20Name%20Indication%20(SNI)%20allows,in%20the%20CLIENT%20HELLO%20message"},"Server Name Indication"),"\nextension in TLS, or the TLS handshaking might fail."),(0,a.kt)("p",null,"The apisix-ingress-controller will watch Secret resources that referred by ApisixTls objects, once a\nSecret changed, apisix-ingress-controller will re translate all referred ApisixTls objects, converting them to APISIX SSL resources ultimately."))}p.isMDXComponent=!0}}]);