"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[2997],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,f=p["".concat(s,".").concat(c)]||p[c]||h[c]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var a=n(7462),i=n(3366),l=(n(7294),n(4137)),r=["components"],o={id:"user-guide",title:"User Guide"},s="Installation (Client)",u={unversionedId:"acars/user-guide",id:"acars/user-guide",title:"User Guide",description:"---",source:"@site/docs/acars/user-guide.mdx",sourceDirName:"acars",slug:"/acars/user-guide",permalink:"/acars/user-guide",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/user-guide.mdx",tags:[],version:"current",frontMatter:{id:"user-guide",title:"User Guide"},sidebar:"docs",previous:{title:"Installation (Server)",permalink:"/acars/install-server"},next:{title:"Customization",permalink:"/acars/customization"}},d={},h=[{value:".NET 6.0 Runtime",id:"net-60-runtime",level:2},{value:"ACARS Client",id:"acars-client",level:2},{value:"Simulator Configuration",id:"simulator-configuration",level:2},{value:"FSX/Prepar3d Configuration",id:"fsxprepar3d-configuration",level:3},{value:"X-Plane Configuration",id:"x-plane-configuration",level:3},{value:"MSFS Configuration",id:"msfs-configuration",level:3},{value:"WASM Module",id:"wasm-module",level:4},{value:"Scenery",id:"scenery",level:4},{value:"Permission Denied Errors",id:"permission-denied-errors",level:4},{value:"Client Config",id:"client-config",level:2},{value:"Get the URL and API Key",id:"get-the-url-and-api-key",level:3},{value:"Client Settings",id:"client-settings",level:3},{value:"Sim Selection",id:"sim-selection",level:3},{value:"Mac/Linux Configuration",id:"maclinux-configuration",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Flight Planning",id:"flight-planning",level:2},{value:"Entering everything manually",id:"entering-everything-manually",level:3},{value:"Flight Search or Bids",id:"flight-search-or-bids",level:3},{value:"Flight Plans",id:"flight-plans",level:3},{value:"Lights and Aircraft Features",id:"lights-and-aircraft-features",level:2},{value:"Flight Phases",id:"flight-phases",level:2},{value:"Boarding",id:"boarding",level:4},{value:"Notes",id:"notes",level:5},{value:"Pushback",id:"pushback",level:4},{value:"Notes",id:"notes-1",level:4},{value:"Taxi Out",id:"taxi-out",level:4},{value:"Notes",id:"notes-2",level:4},{value:"Takeoff",id:"takeoff",level:4},{value:"Notes",id:"notes-3",level:5},{value:"Enroute",id:"enroute",level:4},{value:"Approach",id:"approach",level:4},{value:"Final",id:"final",level:4},{value:"Landing",id:"landing",level:4},{value:"Notes:",id:"notes-4",level:5},{value:"Taxi In",id:"taxi-in",level:4},{value:"Notes",id:"notes-5",level:5},{value:"Arrived",id:"arrived",level:4},{value:"Notes",id:"notes-6",level:5}],p={toc:h};function c(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation-client"},"Installation (Client)"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"net-60-runtime"},".NET 6.0 Runtime"),(0,l.kt)("p",null,"If you don't have this installed, ACARS will prompt you to download it. But if you want to download ahead of time, visit the ",(0,l.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"},"Download Page from Microsoft"),", and select the x64 version for Desktop apps"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1646).Z,width:"1388",height:"893"})),(0,l.kt)("h2",{id:"acars-client"},"ACARS Client"),(0,l.kt)("p",null,"After downloading the zip, just extract the client into a folder (e.g, on your desktop into a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"ACARS"),"). Then you can create a desktop shortcut from the ",(0,l.kt)("inlineCode",{parentName:"p"},"acars.exe")," for easier access."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"simulator-configuration"},"Simulator Configuration"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fsxprepar3d-configuration"},"FSX/Prepar3d Configuration"),(0,l.kt)("p",null,"To use FSX/Prepar3d, you need to install:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.fsuipc.com"},"FSUIPC")," - the licensed version isn't required."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://fsuipc.simflight.com/beta/MakeRwys.zip"},"MakeRwys"))),(0,l.kt)("p",null,"After installing both, run ",(0,l.kt)("inlineCode",{parentName:"p"},"MakeRwys"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"MakeRwys")," also needs to be re-run whenever there are scenery changes (if you want gates/runways to be updated)."),(0,l.kt)("h3",{id:"x-plane-configuration"},"X-Plane Configuration"),(0,l.kt)("p",null,"X-Plane uses a custom plugin. Open the ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Plane")," folder, and copy the ",(0,l.kt)("inlineCode",{parentName:"p"},"AcarsConnect")," folder into  your ",(0,l.kt)("inlineCode",{parentName:"p"},"Resources\\plugins")," folder."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1771).Z,width:"1044",height:"194"})),(0,l.kt)("h3",{id:"msfs-configuration"},"MSFS Configuration"),(0,l.kt)("h4",{id:"wasm-module"},"WASM Module"),(0,l.kt)("p",null,"If you're using Microsoft Flight Simulator, then to read the LVars from the sim, you need the ",(0,l.kt)("inlineCode",{parentName:"p"},"FSUIPC WASM Module (Version) + WAPI (Version)")," from ",(0,l.kt)("a",{parentName:"p",href:"http://www.fsuipc.com/"},"FSUIPC")),(0,l.kt)("p",null,"After downloading, open the zip, there is a zip file called ",(0,l.kt)("inlineCode",{parentName:"p"},"fsuipc-lvar-module.zip"),". In it, there is a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"fsuipc-lvar-module")," - place that in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Community")," folder."),(0,l.kt)("h4",{id:"scenery"},"Scenery"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Due to an MSFS limitation, sceneries purchased through the MSFS store can't be read because they're encrypted. Only sceneries purchased outside of the store and manually placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Community")," directory can be read"))),(0,l.kt)("p",null,'To use MSFS, select "Microsoft Flight Simulator" from the simulator list and you will have two options:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'- "Native" - this will try to scan all of the scenery folders and BGL files. \n- "MakeRwys" - this will use the MakeRwys output (same as P3D). The files output by `MakeRwys` need to be placed in the root of the `Community` folder\n')),(0,l.kt)("h4",{id:"permission-denied-errors"},"Permission Denied Errors"),(0,l.kt)("p",null,"If you're getting a permission denied error, see ",(0,l.kt)("a",{parentName:"p",href:"https://forum.navigraph.com/t/faq-navigraph-navdata-center-could-not-find-access-simulator/2104"},"this thread")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"client-config"},"Client Config"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get-the-url-and-api-key"},"Get the URL and API Key"),(0,l.kt)("p",null,"You can either enter your URL and API key manually, or download the settings config file from your phpVMS profile. To download the config file, visit your VA and go to your profile:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9064).Z,width:"1544",height:"382"})),(0,l.kt)("p",null,"And place it a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"My Documents/phpVMS"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(908).Z,width:"318",height:"217"})),(0,l.kt)("h3",{id:"client-settings"},"Client Settings"),(0,l.kt)("p",null,"After downloading the latest ACARS version, on startup, you'll be brought to the configuration/settings page:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5684).Z,width:"850",height:"850"})),(0,l.kt)("h3",{id:"sim-selection"},"Sim Selection"),(0,l.kt)("p",null,"After entering your URL and API key, select the simulator, and then select the path to the simulator's root folder (for Fs9/FsX/Prepar3d or X-Plane)"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"FSX/Prepar3d requires the ",(0,l.kt)("inlineCode",{parentName:"p"},"MakeRwys.exe")," file, which can be downloaded from the ",(0,l.kt)("a",{parentName:"p",href:"http://fsuipc.simflight.com/beta/MakeRwys.zip"},"FSUIPC Page"),". It needs to be placed in the same directory as FSX/Prepar3d, and it will create the required files needed to scan."))),(0,l.kt)("p",null,"After selecting the directory, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Re-Scan Scenery"),". This will load the scenery database into ACARS for it to run/load later"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maclinux-configuration"},"Mac/Linux Configuration"),(0,l.kt)("p",null,"To run ACARS with X-Plane on the Mac or Linux, you have to run Windows in a VM. On the Mac, I use ",(0,l.kt)("a",{parentName:"p",href:"https://www.vmware.com/products/fusion.html"},"VMWare Fusion"),", which is free for personal use. The procedure below will be similar for Parallels or Virtual Box, which is roughly:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the X-Plane folder as a shared folder/mount to the Windows VM"),(0,l.kt)("li",{parentName:"ol"},"Copy the ",(0,l.kt)("inlineCode",{parentName:"li"},"AcarsConnect")," plugin to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Resources\\plugin")," folder (see above)"),(0,l.kt)("li",{parentName:"ol"},"Set the IP address in ACARS to the IP of the host")),(0,l.kt)("p",null,"In order to get the scenery scanning working properly, add X-Plane as a shared folder:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1881).Z,width:"637",height:"273"})),(0,l.kt)("p",null,'Then click "Open In Guest", and you can follow the above instructions for then installing the plugin. Then, in ACARS, properly set the "Scenery Path" and IP to your Mac machine:'),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you configure it to point to the X-Plane root, the default share path for VMWare Fusion would be ",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\vmware-host\\Shared Folders\\X-Plane 11"),"."))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7554).Z,width:"807",height:"421"})),(0,l.kt)("p",null,"Then you can launch/run ACARS as usual."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,l.kt)("p",null,"If you're using hardware to control the sim, ACARS heavily relies on several offsets with FSUIPC, particularly the parking brake. Ensure that the offset ",(0,l.kt)("inlineCode",{parentName:"p"},"0x0BC8")," gets set"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"flight-planning"},"Flight Planning"),(0,l.kt)("p",null,"There are several ways to configure flight:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enter everything manually"),(0,l.kt)("li",{parentName:"ol"},"Load a flight from the flight search")),(0,l.kt)("h3",{id:"entering-everything-manually"},"Entering everything manually"),(0,l.kt)("p",null,"This is simple, just type in everything for your flight, referring to your VA site."),(0,l.kt)("h3",{id:"flight-search-or-bids"},"Flight Search or Bids"),(0,l.kt)("p",null,'To load a flight from the search or bids, in the menu, select flight search. If your VA has search enabled, you can click search. If you click on "Bids", it will show your available bids.'),(0,l.kt)("p",null,'If there is a SimBrief flight plan also loaded with the bid from the site, it will show up as "Yes" in that column.'),(0,l.kt)("h3",{id:"flight-plans"},"Flight Plans"),(0,l.kt)("p",null,"In order for the route map to show all of your waypoints, you need to load a flight plan. vmsACARS does not have/contain any navigation information on its own, it's all loaded from a loaded flight plan. The follow flight plan types are supported:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"FSX/P3D (",(0,l.kt)("inlineCode",{parentName:"li"},".pln"),")"),(0,l.kt)("li",{parentName:"ol"},"X-Plane (",(0,l.kt)("inlineCode",{parentName:"li"},".fms"),") "),(0,l.kt)("li",{parentName:"ol"},"MSFS (",(0,l.kt)("inlineCode",{parentName:"li"},".pln"),") "),(0,l.kt)("li",{parentName:"ol"},"Simbrief (",(0,l.kt)("inlineCode",{parentName:"li"},".xml"),', exported from the SimBrief site or the SimBrief Downloader. There is a "phpVMS" flight plan type that\'s available)')),(0,l.kt)("p",null,"The routes/navpoints are then loaded from the flight plan, along with the TOD (from MSFS/Simbrief), and filed along with your PIREP."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"lights-and-aircraft-features"},"Lights and Aircraft Features"),(0,l.kt)("p",null,"Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a ",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap.xml")," file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"flight-phases"},"Flight Phases"),(0,l.kt)("p",null,"ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights."),(0,l.kt)("h4",{id:"boarding"},"Boarding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You must be on the ground to be able to start a flight. The parking brake should also be on")),(0,l.kt)("h5",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it\'s recorded as "Unknown"')),(0,l.kt)("h4",{id:"pushback"},"Pushback"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Your aircraft has started moving, and is under 5kts"),(0,l.kt)("li",{parentName:"ul"},"If you started the flight with the brakes on and they are released")),(0,l.kt)("h4",{id:"notes-1"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "Blocks Off" time is recorded'),(0,l.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,l.kt)("h4",{id:"taxi-out"},"Taxi Out"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ground speed is above 5")),(0,l.kt)("h4",{id:"notes-2"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "Taxi Out" timer is started'),(0,l.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,l.kt)("h4",{id:"takeoff"},"Takeoff"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you're detected to be on a runway, and your ground speed is over 30"),(0,l.kt)("li",{parentName:"ul"},"If you haven't been detected on a runway, your ground speed is over 80 (rolling)"),(0,l.kt)("li",{parentName:"ul"},"You're no longer on the ground")),(0,l.kt)("h5",{id:"notes-3"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For helicopters, this phase is recorded but is essentially bypassed once you leave the ground")),(0,l.kt)("h4",{id:"enroute"},"Enroute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You're 500' AGL or above (to attempt to catch the earlier point) OR the gear are up (if they are retractable)"),(0,l.kt)("li",{parentName:"ul"},"More than 3 miles from the airport")),(0,l.kt)("h4",{id:"approach"},"Approach"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you're at the TOD",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used'),(0,l.kt)("li",{parentName:"ul"},"Otherwise, the TOD is calculated using ",(0,l.kt)("a",{parentName:"li",href:"https://www.flyingmag.com/technique/tip-week/calculating-top-descent/"},"this method")," (",(0,l.kt)("inlineCode",{parentName:"li"},"TOD = (Plane Alt - Field Alt) / 3"),")"))),(0,l.kt)("li",{parentName:"ul"},"If you went above 10k' and are now below it")),(0,l.kt)("h4",{id:"final"},"Final"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Below 3000' AGL"),(0,l.kt)("li",{parentName:"ul"},"Gear are down (if they are retractable)"),(0,l.kt)("li",{parentName:"ul"},"Flaps are down")),(0,l.kt)("h4",{id:"landing"},"Landing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You're on the ground")),(0,l.kt)("h5",{id:"notes-4"},"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,l.kt)("h4",{id:"taxi-in"},"Taxi In"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You're off of the runway and your ground speed is < 30")),(0,l.kt)("h5",{id:"notes-5"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,l.kt)("h4",{id:"arrived"},"Arrived"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "End Flight" button must be clicked to set the flight to arrived'),(0,l.kt)("li",{parentName:"ul"},'Once "End Flight" is clicked, a button to file the PIREP will show')),(0,l.kt)("h5",{id:"notes-6"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "End Flight" button shows up'),(0,l.kt)("li",{parentName:"ul"},"The parking/gate you're at will be attempted to be figured out")))}c.isMDXComponent=!0},5684:function(e,t,n){t.Z=n.p+"assets/images/cli-setup-5bbdcb407e8aa7a4fd84443cfeadd44d.png"},908:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAADZCAYAAAC5Dly+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB+ISURBVHhe7Z17dFTVvcd/A8ESLVB5ic8UmiBiQEpBa6KCr0qC9FJFbHwsri5NSis3U5U/uoDW3sVt68LaBF1q0rXkggqaguUqJEqpotxEIldbQppCEnmpiBqwiooPkrm/3z77zJwZ5szMmcwkJ3O+H9jZZ+/zPnPmO7/f3ufsHwV6jH2BFSXfDSx5RaZfCSz5bklgxT41g7GUX1kS+K6xkDEdXC5yHWN7JaGKXmffipJASQmnsGOyHrf9MUeuK+UlS5a46vwAyBT6UTrZ/9900+TJNFmlH9Hy3Ar6z8v0PDsuu4qu3eA31tlMdK2uPpEc+vff/gfR8h/p7f+SXtVzeoucy39AtIvoB5fn6JpI7I85Z0wu7dq1i3LHGOtKecOGDcEyACB1+ET99DQAAHiC9Fp8AADgQiB8AADPAeEDAHgOCB8AwHNA+AAAngPCBwDwHL7WtnY8zgIA8BR4jg8A4Dng6gIAPAeEDwDgOSB8AADPAeEDAHgO3+7du9G5AQDwFEr4xo4dq4sAAJD5wNUFAHgOCB8AwHNA+AAAngPCBwDwHFE7N442/VCCEBEZ/43cfLPNMi1Z/+zRNCT/YVUGAIC+QFTh+2THLBp85o08JQLXZSic5Er1wvPD+5+nYRfW8jQAAPQNoru6onMJiJ4xnzMAAOhDRBU+Q8sSEb0u6B4AoM9hb/ElIHpGnZTTx2233UY+n++EtGjRIjrvvPOoqalJLxlC6s4555yo8yI5fPgwnXHGGcHtDhky5IT1jh07RldccUVwGZmWunQSeVySHnzwQT0XpBK51nb3Uizk3oz8TDZu3Kjqzc9PpqMh61nvNVnP/JxlPVkfpI/oFl+iosfTadY9WrFihTqejo4OGjduHO3YsUOV7777br3EiUycOJEOHDig8kSQG9Dc7q9+9Svy+/1BYZMbc9SoUXTPPfeo+ZIqKipo27Ztan46sR6XnP8DDzxg+0VyO8mKi5uZM2cO7dy5U5cM1q5dq+oF+fxaW1tPOGe5FvJZmsj8e++9V33G8lm/8MILGXWd3EiMx1niix5/SpwnhgjJpk2bqLOzU9e4k3nz5tF7771HbW1t6phFBFevXk0zZ87USxjCevnll+tSbFJ13sOGDVNfCBFcL1sDbrqPzj777LDPQ3IRwu9///uqLIwePZo2b96sSwayzve+9z1l2Qlvv/02nX766XTyySerspP7CyRHDFc3EdEz8/i8+uqr9Nprr9HTTz+d0ptWfhnll9XqClqtC/miWN1UcSkSRcRPRNB6Izslleedl5enviCmtWk998hzi3be1usiWMvm9JNPPhncpqwj19TchtWts+7bdM3MbfzmN78JW0fqJ0yYQLt27aILLrhAWa3Jfi7JXs9o52c9H8F6TpH3UrT1Ij8PyeU85UfK5I477lA/nLIdQc77j3/8o/IgTOT+kmvz6KOP6hqQbmK4upziiF6g62s1GTj+KZdjc9VVV1Fubi61t7enTPw+/vhjevzxx+nQoUO0YcMG5T6YN5jJSy+9RDk5OeqcJFktt2isXLlS3cxyUwvnnntu8Jc4GdJx3oKc54wZM9SXSs5LXOL58+erL698ueQ8r7322oTPW4i8nrK+IOtbr6+kG2+8kbZu3armyRdZrpsg25AfDOs6glhCZlOFNF84/VxMunM9recnxyFNFuaPQKx7yW697OxsdY12796tlrO6uSZDhw5VYmiKo1wbQc7BRITyrbfeUvt18iMAksfe1Y1n6XH540M7qH/WQPp4139yOTb9+/enG264gQYOHKhu2vr6ej0neeQXWG5CuQHlV1PK7777rp5rIO7Is88+e8KvuxW5scUSkZtObvg//elPapuC3NSff/65mk6GVJ/34MGD1TnJecr5mtaouEdXXnmlcptMS1XcdidEXk8RKhEawXp9JR08eDB4zeTLb7Z1yTI///nP1bTdZyIk8rlEozvX03p+1usVOS/yuGOtJ9dHrNAjR47QRx99pM4rErke8uMgP0h/+MMf6M477wzeXyZSlh8DEdabbroJ4pdmbCw+9ZeTvehJ/VdffETfOn0yffVx/IZY+WUWQfniiy/Ur11hYaGek17kRhVhE+x+TeXGlhtOLA/5QpuuSqQrkwypPG8RNBHiM888U9f0HuLemo3xksSKc0Iin0s0UnU9RYT279+vS4kTuZ7pGdTWGg/xm2UrZt26deuUOIqLb4dcF+lgE+sRpA+bNr74oie53PD9s76h8nhIA6/8QsvN+uMf/1j9cvck0gv8+9//PuiWJIL8Cktb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"},1771:function(e,t,n){t.Z=n.p+"assets/images/plugin-copy-68dc8fc70e8be65daaff414a7cbc647e.png"},9064:function(e,t,n){t.Z=n.p+"assets/images/profile-config-download-4f3bdaf067af7129efa690821e5828d8.png"},1646:function(e,t,n){t.Z=n.p+"assets/images/runtime-path-dn6-0c8d89fdb52c62e110d61dafa416a6cf.png"},7554:function(e,t,n){t.Z=n.p+"assets/images/vmware-acars-config-1feedf94d2d22137197988c7b5c757ac.png"},1881:function(e,t,n){t.Z=n.p+"assets/images/vmware-sharing-4527a421f3ae088481a78297f27ea46b.png"}}]);