(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(86)),i={id:"cron",title:"Cron/Scheduled Tasks"},c={unversionedId:"installation/cron",id:"installation/cron",isDocsHomePage:!1,title:"Cron/Scheduled Tasks",description:"In order for some phpVMS features to work, a cronjob is required to be setup. Some of the features that rely on cronjobs include:",source:"@site/docs/installation/cron.md",permalink:"/installation/cron",editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/cron.md",sidebar:"docs",previous:{title:"Installation",permalink:"/installation/installation"},next:{title:"Importing",permalink:"/installation/importing"}},s=[{value:"Setup",id:"setup",children:[]},{value:"Guides on setting up a cron job",id:"guides-on-setting-up-a-cron-job",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In order for some phpVMS features to work, a cronjob is required to be setup. Some of the features that rely on cronjobs include:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Finances"),Object(o.a)("li",{parentName:"ul"},"Mass Emails"),Object(o.a)("li",{parentName:"ul"},"vaCentral features")),Object(o.a)("h3",{id:"setup"},"Setup"),Object(o.a)("p",null,"You need the path to the ",Object(o.a)("inlineCode",{parentName:"p"},"artisan")," file that's in the root of the phpVMS install. After that, add a cronjob that runs once a minute. Do not forget to include the username, for example:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-cron"}),"* * * * * username php /path/to/phpvms/artisan schedule:run >> /dev/null 2>&1\n")),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"If unsure, ask your host")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Many hosts offer multiple PHP versions, make sure to use the path to the PHP 7.x version in the cronjob. Please note that PHP cli version(s) may differ from the PHP version used with the webserver. Contact your host! Point them to this page"))),Object(o.a)("h3",{id:"guides-on-setting-up-a-cron-job"},"Guides on setting up a cron job"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://help.fasthosts.co.uk/app/answers/detail/a_id/2198/~/setting-up-cron-jobs-in-cpanel"}),"Adding a cronjob in cPanel")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/"}),"Adding a cronjob on Linux"))))}p.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);