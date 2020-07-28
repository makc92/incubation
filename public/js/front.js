/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, function (exports, $) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread({}, Default, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

  };
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      $(this._element).trigger(Event$a.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this._element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      var complete = function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);

        $(_this4._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.bundle.js.map

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";function t(t,e,n){return!(u(t,e,n)||_(t,e,n)||f(t,e,n)||h(t,e,n))}function e(t,e,n){var o=e._settings;!n&&r(t)||(C(o.callback_enter,t),R.indexOf(t.tagName)>-1&&(x(t,e),y(t,o.class_loading)),H(t,e),s(t),C(o.callback_set,t))}var n=function(){return{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1}},o=function(t,e){return t.getAttribute("data-"+e)},i=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},s=function(t){return i(t,"was-processed","true")},r=function(t){return"true"===o(t,"was-processed")},l=function(t){return t.filter(function(t){return!r(t)})},a=function(t,e){return t.filter(function(t){return t!==e})},c=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},u=function(t,e,n){return(e===window?window.innerHeight+window.pageYOffset:c(e)+e.offsetHeight)<=c(t)-n},d=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},f=function(t,e,n){var o=window.innerWidth;return(e===window?o+window.pageXOffset:d(e)+o)<=d(t)-n},_=function(t,e,n){return(e===window?window.pageYOffset:c(e))>=c(t)+n+t.offsetHeight},h=function(t,e,n){return(e===window?window.pageXOffset:d(e))>=d(t)+n+t.offsetWidth},p=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},g=function(t,e){return e?t.replace(/\.(jpe?g|png)/gi,".webp"):t},m="undefined"!=typeof window,w=m&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),v=m&&"classList"in document.createElement("p"),b=m&&function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}(),y=function(t,e){v?t.classList.add(e):t.className+=(t.className?" ":"")+e},E=function(t,e){v?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},L=function(t,e,n,i){for(var s,r=0;s=t.children[r];r+=1)if("SOURCE"===s.tagName){var l=o(s,n);T(s,e,l,i)}},T=function(t,e,n,o){n&&t.setAttribute(e,g(n,o))},S=function(t,e){var n=b&&e.to_webp,i=o(t,e.data_src),s=o(t,e.data_bg);if(i){var r=g(i,n);t.style.backgroundImage='url("'+r+'")'}if(s){var l=g(s,n);t.style.backgroundImage=l}},O={IMG:function(t,e){var n=b&&e.to_webp,i=e.data_srcset,s=t.parentNode;s&&"PICTURE"===s.tagName&&L(s,"srcset",i,n);var r=o(t,e.data_sizes);T(t,"sizes",r);var l=o(t,i);T(t,"srcset",l,n);var a=o(t,e.data_src);T(t,"src",a,n)},IFRAME:function(t,e){var n=o(t,e.data_src);T(t,"src",n)},VIDEO:function(t,e){var n=e.data_src,i=o(t,n);L(t,"src",n),T(t,"src",i),t.load()}},H=function(t,e){var n=e._settings,o=t.tagName,i=O[o];if(i)return i(t,n),e._updateLoadingCount(1),void(e._elements=a(e._elements,t));S(t,n)},C=function(t,e){t&&t(e)},k=function(t,e,n){t.addEventListener(e,n)},z=function(t,e,n){t.removeEventListener(e,n)},N=function(t,e,n){k(t,"load",e),k(t,"loadeddata",e),k(t,"error",n)},A=function(t,e,n){z(t,"load",e),z(t,"loadeddata",e),z(t,"error",n)},I=function(t,e,n){var o=n._settings,i=e?o.class_loaded:o.class_error,s=e?o.callback_load:o.callback_error,r=t.target;E(r,o.class_loading),y(r,i),C(s,r),n._updateLoadingCount(-1)},x=function(t,e){var n=function n(i){I(i,!0,e),A(t,n,o)},o=function o(i){I(i,!1,e),A(t,n,o)};N(t,n,o)},R=["IMG","IFRAME","VIDEO"],D=function(t,e){for(;e.length;)t.splice(e.pop(),1)},F=function(t){this._settings=_extends({},n(),t),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};return F.prototype={_loopThroughElements:function(e){var n=this._settings,o=this._elements,i=o?o.length:0,s=void 0,r=[],l=this._isFirstLoop;if(l&&(this._isFirstLoop=!1),0!==i){for(s=0;s<i;s++){var a=o[s];n.skip_invisible&&null===a.offsetParent||(e||t(a,n.container,n.threshold))&&(l&&y(a,n.class_initial),this.load(a),r.push(s))}D(o,r)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&C(this._settings.callback_finish)},handleScroll:function(){var t=this._settings.throttle;if(0!==t){var e=Date.now(),n=t-(e-this._previousLoopTime);n<=0||n>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(t){var e=this._settings,n=t||this._queryOriginNode.querySelectorAll(e.elements_selector);this._elements=l(Array.prototype.slice.call(n)),w?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(t,n){e(t,this,n)}},m&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)p(t,n);else p(t,e)}(F,window.lazyLoadOptions),F});

/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);
/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b={},c={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},d=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c},e=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if("options"===(b=b||{}))return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}});var f=function(a){var b={relative:""},c="string"==typeof a&&e.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b},g=function(b){var c=a(b.scrollTarget);b.autoFocus&&c.length&&(c[0].focus(),c.is(document.activeElement)||(c.prop({tabIndex:-1}),c[0].focus())),b.afterScroll.call(b.link,b)};a.smoothScroll=function(c,d){if("options"===c&&"object"==typeof d)return a.extend(b,d);var e,h,i,j,k=f(c),l={},m=0,n="offset",o="scrollTop",p={},q={};k.px?e=a.extend({link:null},a.fn.smoothScroll.defaults,b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,c||{},b),e.scrollElement&&(n="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(k=f(d))),o="left"===e.direction?"scrollLeft":o,e.scrollElement?(h=e.scrollElement,k.px||/^(?:HTML|BODY)$/.test(h[0].nodeName)||(m=h[o]())):h=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(h,e),l=k.px?k:{relative:"",px:a(e.scrollTarget)[n]()&&a(e.scrollTarget)[n]()[e.direction]||0},p[o]=l.relative+(l.px+m+e.offset),i=e.speed,"auto"===i&&(j=Math.abs(p[o]-h[o]()),i=j/e.autoCoefficient),q={duration:i,easing:e.easing,complete:function(){g(e)}},e.step&&(q.step=e.step),h.length?h.stop().animate(p,q):g(e)},a.smoothScroll.version="2.2.0",a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c});
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.4
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function appeared(selector) {
    return $(selector).filter(function() {
      return $(this).is(':appeared');
    });
  }

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = appeared(selectors[index]);

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  }

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // ":appeared" custom filter
  $.expr.pseudos.appeared = $.expr.createPseudo(function(arg) {
    return function(element) {
      var $element = $(element);
      if (!$element.is(':visible')) {
        return false;
      }

      var window_left = $window.scrollLeft();
      var window_top = $window.scrollTop();
      var offset = $element.offset();
      var left = offset.left;
      var top = offset.top;

      if (top + $element.height() >= window_top &&
          top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
          left + $element.width() >= window_left &&
          left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
        return true;
      } else {
        return false;
      }
    };
  });

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(selector, options) {
      $.appear(this, options);
      return this;
    }
  });

  $.extend({
    appear: function(selector, options) {
      var opts = $.extend({}, defaults, options || {});

      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }

      add_selector(selector);
    },
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());

// ------------------------------------------------------------------------------ //
//
// Template name : Bootsnav - Multi Purpose Header
// Categorie : Bootstrap Menu in CSS
// Author : adamnurdin01
// Version : v.1.2
// Created : 2016-06-02
// Last update : 2016-10-19
//
// ------------------------------------------------------------------------------ //

(function ($) {
    "use strict";

    var bootsnav = {
        initialize: function () {
            this.event();
            this.hoverDropdown();
            this.navbarSticky();
            this.navbarScrollspy();
        },
        event: function () {

            // ------------------------------------------------------------------------------ //
            // Variable
            // ------------------------------------------------------------------------------ //
            var getNav = $("nav.navbar.bootsnav");

            // ------------------------------------------------------------------------------ //
            // Navbar Sticky 
            // ------------------------------------------------------------------------------ //
            var navSticky = getNav.hasClass("navbar-sticky");
            if (navSticky) {
                // Wraped navigation
                getNav.wrap("<div class='wrap-sticky'></div>");
            }

            // ------------------------------------------------------------------------------ //
            // Navbar Center 
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("brand-center")) {
                var postsArr = new Array(),
                        index = $("nav.brand-center"),
                        $postsList = index.find('ul.navbar-nav');

                index.prepend("<span class='storage-name' style='display:none;'></span>");

                //Create array of all posts in lists
                index.find('ul.navbar-nav > li').each(function () {
                    if ($(this).hasClass("active")) {
                        var getElement = $("a", this).eq(0).text();
                        $(".storage-name").html(getElement);
                    }
                    postsArr.push($(this).html());
                });

                //Split the array at this point. The original array is altered.
                var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
                        secondList = postsArr,
                        ListHTML = '';

                var createHTML = function (list) {
                    ListHTML = '';
                    for (var i = 0; i < list.length; i++) {
                        ListHTML += '<li>' + list[i] + '</li>'
                    }
                }

                //Generate HTML for first list
                createHTML(firstList);
                $postsList.html(ListHTML);
                index.find("ul.nav").first().addClass("navbar-left");

                //Generate HTML for second list
                createHTML(secondList);
                //Create new list after original one
                $postsList.after('<ul class="nav navbar-nav"></ul>').next().html(ListHTML);
                index.find("ul.nav").last().addClass("navbar-right");

                //Wrap navigation menu
                index.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>");
                index.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>");

                //Selection Class
                index.find('ul.navbar-nav > li').each(function () {
                    var dropDown = $("ul.dropdown-menu", this),
                    //added for center logo header
                            simpleMenu = $("ul.simple-dropdown", this),
                            megaMenu = $("ul.megamenu-content", this);
                    dropDown.closest("li").addClass("dropdown");
                    simpleMenu.closest("li").addClass("simple-dropdown");
                    megaMenu.closest("li").addClass("megamenu-fw");
                });

                var getName = $(".storage-name").html();
                if (!getName == "") {
                    $("ul.navbar-nav > li:contains('" + getName + "')").addClass("active");
                }
            }


            // ------------------------------------------------------------------------------ //
            // Navbar Sidebar 
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("navbar-sidebar")) {
                // Add Class to body
                $("body").addClass("wrap-nav-sidebar");
                getNav.wrapInner("<div class='scroller'></div>");
            } else {
                $(".bootsnav").addClass("on");
            }

            // ------------------------------------------------------------------------------ //
            // Menu Center 
            // ------------------------------------------------------------------------------ //
            if (getNav.find("ul.nav").hasClass("navbar-center")) {
                getNav.addClass("menu-center");
            }

            // ------------------------------------------------------------------------------ //
            // Navbar Full
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("navbar-full")) {
                // Add Class to body
                $("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>");
                $(".wrap-full-menu").wrap("<div class='nav-full'></div>");
                $("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>");
            } else if (getNav.hasClass("navbar-mobile")) {
                getNav.removeClass("no-full");
            } else {
                getNav.addClass("no-full");
            }

            // ------------------------------------------------------------------------------ //
            // Navbar Mobile
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("navbar-mobile")) {
                // Add Class to body
                $('.navbar-collapse').on('shown.bs.collapse', function () {
                    $("body").addClass("side-right");
                });
                $('.navbar-collapse').on('hide.bs.collapse', function () {
                    $("body").removeClass("side-right");
                });

                $(window).on("resize", function () {
                    $("body").removeClass("side-right");
                });
            }

            // ------------------------------------------------------------------------------ //
            // Navbar Fixed
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("no-background")) {
                $(window).on("scroll", function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > 34) {
                        $(".navbar-fixed").removeClass("no-background");
                    } else {
                        $(".navbar-fixed").addClass("no-background");
                    }
                });
            }

            // ------------------------------------------------------------------------------ //
            // Navbar Fixed
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("navbar-transparent")) {
                $(window).on("scroll", function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > 34) {
                        $(".navbar-fixed").removeClass("navbar-transparent");
                    } else {
                        $(".navbar-fixed").addClass("navbar-transparent");
                    }
                });
            }

            // ------------------------------------------------------------------------------ //
            // Button Cart
            // ------------------------------------------------------------------------------ //
            $(".btn-cart").on("click", function (e) {
                e.stopPropagation();
            });

            // ------------------------------------------------------------------------------ //
            // Toggle Search
            // ------------------------------------------------------------------------------ //
            $("nav.navbar.bootsnav .attr-nav").each(function () {
                $("li.search > a", this).on("click", function (e) {
                    e.preventDefault();
                    $(".top-search").slideToggle();
                });
            });
            $(".input-group-addon.close-search").on("click", function () {
                $(".top-search").slideUp();
            });

            // ------------------------------------------------------------------------------ //
            // Toggle Side Menu
            // ------------------------------------------------------------------------------ //
            $("nav.navbar.bootsnav .attr-nav").each(function () {
                $("li.side-menu > a", this).on("click", function (e) {
                    e.preventDefault();
                    $("nav.navbar.bootsnav > .side").toggleClass("on");
                    $("body").toggleClass("on-side");
                });
            });
            $(".side .close-side").on("click", function (e) {
                e.preventDefault();
                $("nav.navbar.bootsnav > .side").removeClass("on");
                $("body").removeClass("on-side");
            });



            // ------------------------------------------------------------------------------ //
            // Wrapper
            // ------------------------------------------------------------------------------ //
            //$("body").wrapInner("<div class='wrapper'></div>");
        },
        // ------------------------------------------------------------------------------ //
        // Change dropdown to hover on dekstop
        // ------------------------------------------------------------------------------ //
        hoverDropdown: function () {
            var getNav = $("nav.navbar.bootsnav"),
                    getWindow = $(window).width(),
                    getHeight = $(window).height(),
                    getIn = getNav.find("ul.nav").data("in"),
                    getOut = getNav.find("ul.nav").data("out");

            if (getWindow < 991) {

                // Height of scroll navigation sidebar
                $(".scroller").css("height", "auto");

                // Disable mouseenter event
                $("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter");
                $("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave");
                $("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter");
                $("nav.navbar.bootsnav ul.nav").off("mouseleave");
                $(".navbar-collapse").removeClass("animated");

                // Enable click event
                $("nav.navbar.bootsnav ul.nav").each(function () {
                    $(".dropdown-menu", this).addClass("animated");
                    $(".dropdown-menu", this).removeClass(getOut);

                    // Dropdown Fade Toggle
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                        $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(getIn);
                        $(this).closest("li.dropdown").first().toggleClass("on");
                        return false;
                    });

                    // Hidden dropdown action
                    $('li.dropdown', this).each(function () {
                        $(this).find(".dropdown-menu").stop().fadeOut('fast');
                        $(this).on('hidden.bs.dropdown', function () {
                            $(this).find(".dropdown-menu").stop().fadeOut('fast');
                        });
                        return false;
                    });

                    // Megamenu style
                    $(".megamenu-fw", this).each(function () {
                        $(".col-menu", this).each(function () {
                            $(".content", this).addClass("animated");
                            $(".content", this).stop().fadeOut();
                            $(".title", this).off("click");
                            $(".title", this).on("click", function () {
                                $(this).closest(".col-menu").find(".content").stop().fadeToggle('fast').addClass(getIn);
                                $(this).closest(".col-menu").toggleClass("on");
                                return false;
                            });

                            $(".content", this).on("click", function (e) {
                                e.stopPropagation();
                            });
                        });
                    });
                });

                // Hidden dropdown
                var cleanOpen = function () {
                    $('li.dropdown', this).removeClass("on");
                    $(".dropdown-menu", this).stop().fadeOut('fast');
                    $(".dropdown-menu", this).removeClass(getIn);
                    $(".col-menu", this).removeClass("on");
                    $(".col-menu .content", this).stop().fadeOut('fast');
                    $(".col-menu .content", this).removeClass(getIn);
                }

                // Hidden om mouse leave
                $("nav.navbar.bootsnav").on("mouseleave", function () {
                    cleanOpen();
                });


                // Enable click atribute navigation
                $("nav.navbar.bootsnav .attr-nav").each(function () {
                    $(".dropdown-menu", this).removeClass("animated");
                    $("li.dropdown", this).off("mouseenter");
                    $("li.dropdown", this).off("mouseleave");
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                        $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle();
                        $(".navbar-toggle").each(function () {
                            $(".fa", this).removeClass("fa-times");
                            $(".fa", this).addClass("fa-bars");
                            $(".navbar-collapse").removeClass("in");
                            $(".navbar-collapse").removeClass("on");
                        });
                    });

                    $(this).on("mouseleave", function () {
                        $(".dropdown-menu", this).stop().fadeOut();
                        $("li.dropdown", this).removeClass("on");
                        return false;
                    });
                });

                // Toggle Bars
                $(".navbar-toggle").each(function () {
                    $(this).off("click");
                    $(this).on("click", function () {
                        $(".fa", this).toggleClass("fa-bars");
                        $(".fa", this).toggleClass("fa-times");
                        cleanOpen();
                    });
                });

            } else if (getWindow > 991) {
                // Height of scroll navigation sidebar
                $(".scroller").css("height", getHeight + "px");

                // Navbar Sidebar
                if (getNav.hasClass("navbar-sidebar")) {
                    // Hover effect Sidebar Menu
                    $("nav.navbar.bootsnav ul.nav").each(function () {
                        $("a.dropdown-toggle", this).off('click');
                        $("a.dropdown-toggle", this).on('click', function (e) {
                            e.stopPropagation();
                        });

                        $(".dropdown-menu", this).addClass("animated");
                        $("li.dropdown", this).on("mouseenter", function () {
                            $(".dropdown-menu", this).eq(0).removeClass(getOut);
                            $(".dropdown-menu", this).eq(0).stop().fadeIn('fast').addClass(getIn);
                            $(this).addClass("on");
                            return false;
                        });

                        $(".col-menu").each(function () {
                            $(".content", this).addClass("animated");
                            $(".title", this).on("mouseenter", function () {
                                $(this).closest(".col-menu").find(".content").stop().fadeIn('fast').addClass(getIn);
                                $(this).closest(".col-menu").addClass("on");
                                return false;
                            });
                        });

                        $(this).on("mouseleave", function () {
                            $(".dropdown-menu", this).stop().removeClass(getIn);
                            $(".dropdown-menu", this).stop().addClass(getOut).fadeOut('fast');
                            $(".col-menu", this).find(".content").stop().fadeOut('fast').removeClass(getIn);
                            $(".col-menu", this).removeClass("on");
                            $("li.dropdown", this).removeClass("on");
                            return false;
                        });
                    });
                } else {
                    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

                    // Hover effect Default Menu
                    $("nav.navbar.bootsnav ul.nav").each(function () {
                        $("a.dropdown-toggle", this).off('click');
                        $("a.dropdown-toggle", this).on('click', function (e) {
                            e.stopPropagation();
                        });

                        $(".megamenu-fw", this).each(function () {
                            $(".title", this).off("click");
                            $("a.dropdown-toggle", this).off("click");
                            $(".content").removeClass("animated");
                        });

                        $(".dropdown-menu", this).addClass("animated");
                        
        // user hover on single menu then hide its sibling children menu
        if( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) {

            $("li:not(.dropdown)", this).on("mouseenter", function () {
                $(this).parent().find('.dropdown-menu').stop().fadeOut('fast');
            });
            
            $( document ).on( 'click', '.side-left-menu-close.active', function(e) {
                $( this ).removeClass( 'active' );
             });
        }

                        $("li.dropdown", this).on("mouseenter", function () {
                            var _this = this;

        $( '.side-left-menu-close' ).addClass( 'active' );
        
        if( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) {

            $(this).parent().find('.dropdown').removeClass("on");
            if( $(this).parents('.dropdown-menu').length > 0 ) { // child
                $(this).parents('.dropdown-menu').find('.dropdown-menu').not( $( '.dropdown-menu', this ) ).stop().fadeOut('fast');
            } else { // main
                $(this).parents('.bootsnav .nav').find('.dropdown-menu').not( $( '.dropdown-menu', this ) ).stop().fadeOut('fast');
                $(":not(.second-level)", this).find('.third-level').stop().fadeOut('fast');
            }

            if( $(this).parent().hasClass( "second-level" ) ) {
                $(this).parents( '.navbar-nav' ).addClass( "enter" );
            } else if( $( this ).parent().hasClass( "enter" ) ) {
                $( '.navbar-nav' ).removeClass( "enter" );
            }
        }

                            $(".dropdown-menu", this).eq(0).removeClass(getOut);
                            if(isSafari)
                                $(".dropdown-menu", _this).eq(0).stop().fadeIn('fast').addClass(getIn);
                            else
                                $(".dropdown-menu", _this).eq(0).stop().fadeIn('fast').addClass(getIn);
                            $(this).addClass("on");
         
        if( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) {

            if( $( '.left-nav-sidebar' ).length > 0 ) {
                var menu_width = $( '.sidebar-part1' ).outerWidth();
                    menu_width = menu_width + 20;
                    menu_width = menu_width + $( '.left-nav-on .navbar-nav' ).outerWidth();
            } else {
                var menu_width = $( '.navbar-nav' ).outerWidth();
            }

            var mainWidth = $(window).width();
            setTimeout( function() {

                $( '.dropdown' ).each( function() {
                    if( $( this ).hasClass( 'on' ) ) {
                        menu_width = menu_width + $( '.dropdown-menu li', this ).outerWidth();
                    }
                });
                $( '.side-left-menu-close' ).width(mainWidth - menu_width);
            }, 300 );
        }
                            return false;
                        });

                        $("li.dropdown", this).on("mouseleave", function () {
                            $(".dropdown-menu", this).eq(0).removeClass(getIn);

            if ( $(".dropdown-menu", this).css("display") == "none" || !( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) || $(this).parents( '.bootsnav .nav' ).hasClass( "enter" ) ) {

                            if(isSafari)
                                $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                            else
                                $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                            
                            $(this).removeClass("on");
            }
            
                            
                            
            if( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) {

                $( '.side-left-menu-close' ).addClass( 'active' );

                if( $( '.left-nav-sidebar' ).length > 0 ) {
                    var menu_width = $( '.sidebar-part1' ).outerWidth();
                        menu_width = menu_width + 20;
                        menu_width = menu_width + $( '.left-nav-on .navbar-nav' ).outerWidth();
                } else {
                    var menu_width = $( '.navbar-nav' ).outerWidth();
                }

                var mainWidth = $(window).width();
                setTimeout( function() {

                    $( '.dropdown' ).each( function() {
                        if( $( this ).hasClass( 'on' ) ) {
                            menu_width = menu_width + $( '.dropdown-menu li', this ).outerWidth();
                        }
                    });
                    $( '.side-left-menu-close' ).width( mainWidth - menu_width );
                }, 300 );
            }
                        });

                        $(this).on("mouseleave", function () {
                            $(".dropdown-menu", this).removeClass(getIn);
                            $( '.side-left-menu-close' ).removeClass( 'active' );
                            
                            if (isSafari)
                                $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                            else
                                $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                            $("li.dropdown", this).removeClass("on");

            if( $( '.navbar-left-sidebar' ).length > 0 || $( '.left-nav-sidebar' ).length > 0 ) {
                if( $( '.bootsnav .nav' ).hasClass( "enter" ) ) {
                    $( '.bootsnav .nav' ).removeClass( "enter" );
                } else {
                    $( '.bootsnav .nav' ).find('.dropdown-menu').fadeOut('fast');
                }
            }
            
                            return false;
                        });
                    });
                }

                // ------------------------------------------------------------------------------ //
                // Hover effect Atribute Navigation
                // ------------------------------------------------------------------------------ //
                $("nav.navbar.bootsnav .attr-nav").each(function () {
                    $("a.dropdown-toggle", this).off('click');
                    $("a.dropdown-toggle", this).on('click', function (e) {
                        e.stopPropagation();
                    });

                    $(".dropdown-menu", this).addClass("animated");
                    $("li.dropdown", this).on("mouseenter", function () {
                        $(".dropdown-menu", this).eq(0).removeClass(getOut);
                        $(".dropdown-menu", this).eq(0).stop().fadeIn('fast').addClass(getIn);
                        $(this).addClass("on");
                        return false;
                    });

                    $("li.dropdown", this).on("mouseleave", function () {
                        $(".dropdown-menu", this).eq(0).removeClass(getIn);
                        $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                        $(this).removeClass("on");
                    });

                    $(this).on("mouseleave", function () {
                        $(".dropdown-menu", this).removeClass(getIn);
                        $(".dropdown-menu", this).eq(0).stop().fadeOut('fast').addClass(getOut);
                        $("li.dropdown", this).removeClass("on");
                        return false;
                    });
                });
            }

            // ------------------------------------------------------------------------------ //
            // Menu Fullscreen
            // ------------------------------------------------------------------------------ //
            if (getNav.hasClass("navbar-full")) {
                var windowHeight = $(window).height(),
                        windowWidth = $(window).width();

                $(".nav-full").css("height", windowHeight + "px");
                $(".wrap-full-menu").css("height", windowHeight + "px");
                $(".wrap-full-menu").css("width", windowWidth + "px");

                $(".navbar-collapse").addClass("animated");
                $(".navbar-toggle").each(function () {
                    var getId = $(this).data("target");
                    $(this).off("click");
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        $(getId).removeClass(getOut);
                        $(getId).addClass("in");
                        $(getId).addClass(getIn);
                        return false;
                    });

                    $("li.close-full-menu").on("click", function (e) {
                        e.preventDefault();
                        $(getId).addClass(getOut);
                        setTimeout(function () {
                            $(getId).removeClass("in");
                            $(getId).removeClass(getIn);
                        }, 500);
                        return false;
                    });
                });
            }
        },
        // ------------------------------------------------------------------------------ //
        // Navbar Sticky
        // ------------------------------------------------------------------------------ //
        navbarSticky: function () {
            var getNav = $("nav.navbar.bootsnav"),
                    navSticky = getNav.hasClass("navbar-sticky");

            if (navSticky) {

                // Set Height Navigation
                var getHeight = getNav.height();
                $(".wrap-sticky").height(getHeight);

                // Windown on scroll
                var getOffset = $(".wrap-sticky").offset().top;
                $(window).on("scroll", function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > getOffset) {
                        getNav.addClass("sticked");
                    } else {
                        getNav.removeClass("sticked");
                    }
                });
            }
        },
        // ------------------------------------------------------------------------------ //
        // Navbar Scrollspy
        // ------------------------------------------------------------------------------ //
        navbarScrollspy: function () {
            var navScrollSpy = $(".navbar-scrollspy"),
                    $body = $('body'),
                    getNav = $('nav.navbar.bootsnav'),
                    offset = getNav.outerHeight();

            if (navScrollSpy.length) {
                $body.scrollspy({ target: '.navbar', offset: offset });

                // Animation Scrollspy
                $('.scroll').on('click', function (event) {
                    event.preventDefault();

                    // Active link
                    $('.scroll').removeClass("active");
                    $(this).addClass("active");

                    // Remove navbar collapse
                    $(".navbar-collapse").removeClass("in");

                    // Toggle Bars
                    $(".navbar-toggle").each(function () {
                        $(".fa", this).removeClass("fa-times");
                        $(".fa", this).addClass("fa-bars");
                    });

                    // Scroll
                    var scrollTop = $(window).scrollTop(),
                            $anchor = $(this).find('a'),
                            $section = $($anchor.attr('href')).offset().top,
                            $window = $(window).width(),
                            $minusDesktop = getNav.data("minus-value-desktop"),
                            $minusMobile = getNav.data("minus-value-mobile"),
                            $speed = getNav.data("speed");

                    if ($window > 992) {
                        var $position = $section - $minusDesktop;
                    } else {
                        var $position = $section - $minusMobile;
                    }

                    $('html, body').stop().animate({
                        scrollTop: $position
                    }, $speed);
                });

                // Activate Navigation
                var fixSpy = function () {
                    var data = $body.data('bs.scrollspy');
                    if (data) {
                        offset = getNav.outerHeight();
                        data.options.offset = offset;
                        $body.data('bs.scrollspy', data);
                        $body.scrollspy('refresh');
                    }
                }

                // Activate Navigation on resize
                var resizeTimer;
                $(window).on('resize', function () {
                    clearTimeout(resizeTimer);
                    var resizeTimer = setTimeout(fixSpy, 200);
                });
            }
        }
    };

    // Initialize
    $(document).ready(function () {
        bootsnav.initialize();
    });

    // Reset on resize
    $(window).on("resize", function () {
        bootsnav.hoverDropdown();
        setTimeout(function () {
            bootsnav.navbarSticky();
        }, 500);

        // Toggle Bars
        $(".navbar-toggle").each(function () {
            $(".fa", this).removeClass("fa-times");
            $(".fa", this).addClass("fa-bars");
            $(this).removeClass("fixed");
        });
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").removeClass("on");
        $(".navbar-collapse").removeClass("bounceIn");
    });

} (jQuery));
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

	// our plugin constructor
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);
                        
                        //this.$nav = this.$elem.find(this.config.navItems)
			this.$nav = this.$elem.find(this.config.navItems).not(".directpage");

			//Filter any links out of the nav
			if(this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function() {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});

			self.t = setInterval(function() {
				docHeight = self.$doc.height();

				//If it was scrolled
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function() {
					//Do we need to change the hash?
					if(self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if(self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function(target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};

})( jQuery, window , document );
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(n=i=0,o=(r=this.keys).length;o>i;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=r.addedNodes||[]).length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,l;for(l=[],e=0,i=(s=this.vendors).length;i>e;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(s=(l=i(t)).getPropertyCSSValue(e),n=0,o=(r=this.vendors).length;o>n;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o.prototype.removeBox=function(t){var e=this.boxes.indexOf(t);e>-1&&this.boxes.splice(e,1)},o}()}).call(this);
//
// SmoothScroll for websites v1.4.9 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function () {
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true, 
    excluded          : ''    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var deltaBufferTimer;
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' + 
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);
        
        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };
  
        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true, 
            childList: true, 
            characterData: false 
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');   
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {
    
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: Date.now()
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollRoot = getScrollRoot();
    var isWindowScroll = (elem === scrollRoot || elem === document.body);
    
    // if we haven't already fixed the behavior, 
    // and it needs fixing for this sesh
    if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
        elem.$scrollBehavior = elem.style.scrollBehavior;
        elem.style.scrollBehavior = 'auto';
    }

    var step = function (time) {
        
        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (isWindowScroll) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
        } else { 
            pending = false;
            // restore default behavior at the end of scrolling sesh
            if (elem.$scrollBehavior != null) {
                elem.style.scrollBehavior = elem.$scrollBehavior;
                elem.$scrollBehavior = null;
            }
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;

    // leave early if default action is prevented   
    // or it's a zooming event with CTRL 
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }
    
    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') || 
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    
    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            return parent.wheel(event);
        }
        return true;
    }
    
    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable || 
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight; 

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cacheX = {}; // cleared out after a scrolling session
var cacheY = {}; // cleared out after a scrolling session
var clearCacheTimer;
var smoothBehaviorForElement = {};

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { 
        cacheX = cacheY = smoothBehaviorForElement = {}; 
    }, 1*1000);
}

function setCache(elems, overflowing, x) {
    var cache = x ? cacheX : cacheY;
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function getCache(el, x) {
    return (x ? cacheX : cacheY)[uniqueID(el)];
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = getCache(el, false);
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) || 
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot()); 
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while ((el = el.parentElement));
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}

// for all other elements
function isScrollBehaviorSmooth(el) {
    var id = uniqueID(el);
    if (smoothBehaviorForElement[id] == null) {
        var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
        smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
    }
    return smoothBehaviorForElement[id];
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, arg) {
    window.addEventListener(type, fn, arg || false);
}

function removeEvent(type, fn, arg) {
    window.removeEventListener(type, fn, arg || false);  
}

function isNodeName(el, tag) {
    return el && (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage 
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { } 
}

function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }  
    }, 1000);
    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY); // win64 
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList && 
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while ((elem = elem.parentNode));
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver || 
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);  

var getScrollRoot = (function() {
  var SCROLL_ROOT = document.scrollingElement;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else 
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
var isSafari  = /safari/i.test(userAgent) && !isEdge; 
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
            supportsPassive = true;
        } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; 

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel, wheelOpt);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key)) 
            options[key] = optionsToSet[key];
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

if (typeof define === 'function' && define.amd)
    define(function() {
        return SmoothScroll;
    });
else if ('object' == typeof exports)
    module.exports = SmoothScroll;
else
    window.SmoothScroll = SmoothScroll;

})();
/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,J="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===J||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new J.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===J?J.scrollY:e.scrollTop,n=e===J?J.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===J)return i===J;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?J.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,s,ee={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new J.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=J.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=J.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||J.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(ee.isObject(a[l])&&ee.isObject(s[l])?ee.extend(a[l],s[l]):!ee.isObject(a[l])&&ee.isObject(s[l])?(a[l]={},ee.extend(a[l],s[l])):a[l]=s[l])}}return a}},te=(i=f.createElement("div"),{touch:J.Modernizr&&!0===J.Modernizr.touch||!!(0<J.navigator.maxTouchPoints||"ontouchstart"in J||J.DocumentTouch&&f instanceof J.DocumentTouch),pointerEvents:!!(J.navigator.pointerEnabled||J.PointerEvent||"maxTouchPoints"in J.navigator&&0<J.navigator.maxTouchPoints),prefixedPointerEvents:!!J.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:J.Modernizr&&!0===J.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in J||"WebkitMutationObserver"in J,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});J.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in J}),I={isIE:!!J.navigator.userAgent.match(/Trident/g)||!!J.navigator.userAgent.match(/MSIE/g),isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:(s=J.navigator.userAgent.toLowerCase(),0<=s.indexOf("safari")&&s.indexOf("chrome")<0&&s.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)},n=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},o={components:{configurable:!0}};n.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},n.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},n.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},n.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},n.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&ee.extend(a,t.params)})},n.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},n.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+ee.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},n.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(n,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),ee.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),z=0;z<d;z+=1){T=0;var P=l.eq(z);if(1<t.slidesPerColumn){var k=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),k=$+L*x/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(L=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=J.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;if(D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else if(e.isHorizontal()){var A=parseFloat(I.getPropertyValue("width")),H=parseFloat(I.getPropertyValue("padding-left")),N=parseFloat(I.getPropertyValue("padding-right")),G=parseFloat(I.getPropertyValue("margin-left")),B=parseFloat(I.getPropertyValue("margin-right")),X=I.getPropertyValue("box-sizing");T=X&&"border-box"===X?A+G+B:A+H+N+G+B}else{var Y=parseFloat(I.getPropertyValue("height")),V=parseFloat(I.getPropertyValue("padding-top")),F=parseFloat(I.getPropertyValue("padding-bottom")),R=parseFloat(I.getPropertyValue("margin-top")),q=parseFloat(I.getPropertyValue("margin-bottom")),W=I.getPropertyValue("box-sizing");T=W&&"border-box"===W?Y+R+q:Y+V+F+R+q}D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[z]&&(e.isHorizontal()?l[z].style.width=T+"px":l[z].style.height=T+"px");l[z]&&(l[z].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),te.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var j=0;j<p.length;j+=1){var U=p[j];t.roundLengths&&(U=Math.floor(U)),p[j]<e.virtualSize+p[0]&&E.push(U)}p=E}if(!t.centeredSlides){E=[];for(var K=0;K<p.length;K+=1){var _=p[K];t.roundLengths&&(_=Math.floor(_)),p[K]<=e.virtualSize-i&&E.push(_)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Z=0;if(u.forEach(function(e){Z+=e+(t.spaceBetween?t.spaceBetween:0)}),(Z-=t.spaceBetween)<i){var Q=(i-Z)/2;p.forEach(function(e,t){p[t]=e-Q}),c.forEach(function(e,t){c[t]=e+Q})}}ee.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),ee.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);ee.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=ee.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(te.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&te.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(te.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){te.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&te.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&te.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=J.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:J.cordova||J.phonegap,phonegap:J.cordova||J.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=J.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=J.screen.width-d)){if(ee.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=ee.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(ee.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=ee.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:ee.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=ee.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=ee.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=ee.now(),ee.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<ee.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(z=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(p-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("touchstart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,te.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("onTouchStart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),ee.extend(e.params,l),ee.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=J.innerWidth&&(t=s):s>=J.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),te.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new J.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=ee.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=ee.extend({},w);r.useModulesParams(n),r.params=ee.extend({},n,x,s),r.originalParams=ee.extend({},r.params),r.passedParams=ee.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=ee.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return ee.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],te.pointerEvents?p=["pointerdown","pointermove","pointerup"]:te.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},te.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:ee.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return a||(a="horizontal"===i?"vertical":"horizontal"),a===i||"horizontal"!==a&&"vertical"!==a||("vertical"===i&&(t.$el.removeClass(t.params.containerModifierClass+"vertical wp8-vertical").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),"horizontal"===i&&(t.$el.removeClass(t.params.containerModifierClass+"horizontal wp8-horizontal").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),ee.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){ee.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(n),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:te},static:{support:te}},C={name:"browser",proto:{browser:I},static:{browser:I}},M={name:"resize",create:function(){var e=this;ee.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){J.addEventListener("resize",this.resize.resizeHandler),J.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){J.removeEventListener("resize",this.resize.resizeHandler),J.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:J.MutationObserver||J.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(te.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},P={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ee.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},k={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(ee.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var z=0;z<u.length;z+=1)y<=z&&z<=x&&(void 0===c||e?C.push(z):(c<z&&C.push(z),z<p&&S.push(z)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;ee.extend(e,{virtual:{update:k.update.bind(e),appendSlide:k.appendSlide.bind(e),prependSlide:k.prependSlide.bind(e),removeSlide:k.removeSlide.bind(e),removeAllSlides:k.removeAllSlides.bind(e),renderSlide:k.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},D={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=J.innerWidth,o=J.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},O={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){ee.extend(this,{keyboard:{enabled:!1,enable:D.enable.bind(this),disable:D.disable.bind(this),handle:D.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var A={lastScrollTime:ee.now(),event:-1<J.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=A.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=ee.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<ee.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new J.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!A.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(A.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!A.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(A.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},H={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),ee.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},N={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),ee.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(te.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(te.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),ee.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=ee.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),ee.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},B={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},X={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!te.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=X.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=X.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=te.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=ee.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=ee.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},Y={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&ee.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},F={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},R={init:function(){var e=this;if(e.params.history){if(!J.history||!J.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=R.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||J.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=R.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=J.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=R.slugify(a.attr("data-history"));J.location.pathname.includes(e)||(i=e+"/"+i);var s=J.history.state;s&&s.value===i||(this.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(R.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},q={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(J).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(J).off("hashchange",this.hashNavigation.onHashCange)}},W={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=ee.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},j={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},U={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,P=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},K={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},_={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(te.pointerEvents||te.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},Z={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,ee.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),ee.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):ee.isObject(t.swiper)&&(e.thumbs.swiper=new a(ee.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Q=[E,S,C,M,P,$,O,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;ee.extend(e,{mousewheel:{enabled:!1,enable:A.enable.bind(e),disable:A.disable.bind(e),handle:A.handle.bind(e),handleMouseEnter:A.handleMouseEnter.bind(e),handleMouseLeave:A.handleMouseLeave.bind(e),lastScrollTime:ee.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;ee.extend(e,{navigation:{init:H.init.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),onNextClick:H.onNextClick.bind(e),onPrevClick:H.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||L(e.target).is(r)||L(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;ee.extend(e,{pagination:{init:N.init.bind(e),render:N.render.bind(e),update:N.update.bind(e),destroy:N.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;ee.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){ee.extend(this,{parallax:{setTransform:B.setTransform.bind(this),setTranslate:B.setTranslate.bind(this),setTransition:B.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=X[e].bind(i)}),ee.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){ee.extend(this,{lazy:{initialImageLoaded:!1,load:Y.load.bind(this),loadInSlide:Y.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;ee.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;ee.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(F).forEach(function(e){t.a11y[e]=F[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;ee.extend(e,{history:{init:R.init.bind(e),setHistory:R.setHistory.bind(e),setHistoryPopState:R.setHistoryPopState.bind(e),scrollToSlide:R.scrollToSlide.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;ee.extend(e,{hashNavigation:{initialized:!1,init:q.init.bind(e),destroy:q.destroy.bind(e),setHash:q.setHash.bind(e),onHashCange:q.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;ee.extend(t,{autoplay:{running:!1,paused:!1,run:W.run.bind(t),start:W.start.bind(t),stop:W.stop.bind(t),pause:W.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){ee.extend(this,{fadeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){ee.extend(this,{cubeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){ee.extend(this,{flipEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){ee.extend(this,{coverflowEffect:{setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){ee.extend(this,{thumbs:{swiper:null,init:Z.init.bind(this),update:Z.update.bind(this),onThumbClick:Z.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Q),T});
//# sourceMappingURL=swiper.min.js.map

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).bsCustomFileInput=t()}(this,function(){"use strict";var s={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},l=function(e){if(0<e.childNodes.length)for(var t=[].slice.call(e.childNodes),n=0;n<t.length;n++){var l=t[n];if(3!==l.nodeType)return l}return e},u=function(e){var t=e.bsCustomFileInput.defaultText,n=e.parentNode.querySelector(s.CUSTOMFILELABEL);n&&(l(n).textContent=t)},n=!!window.File,r=function(e){if(e.hasAttribute("multiple")&&n)return[].slice.call(e.files).map(function(e){return e.name}).join(", ");if(-1===e.value.indexOf("fakepath"))return e.value;var t=e.value.split("\\");return t[t.length-1]};function d(){var e=this.parentNode.querySelector(s.CUSTOMFILELABEL);if(e){var t=l(e),n=r(this);n.length?t.textContent=n:u(this)}}function v(){for(var e=[].slice.call(this.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),t=0,n=e.length;t<n;t++)u(e[t])}var p="bsCustomFileInput",m="reset",h="change";return{init:function(e,t){void 0===e&&(e=s.CUSTOMFILE),void 0===t&&(t=s.FORM);for(var n,l,r=[].slice.call(document.querySelectorAll(e)),i=[].slice.call(document.querySelectorAll(t)),o=0,u=r.length;o<u;o++){var c=r[o];Object.defineProperty(c,p,{value:{defaultText:(n=void 0,n="",(l=c.parentNode.querySelector(s.CUSTOMFILELABEL))&&(n=l.textContent),n)},writable:!0}),d.call(c),c.addEventListener(h,d)}for(var f=0,a=i.length;f<a;f++)i[f].addEventListener(m,v),Object.defineProperty(i[f],p,{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(s.FORM)).filter(function(e){return!!e.bsCustomFileInput}),t=[].slice.call(document.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),n=0,l=t.length;n<l;n++){var r=t[n];u(r),r[p]=void 0,r.removeEventListener(h,d)}for(var i=0,o=e.length;i<o;i++)e[i].removeEventListener(m,v),e[i][p]=void 0}}});


(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define(b):a.retinajs=b()})(this,function(){'use strict';function a(a){return Array.prototype.slice.call(a)}function b(a){var b=parseInt(a,10);return k<b?k:b}function c(a){return a.hasAttribute('data-no-resize')||(0===a.offsetWidth&&0===a.offsetHeight?(a.setAttribute('width',a.naturalWidth),a.setAttribute('height',a.naturalHeight)):(a.setAttribute('width',a.offsetWidth),a.setAttribute('height',a.offsetHeight))),a}function d(a,b){var d=a.nodeName.toLowerCase(),e=document.createElement('img');e.addEventListener('load',function(){'img'===d?c(a).setAttribute('src',b):a.style.backgroundImage='url('+b+')'}),e.setAttribute('src',b),a.setAttribute(o,!0)}function e(a,c){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,f=b(e);if(c&&1<f){var g=c.replace(l,'@'+f+'x$1');d(a,g)}}function f(a,b,c){1<k&&d(a,c)}function g(b){return b?'function'==typeof b.forEach?b:a(b):'undefined'==typeof document?[]:a(document.querySelectorAll(n))}function h(a){return a.style.backgroundImage.replace(m,'$2')}function i(a){g(a).forEach(function(a){if(!a.getAttribute(o)){var b='img'===a.nodeName.toLowerCase(),c=b?a.getAttribute('src'):h(a),d=a.getAttribute('data-rjs'),g=!isNaN(parseInt(d,10));if(null===d)return;g?e(a,c,d):f(a,c,d)}})}var j='undefined'!=typeof window,k=Math.round(j?window.devicePixelRatio||1:1),l=/(\.[A-z]{3,4}\/?(\?.*)?)$/,m=/url\(('|")?([^)'"]+)('|")?\)/i,n='[data-rjs]',o='data-rjs-processed';return j&&(window.addEventListener('load',function(){i()}),window.retinajs=i),i});
//# sourceMappingURL=retina.min.js.map

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
"use strict";
var lastScroll = 0;

//check for browser os
var isMobile = false;
var isiPhoneiPad = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
}

function SetMegamenuPosition() {
    if ($(window).width() > 991) {
        setTimeout(function () {
            var totalHeight = $('nav.navbar').outerHeight();
            $('.mega-menu').css({top: totalHeight});
            if ($('.navbar-brand-top').length === 0)
                $('.dropdown.simple-dropdown > .dropdown-menu').css({top: totalHeight});
        }, 200);
    } else {
        $('.mega-menu').css('top', '');
        $('.dropdown.simple-dropdown > .dropdown-menu').css('top', '');
    }
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    } else  // If another browser, return 0
    {
        return false;
    }
}

//page title space
function setPageTitleSpace() {
    if ($('.navbar').hasClass('navbar-top') || $('nav').hasClass('navbar-fixed-top')) {
        if ($('.top-space').length > 0) {
            var top_space_height = $('.navbar').outerHeight();
            if ($('.top-header-area').length > 0) {
                top_space_height = top_space_height + $('.top-header-area').outerHeight();
            }
            $('.top-space').css('margin-top', top_space_height + "px");
        }
    }
}

//swiper button position in auto height slider
function setButtonPosition() {
    if ($(window).width() > 767 && $(".swiper-auto-height-container").length > 0) {
        var leftPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));
        var bottomPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));
        var bannerWidth = parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());
        $('.navigation-area').css({'left': bannerWidth + leftPosition + 'px', 'bottom': bottomPosition + 'px'});
    } else if ($(".swiper-auto-height-container").length > 0) {
        $('.navigation-area').css({'left': '', 'bottom': ''});
    }
}

$(window).on("scroll", init_scroll_navigate);
function init_scroll_navigate() {

    /*==============================================================
     One Page Main JS - START CODE
     =============================================================*/
    var menu_links = $(".navbar-nav li a");
    var scrollPos = $(document).scrollTop();
    scrollPos = scrollPos + 60;
    menu_links.each(function () {
        var currLink = $(this);
        var hasPos = currLink.attr("href").indexOf("#");
        if (hasPos > -1) {
            var res = currLink.attr("href").substring(hasPos);
            if ($(res).length > 0) {
                var refElement = $(res);
                if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
                    menu_links.not(currLink).removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            }
        }
    });

    /*==============================================================*/
    //background color slider Start
    /*==============================================================*/
    var $window = $(window),
            $body = $('.bg-background-fade'),
            $panel = $('.color-code');
    var scroll = $window.scrollTop() + ($window.height() / 2);
    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    });

    /* ===================================
     sticky nav Start
     ====================================== */
    var headerHeight = $('nav').outerHeight();
    if (!$('header').hasClass('no-sticky')) {
        if ($(document).scrollTop() >= headerHeight) {
            $('header').addClass('sticky');

        } else if ($(document).scrollTop() <= headerHeight) {
            $('header').removeClass('sticky');
            setTimeout(function () {
                setPageTitleSpace();
            }, 500);
        }
        SetMegamenuPosition();
    }

    /* ===================================
     header appear on scroll up
     ====================================== */
    var st = $(this).scrollTop();
    if (st > lastScroll) {
        $('.sticky').removeClass('header-appear');
        //  $('.dropdown.on').removeClass('on').removeClass('open').find('.dropdown-menu').fadeOut(100);
    } else
        $('.sticky').addClass('header-appear');
    lastScroll = st;
    if (lastScroll <= headerHeight)
        $('header').removeClass('header-appear');
}

/*==============================================================
 parallax text - START CODE
 ==============================================================*/
function parallax_text() {
    var window_width = $(window).width();
    if (window_width > 1024) {
        if ($('.swiper-auto-slide .swiper-slide').length !== 0) {
            $(document).on("mousemove", ".swiper-auto-slide .swiper-slide", function (e) {
                var positionX = e.clientX;
                var positionY = e.clientY;
                positionX = Math.round(positionX / 10) - 80;
                positionY = Math.round(positionY / 10) - 40;
                $(this).find('.parallax-text').css({'transform': 'translate(' + positionX + 'px,' + positionY + 'px)', 'transition-duration': '0s'});
            });

            $(document).on("mouseout", ".swiper-auto-slide .swiper-slide", function (e) {
                $('.parallax-text').css({'transform': 'translate(0,0)', 'transition-duration': '0.5s'});
            });
        }
    }
}

/*==============================================================*/
//Search - START CODE
/*==============================================================*/
function ScrollStop() {
    return false;
}
function ScrollStart() {
    return true;
}
function validationSearchForm() {
    var error = true;
    $('#search-header input[type=text]').each(function (index) {
        if (index === 0) {
            if ($(this).val() === null || $(this).val() === "") {
                $("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid red"});
                error = false;
            } else {
                $("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid #000"});
            }
        }
    });
    return error;
}

/*==============================================================
 //Parallax - START CODE
 ==============================================================*/
/*function stellarParallax() {
    if ($(window).width() > 1024) {
        $.stellar();
    } else {
        $.stellar('destroy');
        $('.parallax').css('background-position', '');
    }
}*/


/*==============================================================
 full screen START CODE
 ==============================================================*/
function fullScreenHeight() {
    var element = $(".full-screen");
    var $minheight = $(window).height();
    element.parents('section').imagesLoaded(function () {
        if ($(".top-space .full-screen").length > 0) {
            var $headerheight = $("header nav.navbar").outerHeight();
            $(".top-space .full-screen").css('min-height', $minheight - $headerheight);
        } else {
            element.css('min-height', $minheight);
        }
    });

    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);

    var sidebarNavHeight = $('.sidebar-nav-style-1').height() - $('.logo-holder').parent().height() - $('.footer-holder').parent().height() - 10;
    $(".sidebar-nav-style-1 .nav").css('height', (sidebarNavHeight));
    var style2NavHeight = parseInt($('.sidebar-part2').height() - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top')) - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom')) - parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));
    $(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height', (style2NavHeight));


}

function SetResizeContent() {
    //    all function call
    SetMegamenuPosition();
    setPageTitleSpace();
    setButtonPosition();
    parallax_text();
/*    stellarParallax();*/
    fullScreenHeight();
//    navClick();
}

/* ===================================
 START RESIZE
 ====================================== */
$(window).resize(function (event) {
    setTimeout(function () {
        SetResizeContent();
    }, 500);
    $('.menu-back-div').each(function () {
        $(this).attr('style', '');
    });
    $('.navbar-collapse').collapse('hide');

    event.preventDefault();
});

/* ===================================
 START READY
 ====================================== */
$(document).ready(function () {
    "use strict";

    // Active class to current menu for only html
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    var $hash = window.location.hash.substring(1);

    if ($hash) {
        $hash = "#" + $hash;
        pgurl = pgurl.replace($hash, "");
    } else {
        pgurl = pgurl.replace("#", "");
    }

    $(".nav li a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == pgurl + '.html') {
            $(this).parent().addClass("active");
            $(this).parents('li.dropdown').addClass("active");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ===================================
     swiper slider
     ====================================== */
    var swiperFull = new Swiper('.swiper-full-screen', {
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-full-screen-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            /*resize: function () {
                swiperFull.update();
            }*/
        }
    });

    var swiperAutoFade = new Swiper('.swiper-auto-fade', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        effect: 'fade',
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-auto-pagination',
            clickable: true
        },
        on: {
            resize: function () {
                swiperAutoFade.update();
            }
        }
    });

    var swiperSecond = new Swiper('.swiper-slider-second', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-second',
            clickable: true
        },
        on: {
            resize: function () {
                swiperSecond.update();
            }
        }
    });

    var swiperThird = new Swiper('.swiper-slider-third', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-third',
            clickable: true
        },
        on: {
            resize: function () {
                swiperThird.update();
            }
        }
    });

    var swiperNumber = new Swiper('.swiper-number-pagination', {
        allowTouchMove: true,
        preventClicks: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-number',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + pad((index + 1)) + '</span>';
            }
        },
        on: {
            resize: function () {
                swiperNumber.update();
            }
        }
    });

    var swiperVerticalPagination = new Swiper('.swiper-vertical-pagination', {
        allowTouchMove: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        mousewheel: {
            mousewheel: true,
            sensitivity: 1,
            releaseOnEdges: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-vertical',
            clickable: true
        },
        on: {
            resize: function () {
                swiperVerticalPagination.update();
            }
        }
    });

    var swiperClients = new Swiper('.swiper-slider-clients', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperClients.update();
            }
        }
    });

    var swiperClients2 = new Swiper('.swiper-slider-clients-second', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperClients2.update();
            }
        }
    });

    var swiperThreeSlides = new Swiper('.swiper-three-slides', {
        allowTouchMove: true,
        slidesPerView: 3,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-three-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-three-slide-next',
            prevEl: '.swiper-three-slide-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperThreeSlides.update();
            }
        }
    });

    var swiperFourSlides = new Swiper('.swiper-four-slides', {
        allowTouchMove: true,
        slidesPerView: 4,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-four-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
          /*  resize: function () {
                swiperFourSlides.update();
            }*/
        }
    });

    var swiperDemoHeaderStyle = new Swiper('.swiper-demo-header-style', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 4,
        preventClicks: true,
        slidesPerGroup: 4,
        pagination: {
            el: '.swiper-pagination-demo-header-style',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerGroup: 2,
                slidesPerView: 2
            },
            767: {
                slidesPerGroup: 1,
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperDemoHeaderStyle.update();
            }
        }
    });

    var $swiperAutoSlideIndex = 0;
    var swiperAutoSlide = new Swiper('.swiper-auto-slide', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
        preventClicks: false,
        observer: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        autoplay: {
            delay: 3000
        },
        mousewheel: {
            invert: false
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-next-style2',
            prevEl: '.swiper-prev-style2'
        },
        breakpoints: {
            1199: {
                spaceBetween: 60
            },
            960: {
                spaceBetween: 30
            },
            767: {
                spaceBetween: 15
            }
        },
        on: {
            resize: function () {
                swiperAutoSlide.update();
            }
        }
    });

    if ($(window).width() > 767) {
        var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
            allowTouchMove: true,
            slidesPerView: 'auto',
            grabCursor: true,
            preventClicks: false,
            spaceBetween: 30,
            keyboardControl: true,
            speed: 1000,
            pagination: {
                el: null
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true
            },
            mousewheel: {
                enable: true
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    var swiperAutoHieght = new Swiper('.swiper-auto-height-container', {
        allowTouchMove: true,
        effect: 'fade',
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-auto-height-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function () {
                swiperAutoHieght.update();
            }
        }
    });

    var swiperMultyRow = new Swiper('.swiper-multy-row-container', {
        allowTouchMove: true,
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-multy-row-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-portfolio-next',
            prevEl: '.swiper-portfolio-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperMultyRow.update();
            }
        }
    });

    var swiperBlog = new Swiper('.swiper-blog', {
        allowTouchMove: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        preventClicks: false,
        loop: true,
        loopedSlides: 3,
        pagination: {
            el: '.swiper-blog-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function () {
                swiperBlog.update();
            }
        }
    });

    var swiperPresentation = new Swiper('.swiper-presentation', {
        allowTouchMove: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        preventClicks: true,
        loop: true,
        loopedSlides: 6,
        pagination: {
            el: '.swiper-presentation-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            991: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                swiperPresentation.update();
            }
        }
    });

    var resizeId;

    $(window).resize(function () {
        if ($(".swiper-auto-slide").length > 0 && swiperAutoSlide) {
            $swiperAutoSlideIndex = swiperAutoSlide.activeIndex;
            swiperAutoSlide.detachEvents();
            swiperAutoSlide.destroy(true, false);
            swiperAutoSlide = undefined;
            $(".swiper-auto-slide .swiper-wrapper").css("transform", "").css("transition-duration", "");
            $(".swiper-auto-slide .swiper-slide").css("margin-right", "");

            setTimeout(function () {
                swiperAutoSlide = new Swiper('.swiper-auto-slide', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 80,
                    preventClicks: false,
                    mousewheelControl: true,
                    observer: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    autoplay: {
                        delay: 3000
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-next-style2',
                        prevEl: '.swiper-prev-style2'
                    },
                    breakpoints: {
                        1199: {
                            spaceBetween: 60
                        },
                        960: {
                            spaceBetween: 30
                        },
                        767: {
                            spaceBetween: 15
                        }
                    },
                    on: {
                        resize: function () {
                            swiperAutoSlide.update();
                        }
                    }
                });

                swiperAutoSlide.slideTo($swiperAutoSlideIndex, 1000, false);
            }, 1000);
        }

        if ($(".swiper-bottom-scrollbar-full").length > 0) {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 1000);
        }

        /* update all swiper on window resize */

        setTimeout(function () {
            /*if ($('.swiper-full-screen').length > 0 && swiperFull)
            {
                swiperFull.update();
            }*/

            if ($('.swiper-auto-fade').length > 0 && swiperAutoFade)
            {
                swiperAutoFade.update();
            }

            if ($('.swiper-slider-second').length > 0 && swiperSecond)
            {
                swiperSecond.update();
            }

            if ($('.swiper-slider-third').length > 0 && swiperThird)
            {
                swiperThird.update();
            }

            if ($('.swiper-number-pagination').length > 0 && swiperNumber)
            {
                swiperNumber.update();
            }

            if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination)
            {
                swiperVerticalPagination.update();
            }

            if ($('.swiper-slider-clients').length > 0 && swiperClients)
            {
                swiperClients.update();
            }

            if ($('.swiper-slider-clients-second').length > 0 && swiperClients2)
            {
                swiperClients2.update();
            }

            if ($('.swiper-three-slides').length > 0 && swiperThreeSlides)
            {
                swiperThreeSlides.update();
            }

           /* if ($('.swiper-four-slides').length > 0 && swiperFourSlides)
            {
                swiperFourSlides.update();
            }*/

            if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle)
            {
                swiperDemoHeaderStyle.update();
            }

            if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide)
            {
                swiperAutoSlide.update();
            }

            if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght)
            {
                swiperAutoHieght.update();
            }

            if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow)
            {
                swiperMultyRow.update();
            }

            if ($('.swiper-blog').length > 0 && swiperBlog)
            {
                swiperBlog.update();
            }

            if ($('.swiper-presentation').length > 0 && swiperPresentation)
            {
                swiperPresentation.update();
            }

        }, 500);
        if (isIE()) {
            setTimeout(function () {
                /*if ($('.swiper-full-screen').length > 0 && swiperFull)
                {
                    swiperFull.update();
                }
*/
                if ($('.swiper-auto-fade').length > 0 && swiperAutoFade)
                {
                    swiperAutoFade.update();
                }

                if ($('.swiper-slider-second').length > 0 && swiperSecond)
                {
                    swiperSecond.update();
                }

                if ($('.swiper-slider-third').length > 0 && swiperThird)
                {
                    swiperThird.update();
                }

                if ($('.swiper-number-pagination').length > 0 && swiperNumber)
                {
                    swiperNumber.update();
                }

                if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination)
                {
                    swiperVerticalPagination.update();
                }

                if ($('.swiper-slider-clients').length > 0 && swiperClients)
                {
                    swiperClients.update();
                }

                if ($('.swiper-slider-clients-second').length > 0 && swiperClients2)
                {
                    swiperClients2.update();
                }

                if ($('.swiper-three-slides').length > 0 && swiperThreeSlides)
                {
                    swiperThreeSlides.update();
                }

             /*   if ($('.swiper-four-slides').length > 0 && swiperFourSlides)
                {
                    swiperFourSlides.update();
                }*/

                if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle)
                {
                    swiperDemoHeaderStyle.update();
                }

                if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide)
                {
                    swiperAutoSlide.update();
                }

                if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght)
                {
                    swiperAutoHieght.update();
                }

                if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow)
                {
                    swiperMultyRow.update();
                }

                if ($('.swiper-blog').length > 0 && swiperBlog)
                {
                    swiperBlog.update();
                }

                if ($('.swiper-presentation').length > 0 && swiperPresentation)
                {
                    swiperPresentation.update();
                }

            }, 500);
        }

    });

    function doneResizing() {
        if (swiperBottomScrollbarFull) {
            swiperBottomScrollbarFull.detachEvents();
            swiperBottomScrollbarFull.destroy(true, true);
            swiperBottomScrollbarFull = undefined;
        }

        $(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform", "").css("transition-duration", "");
        $(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right", "");
        $('.swiper-bottom-scrollbar-full .swiper-wrapper').removeAttr('style');
        $('.swiper-bottom-scrollbar-full .swiper-slide').removeAttr('style');

        if ($(window).width() > 767) {
            setTimeout(function () {
                swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    grabCursor: true,
                    preventClicks: false,
                    spaceBetween: 30,
                    keyboardControl: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    mousewheel: {
                        enable: true
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
            }, 500);
        }
    }

    /*==============================================================
     smooth scroll
     ==============================================================*/

    var scrollAnimationTime = 1200, scrollAnimation = 'easeInOutExpo';
    $(document).on('click.smoothscroll', 'a.scrollto', function (event) {
        event.preventDefault();
        var target = this.hash;
        if ($(target).length != 0) {
            $('html, body').stop()
                    .animate({
                        'scrollTop': $(target)
                                .offset()
                                .top
                    }, scrollAnimationTime, scrollAnimation, function () {
                        window.location.hash = target;
                    });
        }
    });

    /*==============================================================
     humburger menu one page navigation
     ==============================================================*/

    if ($('.full-width-pull-menu').length > 0) {
        $(document).on('click', '.full-width-pull-menu .inner-link', function (e) {
            //$('body').removeClass('overflow-hidden position-fixed');
            $(".full-width-pull-menu .close-button-menu").trigger("click");
            var _this = $(this);
            setTimeout(function () {
                var target = _this.attr("href");
                if ($(target).length > 0) {
                    $('html, body').stop()
                            .animate({
                                'scrollTop': $(target).offset().top
                            });
                }
            }, 500);
        });
    }

    // Inner links
    if ($('.navbar-top').length > 0 || $('.navbar-scroll-top').length > 0 || $('.navbar-top-scroll').length > 0) {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: 0
        });
    } else {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: -59
        });
    }

    $('.section-link').smoothScroll({
        speed: 900,
        offset: 1
    });

    /*==============================================================*/
    //PieChart For Onepage - START CODE
    /*==============================================================*/
    if ($('.chart1').length > 0) {
        $('.chart1').appear();
        $('.chart1').easyPieChart({
            barColor: '#929292',
            trackColor: '#d9d9d9',
            scaleColor: false,
            easing: 'easeOutBounce',
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 150, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart1', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart2').length > 0) {
        $('.chart2').appear();
        $('.chart2').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '#c7c7c7',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 2, //12
            size: 120, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart2', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart3').length > 0) {
        $('.chart3').appear();
        $('.chart3').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 140, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart3', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }


    /*==============================================================
     mega menu width
     ===============================================================*/
    $("ul.mega-menu-full").each(function (idx, elm) {
        var megaMenuWidth = 0;
        $(this).children('li').each(function (idx, elm) {
            var LIheight = 0;
            megaMenuWidth += $(this).outerWidth();
        });
        $(this).width(megaMenuWidth + 95);
        megaMenuWidth = 0;
    });
    /*==============================================================
     form to email
     ==============================================================*/
    $("#success-subscribe-newsletter").hide();
    $("#success-subscribe-newsletter2").hide();
    $("#success-contact-form").hide();
    $("#success-project-contact-form").hide();
    $("#success-contact-form-2").hide();
    $("#success-contact-form-3").hide();
    $("#success-project-contact-form-4").hide();

    //Subscribe newsletter form
    $(document).on("click", '#button-subscribe-newsletter', function () {
        var error = ValidationsubscribenewsletterForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter").html(result);
                    $("#success-subscribe-newsletter").fadeIn("slow");
                    $('#success-subscribe-newsletter').delay(4000).fadeOut("slow");
                }
            });
        }
    });

    function ValidationsubscribenewsletterForm() {
        var error = true;
        $('#subscribenewsletterform input[type=text]').each(function (index) {
            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#subscribenewsletterform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    $(document).on("click", '#button-subscribe-newsletter2', function () {
        var error = ValidationsubscribenewsletterForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform2").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter2").html(result);
                    $("#success-subscribe-newsletter2").fadeIn("slow");
                    $('#success-subscribe-newsletter2').delay(4000).fadeOut("slow");


                }
            });
        }
    });

    function ValidationsubscribenewsletterForm2() {
        var error = true;
        $('#subscribenewsletterform2 input[type=text]').each(function (index) {
            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#subscribenewsletterform2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form
    $(document).on("click", '#contact-us-button', function () {
        var error = ValidationContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form").html(result);
                    $("#success-contact-form").fadeIn("slow");
                    $('#success-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm() {
        var error = true;
        $('#contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Contact us form 2
    $('#contact-us-button-2').on("click", function () {
        var error = ValidationContactForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-2").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-2").html(result);
                    $("#success-contact-form-2").fadeIn("slow");
                    $('#success-contact-form-2').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm2() {
        var error = true;
        $('#contact-form-2 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form-2").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form 3

    $(document).on("click", '#contact-us-button-3', function () {
        var error = ValidationContactForm3();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-3").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-3").html(result);
                    $("#success-contact-form-3").fadeIn("slow");
                    $('#success-contact-form-3').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm3() {
        var error = true;
        $('#contact-form-3 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-3").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contact-form-3").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Project Contact us form
    $(document).on("click", '#project-contact-us-button', function (e) {
        e.preventDefault();
        var error = ValidationProjectContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form").html(result);
                    $("#success-project-contact-form").fadeIn("slow");
                    $('#success-project-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm() {
        var error = true;
        $('#project-contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 2) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#project-contact-form").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Project Contact us form 2
    $(document).on("click", '#project-contact-us-4-button', function () {
        var error = ValidationProjectContactForm4();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form-4").serialize(),
                success: function (result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form-4").html(result);
                    $("#success-project-contact-form-4").fadeIn("slow");
                    $('#success-project-contact-form-4').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm4() {
        var error = true;
        $('#project-contact-form-4 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").removeClass("required-error");
                }
            } else if (index == 2) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
        });
        return error;
    }

    /*==============================================================
     wow animation - on scroll
     ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });
    /* ===================================
     left nav
     ====================================== */
    $(document).on('click', '.right-menu-button', function (e) {
        $('body').toggleClass('left-nav-on');
    });

    /*==============================================================*/
    //    hamburger menu
    /*==============================================================*/
    $(document).on('click', '.btn-hamburger', function () {
        $('.hamburger-menu').toggleClass('show-menu');
        $('body').removeClass('show-menu');
    });

    /*==============================================================*/
    //sidebar nav open
    /*==============================================================*/
    $(document).on('click', '#mobileToggleSidenav', function () {
        $(this).closest('nav').toggleClass('sidemenu-open');
    });

    /*=================================
     //justified Gallery
     =================================*/
    $(document).imagesLoaded(function () {
        if ($(".justified-gallery").length > 0) {
            $(".justified-gallery").justifiedGallery({
                rowHeight: 400,
                maxRowHeight: false,
                captions: true,
                margins: 10,
                waitThumbnailsLoad: true
            });
        }
    });

    $('.atr-nav').on("click", function () {
        $(".atr-div").append("<a class='close-cross' href='#'>X</a>");
        $(".atr-div").animate({
            width: "toggle"
        });
    });

    $('.close-cross').on("click", function () {
        $(".atr-div").hide();
    });

    var menuRight = document.getElementById('cbp-spmenu-s2'),
            showRightPush = document.getElementById('showRightPush'),
            body = document.body;
    if (showRightPush) {
        showRightPush.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight)
                classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    var test = document.getElementById('close-pushmenu');
    if (test) {
        test.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight)
                classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    //blog page header animation
    $(".blog-header-style1 li").hover(function () {
        $('.blog-header-style1 li.blog-column-active').removeClass('blog-column-active');
        $(this).addClass('blog-column-active');
    }, function () {
        $(this).removeClass('blog-column-active');
        $('.blog-header-style1 li:first-child').addClass('blog-column-active');
    });

    /*==============================================================*/
    //big menu open close start
    /*==============================================================*/
    $('.big-menu-open').on("click", function () {
        $('.big-menu-right').addClass("open");
    });

    $('.big-menu-close').on("click", function () {
        $('.big-menu-right').removeClass("open");
    });

    /*==============================================================
     instagramfeed
     ==============================================================*/
    if ($('#instaFeed-style1').length != 0) {
        var instaFeedStyle1 = new Instafeed({
            target: 'instaFeed-style1',
            get: 'user',
            userId: 5640046896,
            limit: '8',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<div class="col-lg-3 col-md-6 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'
        });
        instaFeedStyle1.run();
    }

    if ($('#instaFeed-aside').length != 0) {
        var instaFeedAside = new Instafeed({
            target: 'instaFeed-aside',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'
        });
        instaFeedAside.run();
    }

    if ($('#instaFeed-footer').length != 0) {
        var instaFeedFooter = new Instafeed({
            target: 'instaFeed-footer',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'
        });
        instaFeedFooter.run();
    }


    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    $('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').on("click", function (e) {
        if ($(this).parent('li').find('ul.dropdown-menu').length > 0) {
            if ($(this).parent('li').hasClass('show')) {
                $(this).parent('li').removeClass('show');
            } else {
                $(this).parent('li').addClass('show');
            }
        }
    });

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/
    $('.accordion-style1 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.accordion-style1 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $(document).on('click', '.nav.navbar-nav a.inner-link', function (e) {
        $(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        var $this = $(this);
        $(this).parents('.navbar-collapse').collapse('hide');

        setTimeout(function () {
            $this.addClass('active');
        }, 1000);
    });

    $('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/
    $('.toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });

    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fas fa-angle-down"></i>');
    });

    /* ===================================
     blog hover box
     ====================================== */
    $(document).on("mouseenter", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideDown(300);
    });
    $(document).on("mouseleave", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideUp(300);
    });
    SetResizeContent();

    var $allNonRatinaImages = $("img:not([data-rjs])");
    $allNonRatinaImages.attr('data-no-retina', '');

    /*==============================================================*/
    //demo button  - START CODE
    /*==============================================================*/
    /*var $buythemediv = '<div class="buy-theme alt-font md-display-none"><a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank"><i class="ti-shopping-cart"></i><span>Buy Theme</span></a></div><div class="all-demo alt-font md-display-none"><a href="mailto:info@themezaa.com?subject=POFO - Creative Agency, Corporate and Portfolio Multi-purpose Template - Quick Question"><i class="ti-email"></i><span>Quick Question?</span></a></div>';
    $('body').append($buythemediv);*/

    $(document).on("touchstart", ".sidebar-wrapper", function () {
        clearOpen();
    });

    var getNav = $("nav.navbar.bootsnav"), getIn = getNav.find("ul.nav").data("in"), getOut = getNav.find("ul.nav").data("out");
    function clearOpen() {
        $('li.dropdown').removeClass("on").removeClass("show");
        $(".dropdown-menu").stop().fadeOut('fast');
        $(".dropdown-menu").removeClass(getIn);
        $(".dropdown-menu").addClass(getOut);
    }

});
/* ===================================
 END READY
 ====================================== */

/* ===================================
 START Page Load
 ====================================== */
$(document).on('load', function () {
    var hash = window.location.hash.substr(1);
    if (hash != "") {
        setTimeout(function () {
            $(document).imagesLoaded(function () {
                var scrollAnimationTime = 1200,
                        scrollAnimation = 'easeInOutExpo';
                var target = '#' + hash;
                if ($(target).length > 0) {

                    $('html, body').stop()
                            .animate({
                                'scrollTop': $(target).offset().top
                            }, scrollAnimationTime, scrollAnimation, function () {
                                window.location.hash = target;
                            });
                }
            });
        }, 500);
    }

    fullScreenHeight();
});
