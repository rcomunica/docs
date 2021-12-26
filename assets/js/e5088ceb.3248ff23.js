"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3802],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"auth",title:"Authentication"},p=void 0,u={unversionedId:"api/auth",id:"api/auth",title:"Authentication",description:"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an X-API-Key header, with this key. Addons can take advantage of this by adding the api.auth middleware to their route group.",source:"@site/docs/api/auth.md",sourceDirName:"api",slug:"/api/auth",permalink:"/api/auth",editUrl:"https://github.com/phpvms/docs/tree/master/docs/api/auth.md",tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"Overview",permalink:"/api/overview"},next:{title:"APIs",permalink:"/api/apis"}},l=[{value:"Headers Example",id:"headers-example",children:[{value:"Sample cURL Request",id:"sample-curl-request",children:[],level:4}],level:2}],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an ",(0,i.kt)("inlineCode",{parentName:"p"},"X-API-Key")," header, with this key. Addons can take advantage of this by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.auth")," middleware to their route group."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"headers-example"},"Headers Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"X-API-Key: {user API key}\nContent-type: application/json\n")),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$api_key = 'YOUR API KEY';\n$url = \"http://your-site.com/api/user\";\n$headers = [\n    'X-API-Key:' . $api_key,\n    'Content-type:application/json',\n];\n\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_URL,$url);\ncurl_setopt($ch,CURLOPT_RETURNTRANSFER,true);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $headers);\n\n$json_response = \\json_decode(curl_exec($ch));\ncurl_close($ch);\n\necho $json_response;\n")))}d.isMDXComponent=!0}}]);