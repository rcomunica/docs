(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3102],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9756),a=n(7294),u=n(3727),c=n(3919),i=n(412),o=(0,a.createContext)({collectLink:function(){}}),s=n(4996);var l=function(e){var t,n,l,d=e.isNavLink,f=e.to,v=e.href,m=e.activeClassName,h=e.isActive,E=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,g=void 0===b||b,k=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),_=(0,s.C)().withBaseUrl,p=(0,a.useContext)(o),w=f||v,C=(0,c.Z)(w),N=null==w?void 0:w.replace("pathname://",""),Z=void 0!==N?(n=N,g&&function(e){return e.startsWith("/")}(n)?_(n):n):void 0,U=(0,a.useRef)(!1),B=d?u.OL:u.rU,L=i.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&C&&null!=Z&&window.docusaurus.prefetch(Z),function(){L&&l&&l.disconnect()}}),[Z,L,C]);var R=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,y=!Z||!C||R;return Z&&C&&!R&&!E&&p.collectLink(Z),y?a.createElement("a",Object.assign({href:Z},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(B,Object.assign({},k,{onMouseEnter:function(){U.current||null==Z||(window.docusaurus.preload(Z),U.current=!0)},innerRef:function(e){var t,n;L&&e&&C&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:Z||""},d&&{isActive:h,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return c}});var r=n(2263),a=n(3919);function u(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,c=u.forcePrependBaseUrl,i=void 0!==c&&c,o=u.absolute,s=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(u,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},5972:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9105),u=n(6742),c="container_3Gti",i="nav_2hIU",o="navlink_XGn1",s=function(e){var t=e.to,n=e.children;return r.createElement(u.Z,{className:o,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var l=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:i},r.createElement(s,{to:"/__docusaurus/debug"},"Config"),r.createElement(s,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(s,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(s,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(s,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(s,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:c},t)))}},9710:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(5972),u=n(9302),c="list_3P1k",i="listItem_3Kj2";var o=function(){return r.createElement(a.Z,null,r.createElement("h2",null,"Registry"),r.createElement("ul",{className:c},Object.values(u.Z).map((function(e){var t=e[1],n=e[2];return r.createElement("li",{key:t,className:i},r.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",r.createElement("code",null,t)),r.createElement("div",null,"Resolved Path: ",r.createElement("code",null,n)))}))))}}}]);