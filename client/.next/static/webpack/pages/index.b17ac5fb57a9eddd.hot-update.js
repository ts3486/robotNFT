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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ \"./node_modules/@mui/icons-material/ArrowBackIos.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Web3 = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\nvar web3 = new Web3(\"wss://rinkeby.infura.io/ws/v3/0f3a6fad96f04d13bbbf4654d9099af7\");\nvar nftBuild = __webpack_require__(/*! ../../build/contracts/RobotNFT.json */ \"../build/contracts/RobotNFT.json\");\nvar contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[4].address);\n// const contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[5777].address); for ganache\nvar ref = __webpack_require__(/*! ../secret.json */ \"./secret.json\"), mnemonic = ref.mnemonic, publicKey = ref.publicKey, privateKey = ref.privateKey;\nvar Index = function(param) {\n    var account = param.account;\n    _s();\n    console.log(account);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentNFT = ref1[0], setCurrent = ref1[1];\n    var nfts = [\n        \"/nfts/robot_membership1.png\",\n        \"/nfts/robot_membership2.png\",\n        \"/nfts/robot_membership3.png\",\n        \"/nfts/robot_membership4.png\", \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, []);\n    var switchNFT = function() {\n        setCurrent((currentNFT + 1) % nfts.length);\n    };\n    //mint&purchase membership NFT\n    var purchaseNFT = function() {\n        var _ref = _asyncToGenerator(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_current) {\n            var baseCost, nftType, createTransaction, createReceipt;\n            return _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(contract);\n                        _ctx.next = 3;\n                        return contract.methods.cost().call();\n                    case 3:\n                        baseCost = _ctx.sent;\n                        nftType = (currentNFT + 1).toString();\n                        _ctx.next = 7;\n                        return web3.eth.accounts.signTransaction({\n                            from: account,\n                            to: \"0x5a9F872046eE206363F91B9cd075a7bF8bd3b698\",\n                            value: baseCost,\n                            gas: 500000,\n                            data: contract.methods.mintRobot(nftType).encodeABI()\n                        }, privateKey);\n                    case 7:\n                        createTransaction = _ctx.sent;\n                        _ctx.next = 10;\n                        return web3.eth.sendSignedTransaction(createTransaction.rawTransaction);\n                    case 10:\n                        createReceipt = _ctx.sent;\n                        console.log(\"Transaction successful with hash: \".concat(createReceipt.transactionHash));\n                        console.log(\"robotNFT\".concat(_current + 1, \" minted\"));\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function purchaseNFT(_current) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"row\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                marginTop: \"8%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    sx: {\n                        height: \"70%\",\n                        width: \"30%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                height: \"60%\",\n                                padding: 0,\n                                margin: 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n                                component: \"img\",\n                                image: nfts[currentNFT],\n                                title: \"robotNFT\",\n                                sx: {\n                                    height: \"100%\",\n                                    margin: 0\n                                },\n                                alt: \"robotNFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        fontSize: 30\n                                    },\n                                    children: \"ROBOT NFT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        marginTop: 2\n                                    },\n                                    children: \"Choose your RobotNFT and join our community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                marginTop: 3,\n                                marginBottom: 3\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                color: \"primary\",\n                                sx: {\n                                    padding: 2,\n                                    width: 150,\n                                    fontSize: 15,\n                                    fontWeight: \"bold\"\n                                },\n                                onClick: function() {\n                                    return purchaseNFT(currentNFT);\n                                },\n                                children: \"PURCHASE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs0QkFBQ1EsUUFBUSxFQUFFLEVBQUU7d0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRCxDQUFDO0dBM0dLdkMsS0FBSztLQUFMQSxLQUFLO0FBNkdYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ29udGFpbmVyLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBUeXBvZ3JhcGh5LCBCdXR0b24sIENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja0lvc1wiO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zXCI7XG5jb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIik7XG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoXCJ3c3M6Ly9yaW5rZWJ5LmluZnVyYS5pby93cy92My8wZjNhNmZhZDk2ZjA0ZDEzYmJiZjQ2NTRkOTA5OWFmN1wiKTtcbmNvbnN0IG5mdEJ1aWxkID0gcmVxdWlyZShcIi4uLy4uL2J1aWxkL2NvbnRyYWN0cy9Sb2JvdE5GVC5qc29uXCIpO1xuY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QobmZ0QnVpbGQuYWJpLCBuZnRCdWlsZC5uZXR3b3Jrc1s0XS5hZGRyZXNzKTtcbi8vIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KG5mdEJ1aWxkLmFiaSwgbmZ0QnVpbGQubmV0d29ya3NbNTc3N10uYWRkcmVzcyk7IGZvciBnYW5hY2hlXG5jb25zdCB7IG1uZW1vbmljLCBwdWJsaWNLZXksIHByaXZhdGVLZXkgfSA9IHJlcXVpcmUoXCIuLi9zZWNyZXQuanNvblwiKTtcblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKHsgYWNjb3VudCB9OiBhbnkpID0+IHtcbiAgY29uc29sZS5sb2coYWNjb3VudCk7XG5cbiAgY29uc3QgW2N1cnJlbnRORlQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgbmZ0cyA9IFtcbiAgICBcIi9uZnRzL3JvYm90X21lbWJlcnNoaXAxLnBuZ1wiLFxuICAgIFwiL25mdHMvcm9ib3RfbWVtYmVyc2hpcDIucG5nXCIsXG4gICAgXCIvbmZ0cy9yb2JvdF9tZW1iZXJzaGlwMy5wbmdcIixcbiAgICBcIi9uZnRzL3JvYm90X21lbWJlcnNoaXA0LnBuZ1wiLFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG4gIGNvbnN0IHN3aXRjaE5GVCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50KChjdXJyZW50TkZUICsgMSkgJSBuZnRzLmxlbmd0aCk7XG4gIH07XG5cbiAgLy9taW50JnB1cmNoYXNlIG1lbWJlcnNoaXAgTkZUXG4gIGNvbnN0IHB1cmNoYXNlTkZUID0gYXN5bmMgKF9jdXJyZW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XG4gICAgY29uc3QgYmFzZUNvc3QgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNvc3QoKS5jYWxsKCk7XG4gICAgLy8gY29uc3Qgbm9uY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvbkNvdW50KClcblxuICAgIGxldCBuZnRUeXBlID0gKGN1cnJlbnRORlQgKyAxKS50b1N0cmluZygpO1xuXG4gICAgY29uc3QgY3JlYXRlVHJhbnNhY3Rpb24gPSBhd2FpdCB3ZWIzLmV0aC5hY2NvdW50cy5zaWduVHJhbnNhY3Rpb24oXG4gICAgICB7XG4gICAgICAgIGZyb206IGFjY291bnQsXG4gICAgICAgIHRvOiBcIjB4NWE5Rjg3MjA0NmVFMjA2MzYzRjkxQjljZDA3NWE3YkY4YmQzYjY5OFwiLFxuICAgICAgICB2YWx1ZTogYmFzZUNvc3QsXG4gICAgICAgIGdhczogNTAwMDAwLFxuICAgICAgICBkYXRhOiBjb250cmFjdC5tZXRob2RzLm1pbnRSb2JvdChuZnRUeXBlKS5lbmNvZGVBQkkoKSxcbiAgICAgIH0sXG4gICAgICBwcml2YXRlS2V5XG4gICAgKTtcblxuICAgIC8vV2FudCB0byBhZGQgbG9hZGluZyBkaXNwbGF5XG4gICAgLy8gd2ViMy5ldGgucGVuZGluZ1RyYW5zYWN0aW9uc1xuXG4gICAgY29uc3QgY3JlYXRlUmVjZWlwdCA9IGF3YWl0IHdlYjMuZXRoLnNlbmRTaWduZWRUcmFuc2FjdGlvbihjcmVhdGVUcmFuc2FjdGlvbi5yYXdUcmFuc2FjdGlvbik7XG5cbiAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bCB3aXRoIGhhc2g6ICR7Y3JlYXRlUmVjZWlwdC50cmFuc2FjdGlvbkhhc2h9YCk7XG5cbiAgICBjb25zb2xlLmxvZyhgcm9ib3RORlQke19jdXJyZW50ICsgMX0gbWludGVkYCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjglXCIsXG4gICAgICAgIH19PlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaE5GVCgpfT5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiBzeD17eyBmb250U2l6ZTogNTAgfX0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCI3MCVcIiwgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IGhlaWdodDogXCI2MCVcIiwgcGFkZGluZzogMCwgbWFyZ2luOiAwIH19PlxuICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICBpbWFnZT17bmZ0c1tjdXJyZW50TkZUXX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJyb2JvdE5GVFwiXG4gICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogXCIxMDAlXCIsIG1hcmdpbjogMCB9fVxuICAgICAgICAgICAgICBhbHQ9XCJyb2JvdE5GVFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZm9udFNpemU6IDMwIH19PlxuICAgICAgICAgICAgICBST0JPVCBORlRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMiB9fT5cbiAgICAgICAgICAgICAgQ2hvb3NlIHlvdXIgUm9ib3RORlQgYW5kIGpvaW4gb3VyIGNvbW11bml0eSFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMywgbWFyZ2luQm90dG9tOiAzIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZzogMiwgd2lkdGg6IDE1MCwgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXJjaGFzZU5GVChjdXJyZW50TkZUKX0+XG4gICAgICAgICAgICAgIFBVUkNIQVNFXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc3dpdGNoTkZUKCl9PlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uIHN4PXt7IGZvbnRTaXplOiA1MCB9fSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkNhcmQiLCJDb250YWluZXIiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJDYXJkQWN0aW9ucyIsIkFycm93QmFja0lvc0ljb24iLCJBcnJvd0ZvcndhcmRJb3NJY29uIiwiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwibmZ0QnVpbGQiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIiwibmV0d29ya3MiLCJhZGRyZXNzIiwibW5lbW9uaWMiLCJwdWJsaWNLZXkiLCJwcml2YXRlS2V5IiwiSW5kZXgiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRORlQiLCJzZXRDdXJyZW50IiwibmZ0cyIsInN3aXRjaE5GVCIsImxlbmd0aCIsInB1cmNoYXNlTkZUIiwiX2N1cnJlbnQiLCJiYXNlQ29zdCIsIm5mdFR5cGUiLCJjcmVhdGVUcmFuc2FjdGlvbiIsImNyZWF0ZVJlY2VpcHQiLCJtZXRob2RzIiwiY29zdCIsImNhbGwiLCJ0b1N0cmluZyIsImFjY291bnRzIiwic2lnblRyYW5zYWN0aW9uIiwiZnJvbSIsInRvIiwidmFsdWUiLCJnYXMiLCJkYXRhIiwibWludFJvYm90IiwiZW5jb2RlQUJJIiwic2VuZFNpZ25lZFRyYW5zYWN0aW9uIiwicmF3VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbkhhc2giLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwiY29sb3IiLCJvbkNsaWNrIiwiZm9udFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJjb21wb25lbnQiLCJpbWFnZSIsInRpdGxlIiwiYWx0IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});