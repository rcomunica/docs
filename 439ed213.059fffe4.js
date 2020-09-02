(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(86)),o={id:"importing",title:"Importing"},l={unversionedId:"installation/importing",id:"installation/importing",isDocsHomePage:!1,title:"Importing",description:"You can import through either the installer or the command line after install.",source:"@site/docs/installation/importing.md",permalink:"/installation/importing",editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/importing.md",sidebar:"docs",previous:{title:"Cron/Scheduled Tasks",permalink:"/installation/cron"},next:{title:"Upgrading",permalink:"/installation/upgrading"}},s=[{value:"Installer",id:"installer",children:[]},{value:"Command Line",id:"command-line",children:[{value:"Notes and caveats",id:"notes-and-caveats",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"You can import through either the installer or the command line after install."),Object(i.a)("h2",{id:"installer"},"Installer"),Object(i.a)("p",null,"After completing the database configuration step, you'll be given the option to import"),Object(i.a)("p",null,Object(i.a)("img",{src:a(95).default})),Object(i.a)("hr",null),Object(i.a)("h2",{id:"command-line"},"Command Line"),Object(i.a)("p",null,"The importer tool can also be run on the command line, via a PHP artisan command. Before running the importer, you should install phpVMS using the installer. Both the ",Object(i.a)("inlineCode",{parentName:"p"},"config.php")," and ",Object(i.a)("inlineCode",{parentName:"p"},"env.php")," files will need to exist."),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"This will erase all of your current data"))),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"php artisan phpvms:importer  {db_host} {db_name} {db_user} {db_pass?}\n")),Object(i.a)("p",null,"Where"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"db_host")," - The database host where your legacy phpVMS install is"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"db_name")," - The database username for your legacy phpVMS install"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"db_pass")," - Database password for your legacy phpVMS install.")),Object(i.a)("p",null,"Example:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'php artisan phpvms:importer "localhost" "phpvms_legacy" "php_legacy_username" "phpvms_legacy_password"\n')),Object(i.a)("h3",{id:"notes-and-caveats"},"Notes and caveats"),Object(i.a)("p",null,"Due to some changes with how some of the fundamentals have changed within the system, be aware of the following:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Users will have to reset their passwords"),Object(i.a)("li",{parentName:"ul"},"Column names don't entirely match up between the databases"),Object(i.a)("li",{parentName:"ul"},"IDs will differ (numeric, or PIREP IDs will be converted to the new alphanumeric format)")),Object(i.a)("h4",{id:"post-import-notes"},"Post Import Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Aircraft that are imported are all placed in a generic subfleet. You will need to go and either add additional subfleets, or just rename this subfleet to whatever you want"),Object(i.a)("li",{parentName:"ul"},"All flights will be assigned to this subfleet. Unfortunately, you will need to re-assign the flights to be with the proper subfleet"),Object(i.a)("li",{parentName:"ul"},"Ranks are now assigned subfleets they are allowed to fly. This is different from the old version, which operated on a linear progression for the aircraft that are allowable per-rank. You will need to edit the ranks and set the subfleets that are assigned to them.")))}p.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/06-va-information-30612d3a575d2324f2bf7562e3d20958.png"}}]);