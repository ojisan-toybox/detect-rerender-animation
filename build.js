(()=>{"use strict";var e,n,t,_,r,o={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function a(e,n,t){var _,r,o,l=arguments,i={};for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(l[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return s(e,i,_,r,null)}function s(n,t,_,r,o){var l={type:n,props:t,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o};return null==o&&(l.__v=l),null!=e.vnode&&e.vnode(l),l}function f(e){return e.children}function p(e,n){this.props=e,this.context=n}function h(e,n){if(null==n)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?h(e):null}function d(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return d(e)}}function v(r){(!r.__d&&(r.__d=!0)&&n.push(r)&&!y.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||t)(y)}function y(){for(var e;y.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,r,o,l,i;e.__d&&(l=(o=(n=e).__v).__e,(i=n.__P)&&(t=[],(_=u({},o)).__v=_,r=C(i,o,_,n.__n,void 0!==i.ownerSVGElement,null!=o.__h?[l]:null,t,null==l?h(o):l,o.__h),N(t,o),r!=l&&d(o)))}))}function m(e,n,t,_,r,i,u,a,p,d){var v,y,m,g,k,w,S,P=_&&_.__k||l,A=P.length;for(p==o&&(p=null!=u?u[0]:A?h(_,0):null),t.__k=[],v=0;v<n.length;v++)if(null!=(g=t.__k[v]=null==(g=n[v])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?s(null,g,null,null,g):Array.isArray(g)?s(f,{children:g},null,null,null):null!=g.__e||null!=g.__c?s(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(m=P[v])||m&&g.key==m.key&&g.type===m.type)P[v]=void 0;else for(y=0;y<A;y++){if((m=P[y])&&g.key==m.key&&g.type===m.type){P[y]=void 0;break}m=null}k=C(e,g,m=m||o,r,i,u,a,p,d),(y=g.ref)&&m.ref!=y&&(S||(S=[]),m.ref&&S.push(m.ref,null,g),S.push(y,g.__c||k,g)),null!=k?(null==w&&(w=k),p=b(e,g,m,P,u,k,p),d||"option"!=t.type?"function"==typeof t.type&&(t.__d=p):e.value=""):p&&m.__e==p&&p.parentNode!=e&&(p=h(m))}if(t.__e=w,null!=u&&"function"!=typeof t.type)for(v=u.length;v--;)null!=u[v]&&c(u[v]);for(v=A;v--;)null!=P[v]&&U(P[v],P[v]);if(S)for(v=0;v<S.length;v++)E(S[v],S[++v],S[++v])}function g(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){g(e,n)})):n.push(e)),n}function b(e,n,t,_,r,o,l){var i,u,c;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(r==t||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(u=l,c=0;(u=u.nextSibling)&&c<_.length;c+=2)if(u==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function k(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||i.test(n)?t:t+"px"}function w(e,n,t,_,r){var o,l,i;if(r&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||k(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||k(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(o=n!==(n=n.replace(/Capture$/,"")),(l=n.toLowerCase())in e&&(n=l),n=n.slice(2),e.l||(e.l={}),e.l[n+o]=t,i=o?P:S,t?_||e.addEventListener(n,i,o):e.removeEventListener(n,i,o)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function S(n){this.l[n.type+!1](e.event?e.event(n):n)}function P(n){this.l[n.type+!0](e.event?e.event(n):n)}function A(e,n,t){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&A(r,n,t),n=b(t,r,r,e.__k,null,r.__e,n),"function"==typeof e.type&&(e.__d=n)))}function C(n,t,_,r,o,l,i,c,a){var s,h,d,v,y,g,b,k,w,S,P,C=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(a=_.__h,c=t.__e=_.__e,t.__h=null,l=[c]),(s=e.__b)&&s(t);try{e:if("function"==typeof C){if(k=t.props,w=(s=C.contextType)&&r[s.__c],S=s?w?w.props.value:s.__:r,_.__c?b=(h=t.__c=_.__c).__=h.__E:("prototype"in C&&C.prototype.render?t.__c=h=new C(k,S):(t.__c=h=new p(k,S),h.constructor=C,h.render=H),w&&w.sub(h),h.props=k,h.state||(h.state={}),h.context=S,h.__n=r,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=u({},h.__s)),u(h.__s,C.getDerivedStateFromProps(k,h.__s))),v=h.props,y=h.state,d)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,S),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,S)||t.__v===_.__v){h.props=k,h.state=h.__s,t.__v!==_.__v&&(h.__d=!1),h.__v=t,t.__e=_.__e,t.__k=_.__k,h.__h.length&&i.push(h),A(t,c,n);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,S),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,y,g)}))}h.context=S,h.props=k,h.state=h.__s,(s=e.__r)&&s(t),h.__d=!1,h.__v=t,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(r=u(u({},r),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(v,y)),P=null!=s&&s.type==f&&null==s.key?s.props.children:s,m(n,Array.isArray(P)?P:[P],t,_,r,o,l,i,c,a),h.base=t.__e,t.__h=null,h.__h.length&&i.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==l&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=x(_.__e,t,_,r,o,l,i,a);(s=e.diffed)&&s(t)}catch(n){t.__v=null,(a||null!=l)&&(t.__e=c,t.__h=!!a,l[l.indexOf(c)]=null),e.__e(n,t,_)}return t.__e}function N(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function x(e,n,t,_,r,i,u,c){var a,s,f,p,h,d=t.props,v=n.props;if(r="svg"===n.type||r,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===n.type?3===s.nodeType:s.localName===n.type)||e==s)){e=s,i[a]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),i=null,c=!1}if(null===n.type)d===v||c&&e.data===v||(e.data=v);else{if(null!=i&&(i=l.slice.call(e.childNodes)),f=(d=t.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||w(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||w(e,o,n[o],t[o],_)})(e,v,d,r,c),p?n.__k=[]:(a=n.props.children,m(e,Array.isArray(a)?a:[a],n,t,_,"foreignObject"!==n.type&&r,i,u,o,c)),c||("value"in v&&void 0!==(a=v.value)&&(a!==e.value||"progress"===n.type&&!a)&&w(e,"value",a,d.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&w(e,"checked",a,d.checked,!1))}return e}function E(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function U(n,t,_){var r,o,l;if(e.unmount&&e.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||E(r,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){e.__e(n,t)}r.base=r.__P=null}if(r=n.__k)for(l=0;l<r.length;l++)r[l]&&U(r[l],t,_);null!=o&&c(o)}function H(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,_,r,o=n.__h;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return n.__h=o,t.__E=t}catch(n){e=n}throw e}},p.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},t),this.props)),e&&u(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),v(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},p.prototype.render=f,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,r=o;var O,T,L,W=0,j=[],D=e.__r,M=e.diffed,F=e.__c,R=e.unmount;function $(n,t){e.__h&&e.__h(T,n,W||t),W=0;var _=T.__H||(T.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function q(e){return W=1,function(e,n,t){var _=$(O++,2);return _.t=e,_.__c||(_.__=[t?t(n):V(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}],_.__c=T),_.__}(V,e)}function z(){j.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(I),n.__H.__h.forEach(Z),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}})),j=[]}e.__r=function(e){D&&D(e),O=0;var n=(T=e.__c).__H;n&&(n.__h.forEach(I),n.__h.forEach(Z),n.__h=[])},e.diffed=function(n){M&&M(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==j.push(t)&&L===e.requestAnimationFrame||((L=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),B&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);B&&(n=requestAnimationFrame(t))})(z))},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(I),n.__h=n.__h.filter((function(e){return!e.__||Z(e)}))}catch(_){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(_,n.__v)}})),F&&F(n,t)},e.unmount=function(n){R&&R(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(I)}catch(n){e.__e(n,t.__v)}};var B="function"==typeof requestAnimationFrame;function I(e){"function"==typeof e.__c&&e.__c()}function Z(e){e.__c=e.__()}function V(e,n){return"function"==typeof n?n(e):n}function G(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var _ in n)if("__source"!==_&&e[_]!==n[_])return!0;return!1}function J(e){this.props=e}(J.prototype=new p).isPureReactComponent=!0,J.prototype.shouldComponentUpdate=function(e,n){return G(this.props,e)||G(this.state,n)};var K=e.__b;e.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),K&&K(e)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var Q=e.__e;function X(e){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),(e=function(e,n){for(var t in n)e[t]=n[t];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(X)),e}function Y(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(Y)),e}function ee(){this.__u=0,this.t=null,this.__b=null}function ne(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function te(){this.u=null,this.o=null}e.__e=function(e,n,t){if(e.then)for(var _,r=n;r=r.__;)if((_=r.__c)&&_.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),_.__c(e,n.__c);Q(e,n,t)},(ee.prototype=new p).__c=function(e,n){var t=this;null==t.t&&(t.t=[]),t.t.push(n);var _=ne(t.__v),r=!1,o=function(){r||(r=!0,n.componentWillUnmount=n.__c,_?_(l):l())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){o(),n.__c&&n.__c()};var l=function(){var e;if(!--t.__u)for(t.__v.__k[0]=Y(t.state.__e),t.setState({__e:t.__b=null});e=t.t.pop();)e.forceUpdate()},i=t.__v;i&&!0===i.__h||t.__u++||t.setState({__e:t.__b=t.__v.__k[0]}),e.then(o,o)},ee.prototype.componentWillUnmount=function(){this.t=[]},ee.prototype.render=function(e,n){this.__b&&(this.__v.__k&&(this.__v.__k[0]=X(this.__b)),this.__b=null);var t=n.__e&&a(f,null,e.fallback);return t&&(t.__h=null),[a(f,null,n.__e?null:e.children),t]};var _e=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(te.prototype=new p).__e=function(e){var n=this,t=ne(n.__v),_=n.o.get(e);return _[0]++,function(r){var o=function(){n.props.revealOrder?(_.push(r),_e(n,e,_)):r()};t?t(o):o()}},te.prototype.render=function(e){this.u=null,this.o=new Map;var n=g(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},te.prototype.componentDidUpdate=te.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){_e(e,t,n)}))};var re="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,oe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,le="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(p.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var ie=e.event;function ue(){}function ce(){return this.cancelBubble}function ae(){return this.defaultPrevented}e.event=function(e){return ie&&(e=ie(e)),e.persist=ue,e.isPropagationStopped=ce,e.isDefaultPrevented=ae,e.nativeEvent=e};var se={configurable:!0,get:function(){return this.class}},fe=e.vnode;e.vnode=function(e){var n=e.type,t=e.props,_=t;if("string"==typeof n){for(var r in _={},t){var o=t[r];"defaultValue"===r&&"value"in t&&null==t.value?r="value":"download"===r&&!0===o?o="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+n)&&!le.test(t.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():oe.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),_[r]=o}"select"==n&&_.multiple&&Array.isArray(_.value)&&(_.value=g(t.children).forEach((function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)}))),e.props=_}n&&t.class!=t.className&&(se.enumerable="className"in t,null!=t.className&&(_.class=t.className),Object.defineProperty(_,"className",se)),e.$$typeof=re,fe&&fe(e)};var pe=e.__r;e.__r=function(e){pe&&pe(e),e.__c};let he,de,ve={data:""},ye=e=>{try{let n=e?e.querySelector("#_goober"):self._goober;return n||(n=(e||document.head).appendChild(document.createElement("style")),n.innerHTML=" ",n.id="_goober"),n.firstChild}catch(e){}return e||ve},me=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,ge=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,be=(e,n)=>{let t,_="",r="",o="";for(let l in e){let i=e[l];"object"==typeof i?(t=n?n.replace(/([^,])+/g,(e=>l.replace(/([^,])+/g,(n=>/&/g.test(n)?n.replace(/&/g,e):e?e+" "+n:n)))):l,r+="@"==l[0]?"f"==l[1]?be(i,l):l+"{"+be(i,"k"==l[1]?"":n)+"}":be(i,t)):"@"==l[0]&&"i"==l[1]?_=l+" "+i+";":o+=be.p?be.p(l.replace(/[A-Z]/g,"-$&").toLowerCase(),i):l.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+i+";"}return o[0]?(t=n?n+"{"+o+"}":o,_+t+r):_+r},ke={},we=e=>{let n="";for(let t in e)n+=t+("object"==typeof e[t]?we(e[t]):e[t]);return n},Se=(e,n,t,_,r)=>{let o="object"==typeof e?we(e):e,l=ke[o]||(ke[o]="go"+o.split("").reduce(((e,n)=>101*e+n.charCodeAt(0)>>>0),11));if(!ke[l]){let n="object"==typeof e?e:(e=>{let n,t=[{}];for(;n=me.exec(e.replace(ge,""));)n[4]&&t.shift(),n[3]?t.unshift(t[0][n[3]]=t[0][n[3]]||{}):n[4]||(t[0][n[1]]=n[2]);return t[0]})(e);ke[l]=be(r?{["@keyframes "+l]:n}:n,t?"":"."+l)}return((e,n,t)=>{n.data.indexOf(e)<0&&(n.data=t?e+n.data:n.data+e)})(ke[l],n,_),l},Pe=(e,n,t)=>e.reduce(((e,_,r)=>{let o=n[r];if(o&&o.call){let e=o(t),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=n?"."+n:e&&"object"==typeof e?e.props?"":be(e,""):e}return e+_+(null==o?"":o)}),"");function Ae(e){let n=this||{},t=e.call?e(n.p):e;return Se(t.map?Pe(t,[].slice.call(arguments,1),n.p):t,ye(n.target),n.g,n.o,n.k)}Ae.bind({g:1}),Ae.bind({k:1});var Ce,Ne,xe,Ee=function(){return(Ee=Object.assign||function(e){for(var n,t=1,_=arguments.length;t<_;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},Ue=function(e,n){let t=this||{};return function(){let n=arguments;function _(r,o){let l=Object.assign({},r),i=l.className||_.className;return t.p=Object.assign({theme:de&&de()},l),t.o=/\s*go[0-9]+/g.test(i),l.className=Ae.apply(t,n)+(i?" "+i:""),he(l.as||e,l)}return _}}((function(e){return a("div",{className:e.className,key:e.cnt},a("span",null,"cnt: ",e.cnt))}))(Ce||(Ne=["\n  @keyframes rendered {\n    0% {\n      background-color: rgb(255, 255, 0, 1);\n    }\n    100% {\n      background-color: rgb(255, 255, 0, 0);\n    }\n  }\n\n  span {\n    animation: rendered 1s ease;\n    animation-iteration-count: 1;\n  }\n"],xe=["\n  @keyframes rendered {\n    0% {\n      background-color: rgb(255, 255, 0, 1);\n    }\n    100% {\n      background-color: rgb(255, 255, 0, 0);\n    }\n  }\n\n  span {\n    animation: rendered 1s ease;\n    animation-iteration-count: 1;\n  }\n"],Object.defineProperty?Object.defineProperty(Ne,"raw",{value:xe}):Ne.raw=xe,Ce=Ne)),He=function(e){return a(Ue,Ee({},{cnt:e.cnt}))};!function(e,n,t){be.p=void 0,he=e,de=void 0}(a),function(n,t,_){var i,u,c;e.__&&e.__(n,t),u=(i=_===r)?null:_&&_.__k||t.__k,n=a(f,null,[n]),c=[],C(t,(i?t:_||t).__k=n,u||o,o,void 0!==t.ownerSVGElement,_&&!i?[_]:u?null:t.childNodes.length?l.slice.call(t.childNodes):null,c,_||o,i),N(c,n)}(a((function(){var e=q(0),n=e[0],t=e[1];return a("div",null,a(He,{cnt:n}),a("button",{onClick:function(){return t(n+1)}},"count up"))}),null),document.body)})();