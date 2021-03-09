(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(127)),s={id:"building-assets",title:"Building Assets"},l={unversionedId:"developers/building-assets",id:"developers/building-assets",isDocsHomePage:!1,title:"Building Assets",description:"The default CSS/Javascript is built and packaged using webpack. The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them.",source:"@site/docs/developers/building-assets.md",slug:"/developers/building-assets",permalink:"/developers/building-assets",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/building-assets.md",version:"current",sidebar:"docs",previous:{title:"Environment Configuration",permalink:"/developers/environment"},next:{title:"Addons",permalink:"/developers/addons"}},o=[{value:"Source Layout",id:"source-layout",children:[]},{value:"Required Tools",id:"required-tools",children:[]},{value:"Building CSS",id:"building-css",children:[]},{value:"Building JS",id:"building-js",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The default CSS/Javascript is built and packaged using ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),". The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"source-layout"},"Source Layout"),Object(r.b)("p",null,'The "source" files for the assets are in one of two places:'),Object(r.b)("h4",{id:"javascript"},"Javascript"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resources/js")," - Has the JS files required for one of:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"admin")," - JS files for the admin panel"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"frontend")," - JS files required for the frontend")))),Object(r.b)("h4",{id:"css"},"CSS"),Object(r.b)("p",null,"The default skins use open-source free templates based on Bootstrap. The SASS files are located in either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resources/sass/admin")," - The admin panel SASS files"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resources/sass/now-ui")," - The frontend SASS files")),Object(r.b)("p",null,"These are then compiled into CSS files, which are placed into their own respective directories"),Object(r.b)("h4",{id:"compiled-assets"},"Compiled Assets"),Object(r.b)("p",null,"The compiled assets are placed in 3 separate folders (by default):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"public/assets/admin\npublic/assets/frontend\npublic/assets/global\n")),Object(r.b)("p",null,"Each of those folders have a ",Object(r.b)("inlineCode",{parentName:"p"},"js")," and ",Object(r.b)("inlineCode",{parentName:"p"},"css")," folder, and the respective assets are placed in those folders. After building those assets, the files are placed into there."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"On an update, the files in ",Object(r.b)("inlineCode",{parentName:"p"},"public/assets/*")," will be overwritten, so be careful when updating to make sure those files aren't overwritten. You can do a diff against the original JS files in ",Object(r.b)("inlineCode",{parentName:"p"},"resources/js")," and then rebuild, to make sure your changes are included"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"required-tools"},"Required Tools"),Object(r.b)("p",null,"nodejs and npm are required to build. Follow the ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"instructions for your platform")," to install ",Object(r.b)("inlineCode",{parentName:"p"},"nodejs"),". After installing it, run the following in your phpVMS folder (the same directory as the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file). This installs webpack and the associated dependencies into ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(r.b)("p",null,"Building both the CSS and Javascript use the same command."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"building-css"},"Building CSS"),Object(r.b)("p",null,"For the frontend and backend, the CSS is built from SASS templates, which are based on bootstrap, with some pre-built templates."),Object(r.b)("p",null,"The frontend template uses Bootstrap 4 built using ",Object(r.b)("a",{parentName:"p",href:"https://demos.creative-tim.com/now-ui-kit/index.html"},"now-ui"),"; the SASS is located in ",Object(r.b)("inlineCode",{parentName:"p"},"resources/sass/now-ui"),"."),Object(r.b)("p",null,"The backend template is built using Bootstrap 3, with the template being based on ",Object(r.b)("a",{parentName:"p",href:"https://www.creative-tim.com/product/paper-dashboard"},"paper-dashboard"),"; the SASS files are located in ",Object(r.b)("inlineCode",{parentName:"p"},"resources/sass/admin"),"."),Object(r.b)("p",null,"To build the CSS, run the build command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run production\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"building-js"},"Building JS"),Object(r.b)("p",null,"The Javascript files are divided into two types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vendor.js")," - This contains all of the vendor files that are compiled and minimized together"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"app.js")," - These are the main Javascript files used by the frontend")),Object(r.b)("p",null,"To update the Javascript files (for example, if you update the livemap file, etc), you need to rebuild the JS files:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run production\n")),Object(r.b)("p",null,"Then reupload the files from ",Object(r.b)("inlineCode",{parentName:"p"},"public/assets"),"."))}p.isMDXComponent=!0}}]);