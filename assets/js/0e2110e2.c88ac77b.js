"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[7459],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),b=o,f=d["".concat(u,".").concat(b)]||d[b]||g[b]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8245:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"debug",title:"Debug Mode"},u=void 0,c={unversionedId:"config/debug",id:"config/debug",title:"Debug Mode",description:"Debugging enables extra logging, and the Laravel toolbar allows you to inspect what's happening on the page.",source:"@site/docs/config/debug.md",sourceDirName:"config",slug:"/config/debug",permalink:"/config/debug",editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/debug.md",tags:[],version:"current",frontMatter:{id:"debug",title:"Debug Mode"}},p=[{value:"Enable Debug and Debugging",id:"enable-debug-and-debugging",children:[],level:2}],g={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Debugging enables extra logging, and the Laravel toolbar allows you to inspect what's happening on the page."),(0,a.kt)("h2",{id:"enable-debug-and-debugging"},"Enable Debug and Debugging"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Look at the logs - they're located in ",(0,a.kt)("inlineCode",{parentName:"li"},"storage/logs")),(0,a.kt)("li",{parentName:"ul"},"Enable debug logging and the Laravel Debug Toolbar:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open your ",(0,a.kt)("inlineCode",{parentName:"li"},"config.php"),", under ",(0,a.kt)("inlineCode",{parentName:"li"},"app"),", change: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug_toolbar")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))))))))}d.isMDXComponent=!0}}]);