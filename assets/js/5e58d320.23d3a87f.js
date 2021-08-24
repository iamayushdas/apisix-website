(self.webpackChunk=self.webpackChunk||[]).push([[55374],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10983:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"wolf-rbac"},o={unversionedId:"plugins/wolf-rbac",id:"version-2.9/plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/plugins/wolf-rbac.md",sourceDirName:"plugins",slug:"/plugins/wolf-rbac",permalink:"/docs/apisix/plugins/wolf-rbac",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/wolf-rbac.md",version:"2.9",frontMatter:{title:"wolf-rbac"},sidebar:"version-2.9/docs",previous:{title:"authz-keycloak",permalink:"/docs/apisix/plugins/authz-keycloak"},next:{title:"openid-connect",permalink:"/docs/apisix/plugins/openid-connect"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"Install wolf and start the service",id:"install-wolf-and-start-the-service",children:[]},{value:"Add <code>application</code>, <code>admin</code>, <code>normal user</code>, <code>permission</code>, <code>resource</code> and user authorize",id:"add-application-admin-normal-user-permission-resource-and-user-authorize",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dependencies"},(0,i.kt)("strong",{parentName:"a"},"Dependencies"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," is an authentication and authorization (rbac) plugin. It needs to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer"),". Also need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),".\nThe rbac feature is provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf"),". For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf documentation"),"."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"server"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("a",{parentName:"td",href:"http://127.0.0.1:10080%22"},'http://127.0.0.1:10080"')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set the service address of ",(0,i.kt)("inlineCode",{parentName:"td"},"wolf-server"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"unset"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set the app id. The app id must be added in wolf-console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header_prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"X-"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"prefix of custom HTTP header. After authentication is successful, three headers will be added to the request header (for backend) and response header (for frontend): ",(0,i.kt)("inlineCode",{parentName:"td"},"X-UserId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Username"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Nickname"),".")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add several API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),(0,i.kt)("p",null,"You may need to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-interceptors"},"interceptors")," to protect it."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"install-wolf-and-start-the-service"},"Install wolf and start the service"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"Wolf quick start")),(0,i.kt)("h3",{id:"add-application-admin-normal-user-permission-resource-and-user-authorize"},"Add ",(0,i.kt)("inlineCode",{parentName:"h3"},"application"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"admin"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"normal user"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"permission"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"resource")," and user authorize"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"Wolf-console usage")),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"set a consumer and config the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"wolf-rbac"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:10080",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),(0,i.kt)("p",null,"You can visit the dashboard: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operations through the web interface, first add a consumer:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-1.png",alt:null})),(0,i.kt)("p",null,"Then add the wolf-rbac plugin to the consumer page:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-2.png",alt:null})),(0,i.kt)("p",null,"Notes: The ",(0,i.kt)("inlineCode",{parentName:"p"},"appid")," filled in above needs to already exist in the wolf system."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Route")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Service")," and enable the wolf-rbac plugin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("h4",{id:"login-and-get-wolf-rbac-token"},"Login and get ",(0,i.kt)("inlineCode",{parentName:"h4"},"wolf-rbac")," token:"),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"appid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," must be real ones in the wolf system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login as ",(0,i.kt)("inlineCode",{parentName:"li"},"POST application/json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password"}\'\n\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login as ",(0,i.kt)("inlineCode",{parentName:"li"},"POST x-www-form-urlencoded"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),(0,i.kt)("h4",{id:"try-request-with-token"},"try request with token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"without token")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request header(Authorization) with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request header(x-rbac-token) with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request params with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request cookie with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n')),(0,i.kt)("h4",{id:"get-rbac-user-information"},"Get ",(0,i.kt)("inlineCode",{parentName:"h4"},"RBAC")," user information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),(0,i.kt)("h4",{id:"change-rbac-user-password"},"Change 'RBAC' user password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n\n\nHTTP/1.1 200 OK\n{"message":"success to change password"}\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);