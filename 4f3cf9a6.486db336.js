(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(85)),i={id:"vhost",title:"VHost Configuration"},s={unversionedId:"installation/vhost",id:"installation/vhost",isDocsHomePage:!1,title:"VHost Configuration",description:"If you're configuring your own VPS/webserver, the vhosts should point to the public directory.",source:"@site/docs/installation/vhost.md",permalink:"/installation/vhost",editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/vhost.md",sidebar:"someSidebar",previous:{title:"Uploading Files",permalink:"/installation/uploading"},next:{title:"Installation",permalink:"/installation/installation"}},c=[{value:"Apache",id:"apache",children:[]},{value:"nginx",id:"nginx",children:[]},{value:"More details",id:"more-details",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"If you're configuring your own VPS/webserver, the vhosts should point to the ",Object(o.a)("inlineCode",{parentName:"p"},"public")," directory."),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"These are only example configurations and may require some tweaking, depending on the software versions"))),Object(o.a)("h2",{id:"apache"},"Apache"),Object(o.a)("p",null,"If you're using Apache as your webserver, you can use a similiar vhost file."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-htaccess"}),'<VirtualHost *:80>\n    ServerAdmin webmaster@localhost\n    ServerName yoursite.com\n    ServiceAlias www.yoursite.com\n\n    # Update these paths to the /public folder of phpVMS\n    DocumentRoot /path/to/phpvms/public\n    <Directory "/path/to/phpvms/public">\n            Options FollowSymLinks\n            ReWriteEngine On\n    </Directory>\n\n    # Example paths to log files\n    ErrorLog /var/log/http/phpvms/error.log\n    CustomLog /var/log/http/phpvms/access.log combined\n</VirtualHost>\n')),Object(o.a)("h2",{id:"nginx"},"nginx"),Object(o.a)("p",null,'If you\'re setting up a VPS with nginx, you can use a similiar vhost configuration. This is the vhost I use on the demo site. This passes the PHP files to the FastCGI PHP handler, as well as enables the short, "friendly" URLS that Laravel requires.'),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n    listen 80 default_server;\n    server_name phpvms.test;\n\n    access_log /var/log/nginx/access.log;\n    error_log /var/log/nginx/error.log;\n\n    # The vhost root should point to the /public directory of phpVMS\n    root /var/www/public;\n    index index.php index.html index.htm;\n\n    location / {\n         try_files $uri $uri/ /index.php$is_args$args;\n    }\n\n    location ~ \\.php$ {\n        try_files $uri =404;\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass 127.0.0.1:9000; # THIS DEPENDS ON YOUR SERVER AND MIGHT NEED TO CHANGE\n        fastcgi_index index.php;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n")),Object(o.a)("h2",{id:"more-details"},"More details"),Object(o.a)("p",null,"For more information, view the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://laravel.com/docs/7.x/installation#web-server-configuration"}),"Laravel Web Server Configuration Docs")))}p.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);