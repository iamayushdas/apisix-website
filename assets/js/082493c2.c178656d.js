(self.webpackChunk=self.webpackChunk||[]).push([[19924],{26417:function(i){"use strict";i.exports=JSON.parse('{"pluginId":"docs-apisix","version":"2.10.0","label":"2.10.0","isLast":false,"docsSidebars":{"version-2.10.0/docs":[{"collapsed":true,"type":"category","label":"Architecture Design","items":[{"type":"link","label":"APISIX","href":"/docs/apisix/2.10.0/architecture-design/apisix"},{"type":"link","label":"Route","href":"/docs/apisix/2.10.0/architecture-design/route"},{"type":"link","label":"Plugin","href":"/docs/apisix/2.10.0/architecture-design/plugin"},{"type":"link","label":"Script","href":"/docs/apisix/2.10.0/architecture-design/script"},{"type":"link","label":"Service","href":"/docs/apisix/2.10.0/architecture-design/service"},{"type":"link","label":"Consumer","href":"/docs/apisix/2.10.0/architecture-design/consumer"},{"type":"link","label":"Upstream","href":"/docs/apisix/2.10.0/architecture-design/upstream"},{"type":"link","label":"Global rule","href":"/docs/apisix/2.10.0/architecture-design/global-rule"},{"type":"link","label":"Plugin Config","href":"/docs/apisix/2.10.0/architecture-design/plugin-config"},{"type":"link","label":"Router","href":"/docs/apisix/2.10.0/architecture-design/router"},{"type":"link","label":"Debug Mode","href":"/docs/apisix/2.10.0/architecture-design/debug-mode"}]},{"type":"link","label":"Getting Started","href":"/docs/apisix/2.10.0/getting-started"},{"type":"link","label":"How to build Apache APISIX","href":"/docs/apisix/2.10.0/how-to-build"},{"collapsed":true,"type":"category","label":"Plugins","items":[{"collapsed":true,"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/docs/apisix/2.10.0/plugins/batch-requests"},{"type":"link","label":"serverless","href":"/docs/apisix/2.10.0/plugins/serverless"},{"type":"link","label":"redirect","href":"/docs/apisix/2.10.0/plugins/redirect"},{"type":"link","label":"echo","href":"/docs/apisix/2.10.0/plugins/echo"},{"type":"link","label":"gzip","href":"/docs/apisix/2.10.0/plugins/gzip"},{"type":"link","label":"real-ip","href":"/docs/apisix/2.10.0/plugins/real-ip"},{"type":"link","label":"server-info","href":"/docs/apisix/2.10.0/plugins/server-info"},{"type":"link","label":"ext-plugin-pre-req","href":"/docs/apisix/2.10.0/plugins/ext-plugin-pre-req"},{"type":"link","label":"ext-plugin-post-req","href":"/docs/apisix/2.10.0/plugins/ext-plugin-post-req"}]},{"collapsed":true,"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/docs/apisix/2.10.0/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/docs/apisix/2.10.0/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/docs/apisix/2.10.0/plugins/grpc-transcode"},{"type":"link","label":"fault-injection","href":"/docs/apisix/2.10.0/plugins/fault-injection"}]},{"collapsed":true,"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/docs/apisix/2.10.0/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/docs/apisix/2.10.0/plugins/jwt-auth"},{"type":"link","label":"basic-auth","href":"/docs/apisix/2.10.0/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/docs/apisix/2.10.0/plugins/authz-keycloak"},{"type":"link","label":"wolf-rbac","href":"/docs/apisix/2.10.0/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/docs/apisix/2.10.0/plugins/openid-connect"},{"type":"link","label":"hmac-auth","href":"/docs/apisix/2.10.0/plugins/hmac-auth"},{"type":"link","label":"authz-casbin","href":"/docs/apisix/2.10.0/plugins/authz-casbin"}]},{"collapsed":true,"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/docs/apisix/2.10.0/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/docs/apisix/2.10.0/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/docs/apisix/2.10.0/plugins/ip-restriction"},{"type":"link","label":"ua-restriction","href":"/docs/apisix/2.10.0/plugins/ua-restriction"},{"type":"link","label":"referer-restriction","href":"/docs/apisix/2.10.0/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/docs/apisix/2.10.0/plugins/consumer-restriction"}]},{"collapsed":true,"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/docs/apisix/2.10.0/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/docs/apisix/2.10.0/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/docs/apisix/2.10.0/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/docs/apisix/2.10.0/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/docs/apisix/2.10.0/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/docs/apisix/2.10.0/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/docs/apisix/2.10.0/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/docs/apisix/2.10.0/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/docs/apisix/2.10.0/plugins/request-id"},{"type":"link","label":"client-control","href":"/docs/apisix/2.10.0/plugins/client-control"}]},{"collapsed":true,"type":"category","label":"Monitoring","items":[{"type":"link","label":"prometheus","href":"/docs/apisix/2.10.0/plugins/prometheus"},{"type":"link","label":"Zipkin","href":"/docs/apisix/2.10.0/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/docs/apisix/2.10.0/plugins/skywalking"},{"type":"link","label":"node-status","href":"/docs/apisix/2.10.0/plugins/node-status"}]},{"collapsed":true,"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/docs/apisix/2.10.0/plugins/http-logger"},{"type":"link","label":"tcp-logger","href":"/docs/apisix/2.10.0/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/docs/apisix/2.10.0/plugins/kafka-logger"},{"type":"link","label":"udp-logger","href":"/docs/apisix/2.10.0/plugins/udp-logger"},{"type":"link","label":"syslog","href":"/docs/apisix/2.10.0/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/docs/apisix/2.10.0/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/docs/apisix/2.10.0/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/docs/apisix/2.10.0/plugins/sls-logger"}]},{"collapsed":true,"type":"category","label":"Other Protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/docs/apisix/2.10.0/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/docs/apisix/2.10.0/plugins/mqtt-proxy"}]}]},{"collapsed":true,"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/docs/apisix/2.10.0/admin-api"},{"type":"link","label":"Control API","href":"/docs/apisix/2.10.0/control-api"}]},{"type":"link","label":"FAQ","href":"/docs/apisix/2.10.0/FAQ"},{"collapsed":true,"type":"category","label":"Others","items":[{"collapsed":true,"type":"category","label":"Discovery","items":[{"type":"link","label":"Integration service discovery registry","href":"/docs/apisix/2.10.0/discovery"},{"type":"link","label":"DNS","href":"/docs/apisix/2.10.0/discovery/dns"},{"type":"link","label":"consul_kv","href":"/docs/apisix/2.10.0/discovery/consul_kv"},{"type":"link","label":"nacos","href":"/docs/apisix/2.10.0/discovery/nacos"},{"type":"link","label":"eureka","href":"/docs/apisix/2.10.0/discovery/eureka"}]},{"type":"link","label":"Health Check","href":"/docs/apisix/2.10.0/health-check"},{"type":"link","label":"Router radixtree","href":"/docs/apisix/2.10.0/router-radixtree"},{"type":"link","label":"Stand-alone mode","href":"/docs/apisix/2.10.0/stand-alone"},{"type":"link","label":"Stream Proxy","href":"/docs/apisix/2.10.0/stream-proxy"},{"type":"link","label":"gRPC Proxy","href":"/docs/apisix/2.10.0/grpc-proxy"},{"type":"link","label":"Customize Nginx configuration","href":"/docs/apisix/2.10.0/customize-nginx-configuration"},{"type":"link","label":"Certificate","href":"/docs/apisix/2.10.0/certificate"},{"type":"link","label":"Batch Processor","href":"/docs/apisix/2.10.0/batch-processor"},{"type":"link","label":"Benchmark","href":"/docs/apisix/2.10.0/benchmark"},{"type":"link","label":"Install Dependencies","href":"/docs/apisix/2.10.0/install-dependencies"},{"type":"link","label":"Plugin Develop","href":"/docs/apisix/2.10.0/plugin-develop"},{"type":"link","label":"External Plugin","href":"/docs/apisix/2.10.0/external-plugin"},{"type":"link","label":"Plugin interceptors","href":"/docs/apisix/2.10.0/plugin-interceptors"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"link","label":"Running APISIX in AWS with AWS CDK","href":"/docs/apisix/2.10.0/aws"},{"type":"link","label":"Mutual TLS Authentication","href":"/docs/apisix/2.10.0/mtls"},{"type":"link","label":"Debug Function","href":"/docs/apisix/2.10.0/debug-function"},{"collapsed":true,"type":"category","label":"internal","items":[{"type":"link","label":"Introducing APISIX\'s testing framework","href":"/docs/apisix/2.10.0/internal/testing-framework"}]},{"type":"link","label":"Configuration file switching based on environment variables","href":"/docs/apisix/2.10.0/profile"}]},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"}]},"permalinkToSidebar":{"/docs/apisix/2.10.0/admin-api":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/apisix":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/consumer":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/debug-mode":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/global-rule":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/plugin":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/plugin-config":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/route":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/router":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/script":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/service":"version-2.10.0/docs","/docs/apisix/2.10.0/architecture-design/upstream":"version-2.10.0/docs","/docs/apisix/2.10.0/aws":"version-2.10.0/docs","/docs/apisix/2.10.0/batch-processor":"version-2.10.0/docs","/docs/apisix/2.10.0/benchmark":"version-2.10.0/docs","/docs/apisix/2.10.0/certificate":"version-2.10.0/docs","/docs/apisix/2.10.0/control-api":"version-2.10.0/docs","/docs/apisix/2.10.0/customize-nginx-configuration":"version-2.10.0/docs","/docs/apisix/2.10.0/debug-function":"version-2.10.0/docs","/docs/apisix/2.10.0/discovery":"version-2.10.0/docs","/docs/apisix/2.10.0/discovery/consul_kv":"version-2.10.0/docs","/docs/apisix/2.10.0/discovery/dns":"version-2.10.0/docs","/docs/apisix/2.10.0/discovery/eureka":"version-2.10.0/docs","/docs/apisix/2.10.0/discovery/nacos":"version-2.10.0/docs","/docs/apisix/2.10.0/external-plugin":"version-2.10.0/docs","/docs/apisix/2.10.0/FAQ":"version-2.10.0/docs","/docs/apisix/2.10.0/getting-started":"version-2.10.0/docs","/docs/apisix/2.10.0/grpc-proxy":"version-2.10.0/docs","/docs/apisix/2.10.0/health-check":"version-2.10.0/docs","/docs/apisix/2.10.0/how-to-build":"version-2.10.0/docs","/docs/apisix/2.10.0/install-dependencies":"version-2.10.0/docs","/docs/apisix/2.10.0/internal/testing-framework":"version-2.10.0/docs","/docs/apisix/2.10.0/mtls":"version-2.10.0/docs","/docs/apisix/2.10.0/plugin-develop":"version-2.10.0/docs","/docs/apisix/2.10.0/plugin-interceptors":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/api-breaker":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/authz-casbin":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/authz-keycloak":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/basic-auth":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/batch-requests":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/client-control":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/consumer-restriction":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/cors":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/dubbo-proxy":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/echo":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/error-log-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/ext-plugin-post-req":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/ext-plugin-pre-req":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/fault-injection":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/grpc-transcode":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/gzip":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/hmac-auth":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/http-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/ip-restriction":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/jwt-auth":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/kafka-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/key-auth":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/limit-conn":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/limit-count":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/limit-req":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/log-rotate":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/mqtt-proxy":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/node-status":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/openid-connect":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/prometheus":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/proxy-cache":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/proxy-mirror":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/proxy-rewrite":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/real-ip":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/redirect":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/referer-restriction":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/request-id":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/request-validation":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/response-rewrite":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/server-info":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/serverless":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/skywalking":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/sls-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/syslog":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/tcp-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/traffic-split":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/ua-restriction":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/udp-logger":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/uri-blocker":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/wolf-rbac":"version-2.10.0/docs","/docs/apisix/2.10.0/plugins/zipkin":"version-2.10.0/docs","/docs/apisix/2.10.0/profile":"version-2.10.0/docs","/docs/apisix/2.10.0/router-radixtree":"version-2.10.0/docs","/docs/apisix/2.10.0/stand-alone":"version-2.10.0/docs","/docs/apisix/2.10.0/stream-proxy":"version-2.10.0/docs"}}')}}]);