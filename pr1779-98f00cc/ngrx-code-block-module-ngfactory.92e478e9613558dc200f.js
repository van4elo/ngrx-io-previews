(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3BxO":function(n,t,e){"use strict";e.r(t);var r=e("CcnG"),o=function(){function n(n){this.pretty=n,this.code="",this.formattedCode=""}return n.prototype.ngAfterContentInit=function(){var n=this;this.pretty.formatCode("effects"===this.code?"\nsearch$ = createEffect(() => \n  this.actions$.pipe(\n    ofType(BookActions.search),\n    exhaustMap(action =>\n      this.googleBooksService.search(action.query)\n    )\n  )\n);":"\n$ ng g store State --root --module app.module.ts\n create src/app/reducers/index.ts\n update src/app/app.module.ts\n").subscribe(function(t){n.codeContainer.nativeElement.innerHTML=t})},n}(),u=function(){return function(){this.customElementComponent=o}}(),i=e("vVVL"),c=r.pb({encapsulation:2,styles:[],data:{}});function l(n){return r.Jb(0,[r.Fb(402653184,1,{codeContainer:0}),(n()(),r.rb(1,0,[[1,0],["codeContainer",1]],null,0,"pre",[["class","prettyprint"]],null,null,null,null,null))],null,null)}function s(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,1,"ngrx-code-block",[],null,null,null,l,c)),r.qb(1,1097728,null,0,o,[i.a],null,null)],null,null)}var a=r.nb("ngrx-code-block",o,s,{code:"code"},{},[]),p=e("Ip0R"),f=e("vHPH");e.d(t,"CodeBlockModuleNgFactory",function(){return d});var d=r.ob(u,[],function(n){return r.xb([r.yb(512,r.j,r.db,[[8,[a]],[3,r.j],r.y]),r.yb(4608,p.m,p.l,[r.v,[2,p.x]]),r.yb(4608,i.a,i.a,[f.a]),r.yb(1073742336,p.c,p.c,[]),r.yb(1073742336,u,u,[])])})},vVVL:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e("0/uQ"),o=e("S1nX"),u=e("67Y/"),i=e("P6uZ"),c=function(){function n(n){this.logger=n,this.prettyPrintOne=Object(r.a)(this.getPrettyPrintOne()).pipe(Object(o.a)())}return n.prototype.getPrettyPrintOne=function(){var n=this,t=window.prettyPrintOne;return t?Promise.resolve(t):e.e(21).then(e.t.bind(null,"Ue1H",7)).then(function(){return window.prettyPrintOne},function(t){var e="Cannot get prettify.js from server: "+t.message;return n.logger.error(new Error(e)),function(){throw new Error(e)}})},n.prototype.formatCode=function(n,t,e){return this.prettyPrintOne.pipe(Object(u.a)(function(r){try{return r(n,t,e)}catch(u){var o="Could not format code that begins '"+n.substr(0,50)+"...'.";throw console.error(o,u),new Error(o)}}),Object(i.a)())},n}()}}]);
//# sourceMappingURL=ngrx-code-block-module-ngfactory.92e478e9613558dc200f.js.map