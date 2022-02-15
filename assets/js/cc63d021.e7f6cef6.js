"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5747],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=l,k=p["".concat(u,".").concat(c)]||p[c]||h[c]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={id:"phases",title:"Flight Phases"},u=void 0,s={unversionedId:"acars/phases",id:"acars/phases",title:"Flight Phases",description:"Flight Phases",source:"@site/docs/acars/phases.md",sourceDirName:"acars",slug:"/acars/phases",permalink:"/acars/phases",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/phases.md",tags:[],version:"current",frontMatter:{id:"phases",title:"Flight Phases"},sidebar:"docs",previous:{title:"Flight Planning",permalink:"/acars/flight"},next:{title:"Config Maps",permalink:"/acars/configmaps"}},d=[{value:"Flight Phases",id:"flight-phases",children:[{value:"Boarding",id:"boarding",children:[{value:"Notes",id:"notes",children:[],level:4}],level:3},{value:"Pushback",id:"pushback",children:[{value:"Notes",id:"notes-1",children:[],level:4}],level:3},{value:"Taxi Out",id:"taxi-out",children:[{value:"Notes",id:"notes-2",children:[],level:4}],level:3},{value:"Takeoff",id:"takeoff",children:[{value:"Notes",id:"notes-3",children:[],level:4}],level:3},{value:"Enroute",id:"enroute",children:[],level:3},{value:"Approach",id:"approach",children:[],level:3},{value:"Final",id:"final",children:[],level:3},{value:"Landing",id:"landing",children:[{value:"Notes:",id:"notes-4",children:[],level:4}],level:3},{value:"Taxi In",id:"taxi-in",children:[{value:"Notes",id:"notes-5",children:[],level:4}],level:3},{value:"Arrived",id:"arrived",children:[{value:"Notes",id:"notes-6",children:[],level:4}],level:3}],level:2}],h={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flight-phases"},"Flight Phases"),(0,a.kt)("p",null,"ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights."),(0,a.kt)("h3",{id:"boarding"},"Boarding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must be on the ground to be able to start a flight. The parking brake should also be on")),(0,a.kt)("h4",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it\'s recorded as "Unknown"')),(0,a.kt)("h3",{id:"pushback"},"Pushback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your aircraft has started moving, and is under 5kts"),(0,a.kt)("li",{parentName:"ul"},"If you started the flight with the brakes on and they are released")),(0,a.kt)("h4",{id:"notes-1"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "Blocks Off" time is recorded'),(0,a.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,a.kt)("h3",{id:"taxi-out"},"Taxi Out"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ground speed is above 5")),(0,a.kt)("h4",{id:"notes-2"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "Taxi Out" timer is started'),(0,a.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,a.kt)("h3",{id:"takeoff"},"Takeoff"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you're detected to be on a runway, and your ground speed is over 40"),(0,a.kt)("li",{parentName:"ul"},"If you haven't been detected on a runway, your ground speed is over 80 (rolling)"),(0,a.kt)("li",{parentName:"ul"},"You're no longer on the ground")),(0,a.kt)("h4",{id:"notes-3"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,a.kt)("h3",{id:"enroute"},"Enroute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You're 500' AGL or above (to attempt to catch the earlier point) OR the gear are up (if they are retractable)"),(0,a.kt)("li",{parentName:"ul"},"More than 3 miles from the airport")),(0,a.kt)("h3",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you're at the TOD",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used'),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the TOD is calculated using ",(0,a.kt)("a",{parentName:"li",href:"https://www.flyingmag.com/technique/tip-week/calculating-top-descent/"},"this method")," (",(0,a.kt)("inlineCode",{parentName:"li"},"TOD = (Plane Alt - Field Alt) / 3"),")"))),(0,a.kt)("li",{parentName:"ul"},"If you went above 10k' and are now below it")),(0,a.kt)("h3",{id:"final"},"Final"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Below 3000' AGL"),(0,a.kt)("li",{parentName:"ul"},"Gear are down (if they are retractable)"),(0,a.kt)("li",{parentName:"ul"},"Flaps are down")),(0,a.kt)("h3",{id:"landing"},"Landing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You're on the ground")),(0,a.kt)("h4",{id:"notes-4"},"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,a.kt)("h3",{id:"taxi-in"},"Taxi In"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You're off of the runway and your ground speed is < 30")),(0,a.kt)("h4",{id:"notes-5"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,a.kt)("h3",{id:"arrived"},"Arrived"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "End Flight" button must be clicked to set the flight to arrived'),(0,a.kt)("li",{parentName:"ul"},'Once "End Flight" is clicked, a button to file the PIREP will show')),(0,a.kt)("h4",{id:"notes-6"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "End Flight" button shows up'),(0,a.kt)("li",{parentName:"ul"},"The parking/gate you're at will be attempted to be figured out")))}p.isMDXComponent=!0}}]);