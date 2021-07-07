(self.webpackChunk=self.webpackChunk||[]).push([[78216],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3262:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"committer-guide",title:"Committer Guide"},l={unversionedId:"committer-guide",id:"committer-guide",isDocsHomePage:!1,title:"Committer Guide",description:"What can I contribute?",source:"@site/docs/general/committer-guide.md",sourceDirName:".",slug:"/committer-guide",permalink:"/docs/general/committer-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/committer-guide.md",version:"current",lastUpdatedBy:"Ayush das",lastUpdatedAt:1625625790,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"committer-guide",title:"Committer Guide"},sidebar:"docs",previous:{title:"Contributor Guide",permalink:"/docs/general/contributor-guide"},next:{title:"2FA",permalink:"/docs/general/2fa"}},p=[{value:"What can I contribute?",id:"what-can-i-contribute",children:[]},{value:"How to become a APISIX committer?",id:"how-to-become-a-apisix-committer",children:[]},{value:"Promotion",id:"promotion",children:[]},{value:"Responsibilities",id:"responsibilities",children:[]},{value:"How to become a APISIX PMC?",id:"how-to-become-a-apisix-pmc",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-can-i-contribute"},"What can I contribute?"),(0,i.kt)("p",null,"All forms of contributions are accepted, for example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take a look at issues with tag called Good first issue or Help wanted.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Join the discussion on mailing list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Answer questions on issues.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fix bugs reported on issues, and send us pull request.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the existing pull request.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Improve the website.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write a document or article.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any form of contribution that is not mentioned above."))),(0,i.kt)("p",null,"If you would like to contribute, please send an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," to let us know!"),(0,i.kt)("h2",{id:"how-to-become-a-apisix-committer"},"How to become a APISIX committer?"),(0,i.kt)("p",null,"Anyone can be a contributor to an Apache project. Being a contributor simply means that you take an interest in the project and contribute in some way, ranging from asking sensible questions (which documents the project and provides feedback to developers) through to providing new features as patches."),(0,i.kt)("p",null,"If you become a valuable contributor to the project you may well be invited to become a committer. Committer is a term used at the ASF to signify someone who is committed to a particular project. It brings with it the privilege of write access to the project repository and resources."),(0,i.kt)("p",null,"More details could be found ",(0,i.kt)("a",{parentName:"p",href:"https://community.apache.org/contributors/"},"here"),"."),(0,i.kt)("h2",{id:"promotion"},"Promotion"),(0,i.kt)("p",null,"The Apache APISIX community follows the Apache Community\u2019s process on accepting a new committer. After a contributor participates in APISIX's community actively, (P)PMC and Committers will make decisions to invite the contributor join Committers and (P)PMC."),(0,i.kt)("p",null,"Processes are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the discussion and vote in @private. Only current PMC member could nominate")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the vote passes, send an offer to become a committer with @private CC\u2019ed")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"New committer signs ICLA and apply Apache ID and email address")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update Team page."))),(0,i.kt)("h2",{id:"responsibilities"},"Responsibilities"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Develop new features")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Refactor codes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review PR reliably and in time")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Consider and accept feature requests")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Answer questions")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update documentation and examples")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Improve processes and tools")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Guide new contributors join community."))),(0,i.kt)("h2",{id:"how-to-become-a-apisix-pmc"},"How to become a APISIX PMC?"),(0,i.kt)("p",null,"In APISIX community, if a committer who have earned even more merit, can be invited to be a part of the Project Management Committee (PMC)."),(0,i.kt)("p",null,"One thing that is sometimes hard to understand when you are new to the open development process used at the ASF, is that we value the community more than the code. A strong and healthy community will be respectful and be a fun and rewarding place. More importantly, a diverse and healthy community can continue to support the code over the longer term, even as individual companies come and go from the field."))}m.isMDXComponent=!0}}]);