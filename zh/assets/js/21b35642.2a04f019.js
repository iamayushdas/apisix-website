(self.webpackChunk=self.webpackChunk||[]).push([[96407],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(n),g=a,h=m["".concat(c,".").concat(g)]||m[g]||p[g]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56107:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i={title:"Manage Ingress Certificates With Cert Manager"},l={unversionedId:"practices/manage-ingress-certificates-with-cert-manager",id:"practices/manage-ingress-certificates-with-cert-manager",isDocsHomePage:!1,title:"Manage Ingress Certificates With Cert Manager",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/manage-ingress-certificates-with-cert-manager.md",sourceDirName:"practices",slug:"/practices/manage-ingress-certificates-with-cert-manager",permalink:"/zh/docs/ingress-controller/practices/manage-ingress-certificates-with-cert-manager",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/practices/manage-ingress-certificates-with-cert-manager.md",version:"current",frontMatter:{title:"Manage Ingress Certificates With Cert Manager"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create Issuer",id:"create-issuer",children:[]},{value:"Create Test Certificate",id:"create-test-certificate",children:[]},{value:"Create Test Service",id:"create-test-service",children:[]},{value:"Secure Ingress",id:"secure-ingress",children:[]},{value:"Test",id:"test",children:[]}],o={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial will detail how to secure ingress using cert-manager."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,s.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KIND")," to create a local Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/#default-static-install"},"cert-manager"),".")),(0,s.kt)("p",null,"In this guide, we assume that your APISIX is installed with ",(0,s.kt)("inlineCode",{parentName:"p"},"ssl")," enabled, which is not enabled by default in the Helm Chart. To enable it, you need to set ",(0,s.kt)("inlineCode",{parentName:"p"},"gateway.tls.enabled=true")," during installation."),(0,s.kt)("p",null,"For example, you could install APISIX and APISIX ingress controller by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install apisix apisix/apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set gateway.tls.enabled=true\n")),(0,s.kt)("p",null,"Assume that the SSL port is ",(0,s.kt)("inlineCode",{parentName:"p"},"9443"),"."),(0,s.kt)("h2",{id:"create-issuer"},"Create Issuer"),(0,s.kt)("p",null,"For testing purposes, we will use a simple CA issuer. All required files can be found ",(0,s.kt)("a",{parentName:"p",href:"./cert-manager"},"here"),"."),(0,s.kt)("p",null,"To create a CA issuer, use the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./cert-manager/ca.yaml\nkubectl apply -f ./cert-manager/issuer.yaml\n")),(0,s.kt)("p",null,"If the cert-manager is working correctly, we should be able to see the Ready status by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get issuer\n")),(0,s.kt)("p",null,"It should output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   AGE\nca-issuer   True    50s\n")),(0,s.kt)("h2",{id:"create-test-certificate"},"Create Test Certificate"),(0,s.kt)("p",null,"To ensure that cert-manager is working properly, we can create a test ",(0,s.kt)("inlineCode",{parentName:"p"},"Certificate")," resource."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: demo-cert\nspec:\n  dnsNames:\n    - example.com\n  issuerRef:\n    kind: Issuer\n    name: ca-issuer\n  secretName: example-cert\n  usages:\n    - digital signature\n    - key encipherment\n")),(0,s.kt)("p",null,"Like ",(0,s.kt)("inlineCode",{parentName:"p"},"Issuer"),", we could see its readiness status by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get certificate\n")),(0,s.kt)("p",null,"It should output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   SECRET        AGE\ndemo-cert   True    example.com   50s\n")),(0,s.kt)("p",null,"Check the secrets by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret\n")),(0,s.kt)("p",null,"It should output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"NAME          TYPE                DATA   AGE\nexample.com   kubernetes.io/tls   3      2m20s\n")),(0,s.kt)("p",null,"This means that our cert-manager is working properly."),(0,s.kt)("h2",{id:"create-test-service"},"Create Test Service"),(0,s.kt)("p",null,"We use ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image."),(0,s.kt)("p",null,"Deploy it by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run httpbin --image kennethreitz/httpbin --expose --port 80\n")),(0,s.kt)("h2",{id:"secure-ingress"},"Secure Ingress"),(0,s.kt)("p",null,"The cert-manager supports several ways to ",(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/ingress/"},"secure ingress"),". The easiest way is to use annotations."),(0,s.kt)("p",null,"By using annotations, we don't need to manage ",(0,s.kt)("inlineCode",{parentName:"p"},"Certificate")," CRD manually."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\n  annotations:\n    # add an annotation indicating the issuer to use.\n    cert-manager.io/issuer: \"ca-issuer\"\nspec:\n  # apisix-ingress-controller is only interested in Ingress\n  # resources with the matched ingressClass name, in our case,\n  # it's apisix.\n  ingressClassName: apisix\n  tls:\n    - hosts:\n        - local.httpbin.org # placing a host in the TLS config will determine what ends up in the cert's subjectAltNames\n      secretName: ingress-cert-manager-tls # cert-manager will store the created certificate in this secret.\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n")),(0,s.kt)("p",null,"The annotation ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager.io/issuer")," tells cert-manager which issuer should be used. The Issuer must be in the same namespace as the Ingress resource. Please read ",(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/ingress/"},"Securing Ingress Resources")," for more details."),(0,s.kt)("p",null,"We should now be able to see the certificate and secret resource created by cert-manager:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get certificate\nkubectl get secret\n")),(0,s.kt)("p",null,"It should output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"NAME                       READY   SECRET                     AGE\ningress-cert-manager-tls   True    ingress-cert-manager-tls   2m\n\nNAME                       TYPE                DATA   AGE\ningress-cert-manager-tls   kubernetes.io/tls   3      3m\n")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"Run curl command in a APISIX pod to see if the Ingress and TLS configuration works."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n <APISIX_NAMESPACE> exec -it <APISIX_POD_NAME> -- curl --resolve 'local.httpbin.org:9443:127.0.0.1' \"https://local.httpbin.org:9443/ip\" -k\n")),(0,s.kt)("p",null,"It should output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')))}u.isMDXComponent=!0}}]);