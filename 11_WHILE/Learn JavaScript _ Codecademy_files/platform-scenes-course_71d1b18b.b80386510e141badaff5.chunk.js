(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[383],{PyEA:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),o=n("rePB"),c=n("o0o1"),a=n.n(c),s=n("HaE+"),i=n("ODXe"),u=n("q1tI"),l=n.n(u),p=n("/MKj"),b=n("GR0a"),f=n("/BuZ"),O=n("e18T"),j=n("cHig"),h=n("yy36"),m=n("Ff2n"),C=n("1OyB"),d=n("vuIU"),y=n("JX7q"),v=n("Ji7U"),w=n("md7G"),P=n("foSv"),I=n("cQ3R"),E=n("fTi7"),g=n("b0K7"),x=n("FsEs"),_=n("wMKF"),S=n("1xSP"),A=n("lzsc"),D=n("c8W1"),R=n("2oex"),k=n("CWAm"),T=n("raiL"),K=n("givd"),L=n("w1aO"),F=n("J2dO"),B=["currentContentItem","hasCourseAccess","hasCourseContentItemAccess","platformPage","contentTitle"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=Object(P.a)(e);if(t){var o=Object(P.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(w.a)(this,n)}}var N={showModal:K.c,nextContentItemRequested:D.b,trackVisit:k.i},M=function CourseRouteComponent(e){var t=S.c[e.currentContentItem.type].component;return l.a.createElement(t,e)},U=function(e){Object(v.default)(CourseContentItem,e);var t=_createSuper(CourseContentItem);function CourseContentItem(){var e;Object(C.default)(this,CourseContentItem);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),Object(o.a)(Object(y.a)(e),"state",{showInterstitials:!1}),Object(o.a)(Object(y.a)(e),"componentDidUpdate",(function(t){t.hasCourseContentItemAccess&&!e.props.hasCourseContentItemAccess&&e.showProExclusiveCourseInterstitial()})),Object(o.a)(Object(y.a)(e),"showNextContentInterstitial",(function(){e.props.interstitialsFeatureFlagEnabled?e.setState({showInterstitials:!0}):e.props.nextContentItemRequested({returnPath:e.returnPath()})})),Object(o.a)(Object(y.a)(e),"showProExclusiveCourseInterstitial",Object(s.a)(a.a.mark((function _callee(){var t,n,r;return a.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.props.proExclusiveExperimentAssignment,n=t){o.next=6;break}return o.next=5,Object(E.a)(L.a.ProExclusive);case 5:n=o.sent;case 6:r="variant"===n?"ProExclusiveFullscreen":"ProExclusiveCourseInterstitial",e.props.showModal({type:r,returnPath:e.returnPath()});case 8:case"end":return o.stop()}}),_callee)})))),e}return Object(d.default)(CourseContentItem,[{key:"componentDidMount",value:function componentDidMount(){var e;this.props.contentIds&&((e=window).dataLayer||(e.dataLayer=[]),window.dataLayer.push({event:"content_id_loaded",content_id:Object(_.a)(this.props.contentIds)}));this.props.hasCourseContentItemAccess||this.showProExclusiveCourseInterstitial()}},{key:"returnPath",value:function returnPath(){var e=this.props.locationParams;return Object(g.nb)(e.trackSlug)}},{key:"renderCourseRouteComponent",value:function renderCourseRouteComponent(){var e=this.props,t=e.currentContentItem,n=(e.hasCourseAccess,e.hasCourseContentItemAccess),o=e.platformPage,c=(e.contentTitle,_objectSpread(_objectSpread({},Object(m.a)(e,B)),{},{exitPaths:{logo:"/",back:this.returnPath()},navigateToExercise:this.props.navigateToExercise,showNextContentInterstitial:this.showNextContentInterstitial}));return n?l.a.createElement(M,Object(r.a)({next:function next(){}},c,{platformPage:o,currentContentItem:t})):"lesson"===t.type?l.a.createElement(F.a,{contentItemSlug:t.slug,isFreeTrack:!1,hideSignUp:!0}):l.a.createElement(f.a,null)}},{key:"render",value:function render(){var e=this.props.contentTitle,t=this.state.showInterstitials;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{title:e}),t?l.a.createElement(x.a,null):this.renderCourseRouteComponent())}}]),CourseContentItem}(u.Component),q=Object(p.connect)((function mapStateToProps(e){return{currentCourse:Object(R.L)(e),contentTitle:Object(R.j)(e),currentContentItem:Object(R.r)(e),nextContentItems:Object(R.bb)(e),hasNextContent:Object(R.Y)(e),isCourseCompleted:Object(A.b)(e),hasCourseAccess:Object(R.R)(e),hasCourseContentItemAccess:Object(R.S)(e),contentIds:Object(R.i)(e),interstitialsFeatureFlagEnabled:Object(T.b)(e,"interstitials_techdebt"),proExclusiveExperimentAssignment:Object(h.ab)(e)}}),N)(U);function course_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function course_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?course_ownKeys(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):course_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={fetchInitialCourseContent:j.b};t.default=Object(p.connect)((function mapStateToProps(e){return{isAnonymous:Object(h.E)(e)}}),H)((function CourseContainer(e){var t=Object(u.useState)(!0),n=Object(i.a)(t,2),o=n[0],c=n[1],p=e.locationParams,j=e.locationQuery,h=e.dispatch,m=e.fetchInitialCourseContent,C=e.isAnonymous;if(Object(u.useEffect)((function(){if(!C){var e=function(){var e=Object(s.a)(a.a.mark((function _callee(){return a.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:c(!1);case 3:case"end":return e.stop()}}),_callee)})));return function fetchData(){return e.apply(this,arguments)}}();c(!0),e()}}),[C,p.trackSlug,m]),C||o)return l.a.createElement(f.a,null);return l.a.createElement(q,Object(r.a)({navigateToExercise:function navigateToExercise(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O.d(course_objectSpread(course_objectSpread({},p),{},{sectionType:"exercises",exerciseSlug:e,query:j}));t&&(n=Object(b.redirect)(n)),h(n)}},e))}))}}]);
//# sourceMappingURL=platform-scenes-course~71d1b18b.b80386510e141badaff5.chunk.js.map