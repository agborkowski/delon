(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{MKz1:function(t,n,e){"use strict";e.r(n),e.d(n,"DevLazyModule",function(){return b});var o=e("tyNb"),c=e("PCNd"),s=e("sWYD"),i=e("fXoL"),a=e("ByMC"),p=e("ofXK");let r=(()=>{class t{constructor(){this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Lb({type:t,selectors:[["dev-lazy-layout"]],decls:6,vars:3,consts:[[1,"p-lg"]],template:function(t,n){1&t&&(i.Sb(0,"page-header"),i.Xb(1,"h2"),i.Pc(2),i.jc(3,"json"),i.Wb(),i.Xb(4,"div",0),i.Sb(5,"router-outlet"),i.Wb()),2&t&&(i.Db(2),i.Rc("Lazy Module, ",i.kc(3,1,n.now),""))},directives:[a.a,o.o],pipes:[p.i],encapsulation:2}),t})(),u=(()=>{class t{constructor(t){this.route=t,this.first=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return t.\u0275fac=function(n){return new(n||t)(i.Rb(o.a))},t.\u0275cmp=i.Lb({type:t,selectors:[["dev-page"]],decls:11,vars:12,template:function(t,n){1&t&&(i.Xb(0,"h3"),i.Pc(1,"Lazy child component"),i.Wb(),i.Xb(2,"p"),i.Pc(3),i.jc(4,"json"),i.jc(5,"json"),i.Wb(),i.Xb(6,"p"),i.Pc(7),i.jc(8,"json"),i.Wb(),i.Pc(9),i.jc(10,"json")),2&t&&(i.Db(3),i.Sc("first: ",i.kc(4,4,n.first),"\uff0cnow: ",i.kc(5,6,n.now),""),i.Db(4),i.Rc("id: ",i.kc(8,8,n.id),""),i.Db(2),i.Rc(" page: ",i.kc(10,10,n.route.url)," "))},pipes:[p.i],encapsulation:2}),t})();const d=[{path:"",component:r,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:u},{path:"p2",component:u},{path:"p3",component:u},{path:"p4",component:u},{path:"p5",component:u},{path:":id/view",component:u}]}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({imports:[[c.a,o.n.forChild(d)]]}),t})()}}]);