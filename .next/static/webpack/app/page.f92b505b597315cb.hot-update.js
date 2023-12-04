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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ \"(app-client)/./app/components/Loader/animations.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Loader = (param)=>{\n    let { timeline } = param;\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        timeline && timeline.add();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: loaderRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumberRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"wVW5+h/1LePAZRO6T93FpRHNSvU=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDVztBQUNoQjtBQUN1QztBQUlqRSxNQUFNUSxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUcxQixNQUFNQyxZQUFZUiw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNUyxjQUFjVCw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNVSxvQkFBb0JWLDZDQUFNQSxDQUFDO0lBQ2pDLE1BQU1XLFdBQVdYLDZDQUFNQSxDQUFDO0lBR3RCRCxnREFBU0EsQ0FBQztRQUVSUSxZQUNBQSxTQUFTSztJQUdYLEdBQUcsRUFBRTtJQUlQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXWiw0RUFBc0JhO1FBQUVDLEtBQUtSOzswQkFDM0MsOERBQUNLO2dCQUFJQyxXQUFXWixvRkFBOEJlOztrQ0FDNUMsOERBQUNKO3dCQUFJQyxXQUFXWiw2RUFBdUJnQjt3QkFBRUYsS0FBS1A7Ozs7OztrQ0FDOUMsOERBQUNVO3dCQUFLTCxXQUFXWixtRkFBNkJrQjt3QkFBRUosS0FBS047a0NBQW1COzs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDRztnQkFBSUMsV0FBV1osbUVBQWFtQjswQkFDM0IsNEVBQUNSO29CQUFJQyxXQUFXWiwwRUFBb0JvQjs7c0NBQ2xDLDhEQUFDVDs0QkFBSUMsV0FBV1osNEVBQXNCcUI7Ozs7OztzQ0FDdEMsOERBQUNWOzRCQUFJQyxXQUFXWiwrRUFBeUJzQjs0QkFBRVIsS0FBS0w7c0NBQzdDVix3Q0FBS0EsQ0FBQ3dCLElBQUksQ0FBQ0MsTUFBTUM7Z0NBQ2hCLHFCQUNFLDhEQUFDUjtvQ0FBaUJMLFdBQVdaLHlFQUFtQjBCOzhDQUM3Q0Y7bUNBRFFDOzs7Ozs0QkFJZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQXpDTXJCO0tBQUFBO0FBMkNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcz8xZmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd29yZHMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHtnc2FwfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IGludHJvQW5pbWF0aW9uLCBwcm9ncmVzc0FuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuXG5cbmNvbnN0IExvYWRlciA9ICh7IHRpbWVsaW5lIH0pID0+IHtcblxuXG4gIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzTnVtYmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3b3Jkc1JlZiA9IHVzZVJlZihudWxsKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgdGltZWxpbmUgJiZcbiAgICAgIHRpbWVsaW5lLmFkZCAoKVxuXG5cbiAgICB9LCBbXSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dyYXBwZXJ9IHJlZj17bG9hZGVyUmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc1dyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3N9IHJlZj17cHJvZ3Jlc3NSZWZ9PjwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzTnVtYmVyfSByZWY9e3Byb2dyZXNzTnVtYmVyUmVmfT4wPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3Jkc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX292ZXJsYXl9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3Jkc0dyb3VwfSByZWY9e3dvcmRzUmVmfT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3JkfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwid29yZHMiLCJzdHlsZXMiLCJnc2FwIiwiaW50cm9BbmltYXRpb24iLCJwcm9ncmVzc0FuaW1hdGlvbiIsIkxvYWRlciIsInRpbWVsaW5lIiwibG9hZGVyUmVmIiwicHJvZ3Jlc3NSZWYiLCJwcm9ncmVzc051bWJlclJlZiIsIndvcmRzUmVmIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGVyX193cmFwcGVyIiwicmVmIiwibG9hZGVyX19wcm9ncmVzc1dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzIiwic3BhbiIsImxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXIiLCJsb2FkZXIiLCJsb2FkZXJfX3dvcmRzIiwibG9hZGVyX19vdmVybGF5IiwibG9hZGVyX193b3Jkc0dyb3VwIiwibWFwIiwid29yZCIsImluZGV4IiwibG9hZGVyX193b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});