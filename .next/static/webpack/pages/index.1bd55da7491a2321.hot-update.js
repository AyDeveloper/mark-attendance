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

/***/ "./src/components/DayTwo.tsx":
/*!***********************************!*\
  !*** ./src/components/DayTwo.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DayTwo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TxHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TxHash */ \"./src/components/TxHash.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ \"./constants/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DayTwo() {\n    _s();\n    const { data: tx_hash, writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)();\n    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ev)=>{\n        ev.preventDefault();\n        const form_data = new FormData(ev.currentTarget);\n        const secretCode = form_data.get(\"secretCode\");\n        if (!secretCode) return;\n        writeContract({\n            abi: _constants__WEBPACK_IMPORTED_MODULE_5__.contract_abi,\n            address: _constants__WEBPACK_IMPORTED_MODULE_5__.contract_address,\n            functionName: \"submitDayTwo\",\n            args: [\n                secretCode.toString()\n            ]\n        }, {\n            onError: (e)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"\".concat(e.cause), {\n                    position: \"top-right\"\n                });\n                console.table(e.name, e.cause);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-0.5 my-1\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"border-b-2 border-blue-100 my-3\",\n                children: \"Day Two\"\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-start\",\n                type: \"submit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg underline\",\n                    children: [\n                        \"(\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-mono\",\n                            children: \"Submit Secret Code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 12\n                        }, this),\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Secret Code: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        defaultValue: \"\",\n                        name: \"secretCode\",\n                        required: true,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    \"cap locks\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Transaction Hash:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TxHash__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: tx_hash\n                    }, void 0, false, {\n                        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kaikas-web3modal/src/components/DayTwo.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(DayTwo, \"IhP3G1u89ZvgRckXeXkcPJ+RqB4=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = DayTwo;\nvar _c;\n$RefreshReg$(_c, \"DayTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXlUd28udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDYjtBQUVGO0FBQ1E7QUFFakI7QUFDbUM7QUFHbEQsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxhQUFhLEVBQUUsR0FBR1IsdURBQWdCQTtJQUV6RCxNQUFNUyxXQUFXVixrREFBV0EsQ0FDMUIsT0FBT1c7UUFDTEEsR0FBR0MsY0FBYztRQUVqQixNQUFNQyxZQUFZLElBQUlDLFNBQVNILEdBQUdJLGFBQWE7UUFDL0MsTUFBTUMsYUFBYUgsVUFBVUksR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQ0QsWUFBWTtRQUVqQlAsY0FDRTtZQUNFUyxLQUFLZCxvREFBWUE7WUFDakJlLFNBQVNkLHdEQUFnQkE7WUFDekJlLGNBQWM7WUFDZEMsTUFBTTtnQkFBQ0wsV0FBV00sUUFBUTthQUFHO1FBQy9CLEdBQ0E7WUFDRUMsU0FBUyxDQUFDQztnQkFDUnRCLGlEQUFLQSxDQUFDdUIsS0FBSyxDQUFDLEdBQVcsT0FBUkQsRUFBRUUsS0FBSyxHQUFJO29CQUN4QkMsVUFBVTtnQkFDWjtnQkFDQUMsUUFBUUMsS0FBSyxDQUFDTCxFQUFFTSxJQUFJLEVBQUVOLEVBQUVFLEtBQUs7WUFDL0I7UUFDRjtJQUVKLEdBQ0EsRUFBRTtJQUdKLHFCQUNFLDhEQUFDSztRQUFLQyxXQUFVO1FBQTZCdEIsVUFBVUE7OzBCQUNyRCw4REFBQ3VCO2dCQUFHRCxXQUFVOzBCQUFrQzs7Ozs7OzBCQUVoRCw4REFBQ0U7Z0JBQU9GLFdBQVU7Z0JBQWFHLE1BQUs7MEJBQ2xDLDRFQUFDRjtvQkFBR0QsV0FBVTs7d0JBQW9CO3NDQUMvQiw4REFBQ0k7NEJBQUtKLFdBQVU7c0NBQVk7Ozs7Ozt3QkFBeUI7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNLOztvQkFDRTtrQ0FDRCw4REFBQ0M7d0JBQU1DLGNBQWE7d0JBQUdULE1BQUs7d0JBQWFVLFFBQVE7d0JBQUNMLE1BQUs7Ozs7OztvQkFDdEQ7Ozs7Ozs7MEJBR0gsOERBQUNNOzs7OzswQkFDRCw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDeEMsK0NBQU1BO2tDQUFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0dBckR3QkY7O1FBQ21CTCxtREFBZ0JBOzs7S0FEbkNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RheVR3by50c3g/ODdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlV3JpdGVDb250cmFjdCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5pbXBvcnQgVHhIYXNoIGZyb20gXCIuL1R4SGFzaFwiO1xuaW1wb3J0IHsgY29udHJhY3RfYWJpLCBjb250cmFjdF9hZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERheVR3bygpIHtcbiAgY29uc3QgeyBkYXRhOiB0eF9oYXNoLCB3cml0ZUNvbnRyYWN0IH0gPSB1c2VXcml0ZUNvbnRyYWN0KCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjazxGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4+KFxuICAgIGFzeW5jIChldikgPT4ge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKGV2LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY29uc3Qgc2VjcmV0Q29kZSA9IGZvcm1fZGF0YS5nZXQoXCJzZWNyZXRDb2RlXCIpO1xuICAgICAgaWYgKCFzZWNyZXRDb2RlKSByZXR1cm47XG5cbiAgICAgIHdyaXRlQ29udHJhY3QoXG4gICAgICAgIHtcbiAgICAgICAgICBhYmk6IGNvbnRyYWN0X2FiaSxcbiAgICAgICAgICBhZGRyZXNzOiBjb250cmFjdF9hZGRyZXNzLFxuICAgICAgICAgIGZ1bmN0aW9uTmFtZTogXCJzdWJtaXREYXlUd29cIixcbiAgICAgICAgICBhcmdzOiBbc2VjcmV0Q29kZS50b1N0cmluZygpXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9uRXJyb3I6IChlKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtlLmNhdXNlfWAsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoZS5uYW1lLCBlLmNhdXNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTAuNSBteS0xXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1ibHVlLTEwMCBteS0zXCI+RGF5IFR3bzwvaDI+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgKDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ub1wiPlN1Ym1pdCBTZWNyZXQgQ29kZTwvc3Bhbj4pXG4gICAgICAgIDwvaDI+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAge1wiU2VjcmV0IENvZGU6IFwifVxuICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPVwiXCIgbmFtZT1cInNlY3JldENvZGVcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIHtcImNhcCBsb2Nrc1wifVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGhyIC8+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGhlYWRlcj5UcmFuc2FjdGlvbiBIYXNoOjwvaGVhZGVyPlxuICAgICAgICA8VHhIYXNoPnt0eF9oYXNofTwvVHhIYXNoPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVdyaXRlQ29udHJhY3QiLCJ0b2FzdCIsIlR4SGFzaCIsImNvbnRyYWN0X2FiaSIsImNvbnRyYWN0X2FkZHJlc3MiLCJEYXlUd28iLCJkYXRhIiwidHhfaGFzaCIsIndyaXRlQ29udHJhY3QiLCJvblN1Ym1pdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJzZWNyZXRDb2RlIiwiZ2V0IiwiYWJpIiwiYWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJ0b1N0cmluZyIsIm9uRXJyb3IiLCJlIiwiZXJyb3IiLCJjYXVzZSIsInBvc2l0aW9uIiwiY29uc29sZSIsInRhYmxlIiwibmFtZSIsImZvcm0iLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsInR5cGUiLCJzcGFuIiwibGFiZWwiLCJpbnB1dCIsImRlZmF1bHRWYWx1ZSIsInJlcXVpcmVkIiwiaHIiLCJzZWN0aW9uIiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DayTwo.tsx\n"));

/***/ })

});