(this["webpackJsonpjsonld-checker-app"]=this["webpackJsonpjsonld-checker-app"]||[]).push([[0],{133:function(e){e.exports=JSON.parse('{"@context":["https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json"],"id":"did:example:123","type":["CachedDIDDocument"],"name":"Farming Sensor DID Document","image":"https://via.placeholder.com/150","description":"An IoT device in the middle of a corn field.","tags":["professional"],"correlation":["4058a72a-9523-11ea-bb37-0242ac130002"],"created":"2017-06-18T21:19:10Z","expires":"2026-06-18T21:19:10Z","didDocument":{"@context":"https://w3id.org/did/v0.11","id":"did:example:123","assertionMethod":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"authentication":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"capabilityDelegation":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"capabilityInvocation":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"keyAgreement":[{"id":"did:example:123#zC5iai1sL93gQxn8LKh1i42fTbpfar65dVx4NYznYfG3Y5","type":"X25519KeyAgreementKey2019","controller":"did:example:123","publicKeyBase58":"6DrzegWwfw8Xg5MsHX95sVnJaPmtXP214B5X9hkG9oRs"}],"publicKey":[{"id":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","type":"Ed25519VerificationKey2018","controller":"did:example:123","publicKeyBase58":"DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz"}]}}')},164:function(e,t,a){e.exports=a(226)},196:function(e,t){},209:function(e,t){},219:function(e,t){},220:function(e,t){},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=a(10),i=a(263),u=a(285),s=a(289),m=a(286),d=a(287),p=a(129),f=a.n(p),h=(a(176),a(177),a(178),function(e){var t=e.onChange,a=e.value,n=e.index,c=e.readOnly;return r.a.createElement(f.a,{placeholder:"Paste your JSON-LD object here",width:"800px",mode:"json",theme:"monokai",name:"json-ld-editor-".concat(n),onChange:t,readOnly:c,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:a,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})}),b=a(265),g=Object(i.a)((function(e){return{wrapper:{margin:e.spacing(1),position:"relative"}}})),v=function(e){var t=e.value,a=g(),n=encodeURIComponent(t);return r.a.createElement("div",{className:a.wrapper},r.a.createElement(b.a,{color:"primary",variant:"contained",href:"https://json-ld.org/playground/#json-ld=".concat(n),target:"_blank",rel:"noopener"},"Open in JSON-LD Playground"))},E=a(12),y=a.n(E),j=a(30),k=a(41),O=a(32),w=a(92),x=a(91),S=a(296),N=a(3),C=function(e,t){var a=new URLSearchParams(window.location.search);a.get(e)!==t&&(a.set(e,t),window.history.pushState(null,"","/?".concat(a.toString())))},P=function(e){return new URLSearchParams(window.location.search).get(e)},B=a(267),R=Object(i.a)((function(){return Object(S.a)({loaderButtonWrapper:{position:"relative"},loaderButtonProgress:{color:w.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),D=function(e){var t=e.onClick,a=e.buttonText,n=e.className,c=R(),o=r.a.useState(!1),i=Object(l.a)(o,2),u=i[0],s=i[1];return r.a.createElement("div",{className:c.loaderButtonWrapper},r.a.createElement(b.a,{className:n,color:"primary",variant:"contained",disabled:u,onClick:function(e){s(!0),t(e).finally((function(){s(!1)}))}},a),u&&r.a.createElement(B.a,{size:24,className:c.loaderButtonProgress}))},z=Object(i.a)((function(e){return Object(S.a)({root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:w.a[500],"&:hover":{backgroundColor:w.a[700]}},buttonError:{backgroundColor:x.a[500],"&:hover":{backgroundColor:x.a[700]}}})})),T=function(e){var t,a=e.value,n=e.setResult,c=P("analyze"),o=z(),i=r.a.useState(!1),u=Object(l.a)(i,2),s=u[0],m=u[1],d=r.a.useState(!1),p=Object(l.a)(d,2),f=p[0],h=p[1],b=Object(N.a)((t={},Object(k.a)(t,o.buttonSuccess,s),Object(k.a)(t,o.buttonError,f),t)),g=function(){var e=Object(j.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)(a);case 2:t=e.sent,m(t.ok),h(!t.ok),n(t),C("analyze","1");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){"1"===c&&g()}),[c]),r.a.useEffect((function(){m(!1),h(!1)}),[a]),r.a.createElement("div",{className:o.root},s,f,r.a.createElement("div",{className:o.wrapper},r.a.createElement(D,{className:b,onClick:g,buttonText:"Check"})))},L=a(133),I=a(290),M=a(269),F=function(e){var t=e.result,a=e.className;return t?t.ok?r.a.createElement(I.a,{severity:"success"},"All Good!"):r.a.createElement(I.a,{className:a,severity:"error"},r.a.createElement(M.a,null,t.error.type),t.error.details):r.a.createElement(r.a.Fragment,null)},U=a(291),W=a(139),A=Object(i.a)((function(e){return Object(S.a)({typography:{padding:e.spacing(2)},wrapper:{margin:e.spacing(1),position:"relative"}})})),J=function(){var e=A(),t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useState(null),i=Object(l.a)(o,2),u=i[0],s=i[1],m=Boolean(n)&&Boolean(u),d=m?"simple-popover":void 0,p=function(){var e="".concat(window.location.toString());return fetch("https://tiny.gjgd.fr/",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({url:e})}).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(e){var t=e.shortUrl||"";return c(t),t}))},f=function(){var e=Object(j.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(t.currentTarget),c(""),e.abrupt("return",p());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.wrapper},r.a.createElement(D,{onClick:f,buttonText:"Share"}),r.a.createElement(U.a,{id:d,open:m,anchorEl:u,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(W.a,{className:e.typography},r.a.createElement("span",null,"Copy the URL or use this short one:"),r.a.createElement("br",null),r.a.createElement("a",{className:e.wrapper,href:"https://".concat(n),target:"_blank",rel:"noopener noreferrer"},n))))},G=Object(i.a)((function(e){return{buttonWrapper:{display:"flex",margin:e.spacing(1)},contentWrapper:{display:"table",margin:e.spacing(1)},checkResult:{marginBottom:e.spacing(2)}}})),H=function(){var e=G(),t=r.a.useState((function(){var e=P("json");return e?decodeURIComponent(e):JSON.stringify(L,null,2)})),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useState(),i=Object(l.a)(o,2),u=i[0],s=i[1];return r.a.useEffect((function(){C("json",encodeURIComponent(n))}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.buttonWrapper},r.a.createElement(T,{value:n,setResult:s}),r.a.createElement(v,{value:n}),r.a.createElement(J,null)),r.a.createElement("div",{className:e.contentWrapper},r.a.createElement(F,{className:e.checkResult,result:u}),r.a.createElement(h,{onChange:function(e){C("analyze","0"),s(void 0),c(e)},value:n})))},V=a(281),q=a(292),K=a(274),Q=a(268),X=a(276),_=a(278),Y=a(273),Z=a(275),$=a(277),ee=a(272),te=a(228),ae=a(135),ne=a.n(ae),re=a(134),ce=a.n(re),oe=a(87),le=a.n(oe),ie=a(88),ue=a.n(ie),se=Object(i.a)({root:{"& > *":{borderBottom:"unset"}}});function me(e){var t,a=e.row,n=r.a.useState(!1),c=Object(l.a)(n,2),o=c[0],i=c[1],u=se();return t=a.result.ok?r.a.createElement(le.a,{style:{color:"green"}}):r.a.createElement(ue.a,{style:{color:"red"}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{className:u.root},r.a.createElement(Y.a,null,r.a.createElement(Q.a,{"aria-label":"expand row",size:"small",onClick:function(){return i(!o)}},o?r.a.createElement(ce.a,null):r.a.createElement(ne.a,null))),r.a.createElement(Y.a,{component:"th",scope:"row"},a.name),r.a.createElement(Y.a,{align:"center"},t)),r.a.createElement(ee.a,null,r.a.createElement(Y.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},r.a.createElement(K.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(d.a,{margin:1},r.a.createElement(W.a,{variant:"h6",gutterBottom:!0,component:"div"},"Details"),r.a.createElement(F,{result:a.result}),r.a.createElement(h,{value:JSON.stringify(a.object,null,2),index:a.key,readOnly:!0}))))))}var de,pe=function(e){var t=e.results.map((function(e,t){var a=e.object,n=e.result;return{key:t,name:a.id?a.id:"object ".concat(t),object:a,result:n}}));return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(Z.a,{component:te.a},r.a.createElement(X.a,{"aria-label":"collapsible table"},r.a.createElement($.a,null,r.a.createElement(ee.a,null,r.a.createElement(Y.a,null),r.a.createElement(Y.a,null,"JSON-LD objects detected"),r.a.createElement(Y.a,{align:"center"},"Status"))),r.a.createElement(_.a,null,t.map((function(e){return r.a.createElement(me,{key:e.key,row:e})})))))},fe=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},progressBar:{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),he=function(){var e=P("analyze"),t=r.a.useState((function(){var e=P("url");return e?decodeURIComponent(e):"https://raw.githubusercontent.com/transmute-industries/universal-wallet/master/docs/index.html"})),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useState([]),i=Object(l.a)(o,2),u=i[0],s=i[1],m=r.a.useState(0),d=Object(l.a)(m,2),p=d[0],f=d[1],h=function(){var e=Object(j.a)(y.a.mark((function e(){var t,a,r,c,o,l,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,e.next=8,Object(O.b)(a);case 8:r=e.sent,f(r.length),c=[],o=0;case 12:if(!(o<r.length)){e.next=22;break}return l=r[o],e.next=16,Object(O.a)(l);case 16:i=e.sent,c.push({object:l,result:i}),s([].concat(c));case 19:o+=1,e.next=12;break;case 22:C("analyze","1");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){C("url",n)}),[n]),r.a.useEffect((function(){"1"===e&&h()}),[e]);var b=fe(),g=u.filter((function(e){return!e.result.ok})),v=g.length>0,E="Found ".concat(g.length," JSON-LD errors");return r.a.createElement("div",{className:b.root},r.a.createElement(D,{onClick:h,buttonText:"Check"}),r.a.createElement(q.a,{label:"Enter the URL to a file",onChange:function(e){C("analyze","0"),c(e.target.value)},defaultValue:n,style:{margin:8},fullWidth:!0,margin:"normal"}),v?r.a.createElement(I.a,{severity:"error"},r.a.createElement(M.a,null,E),"Check details below"):r.a.createElement(r.a.Fragment,null),p>0?r.a.createElement("div",{className:b.progressBar},r.a.createElement(V.a,{variant:"determinate",value:100*u.length/p})):r.a.createElement(r.a.Fragment,null),r.a.createElement(pe,{results:u}))},be=a(136),ge=a(102),ve=a(293),Ee=a(284),ye=a(283),je=a(8),ke=a(294),Oe=a(298),we=a(282),xe=a(295),Se=a(138),Ne=a.n(Se);function Ce(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}!function(e){e[e.Unchecked=0]="Unchecked",e[e.Valid=1]="Valid",e[e.Invalid=2]="Invalid"}(de||(de={}));var Pe=[{id:"path",align:"left",disablePadding:!0,label:"Path"},{id:"url",align:"left",disablePadding:!0,label:"Raw URL"},{id:"ok",align:"left",disablePadding:!0,label:"valid"}];function Be(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,c=e.orderBy,o=e.numSelected,l=e.rowCount,i=e.onRequestSort;return r.a.createElement($.a,null,r.a.createElement(ee.a,null,r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(ve.a,{indeterminate:o>0&&o<l,checked:l>0&&o===l,onChange:a,inputProps:{"aria-label":"select all desserts"}})),Pe.map((function(e){return r.a.createElement(Y.a,{key:e.id,align:e.align,sortDirection:c===e.id&&n},r.a.createElement(Oe.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(a=e.id,function(e){i(e,a)})},e.label,c===e.id?r.a.createElement("span",{className:t.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var a}))))}var Re=Object(i.a)((function(e){return Object(S.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(je.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),De=function(e){var t=Re(),a=e.numSelected;return r.a.createElement(we.a,{className:Object(N.a)(t.root,Object(k.a)({},t.highlight,a>0))},a>0?r.a.createElement(W.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div"},"".concat(a," selected")):r.a.createElement(W.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},"Files found from Github repository"),a>0?r.a.createElement(r.a.Fragment,null):r.a.createElement(xe.a,{title:"Filter list"},r.a.createElement(Q.a,{"aria-label":"filter list"},r.a.createElement(Ne.a,null))))},ze=Object(i.a)((function(e){return Object(S.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})})),Te=function(e){var t=e.files,a=ze(),n=r.a.useState("asc"),c=Object(l.a)(n,2),o=c[0],i=c[1],u=r.a.useState("path"),s=Object(l.a)(u,2),m=s[0],d=s[1],p=r.a.useState((function(){var e=new Map;return t.forEach((function(t){e.set(t.path,!1)})),e})),f=Object(l.a)(p,2),h=f[0],b=f[1],g=r.a.useState((function(){var e=new Map;return t.forEach((function(t){e.set(t.path,de.Unchecked)})),e})),v=Object(l.a)(g,2),E=v[0],w=v[1],x=r.a.useState(0),S=Object(l.a)(x,2),N=S[0],C=S[1],P=r.a.useState(100),B=Object(l.a)(P,2),R=B[0],z=B[1],T=function(){return Array.from(h).filter((function(e){return e[1]})).length},L=r.a.useState({}),I=Object(l.a)(L,2),M=I[0],F=I[1],U=function(e){var a=e.target,n=a.name,r=a.checked,c=n.split(".").pop(),o=new Map(h);t.filter((function(e){return e.path.split(".").pop()===c})).forEach((function(e){o.set(e.path,r)})),b(o),F(Object(ge.a)(Object(ge.a)({},M),{},Object(k.a)({},n,r)))},W=function(e){return"https://raw.githubusercontent.com/gjgd/jsonld-checker/master/".concat(e)},A=function(){var e=Object(j.a)(y.a.mark((function e(){var a,n,r,c,o,l,i,u,s,m,d,p,f;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.filter((function(e){return h.get(e.path)})),n=new Map(E),r=Object(be.a)(a),e.prev=3,r.s();case 5:if((c=r.n()).done){e.next=32;break}return o=c.value,l=W(o.path),e.next=10,fetch(l);case 10:return i=e.sent,e.next=13,i.text();case 13:return u=e.sent,e.next=16,Object(O.b)(u);case 16:s=e.sent,m=!0,d=0;case 19:if(!(d<s.length)){e.next=28;break}return p=s[d],e.next=23,Object(O.a)(p);case 23:f=e.sent,m=m&&f.ok;case 25:d+=1,e.next=19;break;case 28:n.set(o.path,m?de.Valid:de.Invalid),w(new Map(n));case 30:e.next=5;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(3),r.e(e.t0);case 37:return e.prev=37,r.f(),e.finish(37);case 40:case"end":return e.stop()}}),e,null,[[3,34,37,40]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){var e=new Map;t.forEach((function(t){e.set(t.path,de.Unchecked)})),w(e)}),[h,w,t]),r.a.createElement("div",{className:a.root},r.a.createElement(te.a,{className:a.paper},r.a.createElement(ye.a,{row:!0},["*.js","*.ts","*.json","*.html"].map((function(e){return r.a.createElement(Ee.a,{key:e,control:r.a.createElement(ve.a,{checked:M[e],onChange:U,name:e,color:"primary"}),label:e})}))),r.a.createElement(D,{onClick:A,buttonText:"Check"}),r.a.createElement(De,{numSelected:T()}),r.a.createElement(Z.a,null,r.a.createElement(X.a,{className:a.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(Be,{classes:a,numSelected:T(),order:o,orderBy:m,onSelectAllClick:function(e){var a=new Map(h);t.forEach((function(t){a.set(t.path,e.target.checked)})),b(a)},onRequestSort:function(e,t){i(m===t&&"asc"===o?"desc":"asc"),d(t)},rowCount:t.length}),r.a.createElement(_.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,a){return Ce(e,a,t)}:function(e,a){return-Ce(e,a,t)}}(o,m)).slice(N*R,N*R+R).map((function(e,t){var a,n,c=(a=e.path,h.get(a)),o=function(e){return E.get(e)}(e.path),l="enhanced-table-checkbox-".concat(t),i="".concat(window.location.origin,"?url=").concat(W(e.path),"&tab=1&analyze=1");return n=o===de.Valid?r.a.createElement(le.a,{style:{color:"green"}}):o===de.Invalid?r.a.createElement(ue.a,{style:{color:"red"}}):r.a.createElement(r.a.Fragment,null),r.a.createElement(ee.a,{hover:!0,onClick:function(t){return function(e,t){var a=h.get(t),n=new Map(h);n.set(t,!a),b(n)}(0,e.path)},role:"checkbox","aria-checked":c,tabIndex:-1,key:e.path,selected:c},r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(ve.a,{checked:c,inputProps:{"aria-labelledby":l}})),r.a.createElement(Y.a,{component:"th",id:l,scope:"row",padding:"none"},e.path),r.a.createElement(Y.a,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},i)),r.a.createElement(Y.a,null,n))}))))),r.a.createElement(ke.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:R,page:N,onChangePage:function(e,t){C(t)},onChangeRowsPerPage:function(e){z(parseInt(e.target.value,10)),C(0)}})))},Le=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},progressBar:{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Ie=function(){var e=Le(),t=r.a.useState((function(){var e=P("repo");return e?decodeURIComponent(e):"https://github.com/transmute-industries/universal-wallet"})),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useState([]),i=Object(l.a)(o,2),u=i[0],s=i[1];r.a.useEffect((function(){C("repo",n)}),[n]);var m=function(){var e=Object(j.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("gjgd","jsonld-checker");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.root},r.a.createElement(D,{onClick:m,buttonText:"List files"}),r.a.createElement(q.a,{label:"Enter the URL of a Github repo",onChange:function(e){c(e.target.value)},defaultValue:n,style:{margin:8},fullWidth:!0,margin:"normal"}),u.length>0?r.a.createElement(Te,{files:u}):r.a.createElement(r.a.Fragment,null))};function Me(e){var t=e.children,a=e.value,n=e.index;return r.a.createElement("div",{role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a===n&&r.a.createElement(d.a,{p:3},t))}function Fe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ue=Object(i.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function We(){var e=Ue(),t=r.a.useState((function(){var e,t=P("tab");return t?(e=Number.parseInt(t,10))>2&&(e=0):e=0,e})),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){C("tab","".concat(n))}),[n]),r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(s.a,{value:n,onChange:function(e,t){c(t)},centered:!0},r.a.createElement(m.a,Object.assign({label:"Check a single JSON"},Fe(0))),r.a.createElement(m.a,Object.assign({label:"Check a file"},Fe(1))),r.a.createElement(m.a,Object.assign({label:"Check a Github repo"},Fe(2))))),r.a.createElement(Me,{value:n,index:0},r.a.createElement(H,null)),r.a.createElement(Me,{value:n,index:1},r.a.createElement(he,null)),r.a.createElement(Me,{value:n,index:2},r.a.createElement(Ie,null)))}var Ae=function(){return r.a.createElement(We,null)};a(225);console.log("Current commit is ".concat("f499691")),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root"))},32:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return l}));var n=a(60),r=a.n(n);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a=""),this.ok=e,this.error={type:t,details:a}},o=a(223),l=function(e,t,a){void 0===a&&(a="HEAD");try{return Promise.resolve(function(e){try{return Promise.resolve(o("https://api.github.com/repos/"+e).then((function(e){return e.json()})))}catch(t){return Promise.reject(t)}}(e+"/"+t+"/git/trees/"+a+"?recursive=1")).then((function(e){return e.tree.filter((function(e){return"blob"===e.type}))}))}catch(n){return Promise.reject(n)}},i={},u="undefined"!==typeof e&&null!=e.versions&&null!=e.versions.node?r.a.documentLoaders.node():r.a.documentLoaders.xhr();r.a.documentLoader=function(e){try{return e in i?Promise.resolve({contextUrl:null,document:i[e],documentUrl:e}):Promise.resolve(u(e)).then((function(t){return i[e]=t.document,t}))}catch(t){return Promise.reject(t)}};var s=function(e){return!["@id","@type"].includes(e)},m=function(e){try{return Promise.resolve(function(e,t){try{var a=e()}catch(n){return t(n)}return a&&a.then?a.then(void 0,t):a}((function(){var t;return t="string"===typeof e?JSON.parse(e):e,Promise.resolve(r.a.expand(t)).then((function(e){return Promise.resolve(r.a.compact(e,t["@context"])).then((function(e){var a=Object.keys(t).filter(s),n=new Set(Object.keys(e)),r=a.filter((function(e){return!n.has(e)}));return 0===r.length?new c(!0):new c(!1,"MISSING_PROPERTIES_IN_CONTEXT",JSON.stringify(r))}))}))}),(function(e){return new c(!1,e.name,e.message)})))}catch(t){return Promise.reject(t)}},d=function(e){return function(e){for(var t=[],a=0;a<e.length;a+=1)"{"===e[a]&&t.push(a);return t}(e).map((function(t){return function(e,t){var a=e[t];if("{"!==a)throw new Error("start must be the index of an opening bracket");for(var n=1,r=t+1,c=e.length;0!==n&&r<c;){var o=e[r];"{"===o?n+=1:"}"===o&&(n-=1),r+=1,a+=o}try{return JSON.parse(a)}catch(l){return null}}(e,t)})).filter(Boolean)},p=function(e){return d(e).filter((function(e){return function(e){return"@context"in e}(e)}))}}).call(this,a(63))}},[[164,1,2]]]);
//# sourceMappingURL=main.4b53112d.chunk.js.map