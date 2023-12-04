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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordsGroupRef.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: loaderRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumberRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"wVW5+h/1LePAZRO6T93FpRHNSvU=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFFVztBQUdoQjtBQUsxQixNQUFNTSxTQUFTOztJQUdiLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1NLGNBQWNOLDZDQUFNQSxDQUFDO0lBQzNCLE1BQU1PLG9CQUFvQlAsNkNBQU1BLENBQUM7SUFDakMsTUFBTVEsV0FBV1IsNkNBQU1BLENBQUM7SUFHdEJELGdEQUFTQSxDQUFDO1FBRVJJLHNDQUFJQSxDQUFDTSxHQUFHQyxjQUFjQztJQUd4QixHQUFHLEVBQUU7SUFJUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsNEVBQXNCWTtRQUFFQyxLQUFLVjs7MEJBQzNDLDhEQUFDTztnQkFBSUMsV0FBV1gsb0ZBQThCYzs7a0NBQzVDLDhEQUFDSjt3QkFBSUMsV0FBV1gsNkVBQXVCZTt3QkFBRUYsS0FBS1Q7Ozs7OztrQ0FDOUMsOERBQUNZO3dCQUFLTCxXQUFXWCxtRkFBNkJpQjt3QkFBRUosS0FBS1I7a0NBQW1COzs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDSztnQkFBSUMsV0FBV1gsbUVBQWFrQjswQkFDM0IsNEVBQUNSO29CQUFJQyxXQUFXWCwwRUFBb0JtQjs7c0NBQ2xDLDhEQUFDVDs0QkFBSUMsV0FBV1gsNEVBQXNCb0I7Ozs7OztzQ0FDdEMsOERBQUNWOzRCQUFJQyxXQUFXWCwrRUFBeUJxQjs0QkFBRVIsS0FBS1A7c0NBQzdDUCx3Q0FBS0EsQ0FBQ3VCLElBQUksQ0FBQ0MsTUFBTUM7Z0NBQ2hCLHFCQUNFLDhEQUFDUjtvQ0FBaUJMLFdBQVdYLHlFQUFtQnlCOzhDQUM3Q0Y7bUNBRFFDOzs7Ozs0QkFJZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQXhDTXRCO0tBQUFBO0FBMENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcz8xZmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd29yZHMgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG5cblxuaW1wb3J0IHtnc2FwfSBmcm9tICdnc2FwJztcblxuXG5cblxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xuXG5cbiAgY29uc3QgbG9hZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwcm9ncmVzc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NOdW1iZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdvcmRzUmVmID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICBnc2FwLnRvKHdvcmRzR3JvdXBSZWYuY3VycmVudClcblxuXG4gICAgfSwgW10pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193cmFwcGVyfSByZWY9e2xvYWRlclJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzfSByZWY9e3Byb2dyZXNzUmVmfT48L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc051bWJlcn0gcmVmPXtwcm9ncmVzc051bWJlclJlZn0+MDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0gcmVmPXt3b3Jkc1JlZn0+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIndvcmRzIiwic3R5bGVzIiwiZ3NhcCIsIkxvYWRlciIsImxvYWRlclJlZiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJ3b3Jkc1JlZiIsInRvIiwid29yZHNHcm91cFJlZiIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2FkZXJfX3dyYXBwZXIiLCJyZWYiLCJsb2FkZXJfX3Byb2dyZXNzV3JhcHBlciIsImxvYWRlcl9fcHJvZ3Jlc3MiLCJzcGFuIiwibG9hZGVyX19wcm9ncmVzc051bWJlciIsImxvYWRlciIsImxvYWRlcl9fd29yZHMiLCJsb2FkZXJfX292ZXJsYXkiLCJsb2FkZXJfX3dvcmRzR3JvdXAiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJsb2FkZXJfX3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});