(self.webpackChunkngrx_io=self.webpackChunkngrx_io||[]).push([["src_app_custom-elements_announcement-bar_announcement-bar_module_ts"],{4310:function(n,e,t){"use strict";t.r(e),t.d(e,{AnnouncementBarModule:function(){return g}});var r=t(98),o=t(5472),u=t(5289),a=t(3426),c=t(5639),i=t(1640),s=t(744),f=t(901);function m(n,e){if(1&n&&(s.TgZ(0,"div",1),s.TgZ(1,"div",2),s._UZ(2,"img",3),s._UZ(3,"p",4),s.TgZ(4,"a",5),s._uU(5,"Learn More"),s.qZA(),s.qZA(),s.qZA()),2&n){var t=s.oxw();s.xp6(2),s.Q6J("src",t.announcement.imageUrl,s.LSH),s.xp6(1),s.Q6J("innerHTML",t.announcement.message,s.oJD),s.xp6(1),s.Q6J("href",t.announcement.linkUrl,s.LSH)}}var p=i.bL+"announcements.json",l=function(){function n(n,e){this.http=n,this.logger=e}return n.prototype.ngOnInit=function(){var n=this;this.http.get(p).pipe((0,a.K)(function(e){return n.logger.error(new Error(p+" request failed: "+e.message)),[]}),(0,c.U)(function(e){return n.findCurrentAnnouncement(e)}),(0,a.K)(function(e){return n.logger.error(new Error(p+" contains invalid data: "+e.message)),[]})).subscribe(function(e){return n.announcement=e})},n.prototype.findCurrentAnnouncement=function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]},n.\u0275fac=function(e){return new(e||n)(s.Y36(o.eN),s.Y36(f.Y))},n.\u0275cmp=s.Xpm({type:n,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],[3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&s.YNc(0,m,6,3,"div",0),2&n&&s.Q6J("ngIf",e.announcement)},directives:[r.O5],encapsulation:2}),n}(),g=function(){function n(){this.customElementComponent=l}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[r.ez,u.m,o.JF]]}),n}()}}]);
//# sourceMappingURL=src_app_custom-elements_announcement-bar_announcement-bar_module_ts.da439d3c9062c9a24f23.js.map