"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Loader/animations.js":
/*!*********************************************!*\
  !*** ./app/components/Loader/animations.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   collapseWords: function() { return /* binding */ collapseWords; },\n/* harmony export */   introAnimation: function() { return /* binding */ introAnimation; },\n/* harmony export */   progressAnimation: function() { return /* binding */ progressAnimation; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nconst introAnimation = (wordsGroupRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(wordsRef.current, {\n        yPercent: -80,\n        duration: 5,\n        ease: \"power3.inOut\"\n    });\n    return tl;\n};\nconst progressAnimation = (progressRef, progressNumberRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(progressRef.current, {\n        scaleX: 1,\n        duration: 5,\n        ease: \"power3.inOut\"\n    });\n    return tl;\n};\nconst collapseWords = (wordGroupsRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.to(wordGroupsRef.current, {\n        \"clip-path\": \"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)\",\n        duration: 3,\n        ease: \"expo.inOut\"\n    });\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2FuaW1hdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3QjtBQUdqQixNQUFNQyxpQkFBaUIsQ0FBQ0M7SUFDN0IsTUFBTUMsS0FBS0gsNENBQUlBLENBQUNJO0lBRWhCSiw0Q0FBSUEsQ0FBQ0ssR0FBR0MsU0FBU0MsU0FBUztRQUN4QkMsVUFBVSxDQUFDO1FBQ1hDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBR0UsT0FBT1A7QUFDWCxFQUFFO0FBRUssTUFBTVEsb0JBQW9CLENBQUNDLGFBQWFDO0lBRy9DLE1BQU1WLEtBQUtILDRDQUFJQSxDQUFDSTtJQUVkSiw0Q0FBSUEsQ0FBQ0ssR0FBR08sWUFBWUwsU0FBUztRQUMzQk8sUUFBUTtRQUNSTCxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUVBLE9BQU9QO0FBRVQsRUFBRTtBQUdLLE1BQU1ZLGdCQUFnQixDQUFDQztJQUMxQixNQUFNYixLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFDaEJELEdBQUdFLEdBQUdXLGNBQWNULFNBQVM7UUFDM0IsYUFBYTtRQUNiRSxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUVBLE9BQU9QO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2FkZXIvYW5pbWF0aW9ucy5qcz9kZGUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcblxuXG5leHBvcnQgY29uc3QgaW50cm9BbmltYXRpb24gPSAod29yZHNHcm91cFJlZikgPT4ge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICBnc2FwLnRvKHdvcmRzUmVmLmN1cnJlbnQsIHtcbiAgICB5UGVyY2VudDogLTgwLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXG4gIH0pO1xuXG5cbiAgICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NBbmltYXRpb24gPSAocHJvZ3Jlc3NSZWYsIHByb2dyZXNzTnVtYmVyUmVmKSA9PiB7XG5cblxuY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgZ3NhcC50byhwcm9ncmVzc1JlZi5jdXJyZW50LCB7XG4gICAgc2NhbGVYOiAxLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXG4gIH0pO1xuXG4gIHJldHVybiB0bDtcblxufTtcblxuXG5leHBvcnQgY29uc3QgY29sbGFwc2VXb3JkcyA9ICh3b3JkR3JvdXBzUmVmKSA9PiB7XG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgdGwudG8od29yZEdyb3Vwc1JlZi5jdXJyZW50LCB7XG4gICAgICBcImNsaXAtcGF0aFwiOiBcInBvbHlnb24oMCUgNTAlLCAxMDAlIDUwJSwgMTAwJSA1MCUsIDAlIDUwJSlcIixcbiAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgfSk7XG4gIFxuICAgIHJldHVybiB0bDtcbiAgfTtcbiJdLCJuYW1lcyI6WyJnc2FwIiwiaW50cm9BbmltYXRpb24iLCJ3b3Jkc0dyb3VwUmVmIiwidGwiLCJ0aW1lbGluZSIsInRvIiwid29yZHNSZWYiLCJjdXJyZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImVhc2UiLCJwcm9ncmVzc0FuaW1hdGlvbiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJzY2FsZVgiLCJjb2xsYXBzZVdvcmRzIiwid29yZEdyb3Vwc1JlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/animations.js\n"));

/***/ })

});