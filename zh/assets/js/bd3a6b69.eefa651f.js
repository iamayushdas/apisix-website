(self.webpackChunk=self.webpackChunk||[]).push([[11003],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43697:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Deploy with Source Codes"},l={unversionedId:"deploy",id:"deploy",isDocsHomePage:!1,title:"Deploy with Source Codes",description:"\x3c!--",source:"@site/docs/apisix-dashboard/deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/zh/docs/dashboard/next/deploy",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/deploy.md",version:"current",frontMatter:{title:"Deploy with Source Codes"},sidebar:"docs",previous:{title:"API doc of Manager API",permalink:"/zh/docs/dashboard/next/api/api"},next:{title:"Deploy with Docker",permalink:"/zh/docs/dashboard/next/deploy-with-docker"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[{value:"Optional",id:"optional",children:[]}]},{value:"Working directory",id:"working-directory",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Dashboard contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," is ",(0,o.kt)("em",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using source codes to build, make sure that the following dependencies are installed in your environment."),(0,o.kt)("h3",{id:"manager-api"},"manager-api"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Golang")," 1.13+: For users in mainland China, you can use the following command to speed up the module downloads.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h3",{id:"web"},"web"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," 10.23.0+"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,o.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.7 https://github.com/apache/apisix-dashboard.git\n")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n$ make build\n")),(0,o.kt)("p",null,"When the build is complete, the results are stored in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," will build ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make help")," command to see more commands."),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After the build is complete and before you start, make sure the following dependencies are installed and running in your environment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check and modify the configuration information in ",(0,o.kt)("inlineCode",{parentName:"p"},"output/conf/conf.yaml")," according to your deployment environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Dashboard"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./output\n\n$ ./manager-api\n\n# or running in background\n$ nohup ./manager-api &\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the Dashboard"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," provides a sub command ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," to quit the program gracefully, just\nrun:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./manager-api stop\n")),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"manager-api")," as an OS service.")),(0,o.kt)("p",null,"Without clubbing ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," with external command such as ",(0,o.kt)("inlineCode",{parentName:"p"},"nohup")," (in Unix systems), we also provide a long term solution for running the program as an ",(0,o.kt)("strong",{parentName:"p"},"operating system managed background service"),". The feature is cross-platform, os agnostic and works on well known Linux, Windows and Mac OS distributions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," as a service is listed by the name ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," under the OS's service manager."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," provides a list of sub commands to start and manage the lifecycle of the background service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# start Apache APISIX Dashboard service\n$ ./manager-api start\n\n# re-install Apache APISIX Dashboard service\n$ ./manager-api install\n\n# inspect the status of Apache APISIX Dashboard service\n$ ./manager-api status\n\n# stop Apache APISIX Dashboard service. stop can be used with or without service\n$ ./manager-api stop\n\n# remove Apache APISIX Dashboard service\n$ ./manager-api remove\n")),(0,o.kt)("h2",{id:"working-directory"},"Working directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory mention above is the default working directory."),(0,o.kt)("p",null,"You can move the entire directory to any path you want, and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," to specify it as the working directory."),(0,o.kt)("p",null,"For example, you can move it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/apisix-dashboard/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mv ./output/manager-api /usr/local/bin/\n\n$ mv ./output/ /usr/local/apisix-dashboard/\n\n$ manager-api -p /usr/local/apisix-dashboard/\n")))}d.isMDXComponent=!0}}]);