(this.webpackJsonpconverters=this.webpackJsonpconverters||[]).push([[0],{70:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),c=a.n(r),l=a.p+"static/media/bg.d8ec5918.webp",o=(a(70),a(109)),s=a(113),u=a(114),b=a(117),g=a(59),j=a(118),d=a(111),x=a(9),v=a(8),O=a(115),m=a(116),p=a(2),h=Object(o.a)((function(e){return{input:{margin:e.spacing(2)}}})),F=Object(g.a)({palette:{primary:{main:"#474554"}}});function f(e){var t=h(),a=e.id,n=e.label,i=e.value,r=e.onChange,c=e.minusValueEnabled;return Object(p.jsx)(d.a,{theme:F,children:Object(p.jsx)(m.a,{id:a,label:n,value:i,onChange:r,type:"number",className:t.input,InputProps:c?{}:{inputProps:{min:0}},InputLabelProps:{shrink:!0},variant:"outlined",color:"primary"})})}var k=a(54),C=a.n(k),S=Object(o.a)((function(e){var t,a;return{label:(t={padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:"#FFE492",borderRadius:"6px",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),t),icon:(a={},Object(v.a)(a,e.breakpoints.down("xs"),{marginRight:e.spacing(0)}),Object(v.a)(a,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),a)}}));function w(){var e=S(),t=Object(n.useState)(0),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),o=Object(x.a)(l,2),s=o[0],b=o[1],g=Object(n.useState)(0),j=Object(x.a)(g,2),d=j[0],v=j[1];return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",className:e.label,children:[Object(p.jsx)(u.a,{item:!0,children:Object(p.jsx)(C.a,{fontSize:"large",className:e.icon})}),Object(p.jsx)(u.a,{item:!0,children:Object(p.jsxs)(O.a,{variant:"h6",children:[Object(p.jsx)("strong",{children:"Speed"})," Catch me if you can using"]})})]}),Object(p.jsx)(f,{id:"kph-number",label:"KPH",value:r,onChange:function(e){c(e.target.value),b((e.target.value/1.609344).toFixed(2)),v((e.target.value/1.852).toFixed(2))}}),Object(p.jsx)(f,{id:"mph-number",label:"MPH",value:s,onChange:function(e){b(e.target.value),c((1.609344*e.target.value).toFixed(2)),v((e.target.value/1.150779).toFixed(2))}}),Object(p.jsx)(f,{id:"knots-number",label:"Knots",value:d,onChange:function(e){v(e.target.value),b((1.150779*e.target.value).toFixed(2)),c((1.852*e.target.value).toFixed(2))}})]})}var N=Object(o.a)((function(e){var t;return{headline:(t={color:"#393939"},Object(v.a)(t,e.breakpoints.down("md"),{paddingTop:e.spacing(4),marginBottom:e.spacing(3)}),Object(v.a)(t,e.breakpoints.up("md"),{paddingTop:e.spacing(6),marginBottom:e.spacing(6)}),t)}})),R=function(){var e=N();return Object(p.jsx)(O.a,{variant:"h1",align:"center",className:e.headline,children:"Mighty Convertor"})},y=a(55),D=a.n(y),I=Object(o.a)((function(e){var t,a;return{label:(t={padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:"#FFE492",borderRadius:"6px",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),t),icon:(a={},Object(v.a)(a,e.breakpoints.down("xs"),{marginRight:e.spacing(0)}),Object(v.a)(a,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),a)}}));function E(){var e=I(),t=Object(n.useState)(0),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),o=Object(x.a)(l,2),s=o[0],b=o[1],g=Object(n.useState)(0),j=Object(x.a)(g,2),d=j[0],v=j[1],m=Object(n.useState)(0),h=Object(x.a)(m,2),F=h[0],k=h[1],C=Object(n.useState)(0),S=Object(x.a)(C,2),w=S[0],N=S[1],R=Object(n.useState)(0),y=Object(x.a)(R,2),E=y[0],B=y[1],A=Object(n.useState)(0),P=Object(x.a)(A,2),z=P[0],K=P[1];return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",className:e.label,children:[Object(p.jsx)(u.a,{item:!0,children:Object(p.jsx)(D.a,{fontSize:"large",className:e.icon})}),Object(p.jsx)(u.a,{item:!0,children:Object(p.jsxs)(O.a,{variant:"h6",children:["Any ",Object(p.jsx)("strong",{children:"Length"})," can be converted here"]})})]}),Object(p.jsx)(f,{id:"centimeters-number",label:"Centimeters",value:s,onChange:function(e){b(e.target.value),N((.3937*e.target.value).toFixed(2)),k((.032808*e.target.value).toFixed(2)),B((.010936*e.target.value).toFixed(2)),K((62137e-10*e.target.value).toFixed(4)),c((e.target.value/100).toFixed(2)),v((e.target.value/1e5).toFixed(4))}}),Object(p.jsx)(f,{id:"meters-number",label:"Meters",value:r,onChange:function(e){c(e.target.value),b((e.target.value/.01).toFixed(2)),v((e.target.value/1e3).toFixed(4)),N((39.37*e.target.value).toFixed(2)),k((3.2808*e.target.value).toFixed(2)),B((1.0936*e.target.value).toFixed(2)),K((62137e-8*e.target.value).toFixed(4))}}),Object(p.jsx)(f,{id:"kilometers-number",label:"Kilometers",value:d,onChange:function(e){v(e.target.value),N((39370*e.target.value).toFixed(2)),k((3280.8*e.target.value).toFixed(2)),B((1093.6*e.target.value).toFixed(2)),K((.62137*e.target.value).toFixed(4)),b((1e5*e.target.value).toFixed(2)),c((1e3*e.target.value).toFixed(2))}}),Object(p.jsx)(f,{id:"feets-number",label:"Feets",value:F,onChange:function(e){k(e.target.value),N((12*e.target.value).toFixed(2)),B((.33333*e.target.value).toFixed(2)),K((18939e-8*e.target.value).toFixed(4)),b((e.target.value/.032808).toFixed(2)),c((e.target.value/3.2808).toFixed(2)),v((e.target.value/3280.8).toFixed(4))}}),Object(p.jsx)(f,{id:"inches-number",label:"Inches",value:w,onChange:function(e){N(e.target.value),k((.083333*e.target.value).toFixed(2)),B((.027778*e.target.value).toFixed(2)),K((15783e-9*e.target.value).toFixed(4)),b((e.target.value/.3937).toFixed(2)),c((e.target.value/39.37).toFixed(2)),v((e.target.value/39370).toFixed(4))}}),Object(p.jsx)(f,{id:"yards-number",label:"Yards",value:E,onChange:function(e){B(e.target.value),N((36*e.target.value).toFixed(2)),k((3*e.target.value).toFixed(2)),K((56818e-8*e.target.value).toFixed(4)),b((e.target.value/.010936).toFixed(2)),c((e.target.value/1.0936).toFixed(2)),v((e.target.value/1093.6).toFixed(4))}}),Object(p.jsx)(f,{id:"miles-number",label:"Miles",value:z,onChange:function(e){K(e.target.value),N((63360*e.target.value).toFixed(2)),k((5280*e.target.value).toFixed(2)),B((1760*e.target.value).toFixed(2)),b((e.target.value/62137e-10).toFixed(2)),c((e.target.value/62137e-8).toFixed(2)),v((e.target.value/.62137).toFixed(4))}})]})}var B=a(56),A=a.n(B),P=Object(o.a)((function(e){var t,a;return{label:(t={padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:"#FFE492",borderRadius:"6px",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),t),icon:(a={marginTop:"4px"},Object(v.a)(a,e.breakpoints.down("xs"),{marginRight:e.spacing(0)}),Object(v.a)(a,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),a)}}));function z(){var e=P(),t=Object(n.useState)(0),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),o=Object(x.a)(l,2),s=o[0],b=o[1],g=Object(n.useState)(0),j=Object(x.a)(g,2),d=j[0],v=j[1];return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",className:e.label,children:[Object(p.jsx)(u.a,{item:!0,children:Object(p.jsx)(A.a,{fontSize:"large",className:e.icon})}),Object(p.jsx)(u.a,{item:!0,children:Object(p.jsxs)(O.a,{variant:"h6",children:["What about ",Object(p.jsx)("strong",{children:"Temperatures"}),"?"]})})]}),Object(p.jsx)(f,{id:"celsius-number",label:"Celsius",value:r,onChange:function(e){c(e.target.value),b((1.8*e.target.value+32).toFixed(2)),v(parseInt(e.target.value)+273.15)},minusValueEnabled:!0}),Object(p.jsx)(f,{id:"fanhrenheit-number",label:"Fahrenheit",value:s,onChange:function(e){b(e.target.value),c(((e.target.value-32)/1.8).toFixed(2)),v(((e.target.value-32)/1.8+273.15).toFixed(2))},minusValueEnabled:!0}),Object(p.jsx)(f,{id:"kelvin-number",label:"Kelvin",value:d,onChange:function(e){v(e.target.value),b((1.8*(e.target.value-273.15)+32).toFixed(2)),c((e.target.value-273.15).toFixed(2))},minusValueEnabled:!0})]})}var K=a(57),M=a.n(K),T=Object(o.a)((function(e){var t,a;return{label:(t={padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:"#FFE492",borderRadius:"6px",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),t),icon:(a={marginTop:"4px"},Object(v.a)(a,e.breakpoints.down("xs"),{marginRight:e.spacing(0)}),Object(v.a)(a,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),a)}}));function H(){var e=T(),t=Object(n.useState)(0),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),o=Object(x.a)(l,2),s=o[0],b=o[1],g=Object(n.useState)(0),j=Object(x.a)(g,2),d=j[0],v=j[1],m=Object(n.useState)(0),h=Object(x.a)(m,2),F=h[0],k=h[1],C=Object(n.useState)(0),S=Object(x.a)(C,2),w=S[0],N=S[1];return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",className:e.label,children:[Object(p.jsx)(u.a,{item:!0,children:Object(p.jsx)(M.a,{fontSize:"large",className:e.icon})}),Object(p.jsx)(u.a,{item:!0,children:Object(p.jsxs)(O.a,{variant:"h6",children:["Have fun with ",Object(p.jsx)("strong",{children:"Weight"})]})})]}),Object(p.jsx)(f,{id:"grams-number",label:"Grams",value:r,onChange:function(e){c(e.target.value),b((e.target.value/1e3).toFixed(4)),v((.035274*e.target.value).toFixed(2)),k((.0022046*e.target.value).toFixed(2)),N((15747e-8*e.target.value).toFixed(4))}}),Object(p.jsx)(f,{id:"kilograms-number",label:"Kilograms",value:s,onChange:function(e){b(e.target.value),c((1e3*e.target.value).toFixed(2)),v((35.274*e.target.value).toFixed(2)),k((2.2046*e.target.value).toFixed(2)),N((.1574*e.target.value).toFixed(4))}}),Object(p.jsx)(f,{id:"ounces-number",label:"Ounces",value:d,onChange:function(e){v(e.target.value),c((e.target.value/.035274).toFixed(2)),b((e.target.value/35.274).toFixed(2)),k((.0625*e.target.value).toFixed(2)),N((.0044643*e.target.value).toFixed(4))}}),Object(p.jsx)(f,{id:"pounds-number",label:"Pounds",value:F,onChange:function(e){k(e.target.value),c((e.target.value/.0022046).toFixed(2)),b((e.target.value/2.2046).toFixed(2)),v((16*e.target.value).toFixed(2)),N((.071429*e.target.value).toFixed(4))}}),Object(p.jsx)(f,{id:"stones-number",label:"Stones",value:w,onChange:function(e){N(e.target.value),c((e.target.value/15747e-8).toFixed(2)),b((e.target.value/.15747).toFixed(2)),v((224*e.target.value).toFixed(2)),k((14*e.target.value).toFixed(2))}})]})}var L=a(58),V=a.n(L),G=Object(o.a)((function(e){var t,a;return{label:(t={padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:"#FFE492",borderRadius:"6px",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),t),icon:(a={},Object(v.a)(a,e.breakpoints.down("xs"),{marginRight:e.spacing(0)}),Object(v.a)(a,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),a)}}));function J(){var e=G(),t=Object(n.useState)(0),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),o=Object(x.a)(l,2),s=o[0],b=o[1],g=Object(n.useState)(0),j=Object(x.a)(g,2),d=j[0],v=j[1],m=Object(n.useState)(0),h=Object(x.a)(m,2),F=h[0],k=h[1];return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",className:e.label,children:[Object(p.jsx)(u.a,{item:!0,children:Object(p.jsx)(V.a,{fontSize:"large",className:e.icon})}),Object(p.jsx)(u.a,{item:!0,children:Object(p.jsxs)(O.a,{variant:"h6",children:["Don't drown in ",Object(p.jsx)("strong",{children:"Liquids"})]})})]}),Object(p.jsx)(f,{id:"deciliter-number",label:"Decilitres",value:r,onChange:function(e){c(e.target.value),v((.1759753986*e.target.value).toFixed(2)),b((.1*e.target.value).toFixed(2)),k((.021997*e.target.value).toFixed(3))}}),Object(p.jsx)(f,{id:"liter-number",label:"Litres",value:s,onChange:function(e){b(e.target.value),c((10*e.target.value).toFixed(2)),v((1.7598*e.target.value).toFixed(2)),k((.21997*e.target.value).toFixed(2))}}),Object(p.jsx)(f,{id:"pints-number",label:"Pints",value:d,onChange:function(e){v(e.target.value),c((5.6826125*e.target.value).toFixed(2)),b(e.target.value/1.7598),k(.125*e.target.value)}}),Object(p.jsx)(f,{id:"gallons-number",label:"Gallons",value:F,onChange:function(e){k(e.target.value),c((e.target.value/.021997).toFixed(2)),v(e.target.value/.125),b(e.target.value/.21997)}})]})}var W=Object(g.a)();W=Object(j.a)(W);var q=Object(o.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"url(".concat(l,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},paper:{textAlign:"center",padding:e.spacing(3),marginBottom:e.spacing(6)}}}));var Y=function(){var e=q();return Object(p.jsx)(i.a.Fragment,{children:Object(p.jsx)(d.a,{theme:W,children:Object(p.jsxs)(b.a,{className:e.root,children:[Object(p.jsx)(R,{}),Object(p.jsxs)(u.a,{container:!0,spacing:3,children:[Object(p.jsx)(u.a,{item:!0,sm:2}),Object(p.jsxs)(u.a,{item:!0,xs:12,sm:8,children:[Object(p.jsx)(s.a,{elevation:3,className:e.paper,children:Object(p.jsx)(E,{})}),Object(p.jsx)(s.a,{elevation:3,className:e.paper,children:Object(p.jsx)(w,{})}),Object(p.jsx)(s.a,{elevation:3,className:e.paper,children:Object(p.jsx)(z,{})}),Object(p.jsx)(s.a,{elevation:3,className:e.paper,children:Object(p.jsx)(H,{})}),Object(p.jsx)(s.a,{elevation:3,className:e.paper,children:Object(p.jsx)(J,{})})]})]}),Object(p.jsx)(u.a,{item:!0,sm:2})]})})})};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5aa90461.chunk.js.map