"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[802],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2699:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={id:"configmaps",title:"Config Maps"},s=void 0,p={unversionedId:"acars/configmaps",id:"acars/configmaps",title:"Config Maps",description:'Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a "feature", which tells ACARS where to read the data for those features. They\'re stored in the configmaps directory.',source:"@site/docs/acars/configmaps.md",sourceDirName:"acars",slug:"/acars/configmaps",permalink:"/acars/configmaps",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/configmaps.md",tags:[],version:"current",frontMatter:{id:"configmaps",title:"Config Maps"},sidebar:"docs",previous:{title:"Flight Phases",permalink:"/acars/phases"},next:{title:"Getting Help",permalink:"/help"}},u=[{value:"Anatomy of a ConfigMap",id:"anatomy-of-a-configmap",children:[],level:2},{value:"Features",id:"features",children:[{value:"Mapping data to a feature",id:"mapping-data-to-a-feature",children:[],level:3},{value:"Ignoring Features",id:"ignoring-features",children:[],level:3},{value:"Flaps",id:"flaps",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"Creating a config map",id:"creating-a-config-map",children:[],level:2},{value:"Debugging",id:"debugging",children:[],level:2}],d={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a "feature", which tells ACARS where to read the data for those features. They\'re stored in the ',(0,l.kt)("inlineCode",{parentName:"p"},"configmaps")," directory."),(0,l.kt)("p",null,"The configmaps are downloaded by the client on startup from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/phpvms/configmaps"},"configmaps repository"),", so updates can be more easily pushed out."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Config maps are now only for FSX/P3D or X-Plane. A lot of developers use the default offsets or datarefs, so it may not be required to change anything"))),(0,l.kt)("p",null,"If you create a configmap for an aircraft, please let me know, I can include it in ACARS to be distributed out. That would be much appreciated! ",(0,l.kt)("strong",{parentName:"p"},"Always create a new file"),", otherwise the defaults that are included with the distribution will be overwritten by an updates."),(0,l.kt)("h2",{id:"anatomy-of-a-configmap"},"Anatomy of a ConfigMap"),(0,l.kt)("p",null,"A config map is an XML file which looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="configmaps/FlightFactorA320.xml (truncated)"',title:'"configmaps/FlightFactorA320.xml','(truncated)"':!0},'<?xml version="1.0" encoding="utf-8" ?>\n<Rules>\n  <Rule Simulator="X-Plane" TitleContains="FlightFactor A320">\n    \x3c!-- ... --\x3e\n    <LandingLights>\n      <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>\n      <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>\n    </LandingLights>\n    \x3c!-- ... --\x3e\n  </Rule>\n</Rules>\n')),(0,l.kt)("p",null,"A rule defines:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Who the rule is for",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The simulator it's for (either ",(0,l.kt)("inlineCode",{parentName:"li"},"X-Plane")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"FSX/Prepar3d"),")"),(0,l.kt)("li",{parentName:"ul"},'The aircraft title contains. This is how it\'s filtered. It must be broad but also specific to make sure it "catches" the right plane type.',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Each word is looked for and it\'s AND\'d. In the example above, "FlightFactor" and "A320" must be present'),(0,l.kt)("li",{parentName:"ul"},"For FSX/P3d, the value looked at is the aircraft title field, offset ",(0,l.kt)("inlineCode",{parentName:"li"},"0x3D00")),(0,l.kt)("li",{parentName:"ul"},"For X-Plane, the value looked at is ",(0,l.kt)("inlineCode",{parentName:"li"},"sim/aircraft/view/acf_descrip")))))),(0,l.kt)("li",{parentName:"ol"},"The feature (see below)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'The maps - a group of datarefs or offsets which constitute that feature being "on" or "enabled"')))),(0,l.kt)("p",null,'In the above example, for the FlightFactor A320, the landing lights are controlled by two datarefs, both of which the values need to be 1 or 2 for the landing lights to be considered "on".'),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,"The base rules and rule types are available. This list may be expanded in the future."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BeaconLights"),(0,l.kt)("li",{parentName:"ul"},"LandingLights"),(0,l.kt)("li",{parentName:"ul"},"NavigationLights"),(0,l.kt)("li",{parentName:"ul"},"StrobeLights"),(0,l.kt)("li",{parentName:"ul"},"TaxiLight"),(0,l.kt)("li",{parentName:"ul"},"WingLight")),(0,l.kt)("h3",{id:"mapping-data-to-a-feature"},"Mapping data to a feature"),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"Key")," consists a ",(0,l.kt)("inlineCode",{parentName:"p"},"Type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Key")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"Value"),'. These are all "AND" together, so every value in the feature must evaluate to true.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Example Rule",title:"Example",Rule:!0},'<Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Type"),", which can be:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bool")," - a ",(0,l.kt)("inlineCode",{parentName:"li"},"Value")," is not required, the sim returns a ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," for this value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Byte")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"Double"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"Float")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Short")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mask")," - Find a value in a bit mask"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String")," - look for exactly matches"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IntArray"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"FloatArray")," - (X-Plane) - where the DataRef returns an array of integers or floats"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Key")," - This is where ACARS will look to get the value. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FSX/Prepar3d")," - This is an FSUIPC offset. LVars aren't supported, though you can use LINDA and FSUIPC to map an LVAR to a custom offset, and read it here. This information is up to the aircraft developer to provide."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Plane")," - This is the dataref value"))),(0,l.kt)("li",{parentName:"ol"},"Value specifier, must be one of:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Value")," - this is what value to look for, in the case of a non-boolean type. You can use the OR operator (",(0,l.kt)("inlineCode",{parentName:"li"},"|"),") to separate multiple values"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueGt"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"ValueGte")," - Value greater than or greater than equal to, respectively"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueLt"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"ValueLte")," - Value less than or less than or equal to, respectively"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueBtwn")," - Value between; this must include two values like ",(0,l.kt)("inlineCode",{parentName:"li"},"0|1"),", and will include the first value up to the first"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Index")," (required for ",(0,l.kt)("inlineCode",{parentName:"li"},"IntArray")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"FloatArray"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If using the above types, which index of the array to look for the value in (starts from 0)")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A note for X-Plane: the ",(0,l.kt)("inlineCode",{parentName:"p"},"sim/cockpit/electrical")," datarefs are usually not great to use - X-Plane emulates the electrical system, so the values may toggle between 0 and 1, for example, when the strobe light is blinking, the electrical will toggle between 0 and 1. These would show up as the strobe being on. You generally want to check any switches (see Debugging below)"))),(0,l.kt)("h3",{id:"ignoring-features"},"Ignoring Features"),(0,l.kt)("p",null,"To ignore a feature in the rules (for example, if a feature doesn't work properly), add ",(0,l.kt)("inlineCode",{parentName:"p"},'Ignored="True"')," to the feature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<LandingLights Ignored="True">\n')),(0,l.kt)("p",null,"This will then ignore any landing light rules for that specific aircraft. You can also ignore a specific value, like if a switch has a 3 positions - 0 for off, 1 for on, and 3 for auto, you can ignore a rule with the value of 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<LandingLights IgnoreIf="3">\n  <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>\n  <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>\n</LandingLights>\n')),(0,l.kt)("p",null,"In this case, all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Key")," values must match ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," in order for it to be ignored in any landing lights rules. In this next example, it's reading from an array of integers that's returned by the sim, looking at the 2nd index, and ignoring the value if it's a 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<StrobeLights IgnoreIf="3">\n  <Key Type="IntArray" Index="1" Key="some/integer/array" Value="1|2"/>\n</LandingLights>\n')),(0,l.kt)("h3",{id:"flaps"},"Flaps"),(0,l.kt)("p",null,"You can also add the flaps naming to specific aircraft which might have different values. The flaps have an numeric index value that's reported and then a corresponding flap name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">\n  <Flaps>\n    <Flap Index="0" Text="Up" />\n    <Flap Index="1" Text="CONF 1+1" />\n    <Flap Index="2" Text="CONF 2" />\n    <Flap Index="3" Text="CONF 3" />\n    <Flap Index="4" Text="CONF FULL" />\n  </Flaps>\n</Rule>\n')),(0,l.kt)("p",null,"Then these flaps settings will be used over the generic aircraft ICAO flaps namings."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"In this example, both of the datarefs, in this last, the left and right landing lights, must have a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),' in order for the landing lights to be considered "on". This aircraft config also has differing flap names.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">\n  <LandingLights>\n      <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>\n      <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>\n  </LandingLights>\n  <Flaps>\n    <Flap Index="0" Text="Up" />\n    <Flap Index="1" Text="CONF 1+1" />\n    <Flap Index="2" Text="CONF 2" />\n    <Flap Index="3" Text="CONF 3" />\n    <Flap Index="4" Text="CONF FULL" />\n  </Flaps>\n</Rule>\n')),(0,l.kt)("p",null,"In this example for FSUIPC, the offsets use a bitmask to consider the beacon lights being on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">\n  <BeaconLights>\n      <Key Type="Mask" Key="0x0D0C" Value="2"/>\n  </BeaconLights>\n</Rule>\n')),(0,l.kt)("p",null,"For the remaining features, the X-Plane defaults will be used."),(0,l.kt)("h2",{id:"creating-a-config-map"},"Creating a config map"),(0,l.kt)("p",null,"To create a config map, you can copy one of the existing files and modify it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The file must be in the ",(0,l.kt)("inlineCode",{parentName:"li"},"configmaps/")," directory"),(0,l.kt)("li",{parentName:"ul"},"Name the file as specific as possible"),(0,l.kt)("li",{parentName:"ul"},"Don't edit existing ones, they'll get overwritten")),(0,l.kt)("h2",{id:"debugging"},"Debugging"),(0,l.kt)("p",null,'To debug whether the lights are working or not, you can open the "Debug" window. To open it, go to the "Map" page, and double-click on "Flight Status". It will open up the debug window, then you can scroll down to the lights, and see the values for the lights being returned:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(384).Z})))}m.isMDXComponent=!0},384:function(e,t,a){t.Z=a.p+"assets/images/data-window-d71294d3c19ba248bf576423d7c99569.png"}}]);