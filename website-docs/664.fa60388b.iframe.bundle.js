(self.webpackChunkanaglyph_letter_puzzle_game_frontend=self.webpackChunkanaglyph_letter_puzzle_game_frontend||[]).push([[664],{"./node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDomainLocale=function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("./node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("./node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto=`http${domain.http?"":"s"}://`,finalLocale=target===domain.defaultLocale?"":`/${target}`;return`${proto}${domain.domain}${basePath}${finalLocale}${path}`}return!1}return!1};const basePath=process.env.__NEXT_ROUTER_BASEPATH||"";("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z,_object_without_properties_loose=__webpack_require__("./node_modules/@swc/helpers/lib/_object_without_properties_loose.js").Z,_react=_interop_require_default(__webpack_require__("./node_modules/react/index.js")),_resolveHref=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/resolve-href.js"),_isLocalUrl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formatUrl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_addLocale=__webpack_require__("./node_modules/next/dist/client/add-locale.js"),_routerContext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_appRouterContext=__webpack_require__("./node_modules/next/dist/shared/lib/app-router-context.js"),_useIntersection=__webpack_require__("./node_modules/next/dist/client/use-intersection.js"),_getDomainLocale=__webpack_require__("./node_modules/next/dist/client/get-domain-locale.js"),_addBasePath=__webpack_require__("./node_modules/next/dist/client/add-base-path.js");const prefetched=new Set;function prefetch(router,href,as,options,isAppRouter){if("undefined"!=typeof window&&(isAppRouter||_isLocalUrl.isLocalURL(href))){if(!options.bypassPrefetchedCheck){const prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}Promise.resolve(router.prefetch(href,as,options)).catch((err=>{0}))}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:_formatUrl.formatUrl(urlObjOrString)}var _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1}=props,restProps=_object_without_properties_loose(props,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=_react.default.createElement("a",null,children));const prefetchEnabled=!1!==prefetchProp,pagesRouter=_react.default.useContext(_routerContext.RouterContext),appRouter=_react.default.useContext(_appRouterContext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter;const{href,as}=_react.default.useMemo((()=>{if(!pagesRouter){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=_resolveHref.resolveHref(pagesRouter,hrefProp,!0);return{href:resolvedHref,as:asProp?_resolveHref.resolveHref(pagesRouter,asProp):resolvedAs||resolvedHref}}),[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;if(legacyBehavior)child=_react.default.Children.only(children);else;const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=_useIntersection.useIntersection({rootMargin:"200px"}),setRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))}),[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale},isAppRouter)}),[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router,isAppRouter]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!isAppRouter&&!_isLocalUrl.isLocalURL(href)))return;e.preventDefault();const navigate=()=>{"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},isAppRouter))},onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},isAppRouter))}};if(_utils.isAbsoluteUrl(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&_getDomainLocale.getDomainLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||_addBasePath.addBasePath(_addLocale.addLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",Object.assign({},restProps,childProps),children)}));exports.default=_default,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.normalizeLocalePath=void 0;exports.normalizeLocalePath=(pathname,locales)=>process.env.__NEXT_I18N_SUPPORT?__webpack_require__("./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").normalizeLocalePath(pathname,locales):{pathname,detectedLocale:void 0},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/link.js")}}]);