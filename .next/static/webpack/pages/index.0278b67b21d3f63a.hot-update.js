"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var _components_ConnectWalletBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWalletBtn */ \"./src/components/ConnectWalletBtn.tsx\");\n/* harmony import */ var _components_ContractCallForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ContractCallForm */ \"./src/components/ContractCallForm.tsx\");\n/* harmony import */ var _components_TransferForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TransferForm */ \"./src/components/TransferForm.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/NavBar */ \"./src/components/NavBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const { address, isConnecting, isDisconnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-screen-md px-5 mt-10 flex flex-wrap mx-auto gap-8 overflow-hidden break-words\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Kaikas + Web3Modal\"\n                }, void 0, false, {\n                    fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between justify-items-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-black text-2xl py-1\",\n                        children: \"Class Checker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWalletBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransferForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContractCallForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full flex-col gap-6\"\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"ybh2Wt+gSVNaf4BnkDwj1mNEmxQ=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNNO0FBRTBCO0FBQ0E7QUFDUjtBQUNaO0FBRTFCLFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxjQUFjLEVBQUUsR0FBR1IsaURBQVVBO0lBRTVELHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1gsa0RBQUlBOzBCQUNILDRFQUFDWTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTJCOzs7Ozs7a0NBQ3pDLDhEQUFDVCxvRUFBZ0JBOzs7Ozs7Ozs7OztZQUVsQksseUJBQ0MsOERBQUNHOztrQ0FDQyw4REFBQ0wsMERBQU1BOzs7OztrQ0FDUCw4REFBQ0s7OzBDQUNDLDhEQUFDTixnRUFBWUE7Ozs7OzBDQUNiLDhEQUFDRCxvRUFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkIsOERBQUNPO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFNckI7R0EzQndCTDs7UUFDNEJMLDZDQUFVQTs7O0tBRHRDSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldEJ0biBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRCdG5cIjtcbmltcG9ydCBDb250cmFjdENhbGxGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udHJhY3RDYWxsRm9ybVwiO1xuaW1wb3J0IFRyYW5zZmVyRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1RyYW5zZmVyRm9ybVwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdkJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0aW5nLCBpc0Rpc2Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbWQgcHgtNSBtdC0xMCBmbGV4IGZsZXgtd3JhcCBteC1hdXRvIGdhcC04IG92ZXJmbG93LWhpZGRlbiBicmVhay13b3Jkc1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5LYWlrYXMgKyBXZWIzTW9kYWw8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC0yeGwgcHktMVwiPkNsYXNzIENoZWNrZXI8L2gxPlxuICAgICAgICA8Q29ubmVjdFdhbGxldEJ0biAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7YWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VHJhbnNmZXJGb3JtIC8+XG4gICAgICAgICAgICA8Q29udHJhY3RDYWxsRm9ybSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgIHsvKiA8VHJhbnNmZXJGb3JtIC8+XG4gICAgICAgIDxDb250cmFjdENhbGxGb3JtIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUFjY291bnQiLCJDb25uZWN0V2FsbGV0QnRuIiwiQ29udHJhY3RDYWxsRm9ybSIsIlRyYW5zZmVyRm9ybSIsIk5hdkJhciIsIkFwcCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RpbmciLCJpc0Rpc2Nvbm5lY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});