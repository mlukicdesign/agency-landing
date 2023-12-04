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

/***/ "(app-client)/./app/components/Loader/index.js":
/*!****************************************!*\
  !*** ./app/components/Loader/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ \"(app-client)/./app/components/Loader/animations.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Loader = (param)=>{\n    let { timeline } = param;\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsGroupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        timeline && timeline.add((0,_animations__WEBPACK_IMPORTED_MODULE_3__.introAnimation)(wordsGroupRef)).add((0,_animations__WEBPACK_IMPORTED_MODULE_3__.progressAnimation)(progressRef, progressNumberRef), 0).add((0,_animations__WEBPACK_IMPORTED_MODULE_3__.collapseWords)(loaderRef), \"-=1\");\n    }, [\n        timeline\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumberRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                ref: loaderRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsGroupRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"nJNNwq2CaqdAyaGREPJ8AaxBD/I=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDVztBQUNoQjtBQUNzRDtBQUloRixNQUFNUyxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUcxQixNQUFNQyxZQUFZVCw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNVSxjQUFjViw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNVyxvQkFBb0JYLDZDQUFNQSxDQUFDO0lBQ2pDLE1BQU1ZLGdCQUFnQlosNkNBQU1BLENBQUM7SUFHM0JELGdEQUFTQSxDQUFDO1FBRVJTLFlBQ0FBLFNBQ0dLLElBQUlSLDJEQUFjQSxDQUFDTyxnQkFDbkJDLElBQUlQLDhEQUFpQkEsQ0FBQ0ksYUFBYUMsb0JBQW9CLEdBQ3ZERSxJQUFJVCwwREFBYUEsQ0FBQ0ssWUFBWTtJQUVuQyxHQUFHO1FBQUNEO0tBQVM7SUFJZixxQkFDRSw4REFBQ007UUFBSUMsV0FBV2IsNEVBQXNCYzs7MEJBQ3BDLDhEQUFDRjtnQkFBSUMsV0FBV2Isb0ZBQThCZTs7a0NBQzVDLDhEQUFDSDt3QkFBSUMsV0FBV2IsNkVBQXVCZ0I7d0JBQUVDLEtBQUtUOzs7Ozs7a0NBQzlDLDhEQUFDVTt3QkFBS0wsV0FBV2IsbUZBQTZCbUI7d0JBQUVGLEtBQUtSO2tDQUFtQjs7Ozs7Ozs7Ozs7OzBCQUUxRSw4REFBQ0c7Z0JBQUlDLFdBQVdiLG1FQUFhb0I7Z0JBQUVILEtBQUtWOzBCQUNsQyw0RUFBQ0s7b0JBQUlDLFdBQVdiLDBFQUFvQnFCOztzQ0FDbEMsOERBQUNUOzRCQUFJQyxXQUFXYiw0RUFBc0JzQjs7Ozs7O3NDQUN0Qyw4REFBQ1Y7NEJBQUlDLFdBQVdiLCtFQUF5QnVCOzRCQUFFTixLQUFLUDtzQ0FDN0NYLHdDQUFLQSxDQUFDeUIsSUFBSSxDQUFDQyxNQUFNQztnQ0FDaEIscUJBQ0UsOERBQUNSO29DQUFpQkwsV0FBV2IseUVBQW1CMkI7OENBQzdDRjttQ0FEUUM7Ozs7OzRCQUlmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBM0NNckI7S0FBQUE7QUE2Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzPzFmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQge2dzYXB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgY29sbGFwc2VXb3JkcywgaW50cm9BbmltYXRpb24sIHByb2dyZXNzQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5cblxuY29uc3QgTG9hZGVyID0gKHsgdGltZWxpbmUgfSkgPT4ge1xuXG5cbiAgY29uc3QgbG9hZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwcm9ncmVzc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NOdW1iZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdvcmRzR3JvdXBSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgIHRpbWVsaW5lICYmXG4gICAgICB0aW1lbGluZVxuICAgICAgICAuYWRkKGludHJvQW5pbWF0aW9uKHdvcmRzR3JvdXBSZWYpKVxuICAgICAgICAuYWRkKHByb2dyZXNzQW5pbWF0aW9uKHByb2dyZXNzUmVmLCBwcm9ncmVzc051bWJlclJlZiksIDApXG4gICAgICAgIC5hZGQoY29sbGFwc2VXb3Jkcyhsb2FkZXJSZWYpLCBcIi09MVwiKTtcblxuICAgIH0sIFt0aW1lbGluZV0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc1dyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3N9IHJlZj17cHJvZ3Jlc3NSZWZ9PjwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzTnVtYmVyfSByZWY9e3Byb2dyZXNzTnVtYmVyUmVmfT4wPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0gcmVmPXtsb2FkZXJSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0gcmVmPXt3b3Jkc0dyb3VwUmVmfT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3JkfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwid29yZHMiLCJzdHlsZXMiLCJnc2FwIiwiY29sbGFwc2VXb3JkcyIsImludHJvQW5pbWF0aW9uIiwicHJvZ3Jlc3NBbmltYXRpb24iLCJMb2FkZXIiLCJ0aW1lbGluZSIsImxvYWRlclJlZiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJ3b3Jkc0dyb3VwUmVmIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGVyX193cmFwcGVyIiwibG9hZGVyX19wcm9ncmVzc1dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzIiwicmVmIiwic3BhbiIsImxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXIiLCJsb2FkZXIiLCJsb2FkZXJfX3dvcmRzIiwibG9hZGVyX19vdmVybGF5IiwibG9hZGVyX193b3Jkc0dyb3VwIiwibWFwIiwid29yZCIsImluZGV4IiwibG9hZGVyX193b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});