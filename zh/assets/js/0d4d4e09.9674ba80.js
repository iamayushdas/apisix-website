(self.webpackChunk=self.webpackChunk||[]).push([[89756],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),s={title:"Introducing APISIX's testing framework"},a={unversionedId:"internal/testing-framework",id:"version-2.7/internal/testing-framework",isDocsHomePage:!1,title:"Introducing APISIX's testing framework",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/internal/testing-framework.md",sourceDirName:"internal",slug:"/internal/testing-framework",permalink:"/zh/docs/apisix/2.7/internal/testing-framework",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/internal/testing-framework.md",version:"2.7",frontMatter:{title:"Introducing APISIX's testing framework"}},l=[{value:"Test file",id:"test-file",children:[]},{value:"Preparing the configuration",id:"preparing-the-configuration",children:[]},{value:"Send request",id:"send-request",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Upstream",id:"upstream",children:[]},{value:"Run the test",id:"run-the-test",children:[]},{value:"Tips",id:"tips",children:[{value:"Debugging test cases",id:"debugging-test-cases",children:[]},{value:"Running only some test cases",id:"running-only-some-test-cases",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"APISIX uses a testing framework based on our fork of test-nginx: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iresty/test-nginx"},"https://github.com/iresty/test-nginx"),".\nFor details, you can check the documentation of this project."),(0,i.kt)("p",null,"If you want to test the CLI behavior of APISIX (",(0,i.kt)("inlineCode",{parentName:"p"},"./bin/apisix"),"),\nyou need to write a shell script in the t/cli directory to test it. You can refer to the existing test scripts for more details."),(0,i.kt)("p",null,"If you want to test the others, you need to write test code based on the framework."),(0,i.kt)("p",null,"Here, we briefly describe how to do simple testing based on this framework."),(0,i.kt)("h2",{id:"test-file"},"Test file"),(0,i.kt)("p",null,"you need to write test cases in the t/ directory, in a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},".t")," file. Note that a single test file should not exceed ",(0,i.kt)("inlineCode",{parentName:"p"},"800")," lines, and if it is too long, it needs to be divided by a suffix. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"t/\n\u251c\u2500\u2500 admin\n\u2502 \u251c\u2500\u2500 consumers.t\n\u2502 \u251c\u2500\u2500 consumers2.t\n")),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"consumers.t")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"consumers2.t")," contain tests for consumers in the Admin API."),(0,i.kt)("p",null,"Some of the test files start with this paragraph:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'add_block_preprocessor(sub {\n    my ($block) = @_;\n\n    if (! $block->request) {\n        $block->set_value("request", "GET /t");\n    }\n\n    if (! $block->no_error_log && ! $block->error_log) {\n        $block->set_value("no_error_log", "[error]\\n[alert]");\n    }\n});\n')),(0,i.kt)("p",null,"It means that all tests in this test file that do not define ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," are set to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /t"),". The same is true for error_log."),(0,i.kt)("h2",{id:"preparing-the-configuration"},"Preparing the configuration"),(0,i.kt)("p",null,"When testing a behavior, we need to prepare the configuration."),(0,i.kt)("p",null,"If the configuration is from etcd:\nWe can set up specific configurations through the Admin API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'=== TEST 7: refer to empty nodes upstream\n--- config\n    location /t {\n        content_by_lua_block {\n            local core = require("apisix.core")\n            local t = require("lib.test_admin").test\n            local code, message = t(\'/apisix/admin/routes/1\',\n                ngx.HTTP_PUT,\n                [[{\n                    "methods": ["GET"],\n                    "upstream_id": "1",\n                    "uri": "/index.html"\n                }]]\n                )\n\n            if code >= 300 then\n                ngx.status = code\n                ngx.print(message)\n                return\n            end\n\n            ngx.say(message)\n        }\n    }\n--- request\nGET /t\n--- response_body\npassed\n')),(0,i.kt)("p",null,"Then trigger it in a later test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"=== TEST 8: hit empty nodes upstream\n--- request\nGET /index.html\n--- error_code: 503\n--- error_log\nno valid upstream node\n")),(0,i.kt)("h2",{id:"send-request"},"Send request"),(0,i.kt)("p",null,"We can initiate a request with ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and set the request headers with ",(0,i.kt)("inlineCode",{parentName:"p"},"more_headers"),"."),(0,i.kt)("p",null,"For example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--- request\nPUT /hello?xx=y&xx=z&&y=&&z\nbody part of the request\n--- more_headers\nX-Req: foo\nX-Req: bar\nX-Resp: cat\n")),(0,i.kt)("p",null,"Lua code can be used to send multiple requests."),(0,i.kt)("p",null,"One request after another:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    location /t {\n        content_by_lua_block {\n            local http = require "resty.http"\n            local uri = "http://127.0.0.1:" ... ngx.var.server_port\n                        ... "/server_port"\n\n            local ports_count = {}\n            for i = 1, 12 do\n                local httpc = http.new()\n                local res, err = httpc:request_uri(uri, {method = "GET"})\n                if not res then\n                    ngx.say(err)\n                    return\n                end\n                ports_count[res.body] = (ports_count[res.body] or 0) + 1\n            end\n\n')),(0,i.kt)("p",null,"Sending multiple requests concurrently:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    location /t {\n        content_by_lua_block {\n            local http = require "resty.http"\n            local uri = "http://127.0.0.1:" ... ngx.var.server_port\n                        ... "/server_port?var=2&var2="\n\n\n            local t = {}\n            local ports_count = {}\n            for i = 1, 180 do\n                local th = assert(ngx.thread.spawn(function(i)\n                    local httpc = http.new()\n                    local res, err = httpc:request_uri(uri..i, {method = "GET"})\n                    if not res then\n                        ngx.log(ngx.ERR, err)\n                        return\n                    end\n                    ports_count[res.body] = (ports_count[res.body] or 0) + 1\n                end, i))\n                table.insert(t, th)\n            end\n            for i, th in ipairs(t) do\n                ngx.thread.wait(th)\n            end\n')),(0,i.kt)("h2",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"The following assertions are commonly used."),(0,i.kt)("p",null,"Check status (if not set, the framework will check if the request has 200 status code)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--- error_code: 405\n")),(0,i.kt)("p",null,"Check response headers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--- response_headers\nX-Resp: foo\nX-Req: foo, bar\n")),(0,i.kt)("p",null,"Check response body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--- response_body\n[{"count":12, "port": "1982"}]\n')),(0,i.kt)("p",null,"Checking the error log (via grep error log with regular expression)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--- grep_error_log eval\nqr/hash_on: header|chash_key: "custom-one"/\n--- grep_error_log_out\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\n')),(0,i.kt)("p",null,"The default log level is ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),", but you can get the debug level log with ",(0,i.kt)("inlineCode",{parentName:"p"},"-- log_level: debug"),"."),(0,i.kt)("h2",{id:"upstream"},"Upstream"),(0,i.kt)("p",null,"The test framework listens to multiple ports when it is started."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1980/1981/1982/5044: HTTP upstream port"),(0,i.kt)("li",{parentName:"ul"},"1983: HTTPS upstream port"),(0,i.kt)("li",{parentName:"ul"},"1984: APISIX HTTP port. Can be used to verify HTTP related gateway logic, such as concurrent access to an API."),(0,i.kt)("li",{parentName:"ul"},"1994: APISIX HTTPS port. Can be used to verify HTTPS related gateway logic, such as testing certificate matching logic.")),(0,i.kt)("p",null,"The methods in ",(0,i.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua")," are executed when accessing the upstream port. ",(0,i.kt)("inlineCode",{parentName:"p"},"_M.go")," is the entry point for this file.\nWhen the request accesses the upstream ",(0,i.kt)("inlineCode",{parentName:"p"},"/xxx"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"_M.xxx")," method is executed. For example, a request for ",(0,i.kt)("inlineCode",{parentName:"p"},"/hello")," will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"_M.hello"),".\nThis allows us to write methods inside ",(0,i.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua")," to emulate specific upstream logic, such as sending special responses."),(0,i.kt)("p",null,"Note that before adding new methods to ",(0,i.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua"),", make sure that you can reuse existing methods."),(0,i.kt)("h2",{id:"run-the-test"},"Run the test"),(0,i.kt)("p",null,"Assume your current work directory is the root of the apisix source code."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install our fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iresty/test-nginx"},"test-nginx")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"../test-nginx"),"."),(0,i.kt)("li",{parentName:"ol"},"Run the test: ",(0,i.kt)("inlineCode",{parentName:"li"},"prove -I. -I../test-nginx/inc -I../test-nginx/lib -r t/path/to/file.t"),".")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"debugging-test-cases"},"Debugging test cases"),(0,i.kt)("p",null,"The Nginx configuration and logs generated by the test cases are located in the t/servroot directory. The Nginx configuration template for testing is located in t/APISIX.pm."),(0,i.kt)("h3",{id:"running-only-some-test-cases"},"Running only some test cases"),(0,i.kt)("p",null,"Three notes can be used to control which parts of the tests are executed."),(0,i.kt)("p",null,"FIRST & LAST:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"=== TEST 1: vars rule with ! (set)\n--- FIRST\n--- config\n...\n--- response_body\npassed\n\n\n\n=== TEST 2: vars rule with ! (hit)\n--- request\nGET /hello?name=jack&age=17\n--- LAST\n--- error_code: 403\n--- response_body\nFault Injection!\n")),(0,i.kt)("p",null,"ONLY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'=== TEST 1: list empty resources\n--- ONLY\n--- config\n...\n--- response_body\n{"action":"get","count":0,"node":{"dir":true,"key":"/apisix/upstreams","nodes":{}}}\n')))}u.isMDXComponent=!0}}]);