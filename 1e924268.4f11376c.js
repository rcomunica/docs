(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cpanel-db-1-07b48d74202a8b441d073ff050a3fee4.png"},121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/01-not-installed-1e43cc853240c42a1fffb2c1999cfbef.png"},122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/02-installer-start-a5cf2fef6f6b37cb06d73ee16317ccd1.png"},123:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/03-requirements-a154b283134f17994bacfcb9c3b76519.png"},124:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/04-database-page-d380b4de268cf84a623a76ec8e6bb80a.png"},125:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/05-database-installed-672f9990a191d43029a4865b1ec0c1dc.png"},126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/10-completed-20140599382303cda078423a19d653ef.png"},127:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/07-importer-664f3ff1e798233e64d0f27d017f7392.png"},62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(86)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},s={unversionedId:"installation/installation",id:"installation/installation",isDocsHomePage:!1,title:"Installation",description:"The installation requires a few steps:",source:"@site/docs/installation/installation.md",permalink:"/installation/installation",editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/installation.md",sidebar_label:"Installation",sidebar:"docs",previous:{title:"VHost Configuration",permalink:"/installation/vhost"},next:{title:"Cron/Scheduled Tasks",permalink:"/installation/cron"}},o=[{value:"Database Setup",id:"database-setup",children:[{value:"Using the cPanel Database Wizard",id:"using-the-cpanel-database-wizard",children:[]}]},{value:"Running the Installer",id:"running-the-installer",children:[]},{value:"New Install",id:"new-install",children:[{value:"Upgrading from legacy",id:"upgrading-from-legacy",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],c={rightToc:o};function u(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The installation requires a few steps:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Database Setup - right now, only MySQL (or its offshoots, like MariaDB or Percona are supported). Create the credentials for the database using either the command line or the cPanel Database Wizard."),Object(i.a)("li",{parentName:"ol"},"Running the installer - This is a web interface, through which you can also import your older phpVMS 2.x or 5.x install")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"database-setup"},"Database Setup"),Object(i.a)("p",null,"Refer to your hosts documentation for specifics - the database name, username and password here are just examples, replace them with your own. This example is for MySQL:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE DATABASE IF NOT EXISTS `phpvms` CHARACTER SET UTF8 COLLATE utf8_unicode_ci;\nCREATE USER 'phpvms'@'localhost' IDENTIFIED BY 'password';\nGRANT ALL PRIVILEGES ON phpvms.* TO 'phpvms'@'localhost';\nFLUSH PRIVILEGES;\n")),Object(i.a)("h3",{id:"using-the-cpanel-database-wizard"},"Using the cPanel Database Wizard"),Object(i.a)("p",null,"You can also use the cPanel Wizard to create the credentials prior to install"),Object(i.a)("p",null,Object(i.a)("img",{src:a(120).default})),Object(i.a)("hr",null),Object(i.a)("h2",{id:"running-the-installer"},"Running the Installer"),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"There isn't a ",Object(i.a)("inlineCode",{parentName:"p"},"setup")," folder in the tar file. It's done as a Laravel route, which serves to see that your webserver/htaccess files are working correctly."))),Object(i.a)("p",null,"Once you go to your site, you'll see a page like this, click to proceed to the installer."),Object(i.a)("p",null,Object(i.a)("img",{src:a(121).default}),"\n",Object(i.a)("img",{src:a(122).default})),Object(i.a)("p",null,"After clicking next, you'll see the requirements check page. The installer will only let you proceeed if all of the requirements are met."),Object(i.a)("p",null,Object(i.a)("img",{src:a(123).default})),Object(i.a)("p",null,"The next page brings you to the database setup page. "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Enter the name of your site and the URL"),Object(i.a)("li",{parentName:"ul"},"Enter your database credentials. ",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},'You can test to make sure they\'re working by clicking the "Test Database Credentials" button.')))),Object(i.a)("p",null,Object(i.a)("img",{src:a(124).default})),Object(i.a)("p",null,'After clicking "Setup Database", you\'ll see the installation screen. Hit next to proceed:'),Object(i.a)("p",null,Object(i.a)("img",{src:a(125).default})),Object(i.a)("h2",{id:"new-install"},"New Install"),Object(i.a)("p",null,"You'll be brought to the initial setup screen. There is an option here to update yourCreate your first airline here, along with your user and password. This will be automatically made as an admin user."),Object(i.a)("p",null,Object(i.a)("img",{src:a(95).default})),Object(i.a)("p",null,"After setting that up, you'll see the completion screen, where you can click next and proceed to login. You'll see your dashboard after logging in, and the installation is complete!"),Object(i.a)("p",null,Object(i.a)("img",{src:a(126).default})),Object(i.a)("h3",{id:"upgrading-from-legacy"},"Upgrading from legacy"),Object(i.a)("p",null,Object(i.a)("img",{src:a(127).default})),Object(i.a)("p",null,"For the database information, enter the credentials and information to your old database"),Object(i.a)("hr",null),Object(i.a)("h2",{id:"next-steps"},"Next Steps"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Read ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/configuration/files"}),"about the configuration files"),"."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"http://docs.phpvms.net/configuration/cron"}),"Setup the cron task on your server")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"http://docs.phpvms.net/configuration/email"}),"Configure your mail server")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"http://docs.phpvms.net/configuration/recaptcha"}),"Get Recaptcha working"))))}u.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||i;return a?r.a.createElement(f,s(s({ref:t},c),{},{components:a})):r.a.createElement(f,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/06-va-information-30612d3a575d2324f2bf7562e3d20958.png"}}]);