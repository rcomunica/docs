"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5157],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4341:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={id:"install-server",title:"Installation (Server)"},s=void 0,c={unversionedId:"acars/install-server",id:"acars/install-server",title:"Installation (Server)",description:"1. Module Installation",source:"@site/docs/acars/install-server.mdx",sourceDirName:"acars",slug:"/acars/install-server",permalink:"/acars/install-server",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/install-server.mdx",tags:[],version:"current",frontMatter:{id:"install-server",title:"Installation (Server)"},sidebar:"docs",previous:{title:"License Agreement",permalink:"/acars/eula"},next:{title:"User Guide",permalink:"/acars/user-guide"}},p={},d=[{value:"1. Module Installation",id:"1-module-installation",level:2},{value:"2. License Entry",id:"2-license-entry",level:2},{value:"3. Premium Edition",id:"3-premium-edition",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-module-installation"},"1. Module Installation"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The latest ",(0,i.kt)("a",{parentName:"p",href:"http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz"},"dev")," versions of phpVMS are currently required"))),(0,i.kt)("p",null,"For the server-side installation, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," folder and copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"VMSAcars")," into your ",(0,i.kt)("inlineCode",{parentName:"p"},"phpvms/modules")," folder:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7316).Z,width:"818",height:"427"})),(0,i.kt)("p",null,"Then go to your site's URL to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/update")," folder, and follow through the update. When there are updates (as notified in the ACARS Changelog), you will do the same thing - copy the module folder in and then run the ",(0,i.kt)("inlineCode",{parentName:"p"},"/update")," again."),(0,i.kt)("h2",{id:"2-license-entry"},"2. License Entry"),(0,i.kt)("p",null,"After installation, go to the admin panel, and enter your license key, from your ",(0,i.kt)("a",{parentName:"p",href:"https://vmshost.io"},"https://vmshost.io")," invoice/email:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6900).Z,width:"1589",height:"1202"})),(0,i.kt)("h2",{id:"3-premium-edition"},"3. Premium Edition"),(0,i.kt)("p",null,'If you\'ve purchased the Premium ACARS edition, the options in the admin panel marked "Premium" will work. There are no additional downloads - the client will check the license and enable the options locally.'))}m.isMDXComponent=!0},7316:function(e,t,n){t.Z=n.p+"assets/images/copy_module_folder-8bd3921e7cc6850d8801d456cfe2b803.png"},6900:function(e,t,n){t.Z=n.p+"assets/images/module_config-126f5132dc244c948b30dea6be1bb82e.png"}}]);