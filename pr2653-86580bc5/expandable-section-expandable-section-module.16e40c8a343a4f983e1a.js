(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{pVhH:function(e,n,t){"use strict";t.r(n),t.d(n,"ExpandableSectionModule",(function(){return Q}));var i=t("fXoL"),a=t("vuIU"),o=t("ReuC"),s=t("foSv"),d=t("Ji7U"),c=t("LK+K"),r=t("1OyB"),l=t("8LU1"),p=t("XNiG"),u=t("quSY"),h=t("0EQZ"),b=0,g=function(){var e=function(){function e(){Object(r.a)(this,e),this._stateChanges=new p.a,this._openCloseAllActions=new p.a,this.id="cdk-accordion-".concat(b++),this._multi=!1}return Object(a.a)(e,[{key:"openAll",value:function(){this._openCloseAll(!0)}},{key:"closeAll",value:function(){this._openCloseAll(!1)}},{key:"ngOnChanges",value:function(e){this._stateChanges.next(e)}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"_openCloseAll",value:function(e){this.multi&&this._openCloseAllActions.next(e)}},{key:"multi",get:function(){return this._multi},set:function(e){this._multi=Object(l.b)(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=i.Db({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[i.ub]}),e}(),f=0,m=function(){var e=function(){function e(n,t,a){var o=this;Object(r.a)(this,e),this.accordion=n,this._changeDetectorRef=t,this._expansionDispatcher=a,this._openCloseAllSubscription=u.a.EMPTY,this.closed=new i.l,this.opened=new i.l,this.destroyed=new i.l,this.expandedChange=new i.l,this.id="cdk-accordion-child-".concat(f++),this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=a.listen((function(e,n){o.accordion&&!o.accordion.multi&&o.accordion.id===n&&o.id!==e&&(o.expanded=!1)})),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return Object(a.a)(e,[{key:"ngOnDestroy",value:function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}},{key:"toggle",value:function(){this.disabled||(this.expanded=!this.expanded)}},{key:"close",value:function(){this.disabled||(this.expanded=!1)}},{key:"open",value:function(){this.disabled||(this.expanded=!0)}},{key:"_subscribeToOpenCloseAllActions",value:function(){var e=this;return this.accordion._openCloseAllActions.subscribe((function(n){e.disabled||(e.expanded=n)}))}},{key:"expanded",get:function(){return this._expanded},set:function(e){e=Object(l.b)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(l.b)(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Ib(g,12),i.Ib(i.f),i.Ib(h.b))},e.\u0275dir=i.Db({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[i.vb([{provide:g,useValue:void 0}])]}),e}(),x=function(){var e=function e(){Object(r.a)(this,e)};return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(n){return new(n||e)}}),e}(),_=t("+rOU"),y=t("ofXK"),v=t("u47x"),O=t("FtGj"),k=t("/uUt"),j=t("JX91"),w=t("pLZG"),C=t("IzEk"),A=t("EY2u"),S=t("VRyK"),E=t("R0Ic"),I=t("R1ws"),D=["body"];function H(e,n){}var T=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],P=["mat-expansion-panel-header","*","mat-action-row"],M=function(e,n){return{collapsedHeight:e,expandedHeight:n}},R=function(e,n){return{value:e,params:n}};function N(e,n){if(1&e&&i.Jb(0,"span",2),2&e){var t=i.Yb();i.ec("@indicatorRotate",t._getExpandedState())}}var U=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],z=["mat-panel-title","mat-panel-description","*"],F=new i.n("MAT_ACCORDION"),V={indicatorRotate:Object(E.m)("indicatorRotate",[Object(E.j)("collapsed, void",Object(E.k)({transform:"rotate(0deg)"})),Object(E.j)("expanded",Object(E.k)({transform:"rotate(180deg)"})),Object(E.l)("expanded <=> collapsed, void => collapsed",Object(E.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),expansionHeaderHeight:Object(E.m)("expansionHeight",[Object(E.j)("collapsed, void",Object(E.k)({height:"{{collapsedHeight}}"}),{params:{collapsedHeight:"48px"}}),Object(E.j)("expanded",Object(E.k)({height:"{{expandedHeight}}"}),{params:{expandedHeight:"64px"}}),Object(E.l)("expanded <=> collapsed, void => collapsed",Object(E.g)([Object(E.h)("@indicatorRotate",Object(E.f)(),{optional:!0}),Object(E.e)("225ms cubic-bezier(0.4,0.0,0.2,1)")]))]),bodyExpansion:Object(E.m)("bodyExpansion",[Object(E.j)("collapsed, void",Object(E.k)({height:"0px",visibility:"hidden"})),Object(E.j)("expanded",Object(E.k)({height:"*",visibility:"visible"})),Object(E.l)("expanded <=> collapsed, void => collapsed",Object(E.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])},L=function(){var e=function e(n){Object(r.a)(this,e),this._template=n};return e.\u0275fac=function(n){return new(n||e)(i.Ib(i.J))},e.\u0275dir=i.Db({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e}(),G=0,J=new i.n("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),K=function(){var e=function(e){Object(d.a)(t,e);var n=Object(c.a)(t);function t(e,a,o,s,d,c,l){var u;return Object(r.a)(this,t),(u=n.call(this,e,a,o))._viewContainerRef=s,u._animationMode=c,u._hideToggle=!1,u.afterExpand=new i.l,u.afterCollapse=new i.l,u._inputChanges=new p.a,u._headerId="mat-expansion-panel-header-".concat(G++),u._bodyAnimationDone=new p.a,u.accordion=e,u._document=d,u._bodyAnimationDone.pipe(Object(k.a)((function(e,n){return e.fromState===n.fromState&&e.toState===n.toState}))).subscribe((function(e){"void"!==e.fromState&&("expanded"===e.toState?u.afterExpand.emit():"collapsed"===e.toState&&u.afterCollapse.emit())})),l&&(u.hideToggle=l.hideToggle),u}return Object(a.a)(t,[{key:"_hasSpacing",value:function(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}},{key:"_getExpandedState",value:function(){return this.expanded?"expanded":"collapsed"}},{key:"toggle",value:function(){this.expanded=!this.expanded}},{key:"close",value:function(){this.expanded=!1}},{key:"open",value:function(){this.expanded=!0}},{key:"ngAfterContentInit",value:function(){var e=this;this._lazyContent&&this.opened.pipe(Object(j.a)(null),Object(w.a)((function(){return e.expanded&&!e._portal})),Object(C.a)(1)).subscribe((function(){e._portal=new _.i(e._lazyContent._template,e._viewContainerRef)}))}},{key:"ngOnChanges",value:function(e){this._inputChanges.next(e)}},{key:"ngOnDestroy",value:function(){Object(o.a)(Object(s.a)(t.prototype),"ngOnDestroy",this).call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()}},{key:"_containsFocus",value:function(){if(this._body){var e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}},{key:"hideToggle",get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(e){this._hideToggle=Object(l.b)(e)}},{key:"togglePosition",get:function(){return this._togglePosition||this.accordion&&this.accordion.togglePosition},set:function(e){this._togglePosition=e}}]),t}(m);return e.\u0275fac=function(n){return new(n||e)(i.Ib(F,12),i.Ib(i.f),i.Ib(h.b),i.Ib(i.M),i.Ib(y.c),i.Ib(I.a,8),i.Ib(J,8))},e.\u0275cmp=i.Cb({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,t){var a;1&e&&i.Bb(t,L,!0),2&e&&i.jc(a=i.Vb())&&(n._lazyContent=a.first)},viewQuery:function(e,n){var t;1&e&&i.Cc(D,!0),2&e&&i.jc(t=i.Vb())&&(n._body=t.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,n){2&e&&i.Ab("mat-expanded",n.expanded)("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[i.vb([{provide:F,useValue:void 0}]),i.tb,i.ub],ngContentSelectors:P,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){1&e&&(i.dc(T),i.cc(0),i.Nb(1,"div",0,1),i.Ub("@bodyExpansion.done",(function(e){return n._bodyAnimationDone.next(e)})),i.Nb(3,"div",2),i.cc(4,1),i.wc(5,H,0,0,"ng-template",3),i.Mb(),i.cc(6,2),i.Mb()),2&e&&(i.wb(1),i.ec("@bodyExpansion",n._getExpandedState())("id",n.id),i.xb("aria-labelledby",n._headerId),i.wb(4),i.ec("cdkPortalOutlet",n._portal))},directives:[_.c],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[V.bodyExpansion]},changeDetection:0}),e}(),X=function(){var e=function(){function e(n,t,i,a,o){var s=this;Object(r.a)(this,e),this.panel=n,this._element=t,this._focusMonitor=i,this._changeDetectorRef=a,this._parentChangeSubscription=u.a.EMPTY,this._animationsDisabled=!0;var d=n.accordion?n.accordion._stateChanges.pipe(Object(w.a)((function(e){return!(!e.hideToggle&&!e.togglePosition)}))):A.a;this._parentChangeSubscription=Object(S.a)(n.opened,n.closed,d,n._inputChanges.pipe(Object(w.a)((function(e){return!!(e.hideToggle||e.disabled||e.togglePosition)})))).subscribe((function(){return s._changeDetectorRef.markForCheck()})),n.closed.pipe(Object(w.a)((function(){return n._containsFocus()}))).subscribe((function(){return i.focusVia(t,"program")})),i.monitor(t).subscribe((function(e){e&&n.accordion&&n.accordion._handleHeaderFocus(s)})),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}return Object(a.a)(e,[{key:"_animationStarted",value:function(){this._animationsDisabled=!1}},{key:"_toggle",value:function(){this.disabled||this.panel.toggle()}},{key:"_isExpanded",value:function(){return this.panel.expanded}},{key:"_getExpandedState",value:function(){return this.panel._getExpandedState()}},{key:"_getPanelId",value:function(){return this.panel.id}},{key:"_getTogglePosition",value:function(){return this.panel.togglePosition}},{key:"_showToggle",value:function(){return!this.panel.hideToggle&&!this.panel.disabled}},{key:"_keydown",value:function(e){switch(e.keyCode){case O.j:case O.d:Object(O.o)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}},{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",n=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._element,e,n)}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}},{key:"disabled",get:function(){return this.panel.disabled}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Ib(K,1),i.Ib(i.j),i.Ib(v.d),i.Ib(i.f),i.Ib(J,8))},e.\u0275cmp=i.Cb({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header"],hostVars:19,hostBindings:function(e,n){1&e&&(i.uc("@expansionHeight.start",(function(){return n._animationStarted()})),i.Ub("click",(function(){return n._toggle()}))("keydown",(function(e){return n._keydown(e)}))),2&e&&(i.xb("id",n.panel._headerId)("tabindex",n.disabled?-1:0)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),i.vc("@.disabled",n._animationsDisabled)("@expansionHeight",i.ic(16,R,n._getExpandedState(),i.ic(13,M,n.collapsedHeight,n.expandedHeight))),i.Ab("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after","after"===n._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===n._getTogglePosition()))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:z,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,n){1&e&&(i.dc(U),i.Nb(0,"span",0),i.cc(1),i.cc(2,1),i.cc(3,2),i.Mb(),i.wc(4,N,1,1,"span",1)),2&e&&(i.wb(4),i.ec("ngIf",n._showToggle()))},directives:[y.h],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n'],encapsulation:2,data:{animation:[V.indicatorRotate,V.expansionHeaderHeight]},changeDetection:0}),e}(),Y=function(){var e=function e(){Object(r.a)(this,e)};return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(n){return new(n||e)},imports:[[y.b,x,_.h]]}),e}(),q=["*"],B=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Cb({type:e,selectors:[["aio-expandable-section"]],inputs:{title:"title"},ngContentSelectors:q,decls:4,vars:1,consts:[[2,"background","inherit"]],template:function(e,n){1&e&&(i.dc(),i.Nb(0,"mat-expansion-panel",0),i.Nb(1,"mat-expansion-panel-header"),i.yc(2),i.Mb(),i.cc(3),i.Mb()),2&e&&(i.wb(2),i.Ac(" ",n.title," "))},directives:[K,X],encapsulation:2}),e}(),Q=function(){function e(){this.customElementComponent=B}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(n){return new(n||e)},imports:[[Y]]}),e}()}}]);
//# sourceMappingURL=expandable-section-expandable-section-module.16e40c8a343a4f983e1a.js.map