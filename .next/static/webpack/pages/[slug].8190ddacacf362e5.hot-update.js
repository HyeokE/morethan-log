"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/containers/PostDetail/index.tsx":
/*!*********************************************!*\
  !*** ./src/containers/PostDetail/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notion-x */ \"./node_modules/react-notion-x/build/esm/index.js\");\n/* harmony import */ var _containers_PostDetail_components_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @containers/PostDetail/components/CommentBox */ \"./src/containers/PostDetail/components/CommentBox.tsx\");\n/* harmony import */ var _components_PostFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PostFooter */ \"./src/containers/PostDetail/components/PostFooter.tsx\");\n/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PostHeader */ \"./src/containers/PostDetail/components/PostHeader.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar mapPageUrl = function(id) {\n    return \"https://www.notion.so/\" + id.replace(/-/g, \"\");\n};\nvar PostDetail = function(param) {\n    var blockMap = param.blockMap, data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"m-auto max-w-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/junhyeok/react/hyeok-dev/src/containers/PostDetail/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_notion_x__WEBPACK_IMPORTED_MODULE_4__.NotionRenderer, {\n                recordMap: blockMap,\n                components: {\n                    equation: react_notion_x__WEBPACK_IMPORTED_MODULE_4__.Equation,\n                    code: react_notion_x__WEBPACK_IMPORTED_MODULE_4__.Code,\n                    collection: react_notion_x__WEBPACK_IMPORTED_MODULE_4__.Collection,\n                    collectionRow: react_notion_x__WEBPACK_IMPORTED_MODULE_4__.CollectionRow\n                },\n                mapPageUrl: mapPageUrl\n            }, void 0, false, {\n                fileName: \"/Users/junhyeok/react/hyeok-dev/src/containers/PostDetail/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFooter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/junhyeok/react/hyeok-dev/src/containers/PostDetail/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_PostDetail_components_CommentBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/junhyeok/react/hyeok-dev/src/containers/PostDetail/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/junhyeok/react/hyeok-dev/src/containers/PostDetail/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Qb3N0RGV0YWlsL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBTXdCO0FBQzhDO0FBQ3pCO0FBQ0k7QUFHakQsSUFBTVEsVUFBVSxHQUFHLFNBQUNDLEVBQVUsRUFBSztJQUNqQyxPQUFPLHdCQUF3QixHQUFHQSxFQUFFLENBQUNDLE9BQU8sT0FBTyxFQUFFLENBQUMsQ0FBQztDQUN4RDtBQU9ELElBQU1DLFVBQVUsR0FBb0IsZ0JBQXdCO1FBQXJCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBQ25ELHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxrQkFBa0I7OzBCQUNuQyw4REFBQ1IsOERBQVU7Z0JBQUNNLElBQUksRUFBRUEsSUFBSTs7Ozs7cUJBQUk7MEJBQzFCLDhEQUFDYiwwREFBYztnQkFDYmdCLFNBQVMsRUFBRUosUUFBUTtnQkFDbkJLLFVBQVUsRUFBRTtvQkFDVkMsUUFBUSxFQUFFakIsb0RBQVE7b0JBQ2xCa0IsSUFBSSxFQUFFakIsZ0RBQUk7b0JBQ1ZrQixVQUFVLEVBQUVqQixzREFBVTtvQkFDdEJrQixhQUFhLEVBQUVqQix5REFBYTtpQkFDN0I7Z0JBQ0RJLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUJBQ3RCOzBCQUVGOztrQ0FDRSw4REFBQ0YsOERBQU07Ozs7NkJBQUc7a0NBQ1YsOERBQUNELG9GQUFVO3dCQUFDUSxJQUFJLEVBQUVBLElBQUk7Ozs7OzZCQUFJOzs0QkFDekI7Ozs7OzthQUNLLENBQ1Y7Q0FDSDtBQXJCS0YsS0FBQUEsVUFBVTtBQXVCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9Qb3N0RGV0YWlsL2luZGV4LnRzeD9hNWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5vdGlvblJlbmRlcmVyLFxuICBFcXVhdGlvbixcbiAgQ29kZSxcbiAgQ29sbGVjdGlvbixcbiAgQ29sbGVjdGlvblJvdyxcbn0gZnJvbSBcInJlYWN0LW5vdGlvbi14XCI7XG5pbXBvcnQgQ29tbWVudEJveCBmcm9tIFwiQGNvbnRhaW5lcnMvUG9zdERldGFpbC9jb21wb25lbnRzL0NvbW1lbnRCb3hcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Qb3N0Rm9vdGVyXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1Bvc3RIZWFkZXJcIjtcbmltcG9ydCB7IFRQb3N0IH0gZnJvbSBcIkAvc3JjL3R5cGVzXCI7XG5cbmNvbnN0IG1hcFBhZ2VVcmwgPSAoaWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gXCJodHRwczovL3d3dy5ub3Rpb24uc28vXCIgKyBpZC5yZXBsYWNlKC8tL2csIFwiXCIpO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgYmxvY2tNYXA6IGFueTtcbiAgZGF0YTogVFBvc3Q7XG59O1xuXG5jb25zdCBQb3N0RGV0YWlsOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBibG9ja01hcCwgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibS1hdXRvIG1heC13LTJ4bFwiPlxuICAgICAgPFBvc3RIZWFkZXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDxOb3Rpb25SZW5kZXJlclxuICAgICAgICByZWNvcmRNYXA9e2Jsb2NrTWFwfVxuICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgZXF1YXRpb246IEVxdWF0aW9uLFxuICAgICAgICAgIGNvZGU6IENvZGUsXG4gICAgICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbixcbiAgICAgICAgICBjb2xsZWN0aW9uUm93OiBDb2xsZWN0aW9uUm93LFxuICAgICAgICB9fVxuICAgICAgICBtYXBQYWdlVXJsPXttYXBQYWdlVXJsfVxuICAgICAgLz5cblxuICAgICAgPD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Q29tbWVudEJveCBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC8+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdERldGFpbDtcbiJdLCJuYW1lcyI6WyJOb3Rpb25SZW5kZXJlciIsIkVxdWF0aW9uIiwiQ29kZSIsIkNvbGxlY3Rpb24iLCJDb2xsZWN0aW9uUm93IiwiQ29tbWVudEJveCIsIkZvb3RlciIsIlBvc3RIZWFkZXIiLCJtYXBQYWdlVXJsIiwiaWQiLCJyZXBsYWNlIiwiUG9zdERldGFpbCIsImJsb2NrTWFwIiwiZGF0YSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJyZWNvcmRNYXAiLCJjb21wb25lbnRzIiwiZXF1YXRpb24iLCJjb2RlIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25Sb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/PostDetail/index.tsx\n");

/***/ })

});