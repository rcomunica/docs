"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[9091],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1697:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],l={id:"addons",title:"Addons"},s=void 0,p={unversionedId:"developers/addons",id:"developers/addons",title:"Addons",description:"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget.",source:"@site/docs/developers/addons.mdx",sourceDirName:"developers",slug:"/developers/addons",permalink:"/developers/addons",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/addons.mdx",tags:[],version:"current",frontMatter:{id:"addons",title:"Addons"},sidebar:"docs",previous:{title:"Building Assets",permalink:"/developers/building-assets"},next:{title:"Awards",permalink:"/developers/awards"}},d={},u=[{value:"Namespacing",id:"namespacing",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Automatic Installation",id:"automatic-installation",level:3},{value:"Web Routes",id:"web-routes",level:2},{value:"Admin Routes",id:"admin-routes",level:4},{value:"API Routes",id:"api-routes",level:4},{value:"<code>middleware</code>",id:"middleware",level:4},{value:"Controllers",id:"controllers",level:2},{value:"Getting the User",id:"getting-the-user",level:5},{value:"Models",id:"models",level:2},{value:"Creating a Model",id:"creating-a-model",level:3},{value:"Relationships",id:"relationships",level:4},{value:"Creating and modifying tables with migrations",id:"creating-and-modifying-tables-with-migrations",level:2},{value:"Seeding Data",id:"seeding-data",level:3},{value:"Service Layer",id:"service-layer",level:2},{value:"Repositories",id:"repositories",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget. "),(0,o.kt)("p",null,"At their core, the module system uses ",(0,o.kt)("a",{parentName:"p",href:"https://nwidart.com/laravel-modules/v2/introduction"},"laravel-modules"),". The stubs are modified so the generation create the structure that is compatible with the phpVMS codebase."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"basic-scaffold-generation"},"Basic Scaffold Generation"),(0,o.kt)("p",null,"To generate a module, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan module:make {ModuleName}\n")),(0,o.kt)("p",null,"Which generates the basic structure in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/modules")," folder. After generating the module, if you want to make it available on composer, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file, setting your ",(0,o.kt)("inlineCode",{parentName:"p"},"VENDOR")," and author information."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All of the examples below will be based on a module named ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample"),". To see the source for the module, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nabeelio/phpvms-module"},"check it out on GitHub"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"namespacing"},"Namespacing"),(0,o.kt)("p",null,"The root namespace for your module will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Modules\\{YOUR_MODULE}"),", e.g, ",(0,o.kt)("inlineCode",{parentName:"p"},"Modules\\Sample")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"When a module is created, a directory structure like this is created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Config\n\u251c\u2500\u2500 Console\n\u251c\u2500\u2500 Database\n\u251c\u2500\u2500 Http\n\u251c\u2500\u2500 Listeners\n\u251c\u2500\u2500 Models\n\u251c\u2500\u2500 Providers\n\u2514\u2500\u2500 Resources\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Config")," - This contains the config file for use in your module. The items in this will be prefixed by your module name, for example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"echo config('sample.name'); # writes out \"Sample\"\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Console")," - This contains any ",(0,o.kt)("inlineCode",{parentName:"p"},"artisan")," commands your module might have")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Database")," - This contains several directories, the most important probably being the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrations")," directory. See below for more information about migrations and database access.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Http")," - The folders in this are all related to HTTP access for your application - includes the controllers and routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Listeners")," - Any event listeners for your module will be in here. See below for more information about subscribing to events.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Models")," - All of the models, used for database access, and corresponding to tables, are placed here. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Resources")," - Any language files and views are placed here"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"automatic-installation"},"Automatic Installation"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Still being written"))),(0,o.kt)("p",null,"To be able to publish to composer, add ",(0,o.kt)("inlineCode",{parentName:"p"},"joshbrw/laravel-module-installer")," as a dependency in your module's ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file, and then set the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},"laravel-module"),". Then a user can run ",(0,o.kt)("inlineCode",{parentName:"p"},"composer require your/module")," from Packagist to install."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joshbrw/laravel-module-installer"},"joshbrw/laravel-module-installer")," for additional information."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"routing-and-controllers"},"Routing And Controllers"),(0,o.kt)("p",null,"Routing follows the standard Laravel routing format, and the files are placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules/{MODULE}/Http/Routes")," folder. For examples, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Routes")," files to see how the Route groups work and how the middleware works. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample")," module's routes:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"web-routes"},"Web Routes"),(0,o.kt)("p",null,"These are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Http/Routes/web.php")," file. These define your pages that render HTML. For example, the default routes look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::group(['middleware' => [\n    'role:user' # Define who can access this page\n]], function() {\n\n    # all your routes are prefixed with your module's name\n    # e.g. yoursite.com/sample\n    Route::get('/', 'SampleController@index');\n});\n\n")),(0,o.kt)("h4",{id:"admin-routes"},"Admin Routes"),(0,o.kt)("p",null,"These are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Http/Routes/admin.php"),". This will look for controllers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Http/Controllers/Admin")," folder and namespace. These routes will be prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"$module/admin")),(0,o.kt)("h4",{id:"api-routes"},"API Routes"),(0,o.kt)("p",null,"These are in ",(0,o.kt)("inlineCode",{parentName:"p"},"Http/Routes/api.php"),", and will look for controllers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Http/Controllers/Api")," folder and namespace. These routes will be prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/$module"),"."),(0,o.kt)("h4",{id:"middleware"},(0,o.kt)("inlineCode",{parentName:"h4"},"middleware")),(0,o.kt)("p",null,"Middleware allows you to inject a class into the HTTP request chain, so you don't need to call a check or something in every method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"'middleware' => ['role:user']       # enable for all users\n'middleware' => ['role:admin']      # enable for admin only\n\n'middleware' => ['api.auth'] # for API routes, you can add this middlware to require API auth\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Read more about ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/middleware"},"Laravel Middleware")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"Now we can look at the (truncated) corresponding controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Modules\\Sample\\Http\\Controllers;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\n\nclass SampleController extends Controller\n{\n    // ...\n    \n    /**\n     * Display a listing of the resource.\n     */\n    public function index()\n    {\n        return view('sample::index');\n    }\n\n    // ...\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"getting-the-user"},"Getting the User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$user = Auth::user();\n")),(0,o.kt)("p",null,"To check if a user is logged in, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"if(Auth::check())\n")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"database-access"},"Database Access"),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("p",null,"Models are the more basic way to access your database tables. For example, if you have a table called ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_table"),", a model called ",(0,o.kt)("inlineCode",{parentName:"p"},"SampleTable")," would make most sense. While table names generally refer to objects in the plural, a model is named for an item in it's singular form."),(0,o.kt)("h3",{id:"creating-a-model"},"Creating a Model"),(0,o.kt)("p",null,"The models go into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," directory. The fastest way is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"artisan")," helper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan module:make-model SampleTable Sample\n")),(0,o.kt)("p",null,"After it's generated, you should open the model, and fill in the table name. See the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/eloquent"},"Laravel Model Documentation")," for more details on how to work with models."),(0,o.kt)("h4",{id:"relationships"},"Relationships"),(0,o.kt)("p",null,"If your table has a column called ",(0,o.kt)("inlineCode",{parentName:"p"},"pirep_id"),", you can add a relationship to your model called ",(0,o.kt)("inlineCode",{parentName:"p"},"pireps"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace Modules\\Sample\\Models;\n\nuse App\\Contracts\\Model;\n\nclass SampleTable extends Model {\n    public function pirep()\n    {\n        return $this->belongsTo(Pirep::class, 'pirep_id');\n    }\n}\n")),(0,o.kt)("p",null,"Now, you can easily access the parent PIREP, without having to write any queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$record = SampleTable::with(['pirep'])->get(1);  # Get the ID of 1, eager-loading the pirep relationship\necho $record->pirep->dpt_airport_id; # Write out the departure airport\n")),(0,o.kt)("p",null,"We can also get fancy, since the relationship returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pirep")," model, and it has relationships to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Airport")," model, you can open the ",(0,o.kt)("inlineCode",{parentName:"p"},"App\\Models\\Pirep")," file and look at the relationships."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"echo $record->pirep->dpt_airport->name; # Write out the name of the departure airport\n")),(0,o.kt)("p",null,"The right relationships make life easier. See the Laravel documentation on relationships."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-and-modifying-tables-with-migrations"},"Creating and modifying tables with migrations"),(0,o.kt)("p",null,"Laravel includes a way to create and update tables, called ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/5.5/migrations"},"migrations"),".  Migrations are ways to programmatically define your tables, and let the framework worry about the exact syntax to use. The advantage to this abstraction is being."),(0,o.kt)("p",null,"! You should ",(0,o.kt)("em",{parentName:"p"},"not")," be using raw SQL"),(0,o.kt)("p",null,"There is an ",(0,o.kt)("inlineCode",{parentName:"p"},"artisan")," helper to generate migrations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan module:make-migration create_sample_table ModuleName\n")),(0,o.kt)("p",null,"This will create a migration file in your module's ",(0,o.kt)("inlineCode",{parentName:"p"},"Database/migrations")," directory. Now, when a user can goes to the updater, at ",(0,o.kt)("inlineCode",{parentName:"p"},"/update"),", it will show that there are updates available, and the migrations will be run. During an install, the migrations are also all run. This makes updates simple and straight-forward, without having to run any SQL manually."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Database/migrations")," directory has the core migrations and is a good reference on field types, especially if you're looking to add relationships."),(0,o.kt)("p",null,"!!! Design your tables well - follow the guidelines set by Laravel, and you'll have a much better time."),(0,o.kt)("p",null,"!!!! Add new migration files when you have to modify a table, etc, after you've released it into the wild. The migrations that are run are kept track of, so if it's seen that it's already run the file, it won't run it again."),(0,o.kt)("h3",{id:"seeding-data"},"Seeding Data"),(0,o.kt)("p",null,"I've added a few extra features, including adding seed data, including adding seeder data. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse App\\Contracts\\Migration;\nuse App\\Services\\Installer\\SeederService;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass CreateSettingsTable extends Migration\n{\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {\n        Schema::create('settings', function (Blueprint $table) {\n            // ... Create all the columns\n        });\n        \n            // Create some initial data, with the columns filled out\n        $settings = [\n            [\n                'order' => 1,\n                'name' => 'Start Date',\n                'group' => 'general',\n                'value' => '',\n                'type' => 'date',\n                'description' => 'The date your VA started',\n            ],\n            \n            // A lot more entries\n            \n        ];\n        \n        $this->addData('settings', $settings);\n    }\n    \n    // Not showning the down()\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"templating"},"Templating"),(0,o.kt)("p",null,"Templates are placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"modules/{ModuleName}/Resources/views"),". If someone wants to modify the views, it's recommended that they either run ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan vendor:publish")," or they copy the templates into the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/views/module/$moduleName")," folder (look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"$viewPath")," value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerViews()")," method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"$MODULE/Providers/$ModuleServiceProvider.php")," file for the exact path if you're unsure)."),(0,o.kt)("p",null,"!!!! Read more about ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/5.5/blade"},"Laravel Blade Templating")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"event-listeners"},"Event Listeners"),(0,o.kt)("p",null,"Available events from the main app are listed in the ",(0,o.kt)("a",{parentName:"p",href:"/nabeelio/phpvms/tree/master/app/Events"},"app/Events")," directory. Subscribing to events follows the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/5.5/events#event-subscribers"},"Laravel Events")," format. Create the event listener in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$MODULE\\Listeners")," folder (e.g, ",(0,o.kt)("inlineCode",{parentName:"p"},"PirepAcceptedListener"),"), and then register it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$MODULE\\Providers\\EventServiceProvider")," folder, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"$listen")," section, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"protected $listen = [\n    'App\\Events\\PirepAccepted' => [\n        'Modules\\Sample\\Listeners\\PirepAcceptedListener',\n    ],\n];\n")),(0,o.kt)("p",null,"To see the data passed, just look in the Event class."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"design-patterns-and-suggestions"},"Design Patterns and Suggestions"),(0,o.kt)("h2",{id:"service-layer"},"Service Layer"),(0,o.kt)("p",null,"When multiple models/repositories/steps are involved in a task, they should be written as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," class. For example, when filing a PIREP,  there are changes made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PIREP")," model, but also to the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model, one or more events are dispatched, etc. Instead of putting all of this logic into a Controller or directly into a Model, a Service class should be defined, which ties all these steps together. This helps with testing and debugging, and portability. In the PIREP example, it can be filed through a web interface, or a RESTful interface. A Service class allows for both of these to use the same logic without reusing code."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"repositories"},"Repositories"),(0,o.kt)("p",null,"While you can use and import models directly, it's recommended to use the repositories, in the ",(0,o.kt)("a",{parentName:"p",href:"/nabeelio/phpvms/tree/master/app/Repositories"},"app/Repositories")," are listed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface"},"here"),". Repositories give the added benefits of automatically caching and flushing the cache when data is added/updated."),(0,o.kt)("p",null,"The recommended method is to use ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/5.5/container#automatic-injection"},"Automatic Injection"),", which would involve adding a constructor to your Listener, as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace Modules\\Sample\\Listeners;\n\nuse App\\Events\\PirepAccepted;\nuse App\\Repositories\\PirepRepository;\n\nclass PirepAcceptedListener {\n\n    private $pirepRepo;\n\n    // You can pass as many Repositories in as your wish. \n    // See the app\\Controllers for more examples\n    public function __construct(PirepRepository $pirepRepo) {\n        $this->pirepRepo = $pirepRepo;\n    }\n\n    public function handle(PirepAccepted $pirep) {\n        Log::info('Received PIREP', [$pirep]);\n    }\n}\n")),(0,o.kt)("p",null,"The methods in the repositories largely mirror the Model methods, but can automatically handle searches, etc. The docs for the repositories ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface"},"are available here"),". You can read more about the repository pattern ",(0,o.kt)("a",{parentName:"p",href:"https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/?utm_source=prettus-l5-repository&utm_medium=readme&utm_campaign=prettus-l5-repository"},"here")))}c.isMDXComponent=!0}}]);