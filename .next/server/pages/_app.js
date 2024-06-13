/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./public/kaikas.png":
/*!***************************!*\
  !*** ./public/kaikas.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/kaikas.449fe7cc.png\",\"height\":156,\"width\":168,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkaikas.449fe7cc.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":7});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMva2Fpa2FzLnBuZyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQyxnTUFBZ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmJvYXJkLWFwcC8uL3B1YmxpYy9rYWlrYXMucG5nPzhkODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL2thaWthcy40NDlmZTdjYy5wbmdcIixcImhlaWdodFwiOjE1NixcIndpZHRoXCI6MTY4LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRmthaWthcy40NDlmZTdjYy5wbmcmdz04JnE9NzBcIixcImJsdXJXaWR0aFwiOjgsXCJibHVySGVpZ2h0XCI6N307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/kaikas.png\n");

/***/ }),

/***/ "./src/contexts/Web3ModalProvider.tsx":
/*!********************************************!*\
  !*** ./src/contexts/Web3ModalProvider.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Web3ModalProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"@web3modal/wagmi/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors */ \"wagmi/connectors\");\n/* harmony import */ var _public_kaikas_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/kaikas.png */ \"./public/kaikas.png\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_5__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst kaikas_connector = (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_5__.injected)({\n    target: {\n        id: \"kaikas\",\n        name: \"Kaikas\",\n        icon: _public_kaikas_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n        provider (window) {\n            return window?.klaytn;\n        }\n    },\n    shimDisconnect: true\n});\nfunction WagmiConfig() {\n    const chain_id = \"1001\";\n    let chain;\n    let transports = {};\n    if (chain_id === \"1001\") {\n        chain = wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.klaytnBaobab;\n        transports[1001] = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.http)();\n    } else {\n        chain = wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.klaytn;\n        transports[8217] = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.http)();\n    }\n    const wagmi_config = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({\n        chains: [\n            chain\n        ],\n        connectors: [\n            kaikas_connector\n        ],\n        storage: (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createStorage)({\n            storage: wagmi__WEBPACK_IMPORTED_MODULE_3__.cookieStorage\n        }),\n        transports\n    });\n    return wagmi_config;\n}\nconst wagmi_config = WagmiConfig();\nconst projectId = \"a1245421389b6b8295e896a110913f46\";\n(0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__.createWeb3Modal)({\n    wagmiConfig: wagmi_config,\n    projectId,\n    allWallets: \"HIDE\"\n});\nconst query_client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction Web3ModalProvider({ children, initialState }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiProvider, {\n        config: wagmi_config,\n        initialState: initialState,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n            client: query_client,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/contexts/Web3ModalProvider.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/contexts/Web3ModalProvider.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvV2ViM01vZGFsUHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDaEI7QUFHc0M7QUFDM0M7QUFDUjtBQUVLO0FBRWpELE1BQU1ZLG1CQUFtQkYsMERBQVFBLENBQUM7SUFDaENHLFFBQVE7UUFDTkMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU1MLDhEQUFjO1FBQ3BCTyxVQUFTQyxNQUFNO1lBQ2IsT0FBUUEsUUFBZ0JYO1FBQzFCO0lBQ0Y7SUFDQVksZ0JBQWdCO0FBQ2xCO0FBRUEsU0FBU0M7SUFDUCxNQUFNQyxXQUFXQyxNQUFnQztJQUNqRCxJQUFJRztJQUNKLElBQUlDLGFBQWEsQ0FBQztJQUNsQixJQUFJTCxhQUFhLFFBQVE7UUFDdkJJLFFBQVFqQixzREFBWUE7UUFDcEJrQixVQUFVLENBQUMsS0FBSyxHQUFHcEIsMkNBQUlBO0lBQ3pCLE9BQU87UUFDTG1CLFFBQVFsQixnREFBTUE7UUFDZG1CLFVBQVUsQ0FBQyxLQUFLLEdBQUdwQiwyQ0FBSUE7SUFDekI7SUFDQSxNQUFNcUIsZUFBZXZCLG1EQUFZQSxDQUFDO1FBQ2hDd0IsUUFBUTtZQUFDSDtTQUFNO1FBQ2ZJLFlBQVk7WUFBQ2xCO1NBQWlCO1FBQzlCbUIsU0FBU3pCLG9EQUFhQSxDQUFDO1lBQ3JCeUIsU0FBUzNCLGdEQUFhQTtRQUN4QjtRQUNBdUI7SUFDRjtJQUNBLE9BQU9DO0FBQ1Q7QUFDQSxNQUFNQSxlQUFlUDtBQUVyQixNQUFNVyxZQUFZVCxrQ0FBa0M7QUFDcERyQix1RUFBZUEsQ0FBQztJQUNkZ0MsYUFBYU47SUFDYkk7SUFDQUcsWUFBWTtBQUNkO0FBRUEsTUFBTUMsZUFBZSxJQUFJcEMsOERBQVdBO0FBRXJCLFNBQVNxQyxrQkFBa0IsRUFDeENDLFFBQVEsRUFDUkMsWUFBWSxFQUdaO0lBQ0EscUJBQ0UsOERBQUNwQyxnREFBYUE7UUFBQ3FDLFFBQVFaO1FBQWNXLGNBQWNBO2tCQUNqRCw0RUFBQ3RDLHNFQUFtQkE7WUFBQ3dDLFFBQVFMO3NCQUFlRTs7Ozs7Ozs7Ozs7QUFHbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmJvYXJkLWFwcC8uL3NyYy9jb250ZXh0cy9XZWIzTW9kYWxQcm92aWRlci50c3g/OGE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVdlYjNNb2RhbCB9IGZyb20gXCJAd2ViM21vZGFsL3dhZ21pL3JlYWN0XCI7XG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSHR0cFRyYW5zcG9ydCB9IGZyb20gXCJ2aWVtXCI7XG5pbXBvcnQgeyBTdGF0ZSwgV2FnbWlQcm92aWRlciwgY29va2llU3RvcmFnZSwgY3JlYXRlQ29uZmlnLCBjcmVhdGVTdG9yYWdlLCBodHRwIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBrbGF5dG4sIGtsYXl0bkJhb2JhYiB9IGZyb20gXCJ3YWdtaS9jaGFpbnNcIjtcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnNcIjtcblxuaW1wb3J0IGthaWthc19wbmcgZnJvbSBcIi4uLy4uL3B1YmxpYy9rYWlrYXMucG5nXCI7XG5cbmNvbnN0IGthaWthc19jb25uZWN0b3IgPSBpbmplY3RlZCh7XG4gIHRhcmdldDoge1xuICAgIGlkOiBcImthaWthc1wiLFxuICAgIG5hbWU6IFwiS2Fpa2FzXCIsXG4gICAgaWNvbjoga2Fpa2FzX3BuZy5zcmMsXG4gICAgcHJvdmlkZXIod2luZG93KSB7XG4gICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpPy5rbGF5dG47XG4gICAgfSxcbiAgfSxcbiAgc2hpbURpc2Nvbm5lY3Q6IHRydWUsXG59KTtcblxuZnVuY3Rpb24gV2FnbWlDb25maWcoKSB7XG4gIGNvbnN0IGNoYWluX2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQ7XG4gIGxldCBjaGFpbjtcbiAgbGV0IHRyYW5zcG9ydHMgPSB7fSBhcyBSZWNvcmQ8MTAwMSB8IDgyMTcsIEh0dHBUcmFuc3BvcnQ+O1xuICBpZiAoY2hhaW5faWQgPT09IFwiMTAwMVwiKSB7XG4gICAgY2hhaW4gPSBrbGF5dG5CYW9iYWI7XG4gICAgdHJhbnNwb3J0c1sxMDAxXSA9IGh0dHAoKTtcbiAgfSBlbHNlIHtcbiAgICBjaGFpbiA9IGtsYXl0bjtcbiAgICB0cmFuc3BvcnRzWzgyMTddID0gaHR0cCgpO1xuICB9XG4gIGNvbnN0IHdhZ21pX2NvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gICAgY2hhaW5zOiBbY2hhaW5dLFxuICAgIGNvbm5lY3RvcnM6IFtrYWlrYXNfY29ubmVjdG9yXSxcbiAgICBzdG9yYWdlOiBjcmVhdGVTdG9yYWdlKHtcbiAgICAgIHN0b3JhZ2U6IGNvb2tpZVN0b3JhZ2UsXG4gICAgfSksXG4gICAgdHJhbnNwb3J0cyxcbiAgfSk7XG4gIHJldHVybiB3YWdtaV9jb25maWc7XG59XG5jb25zdCB3YWdtaV9jb25maWcgPSBXYWdtaUNvbmZpZygpO1xuXG5jb25zdCBwcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEITtcbmNyZWF0ZVdlYjNNb2RhbCh7XG4gIHdhZ21pQ29uZmlnOiB3YWdtaV9jb25maWcsXG4gIHByb2plY3RJZCxcbiAgYWxsV2FsbGV0czogXCJISURFXCIsXG59KTtcblxuY29uc3QgcXVlcnlfY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYjNNb2RhbFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIGluaXRpYWxTdGF0ZSxcbn06IFByb3BzV2l0aENoaWxkcmVuPHtcbiAgaW5pdGlhbFN0YXRlPzogU3RhdGU7XG59Pikge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaVByb3ZpZGVyIGNvbmZpZz17d2FnbWlfY29uZmlnfSBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX0+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5X2NsaWVudH0+e2NoaWxkcmVufTwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiY3JlYXRlV2ViM01vZGFsIiwiV2FnbWlQcm92aWRlciIsImNvb2tpZVN0b3JhZ2UiLCJjcmVhdGVDb25maWciLCJjcmVhdGVTdG9yYWdlIiwiaHR0cCIsImtsYXl0biIsImtsYXl0bkJhb2JhYiIsImluamVjdGVkIiwia2Fpa2FzX3BuZyIsImthaWthc19jb25uZWN0b3IiLCJ0YXJnZXQiLCJpZCIsIm5hbWUiLCJpY29uIiwic3JjIiwicHJvdmlkZXIiLCJ3aW5kb3ciLCJzaGltRGlzY29ubmVjdCIsIldhZ21pQ29uZmlnIiwiY2hhaW5faWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hBSU5fSUQiLCJjaGFpbiIsInRyYW5zcG9ydHMiLCJ3YWdtaV9jb25maWciLCJjaGFpbnMiLCJjb25uZWN0b3JzIiwic3RvcmFnZSIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1BST0pFQ1RfSUQiLCJ3YWdtaUNvbmZpZyIsImFsbFdhbGxldHMiLCJxdWVyeV9jbGllbnQiLCJXZWIzTW9kYWxQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwiY29uZmlnIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/Web3ModalProvider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _contexts_Web3ModalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/Web3ModalProvider */ \"./src/contexts/Web3ModalProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_Web3ModalProvider__WEBPACK_IMPORTED_MODULE_3__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_Web3ModalProvider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_Web3ModalProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oxpampam/Desktop/dev-work/React/kes-attendance-marker/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFHa0I7QUFFYTtBQUU5QyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzlELHFCQUNFLDhEQUFDSCxtRUFBaUJBOzswQkFDaEIsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNKLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFHckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmJvYXJkLWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmltcG9ydCBXZWIzTW9kYWxQcm92aWRlciBmcm9tIFwiQC9jb250ZXh0cy9XZWIzTW9kYWxQcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdlYjNNb2RhbFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyLz5cbiAgICA8L1dlYjNNb2RhbFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRvYXN0Q29udGFpbmVyIiwiV2ViM01vZGFsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@web3modal/wagmi/react":
/*!*****************************************!*\
  !*** external "@web3modal/wagmi/react" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/wagmi/react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/connectors":
/*!***********************************!*\
  !*** external "wagmi/connectors" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/connectors");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();