(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+1zh":function(e,t,n){"use strict";n.r(t);var i=n("Valr"),c=n("GsDI"),o=n("K9Ia"),s=n("dzgT"),a=n("KQya"),r=n("ny24"),d=n("4HpG"),l=n("6blF"),p=n("/21U"),b=function(e){function t(t,n,i){void 0===n&&(n=0),void 0===i&&(i=a.a);var c=e.call(this)||this;return c.source=t,c.delayTime=n,c.scheduler=i,(!Object(p.a)(n)||n<0)&&(c.delayTime=0),i&&"function"==typeof i.schedule||(c.scheduler=a.a),c}return d.a(t,e),t.create=function(e,n,i){return void 0===n&&(n=0),void 0===i&&(i=a.a),new t(e,n,i)},t.dispatch=function(e){return this.add(e.source.subscribe(e.subscriber))},t.prototype._subscribe=function(e){return this.scheduler.schedule(t.dispatch,this.delayTime,{source:this.source,subscriber:e})},t}(l.a),u=function(){function e(e,t){this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return new b(t,this.delay,this.scheduler).subscribe(e)},e}(),f=n("p0Sj"),h=n("TYT/"),m=n("Faly"),v=n("TNhP"),y=["tocItem"];function g(e,t){1&e&&(h.Sb(0,"div",7),h.Bc(1," Contents "),h.Rb())}function E(e,t){if(1&e){var n=h.Tb();h.Sb(0,"button",8),h.Zb("click",(function(e){return h.sc(n),h.dc(2).toggle(!1)})),h.Bc(1," Contents "),h.Ob(2,"mat-icon",9),h.Rb()}if(2&e){var i=h.dc(2);h.Ab("aria-pressed",!i.isCollapsed),h.zb(2),h.Db("collapsed",i.isCollapsed)}}function x(e,t){if(1&e&&(h.Sb(0,"li",11,12),h.Ob(2,"a",13),h.Rb()),2&e){var n=h.dc(),i=n.$implicit,c=n.index,o=h.dc(2);h.Bb(i.level),h.Db("secondary","EmbeddedExpandable"===o.type&&c>=o.primaryMax)("active",c===o.activeIndex),h.kc("title",i.title),h.zb(2),h.jc("href",i.href,h.uc)("innerHTML",i.content,h.tc)}}function I(e,t){if(1&e&&(h.Qb(0),h.zc(1,x,3,10,"li",10),h.Pb()),2&e){var n=t.$implicit,i=h.dc(2);h.zb(1),h.jc("ngIf","Floating"===i.type||"h1"!==n.level)}}function T(e,t){if(1&e){var n=h.Tb();h.Sb(0,"button",14),h.Zb("click",(function(e){return h.sc(n),h.dc(2).toggle()})),h.Rb()}if(2&e){var i=h.dc(2);h.Db("collapsed",i.isCollapsed),h.Ab("aria-pressed",!i.isCollapsed)}}function z(e,t){if(1&e&&(h.Sb(0,"div",1),h.zc(1,g,2,0,"div",2),h.zc(2,E,3,3,"button",3),h.Sb(3,"ul",4),h.zc(4,I,2,1,"ng-container",5),h.Rb(),h.zc(5,T,1,3,"button",6),h.Rb()),2&e){var n=h.dc();h.Db("collapsed",n.isCollapsed),h.zb(1),h.jc("ngIf","EmbeddedSimple"===n.type),h.zb(1),h.jc("ngIf","EmbeddedExpandable"===n.type),h.zb(1),h.Db("embedded","Floating"!==n.type),h.zb(1),h.jc("ngForOf",n.tocList),h.zb(1),h.jc("ngIf","EmbeddedExpandable"===n.type)}}var j=function(){function e(e,t,n){this.scrollService=e,this.tocService=n,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new o.a,this.primaryMax=4,this.isEmbedded=-1!==t.nativeElement.className.indexOf("embedded")}return e.prototype.ngOnInit=function(){var e=this;this.tocService.tocList.pipe(Object(r.a)(this.onDestroy)).subscribe((function(t){e.tocList=t;var n,i=(n=function(e){return"h1"!==e.level},e.tocList.reduce((function(e,t){return n(t)?e+1:e}),0));e.type=i>0?e.isEmbedded?i>e.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"}))},e.prototype.ngAfterViewInit=function(){var e,t,n=this;this.isEmbedded||Object(s.a)(this.tocService.activeItemIndex.pipe((e=a.a,void 0===t&&(t=0),function(n){return n.lift(new u(e,t))})),this.items.changes.pipe(Object(f.a)(this.items))).pipe(Object(r.a)(this.onDestroy)).subscribe((function(e){var t=e[0],i=e[1];if(n.activeIndex=t,!(null===t||t>=i.length)){var c=i.toArray()[t].nativeElement,o=c.offsetParent,s=c.getBoundingClientRect(),a=o.getBoundingClientRect();s.top>=a.top&&s.bottom<=a.bottom||(o.scrollTop+=s.top-a.top-o.clientHeight/2)}}))},e.prototype.ngOnDestroy=function(){this.onDestroy.next()},e.prototype.toggle=function(e){void 0===e&&(e=!0),this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()},e.prototype.toTop=function(){this.scrollService.scrollToTop()},e.\u0275fac=function(t){return new(t||e)(h.Nb(m.a),h.Nb(h.j),h.Nb(v.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["aio-toc"]],viewQuery:function(e,t){var n;1&e&&h.Gc(y,!0),2&e&&h.oc(n=h.ac())&&(t.items=n)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&h.zc(0,z,6,8,"div",0),2&e&&h.jc("ngIf","None"!==t.type)},directives:[i.h,i.g,c.a],encapsulation:2}),e}();n.d(t,"TocModule",(function(){return w}));var w=function(){function e(){this.customElementComponent=j}return e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({factory:function(t){return new(t||e)},imports:[[i.b,c.b]]}),e}()}}]);
//# sourceMappingURL=toc-toc-module.e039db650d3e556731de.js.map