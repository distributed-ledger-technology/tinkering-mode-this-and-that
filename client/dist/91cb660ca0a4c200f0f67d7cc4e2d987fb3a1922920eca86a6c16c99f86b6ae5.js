export default(async()=>{function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),i=l?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&i(d)}let f=!1;function h(t,e,n,o){for(;t<e;){const s=t+(e-t>>1);n(s)<=o?t=s+1:e=s}return t}function p(t,e){f?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const a=h(1,s+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[a]+1;const r=a+1;n[r]=t,s=Math.max(r,s)}const a=[],r=[];let l=e.length-1;for(let t=n[s]+1;0!=t;t=o[t-1]){for(a.push(e[t-1]);l>=t;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);a.reverse(),r.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<r.length;e++){for(;n<a.length&&r[e].claim_order>=a[n].claim_order;)n++;const o=n<a.length?a[n]:null;t.insertBefore(r[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){f&&!n?p(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function $(){return E(" ")}function b(){return E("")}function T(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return""===t?null:+t}function w(t){return Array.from(t.childNodes)}function N(t,e,n,o,s=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a))return n(a),t.splice(o,1),s||(t.claim_info.last_index=o),a}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a))return n(a),t.splice(o,1),s?t.claim_info.last_index--:t.claim_info.last_index=o,a}return o()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function P(t,e,n,o){return N(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const s=t.attributes[o];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):y(e)))}function I(t,e){return N(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>E(e)),!0)}function A(t){return I(t," ")}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function B(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const K=new Set;let R,k=0;function C(t,e,n,o,s,a,r,l=0){const c=16.666/o;let i="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*a(t);i+=100*t+`%{${r(o,1-o)}}\n`}const u=i+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=t.ownerDocument;K.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${s}ms 1 both`,k+=1,d}function L(t){R=t}function z(t){(function(){if(!R)throw new Error("Function called outside component initialization");return R})().$$.on_mount.push(t)}const O=[],j=[],F=[],H=[],U=Promise.resolve();let G=!1;function q(t){F.push(t)}function M(t){H.push(t)}let Y=!1;const V=new Set;function X(){if(!Y){Y=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];L(e),J(e.$$)}for(L(null),O.length=0;j.length;)j.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];V.has(e)||(V.add(e),e())}F.length=0}while(O.length);for(;H.length;)H.pop()();G=!1,Y=!1,V.clear()}}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let Q;function W(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,void 0),n}(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||s(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function st(t,e,n,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const at={duration:0};function rt(n,o,r,l){let f=o(n,r),h=l?0:1,p=null,g=null,m=null;function v(){m&&function(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),k-=s,k||i((()=>{k||(K.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),K.clear())})))}(n,m)}function y(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function E(o){const{delay:a=0,duration:r=300,easing:l=e,tick:E=t,css:$}=f||at,b={start:c()+a,b:o};o||(b.group=tt,tt.r+=1),p||g?g=b:($&&(v(),m=C(n,h,o,r,a,l,$)),o&&E(0,1),p=y(b,r),q((()=>W(n,o,"start"))),function(t){let e;0===u.size&&i(d),new Promise((n=>{u.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(p=y(g,r),g=null,W(n,p.b,"start"),$&&(v(),m=C(n,h,p.b,p.duration,0,l,f.css))),p)if(t>=p.end)E(h=p.b,1-h),W(n,p.b,"end"),g||(p.b?v():--p.group.r||s(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;h=p.a+p.d*l(e/p.duration),E(h,1-h)}return!(!p&&!g)})))}return{run(t){a(f)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{f=f(),E(t)})):E(t)},end(){v(),p=g=null}}}function lt(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function ct(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ut(t,e,o,r){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,o),r||q((()=>{const e=c.map(n).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(q)}function dt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(e,n,a,r,l,c,i=[-1]){const u=R;L(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:i,skip_bound:!1};let h=!1;if(d.ctx=a?a(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&function(t,e){-1===t.$$.dirty[0]&&(O.push(t),G||(G=!0,U.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){f=!0;const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&ot(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),f=!1,X()}L(u)}class ht{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var pt;!function(t){t[t.ASCENDING=0]="ASCENDING",t[t.DESCENDING=1]="DESCENDING"}(pt||(pt={}));class gt{static options=[];static sort(t,e){return gt.options=e,t.sort(gt.compare)}static compare(t,e){if(gt.options===pt.ASCENDING){if(t<e)return-1;if(t>e)return 1}else if(gt.options===pt.DESCENDING){if(t>e)return-1;if(t<e)return 1}else for(const n of gt.options)if(t[n.fieldName]!==e[n.fieldName])if(n.direction===pt.ASCENDING){if(t[n.fieldName]<e[n.fieldName])return-1;if(t[n.fieldName]>e[n.fieldName])return 1}else if(n.direction===pt.DESCENDING){if(t[n.fieldName]>e[n.fieldName])return-1;if(t[n.fieldName]<e[n.fieldName])return 1}return 0}}function mt(t,e,n){const o=t.slice();return o[7]=e[n],o}function vt(t){let e,n,o,s,a,r,l,c,i,u,d,f,h,b,T,x,N,S,B,K,R,k,C,L,z,O,j,F,H,U=t[2].length+"",G=!t[1]&&yt(t),q=t[2],M=[];for(let e=0;e<q.length;e+=1)M[e]=Et(mt(t,q,e));return{c(){e=y("h2"),n=E("Last "),o=E(U),s=E(" Deals"),a=$(),G&&G.c(),r=$(),l=y("p"),c=y("br"),i=$(),u=y("table"),d=y("tr"),f=y("th"),h=E("UTC Time"),b=$(),T=y("th"),x=E("Side"),N=$(),S=y("th"),B=E("Reduce Only"),K=$(),R=y("th"),k=E("Reason"),C=$(),L=y("th"),z=E("Asset"),O=$(),j=y("th"),F=E("Equity Before This Deal"),H=$();for(let t=0;t<M.length;t+=1)M[t].c();this.h()},l(t){e=P(t,"H2",{});var p=w(e);n=I(p,"Last "),o=I(p,U),s=I(p," Deals"),p.forEach(m),a=A(t),G&&G.l(t),r=A(t),l=P(t,"P",{});var g=w(l);c=P(g,"BR",{}),g.forEach(m),i=A(t),u=P(t,"TABLE",{class:!0});var v=w(u);d=P(v,"TR",{class:!0});var y=w(d);f=P(y,"TH",{class:!0});var E=w(f);h=I(E,"UTC Time"),E.forEach(m),b=A(y),T=P(y,"TH",{class:!0});var $=w(T);x=I($,"Side"),$.forEach(m),N=A(y),S=P(y,"TH",{class:!0});var _=w(S);B=I(_,"Reduce Only"),_.forEach(m),K=A(y),R=P(y,"TH",{class:!0});var D=w(R);k=I(D,"Reason"),D.forEach(m),C=A(y),L=P(y,"TH",{class:!0});var q=w(L);z=I(q,"Asset"),q.forEach(m),O=A(y),j=P(y,"TH",{class:!0});var Y=w(j);F=I(Y,"Equity Before This Deal"),Y.forEach(m),y.forEach(m),H=A(v);for(let t=0;t<M.length;t+=1)M[t].l(v);v.forEach(m),this.h()},h(){_(f,"class","svelte-1tgs6ou"),_(T,"class","svelte-1tgs6ou"),_(S,"class","svelte-1tgs6ou"),_(R,"class","svelte-1tgs6ou"),_(L,"class","svelte-1tgs6ou"),_(j,"class","svelte-1tgs6ou"),_(d,"class","svelte-1tgs6ou"),_(u,"class","svelte-1tgs6ou")},m(t,m){g(t,e,m),p(e,n),p(e,o),p(e,s),g(t,a,m),G&&G.m(t,m),g(t,r,m),g(t,l,m),p(l,c),g(t,i,m),g(t,u,m),p(u,d),p(d,f),p(f,h),p(d,b),p(d,T),p(T,x),p(d,N),p(d,S),p(S,B),p(d,K),p(d,R),p(R,k),p(d,C),p(d,L),p(L,z),p(d,O),p(d,j),p(j,F),p(u,H);for(let t=0;t<M.length;t+=1)M[t].m(u,null)},p(t,e){if(4&e&&U!==(U=t[2].length+"")&&D(o,U),t[1]?G&&(G.d(1),G=null):G?G.p(t,e):(G=yt(t),G.c(),G.m(r.parentNode,r)),4&e){let n;for(q=t[2],n=0;n<q.length;n+=1){const o=mt(t,q,n);M[n]?M[n].p(o,e):(M[n]=Et(o),M[n].c(),M[n].m(u,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=q.length}},d(t){t&&m(e),t&&m(a),G&&G.d(t),t&&m(r),t&&m(l),t&&m(i),t&&m(u),v(M,t)}}}function yt(e){let n,o,s,a;return{c(){n=y("button"),o=E("Show me All Deals")},l(t){n=P(t,"BUTTON",{});var e=w(n);o=I(e,"Show me All Deals"),e.forEach(m)},m(t,r){g(t,n,r),p(n,o),s||(a=T(n,"click",e[3]),s=!0)},p:t,d(t){t&&m(n),s=!1,a()}}}function Et(t){let e,n,o,s,a,r,l,c,i,u,d,f,h,v,b,T,x,N,S,B,K,R=t[7].utcTime.split(".")[0].replace("T"," ")+"",k=t[7].action+"",C=t[7].reduceOnly+"",L=t[7].reason+"",z=t[7].asset+"",O=t[7].equityBeforeThisDeal.toFixed(2)+"";return{c(){e=y("tr"),n=y("td"),o=y("a"),s=E(R),a=$(),r=y("td"),l=E(k),c=$(),i=y("td"),u=E(C),d=$(),f=y("td"),h=E(L),v=$(),b=y("td"),T=E(z),x=$(),N=y("td"),S=E(O),B=$(),K=y("tr"),this.h()},l(t){e=P(t,"TR",{class:!0});var p=w(e);n=P(p,"TD",{class:!0});var g=w(n);o=P(g,"A",{target:!0,href:!0});var y=w(o);s=I(y,R),y.forEach(m),g.forEach(m),a=A(p),r=P(p,"TD",{class:!0});var E=w(r);l=I(E,k),E.forEach(m),c=A(p),i=P(p,"TD",{class:!0});var $=w(i);u=I($,C),$.forEach(m),d=A(p),f=P(p,"TD",{class:!0});var _=w(f);h=I(_,L),_.forEach(m),v=A(p),b=P(p,"TD",{class:!0});var D=w(b);T=I(D,z),D.forEach(m),x=A(p),N=P(p,"TD",{class:!0});var j=w(N);S=I(j,O),j.forEach(m),B=A(p),p.forEach(m),K=P(t,"TR",{class:!0}),w(K).forEach(m),this.h()},h(){_(o,"target","_blank"),_(o,"href","https://www.bybit.com/trade/usdt/BTCUSDT"),_(n,"class","svelte-1tgs6ou"),_(r,"class","svelte-1tgs6ou"),_(i,"class","svelte-1tgs6ou"),_(f,"class","svelte-1tgs6ou"),_(b,"class","svelte-1tgs6ou"),_(N,"class","svelte-1tgs6ou"),_(e,"class","svelte-1tgs6ou"),_(K,"class","svelte-1tgs6ou")},m(t,m){g(t,e,m),p(e,n),p(n,o),p(o,s),p(e,a),p(e,r),p(r,l),p(e,c),p(e,i),p(i,u),p(e,d),p(e,f),p(f,h),p(e,v),p(e,b),p(b,T),p(e,x),p(e,N),p(N,S),p(e,B),g(t,K,m)},p(t,e){4&e&&R!==(R=t[7].utcTime.split(".")[0].replace("T"," ")+"")&&D(s,R),4&e&&k!==(k=t[7].action+"")&&D(l,k),4&e&&C!==(C=t[7].reduceOnly+"")&&D(u,C),4&e&&L!==(L=t[7].reason+"")&&D(h,L),4&e&&z!==(z=t[7].asset+"")&&D(T,z),4&e&&O!==(O=t[7].equityBeforeThisDeal.toFixed(2)+"")&&D(S,O)},d(t){t&&m(e),t&&m(K)}}}function $t(e){let n,o=e[0].length>0&&vt(e);return{c(){o&&o.c(),n=b()},l(t){o&&o.l(t),n=b()},m(t,e){o&&o.m(t,e),g(t,n,e)},p(t,[e]){t[0].length>0?o?o.p(t,e):(o=vt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&m(n)}}}function bt(t,e,n){let{apiKey:o=""}=e,{deals:s=[]}=e,{all:a=!1}=e,{displayedDeals:r=[]}=e;async function l(){try{const t="http://localhost:3027/"==window.location?`http://localhost:3001/getDeals/apiKey/${o}`:`https://openforce.de/getDeals/apiKey/${o}`;n(0,s=await(await fetch(t)).json()),n(2,r=[...s]),!1===a&&r.splice(r.length-990,r.length);const e=[{fieldName:"utcTime",direction:pt.DESCENDING}];n(2,r=gt.sort(r,e))}catch(t){console.log(t.message),alert(`I could not get any data for api key ${o}`)}}return z((async()=>{await l(),setInterval((async()=>{""!==o&&await l()}),8e3)})),t.$$set=t=>{"apiKey"in t&&n(4,o=t.apiKey),"deals"in t&&n(0,s=t.deals),"all"in t&&n(1,a=t.all),"displayedDeals"in t&&n(2,r=t.displayedDeals)},[s,a,r,async function(){n(1,a=!0),n(2,r=s)},o]}class Tt extends ht{constructor(t){var e;super(),document.getElementById("svelte-1tgs6ou-style")||((e=y("style")).id="svelte-1tgs6ou-style",e.textContent="table.svelte-1tgs6ou{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1tgs6ou,th.svelte-1tgs6ou{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1tgs6ou:nth-child(even){background-color:#dddddd}",p(document.head,e)),ft(this,t,bt,$t,r,{apiKey:4,deals:0,all:1,displayedDeals:2})}}function _t(t,e,n){const o=t.slice();return o[4]=e[n],o}function xt(t){let e,n,o,s,a,r,l,c,i,u,d,f,h,b=t[0].length+"",T=t[0],x=[];for(let e=0;e<T.length;e+=1)x[e]=wt(_t(t,T,e));return{c(){e=y("h2"),n=E("Last "),o=E(b),s=E(" Log Entries"),a=$(),r=y("p"),l=y("br"),c=$(),i=y("table"),u=y("tr"),d=y("th"),f=E("Message"),h=$();for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){e=P(t,"H2",{});var p=w(e);n=I(p,"Last "),o=I(p,b),s=I(p," Log Entries"),p.forEach(m),a=A(t),r=P(t,"P",{});var g=w(r);l=P(g,"BR",{}),g.forEach(m),c=A(t),i=P(t,"TABLE",{class:!0});var v=w(i);u=P(v,"TR",{class:!0});var y=w(u);d=P(y,"TH",{class:!0});var E=w(d);f=I(E,"Message"),E.forEach(m),y.forEach(m),h=A(v);for(let t=0;t<x.length;t+=1)x[t].l(v);v.forEach(m),this.h()},h(){_(d,"class","svelte-3wzora"),_(u,"class","svelte-3wzora"),_(i,"class","svelte-3wzora")},m(t,m){g(t,e,m),p(e,n),p(e,o),p(e,s),g(t,a,m),g(t,r,m),p(r,l),g(t,c,m),g(t,i,m),p(i,u),p(u,d),p(d,f),p(i,h);for(let t=0;t<x.length;t+=1)x[t].m(i,null)},p(t,e){if(1&e&&b!==(b=t[0].length+"")&&D(o,b),1&e){let n;for(T=t[0],n=0;n<T.length;n+=1){const o=_t(t,T,n);x[n]?x[n].p(o,e):(x[n]=wt(o),x[n].c(),x[n].m(i,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=T.length}},d(t){t&&m(e),t&&m(a),t&&m(r),t&&m(c),t&&m(i),v(x,t)}}}function wt(t){let e,n,o,s,a,r=t[4].message+"";return{c(){e=y("tr"),n=y("td"),o=E(r),s=$(),a=y("tr"),this.h()},l(t){e=P(t,"TR",{class:!0});var l=w(e);n=P(l,"TD",{class:!0});var c=w(n);o=I(c,r),c.forEach(m),s=A(l),l.forEach(m),a=P(t,"TR",{class:!0}),w(a).forEach(m),this.h()},h(){_(n,"class","svelte-3wzora"),_(e,"class","svelte-3wzora"),_(a,"class","svelte-3wzora")},m(t,r){g(t,e,r),p(e,n),p(n,o),p(e,s),g(t,a,r)},p(t,e){1&e&&r!==(r=t[4].message+"")&&D(o,r)},d(t){t&&m(e),t&&m(a)}}}function Nt(e){let n,o=e[0].length>0&&xt(e);return{c(){o&&o.c(),n=b()},l(t){o&&o.l(t),n=b()},m(t,e){o&&o.m(t,e),g(t,n,e)},p(t,[e]){t[0].length>0?o?o.p(t,e):(o=xt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&m(n)}}}function Pt(t,e,n){let{apiKey:o=""}=e,{logs:s=[]}=e;async function a(){try{const t="http://localhost:3027/"==window.location?`http://localhost:3001/getLogs/apiKey/${o}`:`https://openforce.de/getLogs/apiKey/${o}`;n(0,s=await(await fetch(t)).json()),console.log(s[0]);const e=[{fieldName:"utcTime",direction:pt.ASCENDING}];n(0,s=gt.sort(s,e))}catch(t){console.log(t.message),alert(`I could not get any data for api key ${o}`)}}return z((async()=>{await a(),setInterval((async()=>{""!==o&&await a()}),4e3)})),t.$$set=t=>{"apiKey"in t&&n(1,o=t.apiKey),"logs"in t&&n(0,s=t.logs)},[s,o]}class It extends ht{constructor(t){var e;super(),document.getElementById("svelte-3wzora-style")||((e=y("style")).id="svelte-3wzora-style",e.textContent="table.svelte-3wzora{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-3wzora,th.svelte-3wzora{border:1px solid #dddddd;text-align:center;padding:8px}tr.svelte-3wzora:nth-child(even){background-color:#dddddd}",p(document.head,e)),ft(this,t,Pt,Nt,r,{apiKey:1,logs:0})}}function At(t){let e,n,o;function s(e){t[3](e)}let a={};return void 0!==t[0]&&(a.apiKey=t[0]),e=new Tt({props:a}),j.push((()=>lt(e,"apiKey",s))),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,n){ut(e,t,n),o=!0},p(t,o){const s={};!n&&1&o&&(n=!0,s.apiKey=t[0],M((()=>n=!1))),e.$set(s)},i(t){o||(ot(e.$$.fragment,t),o=!0)},o(t){st(e.$$.fragment,t),o=!1},d(t){dt(e,t)}}}function Dt(t){let e,n,o,s,a,r,l,c,i,u,d,f,h,v,T,x,N,S,B,K,R,k,C,L,z,O,F,H,U,G,q,Y,V,X,J,Q,W,Z,tt,at,rt,ft,ht,pt,gt,mt,vt,yt,Et,$t,bt,Tt,_t,xt=t[1].equity.toFixed(2)+"",wt=t[1].avaliableBalance.toFixed(2)+"",Nt=t[1].longPositionSize+"",Pt=t[1].longPositionPNLInPercent.toFixed(2)+"",Dt=t[1].shortPositionSize+"",St=t[1].shortPositionPNLInPercent.toFixed(2)+"";function Bt(e){t[2](e)}let Kt={};void 0!==t[0]&&(Kt.apiKey=t[0]),mt=new It({props:Kt}),j.push((()=>lt(mt,"apiKey",Bt)));let Rt=void 0!==t[1]&&At(t);return{c(){e=y("h2"),n=E("General Account Info"),o=$(),s=y("table"),a=y("tr"),r=y("th"),l=E("Equity"),c=$(),i=y("th"),u=E("Available"),d=$(),f=y("th"),h=E("Long Position Size"),v=$(),T=y("th"),x=E("Unrealized Long Position PNL in %"),N=$(),S=y("th"),B=E("Short Position Size"),K=$(),R=y("th"),k=E("Unrealized Short Position PNL %"),C=$(),L=y("tr"),z=y("td"),O=E(xt),F=$(),H=y("td"),U=E(wt),G=$(),q=y("td"),Y=E(Nt),V=$(),X=y("td"),J=E(Pt),Q=$(),W=y("td"),Z=E(Dt),tt=$(),at=y("td"),rt=E(St),ft=$(),ht=y("p"),pt=y("br"),gt=$(),ct(mt.$$.fragment),yt=$(),Et=y("p"),$t=y("br"),bt=$(),Rt&&Rt.c(),Tt=b(),this.h()},l(t){e=P(t,"H2",{});var p=w(e);n=I(p,"General Account Info"),p.forEach(m),o=A(t),s=P(t,"TABLE",{class:!0});var g=w(s);a=P(g,"TR",{class:!0});var y=w(a);r=P(y,"TH",{class:!0});var E=w(r);l=I(E,"Equity"),E.forEach(m),c=A(y),i=P(y,"TH",{class:!0});var $=w(i);u=I($,"Available"),$.forEach(m),d=A(y),f=P(y,"TH",{class:!0});var _=w(f);h=I(_,"Long Position Size"),_.forEach(m),v=A(y),T=P(y,"TH",{class:!0});var D=w(T);x=I(D,"Unrealized Long Position PNL in %"),D.forEach(m),N=A(y),S=P(y,"TH",{class:!0});var j=w(S);B=I(j,"Short Position Size"),j.forEach(m),K=A(y),R=P(y,"TH",{class:!0});var M=w(R);k=I(M,"Unrealized Short Position PNL %"),M.forEach(m),y.forEach(m),C=A(g),L=P(g,"TR",{class:!0});var et=w(L);z=P(et,"TD",{class:!0});var nt=w(z);O=I(nt,xt),nt.forEach(m),F=A(et),H=P(et,"TD",{class:!0});var ot=w(H);U=I(ot,wt),ot.forEach(m),G=A(et),q=P(et,"TD",{class:!0});var st=w(q);Y=I(st,Nt),st.forEach(m),V=A(et),X=P(et,"TD",{class:!0});var lt=w(X);J=I(lt,Pt),lt.forEach(m),Q=A(et),W=P(et,"TD",{class:!0});var ct=w(W);Z=I(ct,Dt),ct.forEach(m),tt=A(et),at=P(et,"TD",{class:!0});var ut=w(at);rt=I(ut,St),ut.forEach(m),et.forEach(m),g.forEach(m),ft=A(t),ht=P(t,"P",{});var dt=w(ht);pt=P(dt,"BR",{}),dt.forEach(m),gt=A(t),it(mt.$$.fragment,t),yt=A(t),Et=P(t,"P",{});var vt=w(Et);$t=P(vt,"BR",{}),vt.forEach(m),bt=A(t),Rt&&Rt.l(t),Tt=b(),this.h()},h(){_(r,"class","svelte-1tgs6ou"),_(i,"class","svelte-1tgs6ou"),_(f,"class","svelte-1tgs6ou"),_(T,"class","svelte-1tgs6ou"),_(S,"class","svelte-1tgs6ou"),_(R,"class","svelte-1tgs6ou"),_(a,"class","svelte-1tgs6ou"),_(z,"class","svelte-1tgs6ou"),_(H,"class","svelte-1tgs6ou"),_(q,"class","svelte-1tgs6ou"),_(X,"class","svelte-1tgs6ou"),_(W,"class","svelte-1tgs6ou"),_(at,"class","svelte-1tgs6ou"),_(L,"class","svelte-1tgs6ou"),_(s,"class","svelte-1tgs6ou")},m(t,m){g(t,e,m),p(e,n),g(t,o,m),g(t,s,m),p(s,a),p(a,r),p(r,l),p(a,c),p(a,i),p(i,u),p(a,d),p(a,f),p(f,h),p(a,v),p(a,T),p(T,x),p(a,N),p(a,S),p(S,B),p(a,K),p(a,R),p(R,k),p(s,C),p(s,L),p(L,z),p(z,O),p(L,F),p(L,H),p(H,U),p(L,G),p(L,q),p(q,Y),p(L,V),p(L,X),p(X,J),p(L,Q),p(L,W),p(W,Z),p(L,tt),p(L,at),p(at,rt),g(t,ft,m),g(t,ht,m),p(ht,pt),g(t,gt,m),ut(mt,t,m),g(t,yt,m),g(t,Et,m),p(Et,$t),g(t,bt,m),Rt&&Rt.m(t,m),g(t,Tt,m),_t=!0},p(t,[e]){(!_t||2&e)&&xt!==(xt=t[1].equity.toFixed(2)+"")&&D(O,xt),(!_t||2&e)&&wt!==(wt=t[1].avaliableBalance.toFixed(2)+"")&&D(U,wt),(!_t||2&e)&&Nt!==(Nt=t[1].longPositionSize+"")&&D(Y,Nt),(!_t||2&e)&&Pt!==(Pt=t[1].longPositionPNLInPercent.toFixed(2)+"")&&D(J,Pt),(!_t||2&e)&&Dt!==(Dt=t[1].shortPositionSize+"")&&D(Z,Dt),(!_t||2&e)&&St!==(St=t[1].shortPositionPNLInPercent.toFixed(2)+"")&&D(rt,St);const n={};!vt&&1&e&&(vt=!0,n.apiKey=t[0],M((()=>vt=!1))),mt.$set(n),void 0!==t[1]?Rt?(Rt.p(t,e),2&e&&ot(Rt,1)):(Rt=At(t),Rt.c(),ot(Rt,1),Rt.m(Tt.parentNode,Tt)):Rt&&(et(),st(Rt,1,1,(()=>{Rt=null})),nt())},i(t){_t||(ot(mt.$$.fragment,t),ot(Rt),_t=!0)},o(t){st(mt.$$.fragment,t),st(Rt),_t=!1},d(t){t&&m(e),t&&m(o),t&&m(s),t&&m(ft),t&&m(ht),t&&m(gt),dt(mt,t),t&&m(yt),t&&m(Et),t&&m(bt),Rt&&Rt.d(t),t&&m(Tt)}}}function St(t,e,n){let{apiKey:o}=e,{accountInfo:s}=e;return t.$$set=t=>{"apiKey"in t&&n(0,o=t.apiKey),"accountInfo"in t&&n(1,s=t.accountInfo)},[o,s,function(t){o=t,n(0,o)},function(t){o=t,n(0,o)}]}class Bt extends ht{constructor(t){var e;super(),document.getElementById("svelte-1tgs6ou-style")||((e=y("style")).id="svelte-1tgs6ou-style",e.textContent="table.svelte-1tgs6ou{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1tgs6ou,th.svelte-1tgs6ou{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1tgs6ou:nth-child(even){background-color:#dddddd}",p(document.head,e)),ft(this,t,St,Dt,r,{apiKey:0,accountInfo:1})}}function Kt(t){let e,n,o,a,r,l,c,i,u,d,f,h,v,b,N,B;return{c(){e=y("input"),n=$(),o=y("br"),a=$(),r=y("input"),l=$(),c=y("br"),i=$(),u=y("button"),d=E("Add "),f=E(t[2]),h=E(" to BTC "),v=E(t[0]),b=E(" now"),this.h()},l(s){e=P(s,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),n=A(s),o=P(s,"BR",{}),a=A(s),r=P(s,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,step:!0}),l=A(s),c=P(s,"BR",{}),i=A(s),u=P(s,"BUTTON",{});var p=w(u);d=I(p,"Add "),f=I(p,t[2]),h=I(p," to BTC "),v=I(p,t[0]),b=I(p," now"),p.forEach(m),this.h()},h(){_(e,"type","text"),_(e,"name",""),_(e,"id","apiSecret"),_(e,"placeholder","Enter Your API Secret..."),_(r,"type","number"),_(r,"name",""),_(r,"id","amount"),_(r,"placeholder","Enter Your API Secret..."),_(r,"step","0.001")},m(s,m){g(s,e,m),S(e,t[1]),g(s,n,m),g(s,o,m),g(s,a,m),g(s,r,m),S(r,t[2]),g(s,l,m),g(s,c,m),g(s,i,m),g(s,u,m),p(u,d),p(u,f),p(u,h),p(u,v),p(u,b),N||(B=[T(e,"input",t[10]),T(r,"input",t[11]),T(u,"click",t[7])],N=!0)},p(t,n){2&n&&e.value!==t[1]&&S(e,t[1]),4&n&&x(r.value)!==t[2]&&S(r,t[2]),4&n&&D(f,t[2]),1&n&&D(v,t[0])},d(t){t&&m(e),t&&m(n),t&&m(o),t&&m(a),t&&m(r),t&&m(l),t&&m(c),t&&m(i),t&&m(u),N=!1,s(B)}}}function Rt(t){let e,n,o,a,r,l,c,i,u,d,f,h,v,b,N;return{c(){e=y("input"),n=$(),o=y("br"),a=$(),r=y("input"),l=$(),c=y("br"),i=$(),u=y("button"),d=E(t[0]),f=E(" by "),h=E(t[2]),v=E(" now"),this.h()},l(s){e=P(s,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),n=A(s),o=P(s,"BR",{}),a=A(s),r=P(s,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,step:!0}),l=A(s),c=P(s,"BR",{}),i=A(s),u=P(s,"BUTTON",{});var p=w(u);d=I(p,t[0]),f=I(p," by "),h=I(p,t[2]),v=I(p," now"),p.forEach(m),this.h()},h(){_(e,"type","text"),_(e,"name",""),_(e,"id","apiSecret"),_(e,"placeholder","Enter Your API Secret..."),_(r,"type","number"),_(r,"name",""),_(r,"id","amount"),_(r,"placeholder","Enter Your API Secret..."),_(r,"step","0.001")},m(s,m){g(s,e,m),S(e,t[1]),g(s,n,m),g(s,o,m),g(s,a,m),g(s,r,m),S(r,t[2]),g(s,l,m),g(s,c,m),g(s,i,m),g(s,u,m),p(u,d),p(u,f),p(u,h),p(u,v),b||(N=[T(e,"input",t[12]),T(r,"input",t[13]),T(u,"click",t[8])],b=!0)},p(t,n){2&n&&e.value!==t[1]&&S(e,t[1]),4&n&&x(r.value)!==t[2]&&S(r,t[2]),1&n&&D(d,t[0]),4&n&&D(h,t[2])},d(t){t&&m(e),t&&m(n),t&&m(o),t&&m(a),t&&m(r),t&&m(l),t&&m(c),t&&m(i),t&&m(u),b=!1,s(N)}}}function kt(e){let n,o,a,r,l,c,i,u,d,f,h,v,_,x,N,D,S,B,K,R,k,C,L,z,O,j,F,H=("long"===e[0]||"short"===e[0])&&Kt(e),U=("reducelong"===e[0]||"reduceshort"===e[0])&&Rt(e);return{c(){n=y("p"),o=y("br"),a=$(),r=y("h2"),l=E("Manual Intervention Options"),c=$(),i=y("button"),u=E("Add To Long Position"),d=$(),f=y("button"),h=E("Add To Short Position"),v=$(),_=y("p"),x=$(),N=y("button"),D=E("Reduce Long Position"),S=$(),B=y("button"),K=E("Reduce Short Position"),R=$(),k=y("p"),C=y("br"),L=$(),H&&H.c(),z=$(),U&&U.c(),O=b()},l(t){n=P(t,"P",{});var e=w(n);o=P(e,"BR",{}),e.forEach(m),a=A(t),r=P(t,"H2",{});var s=w(r);l=I(s,"Manual Intervention Options"),s.forEach(m),c=A(t),i=P(t,"BUTTON",{});var p=w(i);u=I(p,"Add To Long Position"),p.forEach(m),d=A(t),f=P(t,"BUTTON",{});var g=w(f);h=I(g,"Add To Short Position"),g.forEach(m),v=A(t),_=P(t,"P",{}),w(_).forEach(m),x=A(t),N=P(t,"BUTTON",{});var y=w(N);D=I(y,"Reduce Long Position"),y.forEach(m),S=A(t),B=P(t,"BUTTON",{});var E=w(B);K=I(E,"Reduce Short Position"),E.forEach(m),R=A(t),k=P(t,"P",{});var $=w(k);C=P($,"BR",{}),$.forEach(m),L=A(t),H&&H.l(t),z=A(t),U&&U.l(t),O=b()},m(t,s){g(t,n,s),p(n,o),g(t,a,s),g(t,r,s),p(r,l),g(t,c,s),g(t,i,s),p(i,u),g(t,d,s),g(t,f,s),p(f,h),g(t,v,s),g(t,_,s),g(t,x,s),g(t,N,s),p(N,D),g(t,S,s),g(t,B,s),p(B,K),g(t,R,s),g(t,k,s),p(k,C),g(t,L,s),H&&H.m(t,s),g(t,z,s),U&&U.m(t,s),g(t,O,s),j||(F=[T(i,"click",e[3]),T(f,"click",e[4]),T(N,"click",e[5]),T(B,"click",e[6])],j=!0)},p(t,[e]){"long"===t[0]||"short"===t[0]?H?H.p(t,e):(H=Kt(t),H.c(),H.m(z.parentNode,z)):H&&(H.d(1),H=null),"reducelong"===t[0]||"reduceshort"===t[0]?U?U.p(t,e):(U=Rt(t),U.c(),U.m(O.parentNode,O)):U&&(U.d(1),U=null)},i:t,o:t,d(t){t&&m(n),t&&m(a),t&&m(r),t&&m(c),t&&m(i),t&&m(d),t&&m(f),t&&m(v),t&&m(_),t&&m(x),t&&m(N),t&&m(S),t&&m(B),t&&m(R),t&&m(k),t&&m(L),H&&H.d(t),t&&m(z),U&&U.d(t),t&&m(O),j=!1,s(F)}}}function Ct(t,e,n){let{apiKey:o}=e,s="",a="",r=.001;function l(){let t={apiKey:o,apiSecret:a,amount:r,action:s};return{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}}return t.$$set=t=>{"apiKey"in t&&n(9,o=t.apiKey)},[s,a,r,async function(){n(0,s="long")},async function(){n(0,s="short")},async function(){n(0,s="reducelong")},async function(){n(0,s="reduceshort")},async function(){const t="http://localhost:3027/"==window.location?"http://localhost:3001/addToPosition":"https://openforce.de/addToPosition";console.log(`calling ${t}`),fetch(t,l()),alert("add to position triggered - shall be visible here in about 8 seconds")},async function(){const t="http://localhost:3027/"==window.location?"http://localhost:3001/reducePosition":"https://openforce.de/reducePosition";console.log(`calling ${t}`),fetch(t,l()),alert("reduce position triggered - shall be visible here in about 8 seconds")},o,function(){a=this.value,n(1,a)},function(){r=x(this.value),n(2,r)},function(){a=this.value,n(1,a)},function(){r=x(this.value),n(2,r)}]}class Lt extends ht{constructor(t){super(),ft(this,t,Ct,kt,r,{apiKey:9})}}function zt(t,e,n){const o=t.slice();return o[2]=e[n],o}function Ot(t){let e,n,o=t[2].character+"";return{c(){e=y("span"),n=E(o),this.h()},l(t){e=P(t,"SPAN",{style:!0,class:!0});var s=w(e);n=I(s,o),s.forEach(m),this.h()},h(){B(e,"left",t[2].x+"%"),B(e,"top",t[2].y+"%"),B(e,"transform","scale("+t[2].r+")"),_(e,"class","svelte-5dvyog")},m(t,o){g(t,e,o),p(e,n)},p(t,s){1&s&&o!==(o=t[2].character+"")&&D(n,o),1&s&&B(e,"left",t[2].x+"%"),1&s&&B(e,"top",t[2].y+"%"),1&s&&B(e,"transform","scale("+t[2].r+")")},d(t){t&&m(e)}}}function jt(e){let n,o=e[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=Ot(zt(e,o,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();n=b()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);n=b()},m(t,e){for(let n=0;n<s.length;n+=1)s[n].m(t,e);g(t,n,e)},p(t,[e]){if(1&e){let a;for(o=t[0],a=0;a<o.length;a+=1){const r=zt(t,o,a);s[a]?s[a].p(r,e):(s[a]=Ot(r),s[a].c(),s[a].m(n.parentNode,n))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},i:t,o:t,d(t){v(s,t),t&&m(n)}}}function Ft(t,e,n){let o=["🥳","🎉","✨","💰","💵","🏦","💶","🎩"],s=new Array(8).fill().map(((t,e)=>({character:o[e%o.length],x:100*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()}))).sort(((t,e)=>t.r-e.r));return z((()=>{let t;return function e(){t=requestAnimationFrame(e),n(0,s=s.map((t=>(t.y+=.7*t.r,t.y>120&&(t.y=-20),t))))}(),()=>cancelAnimationFrame(t)})),[s]}class Ht extends ht{constructor(t){var e;super(),document.getElementById("svelte-5dvyog-style")||((e=y("style")).id="svelte-5dvyog-style",e.textContent="body{overflow:hidden}span.svelte-5dvyog{position:absolute;font-size:5vw;user-select:none}",p(document.head,e)),ft(this,t,Ft,jt,r,{})}}function Ut(e){let n,o;return n=new Ht({}),{c(){ct(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){ut(n,t,e),o=!0},p:t,i(t){o||(ot(n.$$.fragment,t),o=!0)},o(t){st(n.$$.fragment,t),o=!1},d(t){dt(n,t)}}}function Gt(t){let e,n,o,s,a,r,l,c,i,u,d,f,h,v,b,T,x,N,S,B,K,R,k,C,L,z=t[0].strategy+"";function O(e){t[4](e)}let F={};function H(e){t[5](e)}function U(e){t[6](e)}void 0!==t[1]&&(F.apiKey=t[1]),o=new Lt({props:F}),j.push((()=>lt(o,"apiKey",O)));let G={};return void 0!==t[0]&&(G.accountInfo=t[0]),void 0!==t[1]&&(G.apiKey=t[1]),R=new Bt({props:G}),j.push((()=>lt(R,"accountInfo",H))),j.push((()=>lt(R,"apiKey",U))),{c(){e=y("br"),n=$(),ct(o.$$.fragment),a=$(),r=y("br"),l=E("\n\n    \n    This account uses the following strategy: "),c=y("b"),i=E('"'),u=E(z),d=E('"'),f=$(),h=y("br"),v=E("\n    for details explore\n    "),b=y("a"),T=E("Investment Advisor Implementation"),x=$(),N=y("p"),S=$(),B=y("br"),K=$(),ct(R.$$.fragment),this.h()},l(t){e=P(t,"BR",{}),n=A(t),it(o.$$.fragment,t),a=A(t),r=P(t,"BR",{}),l=I(t,"\n\n    \n    This account uses the following strategy: "),c=P(t,"B",{});var s=w(c);i=I(s,'"'),u=I(s,z),d=I(s,'"'),s.forEach(m),f=A(t),h=P(t,"BR",{}),v=I(t,"\n    for details explore\n    "),b=P(t,"A",{target:!0,href:!0});var p=w(b);T=I(p,"Investment Advisor Implementation"),p.forEach(m),x=A(t),N=P(t,"P",{}),w(N).forEach(m),S=A(t),B=P(t,"BR",{}),K=A(t),it(R.$$.fragment,t),this.h()},h(){_(b,"target","_blank"),_(b,"href","https://deno.land/x/exchange_connectors/src/volatility-farming/investment-advisor")},m(t,s){g(t,e,s),g(t,n,s),ut(o,t,s),g(t,a,s),g(t,r,s),g(t,l,s),g(t,c,s),p(c,i),p(c,u),p(c,d),g(t,f,s),g(t,h,s),g(t,v,s),g(t,b,s),p(b,T),g(t,x,s),g(t,N,s),g(t,S,s),g(t,B,s),g(t,K,s),ut(R,t,s),L=!0},p(t,e){const n={};!s&&2&e&&(s=!0,n.apiKey=t[1],M((()=>s=!1))),o.$set(n),(!L||1&e)&&z!==(z=t[0].strategy+"")&&D(u,z);const a={};!k&&1&e&&(k=!0,a.accountInfo=t[0],M((()=>k=!1))),!C&&2&e&&(C=!0,a.apiKey=t[1],M((()=>C=!1))),R.$set(a)},i(t){L||(ot(o.$$.fragment,t),ot(R.$$.fragment,t),L=!0)},o(t){st(o.$$.fragment,t),st(R.$$.fragment,t),L=!1},d(t){t&&m(e),t&&m(n),dt(o,t),t&&m(a),t&&m(r),t&&m(l),t&&m(c),t&&m(f),t&&m(h),t&&m(v),t&&m(b),t&&m(x),t&&m(N),t&&m(S),t&&m(B),t&&m(K),dt(R,t)}}}function qt(t){let e,n,o,a,r,l,c,i,u,d,f,h,v,b,x,N,D,B,K,R,k,C,L,z,O,j,F,H;const U=[Gt,Ut],G=[];function q(t,e){return void 0!==t[0]?0:1}return C=q(t),L=G[C]=U[C](t),{c(){e=y("h1"),n=E("Volatility Farming"),o=$(),a=y("a"),r=y("h3"),l=E("For Friends Only"),c=E("\n\nEnter Your API Key\n\n"),i=y("p"),u=E("\n\nExample Key (Demo Account):\n"),d=y("br"),f=y("br"),h=E("\n\nGCNuPXHiTsX5FTEDhV\n\n"),v=y("p"),b=y("br"),x=$(),N=y("input"),D=$(),B=y("button"),K=E("Los"),R=$(),k=y("p"),L.c(),z=$(),O=y("link"),this.h()},l(t){e=P(t,"H1",{class:!0});var s=w(e);n=I(s,"Volatility Farming"),s.forEach(m),o=A(t),a=P(t,"A",{target:!0,href:!0});var p=w(a);r=P(p,"H3",{});var g=w(r);l=I(g,"For Friends Only"),g.forEach(m),p.forEach(m),c=I(t,"\n\nEnter Your API Key\n\n"),i=P(t,"P",{}),w(i).forEach(m),u=I(t,"\n\nExample Key (Demo Account):\n"),d=P(t,"BR",{}),f=P(t,"BR",{}),h=I(t,"\n\nGCNuPXHiTsX5FTEDhV\n\n"),v=P(t,"P",{});var y=w(v);b=P(y,"BR",{}),y.forEach(m),x=A(t),N=P(t,"INPUT",{type:!0,name:!0,id:!0}),D=A(t),B=P(t,"BUTTON",{});var E=w(B);K=I(E,"Los"),E.forEach(m),R=A(t),k=P(t,"P",{});var $=w(k);L.l($),$.forEach(m),z=A(t),O=P(t,"LINK",{href:!0,rel:!0}),this.h()},h(){_(e,"class","svelte-1cxhk4e"),_(a,"target","_blank"),_(a,"href","https://github.com/distributed-ledger-technology/cash-services"),_(N,"type","text"),_(N,"name",""),_(N,"id",""),_(O,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),_(O,"rel","stylesheet")},m(s,m){g(s,e,m),p(e,n),g(s,o,m),g(s,a,m),p(a,r),p(r,l),g(s,c,m),g(s,i,m),g(s,u,m),g(s,d,m),g(s,f,m),g(s,h,m),g(s,v,m),p(v,b),g(s,x,m),g(s,N,m),S(N,t[1]),g(s,D,m),g(s,B,m),p(B,K),g(s,R,m),g(s,k,m),G[C].m(k,null),g(s,z,m),g(s,O,m),j=!0,F||(H=[T(N,"input",t[3]),T(B,"click",t[2])],F=!0)},p(t,[e]){2&e&&N.value!==t[1]&&S(N,t[1]);let n=C;C=q(t),C===n?G[C].p(t,e):(et(),st(G[n],1,1,(()=>{G[n]=null})),nt(),L=G[C],L?L.p(t,e):(L=G[C]=U[C](t),L.c()),ot(L,1),L.m(k,null))},i(t){j||(ot(L),j=!0)},o(t){st(L),j=!1},d(t){t&&m(e),t&&m(o),t&&m(a),t&&m(c),t&&m(i),t&&m(u),t&&m(d),t&&m(f),t&&m(h),t&&m(v),t&&m(x),t&&m(N),t&&m(D),t&&m(B),t&&m(R),t&&m(k),G[C].d(),t&&m(z),t&&m(O),F=!1,s(H)}}}function Mt(t,e,n){let o,s="";async function a(){try{const t="http://localhost:3027/"==window.location?`http://localhost:3001/getAccountInfo/apiKey/${s}`:`https://openforce.de/getAccountInfo/apiKey/${s}`;n(0,o=await(await fetch(t)).json())}catch(t){console.log(t.message),alert(`I could not get any data for api key ${s}`)}}return z((async()=>{setInterval((async()=>{""!==s&&await a()}),8e3)})),[o,s,a,function(){s=this.value,n(1,s)},function(t){s=t,n(1,s)},function(t){o=t,n(0,o)},function(t){s=t,n(1,s)}]}class Yt extends ht{constructor(t){var e;super(),document.getElementById("svelte-1cxhk4e-style")||((e=y("style")).id="svelte-1cxhk4e-style",e.textContent="h1.svelte-1cxhk4e{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}",p(document.head,e)),ft(this,t,Mt,qt,r,{})}}function Vt(t,{delay:n=0,duration:o=400,easing:s=e}={}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*a}}function Xt(e){let n,o,s,a,r,l,c,i;return s=new Yt({}),{c(){n=y("body"),o=y("main"),ct(s.$$.fragment),a=$(),r=y("p"),l=y("br"),this.h()},l(t){n=P(t,"BODY",{class:!0});var e=w(n);o=P(e,"MAIN",{class:!0});var c=w(o);it(s.$$.fragment,c),a=A(c),r=P(c,"P",{});var i=w(r);l=P(i,"BR",{}),i.forEach(m),c.forEach(m),e.forEach(m),this.h()},h(){_(o,"class","svelte-xjajc1"),_(n,"class","svelte-xjajc1")},m(t,e){g(t,n,e),p(n,o),ut(s,o,null),p(o,a),p(o,r),p(r,l),i=!0},p:t,i(t){i||(ot(s.$$.fragment,t),q((()=>{c||(c=rt(o,Vt,{},!0)),c.run(1)})),i=!0)},o(t){st(s.$$.fragment,t),c||(c=rt(o,Vt,{},!1)),c.run(0),i=!1},d(t){t&&m(n),dt(s),t&&c&&c.end()}}}return new class extends ht{constructor(t){var e;super(),document.getElementById("svelte-xjajc1-style")||((e=y("style")).id="svelte-xjajc1-style",e.textContent="body.svelte-xjajc1{overflow:scroll}main.svelte-xjajc1{text-align:center;padding:1em;margin:0 auto}@media(min-width: 640px){main.svelte-xjajc1{max-width:none}}",p(document.head,e)),ft(this,t,null,Xt,r,{})}}({target:document.querySelector("#__snel"),props:{}}),{}})();