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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DayEight; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TxHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TxHash */ \"./src/components/TxHash.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ \"./constants/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DayEight() {\n    _s();\n    const { data: tx_hash, writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)();\n    function claim() {\n        writeContract({\n            abi: _constants__WEBPACK_IMPORTED_MODULE_5__.contract_abi,\n            address: _constants__WEBPACK_IMPORTED_MODULE_5__.contract_address,\n            functionName: \"claim\",\n            args: []\n        }, {\n            onError: (e)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"\".concat(e.cause), {\n                    position: \"top-right\"\n                });\n                console.table(e.name, e.cause);\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-0.5 my-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Congratulations on completing Klaytn Educate Series \\uD83C\\uDF89\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black rounded-xl text-white p-5 my-5\",\n                        onClick: claim,\n                        children: \"Mint NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Transaction Hash:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxHash__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: tx_hash\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"border-b-2 border-blue-100\",\n                children: \"Back Home\"\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/components/Mint.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(DayEight, \"Yw1/9BsiByOXOVGgEqEdlTPTM3I=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = DayEight;\nvar _c;\n$RefreshReg$(_c, \"DayEight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NaW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ1o7QUFHVTtBQUNRO0FBRWpCO0FBQ21DO0FBRWxELFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsYUFBYSxFQUFFLEdBQUdULHVEQUFnQkE7SUFFekQsU0FBU1U7UUFDUEQsY0FDSTtZQUNFRSxLQUFLUCxvREFBWUE7WUFDakJRLFNBQVNQLHdEQUFnQkE7WUFDekJRLGNBQWM7WUFDZEMsTUFBTSxFQUFFO1FBQ1YsR0FDQTtZQUNFQyxTQUFTLENBQUNDO2dCQUNSZCxpREFBS0EsQ0FBQ2UsS0FBSyxDQUFDLEdBQVcsT0FBUkQsRUFBRUUsS0FBSyxHQUFJO29CQUN4QkMsVUFBVTtnQkFDWjtnQkFDQUMsUUFBUUMsS0FBSyxDQUFDTCxFQUFFTSxJQUFJLEVBQUVOLEVBQUVFLEtBQUs7WUFDL0I7UUFDRjtJQUVOO0lBSUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO3dCQUFPRixXQUFVO3dCQUEwQ0csU0FBU2pCO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBSTlFLDhEQUFDa0I7O2tDQUNDLDhEQUFDQztrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDMUIsK0NBQU1BO2tDQUFFSzs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDUCxrREFBSUE7Z0JBQUM2QixNQUFLO2dCQUFJTixXQUFVOzBCQUE2Qjs7Ozs7Ozs7Ozs7O0FBSTVEO0dBeEN3QmxCOztRQUNtQk4sbURBQWdCQTs7O0tBRG5DTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NaW50LnRzeD8wYmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXcml0ZUNvbnRyYWN0IH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuaW1wb3J0IFR4SGFzaCBmcm9tIFwiLi9UeEhhc2hcIjtcbmltcG9ydCB7IGNvbnRyYWN0X2FiaSwgY29udHJhY3RfYWRkcmVzcyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF5RWlnaHQoKSB7XG4gIGNvbnN0IHsgZGF0YTogdHhfaGFzaCwgd3JpdGVDb250cmFjdCB9ID0gdXNlV3JpdGVDb250cmFjdCgpO1xuXG4gIGZ1bmN0aW9uIGNsYWltKCkge1xuICAgIHdyaXRlQ29udHJhY3QoXG4gICAgICAgIHtcbiAgICAgICAgICBhYmk6IGNvbnRyYWN0X2FiaSxcbiAgICAgICAgICBhZGRyZXNzOiBjb250cmFjdF9hZGRyZXNzLFxuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogXCJjbGFpbVwiLFxuICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb25FcnJvcjogKGUpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2UuY2F1c2V9YCwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShlLm5hbWUsIGUuY2F1c2UpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7IFxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0wLjUgbXktMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yMFwiPlxuICAgICAgICA8cD5Db25ncmF0dWxhdGlvbnMgb24gY29tcGxldGluZyBLbGF5dG4gRWR1Y2F0ZSBTZXJpZXMg8J+OiTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLXhsIHRleHQtd2hpdGUgcC01IG15LTVcIiBvbkNsaWNrPXtjbGFpbX0+XG4gICAgICAgICAgTWludCBORlRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aGVhZGVyPlRyYW5zYWN0aW9uIEhhc2g6PC9oZWFkZXI+XG4gICAgICAgIDxUeEhhc2g+e3R4X2hhc2h9PC9UeEhhc2g+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLWJsdWUtMTAwXCI+QmFjayBIb21lPC9MaW5rPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlV3JpdGVDb250cmFjdCIsIkxpbmsiLCJ0b2FzdCIsIlR4SGFzaCIsImNvbnRyYWN0X2FiaSIsImNvbnRyYWN0X2FkZHJlc3MiLCJEYXlFaWdodCIsImRhdGEiLCJ0eF9oYXNoIiwid3JpdGVDb250cmFjdCIsImNsYWltIiwiYWJpIiwiYWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJvbkVycm9yIiwiZSIsImVycm9yIiwiY2F1c2UiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJ0YWJsZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInNlY3Rpb24iLCJoZWFkZXIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Mint.tsx\n"));

/***/ })

});