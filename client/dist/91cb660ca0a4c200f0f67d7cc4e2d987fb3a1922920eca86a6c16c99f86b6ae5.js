export default(async()=>{function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),i=a?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&i(f)}let h=!1;function d(t,e,n,s){for(;t<e;){const o=t+(e-t>>1);n(o)<=s?t=o+1:e=o}return t}function m(t,e){h?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const r=d(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;s[t]=n[r]+1;const l=r+1;n[l]=t,o=Math.max(l,o)}const r=[],l=[];let a=e.length-1;for(let t=n[o]+1;0!=t;t=s[t-1]){for(r.push(e[t-1]);a>=t;a--)l.push(e[a]);a--}for(;a>=0;a--)l.push(e[a]);r.reverse(),l.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<l.length;e++){for(;n<r.length&&l[e].claim_order>=r[n].claim_order;)n++;const s=n<r.length?r[n]:null;t.insertBefore(l[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function v(t,e,n){h&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function _(){return y("")}function w(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function T(t,e,n,s,o=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const r=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const r=t[s];if(e(r))return n(r),t.splice(s,1),o||(t.claim_info.last_index=s),r}for(let s=t.claim_info.last_index-1;s>=0;s--){const r=t[s];if(e(r))return n(r),t.splice(s,1),o?t.claim_info.last_index--:t.claim_info.last_index=s,r}return s()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function P(t,e,n,s){return T(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const o=t.attributes[s];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):x(e)))}function I(t,e){return T(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>y(e)),!0)}function A(t){return I(t," ")}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function S(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}const B=new Set;let H,j=0;function k(t,e,n,s,o,r,l,a=0){const c=16.666/s;let i="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*r(t);i+=100*t+`%{${l(s,1-s)}}\n`}const u=i+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,h=t.ownerDocument;B.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(x("style")).sheet),m=h.__svelte_rules||(h.__svelte_rules={});m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${o}ms 1 both`,j+=1,f}function L(t){H=t}const F=[],R=[],z=[],C=[],O=Promise.resolve();let q=!1;function U(t){z.push(t)}function M(t){C.push(t)}let K=!1;const G=new Set;function X(){if(!K){K=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];L(e),Y(e.$$)}for(L(null),F.length=0;R.length;)R.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];G.has(e)||(G.add(e),e())}z.length=0}while(F.length);for(;C.length;)C.pop()();q=!1,K=!1,G.clear()}}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}let V;function J(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,void 0),n}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let W;function Z(){W={r:0,c:[],p:W}}function tt(){W.r||o(W.c),W=W.p}function et(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function nt(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),W.c.push((()=>{Q.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const st={duration:0};function ot(n,s,l,a){let h=s(n,l),d=a?0:1,m=null,v=null,p=null;function g(){p&&function(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),j-=o,j||i((()=>{j||(B.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),B.clear())})))}(n,p)}function x(t,e){const n=t.b-d;return e*=Math.abs(n),{a:d,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(s){const{delay:r=0,duration:l=300,easing:a=e,tick:y=t,css:$}=h||st,_={start:c()+r,b:s};s||(_.group=W,W.r+=1),m||v?v=_:($&&(g(),p=k(n,d,s,l,r,a,$)),s&&y(0,1),m=x(_,l),U((()=>J(n,s,"start"))),function(t){let e;0===u.size&&i(f),new Promise((n=>{u.add(e={c:t,f:n})}))}((t=>{if(v&&t>v.start&&(m=x(v,l),v=null,J(n,m.b,"start"),$&&(g(),p=k(n,d,m.b,m.duration,0,a,h.css))),m)if(t>=m.end)y(d=m.b,1-d),J(n,m.b,"end"),v||(m.b?g():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;d=m.a+m.d*a(e/m.duration),y(d,1-d)}return!(!m&&!v)})))}return{run(t){r(h)?(V||(V=Promise.resolve(),V.then((()=>{V=null}))),V).then((()=>{h=h(),y(t)})):y(t)},end(){g(),m=v=null}}}function rt(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function lt(t){t&&t.c()}function at(t,e){t&&t.l(e)}function ct(t,e,s,l){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,s),l||U((()=>{const e=c.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(U)}function it(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(e,n,r,l,a,c,i=[-1]){const u=H;L(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:i,skip_bound:!1};let d=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),d&&function(t,e){-1===t.$$.dirty[0]&&(F.push(t),q||(q=!0,O.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),d=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){h=!0;const t=b(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&et(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),h=!1,X()}L(u)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ht(t,e,n){const s=t.slice();return s[1]=e[n],s}function dt(t){let e,n,s,o,r,l,a,c,i,u,f,h,d,g,_,w,T,N,S,B,H=t[1].utcTime+"",j=t[1].side+"",k=t[1].reduceOnly+"",L=t[1].reason+"",F=t[1].asset+"",R=t[1].equityBeforeThisDeal+"";return{c(){e=x("tr"),n=x("td"),s=y(H),o=$(),r=x("td"),l=y(j),a=$(),c=x("td"),i=y(k),u=$(),f=x("td"),h=y(L),d=$(),g=x("td"),_=y(F),w=$(),T=x("td"),N=y(R),S=$(),B=x("tr"),this.h()},l(t){e=P(t,"TR",{class:!0});var m=b(e);n=P(m,"TD",{class:!0});var v=b(n);s=I(v,H),v.forEach(p),o=A(m),r=P(m,"TD",{class:!0});var x=b(r);l=I(x,j),x.forEach(p),a=A(m),c=P(m,"TD",{class:!0});var y=b(c);i=I(y,k),y.forEach(p),u=A(m),f=P(m,"TD",{class:!0});var $=b(f);h=I($,L),$.forEach(p),d=A(m),g=P(m,"TD",{class:!0});var E=b(g);_=I(E,F),E.forEach(p),w=A(m),T=P(m,"TD",{class:!0});var D=b(T);N=I(D,R),D.forEach(p),S=A(m),m.forEach(p),B=P(t,"TR",{class:!0}),b(B).forEach(p),this.h()},h(){E(n,"class","svelte-1x3wihs"),E(r,"class","svelte-1x3wihs"),E(c,"class","svelte-1x3wihs"),E(f,"class","svelte-1x3wihs"),E(g,"class","svelte-1x3wihs"),E(T,"class","svelte-1x3wihs"),E(e,"class","svelte-1x3wihs"),E(B,"class","svelte-1x3wihs")},m(t,p){v(t,e,p),m(e,n),m(n,s),m(e,o),m(e,r),m(r,l),m(e,a),m(e,c),m(c,i),m(e,u),m(e,f),m(f,h),m(e,d),m(e,g),m(g,_),m(e,w),m(e,T),m(T,N),m(e,S),v(t,B,p)},p(t,e){1&e&&H!==(H=t[1].utcTime+"")&&D(s,H),1&e&&j!==(j=t[1].side+"")&&D(l,j),1&e&&k!==(k=t[1].reduceOnly+"")&&D(i,k),1&e&&L!==(L=t[1].reason+"")&&D(h,L),1&e&&F!==(F=t[1].asset+"")&&D(_,F),1&e&&R!==(R=t[1].equityBeforeThisDeal+"")&&D(N,R)},d(t){t&&p(e),t&&p(B)}}}function mt(e){let n,s,o,r,l,a,c,i,u,f,h,d,_,w,T,D,N,S,B,H,j,k,L,F=e[0].dealHistory,R=[];for(let t=0;t<F.length;t+=1)R[t]=dt(ht(e,F,t));return{c(){n=x("h2"),s=y("Deal History"),o=$(),r=x("table"),l=x("tr"),a=x("th"),c=y("UTC Time"),i=$(),u=x("th"),f=y("Side"),h=$(),d=x("th"),_=y("Reduce Only"),w=$(),T=x("th"),D=y("Reason"),N=$(),S=x("th"),B=y("Asset"),H=$(),j=x("th"),k=y("Equity Before This Deal"),L=$();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){n=P(t,"H2",{});var e=b(n);s=I(e,"Deal History"),e.forEach(p),o=A(t),r=P(t,"TABLE",{class:!0});var m=b(r);l=P(m,"TR",{class:!0});var v=b(l);a=P(v,"TH",{class:!0});var g=b(a);c=I(g,"UTC Time"),g.forEach(p),i=A(v),u=P(v,"TH",{class:!0});var x=b(u);f=I(x,"Side"),x.forEach(p),h=A(v),d=P(v,"TH",{class:!0});var y=b(d);_=I(y,"Reduce Only"),y.forEach(p),w=A(v),T=P(v,"TH",{class:!0});var $=b(T);D=I($,"Reason"),$.forEach(p),N=A(v),S=P(v,"TH",{class:!0});var E=b(S);B=I(E,"Asset"),E.forEach(p),H=A(v),j=P(v,"TH",{class:!0});var F=b(j);k=I(F,"Equity Before This Deal"),F.forEach(p),v.forEach(p),L=A(m);for(let t=0;t<R.length;t+=1)R[t].l(m);m.forEach(p),this.h()},h(){E(a,"class","svelte-1x3wihs"),E(u,"class","svelte-1x3wihs"),E(d,"class","svelte-1x3wihs"),E(T,"class","svelte-1x3wihs"),E(S,"class","svelte-1x3wihs"),E(j,"class","svelte-1x3wihs"),E(l,"class","svelte-1x3wihs"),E(r,"class","svelte-1x3wihs")},m(t,e){v(t,n,e),m(n,s),v(t,o,e),v(t,r,e),m(r,l),m(l,a),m(a,c),m(l,i),m(l,u),m(u,f),m(l,h),m(l,d),m(d,_),m(l,w),m(l,T),m(T,D),m(l,N),m(l,S),m(S,B),m(l,H),m(l,j),m(j,k),m(r,L);for(let t=0;t<R.length;t+=1)R[t].m(r,null)},p(t,[e]){if(1&e){let n;for(F=t[0].dealHistory,n=0;n<F.length;n+=1){const s=ht(t,F,n);R[n]?R[n].p(s,e):(R[n]=dt(s),R[n].c(),R[n].m(r,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=F.length}},i:t,o:t,d(t){t&&p(n),t&&p(o),t&&p(r),g(R,t)}}}function vt(t,e,n){let{accountInfo:s}=e;return t.$$set=t=>{"accountInfo"in t&&n(0,s=t.accountInfo)},[s]}class pt extends ft{constructor(t){var e;super(),document.getElementById("svelte-1x3wihs-style")||((e=x("style")).id="svelte-1x3wihs-style",e.textContent="table.svelte-1x3wihs{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1x3wihs,th.svelte-1x3wihs{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1x3wihs:nth-child(even){background-color:#dddddd}",m(document.head,e)),ut(this,t,vt,mt,l,{accountInfo:0})}}function gt(t){let e,n,s;function o(e){t[1](e)}let r={};return void 0!==t[0]&&(r.accountInfo=t[0]),e=new pt({props:r}),R.push((()=>rt(e,"accountInfo",o))),{c(){lt(e.$$.fragment)},l(t){at(e.$$.fragment,t)},m(t,n){ct(e,t,n),s=!0},p(t,s){const o={};!n&&1&s&&(n=!0,o.accountInfo=t[0],M((()=>n=!1))),e.$set(o)},i(t){s||(et(e.$$.fragment,t),s=!0)},o(t){nt(e.$$.fragment,t),s=!1},d(t){it(e,t)}}}function xt(t){let e,n,s,o,r,l,a,c,i,u,f,h,d,g,w,T,N,S,B,H,j,k,L,F,R,z,C,O,q,U,M,K,G,X,Y,V,J,Q,W,st,ot,rt,lt,at,ct,it,ut,ft=t[0].equity.toFixed(2)+"",ht=t[0].avaliableBalance.toFixed(2)+"",dt=t[0].longPositionSize+"",mt=t[0].longPositionPNLInPercent.toFixed(2)+"",vt=t[0].shortPositionSize+"",pt=t[0].shortPositionPNLInPercent.toFixed(2)+"",xt=void 0!==t[0]&&gt(t);return{c(){e=x("h2"),n=y("General Account Info"),s=$(),o=x("table"),r=x("tr"),l=x("th"),a=y("Equity"),c=$(),i=x("th"),u=y("Available"),f=$(),h=x("th"),d=y("Long Position Size"),g=$(),w=x("th"),T=y("Unrealized Long Position PNL in %"),N=$(),S=x("th"),B=y("Short Position Size"),H=$(),j=x("th"),k=y("Unrealized Short Position PNL %"),L=$(),F=x("tr"),R=x("td"),z=y(ft),C=$(),O=x("td"),q=y(ht),U=$(),M=x("td"),K=y(dt),G=$(),X=x("td"),Y=y(mt),V=$(),J=x("td"),Q=y(vt),W=$(),st=x("td"),ot=y(pt),rt=$(),lt=x("p"),at=x("br"),ct=$(),xt&&xt.c(),it=_(),this.h()},l(t){e=P(t,"H2",{});var m=b(e);n=I(m,"General Account Info"),m.forEach(p),s=A(t),o=P(t,"TABLE",{class:!0});var v=b(o);r=P(v,"TR",{class:!0});var x=b(r);l=P(x,"TH",{class:!0});var y=b(l);a=I(y,"Equity"),y.forEach(p),c=A(x),i=P(x,"TH",{class:!0});var $=b(i);u=I($,"Available"),$.forEach(p),f=A(x),h=P(x,"TH",{class:!0});var E=b(h);d=I(E,"Long Position Size"),E.forEach(p),g=A(x),w=P(x,"TH",{class:!0});var D=b(w);T=I(D,"Unrealized Long Position PNL in %"),D.forEach(p),N=A(x),S=P(x,"TH",{class:!0});var Z=b(S);B=I(Z,"Short Position Size"),Z.forEach(p),H=A(x),j=P(x,"TH",{class:!0});var tt=b(j);k=I(tt,"Unrealized Short Position PNL %"),tt.forEach(p),x.forEach(p),L=A(v),F=P(v,"TR",{class:!0});var et=b(F);R=P(et,"TD",{class:!0});var nt=b(R);z=I(nt,ft),nt.forEach(p),C=A(et),O=P(et,"TD",{class:!0});var ut=b(O);q=I(ut,ht),ut.forEach(p),U=A(et),M=P(et,"TD",{class:!0});var gt=b(M);K=I(gt,dt),gt.forEach(p),G=A(et),X=P(et,"TD",{class:!0});var yt=b(X);Y=I(yt,mt),yt.forEach(p),V=A(et),J=P(et,"TD",{class:!0});var $t=b(J);Q=I($t,vt),$t.forEach(p),W=A(et),st=P(et,"TD",{class:!0});var _t=b(st);ot=I(_t,pt),_t.forEach(p),et.forEach(p),v.forEach(p),rt=A(t),lt=P(t,"P",{});var wt=b(lt);at=P(wt,"BR",{}),wt.forEach(p),ct=A(t),xt&&xt.l(t),it=_(),this.h()},h(){E(l,"class","svelte-1x3wihs"),E(i,"class","svelte-1x3wihs"),E(h,"class","svelte-1x3wihs"),E(w,"class","svelte-1x3wihs"),E(S,"class","svelte-1x3wihs"),E(j,"class","svelte-1x3wihs"),E(r,"class","svelte-1x3wihs"),E(R,"class","svelte-1x3wihs"),E(O,"class","svelte-1x3wihs"),E(M,"class","svelte-1x3wihs"),E(X,"class","svelte-1x3wihs"),E(J,"class","svelte-1x3wihs"),E(st,"class","svelte-1x3wihs"),E(F,"class","svelte-1x3wihs"),E(o,"class","svelte-1x3wihs")},m(t,p){v(t,e,p),m(e,n),v(t,s,p),v(t,o,p),m(o,r),m(r,l),m(l,a),m(r,c),m(r,i),m(i,u),m(r,f),m(r,h),m(h,d),m(r,g),m(r,w),m(w,T),m(r,N),m(r,S),m(S,B),m(r,H),m(r,j),m(j,k),m(o,L),m(o,F),m(F,R),m(R,z),m(F,C),m(F,O),m(O,q),m(F,U),m(F,M),m(M,K),m(F,G),m(F,X),m(X,Y),m(F,V),m(F,J),m(J,Q),m(F,W),m(F,st),m(st,ot),v(t,rt,p),v(t,lt,p),m(lt,at),v(t,ct,p),xt&&xt.m(t,p),v(t,it,p),ut=!0},p(t,[e]){(!ut||1&e)&&ft!==(ft=t[0].equity.toFixed(2)+"")&&D(z,ft),(!ut||1&e)&&ht!==(ht=t[0].avaliableBalance.toFixed(2)+"")&&D(q,ht),(!ut||1&e)&&dt!==(dt=t[0].longPositionSize+"")&&D(K,dt),(!ut||1&e)&&mt!==(mt=t[0].longPositionPNLInPercent.toFixed(2)+"")&&D(Y,mt),(!ut||1&e)&&vt!==(vt=t[0].shortPositionSize+"")&&D(Q,vt),(!ut||1&e)&&pt!==(pt=t[0].shortPositionPNLInPercent.toFixed(2)+"")&&D(ot,pt),void 0!==t[0]?xt?(xt.p(t,e),1&e&&et(xt,1)):(xt=gt(t),xt.c(),et(xt,1),xt.m(it.parentNode,it)):xt&&(Z(),nt(xt,1,1,(()=>{xt=null})),tt())},i(t){ut||(et(xt),ut=!0)},o(t){nt(xt),ut=!1},d(t){t&&p(e),t&&p(s),t&&p(o),t&&p(rt),t&&p(lt),t&&p(ct),xt&&xt.d(t),t&&p(it)}}}function yt(t,e,n){let{accountInfo:s}=e;return t.$$set=t=>{"accountInfo"in t&&n(0,s=t.accountInfo)},[s,function(t){s=t,n(0,s)}]}class $t extends ft{constructor(t){var e;super(),document.getElementById("svelte-1x3wihs-style")||((e=x("style")).id="svelte-1x3wihs-style",e.textContent="table.svelte-1x3wihs{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1x3wihs,th.svelte-1x3wihs{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1x3wihs:nth-child(even){background-color:#dddddd}",m(document.head,e)),ut(this,t,yt,xt,l,{accountInfo:0})}}function _t(t,e,n){const s=t.slice();return s[2]=e[n],s}function wt(t){let e,n,s=t[2].character+"";return{c(){e=x("span"),n=y(s),this.h()},l(t){e=P(t,"SPAN",{style:!0,class:!0});var o=b(e);n=I(o,s),o.forEach(p),this.h()},h(){S(e,"left",t[2].x+"%"),S(e,"top",t[2].y+"%"),S(e,"transform","scale("+t[2].r+")"),E(e,"class","svelte-5dvyog")},m(t,s){v(t,e,s),m(e,n)},p(t,o){1&o&&s!==(s=t[2].character+"")&&D(n,s),1&o&&S(e,"left",t[2].x+"%"),1&o&&S(e,"top",t[2].y+"%"),1&o&&S(e,"transform","scale("+t[2].r+")")},d(t){t&&p(e)}}}function Et(e){let n,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=wt(_t(e,s,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=_()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);n=_()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);v(t,n,e)},p(t,[e]){if(1&e){let r;for(s=t[0],r=0;r<s.length;r+=1){const l=_t(t,s,r);o[r]?o[r].p(l,e):(o[r]=wt(l),o[r].c(),o[r].m(n.parentNode,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},i:t,o:t,d(t){g(o,t),t&&p(n)}}}function bt(t,e,n){let s=["🥳","🎉","✨","💰","💵","🏦","💶","🎩"],o=new Array(8).fill().map(((t,e)=>({character:s[e%s.length],x:100*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()}))).sort(((t,e)=>t.r-e.r));return function(t){(function(){if(!H)throw new Error("Function called outside component initialization");return H})().$$.on_mount.push(t)}((()=>{let t;return function e(){t=requestAnimationFrame(e),n(0,o=o.map((t=>(t.y+=.7*t.r,t.y>120&&(t.y=-20),t))))}(),()=>cancelAnimationFrame(t)})),[o]}class Tt extends ft{constructor(t){var e;super(),document.getElementById("svelte-5dvyog-style")||((e=x("style")).id="svelte-5dvyog-style",e.textContent="body{overflow:hidden}span.svelte-5dvyog{position:absolute;font-size:5vw;user-select:none}",m(document.head,e)),ut(this,t,bt,Et,l,{})}}function Pt(e){let n,s;return n=new Tt({}),{c(){lt(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,e){ct(n,t,e),s=!0},p:t,i(t){s||(et(n.$$.fragment,t),s=!0)},o(t){nt(n.$$.fragment,t),s=!1},d(t){it(n,t)}}}function It(t){let e,n,s;function o(e){t[4](e)}let r={};return void 0!==t[0]&&(r.accountInfo=t[0]),e=new $t({props:r}),R.push((()=>rt(e,"accountInfo",o))),{c(){lt(e.$$.fragment)},l(t){at(e.$$.fragment,t)},m(t,n){ct(e,t,n),s=!0},p(t,s){const o={};!n&&1&s&&(n=!0,o.accountInfo=t[0],M((()=>n=!1))),e.$set(o)},i(t){s||(et(e.$$.fragment,t),s=!0)},o(t){nt(e.$$.fragment,t),s=!1},d(t){it(e,t)}}}function At(t){let e,n,s,r,l,a,c,i,u,f,h,d,g,_,T,D,S,B,H,j,k,L,F,R,z,C;const O=[It,Pt],q=[];function U(t,e){return void 0!==t[0]?0:1}return j=U(t),k=q[j]=O[j](t),{c(){e=x("h1"),n=y("For Friends Only"),s=y(" \n  \nEnter Your API Key "),r=x("p"),l=y("\nExample Key (Demo Account): "),a=x("br"),c=x("br"),i=y(" GCNuPXHiTsX5FTEDhV "),u=x("p"),f=x("br"),h=$(),d=x("input"),g=$(),_=x("button"),T=y("Los"),D=$(),S=x("p"),B=$(),H=x("p"),k.c(),L=$(),F=x("link"),this.h()},l(t){e=P(t,"H1",{class:!0});var o=b(e);n=I(o,"For Friends Only"),o.forEach(p),s=I(t," \n  \nEnter Your API Key "),r=P(t,"P",{}),b(r).forEach(p),l=I(t,"\nExample Key (Demo Account): "),a=P(t,"BR",{}),c=P(t,"BR",{}),i=I(t," GCNuPXHiTsX5FTEDhV "),u=P(t,"P",{});var m=b(u);f=P(m,"BR",{}),m.forEach(p),h=A(t),d=P(t,"INPUT",{type:!0,name:!0,id:!0}),g=A(t),_=P(t,"BUTTON",{});var v=b(_);T=I(v,"Los"),v.forEach(p),D=A(t),S=P(t,"P",{}),b(S).forEach(p),B=A(t),H=P(t,"P",{});var x=b(H);k.l(x),x.forEach(p),L=A(t),F=P(t,"LINK",{href:!0,rel:!0}),this.h()},h(){E(e,"class","svelte-1cxhk4e"),E(d,"type","text"),E(d,"name",""),E(d,"id",""),E(F,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),E(F,"rel","stylesheet")},m(o,p){v(o,e,p),m(e,n),v(o,s,p),v(o,r,p),v(o,l,p),v(o,a,p),v(o,c,p),v(o,i,p),v(o,u,p),m(u,f),v(o,h,p),v(o,d,p),N(d,t[1]),v(o,g,p),v(o,_,p),m(_,T),v(o,D,p),v(o,S,p),v(o,B,p),v(o,H,p),q[j].m(H,null),v(o,L,p),v(o,F,p),R=!0,z||(C=[w(d,"input",t[3]),w(_,"click",t[2])],z=!0)},p(t,[e]){2&e&&d.value!==t[1]&&N(d,t[1]);let n=j;j=U(t),j===n?q[j].p(t,e):(Z(),nt(q[n],1,1,(()=>{q[n]=null})),tt(),k=q[j],k?k.p(t,e):(k=q[j]=O[j](t),k.c()),et(k,1),k.m(H,null))},i(t){R||(et(k),R=!0)},o(t){nt(k),R=!1},d(t){t&&p(e),t&&p(s),t&&p(r),t&&p(l),t&&p(a),t&&p(c),t&&p(i),t&&p(u),t&&p(h),t&&p(d),t&&p(g),t&&p(_),t&&p(D),t&&p(S),t&&p(B),t&&p(H),q[j].d(),t&&p(L),t&&p(F),z=!1,o(C)}}}function Dt(t,e,n){let s,o="";return[s,o,async function(){try{const t=`https://openforce.de/getAccountInfo/apiKey/${o}`;n(0,s=await(await fetch(t)).json()),console.log(s)}catch(t){alert(`I could not get any data for api key ${o}`)}},function(){o=this.value,n(1,o)},function(t){s=t,n(0,s)}]}class Nt extends ft{constructor(t){var e;super(),document.getElementById("svelte-1cxhk4e-style")||((e=x("style")).id="svelte-1cxhk4e-style",e.textContent="h1.svelte-1cxhk4e{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}",m(document.head,e)),ut(this,t,Dt,At,l,{})}}function St(t,{delay:n=0,duration:s=400,easing:o=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:o,css:t=>"opacity: "+t*r}}function Bt(e){let n,s,o,r,l,a,c,i;return o=new Nt({}),{c(){n=x("body"),s=x("main"),lt(o.$$.fragment),r=$(),l=x("p"),a=x("br"),this.h()},l(t){n=P(t,"BODY",{class:!0});var e=b(n);s=P(e,"MAIN",{class:!0});var c=b(s);at(o.$$.fragment,c),r=A(c),l=P(c,"P",{});var i=b(l);a=P(i,"BR",{}),i.forEach(p),c.forEach(p),e.forEach(p),this.h()},h(){E(s,"class","svelte-xjajc1"),E(n,"class","svelte-xjajc1")},m(t,e){v(t,n,e),m(n,s),ct(o,s,null),m(s,r),m(s,l),m(l,a),i=!0},p:t,i(t){i||(et(o.$$.fragment,t),U((()=>{c||(c=ot(s,St,{},!0)),c.run(1)})),i=!0)},o(t){nt(o.$$.fragment,t),c||(c=ot(s,St,{},!1)),c.run(0),i=!1},d(t){t&&p(n),it(o),t&&c&&c.end()}}}return new class extends ft{constructor(t){var e;super(),document.getElementById("svelte-xjajc1-style")||((e=x("style")).id="svelte-xjajc1-style",e.textContent="body.svelte-xjajc1{overflow:scroll}main.svelte-xjajc1{text-align:center;padding:1em;margin:0 auto}@media(min-width: 640px){main.svelte-xjajc1{max-width:none}}",m(document.head,e)),ut(this,t,null,Bt,l,{})}}({target:document.querySelector("#__snel"),props:{}}),{}})();