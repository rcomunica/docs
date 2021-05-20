(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5124],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?t.createElement(h,i(i({ref:a},p),{},{components:n})):t.createElement(h,i({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3733:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var t=n(2122),r=n(9756),s=(n(7294),n(3905)),i={id:"awards",title:"Awards"},o={unversionedId:"developers/awards",id:"developers/awards",isDocsHomePage:!1,title:"Awards",description:"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an Award plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same Award class for multiple awards.",source:"@site/docs/developers/awards.md",sourceDirName:"developers",slug:"/developers/awards",permalink:"/developers/awards",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/awards.md",version:"current",frontMatter:{id:"awards",title:"Awards"},sidebar:"docs",previous:{title:"Addons",permalink:"/developers/addons"},next:{title:"Overview",permalink:"/api/overview"}},l=[{value:"Adding an Award",id:"adding-an-award",children:[]},{value:"Award Plugin Structure",id:"award-plugin-structure",children:[{value:"Award Class",id:"award-class",children:[]}]}],d={toc:l};function p(e){var a=e.components,i=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an ",(0,s.kt)("inlineCode",{parentName:"p"},"Award")," plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"Award")," class for multiple awards."),(0,s.kt)("p",null,"All of the awards are run and scanned on the ",(0,s.kt)("inlineCode",{parentName:"p"},"UserStatsChanged")," event, so when a PIREP is accepted, or other properties for the user are changed (e.g, the number of flights, flight hours, etc). The user being scanned is passed in as the ",(0,s.kt)("inlineCode",{parentName:"p"},"$user")," property."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"adding-an-award"},"Adding an Award"),(0,s.kt)("p",null,"An award consists of two parts:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An award plugin"),(0,s.kt)("li",{parentName:"ol"},"The award link")),(0,s.kt)("p",null,"The award link is created in the admin panel, linking an award to a plugin. The plugin allows for advanced, reusable plugins and can be as complex or as simple as you like. To create an award from a plugin, view the awards page:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1419).Z})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"award-plugin-structure"},"Award Plugin Structure"),(0,s.kt)("p",null,"The award class needs to be placed in either the main Awards directory, or in a module, which can then be distributed as a full package."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"modules/Awards")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"modules/{YOUR_MODULE}/Awards"))),(0,s.kt)("h3",{id:"award-class"},"Award Class"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"modules/Awards/PilotFlightAwards.php")," is a fully-commented example"))),(0,s.kt)("p",null,"The Award class basically looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Modules\\Awards;\n\nuse App\\Contracts\\Award;\n\n/**\n * The Award needs to extend the AwardInterface class. It's abstract\n * so if check() isn't implemented, it'll throw an error\n */\nclass MyAward extends Award\n{\n    // The name of this award that shows in the Award class dropdown\n    public $name = 'My Award';\n    \n    // If this award is selected in the dropdown, this description is shown\n    // to the user to tell them what the parameter is\n    public $param_description = 'Describe what the parameter is';\n    \n    /**\n     * This method needs to be implemented\n     * @param null $parameter Optional parameters that are passed in from the UI\n     */\n    public function check($parameter = null): bool\n    {        \n        if(!$parameter) {\n            // Set $parameter to some good default\n        }\n        \n        // Return true if the award should be awarded\n        return true;\n    }\n}\n")),(0,s.kt)("h4",{id:"parameter-passed"},"Parameter passed"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"$parameter")," is the value that is set in the Award row in the admin panel. It's optional, so it might be good for you to set a default if it's null. An example could be the number of flights, so you can use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"Award")," class for different types of awards."),(0,s.kt)("h4",{id:"accessing-information"},"Accessing information"),(0,s.kt)("p",null,"Your Award class, in the ",(0,s.kt)("inlineCode",{parentName:"p"},"check($parameter)")," function, has access the class property called ",(0,s.kt)("inlineCode",{parentName:"p"},"$this->user"),". For example, if you want to see the user's flights, or if you wanted to have an award for a low landing rate:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"// ...\n// In the Award row in the admin, $landing_rate might be set to 100\n// This check will get called when a PIREP is accepted, so you can \n// have access to the user's last PIREP\npublic function check($landing_rate = null): bool\n{\n    // Have the default landing rate if it hasn't been set in the admin\n    // It's best to make sure you set a default value if you're using it\n    if(!$landing_rate) {\n        $landing_rate = 200;\n    }\n    \n    if($this->user->last_pirep->landing_rate <= (int) $landing_rate) {\n        return true;\n    }\n    \n    return false;\n}\n// ...\n")))}p.isMDXComponent=!0},1419:function(e,a,n){"use strict";a.Z=n.p+"assets/images/admin-awards-98a29b5a4476a3d09d6896080d9f3a12.png"}}]);