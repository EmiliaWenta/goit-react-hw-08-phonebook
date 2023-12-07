"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[31],{9031:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var t=r(2791),i=r(3855),s=r(5264),a=r(4810),o=r(2233),l=r(8560),c=r(824),d=r(6582),u=r(9589),x=r(5090),m=r(9696),h=r(2746),f=r(5350),p=r(7438),j=r(1692),g=r(7943),v=r(7236),y=r(9055),b=r(6351),C=r(3477),Z=r(184);function N(){var e=(0,i.I0)(),n=(0,l.v9)(b.Af).error;return n?s.Notify.failure(n):(0,Z.jsx)(c.xu,{children:(0,Z.jsxs)(d.k,{flexDirection:"column",justify:"flex-start",align:"center",gap:"15px",padding:"15px",children:[(0,Z.jsx)(u.X,{as:"h1",size:"lg",color:"#2196f3",children:"Phonebook"}),(0,Z.jsx)(x.Z,{variant:"outline",borderColor:"#d8dee4",w:"400px",size:"lg",borderRadius:8,boxShadow:"lg",children:(0,Z.jsx)(m.e,{gap:"10px",children:(0,Z.jsx)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget,t=r.elements.name.value,i=r.elements.number.value;e((0,C.uK)({name:t,number:i})),r.reset()},children:(0,Z.jsxs)(h.K,{spacing:"4",children:[(0,Z.jsxs)(f.NI,{isRequired:!0,children:[(0,Z.jsx)(p.l,{size:"md",children:"Name"}),(0,Z.jsxs)(j.B,{children:[(0,Z.jsx)(g.Z,{pointerEvents:"none",children:(0,Z.jsx)(a.m,{color:"gray.300"})}),(0,Z.jsx)(v.I,{name:"name",placeholder:"Enter Name",type:"text",bg:"white",borderColor:"#d8dee4",size:"md",borderRadius:"6px"})]})]}),(0,Z.jsxs)(f.NI,{isRequired:!0,children:[(0,Z.jsx)(p.l,{size:"md",children:"Number"}),(0,Z.jsxs)(j.B,{children:[(0,Z.jsx)(g.Z,{pointerEvents:"none",children:(0,Z.jsx)(o.q,{color:"gray.300"})}),(0,Z.jsx)(v.I,{name:"number",placeholder:"Enter phone number",type:"tel",bg:"white",borderColor:"#d8dee4",size:"md",borderRadius:"6px"})]})]}),(0,Z.jsx)(y.z,{type:"submit",bg:"#2196f3",color:"white",size:"sm",_hover:{bg:"darkblue"},_active:{bg:"darkblue"},children:"Add contact"})]})})})})]})})}var k=r(4659);function w(){var e=(0,i.I0)();return(0,Z.jsx)(c.xu,{children:(0,Z.jsxs)(d.k,{flexDirection:"column",gap:"10px",justify:"center",align:"center",children:[(0,Z.jsx)(u.X,{as:"h3",size:"md",color:"#2196f3",children:"Find contacts by name"}),(0,Z.jsx)(v.I,{type:"text",name:"nametofilter",bg:"white",borderColor:"#d8dee4",size:"md",borderRadius:"6px",maxWidth:"400px",minWidth:"350px",width:"50%",onChange:function(n){var r=n.target.value;e((0,k.W)(r))}})]})})}var z=r(884),_=r(1413),I=r(4942),L=r(4925),S=r(9439),T=r(9640),G=r(9886),A=r(7200),q=r(5597),D=r(2481),R=r(2996),E=r(5812),M=["children","styleType","stylePosition","spacing"],P=["as"],F=["as"],H=(0,G.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),W=(0,S.Z)(H,2),X=W[0],B=W[1],K=(0,q.G)((function(e,n){var r=(0,D.jC)("List",e),t=(0,R.Lr)(e),i=t.children,s=t.styleType,a=void 0===s?"none":s,o=t.stylePosition,l=t.spacing,c=(0,L.Z)(t,M),d=(0,A.W)(i),u=l?(0,I.Z)({},"& > *:not(style) ~ *:not(style)",{mt:l}):{};return(0,Z.jsx)(X,{value:r,children:(0,Z.jsx)(E.m.ul,(0,_.Z)((0,_.Z)({ref:n,listStyleType:a,listStylePosition:o,role:"list",__css:(0,_.Z)((0,_.Z)({},r.container),u)},c),{},{children:d}))})}));K.displayName="List",(0,q.G)((function(e,n){e.as;var r=(0,L.Z)(e,P);return(0,Z.jsx)(K,(0,_.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList",(0,q.G)((function(e,n){e.as;var r=(0,L.Z)(e,F);return(0,Z.jsx)(K,(0,_.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))})).displayName="UnorderedList";var V=(0,q.G)((function(e,n){var r=B();return(0,Z.jsx)(E.m.li,(0,_.Z)((0,_.Z)({ref:n},e),{},{__css:r.item}))}));V.displayName="ListItem";var Y=(0,q.G)((function(e,n){var r=B();return(0,Z.jsx)(T.J,(0,_.Z)((0,_.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))}));Y.displayName="ListIcon";var J=r(8771);function O(e){var n=e.id,r=e.name,t=e.number,s=(0,i.I0)();return(0,Z.jsx)(V,{width:"450px",align:"flex-start",children:(0,Z.jsx)(x.Z,{children:(0,Z.jsx)(m.e,{children:(0,Z.jsxs)(d.k,{gap:"10px",justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(Y,{as:o.q,color:"blue.500"}),r,": ",t,(0,Z.jsx)(y.z,{leftIcon:(0,Z.jsx)(J.p,{}),colorScheme:"teal",variant:"solid",type:"button",bg:"#2196f3",color:"white",size:"sm",_hover:{bg:"darkblue"},_active:{bg:"darkblue"},onClick:function(){!function(e){s((0,C.GK)(e))}(n)},children:"Delete"})]})})})},n.toString())}function U(){var e=(0,l.v9)(b.Af).contacts,n=(0,l.v9)(b.Gd),r=e.length,t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return(0,Z.jsx)(O,{id:e.id,name:e.name,number:e.number},e.id)}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(c.xu,{children:(0,Z.jsxs)(d.k,{flexDirection:"column",gap:"10px",justify:"center",align:"center",paddingTop:"30px",children:[(0,Z.jsx)(u.X,{as:"h2",size:"md",color:"#2196f3",children:"Your contacts:"}),0===r&&(0,Z.jsx)(z.x,{children:"You don't saved contacts yet."}),(0,Z.jsx)(K,{spacing:3,children:t})]})})})}function Q(){var e=(0,i.I0)();return(0,t.useEffect)((function(){e((0,C.yF)())}),[e]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(N,{}),(0,Z.jsx)(w,{}),(0,Z.jsx)(U,{})]})}},8771:function(e,n,r){r.d(n,{p:function(){return s}});var t=r(4134),i=r(184),s=(0,t.I)({displayName:"DeleteIcon",path:(0,i.jsx)("g",{fill:"currentColor",children:(0,i.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})})},2233:function(e,n,r){r.d(n,{q:function(){return t}});var t=(0,r(4134).I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"})},884:function(e,n,r){r.d(n,{x:function(){return m}});var t=r(1413),i=r(4925),s=r(5597),a=r(2481),o=r(2996),l=r(5812),c=r(6992),d=r(2796),u=r(184),x=["className","align","decoration","casing"],m=(0,s.G)((function(e,n){var r=(0,a.mq)("Text",e),s=(0,o.Lr)(e),m=(s.className,s.align,s.decoration,s.casing,(0,i.Z)(s,x)),h=(0,d.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(l.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n,className:(0,c.cx)("chakra-text",e.className)},h),m),{},{__css:r}))}));m.displayName="Text"},9589:function(e,n,r){r.d(n,{X:function(){return x}});var t=r(1413),i=r(4925),s=r(5597),a=r(2481),o=r(2996),l=r(5812),c=r(6992),d=r(184),u=["className"],x=(0,s.G)((function(e,n){var r=(0,a.mq)("Heading",e),s=(0,o.Lr)(e),x=(s.className,(0,i.Z)(s,u));return(0,d.jsx)(l.m.h2,(0,t.Z)((0,t.Z)({ref:n,className:(0,c.cx)("chakra-heading",e.className)},x),{},{__css:r}))}));x.displayName="Heading"}}]);
//# sourceMappingURL=31.a636843d.chunk.js.map