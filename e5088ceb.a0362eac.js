(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(83)),o={id:"auth",title:"Authentication"},c={unversionedId:"api/auth",id:"api/auth",isDocsHomePage:!1,title:"Authentication",description:"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an X-API-Key header, with this key. Addons can take advantage of this by adding the api.auth middleware to their route group.",source:"@site/docs/api/auth.md",permalink:"/api/auth",editUrl:"https://github.com/phpvms/docs/master/docs/api/auth.md",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/api/overview"},next:{title:"APIs",permalink:"/api/apis"}},p=[{value:"Headers Example",id:"headers-example",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an ",Object(i.a)("inlineCode",{parentName:"p"},"X-API-Key")," header, with this key. Addons can take advantage of this by adding the ",Object(i.a)("inlineCode",{parentName:"p"},"api.auth")," middleware to their route group."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"headers-example"},"Headers Example"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-http"}),"X-API-Key: {user API key}\nContent-type: application/json\n")),Object(i.a)("h4",{id:"sample-curl-request"},"Sample cURL Request"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$api_key = 'YOUR API KEY';\n$url = \"http://your-site.com/api/user\";\n$headers = [\n    'X-API-Key:' . $api_key,\n    'Content-type:application/json',\n];\n\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_URL,$url);\ncurl_setopt($ch,CURLOPT_RETURNTRANSFER,true);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $headers);\n\njson_response = \\json_decode(curl_exec($ch));\ncurl_close($ch);\n\necho $json_response;\n")))}s.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||l[h]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);