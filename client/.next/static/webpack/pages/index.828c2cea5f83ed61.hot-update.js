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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ \"./node_modules/@mui/icons-material/ArrowBackIos.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import getWeb3 from \"../getWeb3\";\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function(param) {\n    var drizzle = param.drizzle, drizzleState = param.drizzleState;\n    _s();\n    var nfts = [\n        \"/nfts/robot_membership1.png\",\n        \"/nfts/robot_membership2.png\",\n        \"/nfts/robot_membership3.png\",\n        \"/nfts/robot_membership4.png\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), current = ref[0], setCurrent = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(current);\n    }, [\n        current\n    ]);\n    var switchNFT = function() {\n        setCurrent((current + 1) % nfts.length);\n    };\n    //mint&purchase membership NFT\n    var purchaseNFT = function() {\n        var _ref = _asyncToGenerator(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_current) {\n            var contract;\n            return _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return drizzle.contracts.NFT;\n                    case 2:\n                        contract = _ctx.sent;\n                        //setting gasLimit and gasPrice was crucial.\n                        contract.methods.mintRobot();\n                        contract.methods.tokenURI(_current + 1);\n                        console.log(\"robotNFT\".concat(_current + 1, \" minted\"));\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function purchaseNFT(_current) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"row\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                marginTop: \"8%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    sx: {\n                        height: \"70%\",\n                        width: \"30%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                height: \"60%\",\n                                padding: 0,\n                                margin: 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n                                component: \"img\",\n                                image: nfts[current],\n                                title: \"robotNFT\",\n                                sx: {\n                                    height: \"100%\",\n                                    margin: 0\n                                },\n                                alt: \"robotNFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        fontSize: 30\n                                    },\n                                    children: \"ROBOT NFT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        marginTop: 2\n                                    },\n                                    children: \"Choose your RobotNFT and join our community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                marginTop: 3,\n                                marginBottom: 3\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                color: \"primary\",\n                                sx: {\n                                    padding: 2,\n                                    width: 150,\n                                    fontSize: 15,\n                                    fontWeight: \"bold\"\n                                },\n                                onClick: function() {\n                                    return purchaseNFT(current);\n                                },\n                                children: \"PURCHASE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRSxRQUFRO3dCQUFGakIsTUFBTSxDQUFOQSxTQUFTOzswR0FDN0NULDJFQUFtQjt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzRCQUFDUSxRQUFRLEVBQUUsRUFBRTt3QkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25ELENBQUM7R0F2RksxQixLQUFLO0tBQUxBLEtBQUs7QUF5RlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZE1lZGlhLFxuICBUeXBvZ3JhcGh5LFxuICBCdXR0b24sXG4gIENhcmRBY3Rpb25BcmVhLFxuICBDYXJkQWN0aW9ucyxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja0lvc1wiO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zXCI7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQyA9ICh7IGRyaXp6bGUsIGRyaXp6bGVTdGF0ZSB9OiBhbnkpID0+IHtcbiAgY29uc3QgbmZ0cyA9IFtcbiAgICBcIi9uZnRzL3JvYm90X21lbWJlcnNoaXAxLnBuZ1wiLFxuICAgIFwiL25mdHMvcm9ib3RfbWVtYmVyc2hpcDIucG5nXCIsXG4gICAgXCIvbmZ0cy9yb2JvdF9tZW1iZXJzaGlwMy5wbmdcIixcbiAgICBcIi9uZnRzL3JvYm90X21lbWJlcnNoaXA0LnBuZ1wiLFxuICBdO1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICB9LCBbY3VycmVudF0pO1xuXG4gIGNvbnN0IHN3aXRjaE5GVCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50KChjdXJyZW50ICsgMSkgJSBuZnRzLmxlbmd0aCk7XG4gIH07XG5cbiAgLy9taW50JnB1cmNoYXNlIG1lbWJlcnNoaXAgTkZUXG4gIGNvbnN0IHB1cmNoYXNlTkZUID0gYXN5bmMgKF9jdXJyZW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGRyaXp6bGUuY29udHJhY3RzLk5GVDtcblxuICAgIC8vc2V0dGluZyBnYXNMaW1pdCBhbmQgZ2FzUHJpY2Ugd2FzIGNydWNpYWwuXG4gICAgY29udHJhY3QubWV0aG9kcy5taW50Um9ib3QoKTtcbiAgICBjb250cmFjdC5tZXRob2RzLnRva2VuVVJJKF9jdXJyZW50ICsgMSk7XG4gICAgY29uc29sZS5sb2coYHJvYm90TkZUJHtfY3VycmVudCArIDF9IG1pbnRlZGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfX0+XG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCI4JVwiLFxuICAgICAgICB9fT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hORlQoKX0+XG4gICAgICAgICAgPEFycm93QmFja0lvc0ljb24gc3g9e3sgZm9udFNpemU6IDUwIH19IC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6IFwiNzAlXCIsIHdpZHRoOiBcIjMwJVwiIH19PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBoZWlnaHQ6IFwiNjAlXCIsIHBhZGRpbmc6IDAsIG1hcmdpbjogMCB9fT5cbiAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgaW1hZ2U9e25mdHNbY3VycmVudF19XG4gICAgICAgICAgICAgIHRpdGxlPVwicm9ib3RORlRcIlxuICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46IDAgfX1cbiAgICAgICAgICAgICAgYWx0PVwicm9ib3RORlRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGZvbnRTaXplOiAzMCB9fT5cbiAgICAgICAgICAgICAgUk9CT1QgTkZUXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDIgfX0+XG4gICAgICAgICAgICAgIENob29zZSB5b3VyIFJvYm90TkZUIGFuZCBqb2luIG91ciBjb21tdW5pdHkhXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDMsIG1hcmdpbkJvdHRvbTogMyB9fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmc6IDIsIHdpZHRoOiAxNTAsIGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHVyY2hhc2VORlQoY3VycmVudCl9PlxuICAgICAgICAgICAgICBQVVJDSEFTRVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaE5GVCgpfT5cbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbiBzeD17eyBmb250U2l6ZTogNTAgfX0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJDYXJkIiwiQ29udGFpbmVyIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiQ2FyZEFjdGlvbnMiLCJBcnJvd0JhY2tJb3NJY29uIiwiQXJyb3dGb3J3YXJkSW9zSWNvbiIsIkluZGV4IiwiZHJpenpsZSIsImRyaXp6bGVTdGF0ZSIsIm5mdHMiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJzd2l0Y2hORlQiLCJsZW5ndGgiLCJwdXJjaGFzZU5GVCIsIl9jdXJyZW50IiwiY29udHJhY3QiLCJjb250cmFjdHMiLCJORlQiLCJtZXRob2RzIiwibWludFJvYm90IiwidG9rZW5VUkkiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwiY29sb3IiLCJvbkNsaWNrIiwiZm9udFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJjb21wb25lbnQiLCJpbWFnZSIsInRpdGxlIiwiYWx0IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});