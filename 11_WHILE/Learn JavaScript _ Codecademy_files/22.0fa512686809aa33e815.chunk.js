(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[22],{nWT6:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var s=t("DZdY"),i=t("FtvJ"),r=t("630U"),n=t("q1tI"),c=t("yrBZ"),l=t("CAym"),o=t("e9fk"),g=t("lw52"),d=t("nKUr"),m=r.y.variant({prop:"layout",defaultVariant:"message",variants:{message:{minHeight:"80px",gridTemplateAreas:"'message message close'"},"icon-message":{gridTemplateAreas:"'icon message close'",minHeight:"104px"},"title-message":{minHeight:"104px",gridTemplateAreas:"'message message close'"}}}),u=Object(s.a)(o.a,{target:"evqdr6g1",label:"ToastContainer"})(r.y.css({display:"grid",width:360,py:12,px:16,pr:12,columnGap:12,gridTemplateColumns:"4rem 1fr 2rem"}),m,""),p=Object(s.a)(c.b,{target:"evqdr6g0",label:"IconContainer"})(r.y.css({alignSelf:"center",width:64,height:64,gridArea:"icon",backgroundSize:"contain"}),""),b=function Toast(e){var a=e.title,t=e.children,s=e.icon,r=e.onClose,o=Object(n.useMemo)((function(){return s?"icon-message":a?"title-message":"message"}),[a,s]);return Object(d.jsxs)(u,{role:"status","aria-live":"polite",layout:o,children:[function renderIcon(){return s?"string"==typeof s?Object(d.jsx)(p,{gridArea:"icon",borderRadius:"50%",backgroundImage:"url(".concat(s,")")}):Object(d.jsx)(p,{gridArea:"icon",center:!0,children:s}):null}(),Object(d.jsxs)(c.a,{gridArea:"message",py:4,children:[a&&Object(d.jsx)(g.a,{variant:"p-base",fontWeight:"title",mb:4,children:a}),Object(d.jsx)(g.a,{as:"div",variant:"p-small",children:t})]}),Object(d.jsx)(l.a,{onClick:r,size:"small",variant:"secondary",icon:i.a,alignSelf:"start","aria-label":"Dismiss Toast"})]})}}}]);
//# sourceMappingURL=22.0fa512686809aa33e815.chunk.js.map