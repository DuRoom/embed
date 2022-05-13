(()=>{var e={763:e=>{!function(t){if("undefined"!=typeof window){var n=!0,o="",r=0,i="",a=null,c="",u=!1,s={resize:1,click:1},d=128,l=!0,m=1,f="bodyOffset",p=f,h=!0,g="",v={},y=32,w=null,b=!1,T=!1,S="[iFrameSizer]",E=S.length,O="",M={max:1,min:1,bodyScroll:1,documentElementScroll:1},I="child",N=window.parent,x="*",A=0,C=!1,k=null,z=16,P=1,R="scroll",F=R,L=window,j=function(){ie("onMessage function not defined")},D=function(){},q=function(){},H={height:function(){return ie("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return ie("Custom width calculation function not defined"),document.body.scrollWidth}},W={},B=!1;try{var J=Object.create({},{passive:{get:function(){B=!0}}});window.addEventListener("test",ee,J),window.removeEventListener("test",ee,J)}catch(e){}var U,_,V,X,Y,K,Q,$={bodyOffset:function(){return document.body.offsetHeight+he("marginTop")+he("marginBottom")},offset:function(){return $.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return H.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,ve($))},min:function(){return Math.min.apply(null,ve($))},grow:function(){return $.max()},lowestElement:function(){return Math.max($.bodyOffset()||$.documentElementOffset(),ge("bottom",we()))},taggedElement:function(){return ye("bottom","data-iframe-height")}},G={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return H.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(G.bodyScroll(),G.documentElementScroll())},max:function(){return Math.max.apply(null,ve(G))},min:function(){return Math.min.apply(null,ve(G))},rightMostElement:function(){return ge("right",we())},taggedElement:function(){return ye("right","data-iframe-width")}},Z=(U=be,Y=null,K=0,Q=function(){K=Date.now(),Y=null,X=U.apply(_,V),Y||(_=V=null)},function(){var e=Date.now();K||(K=e);var t=z-(e-K);return _=this,V=arguments,t<=0||t>z?(Y&&(clearTimeout(Y),Y=null),K=e,X=U.apply(_,V),Y||(_=V=null)):Y||(Y=setTimeout(Q,t)),X});te(window,"message",(function(s){var m,f={init:function(){var e,m,f;g=s.data,N=s.source,function(){function e(e){return"true"===e}var a=g.substr(E).split(":");O=a[0],r=t!==a[1]?Number(a[1]):r,u=t!==a[2]?e(a[2]):u,b=t!==a[3]?e(a[3]):b,y=t!==a[4]?Number(a[4]):y,n=t!==a[6]?e(a[6]):n,i=a[7],p=t!==a[8]?a[8]:p,o=a[9],c=a[10],A=t!==a[11]?Number(a[11]):A,v.enable=t!==a[12]&&e(a[12]),I=t!==a[13]?a[13]:I,F=t!==a[14]?a[14]:F,T=t!==a[15]?Boolean(a[15]):T}(),re("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;re("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ae,e),j="onMessage"in e?e.onMessage:j,D="onReady"in e?e.onReady:D,x="targetOrigin"in e?e.targetOrigin:x,p="heightCalculationMethod"in e?e.heightCalculationMethod:p,F="widthCalculationMethod"in e?e.widthCalculationMethod:F}function t(e,t){return"function"==typeof e&&(re("Setup custom "+t+"CalcMethod"),H[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),p=t(p,"height"),F=t(F,"width")),re("TargetOrigin for parent set to: "+x)}(),t===i&&(i=r+"px"),ce("margin",(m="margin",-1!==(f=i).indexOf("-")&&(ie("Negative CSS value ignored for "+m),f=""),f)),ce("background",o),ce("padding",c),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),le(),me(),document.documentElement.style.height="",document.body.style.height="",re('HTML & body height set to "auto"'),re("Enable public methods"),L.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,fe()):!1===e&&!0===n&&(n=!1,se("remove"),null!==a&&a.disconnect(),clearInterval(w)),Me(0,0,"autoResize",JSON.stringify(n)),n},close:function(){Me(0,0,"close")},getId:function(){return O},getPageInfo:function(e){"function"==typeof e?(q=e,Me(0,0,"pageInfo")):(q=function(){},Me(0,0,"pageInfoStop"))},moveToAnchor:function(e){v.findTarget(e)},reset:function(){Oe("parentIFrame.reset")},scrollTo:function(e,t){Me(t,e,"scrollTo")},scrollToOffset:function(e,t){Me(t,e,"scrollToOffset")},sendMessage:function(e,t){Me(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){p=e,le()},setWidthCalculationMethod:function(e){F=e,me()},setTargetOrigin:function(e){re("Set targetOrigin: "+e),x=e},size:function(e,t){Te("size","parentIFrame.size("+(e||"")+(t?","+t:"")+")",e,t)}},function(){function e(e){Me(0,0,e.type,e.screenY+":"+e.screenX)}function t(t,n){re("Add event listener: "+n),te(window.document,t,e)}!0===T&&(t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave"))}(),fe(),v=function(){function e(){return{x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}}function n(t){var n=t.getBoundingClientRect(),o=e();return{x:parseInt(n.left,10)+parseInt(o.x,10),y:parseInt(n.top,10)+parseInt(o.y,10)}}function o(e){function o(e){var t=n(e);re("Moving to in page link (#"+r+") at x: "+t.x+" y: "+t.y),Me(t.y,t.x,"scrollToOffset")}var r=e.split("#")[1]||e,i=decodeURIComponent(r),a=document.getElementById(i)||document.getElementsByName(i)[0];t!==a?o(a):(re("In page link (#"+r+") not found in iFrame, so sending to parent"),Me(0,0,"inPageLink","#"+r))}function r(){var e=window.location.hash,t=window.location.href;""!==e&&"#"!==e&&o(t)}function i(){function e(e){function t(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&te(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){te(window,"hashchange",r)}function c(){setTimeout(r,d)}function u(){Array.prototype.forEach&&document.querySelectorAll?(re("Setting up location.hash handlers"),i(),a(),c()):ie("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return v.enable?u():re("In page linking not enabled"),{findTarget:o}}(),Te("init","Init message from host page"),D(),l=!1,setTimeout((function(){h=!1}),d)},reset:function(){h?re("Page reset ignored by init"):(re("Page size reset by host page"),Ee("resetPage"))},resize:function(){Te("resizeParent","Parent window requested size check")},moveToAnchor:function(){v.findTarget(C())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=C();re("PageInfoFromParent called from parent: "+e),q(JSON.parse(e)),re(" --")},message:function(){var e=C();re("onMessage called from parent: "+e),j(JSON.parse(e)),re(" --")}};function M(){return s.data.split("]")[1].split(":")[0]}function C(){return s.data.substr(s.data.indexOf(":")+1)}function k(){return s.data.split(":")[2]in{true:1,false:1}}S===(""+s.data).substr(0,E)&&(!1===l?(m=M())in f?f[m]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||k()||ie("Unexpected message ("+s.data+")"):k()?f.init():re('Ignored message of type "'+M()+'". Received before initialization.'))})),te(window,"readystatechange",Ie),Ie()}function ee(){}function te(e,t,n,o){e.addEventListener(t,n,!!B&&(o||{}))}function ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe(e){return S+"["+O+"] "+e}function re(e){b&&"object"==typeof window.console&&console.log(oe(e))}function ie(e){"object"==typeof window.console&&console.warn(oe(e))}function ae(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],ie("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function ce(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,re("Body "+e+' set to "'+n+'"'))}function ue(e){var t={add:function(t){function n(){Te(e.eventName,e.eventType)}W[t]=n,te(window,t,n,{passive:!0})},remove:function(e){var t,n,o=W[e];delete W[e],t=e,n=o,window.removeEventListener(t,n,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),re(ne(e.method)+" event listener: "+e.eventType)}function se(e){ue({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),ue({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),ue({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),ue({method:e,eventType:"Input",eventName:"input"}),ue({method:e,eventType:"Mouse Up",eventName:"mouseup"}),ue({method:e,eventType:"Mouse Down",eventName:"mousedown"}),ue({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),ue({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),ue({method:e,eventType:"Touch Start",eventName:"touchstart"}),ue({method:e,eventType:"Touch End",eventName:"touchend"}),ue({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),ue({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),ue({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),ue({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===I&&ue({method:e,eventType:"IFrame Resized",eventName:"resize"})}function de(e,t,n,o){return t!==e&&(e in n||(ie(e+" is not a valid option for "+o+"CalculationMethod."),e=t),re(o+' calculation method set to "'+e+'"')),e}function le(){p=de(p,f,$,"height")}function me(){F=de(F,R,G,"width")}function fe(){var e;!0===n?(se("add"),e=0>y,window.MutationObserver||window.WebKitMutationObserver?e?pe():a=function(){function e(e){function t(e){!1===e.complete&&(re("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",r,!1),a.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function t(e){re("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",r,!1),function(e){a.splice(a.indexOf(e),1)}(e)}function n(e,n,o){t(e.target),Te(n,o+": "+e.target.src)}function o(e){n(e,"imageLoad","Image loaded")}function r(e){n(e,"imageLoadFailed","Image load failed")}function i(t){Te("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var a=[],c=window.MutationObserver||window.WebKitMutationObserver,u=function(){var e=document.querySelector("body");return u=new c(i),re("Create body MutationObserver"),u.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),u}();return{disconnect:function(){"disconnect"in u&&(re("Disconnect body MutationObserver"),u.disconnect(),a.forEach(t))}}}():(re("MutationObserver not supported in this browser!"),pe())):re("Auto Resize disabled")}function pe(){0!==y&&(re("setInterval: "+y+"ms"),w=setInterval((function(){Te("interval","setInterval: "+y)}),Math.abs(y)))}function he(e,t){var n=0;return t=t||document.body,n=null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0,parseInt(n,10)}function ge(e,t){for(var n=t.length,o=0,r=0,i=ne(e),a=Date.now(),c=0;c<n;c++)(o=t[c].getBoundingClientRect()[e]+he("margin"+i,t[c]))>r&&(r=o);return a=Date.now()-a,re("Parsed "+n+" HTML elements"),re("Element position calculated in "+a+"ms"),function(e){e>z/2&&re("Event throttle increased to "+(z=2*e)+"ms")}(a),r}function ve(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function ye(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(ie("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),ge(e,n)}function we(){return document.querySelectorAll("body *")}function be(e,n,o,r){var i,a;!function(){function e(e,t){return!(Math.abs(e-t)<=A)}return i=t!==o?o:$[p](),a=t!==r?r:G[F](),e(m,i)||u&&e(P,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(p in M||u&&F in M)?Oe(n):e in{interval:1}||re("No change in size detected"):(Se(),Me(m=i,P=a,e))}function Te(e,t,n,o){C&&e in s?re("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||re("Trigger event: "+t),"init"===e?be(e,t,n,o):Z(e,t,n,o))}function Se(){C||(C=!0,re("Trigger event lock on")),clearTimeout(k),k=setTimeout((function(){C=!1,re("Trigger event lock off"),re("--")}),d)}function Ee(e){m=$[p](),P=G[F](),Me(m,P,e)}function Oe(e){var t=p;p=f,re("Reset trigger event: "+e),Se(),Ee("reset"),p=t}function Me(e,n,o,r,i){var a;t===i?i=x:re("Message targetOrigin: "+i),re("Sending message to host page ("+(a=O+":"+e+":"+n+":"+o+(t!==r?":"+r:""))+")"),N.postMessage(S+a,i)}function Ie(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n(763);const e=duroom.core.compat["common/extend"],t=duroom.core.compat["forum/app"];var r=n.n(t);const i=duroom.core.compat["common/utils/Stream"];var a=n.n(i);const c=duroom.core.compat["forum/ForumApplication"];var u=n.n(c);const s=duroom.core.compat["forum/components/Composer"];var d=n.n(s);const l=duroom.core.compat["forum/components/PostStream"];var f=n.n(l);const p=duroom.core.compat["common/components/ModalManager"];var h=n.n(p);const g=duroom.core.compat["forum/components/PostMeta"];var v=n.n(g);const y=duroom.core.compat["forum/components/DiscussionPage"];var w=n.n(y);(0,e.extend)(u().prototype,"mount",(function(){m.route.param("hideFirstPost")&&(0,e.extend)(f().prototype,"view",(function(e){1===e.children[0].attrs["data-number"]&&e.children.splice(0,1)}))})),(0,e.override)(m.route.Link,"view",(function(e,t){return t.attrs.href=t.attrs.href.replace("/embed","/d"),t.attrs.target="_blank",e(t)})),(0,e.override)(v().prototype,"getPermalink",(function(e,t){return e(t).replace("/embed","/d")})),r().pageInfo=a()({});var b=function(){var e=r().pageInfo();this.$().css("top",Math.max(0,e.scrollTop-e.offsetTop))};(0,e.extend)(h().prototype,"show",b),(0,e.extend)(d().prototype,"show",b),window.iFrameResizer={readyCallback:function(){window.parentIFrame.getPageInfo(r().pageInfo)}},(0,e.extend)(f().prototype,"goToNumber",(function(e,t){if("reply"===t&&"parentIFrame"in window&&r().composer.isFullScreen()){var n=this.$(".PostStream-item:last").offset().top;window.parentIFrame.scrollToOffset(0,n)}})),(0,e.extend)(w().prototype,"sidebarItems",(function(e){e.remove("scrubber");var t=this.discussion.replyCount();e.add("replies",m("h3",null,m("a",{route:r().route.discussion(this.discussion).replace("/embed","/d")},t," comment",1==t?"":"s")),100);var n=e.get("controls").attrs;n.className=n.className.replace("App-primaryControl","")})),r().routes.discussion={path:"/embed/:id",component:w()},r().routes["discussion.near"]={path:"/embed/:id/:near",component:w()}})(),module.exports=o})();
//# sourceMappingURL=forum.js.map