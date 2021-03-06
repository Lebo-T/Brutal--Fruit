!function(o,i){"use strict";var s=Object.assign,u=Array.prototype,e=Object.prototype,c=e.toString,n=u.splice,r=u.some,t="undefined"!=typeof Symbol&&Symbol,f="jQuery"in o,a="cash"in o,d="add",l="remove",p="has",h="get",v="set",m="width",y="clientWidth",g="scroll",b="iterator",E="Observer",w=/-([a-z])/g,C=/^--/,S=/[\11\12\14\15\40]+/,x="data-once",O=o.localStorage,j={},z=Math.pow(2,53)-1,A=(L.prototype.init=function(n,t){t=new L(n,t);return H(n)?(n.idblazy||(n.idblazy=t),n.idblazy):t},L);function L(n,t){if(this.name="dblazy",n){if(B(n))return n;var e=n;if(_(n)){if(!(e=vn(xn(t),n)).length)return}else if(Q(n))return this.ready(n);!e.nodeType&&e!==o||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}var N=A.prototype,T=N.init;function I(n){var t=this,e=(t=B(t)?t:T(t)).length;return Q(n)&&(e&&1!==e?t.each(n):n(t[0],0)),t}function M(n){var t="[object "+n+"]";return function(n){return c.call(n)===t}}(T.fn=T.prototype=N).length=0,N.splice=n,t&&(N[t[b]]=u[t[b]]);var W,P,R=(W="length",function(n){return $(n)?void 0:n[W]}),k=(P=R,function(n){n=P(n);return"number"==typeof n&&0<=n&&n<=z});function q(n){return V(n)?Object.keys(n):[]}function B(n){return n instanceof A}function D(n){return!_(n)&&(n&&(Array.isArray(n)||k(n)))}function F(n){return!0===n||!1===n||"[object Boolean]"===c.call(n)}function H(n){return n&&n instanceof Element}var Q=M("Function");function $(n){return null===n}function U(n){return!isNaN(parseFloat(n))&&isFinite(n)}function V(n){var t=typeof n;return"function"==t||"object"==t&&!!n}function _(n){return n&&"string"==typeof n}function J(n){return void 0===n}function G(n){return!!n&&n===n.window}function K(n){return-1!==[9,11].indexOf(!!n&&n.nodeType)}function X(n){return-1!==[1,9,11].indexOf(!!n&&n.nodeType)}function Y(n){return X(n)||G(n)}function Z(n,t,e){if(Q(n)||_(n)||F(n)||U(n))return[];if(D(n)&&!J(n.length)){var r=n.length;if(!r||1===r&&" "===n[0])return[]}if("[object Object]"===c.call(n)){for(var i in n)if(nn(n,i)&&"length"!==i&&"name"!==i&&!1===t.call(e,n[i],i,n))break}else n&&((r=n.length)&&1===r&&!J(n[0])?t.call(e,n[0],0,n):n.forEach(t,e));return n}function nn(n,t){return e.hasOwnProperty.call(n,t)}function tn(n){return D(n)?n:[n]}function en(n,t,e,r){return n[t+"Attribute"](e,r)}function rn(n,t,r,e){var i=this,o=J(r),u=!V(t)&&(o||F(e)),c=_(e)?e:"";if(u){e=n&&n.length?n[0]:n;return o&&(r=""),on(e,t)?en(e,h,t):r}return I.call(n,function(e){if(!X(e))return u?"":i;V(t)?Z(t,function(n,t){en(e,v,c+t,n)}):$(r)?Z(tn(t),function(n){n=c+n;on(e,n)&&en(e,l,n)}):"src"===t?e.src=r:en(e,v,t,r)})}function on(n,t){return X(n)&&en(n,p,t)}function un(n,r,i){return I.call(n,function(n,t){var e;X(n)&&(e=n.classList,Q(r)&&(r=r(en(n,h,"class"),t)),e&&_(r)&&(t=r.trim().split(" "),J(i)?t.map(function(n){e.toggle(n)}):e[i].apply(e,t)))})}function cn(t,n){var e=0;return H(t)&&H(n)?t!==n&&t.contains(n):D(t)?-1!==t.indexOf(n):(_(t)&&Z(tn(n),function(n){-1!==t.indexOf(n)&&e++}),0<e)}function fn(n){return n.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function an(t,n){var e=0;return _(t)&&Z(tn(n),function(n){t.startsWith(n)&&e++}),0<e}function ln(n){return n.replace(/\\s+/g," ").trim()}function sn(n,t){return H(n)&&_(t)?n.closest(t):null}function dn(n,t){return!!H(n)&&(_(t)?n.matches(t):H(t)&&n===t)}function pn(t,n){return!(!t||!t.nodeName)&&r.call(tn(n),function(n){return t.nodeName.toLowerCase()===n.toLowerCase()})}function hn(n,t,e){if(X(n))return _(t)&&an(t,">")&&(cn(t,":scope")||(t=":scope "+t)),J(e)&&_(t)?n.querySelector(t)||[]:function(n,t){var e=tn(n);{var r;_(n)&&(r=(t=xn(t)).querySelector(n),e=$(r)?[]:t.querySelectorAll(n))}return u.slice.call(e)}(t,n);return[]}function vn(n,t){return hn(n,t,1)}function mn(n){return H(n)&&n.currentStyle||!J(i.documentMode)}function yn(){return o.devicePixelRatio||1}function gn(){return o.innerWidth||i.documentElement[y]||o.screen[m]}function bn(n,t,e,r,i,o){return Cn(n,t,e,r,i,o,d)}function En(n,t,e,r,i,o){return Cn(n,t,e,r,i,o,l)}function wn(n){return n.decoded||n.complete}function Cn(n,t,e,c,r,f,a){var i,o=c,l=mn();c=_(e)?(i=cn(t,["touchstart",g,"wheel"]),J(r)&&(r=!l&&{capture:!i,passive:i}),function(n){var t=n.target;if(dn(t,e))o.call(t,n);else for(;t&&t!==this;){if(dn(t,e)){o.call(t,n);break}t=t.parentElement}}):(f=r,r=o,e);return I.call(n,function(i){var o,u;Y(i)&&(o=!1,u=r||!1,V(r)&&(u=s({capture:!1,passive:!0},r),o=u.once||!1),Z(t.trim().split(" "),function(n){f=f||an(n,["blazy.","bio."]);var t=a===d,e=(f?n:n.split(".")[0]).trim(),r=c=c||j[n];Q(c)&&(o&&t&&l&&(t=!(c=function n(){i.removeEventListener(e,n,u),r.apply(this,arguments)})),i[a+"EventListener"](e,c,u)),t?j[n]=c:delete j[n]}))})}function Sn(n){function t(){return setTimeout(n,0,T)}return"loading"!==i.readyState?t():i.addEventListener("DOMContentLoaded",t),this}function xn(n){return X(n=On(n=n||i))&&n.children&&n.children.length||K(n)?n:i}function On(n){var t=f&&n instanceof o.jQuery,e=a&&n instanceof o.cash;return n&&(B(n)||t||e)?n[0]:n}function jn(n){return C.test(n)}function zn(n,t,e){if(H(n)){var r=n[e];if(J(t))return r;for(;r;){if(dn(r,t)||pn(r,t))return r;r=r[e]}}return null}function An(n,t){return zn(n,t,"parentElement")}function Ln(n,t,e){return zn(n,t,e+"ElementSibling")}function Nn(n,t){return Ln(n,t,"previous")}function Tn(e,n,r){return n.filter(function(n){var t=dn(n,e);return t&&r&&r(n),t})}function In(n,t){return vn(xn(t),n)}function Mn(n){return"["+x+'~="'+n+'"]'}function Wn(n,t){var e=t.add,r=t.remove,i=[];on(n,x)&&Z(rn(n,x).trim().split(S),function(n){cn(i,n)||n===r||i.push(n)}),e&&!cn(i,e)&&i.push(e);e=i.join(" ");en(n,""===e?l:v,x,e)}T.isTag=M,T.isArr=D,T.isBool=F,T.isDoc=K,T.isElm=H,T.isFun=Q,T.isEmpty=function(n){if($(n)||J(n)||!1===n)return!0;var t=R(n);return"number"==typeof t&&(D(n)||_(n))?0===t:0===R(q(n))},T.isNull=$,T.isNum=U,T.isObj=V,T.isStr=_,T.isUnd=J,T.isEvt=Y,T.isQsa=X,T.isIo="Intersection"+E in o,T.isMo="Mutation"+E in o,T.isRo="Resize"+E in o,T.isNativeLazy="loading"in HTMLImageElement.prototype,T.isAmd="function"==typeof define&&define.amd,T.isWin=G,T._er=-1,T._ok=1,T.chain=function(n,t){return I.call(n,t)},T.each=Z,T.extend=s,N.extend=function(n,t){return(t=t||!1)?s(n,N):s(N,n)},T.hasProp=nn,T.parse=function(n){try{return 0===n.length||"1"===n?{}:JSON.parse(n)}catch(n){return{}}},T.toArray=tn,T.hasAttr=on,T.attr=rn.bind(T),T.removeAttr=function(n,t,e){return rn(n,t,null,e||"")}.bind(T),T.hasClass=function(e,n){var r,i=0;return X(e)&&_(n)&&(n=n.trim(),r=e.classList,Z(n.trim().split(" "),function(n){var t;r&&r.contains(n)&&i++,0!==i||(t=rn(e,"class"))&&t.match(n)&&i++})),0<i},T.toggleClass=un,T.addClass=function(n,t){return un(n,t,d)},T.removeClass=function(n,t){return un(n,t,l)},T.contains=cn,T.escape=fn,T.startsWith=an,T.trimSpaces=ln,T.closest=sn,T.is=dn,T.equal=pn,T.find=hn,T.findAll=vn,T.remove=function(n){var t;!H(n)||(t=An(n))&&t.removeChild(n)},T.ie=mn,T.pixelRatio=yn,T.windowWidth=gn,T.windowSize=function(){return{width:gn(),height:o.innerHeight||i.documentElement.clientHeight}},T.activeWidth=function(t,n){var e=n.up||!1,r=q(t),i=r[0],o=r[r.length-1],u=n.ww||gn(),n=u*yn(),c=e?u:n;return J(r=r.filter(function(n){return e?parseInt(n,10)<=c:parseInt(n,10)>=c}).map(function(n){return t[n]})[e?"pop":"shift"]())?t[o<=c?o:i]:r},T.toEvent=Cn,T.on=bn,T.off=En,T.one=function(n,t,e,r){return bn(n,t,e,{once:!0},r)},T.trigger=function(n,e,r,i){return I.call(n,function(n){var t;return Y(n)&&(t=J(r)?new Event(e):(t={bubbles:!0,cancelable:!0,detail:r||{}},V(i)&&(t=s(t,i)),new CustomEvent(e,t)),n.dispatchEvent(t)),t})},T.isDecoded=wn,T.ready=Sn.bind(T),T.decode=function(e){return wn(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(n,t){e.onload=function(){n(e)},e.onerror=t()})},T.once=function(n,t,e,r){var i,o=[];return J(e)||(o=Tn(":not("+Mn(i=t)+")",In(e,r),function(n){Wn(n,{add:i})})).length&&Z(o,n),o},T.throttle=function(t,e,r){e=e||50;var i=0;return function(){var n=+new Date;n-i<e||(i=n,t.apply(r,arguments))}},T.resize=function(t,e){return o.onresize=function(n){clearTimeout(e),e=setTimeout(t.bind(n),200)},t},T.template=function(n,t){for(var e in t)nn(t,e)&&(n=n.replace(new RegExp(fn("$"+e),"g"),t[e]));return ln(n)},T.context=xn,T.toElm=On,T.camelCase=function(n){return n.replace(w,function(n,t){return t.toUpperCase()})},T.isVar=jn,T.computeStyle=function(n,t,e){if(H(n)){var r=getComputedStyle(n,null);return J(t)?r:e||jn(t)?r.getPropertyValue(t)||null:r[t]||n.style[t]}},T.rect=function(n){return H(n)?n.getBoundingClientRect():{}},T.empty=function(n){return I.call(n,function(n){if(H(n))for(;n.firstChild;)n.removeChild(n.firstChild)})},T.parent=An,T.next=function(n,t){return Ln(n,t,"next")},T.prev=Nn,T.index=function(t,n){var e=0;if(H(t))for(J(n)||Z(tn(n),function(n){n=sn(t,n);if(H(n))return t=n,!1});!$(t=Nn(t));)e++;return e},T.create=function(n,t,e){var r=i.createElement(n);return(_(t)||V(t))&&(_(t)?r.className=t:rn(r,t)),e&&(e=e.trim(),r.innerHTML=e,"template"===n&&(r=r.content.firstChild||r)),r},T.storage=function(n,t,e){if(O){if(J(t))return O.getItem(n);O.setItem(n,t)}return e||!1},E={chain:function(n){return I.call(this,n)},each:function(n){return Z(this,n)},ready:function(n){return Sn.call(this,n)}},N.extend(E),T.matches=dn,T.forEach=Z,T.bindEvent=bn.bind(T),T.unbindEvent=En.bind(T),T.filter=Tn,T.once.find||(T.once.find=function(n,t){return In(n?Mn(n):"["+x+"]",t)},T.once.filter=function(n,t,e){return Tn(Mn(n),In(t,e))},T.once.remove=function(t,n,e){return Tn(Mn(t),In(n,e),function(n){Wn(n,{remove:t})})},T.once.removeSafely=function(n,t,e){var r=o.jQuery;this.find(n,e).length&&this.remove(n,t,e),f&&r&&r.fn&&Q(r.fn.removeOnce)&&r(t,xn(e)).removeOnce(n)}),"undefined"!=typeof exports?module.exports=T:o.dBlazy=T}(this,this.document);
;
!function(f,n){"use strict";var t=Array.prototype.some,u="remove",c="width",h="height",e="after",r="before",i="begin",o="Top",s="Left",l="Height",a="scroll";function d(t,n,r){var i=this,e=f.isUnd(r),u=f.isObj(n),o=!u&&e;if(o&&f.isStr(n)){var s=t&&t.length?t[0]:t,e=[c,h,"top","right","bottom","left"],s=f.computeStyle(s,n);return-1===e.indexOf(n)?s:parseInt(s,2)}return f.chain(t,function(e){if(!f.isElm(e))return o?"":i;function t(t,n){f.isFun(t)&&(t=t()),(f.contains(n,"-")||f.isVar(n))&&(n=f.camelCase(n)),e.style[n]=f.isStr(t)?t:t+"px"}u?f.each(n,t):f.isNull(r)?f.each(f.toArray(n),function(t){e.style.removeProperty(t)}):f.isStr(n)&&t(r,n)})}function p(t){t=f.rect(t);return{top:(t.top||0)+n.body[a+o],left:(t.left||0)+n.body[a+s]}}function m(t,n){return d(t,c,n)}function g(t,n){return d(t,h,n)}function v(t,n,e){var r,i=0;return f.isElm(t)&&(i=t["offset"+e],n&&(r=f.computeStyle(t),t=function(t){return parseInt(r["margin"+t],2)},i+=e===l?t(o)+t("Bottom"):t(s)+t("Right"))),i}function y(t,n){return v(t,n,"Width")}function A(t,n){return v(t,n,l)}function C(t,n,e){f.isElm(t)&&t["insertAdjacent"+(f.isElm(n)?"Element":"HTML")](e,n)}function b(t,n){C(t,n,e+"end")}function x(t,n){C(t,n,r+i)}function S(t,n){C(t,n,r+"end")}function E(t,n){C(t,n,e+i)}function H(t){return f.chain(t,function(t){return f.isElm(t)&&t.cloneNode(!0)})}var w={css:function(t,n){return d(this,t,n)},hasAttr:function(n){return t.call(this,function(t){return f.hasAttr(t,n)})},attr:function(t,n,e){return f.isNull(n)?this.removeAttr(t,e):f.attr(this,t,n,e)},removeAttr:function(t,n){return f.removeAttr(this,t,n)},hasClass:function(n){return t.call(this,function(t){return f.hasClass(t,n)})},toggleClass:function(t,n){return f.toggleClass(this,t,n)},addClass:function(t){return this.toggleClass(t,"add")},removeClass:function(t){return arguments.length?this.toggleClass(t,u):this.attr("class","")},empty:function(){return f.empty(this)},first:function(t){return f.isUnd(t)?this[0]:t},after:function(t){return b(this[0],t)},before:function(t){return x(this[0],t)},append:function(t){return S(this[0],t)},prepend:function(t){return E(this[0],t)},remove:function(){this.each(f.remove)},closest:function(t){return f.closest(this[0],t)},equal:function(t){return f.equal(this[0],t)},find:function(t,n){return f.find(this[0],t,n)},findAll:function(t){return f.findAll(this[0],t)},clone:function(){return H(this)},computeStyle:function(t){return f.computeStyle(this[0],t)},offset:function(){return p(this[0])},parent:function(t){return f.parent(this[0],t)},prev:function(t){return f.prev(this[0],t)},next:function(t){return f.next(this[0],t)},index:function(t){return f.index(this[0],t)},width:function(t){return m(this[0],t)},height:function(t){return g(this[0],t)},outerWidth:function(t){return y(this[0],t)},outerHeight:function(t){return A(this[0],t)},on:function(t,n,e,r,i){return f.on(this,t,n,e,r,i,"add")},off:function(t,n,e,r,i){return f.off(this,t,n,e,r,i,u)},one:function(t,n,e){return f.one(this,t,n,e)},trigger:function(t,n,e){return f.trigger(this,t,n,e)}};f.fn.extend(w),f.css=d,f.offset=p,f.clone=H,f.after=b,f.before=x,f.append=S,f.prepend=E,f.width=m,f.height=g,f.outerWidth=y,f.outerHeight=A}(dBlazy,this.document);
;
!function(e,n,i){"use strict";e.debounce=function(c,t,e,i){n.debounce(function(){c.call(e,t)},i||201,!0)},e.matchMedia=function(c,t){return!!i.matchMedia&&(e.isUnd(t)&&(t="max"),i.matchMedia("("+t+"-device-width: "+c+")").matches)}}(dBlazy,Drupal,this);
;
!function(o,t,n,l,e){"use strict";var s="data",a=".b-blur",r=".media",i="successClass",u=(c="blazy")+".done",c=function(){},d={};t.blazy={context:e,name:"Drupal.blazy",init:null,instances:[],resizeTick:0,resizeTrigger:!1,blazySettings:n.blazy||{},ioSettings:n.blazyIo||{},options:{},clearCompat:c,clearScript:c,checkResize:c,resizing:c,revalidate:c,isIo:function(){return!0},isBlazy:function(){return!o.isIo&&"Blazy"in l},isFluid:function(t,n){return o.equal(t.parentNode,"picture")&&o.hasAttr(n,"data-ratios")},isLoaded:function(t){return o.hasClass(t,this.options[i])},globals:function(){var t=this,n={isMedia:!0,success:t.clearing.bind(t),error:t.clearing.bind(t),resizing:t.resizing.bind(t),selector:".b-lazy",parent:r,errorClass:"b-error",successClass:"b-loaded"};return o.extend(t.blazySettings,t.ioSettings,n)},extend:function(t){d=o.extend({},d,t)},merge:function(t){var n=this;return n.options=o.extend({},n.globals(),n.options,t||{}),n.options},run:function(t){return new BioMedia(t)},mount:function(t){var n=this;return n.merge(),t&&o.each(d,function(t){o.isFun(t)&&t.call(n)}),o.extend(n,d)},selector:function(t){t=t||"";var n=this.options;return n.selector+t+":not(."+n[i]+")"},clearing:function(t){var n,i;t.bclearing||(n=this,i=o.hasClass(t,"b-responsive")&&o.hasAttr(t,s+"-pfsrc"),o.isFun(o.unloading)&&o.unloading(t),o.trigger(t,u,{options:n.options}),n.clearCompat(t),n.clearScript(t),l.picturefill&&i&&l.picturefill({reevaluate:!0,elements:[t]}),t.bclearing=!0)},windowData:function(){return this.init?this.init.windowData():{}},load:function(n){var i=this;l.setTimeout(function(){var t=o.findAll(n||e,i.selector());t.length&&o.each(t,i.update.bind(i))},100)},update:function(t,n,i){function e(){o.hasAttr(t,"data-b-bg")&&o.isFun(o.bg)?o.bg(t,i||s.windowData()):s.init&&(o.hasClass(t,r.substring(1))||(t=o.find(t,r)||t),s.init.load(t,!0,a))}var s=this,a=s.options,r=a.selector;(n=n||!1)?l.setTimeout(e,100):e()},rebind:function(t,i,e){var n=o.findAll(t,this.options.selector+":not("+a+")"),s=n.length;s||(n=o.findAll(t,"img:not("+a+")")),n.length&&o.each(n,function(t){var n=s?u:"load";o.one(t,n,i,s),e&&e.observe(t)})},pad:function(n,i,t){var e=this,s=o.closest(n,r)||n;setTimeout(function(){var t=Math.round(n.naturalHeight/n.naturalWidth*100,2);e.isFluid(n,s)&&(s.style.paddingBottom=t+"%"),o.isFun(i)&&i.call(e,n,s,t)},t||0)}}}(dBlazy,Drupal,drupalSettings,this,this.document);
;
!function(n,o,e,s){"use strict";var t=s,a="description",i="form-checkbox",l="b-"+a,r="b-"+i,c="b-form",f="form--vanilla-on",m="."+a+", .form-item__"+a,d="."+i,h=".form--slick",u=".form-item",v=".js-expandable",p=".b-hint",g="is-focused",C="is-hovered",y="is-selected",b="addClass",x="removeClass",_="checked",S="change",j="click";function k(e){var s=n(e);n(".details-legend-prefix",s).removeClass("element-invisible"),s[n("."+i+"--vanilla",s).prop(_)?b:x](f),s.on(j,"."+i,function(){var e=n(this);e[e.prop(_)?b:x]("on"),e.hasClass(i+"--vanilla")&&s[e.prop(_)?b:x](f)}),n('select[name$="[style]"]',s).on(S,function(){var e=n(this).val();s.removeClass(function(e,s){return(s.match(/(^|\s)form--style-\S+/g)||[]).join(" ")}),""===e?s.addClass("form--style-off form--style-is-grid"):(s.addClass("form--style-on form--style-"+e),"column"!==e&&"grid"!==e&&"flex"!==e&&"nativegrid"!==e||s.addClass("form--style-is-grid"))}).change(),n('select[name$="[grid]"]',s).on(S,function(){var e=n(this);s[""===e.val()?x:b]("form--grid-on")}).change(),n('select[name$="[responsive_image_style]"]',s).on(S,function(){var e=n(this);s[""===e.val()?x:b]("form--responsive-image-on")}).change(),n('select[name$="[media_switch]"]',s).on(S,function(){var e=n(this).val();s.removeClass(function(e,s){return(s.match(/(^|\s)form--media-switch-\S+/g)||[]).join(" ")}),s[""===e?x:b]("form--media-switch-"+e),s[""===e||"content"===e||"media"===e||"rendered"===e?x:b]("form--media-switch-lightbox")}).change(),s.on("mouseenter touchstart",p,function(){n(this).closest(u).addClass(C)}),s.on("mouseleave touchend",p,function(){n(this).closest(u).removeClass(C)}),s.on(j,p,function(){n(".form-item."+y,s).removeClass(y),n(this).parent().toggleClass(y)}),s.on(j,".description, .form-item__description",function(){n(this).closest("."+y).removeClass(y)}),s.on("focus",v,function(){n(this).parent().addClass(g)}),s.on("blur",v,function(){n(this).parent().removeClass(g)})}function w(e){e=n(e);e.hasClass(a)||e.addClass(a),e.siblings(p).length||e.closest(u).append('<span class="b-hint">?</span>')}function $(e){e=n(e);e.next(".field-suffix").length||e.after('<span class="field-suffix"></span>')}e.behaviors.blazyAdmin={attach:function(e){t=o.context(e),o.once(w,l,m,t),o.once($,r,d,t),o.once(k,c,h,t)},detach:function(e,s,n){"unload"===n&&(o.once.removeSafely(l,m,t),o.once.removeSafely(r,d,t),o.once.removeSafely(c,h,t))}}}(jQuery,dBlazy,Drupal,this.document);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;

  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }

  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }

  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }

    if (typeof b === 'undefined') {
      return a;
    }

    return a && b;
  }

  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;

      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };

      for (var i = 0; i < il; i++) {
        _loop(i);
      }

      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };

  states.Dependent = function (args) {
    var _this = this;

    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };

  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;

      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];

        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }

        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];

      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }

      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);

      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;

      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;

        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);

            if (constraint && (hasXor || result)) {
              return hasXor;
            }

            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));

            if (result === false) {
              return false;
            }
          }
        }
      }

      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }

      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;

      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };

      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };

  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;

      var trigger = states.Trigger.states[this.state];

      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }

      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);

        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }

        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }

        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };

  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;

    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);

        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).prop('checked', e.value);
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
