(this.webpackJsonphwuiv2=this.webpackJsonphwuiv2||[]).push([[0],{20:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(27),i=a.n(s),c=(a(47),a(48),a(49),a(1));function l(e){return Object(c.jsx)("div",{id:"content-panel",children:Object(c.jsxs)("div",{id:"header-panel",children:[Object(c.jsx)("div",{id:"header-number",children:e.date}),Object(c.jsx)("div",{id:"header-month",children:e.title})]})})}var o=a(5),d=a(28),h=a(16);a(52);function j(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"void"}),Object(c.jsx)("div",{id:"navbar-panel",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/week",children:"Week"})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/today",children:"Today"})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/homework",children:"HW"})})]})})]})}a(20);function u(e){return Object(c.jsxs)("tr",{className:"day-subject-panel",children:[Object(c.jsx)("td",{className:"day-subject-name",children:e.name}),Object(c.jsx)("td",{className:"day-subject-detail",children:e.cabinet})]})}function b(e){for(var t=e.day,a=[],r=0;r<y[t].length;r+=1)"Break"!==y[t][r][0]&&"Dinner"!==y[t][r][0]&&"Lunch"!==y[t][r][0]&&'"Free" time'!==y[t][r][0]&&(y[t][r][0]===y[t][r+2][0]?(a.push(Object(c.jsx)(u,{className:"day-task",name:"2x "+y[t][r][0],start:y[t][r][1],end:y[t][r][2],cabinet:y[t][r][3]})),r+=2):a.push(Object(c.jsx)(u,{className:"day-task",name:y[t][r][0],start:y[t][r][1],end:y[t][r][2],cabinet:y[t][r][3]})));return a}function m(){for(var e=[],t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=1;a<7;a+=1)e.push(Object(c.jsxs)("div",{className:"day-panel",children:[Object(c.jsx)("h2",{children:t[a]}),Object(c.jsx)("table",{children:Object(c.jsx)(b,{day:a})})]}));return Object(c.jsx)("div",{className:"week-container",children:e})}var y=[[["Chill","00:00","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Astronomy/World liturature","08:35","09:20","121"],["Break","09:20","09:30"," "],["Ukrainian language","09:30","10:15","121/323"],["Break","10:15","10:25"," "],["Ukrainian language","10:25","11:10","121/323"],["Lunch","11:10","11:25"," "],["P.E.","11:25","12:10","Gym"],["Break","12:10","12:20"," "],["English","12:20","13:05","214/317"],["Break","13:05","13:15"," "],["Algebra","13:15","14:00","121"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Geometry","08:35","09:20","121"],["Break","09:20","09:30"," "],["Geometry","09:30","10:15","121"],["Break","10:15","10:25"," "],["P.E.","10:25","11:10","Gym"],["Lunch","11:10","11:25"," "],["Ukrainian literature","11:25","12:10","121"],["Break","12:10","12:20"," "],["Ukrainian literature","12:20","13:05","121"],["Break","13:05","13:15"," "],["Informatics","13:15","14:00","105a/104"],["Break","14:00","14:10"," "],["Informatics","14:10","14:55","105a/104"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Geography","08:35","09:20","318"],["Break","09:20","09:30"," "],["Geometry/Physics","09:30","10:15","121/lab11"],["Break","10:15","10:25"," "],["Geometry/Physics","10:25","11:10","121/lab11"],["Lunch","11:10","11:25"," "],["Physics/Geometry","11:25","12:10","lab11/121"],["Break","12:10","12:20"," "],["Physics/Geometry","12:20","13:05","lab11/121"],["Break","13:05","13:15"," "],["Biology","13:15","14:00","121"],["Break","14:00","14:10"," "],["World history","14:10","14:55","121"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["English","08:35","09:20","214/317"],["Break","09:20","09:30"," "],["Physics","09:30","10:15","121"],["Break","10:15","10:25"," "],["Physics","10:25","11:10","121"],["Lunch","11:10","11:25"," "],["Algebra","11:25","12:10","121"],["Break","12:10","12:20"," "],["Algebra","12:20","13:05","121"],["Break","13:05","13:15"," "],["P.E.","13:15","14:00","Gym"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Ukrainian history","08:35","09:20","121"],["Break","09:20","09:30"," "],["Physics / Algebra","09:30","10:15","208/121"],["Break","10:15","10:25"," "],["Physics / Algebra","10:25","11:10","208/121"],["Lunch","11:10","11:25"," "],["Algebra / Physics","11:25","12:10","121/208"],["Break","12:10","12:20"," "],["Algebra / Physics","12:20","13:05","121/208"],["Dinner","13:05","13:15"," "],['"Free" time',"13:15","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Physics","08:35","09:20","121"],["Break","09:20","09:30"," "],["Physics","09:30","10:15","121"],["Break","10:15","10:25"," "],["IT","10:25","11:10","103/104"],["Lunch","11:10","11:25"," "],["Ukrainian protection","11:25","12:10","121"],["Break","12:10","12:20"," "],["Chemistry","12:20","13:05","303"],["Break","13:05","13:15"," "],["English","13:15","14:00","214/317"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]]],p=a(3),g=a(6),O=a(7),k=a(8);a(58);function x(e){return Object(c.jsxs)("tr",{className:"day-subject-panel",children:[Object(c.jsx)("td",{className:"day-subject-name "+e.active,children:e.name}),Object(c.jsx)("td",{className:"day-subject-detail "+e.active,children:e.cabinet})]})}function v(){var e=[],t="Geometry",a=new Date,r=new Date("December 13, 2021 11:25:00"),n=Math.round((r-a)/1e3);n<0&&(t="Algebra",r=new Date("December 15, 2021 11:25:00"),(n=Math.round((r-a)/1e3))<0&&(t="Physics",r=new Date("December 17, 2021 11:25:00"),(n=Math.round((r-a)/1e3))<0&&(t="")));var s=parseInt(n/86400)+" day(s), "+(parseInt(n%86400/3600)>9?parseInt(n%86400/3600):"0"+parseInt(n%86400/3600))+":"+(parseInt(n%86400/60%60)>9?parseInt(n%86400/60%60):"0"+parseInt(n%86400/60%60))+":"+(n%60>9?n%60:"0"+n%60);return e.push(Object(c.jsx)("div",{className:"day-panel small",children:""!=t?Object(c.jsxs)("p",{children:["DCW, ",t,": ",s]}):Object(c.jsx)("p",{children:"GG WP?"})})),e}var f=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={date:new Date},r}return Object(g.a)(a,[{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"render",value:function(){for(var e=this.state.date.getDay(),t=[],a=[],r=new Date,n=new Date,s="",i="",l=0;l<2;l+=1){t=[];for(var o=0;o<D[e].length;o+=1)if(r.setHours(D[e][o][2].split(":")[0]),r.setMinutes(D[e][o][2].split(":")[1]),r.setSeconds(0),o===D[e].length-1&&r.setDate(r.getDate()+1),n.setHours(D[e][o][1].split(":")[0]),n.setMinutes(D[e][o][1].split(":")[1]),n.setSeconds(0),0===l&&n.getTime()<=this.state.date.getTime()&&r.getTime()>this.state.date.getTime()){s="active";var d=(r.getTime()-this.state.date.getTime())/1e3,h=parseInt(d/3600);h>0?h+=":":h="";var j=parseInt(d/60)-60*parseInt(d/3600);j<10&&(j="0"+j);var u=parseInt(d%60);u<10&&(u="0"+u),i=h+j+":"+u,t.push(Object(c.jsx)(x,{name:D[e][o][0],cabinet:i,active:s}))}else s="",i=D[e][o][3],"Break"!==D[e][o][0]&&"Dinner"!==D[e][o][0]&&"Lunch"!==D[e][o][0]&&'"Free" time'!==D[e][o][0]&&t.push(Object(c.jsx)(x,{name:D[e][o][0],cabinet:i,active:s}));a.push(Object(c.jsxs)("div",{className:"day-panel",children:[Object(c.jsx)("h2",{children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][this.state.date.getDay()+l]}),Object(c.jsx)("table",{children:t})]})),6===e?e=0:e+=1}return Object(c.jsxs)("div",{className:"week-container",children:[v(),a]})}}]),a}(n.a.Component),D=[[["Chill","00:00","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Astronomy/World liturature","08:35","09:20","121"],["Break","09:20","09:30"," "],["Ukrainian language","09:30","10:15","121/323"],["Break","10:15","10:25"," "],["Ukrainian language","10:25","11:10","121/323"],["Lunch","11:10","11:25"," "],["P.E.","11:25","12:10","Gym"],["Break","12:10","12:20"," "],["English","12:20","13:05","214/317"],["Break","13:05","13:15"," "],["Algebra","13:15","14:00","121"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Geometry","08:35","09:20","121"],["Break","09:20","09:30"," "],["Geometry","09:30","10:15","121"],["Break","10:15","10:25"," "],["P.E.","10:25","11:10","Gym"],["Lunch","11:10","11:25"," "],["Ukrainian literature","11:25","12:10","121"],["Break","12:10","12:20"," "],["Ukrainian literature","12:20","13:05","121"],["Break","13:05","13:15"," "],["Informatics","13:15","14:00","105a/104"],["Break","14:00","14:10"," "],["Informatics","14:10","14:55","105a/104"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Geography","08:35","09:20","318"],["Break","09:20","09:30"," "],["Geometry/Physics","09:30","10:15","121/lab11"],["Break","10:15","10:25"," "],["Geometry/Physics","10:25","11:10","121/lab11"],["Lunch","11:10","11:25"," "],["Physics/Geometry","11:25","12:10","lab11/121"],["Break","12:10","12:20"," "],["Physics/Geometry","12:20","13:05","lab11/121"],["Break","13:05","13:15"," "],["Biology","13:15","14:00","121"],["Break","14:00","14:10"," "],["World history","14:10","14:55","121"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["English","08:35","09:20","214/317"],["Break","09:20","09:30"," "],["Physics","09:30","10:15","121"],["Break","10:15","10:25"," "],["Physics","10:25","11:10","121"],["Lunch","11:10","11:25"," "],["Algebra","11:25","12:10","121"],["Break","12:10","12:20"," "],["Algebra","12:20","13:05","121"],["Break","13:05","13:15"," "],["P.E.","13:15","14:00","Gym"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Ukrainian history","08:35","09:20","121"],["Break","09:20","09:30"," "],["Physics / Algebra","09:30","10:15","208/121"],["Break","10:15","10:25"," "],["Physics / Algebra","10:25","11:10","208/121"],["Lunch","11:10","11:25"," "],["Algebra / Physics","11:25","12:10","121/208"],["Break","12:10","12:20"," "],["Algebra / Physics","12:20","13:05","121/208"],["Dinner","13:05","13:15"," "],['"Free" time',"13:15","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Physics","08:35","09:20","121"],["Break","09:20","09:30"," "],["Physics","09:30","10:15","121"],["Break","10:15","10:25"," "],["IT","10:25","11:10","103/104"],["Lunch","11:10","11:25"," "],["Ukrainian protection","11:25","12:10","121"],["Break","12:10","12:20"," "],["Chemistry","12:20","13:05","303"],["Break","13:05","13:15"," "],["English","13:15","14:00","214/317"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]]],B=a(15),P=a.n(B),F=a(18);function w(e){var t="";return"red"===e.color&&(t+=" red"),Object(c.jsx)("div",{className:"day-panel small"+t,children:e.status})}var S=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,data:""},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(F.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://us-central1-hwui2-937f7.cloudfunctions.net/app/api/read",e.next=4,fetch("https://us-central1-hwui2-937f7.cloudfunctions.net/app/api/read");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,this.setState({loading:!1}),this.setState({data:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({loading:"error"});case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[];try{for(var t=this.state.data,a=new Date,r=1,n=0;n<7;n+=1){var s=1,i=[];i.push(Object(c.jsx)("h2",{children:a.toLocaleDateString("en-US",{weekday:"long"})+", "+a.getDate()}));for(var l=(a.getDate()<10?"0"+a.getDate():a.getDate())+"/"+(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"/"+a.getFullYear(),o=0;o<t.length;o+=1)l===t[o].date&&"1"===t[o].verified&&(i.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"highlight",children:t[o].name}),": "+t[o].description]})),s=0);r&&s&&(i.push(Object(c.jsxs)("div",{children:["No data for that day, if you want you can ",Object(c.jsx)(h.b,{to:"/submit",className:"highlight",children:"suggest"}),"."]})),r=0),e.push(Object(c.jsx)("div",{className:"day-panel",children:i})),a.setDate(a.getDate()+1)}}catch(j){}var d=[];return!0===this.state.loading?d=Object(c.jsx)(w,{color:"gray",status:"Loading..."}):"error"===this.state.loading&&(d=Object(c.jsx)(w,{color:"red",status:"Error: failed to get data from api"})),Object(c.jsxs)("div",{children:[d,e]})}}]),a}(r.Component),N=a(42),G=(a(59),function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={status:"fill"},r.changeHandler=function(e){r.setState(Object(N.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),r.setState({redirect:"loading"});var t=new Date,a="",n=t.getTime();fetch("https://us-central1-hwui2-937f7.cloudfunctions.net/app/api/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,name:r.state.taskName,description:r.state.taskDescription,date:r.state.taskDate})}).then((function(e){console.log(e),a=200===e.status?"ok":"error"})).then((function(e){"ok"===a?r.setState({redirect:"ok"}):r.setState({redirect:"error"})})).catch((function(e){r.setState({redirect:"error"}),console.log(e)}))},r.state={taskName:"",taskDescription:"",taskDate:""},r}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.taskName,a=e.taskDescription,r=e.taskDate,n="";return"ok"===this.state.redirect?n=Object(c.jsx)(o.a,{to:"/thanks"}):"error"===this.state.redirect&&(n=Object(c.jsx)(o.a,{to:"/error"})),Object(c.jsxs)("div",{className:"day-panel bottom-padding",children:[n,Object(c.jsx)("h2",{children:"Add homework"}),Object(c.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Subject name"}),Object(c.jsx)("input",{className:"input",type:"text",name:"taskName",value:t,onChange:this.changeHandler,required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Subject description"}),Object(c.jsx)("input",{className:"input",type:"text",name:"taskDescription",value:a,onChange:this.changeHandler,required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Date"}),Object(c.jsx)("input",{className:"input",type:"text",name:"taskDate",value:r,onChange:this.changeHandler,placeholder:"DD/MM/YYYY",required:!0})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"button",type:"submit",disabled:"loading"===this.state.redirect,style:"loading"===this.state.redirect?{cursor:"not-allowed"}:{cursor:"pointer"},children:"Submit"})})]})]})}}]),a}(r.Component));function I(e){return Object(c.jsx)("div",{className:"day-panel",children:Object(c.jsx)("p",{style:{textAlign:"center"},children:e.data})})}var A=function(){var e=Object(o.g)(),t=Object(d.useTransition)(e,{from:{transform:"translateX(100%)"},enter:{transform:"translateX(0%)"},leave:{transform:"translateX(-100%)"}}),a=new Date;return Object(c.jsxs)("div",{style:{position:"relative",overflowX:"hidden",minHeight:"100vh"},children:[t((function(e,t){return Object(c.jsx)(d.animated.div,{style:e,children:Object(c.jsx)("div",{style:{position:"absolute",width:"100%"},children:Object(c.jsxs)(o.d,{location:t,children:[Object(c.jsxs)(o.b,{path:"/week",children:[Object(c.jsx)(l,{date:a.getDate()<10?"0"+a.getDate():a.getDate(),title:a.toLocaleDateString("en-US",{month:"long"}).toUpperCase()}),Object(c.jsx)(m,{})]}),Object(c.jsxs)(o.b,{path:"/today",children:[Object(c.jsx)(l,{date:a.getDate()<10?"0"+a.getDate():a.getDate(),title:a.toLocaleDateString("en-US",{month:"long"}).toUpperCase()}),Object(c.jsx)(f,{})]}),Object(c.jsxs)(o.b,{path:"/homework",children:[Object(c.jsx)(l,{date:a.getDate()<10?"0"+a.getDate():a.getDate(),title:a.toLocaleDateString("en-US",{month:"long"}).toUpperCase()}),Object(c.jsx)(S,{})]}),Object(c.jsxs)(o.b,{path:"/submit",children:[Object(c.jsx)(l,{date:"",title:"SUBMIT"}),Object(c.jsx)(G,{})]}),Object(c.jsxs)(o.b,{path:"/thanks",children:[Object(c.jsx)(l,{date:"",title:"THANKS"}),Object(c.jsx)(I,{data:"Thank you for your help!"})]}),Object(c.jsxs)(o.b,{path:"/error",children:[Object(c.jsx)(l,{date:"",title:"ERROR"}),Object(c.jsx)(I,{data:"Failed to connect and post data to API"})]}),Object(c.jsx)(o.a,{to:"/today"})]})})})})),Object(c.jsx)(j,{})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(c.jsx)(h.a,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),T()}},[[60,1,2]]]);
//# sourceMappingURL=main.3348767c.chunk.js.map