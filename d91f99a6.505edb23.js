(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/copy_module_folder-7eaa03a7007f66c70f70ae1f3f32477b.png"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/module_config-126f5132dc244c948b30dea6be1bb82e.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(115)),i={id:"install-server",title:"Installation (Server)"},c={unversionedId:"acars/install-server",id:"acars/install-server",isDocsHomePage:!1,title:"Installation (Server)",description:"1. Module Installation",source:"@site/docs/acars/install-server.md",slug:"/acars/install-server",permalink:"/acars/install-server",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/install-server.md",version:"current",sidebar:"docs",previous:{title:"License Agreement",permalink:"/acars/eula"},next:{title:"Installation (Client)",permalink:"/acars/install-client"}},l=[{value:"1. Module Installation",id:"1-module-installation",children:[]},{value:"2. License Entry",id:"2-license-entry",children:[]}],s={rightToc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-module-installation"},"1. Module Installation"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The latest ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz"}),"dev")," versions of phpVMS are currently required"))),Object(o.b)("p",null,"For the server-side installation, open the ",Object(o.b)("inlineCode",{parentName:"p"},"Web/v7")," folder and copy the ",Object(o.b)("inlineCode",{parentName:"p"},"VMSAcars")," into your ",Object(o.b)("inlineCode",{parentName:"p"},"phpvms/modules")," folder:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(196).default})),Object(o.b)("p",null,"Then go to your site's URL to the ",Object(o.b)("inlineCode",{parentName:"p"},"/update")," folder, and follow through the update. When there are updates (as notified in the ACARS Changelog), you will do the same thing - copy the module folder in and then run the ",Object(o.b)("inlineCode",{parentName:"p"},"/update")," again."),Object(o.b)("h2",{id:"2-license-entry"},"2. License Entry"),Object(o.b)("p",null,"After installation, go to the admin panel, and enter your license key, from your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://vmshost.io"}),"https://vmshost.io")," invoice/email:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(197).default})))}p.isMDXComponent=!0}}]);