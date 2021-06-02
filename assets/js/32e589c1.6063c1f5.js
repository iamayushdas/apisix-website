(self.webpackChunk=self.webpackChunk||[]).push([[65882],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10555:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Getting Started"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"\x3c!--",source:"@site/docs/apisix/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/apisix/next/getting-started",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/getting-started.md",version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Debug Mode",permalink:"/docs/apisix/next/architecture-design/debug-mode"},next:{title:"How to build Apache APISIX",permalink:"/docs/apisix/next/how-to-build"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Install Apache APISIX",id:"step-1-install-apache-apisix",children:[]},{value:"Step 2: Create a Route",id:"step-2-create-a-route",children:[{value:"Before we continue",id:"before-we-continue",children:[]},{value:"Create an Upstream",id:"create-an-upstream",children:[]},{value:"Bind Route with Upstream",id:"bind-route-with-upstream",children:[]},{value:"Verification",id:"verification",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Prefix in Route",id:"prefix-in-route",children:[]},{value:"APISIX Dashboard",id:"apisix-dashboard",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"This guide aims to get started with Apache APISIX, we will configure the service that will route to a public API, secured by an API key."),(0,i.kt)("p",null,"Also, we will take the following ",(0,i.kt)("inlineCode",{parentName:"p"},"echo")," endpoint as an example, it will return parameters we passed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,i.kt)("p",null,"Let's deconstruct the above Request URL."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Protocol: HTTP"),(0,i.kt)("li",{parentName:"ul"},"Port: 80"),(0,i.kt)("li",{parentName:"ul"},"Host: ",(0,i.kt)("inlineCode",{parentName:"li"},"httpbin.org")),(0,i.kt)("li",{parentName:"ul"},"URI/Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"/get")),(0,i.kt)("li",{parentName:"ul"},"Query Parameters: foo1, foo2")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you have installed the Apache APISIX, feel free and skip to ",(0,i.kt)("a",{parentName:"p",href:"#step-2-create-a-route"},"Step 2")," please.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This guide uses ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," to setup Apache APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl"),": This guide uses the ",(0,i.kt)("a",{parentName:"li",href:"https://curl.se/docs/manpage.html"},"curl")," command for API testing, but you can also use any other tools, e.g ",(0,i.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),".")),(0,i.kt)("p",null,"I know you're waiting for this moment for a while, let's go!"),(0,i.kt)("h2",{id:"step-1-install-apache-apisix"},"Step 1: Install Apache APISIX"),(0,i.kt)("p",null,"Thanks to Docker, we could launch the Apache APISIX and enable the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API")," by executing the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apache/apisix-docker.git\n$ cd apisix-docker/example\n$ docker-compose -p docker-apisix up -d\n")),(0,i.kt)("p",null,"It will take some time to download all needed files, and this depends on your network, please be patient. Once this step gets done, we could ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," our Admin API to tell if the Apache APISIX launchs successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# NOTE: Please curl on the machine which you run above Docker commands.\n$ curl \"http://127.0.0.1:9080/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,i.kt)("p",null,"We expect the following data to be returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":"1",\n  "action":"get",\n  "node":{\n    "key":"/apisix/services",\n    "nodes":{},\n    "dir":true\n  }\n}\n')),(0,i.kt)("h2",{id:"step-2-create-a-route"},"Step 2: Create a Route"),(0,i.kt)("p",null,"Congratulations! You have a running Apache APISIX instance now! Let's create a Route next!"),(0,i.kt)("h3",{id:"before-we-continue"},"Before we continue"),(0,i.kt)("p",null,"Do you know? Apache APISIX provides the powerful ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API")," and a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," for us to use, but we will use Admin API here in this guide. Let's go!"),(0,i.kt)("p",null,"We could create one ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/route"},"Route")," and target it to our backend services (We call them ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/upstream"},"Upstream")," usually), when one ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," reaches Apache APISIX, Apache APISIX will see where this Request should go."),(0,i.kt)("p",null,"Then how does Apache APISIX know this? That's because we have a list of rules configured with Route. Here is a sample Route data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/services/users/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This Route means all inbound requests will be forwarded to the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," Upstream when they meets ",(0,i.kt)("strong",{parentName:"p"},"ALL")," these rules(matched requests):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request's HTTP method is ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),";"),(0,i.kt)("li",{parentName:"ul"},"Request has ",(0,i.kt)("inlineCode",{parentName:"li"},"Host")," Header, and its value is ",(0,i.kt)("inlineCode",{parentName:"li"},"example.com"),";"),(0,i.kt)("li",{parentName:"ul"},"Request's path matches ",(0,i.kt)("inlineCode",{parentName:"li"},"/services/users/*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," means all subpaths, like ",(0,i.kt)("inlineCode",{parentName:"li"},"/services/users/getAll?limit=10"),".")),(0,i.kt)("p",null,"After this Route is created, we could use Apache APISIX's address to access our backend services(Upstream actually):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://{APISIX_BASE_URL}/services/users/getAll?limit=10" -H "Host: example.com"\n')),(0,i.kt)("p",null,"This will be forward to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/services/users/getAll?limit=10")," by Apache APISIX."),(0,i.kt)("h3",{id:"create-an-upstream"},"Create an Upstream"),(0,i.kt)("p",null,"After reading the above section, we know we have to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upstream")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),". Just executing the following command to create one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"roundrobin")," as our load balancer mechanism, and set ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," as our Upstream target(backend server), and its ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". For more fields, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Create an Upstream")," is not required actually, because we could use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/plugin"},"Plugin")," to interceptor requests then response directly, but let's assume we need to set at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"Upstream")," in this guide."),(0,i.kt)("h3",{id:"bind-route-with-upstream"},"Bind Route with Upstream"),(0,i.kt)("p",null,"We just created an Upstream(Reference to our backend services), let's bind one Route with it!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"That's it!"),(0,i.kt)("h3",{id:"verification"},"Verification"),(0,i.kt)("p",null,"Congratulations once more! We have created one ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Upstream"),", also we bind them together. Now let's call Apache APISIX to test the ",(0,i.kt)("inlineCode",{parentName:"p"},"created route"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,i.kt)("p",null,"Wow! It will return data from our ",(0,i.kt)("inlineCode",{parentName:"p"},"Upstream"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org")," actually), it works as expected!"),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Let's do some interesting things, due to ",(0,i.kt)("strong",{parentName:"p"},"anyone")," could access our public ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," created in the Step2, we would like only ",(0,i.kt)("inlineCode",{parentName:"p"},"John")," could access it. Let's use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/consumer"},"Consumer")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/plugin"},"Plugin")," to implement this protection."),(0,i.kt)("p",null,"First, let's create the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/consumer"},"consumer")," ",(0,i.kt)("inlineCode",{parentName:"p"},"John")," with ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/key-auth"},"key-auth")," plugin, we need to provide a specified secret key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/consumers" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "username": "john",\n  "plugins": {\n    "key-auth": {\n      "key": "key-of-john"\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"Next, let's bind our ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer(John)")," to that ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),", we only need to ",(0,i.kt)("strong",{parentName:"p"},"Enable")," the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/key-auth"},"key-auth")," plugin for that ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "plugins": {\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"Ok, when we access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," created in Step2 from now on, an ",(0,i.kt)("strong",{parentName:"p"},"Unauthorized Error")," will occur. Let's see how to access that ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://127.0.0.1:9080/get" -H "Host: httpbin.org" -H "apikey: key-of-john"\n')),(0,i.kt)("p",null,"Ya, just added an ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," with correct key! It's so easy to protect any ",(0,i.kt)("inlineCode",{parentName:"p"},"Routes"),", right?"),(0,i.kt)("h3",{id:"prefix-in-route"},"Prefix in Route"),(0,i.kt)("p",null,"Now lets say you want to add a prefix (eg: samplePrefix) to the route and do not want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," header then you can use\nthe proxy-rewrite plugin to do it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/samplePrefix/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "regex_uri": ["^/samplePrefix/get(.*)", "/get$1"]\n    },\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"Now you can invoke the route with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i -X GET "http://127.0.0.1:9080/samplePrefix/get?param1=foo&param2=bar" -H "apikey: key-of-john"\n')),(0,i.kt)("h3",{id:"apisix-dashboard"},"APISIX Dashboard"),(0,i.kt)("p",null,"Apache APISIX provides a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," to let us operate Apache APISIX more easier."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/dashboard.jpeg",alt:"Dashboard"})),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure all required ports (",(0,i.kt)("strong",{parentName:"li"},"9080/9443/2379 by default"),") are not being used by other systems/processes.")),(0,i.kt)("p",null,"The following command will kill the process which is listening on a specific port (in unix based systems)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo fuser -k 9443/tcp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the docker container is restarting/failing continuously, just access to the container and observe the logs to find out what happened.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker logs -f --tail container_id\n")))}u.isMDXComponent=!0}}]);