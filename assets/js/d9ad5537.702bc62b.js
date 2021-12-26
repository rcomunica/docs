"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[6e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"building-assets",title:"Building Assets"},o=void 0,p={unversionedId:"developers/building-assets",id:"developers/building-assets",title:"Building Assets",description:"The default CSS/Javascript is built and packaged using webpack. The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them.",source:"@site/docs/developers/building-assets.md",sourceDirName:"developers",slug:"/developers/building-assets",permalink:"/developers/building-assets",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/building-assets.md",tags:[],version:"current",frontMatter:{id:"building-assets",title:"Building Assets"},sidebar:"docs",previous:{title:"Environment Configuration",permalink:"/developers/environment"},next:{title:"Addons",permalink:"/developers/addons"}},d=[{value:"Source Layout",id:"source-layout",children:[{value:"Javascript",id:"javascript",children:[],level:4},{value:"CSS",id:"css",children:[],level:4},{value:"Compiled Assets",id:"compiled-assets",children:[],level:4}],level:2},{value:"Required Tools",id:"required-tools",children:[],level:2},{value:"Building CSS",id:"building-css",children:[],level:2},{value:"Building JS",id:"building-js",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default CSS/Javascript is built and packaged using ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),". The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"source-layout"},"Source Layout"),(0,r.kt)("p",null,'The "source" files for the assets are in one of two places:'),(0,r.kt)("h4",{id:"javascript"},"Javascript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resources/js")," - Has the JS files required for one of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"admin")," - JS files for the admin panel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"frontend")," - JS files required for the frontend")))),(0,r.kt)("h4",{id:"css"},"CSS"),(0,r.kt)("p",null,"The default skins use open-source free templates based on Bootstrap. The SASS files are located in either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resources/sass/admin")," - The admin panel SASS files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resources/sass/now-ui")," - The frontend SASS files")),(0,r.kt)("p",null,"These are then compiled into CSS files, which are placed into their own respective directories"),(0,r.kt)("h4",{id:"compiled-assets"},"Compiled Assets"),(0,r.kt)("p",null,"The compiled assets are placed in 3 separate folders (by default):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public/assets/admin\npublic/assets/frontend\npublic/assets/global\n")),(0,r.kt)("p",null,"Each of those folders have a ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," folder, and the respective assets are placed in those folders. After building those assets, the files are placed into there."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On an update, the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"public/assets/*")," will be overwritten, so be careful when updating to make sure those files aren't overwritten. You can do a diff against the original JS files in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/js")," and then rebuild, to make sure your changes are included"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"required-tools"},"Required Tools"),(0,r.kt)("p",null,"nodejs and npm are required to build. Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"instructions for your platform")," to install ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),". After installing it, run the following in your phpVMS folder (the same directory as the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file). This installs webpack and the associated dependencies into ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("p",null,"Building both the CSS and Javascript use the same command."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"building-css"},"Building CSS"),(0,r.kt)("p",null,"For the frontend and backend, the CSS is built from SASS templates, which are based on bootstrap, with some pre-built templates."),(0,r.kt)("p",null,"The frontend template uses Bootstrap 4 built using ",(0,r.kt)("a",{parentName:"p",href:"https://demos.creative-tim.com/now-ui-kit/index.html"},"now-ui"),"; the SASS is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/sass/now-ui"),"."),(0,r.kt)("p",null,"The backend template is built using Bootstrap 3, with the template being based on ",(0,r.kt)("a",{parentName:"p",href:"https://www.creative-tim.com/product/paper-dashboard"},"paper-dashboard"),"; the SASS files are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/sass/admin"),"."),(0,r.kt)("p",null,"To build the CSS, run the build command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run production\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"building-js"},"Building JS"),(0,r.kt)("p",null,"The Javascript files are divided into two types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vendor.js")," - This contains all of the vendor files that are compiled and minimized together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.js")," - These are the main Javascript files used by the frontend")),(0,r.kt)("p",null,"To update the Javascript files (for example, if you update the livemap file, etc), you need to rebuild the JS files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run production\n")),(0,r.kt)("p",null,"Then reupload the files from ",(0,r.kt)("inlineCode",{parentName:"p"},"public/assets"),"."))}c.isMDXComponent=!0}}]);