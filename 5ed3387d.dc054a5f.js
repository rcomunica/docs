(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return r?i.a.createElement(d,l(l({ref:t},s),{},{components:r})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(8),o=(r(0),r(127)),a={id:"requirements",title:"Requirements"},l={unversionedId:"requirements",id:"requirements",isDocsHomePage:!1,title:"Requirements",description:"Server Requirements",source:"@site/docs/requirements.md",slug:"/requirements",permalink:"/requirements",editUrl:"https://github.com/phpvms/docs/tree/master/docs/requirements.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Download",permalink:"/download"}},c=[{value:"Server Requirements",id:"server-requirements",children:[{value:"Shared Hosting",id:"shared-hosting",children:[]},{value:"VPS/Dedicated Hosts",id:"vpsdedicated-hosts",children:[]}]}],s={toc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"server-requirements"},"Server Requirements"),Object(o.b)("p",null,"One of the first steps in the installer is to check your server for the proper requirements."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"PHP 7.3 or up, extensions required (most of these are installed by default):"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"cURL"),Object(o.b)("li",{parentName:"ul"},"JSON"),Object(o.b)("li",{parentName:"ul"},"fileinfo"),Object(o.b)("li",{parentName:"ul"},"mbstring"),Object(o.b)("li",{parentName:"ul"},"openssl"),Object(o.b)("li",{parentName:"ul"},"pdo"),Object(o.b)("li",{parentName:"ul"},"tokenizer"),Object(o.b)("li",{parentName:"ul"},"bcmath"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Database:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)")))),Object(o.b)("h5",{id:"optional"},"Optional"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://php.net/manual/en/book.apc.php"},"php-apc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://redis.io"},"Redis")," (for job queuing, various caching and optimizations)")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shared-hosting"},"Shared Hosting"),Object(o.b)("p",null,"While shared hosts are not ideal for numerous reasons (don't use free hosts, you'll have\na really bad time), it's still possible to run phpVMS. By just uploading the files, you\nwill be able to visit the site. Assuming your host is running Apache, the ",Object(o.b)("inlineCode",{parentName:"p"},".htaccess")," file\nshould handle the URL rewriting. If you're unable to reach the installer (the first test\nto see if it will work with your host), contact your host's support about ",Object(o.b)("inlineCode",{parentName:"p"},".htaccess"),"\nsupport."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"vpsdedicated-hosts"},"VPS/Dedicated Hosts"),Object(o.b)("p",null,"If you have control over your server, the combination of nginx/php-fpm will offer you\nthe best performance, over using Apache. It's the combination that I test with.\nIt will also be much more secure, seeing that only the ",Object(o.b)("inlineCode",{parentName:"p"},"/public")," directory is exposed."),Object(o.b)("p",null,"Pointing the vhost to the ",Object(o.b)("inlineCode",{parentName:"p"},"/public")," directory is the best way to run on a host that you\ncontrol."))}u.isMDXComponent=!0}}]);