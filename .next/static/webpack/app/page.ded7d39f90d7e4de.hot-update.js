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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordsRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"expo.inOut\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(progressRef.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: loaderRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: progressNumberRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maccalukic/Desktop/Dev/ultra-agency/app/components/Loader/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"wVW5+h/1LePAZRO6T93FpRHNSvU=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFFVztBQUdoQjtBQUsxQixNQUFNTSxTQUFTOztJQUdiLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1NLGNBQWNOLDZDQUFNQSxDQUFDO0lBQzNCLE1BQU1PLG9CQUFvQlAsNkNBQU1BLENBQUM7SUFDakMsTUFBTVEsV0FBV1IsNkNBQU1BLENBQUM7SUFHdEJELGdEQUFTQSxDQUFDO1FBRVJJLHNDQUFJQSxDQUFDTSxHQUFHRCxTQUFTRSxTQUFTO1lBQ3hCQyxVQUFVLENBQUM7WUFDWEMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFHQVYsc0NBQUlBLENBQUNNLEdBQUdILFlBQVlJO0lBSXRCLEdBQUcsRUFBRTtJQUlQLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXYiw0RUFBc0JjO1FBQUVDLEtBQUtaOzswQkFDM0MsOERBQUNTO2dCQUFJQyxXQUFXYixvRkFBOEJnQjs7a0NBQzVDLDhEQUFDSjt3QkFBSUMsV0FBV2IsNkVBQXVCaUI7d0JBQUVGLEtBQUtYOzs7Ozs7a0NBQzlDLDhEQUFDYzt3QkFBS0wsV0FBV2IsbUZBQTZCbUI7d0JBQUVKLEtBQUtWO2tDQUFtQjs7Ozs7Ozs7Ozs7OzBCQUUxRSw4REFBQ087Z0JBQUlDLFdBQVdiLG1FQUFhb0I7MEJBQzNCLDRFQUFDUjtvQkFBSUMsV0FBV2IsMEVBQW9CcUI7O3NDQUNsQyw4REFBQ1Q7NEJBQUlDLFdBQVdiLDRFQUFzQnNCOzs7Ozs7c0NBQ3RDLDhEQUFDVjs0QkFBSUMsV0FBV2IsK0VBQXlCdUI7NEJBQUVSLEtBQUtUO3NDQUM3Q1Asd0NBQUtBLENBQUN5QixJQUFJLENBQUNDLE1BQU1DO2dDQUNoQixxQkFDRSw4REFBQ1I7b0NBQWlCTCxXQUFXYix5RUFBbUIyQjs4Q0FDN0NGO21DQURRQzs7Ozs7NEJBSWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0FoRE14QjtLQUFBQTtBQWtETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2FkZXIvaW5kZXguanM/MWZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5cbmltcG9ydCB7Z3NhcH0gZnJvbSAnZ3NhcCc7XG5cblxuXG5cbmNvbnN0IExvYWRlciA9ICgpID0+IHtcblxuXG4gIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzTnVtYmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3b3Jkc1JlZiA9IHVzZVJlZihudWxsKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgZ3NhcC50byh3b3Jkc1JlZi5jdXJyZW50LCB7XG4gICAgICAgIHlQZXJjZW50OiAtODAsXG4gICAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgICBlYXNlOiAnZXhwby5pbk91dCcsXG4gICAgICB9KTtcblxuXG4gICAgICBnc2FwLnRvKHByb2dyZXNzUmVmLmN1cnJlbnQpXG5cblxuXG4gICAgfSwgW10pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193cmFwcGVyfSByZWY9e2xvYWRlclJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzfSByZWY9e3Byb2dyZXNzUmVmfT48L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc051bWJlcn0gcmVmPXtwcm9ncmVzc051bWJlclJlZn0+MDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0gcmVmPXt3b3Jkc1JlZn0+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIndvcmRzIiwic3R5bGVzIiwiZ3NhcCIsIkxvYWRlciIsImxvYWRlclJlZiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJ3b3Jkc1JlZiIsInRvIiwiY3VycmVudCIsInlQZXJjZW50IiwiZHVyYXRpb24iLCJlYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGVyX193cmFwcGVyIiwicmVmIiwibG9hZGVyX19wcm9ncmVzc1dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzIiwic3BhbiIsImxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXIiLCJsb2FkZXIiLCJsb2FkZXJfX3dvcmRzIiwibG9hZGVyX19vdmVybGF5IiwibG9hZGVyX193b3Jkc0dyb3VwIiwibWFwIiwid29yZCIsImluZGV4IiwibG9hZGVyX193b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});