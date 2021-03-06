!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,customClass:"",target:"body",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onBeforeOpen:null,onOpen:null,onClose:null,useRejections:!0},t=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},n=t(["container","shown","iosfix","modal","overlay","fade","show","hide","noanimation","close","title","content","buttonswrapper","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-left","top-right","center","center-left","center-right","bottom","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),o=t(["success","warning","info","question","error"]),r=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var r=parseInt(e.substr(2*o,2),16);n+=("00"+(r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16))).substr(r.length)}return n},i=function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t},a=function(e){console.warn("SweetAlert2: "+e)},l=function(e){console.error("SweetAlert2: "+e)},s={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},u=function(e){var t=d();t&&t.parentNode.removeChild(t);{if("undefined"!=typeof document){var o=document.createElement("div");o.className=n.container,o.innerHTML=c,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(o);var r=p(),i=L(r,n.input),a=L(r,n.file),s=r.querySelector("."+n.range+" input"),u=r.querySelector("."+n.range+" output"),f=L(r,n.select),m=r.querySelector("."+n.checkbox+" input"),v=L(r,n.textarea);return i.oninput=function(){Y.resetValidationError()},a.onchange=function(){Y.resetValidationError()},s.oninput=function(){Y.resetValidationError(),u.value=s.value},s.onchange=function(){Y.resetValidationError(),s.previousSibling.value=s.value},f.onchange=function(){Y.resetValidationError()},m.onchange=function(){Y.resetValidationError()},v.oninput=function(){Y.resetValidationError()},r}l("SweetAlert2 requires document to initialize")}},c=('\n <div role="dialog" aria-modal="true" aria-labelledby="'+n.title+'" aria-describedby="'+n.content+'" class="'+n.modal+'" tabindex="-1">\n   <ul class="'+n.progresssteps+'"></ul>\n   <div class="'+n.icon+" "+o.error+'">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="'+n.icon+" "+o.question+'">?</div>\n   <div class="'+n.icon+" "+o.warning+'">!</div>\n   <div class="'+n.icon+" "+o.info+'">i</div>\n   <div class="'+n.icon+" "+o.success+'">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="'+n.image+'" />\n   <h2 class="'+n.title+'" id="'+n.title+'"></h2>\n   <div id="'+n.content+'" class="'+n.content+'"></div>\n   <input class="'+n.input+'" />\n   <input type="file" class="'+n.file+'" />\n   <div class="'+n.range+'">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="'+n.select+'"></select>\n   <div class="'+n.radio+'"></div>\n   <label for="'+n.checkbox+'" class="'+n.checkbox+'">\n     <input type="checkbox" />\n   </label>\n   <textarea class="'+n.textarea+'"></textarea>\n   <div class="'+n.validationerror+'" id="'+n.validationerror+'"></div>\n   <div class="'+n.buttonswrapper+'">\n     <button type="button" class="'+n.confirm+'">OK</button>\n     <button type="button" class="'+n.cancel+'">Cancel</button>\n   </div>\n   <button type="button" class="'+n.close+'">×</button>\n </div>\n').replace(/(^|\n)\s*/g,""),d=function(){return document.body.querySelector("."+n.container)},p=function(){return d()?d().querySelector("."+n.modal):null},f=function(){return p().querySelectorAll("."+n.icon)},m=function(e){return d()?d().querySelector("."+e):null},v=function(){return m(n.title)},g=function(){return m(n.content)},b=function(){return m(n.image)},h=function(){return m(n.progresssteps)},y=function(){return m(n.validationerror)},w=function(){return m(n.confirm)},C=function(){return m(n.cancel)},k=function(){return m(n.buttonswrapper)},x=function(){return m(n.close)},S=function(){var e=Array.from(p().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex")),e>t?1:e<t?-1:0}),t=Array.prototype.slice.call(p().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return i(e.concat(t))},A=function(e,t){return!!e.classList&&e.classList.contains(t)},B=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},E=function(e,t){e&&t&&t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.add(t)})},P=function(e,t){e&&t&&t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.remove(t)})},L=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(A(e.childNodes[n],t))return e.childNodes[n]},T=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},q=function(e){e.style.opacity="",e.style.display="none"},V=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},O=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},M=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},N=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),j=function(){if(window.onkeydown=s.previousWindowKeyDown,s.previousActiveElement&&s.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;s.previousActiveElement.focus(),e&&t&&window.scrollTo(e,t)}},H=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),U=R({},e),W=[];"undefined"==typeof Promise&&l("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");var D=function(e){("string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(a('Target parameter is not valid, defaulting to "body"'),e.target="body");var t=void 0,r=p(),i="string"==typeof e.target?document.querySelector(e.target):e.target;t=r&&i&&r.parentNode!==i.parentNode?u(e):r||u(e);for(var s in e)Y.isValidParameter(s)||a('Unknown parameter "'+s+'"');t.style.width="number"==typeof e.width?e.width+"px":e.width,t.style.padding=e.padding+"px",t.style.background=e.background;for(var c=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),m=0;m<c.length;m++)c[m].style.background=e.background;var y=d(),S=v(),A=g(),B=k(),L=w(),O=C(),N=x();if(e.titleText?S.innerText=e.titleText:S.innerHTML=e.title.split("\n").join("<br />"),e.text||e.html){if("object"===I(e.html))if(A.innerHTML="",0 in e.html)for(var j=0;j in e.html;j++)A.appendChild(e.html[j].cloneNode(!0));else A.appendChild(e.html.cloneNode(!0));else e.html?A.innerHTML=e.html:e.text&&(A.textContent=e.text);T(A)}else q(A);if(e.position in n&&E(y,n[e.position]),e.grow&&"string"==typeof e.grow){var H="grow-"+e.grow;H in n&&E(y,n[H])}e.showCloseButton?(N.setAttribute("aria-label",e.closeButtonAriaLabel),T(N)):q(N),t.className=n.modal,e.customClass&&E(t,e.customClass);var R=h(),U=parseInt(null===e.currentProgressStep?Y.getQueueStep():e.currentProgressStep,10);e.progressSteps.length?(T(R),V(R),U>=e.progressSteps.length&&a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,o){var r=document.createElement("li");if(E(r,n.progresscircle),r.innerHTML=t,o===U&&E(r,n.activeprogressstep),R.appendChild(r),o!==e.progressSteps.length-1){var i=document.createElement("li");E(i,n.progressline),i.style.width=e.progressStepsDistance,R.appendChild(i)}})):q(R);for(var W=f(),D=0;D<W.length;D++)q(W[D]);if(e.type){var K=!1;for(var z in o)if(e.type===z){K=!0;break}if(!K)return l("Unknown alert type: "+e.type),!1;var _=t.querySelector("."+n.icon+"."+o[e.type]);if(T(_),e.animation)switch(e.type){case"success":E(_,"swal2-animate-success-icon"),E(_.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),E(_.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":E(_,"swal2-animate-error-icon"),E(_.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var Z=b();e.imageUrl?(Z.setAttribute("src",e.imageUrl),Z.setAttribute("alt",e.imageAlt),T(Z),e.imageWidth?Z.setAttribute("width",e.imageWidth):Z.removeAttribute("width"),e.imageHeight?Z.setAttribute("height",e.imageHeight):Z.removeAttribute("height"),Z.className=n.image,e.imageClass&&E(Z,e.imageClass)):q(Z),e.showCancelButton?O.style.display="inline-block":q(O),e.showConfirmButton?M(L,"display"):q(L),e.showConfirmButton||e.showCancelButton?T(B):q(B),L.innerHTML=e.confirmButtonText,O.innerHTML=e.cancelButtonText,L.setAttribute("aria-label",e.confirmButtonAriaLabel),O.setAttribute("aria-label",e.cancelButtonAriaLabel),e.buttonsStyling&&(L.style.backgroundColor=e.confirmButtonColor,O.style.backgroundColor=e.cancelButtonColor),L.className=n.confirm,E(L,e.confirmButtonClass),O.className=n.cancel,E(O,e.cancelButtonClass),e.buttonsStyling?(E(L,n.styled),E(O,n.styled)):(P(L,n.styled),P(O,n.styled),L.style.backgroundColor=L.style.borderLeftColor=L.style.borderRightColor="",O.style.backgroundColor=O.style.borderLeftColor=O.style.borderRightColor=""),!0===e.animation?P(t,n.noanimation):E(t,n.noanimation),e.showLoaderOnConfirm&&!e.preConfirm&&a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")},K=function(e,t,o){var r=d(),i=p();null!==t&&"function"==typeof t&&t(i),e?(E(i,n.show),E(r,n.fade),P(i,n.hide)):P(i,n.fade),T(i),r.style.overflowY="hidden",N&&!A(i,n.noanimation)?i.addEventListener(N,function e(){i.removeEventListener(N,e),r.style.overflowY="auto"}):r.style.overflowY="auto",E(document.documentElement,n.shown),E(document.body,n.shown),E(r,n.shown),z(),Z(),s.previousActiveElement=document.activeElement,null!==o&&"function"==typeof o&&setTimeout(function(){o(i)})},z=function(){null===s.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(s.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=H()+"px")},_=function(){null!==s.previousBodyPadding&&(document.body.style.paddingRight=s.previousBodyPadding,s.previousBodyPadding=null)},Z=function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!A(document.body,n.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",E(document.body,n.iosfix)}},Q=function(){if(A(document.body,n.iosfix)){var e=parseInt(document.body.style.top,10);P(document.body,n.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Y=function e(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];if(void 0===o[0])return l("SweetAlert2 expects at least 1 attribute!"),!1;var a=R({},U);switch(I(o[0])){case"string":a.title=o[0],a.html=o[1],a.type=o[2];break;case"object":R(a,o[0]),a.extraParams=o[0].extraParams,"email"===a.input&&null===a.inputValidator&&(a.inputValidator=function(e){return new Promise(function(t,n){/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)?t():n("Invalid email address")})}),"url"===a.input&&null===a.inputValidator&&(a.inputValidator=function(e){return new Promise(function(t,n){/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?t():n("Invalid URL")})});break;default:return l('Unexpected type of argument! Expected "string" or "object", got '+I(o[0])),!1}D(a);var u=d(),c=p();return new Promise(function(t,o){a.timer&&(c.timeout=setTimeout(function(){e.closeModal(a.onClose),a.useRejections?o("timer"):t({dismiss:"timer"})},a.timer));var i=function(e){if(!(e=e||a.input))return null;switch(e){case"select":case"textarea":case"file":return L(c,n[e]);case"checkbox":return c.querySelector("."+n.checkbox+" input");case"radio":return c.querySelector("."+n.radio+" input:checked")||c.querySelector("."+n.radio+" input:first-child");case"range":return c.querySelector("."+n.range+" input");default:return L(c,n.input)}},p=function(){var e=i();if(!e)return null;switch(a.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return a.inputAutoTrim?e.value.trim():e.value}};a.input&&setTimeout(function(){var e=i();e&&B(e)},0);for(var f=function(n){a.showLoaderOnConfirm&&e.showLoading(),a.preConfirm?a.preConfirm(n,a.extraParams).then(function(o){e.closeModal(a.onClose),t(o||n)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):(e.closeModal(a.onClose),t(a.useRejections?n:{value:n}))},m=function(n){var i=n||window.event,l=i.target||i.srcElement,s=w(),u=C(),c=s&&(s===l||s.contains(l)),d=u&&(u===l||u.contains(l));switch(i.type){case"mouseover":case"mouseup":a.buttonsStyling&&(c?s.style.backgroundColor=r(a.confirmButtonColor,-.1):d&&(u.style.backgroundColor=r(a.cancelButtonColor,-.1)));break;case"mouseout":a.buttonsStyling&&(c?s.style.backgroundColor=a.confirmButtonColor:d&&(u.style.backgroundColor=a.cancelButtonColor));break;case"mousedown":a.buttonsStyling&&(c?s.style.backgroundColor=r(a.confirmButtonColor,-.2):d&&(u.style.backgroundColor=r(a.cancelButtonColor,-.2)));break;case"click":if(c&&e.isVisible())if(e.disableButtons(),a.input){var m=p();a.inputValidator?(e.disableInput(),a.inputValidator(m,a.extraParams).then(function(){e.enableButtons(),e.enableInput(),f(m)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)})):f(m)}else f(!0);else d&&e.isVisible()&&(e.disableButtons(),e.closeModal(a.onClose),a.useRejections?o("cancel"):t({dismiss:"cancel"}))}},A=c.querySelectorAll("button"),V=0;V<A.length;V++)A[V].onclick=m,A[V].onmouseover=m,A[V].onmouseout=m,A[V].onmousedown=m;x().onclick=function(){e.closeModal(a.onClose),a.useRejections?o("close"):t({dismiss:"close"})},u.onclick=function(n){n.target===u&&a.allowOutsideClick&&(e.closeModal(a.onClose),a.useRejections?o("overlay"):t({dismiss:"overlay"}))};var M=k(),N=w(),j=C();a.reverseButtons?N.parentNode.insertBefore(j,N):N.parentNode.insertBefore(N,j);var H=function(e,t){for(var n=S(a.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(O(r))return r.focus()}},R=function(n){var r=n||window.event;if("Enter"===r.key)r.target===i()&&(e.clickConfirm(),r.preventDefault());else if("Tab"===r.key){for(var l=r.target||r.srcElement,s=S(a.focusCancel),u=-1,c=0;c<s.length;c++)if(l===s[c]){u=c;break}r.shiftKey?H(u,-1):H(u,1),r.stopPropagation(),r.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","Arrowdown"].indexOf(r.key)?document.activeElement===N&&O(j)?j.focus():document.activeElement===j&&O(N)&&N.focus():"Escape"===r.key&&!0===a.allowEscapeKey&&(e.closeModal(a.onClose),a.useRejections?o("esc"):t({dismiss:"esc"}))};window.onkeydown&&window.onkeydown.toString()===R.toString()||(s.previousWindowKeyDown=window.onkeydown,window.onkeydown=R),a.buttonsStyling&&(N.style.borderLeftColor=a.confirmButtonColor,N.style.borderRightColor=a.confirmButtonColor),e.hideLoading=e.disableLoading=function(){a.showConfirmButton||(q(N),a.showCancelButton||q(k())),P(M,n.loading),P(c,n.loading),c.removeAttribute("aria-busy"),N.disabled=!1,j.disabled=!1},e.getTitle=function(){return v()},e.getContent=function(){return g()},e.getInput=function(){return i()},e.getImage=function(){return b()},e.getButtonsWrapper=function(){return k()},e.getConfirmButton=function(){return w()},e.getCancelButton=function(){return C()},e.enableButtons=function(){N.disabled=!1,j.disabled=!1},e.disableButtons=function(){N.disabled=!0,j.disabled=!0},e.enableConfirmButton=function(){N.disabled=!1},e.disableConfirmButton=function(){N.disabled=!0},e.enableInput=function(){var e=i();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=i();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},e.showValidationError=function(e){var t=y();t.innerHTML=e,T(t);var o=i();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",n.validationerror),B(o),E(o,n.inputerror))},e.resetValidationError=function(){var e=y();q(e);var t=i();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),P(t,n.inputerror))},e.getProgressSteps=function(){return a.progressSteps},e.setProgressSteps=function(e){a.progressSteps=e,D(a)},e.showProgressSteps=function(){T(h())},e.hideProgressSteps=function(){q(h())},e.enableButtons(),e.hideLoading(),e.resetValidationError();for(var U=["input","file","range","select","radio","checkbox","textarea"],W=void 0,z=0;z<U.length;z++){var _=n[U[z]],Z=L(c,_);if(W=i(U[z])){for(var Q in W.attributes)if(W.attributes.hasOwnProperty(Q)){var Y=W.attributes[Q].name;"type"!==Y&&"value"!==Y&&W.removeAttribute(Y)}for(var $ in a.inputAttributes)W.setAttribute($,a.inputAttributes[$])}Z.className=_,a.inputClass&&E(Z,a.inputClass),q(Z)}var J=void 0;switch(a.input){case"text":case"email":case"password":case"number":case"tel":case"url":(W=L(c,n.input)).value=a.inputValue,W.placeholder=a.inputPlaceholder,W.type=a.input,T(W);break;case"file":(W=L(c,n.file)).placeholder=a.inputPlaceholder,W.type=a.input,T(W);break;case"range":var X=L(c,n.range),F=X.querySelector("input"),G=X.querySelector("output");F.value=a.inputValue,F.type=a.input,G.value=a.inputValue,T(X);break;case"select":var ee=L(c,n.select);if(ee.innerHTML="",a.inputPlaceholder){var te=document.createElement("option");te.innerHTML=a.inputPlaceholder,te.value="",te.disabled=!0,te.selected=!0,ee.appendChild(te)}J=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],a.inputValue.toString()===t&&(n.selected=!0),ee.appendChild(n)}T(ee),ee.focus()};break;case"radio":var ne=L(c,n.radio);ne.innerHTML="",J=function(e){for(var t in e){var o=document.createElement("input"),r=document.createElement("label"),i=document.createElement("span");o.type="radio",o.name=n.radio,o.value=t,a.inputValue.toString()===t&&(o.checked=!0),i.innerHTML=e[t],r.appendChild(o),r.appendChild(i),r.for=o.id,ne.appendChild(r)}T(ne);var l=ne.querySelectorAll("input");l.length&&l[0].focus()};break;case"checkbox":var oe=L(c,n.checkbox),re=i("checkbox");re.type="checkbox",re.value=1,re.id=n.checkbox,re.checked=Boolean(a.inputValue);var ie=oe.getElementsByTagName("span");ie.length&&oe.removeChild(ie[0]),(ie=document.createElement("span")).innerHTML=a.inputPlaceholder,oe.appendChild(ie),T(oe);break;case"textarea":var ae=L(c,n.textarea);ae.value=a.inputValue,ae.placeholder=a.inputPlaceholder,T(ae);break;case null:break;default:l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+a.input+'"')}"select"!==a.input&&"radio"!==a.input||(a.inputOptions instanceof Promise?(e.showLoading(),a.inputOptions.then(function(t){e.hideLoading(),J(t)})):"object"===I(a.inputOptions)?J(a.inputOptions):l("Unexpected type of inputOptions! Expected object or Promise, got "+I(a.inputOptions))),K(a.animation,a.onBeforeOpen,a.onOpen),a.allowEnterKey?a.focusCancel&&O(j)?j.focus():a.focusConfirm&&O(N)?N.focus():H(-1,1):document.activeElement&&document.activeElement.blur(),d().scrollTop=0})};return Y.isVisible=function(){return!!p()},Y.queue=function(e){W=e;var t=function(){W=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function r(i,a){i<W.length?(document.body.setAttribute("data-swal2-queue-step",i),Y(W[i]).then(function(e){n.push(e),r(i+1,a)},function(e){t(),o(e)})):(t(),e(n))}(0)})},Y.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},Y.insertQueueStep=function(e,t){return t&&t<W.length?W.splice(t,0,e):W.push(e)},Y.deleteQueueStep=function(e){void 0!==W[e]&&W.splice(e,1)},Y.close=Y.closeModal=function(e){var t=d(),o=p();if(o){P(o,n.show),E(o,n.hide),clearTimeout(o.timeout),j();var r=function(){t.parentNode&&t.parentNode.removeChild(t),P(document.documentElement,n.shown),P(document.body,n.shown),_(),Q()};N&&!A(o,n.noanimation)?o.addEventListener(N,function e(){o.removeEventListener(N,e),A(o,n.hide)&&r()}):r(),null!==e&&"function"==typeof e&&setTimeout(function(){e(o)})}},Y.clickConfirm=function(){return w().click()},Y.clickCancel=function(){return C().click()},Y.showLoading=Y.enableLoading=function(){var e=p();e||Y(""),e=p();var t=k(),o=w(),r=C();T(t),T(o,"inline-block"),E(t,n.loading),E(e,n.loading),o.disabled=!0,r.disabled=!0,e.setAttribute("aria-busy",!0),e.focus()},Y.isValidParameter=function(t){return e.hasOwnProperty(t)||"extraParams"===t},Y.setDefaults=function(e){if(!e||"object"!==(void 0===e?"undefined":I(e)))return l("the argument for setDefaults() is required and has to be a object");for(var t in e)Y.isValidParameter(t)||(a('Unknown parameter "'+t+'"'),delete e[t]);R(U,e)},Y.resetDefaults=function(){U=R({},e)},Y.noop=function(){},Y.version="6.11.4",Y.default=Y,Y}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);
