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

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Loader */ \"(app-client)/./app/components/Loader/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Hero */ \"(app-client)/./app/components/Hero/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    // loader is not finished by default\n    const [loadingFinished, setLoadingFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // timeline for the loader component\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // once components \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.context(()=>{\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n                onComplete: ()=>{\n                    setLoadingFinished(true);\n                }\n            });\n            setTimeline(tl);\n        });\n        return ()=>context.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            loadingFinished ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/page.js\",\n                lineNumber: 42,\n                columnNumber: 26\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                timeline: timeline\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/page.js\",\n                lineNumber: 42,\n                columnNumber: 37\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                timeline: timeline\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/page.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"lmFrDxrLanYAnav7LlCYamMzU+s=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2tEO0FBQ3RCO0FBR2E7QUFDSjtBQUVyQyxNQUFNSyxPQUFPOztJQUVYLG9DQUFvQztJQUNwQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZELG9DQUFvQztJQUNwQyxNQUFNLENBQUVPLFVBQVVDLFlBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFHN0MsbUJBQW1CO0lBRWpCRCxzREFBZUEsQ0FBQztRQUNkLE1BQU1VLFVBQVVSLHNDQUFJQSxDQUFDUSxRQUFRO1lBQzNCLE1BQU1DLEtBQUtULHNDQUFJQSxDQUFDTSxTQUFTO2dCQUNyQkksWUFBWTtvQkFDVkwsbUJBQW1CO2dCQUNyQjtZQUNGO1lBRUFFLFlBQVlFO1FBRWhCO1FBRUEsT0FBTyxJQUFNRCxRQUFRRztJQUV2QixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ0M7O1lBQ0VSLGdDQUFrQiw4REFBQ0Ysd0RBQUlBOzs7OzBDQUFNLDhEQUFDRCwwREFBTUE7Z0JBQUNLLFVBQVVBOzs7Ozs7MEJBRWhELDhEQUFDTCwwREFBTUE7Z0JBQUNLLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFHeEI7R0FwQ01IO0tBQUFBO0FBc0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cblxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cblxuaW1wb3J0IExvYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9IZXJvXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgLy8gbG9hZGVyIGlzIG5vdCBmaW5pc2hlZCBieSBkZWZhdWx0XG4gIGNvbnN0IFtsb2FkaW5nRmluaXNoZWQsIHNldExvYWRpbmdGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gdGltZWxpbmUgZm9yIHRoZSBsb2FkZXIgY29tcG9uZW50XG4gIGNvbnN0IFsgdGltZWxpbmUsIHNldFRpbWVsaW5lIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG4vLyBvbmNlIGNvbXBvbmVudHMgXG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZ0ZpbmlzaGVkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRUaW1lbGluZSh0bCk7XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGNvbnRleHQucmV2ZXJ0KCk7XG5cbiAgfSwgW10pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge2xvYWRpbmdGaW5pc2hlZCA/IDxIZXJvIC8+IDogPExvYWRlciB0aW1lbGluZT17dGltZWxpbmV9Lz59XG4gICAgXG4gICAgICA8TG9hZGVyIHRpbWVsaW5lPXt0aW1lbGluZX0vPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGUiLCJnc2FwIiwiTG9hZGVyIiwiSGVybyIsIkhvbWUiLCJsb2FkaW5nRmluaXNoZWQiLCJzZXRMb2FkaW5nRmluaXNoZWQiLCJ0aW1lbGluZSIsInNldFRpbWVsaW5lIiwiY29udGV4dCIsInRsIiwib25Db21wbGV0ZSIsInJldmVydCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});