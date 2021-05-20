(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5515:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"overview",title:"Overview"},l={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Overview",description:"phpVMS includes a REST API that can be used for retrieving or saving information.",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/api/overview",editUrl:"https://github.com/phpvms/docs/tree/master/docs/api/overview.md",version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Awards",permalink:"/developers/awards"},next:{title:"Authentication",permalink:"/api/auth"}},p=[{value:"Pagination",id:"pagination",children:[]},{value:"Rate Limiting",id:"rate-limiting",children:[{value:"Response Code",id:"response-code",children:[]},{value:"Response Headers",id:"response-headers",children:[]},{value:"More Information",id:"more-information",children:[]}]},{value:"Errors",id:"errors",children:[{value:"Unauthorized",id:"unauthorized",children:[]},{value:"Not Found",id:"not-found",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"phpVMS includes a REST API that can be used for retrieving or saving information."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"Where indicated, pagination is enabled/available. When calling those APIs, the data is returned in this format:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," contains a list of all of the objects (for example, the airports)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"links")," contains the links to navigate through the paginated list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"meta")," contains information about the current dataset")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "data": [ ... ],\n  "links": {\n    "first":"http://phpvms.test/api/airports?page=1",\n    "last":"http://phpvms.test/api/airports?page=3",\n    "prev":null,\n    "next":"http://phpvms.test/api/airports?page=2"\n  },\n  "meta": {\n    "current_page": 1,\n    "from":1, \n    "last_page":3,\n    "path":"http://phpvms.test/api/airports",\n    "per_page":50,\n    "to":50,\n    "total":120\n  }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,a.kt)("p",null,"Laravel's API Middleware includes a rate limiter, which, by default, it set to 60 requests per minute, per-IP."),(0,a.kt)("h3",{id:"response-code"},"Response Code"),(0,a.kt)("p",null,"If you exceed the throttling, you'll have a ",(0,a.kt)("inlineCode",{parentName:"p"},"429 Too Many Requests")," HTTP response code. You'll also have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Retry-After")," header included, indicating the number of seconds to wait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"Retry-After: 60\n")),(0,a.kt)("p",null,"The below headers will also be included."),(0,a.kt)("h3",{id:"response-headers"},"Response Headers"),(0,a.kt)("p",null,"When a request is made, several headers are returned to show you where you are in terms of throttling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"X-RateLimit-Limit: 60\nX-RateLimit-Remaining: 59\n")),(0,a.kt)("h3",{id:"more-information"},"More Information"),(0,a.kt)("p",null,"To read some more information about how the throttling works in Laravel, ",(0,a.kt)("a",{parentName:"p",href:"https://mattstauffer.com/blog/api-rate-limiting-in-laravel-5-2/"},"check out this page")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"Where possible, the standard HTTP error codes are followed and returned, with extra information in the body, if available."),(0,a.kt)("h3",{id:"unauthorized"},"Unauthorized"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"401")," is returned if the API key is invalid, or the user is disallowed from API access. The ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," parameter will offer more error."),(0,a.kt)("h3",{id:"not-found"},"Not Found"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"404")," is returned if an entity is not found"),(0,a.kt)("h3",{id:"validation-errors"},"Validation Errors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"400"),", with details in the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," parameter about the bad input."))}u.isMDXComponent=!0}}]);