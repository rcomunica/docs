(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4882],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7145:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o={id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},s={unversionedId:"config/optimizing",id:"config/optimizing",isDocsHomePage:!1,title:"Optimizing",description:"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs",source:"@site/docs/config/optimizing.md",sourceDirName:"config",slug:"/config/optimizing",permalink:"/config/optimizing",editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/optimizing.md",version:"current",frontMatter:{id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},sidebar:"docs",previous:{title:"Config Files",permalink:"/config/files"},next:{title:"Layouts and Template Basics",permalink:"/customize/layouts"}},l=[{value:"Drivers",id:"drivers",children:[{value:"Redis",id:"redis",children:[]},{value:"PHP-APC",id:"php-apc",children:[]},{value:"Additional Drivers",id:"additional-drivers",children:[]}]},{value:"Environment/Debug Modes",id:"environmentdebug-modes",children:[{value:"Environment",id:"environment",children:[]},{value:"Debug Mode",id:"debug-mode",children:[]}]},{value:"Sessions",id:"sessions",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Queue Driver",id:"queue-driver",children:[]}],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs"),(0,r.kt)("h2",{id:"drivers"},"Drivers"),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("p",null,"Installing Redis is one way to enable optimizations. After installing, add to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title="env.php"',title:'"env.php"'},"CACHE_DRIVER=redis\n")),(0,r.kt)("h3",{id:"php-apc"},"PHP-APC"),(0,r.kt)("p",null,"PHP-APC needs to be installed server-side (as a PHP extension) for it to be made available. No additional configuration is required on the database driver level."),(0,r.kt)("h3",{id:"additional-drivers"},"Additional Drivers"),(0,r.kt)("p",null,"Any additional drivers supported by Laravel are automatically supported by phpVMS."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"environmentdebug-modes"},"Environment/Debug Modes"),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"When going live, this should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"production"),". By default, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),". Change this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="env.php"',title:'"env.php"'},"APP_ENV=production\n")),(0,r.kt)("h3",{id:"debug-mode"},"Debug Mode"),(0,r.kt)("p",null,"This adjusts the logging level, making it more verbose. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when you're live/in-production."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title="env.php"',title:'"env.php"'},"APP_DEBUG=true\nDEBUG_TOOLBAR=false\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sessions"},"Sessions"),(0,r.kt)("p",null,"Sessions store the logged in users and other information. By default, they're stored on disk."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Redis store is recommended if you have access to it"))),(0,r.kt)("h4",{id:"redis-1"},"Redis"),(0,r.kt)("p",null,"Sessions can be saved in PHP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"// ...\n'session' => [\n  'default' => 'redis',\n],\n// ...  \n")),(0,r.kt)("h4",{id:"php-apc-1"},"PHP APC"),(0,r.kt)("p",null,"Sessions can be saved in PHP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"// ...\n'session' => [\n  'default' => 'apc',\n],\n// ...  \n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"caching"},"Caching"),(0,r.kt)("h4",{id:"redis-2"},"Redis"),(0,r.kt)("p",null,"Instead of using PHP APC, you can also use Redis for caching; adding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"// ...\n'cache' => [\n  'default' => 'redis',\n],\n// ...\n")),(0,r.kt)("h4",{id:"php-apc-2"},"PHP APC"),(0,r.kt)("p",null,"This doesn't require any configuration on the server side. To enable it, add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"// ...\n'cache' => [\n  'default' => 'apc',\n],\n// ...  \n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"queue-driver"},"Queue Driver"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This requires that the ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/7.x/queues#running-the-queue-worker"},"Laravel Queue Worker")," be installed and working properly"))),(0,r.kt)("p",null,"phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"sync"),", which means the tasks are done in-line. This could be useful if you're running a high-traffic VA and on your own VPS."),(0,r.kt)("h4",{id:"redis-3"},"Redis"),(0,r.kt)("p",null,"If you have Redis installed, you can add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php")," file. Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," section (if it doesn't exist) to the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"// ...\n\n'queue' => [\n  'default' => 'redis',\n],\n\n//...\n")))}d.isMDXComponent=!0}}]);