"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/claim",{

/***/ "./src/components/Mint.tsx":
/*!*********************************!*\
  !*** ./src/components/Mint.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DayEight; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TxHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TxHash */ \"./src/components/TxHash.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ \"./constants/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DayEight() {\n    _s();\n    const { data: tx_hash, writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useWriteContract)();\n    function claim() {\n        writeContract({\n            abi: _constants__WEBPACK_IMPORTED_MODULE_4__.contract_abi,\n            address: _constants__WEBPACK_IMPORTED_MODULE_4__.contract_address,\n            functionName: \"claim\",\n            args: []\n        }, {\n            onError: (e)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"\".concat(e.cause), {\n                    position: \"top-right\"\n                });\n                console.table(e.name, e.cause);\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-0.5 my-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Congratulations on completing Klaytn Educate Series \\uD83C\\uDF89\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black rounded-xl text-white p-5 my-5\",\n                        onClick: claim,\n                        children: \"Mint NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Transaction Hash:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxHash__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: tx_hash\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(DayEight, \"Yw1/9BsiByOXOVGgEqEdlTPTM3I=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useWriteContract\n    ];\n});\n_c = DayEight;\nvar _c;\n$RefreshReg$(_c, \"DayEight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NaW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN5QztBQUVGO0FBQ1E7QUFFakI7QUFDbUM7QUFFbEQsU0FBU0s7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxhQUFhLEVBQUUsR0FBR1IsdURBQWdCQTtJQUV6RCxTQUFTUztRQUNQRCxjQUNJO1lBQ0VFLEtBQUtQLG9EQUFZQTtZQUNqQlEsU0FBU1Asd0RBQWdCQTtZQUN6QlEsY0FBYztZQUNkQyxNQUFNLEVBQUU7UUFDVixHQUNBO1lBQ0VDLFNBQVMsQ0FBQ0M7Z0JBQ1JkLGlEQUFLQSxDQUFDZSxLQUFLLENBQUMsR0FBVyxPQUFSRCxFQUFFRSxLQUFLLEdBQUk7b0JBQ3hCQyxVQUFVO2dCQUNaO2dCQUNBQyxRQUFRQyxLQUFLLENBQUNMLEVBQUVNLElBQUksRUFBRU4sRUFBRUUsS0FBSztZQUMvQjtRQUNGO0lBRU47SUFJQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQU9GLFdBQVU7d0JBQTBDRyxTQUFTakI7a0NBQU87Ozs7Ozs7Ozs7OzswQkFJOUUsOERBQUNrQjs7a0NBQ0MsOERBQUNDO2tDQUFPOzs7Ozs7a0NBQ1IsOERBQUMxQiwrQ0FBTUE7a0NBQUVLOzs7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNzQjs7Ozs7Ozs7Ozs7QUFHUDtHQXZDd0J4Qjs7UUFDbUJMLG1EQUFnQkE7OztLQURuQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWludC50c3g/MGJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlV3JpdGVDb250cmFjdCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5pbXBvcnQgVHhIYXNoIGZyb20gXCIuL1R4SGFzaFwiO1xuaW1wb3J0IHsgY29udHJhY3RfYWJpLCBjb250cmFjdF9hZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXlFaWdodCgpIHtcbiAgY29uc3QgeyBkYXRhOiB0eF9oYXNoLCB3cml0ZUNvbnRyYWN0IH0gPSB1c2VXcml0ZUNvbnRyYWN0KCk7XG5cbiAgZnVuY3Rpb24gY2xhaW0oKSB7XG4gICAgd3JpdGVDb250cmFjdChcbiAgICAgICAge1xuICAgICAgICAgIGFiaTogY29udHJhY3RfYWJpLFxuICAgICAgICAgIGFkZHJlc3M6IGNvbnRyYWN0X2FkZHJlc3MsXG4gICAgICAgICAgZnVuY3Rpb25OYW1lOiBcImNsYWltXCIsXG4gICAgICAgICAgYXJnczogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvbkVycm9yOiAoZSkgPT4ge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZS5jYXVzZX1gLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGUubmFtZSwgZS5jYXVzZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTsgXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTAuNSBteS0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIwXCI+XG4gICAgICAgIDxwPkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIEtsYXl0biBFZHVjYXRlIFNlcmllcyDwn46JPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQteGwgdGV4dC13aGl0ZSBwLTUgbXktNVwiIG9uQ2xpY2s9e2NsYWltfT5cbiAgICAgICAgICBNaW50IE5GVFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoZWFkZXI+VHJhbnNhY3Rpb24gSGFzaDo8L2hlYWRlcj5cbiAgICAgICAgPFR4SGFzaD57dHhfaGFzaH08L1R4SGFzaD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxociAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVdyaXRlQ29udHJhY3QiLCJ0b2FzdCIsIlR4SGFzaCIsImNvbnRyYWN0X2FiaSIsImNvbnRyYWN0X2FkZHJlc3MiLCJEYXlFaWdodCIsImRhdGEiLCJ0eF9oYXNoIiwid3JpdGVDb250cmFjdCIsImNsYWltIiwiYWJpIiwiYWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJvbkVycm9yIiwiZSIsImVycm9yIiwiY2F1c2UiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJ0YWJsZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInNlY3Rpb24iLCJoZWFkZXIiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Mint.tsx\n"));

/***/ })

});