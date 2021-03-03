(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{229:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return g}));var r=t(0),i=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=i.a.createContext({}),s=function(n){var e=i.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=s(n.components);return i.a.createElement(u.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),l=s(t),m=r,g=l["".concat(a,".").concat(m)]||l[m]||f[m]||o;return t?i.a.createElement(g,c(c({ref:e},u),{},{components:t})):i.a.createElement(g,c({ref:e},u))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return p})),t.d(e,"default",(function(){return s}));var r=t(3),i=t(7),o=(t(0),t(229)),a={title:"Customize Nginx configuration"},c={unversionedId:"customize-nginx-configuration",id:"customize-nginx-configuration",isDocsHomePage:!1,title:"Customize Nginx configuration",description:"\x3c!--",source:"@site/docs/apisix/customize-nginx-configuration.md",slug:"/customize-nginx-configuration",permalink:"/docs/apisix/customize-nginx-configuration",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/customize-nginx-configuration.md",version:"current",sidebar:"docs",previous:{title:"gRPC Proxy",permalink:"/docs/apisix/grpc-proxy"},next:{title:"HTTPS",permalink:"/docs/apisix/https"}},p=[],u={toc:p};function s(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Nginx configuration used by APISIX is generated via the template file ",Object(o.b)("inlineCode",{parentName:"p"},"apisix/ngx_tpl.lua")," and the options from ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," / ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),Object(o.b)("p",null,"You can take a look at the generated Nginx configuration in ",Object(o.b)("inlineCode",{parentName:"p"},"conf/nginx.conf")," after running ",Object(o.b)("inlineCode",{parentName:"p"},"./bin/apisix start"),"."),Object(o.b)("p",null,"If you want to customize the Nginx configuration, please read through the ",Object(o.b)("inlineCode",{parentName:"p"},"nginx_config")," in ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),". You can override the default value in the ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),". For instance, you can inject some snippets in the ",Object(o.b)("inlineCode",{parentName:"p"},"conf/nginx.conf")," via configuring the ",Object(o.b)("inlineCode",{parentName:"p"},"xxx_snippet")," entries:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'...\n# put this in config.yaml:\nnginx_config:\n    main_configuration_snippet: |\n        daemon on;\n    http_configuration_snippet: |\n        server\n        {\n            listen 45651;\n            server_name _;\n            access_log off;\n\n            location /ysec_status {\n                req_status_show;\n                allow 127.0.0.1;\n                deny all;\n            }\n        }\n\n        chunked_transfer_encoding on;\n\n    http_server_configuration_snippet: |\n        set $my "var";\n    http_admin_configuration_snippet: |\n        log_format admin "$request_time $pipe";\n    http_end_configuration_snippet: |\n        server_names_hash_bucket_size 128;\n    stream_configuration_snippet: |\n        tcp_nodelay off;\n...\n')))}s.isMDXComponent=!0}}]);