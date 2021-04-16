(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return a?l.a.createElement(m,s(s({ref:t},o),{},{components:a})):l.a.createElement(m,s({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var o=2;o<i;o++)r[o]=a[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(9),i=(a(0),a(129)),r={id:"layouts",title:"Layouts and Template Basics"},s={unversionedId:"customize/layouts",id:"customize/layouts",isDocsHomePage:!1,title:"Layouts and Template Basics",description:"phpVMS can customized to fit your VA's look and feel. The templating is powered by Laravel Blade. To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense.",source:"@site/docs/customize/layouts.md",sourceDirName:"customize",slug:"/customize/layouts",permalink:"/customize/layouts",editUrl:"https://github.com/phpvms/docs/tree/master/docs/customize/layouts.md",version:"current",frontMatter:{id:"layouts",title:"Layouts and Template Basics"},sidebar:"docs",previous:{title:"Optimizing",permalink:"/config/optimizing"},next:{title:"Theming",permalink:"/customize/theming"}},c=[{value:"Layout Basics",id:"layout-basics",children:[{value:"Template basics",id:"template-basics",children:[]}]},{value:"Caching Items",id:"caching-items",children:[]},{value:"Resources",id:"resources",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"phpVMS can customized to fit your VA's look and feel. The templating is powered by ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/7.x/blade"},"Laravel Blade"),". To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense."),Object(i.b)("h2",{id:"layout-basics"},"Layout Basics"),Object(i.b)("p",null,"All of the themes are stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"resources/views/layouts/")," folder. There is a base theme file, ",Object(i.b)("inlineCode",{parentName:"p"},"app.blade.php"),", which is then used by the templates. It has several required sections:"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"See the ",Object(i.b)("inlineCode",{parentName:"p"},"resources/views/layouts/default/app.blade.php")," as an example template, since there are several sections of code which are required in any custom templates, including some Javascript and CSS. I've tried to make notes and outline those sections in the ",Object(i.b)("inlineCode",{parentName:"p"},"default/app.blade.php")," file itself."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@section('title')")," is the page title, and shows up in the title bar"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@section('content')")," is the main content for the page"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@section('scripts')")," is where any Javascript will go (note, you need to include the ",Object(i.b)("inlineCode",{parentName:"li"},"<script><\/script>")," tags when extending this section."),Object(i.b)("li",{parentName:"ul"},"Layouts and templates follows ",Object(i.b)("a",{parentName:"li",href:"https://laravel.com/docs/5.6/blade#template-inheritance"},"Laravel's Template Inheritance")),Object(i.b)("li",{parentName:"ul"},"Your page layout needs to be called ",Object(i.b)("inlineCode",{parentName:"li"},"app.blade.php"),". This is to keep compatibility with any addons/modules that will extend the basic layout",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"All of the templates will ",Object(i.b)("inlineCode",{parentName:"li"},"@extend('app')"),"."))),Object(i.b)("li",{parentName:"ul"},"The page layout requires several sections:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@yield('title')")," - this would go into the ",Object(i.b)("inlineCode",{parentName:"li"},"<title>")," tag of the page"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@yield('css')")," - place this towards the end of the ",Object(i.b)("inlineCode",{parentName:"li"},"<head>")," section"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@include('system.scripts')")," - put this last the last statement before the ",Object(i.b)("inlineCode",{parentName:"li"},"</head>")," tag"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@yield('content')")," - where the body of the page will display"),Object(i.b)("li",{parentName:"ul"},"This goes at the end of the body:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-html"},"<script src=\"{!! public_asset('/assets/system/js/vendor.js') !!}?v={!! time() !!}\"><\/script>\n<script src=\"{!! public_asset('/assets/system/js/phpvms.js') !!}?v={!! time() !!}\"><\/script>\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@yield('scripts')")," has to go right before the ",Object(i.b)("inlineCode",{parentName:"li"},"</body>")," tag"))),Object(i.b)("li",{parentName:"ul"},"View the main ",Object(i.b)("inlineCode",{parentName:"li"},"resources/views/layouts/default/app.blade.php")," to ensure that you've got all of the Javascript and code required. There are notes in that file as to what is absolutely required.")),Object(i.b)("h3",{id:"template-basics"},"Template basics"),Object(i.b)("p",null,"phpVMS takes advantage of many of the ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/5.6/blade"},"Laravel Blade")," features, and there are no limitations placed within the system to prevent anyone from using the full power of the templating system. There are only a few guidelines, to ensure a consistent standard for addons, widgets and other customizations."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All templates extend the 'app' layout (as described above). Unless you have a custom page that has all of the HTML required")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"@extends('app')\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is the page title, as described above")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"@section('title', 'flights')\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is where all of the content for a page will go")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"@section('content')\n# Place content here\n@endsection\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is also optional, where any CSS can go. Needs to include the ",Object(i.b)("inlineCode",{parentName:"li"},"<style>")," tags")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"@section('css')\n@endsection\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is optional, where any Javascript will go. Needs to be in ",Object(i.b)("inlineCode",{parentName:"li"},"<script>")," tags")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"@section('scripts')\n@endsection\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"caching-items"},"Caching Items"),Object(i.b)("p",null,"When making calls to models, etc in templates, to increase performance, using the ",Object(i.b)("inlineCode",{parentName:"p"},"cache()->remember()")," call. The call looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$value = cache()->remember($cache_name, $cache_time_in_seconds, $function_to_lookup);\n")),Object(i.b)("p",null,"An example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"// Cache for 5 minutes (3600 seconds)\n$schedule_count = cache()->remember('schedule_count', 3600, function () {\n    return \\App\\Models\\Flight::where('active', true)->count();\n});\n\nSchedule Count: {{ $schedule_count }}\n")),Object(i.b)("p",null,"This will greatly increase the performance on your pages"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("p",null,"A few good resources are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://laravel.com/docs/5.5/blade"},"Laravel Blade")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://laracasts.com/series/laravel-5-fundamentals/episodes/5"},"Blade 101, Laracast Video")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://laracasts.com/series/laravel-from-scratch-2017/episodes/10"},"Layouts and Structure, Laracast Video"))),Object(i.b)("p",null,"Laracasts is a great resource for learning the ins and outs of Laravel."))}p.isMDXComponent=!0}}]);