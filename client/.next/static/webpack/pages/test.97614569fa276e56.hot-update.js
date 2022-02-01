"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ \"./node_modules/@mui/icons-material/ArrowBackIos.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Web3 = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\nvar web3 = new Web3(\"http://127.0.0.1:7545\");\nvar nftBuild = __webpack_require__(/*! ../../build/contracts/RobotNFT.json */ \"../build/contracts/RobotNFT.json\");\nvar contract = new web3.eth.Contract(nftBuild.abi, nftBuild.networks[5777].address);\nvar ref = __webpack_require__(/*! ../secret.json */ \"./secret.json\"), mnemonic = ref.mnemonic, privateKey = ref.privateKey;\nvar Index = function(param) {\n    var account = param.account;\n    _s();\n    console.log(account);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentNFT = ref1[0], setCurrent = ref1[1];\n    var nfts = [\n        \"/nfts/robot_membership1.png\",\n        \"/nfts/robot_membership2.png\",\n        \"/nfts/robot_membership3.png\",\n        \"/nfts/robot_membership4.png\", \n    ];\n    //   useEffect(() => {}, []);\n    var switchNFT = function() {\n        setCurrent((currentNFT + 1) % nfts.length);\n    };\n    //mint&purchase membership NFT\n    var purchaseNFT = function() {\n        var _ref = _asyncToGenerator(_Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_current) {\n            var cost, nftType, tx, signPromise;\n            return _Users_Tao_S_Desktop_blockchain_RobotNFT_source_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(contract);\n                        _ctx.next = 3;\n                        return contract.methods.cost().call();\n                    case 3:\n                        cost = _ctx.sent;\n                        nftType = (currentNFT + 1).toString();\n                        tx = {\n                            from: account,\n                            to: \"0x5a9F872046eE206363F91B9cd075a7bF8bd3b698\",\n                            // nonce: nonce,\n                            gas: 500000,\n                            data: contract.methods.mintRobot(nftType)\n                        };\n                        signPromise = web3.eth.accounts.signTransaction(tx, mnemonic);\n                        signPromise.then(function(signedTx) {\n                            web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {\n                                if (!err) {\n                                    console.log(\"The hash of your transaction is: \", hash, \"\\nCheck Alchemy's Mempool to view the status of your transaction!\");\n                                } else {\n                                    console.log(\"Something went wrong when submitting your transaction:\", err);\n                                }\n                            });\n                        });\n                        //standard web3 method\n                        // await contract.methods.mintRobot(nftType).send({\n                        //   from: account,\n                        //   value: cost,\n                        //   gas: 450000,\n                        // });\n                        console.log(\"robotNFT\".concat(_current + 1, \" minted\"));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function purchaseNFT(_current) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"row\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                marginTop: \"8%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    sx: {\n                        height: \"70%\",\n                        width: \"30%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                height: \"60%\",\n                                padding: 0,\n                                margin: 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {\n                                component: \"img\",\n                                image: nfts[currentNFT],\n                                title: \"robotNFT\",\n                                sx: {\n                                    height: \"100%\",\n                                    margin: 0\n                                },\n                                alt: \"robotNFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        fontSize: 30\n                                    },\n                                    children: \"ROBOT NFT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    sx: {\n                                        display: \"flex\",\n                                        justifyContent: \"center\",\n                                        marginTop: 2\n                                    },\n                                    children: \"Choose your RobotNFT and join our community!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                marginTop: 3,\n                                marginBottom: 3\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                color: \"primary\",\n                                sx: {\n                                    padding: 2,\n                                    width: 150,\n                                    fontSize: 15,\n                                    fontWeight: \"bold\"\n                                },\n                                onClick: function() {\n                                    return purchaseNFT(currentNFT);\n                                },\n                                children: \"PURCHASE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: \"primary\",\n                    onClick: function() {\n                        return switchNFT();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            fontSize: 50\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/test.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTtvQ0FBRjdCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDTCxVQUFVOzswQ0FBRyxDQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR0hwQixpREFBTTtvQkFBQ3FELEtBQUssRUFBQyxDQUFTO29CQUFDQyxPQUFPLEVBQUUsUUFBUTt3QkFBRi9CLE1BQU0sQ0FBTkEsU0FBUzs7MEdBQzdDcEIsMkVBQW1CO3dCQUFDNEMsRUFBRSxFQUFFLENBQUM7NEJBQUNRLFFBQVEsRUFBRSxFQUFFO3dCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkQsQ0FBQztHQXRIS3ZDLEtBQUs7S0FBTEEsS0FBSztBQXdIWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QudHN4PzdhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ29udGFpbmVyLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBUeXBvZ3JhcGh5LCBCdXR0b24sIENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja0lvc1wiO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkSW9zXCI7XG5jb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIik7XG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoXCJodHRwOi8vMTI3LjAuMC4xOjc1NDVcIik7XG5jb25zdCBuZnRCdWlsZCA9IHJlcXVpcmUoXCIuLi8uLi9idWlsZC9jb250cmFjdHMvUm9ib3RORlQuanNvblwiKTtcbmNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KG5mdEJ1aWxkLmFiaSwgbmZ0QnVpbGQubmV0d29ya3NbNTc3N10uYWRkcmVzcyk7XG5jb25zdCB7IG1uZW1vbmljLCBwcml2YXRlS2V5IH0gPSByZXF1aXJlKFwiLi4vc2VjcmV0Lmpzb25cIik7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQyA9ICh7IGFjY291bnQgfTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGFjY291bnQpO1xuXG4gIGNvbnN0IFtjdXJyZW50TkZULCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG5mdHMgPSBbXG4gICAgXCIvbmZ0cy9yb2JvdF9tZW1iZXJzaGlwMS5wbmdcIixcbiAgICBcIi9uZnRzL3JvYm90X21lbWJlcnNoaXAyLnBuZ1wiLFxuICAgIFwiL25mdHMvcm9ib3RfbWVtYmVyc2hpcDMucG5nXCIsXG4gICAgXCIvbmZ0cy9yb2JvdF9tZW1iZXJzaGlwNC5wbmdcIixcbiAgXTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG4gIGNvbnN0IHN3aXRjaE5GVCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50KChjdXJyZW50TkZUICsgMSkgJSBuZnRzLmxlbmd0aCk7XG4gIH07XG5cbiAgLy9taW50JnB1cmNoYXNlIG1lbWJlcnNoaXAgTkZUXG4gIGNvbnN0IHB1cmNoYXNlTkZUID0gYXN5bmMgKF9jdXJyZW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XG4gICAgbGV0IGNvc3QgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNvc3QoKS5jYWxsKCk7XG5cbiAgICBsZXQgbmZ0VHlwZSA9IChjdXJyZW50TkZUICsgMSkudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IHR4ID0ge1xuICAgICAgZnJvbTogYWNjb3VudCxcbiAgICAgIHRvOiBcIjB4NWE5Rjg3MjA0NmVFMjA2MzYzRjkxQjljZDA3NWE3YkY4YmQzYjY5OFwiLFxuICAgICAgLy8gbm9uY2U6IG5vbmNlLFxuICAgICAgZ2FzOiA1MDAwMDAsXG4gICAgICBkYXRhOiBjb250cmFjdC5tZXRob2RzLm1pbnRSb2JvdChuZnRUeXBlKSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnblByb21pc2UgPSB3ZWIzLmV0aC5hY2NvdW50cy5zaWduVHJhbnNhY3Rpb24odHgsIG1uZW1vbmljKTtcbiAgICBzaWduUHJvbWlzZS50aGVuKChzaWduZWRUeDogYW55KSA9PiB7XG4gICAgICB3ZWIzLmV0aC5zZW5kU2lnbmVkVHJhbnNhY3Rpb24oc2lnbmVkVHgucmF3VHJhbnNhY3Rpb24sIGZ1bmN0aW9uIChlcnI6IGFueSwgaGFzaDogYW55KSB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlRoZSBoYXNoIG9mIHlvdXIgdHJhbnNhY3Rpb24gaXM6IFwiLFxuICAgICAgICAgICAgaGFzaCxcbiAgICAgICAgICAgIFwiXFxuQ2hlY2sgQWxjaGVteSdzIE1lbXBvb2wgdG8gdmlldyB0aGUgc3RhdHVzIG9mIHlvdXIgdHJhbnNhY3Rpb24hXCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBzdWJtaXR0aW5nIHlvdXIgdHJhbnNhY3Rpb246XCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy9zdGFuZGFyZCB3ZWIzIG1ldGhvZFxuICAgIC8vIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludFJvYm90KG5mdFR5cGUpLnNlbmQoe1xuICAgIC8vICAgZnJvbTogYWNjb3VudCxcbiAgICAvLyAgIHZhbHVlOiBjb3N0LFxuICAgIC8vICAgZ2FzOiA0NTAwMDAsXG4gICAgLy8gfSk7XG5cbiAgICBjb25zb2xlLmxvZyhgcm9ib3RORlQke19jdXJyZW50ICsgMX0gbWludGVkYCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjglXCIsXG4gICAgICAgIH19PlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaE5GVCgpfT5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiBzeD17eyBmb250U2l6ZTogNTAgfX0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogXCI3MCVcIiwgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IGhlaWdodDogXCI2MCVcIiwgcGFkZGluZzogMCwgbWFyZ2luOiAwIH19PlxuICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICBpbWFnZT17bmZ0c1tjdXJyZW50TkZUXX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJyb2JvdE5GVFwiXG4gICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogXCIxMDAlXCIsIG1hcmdpbjogMCB9fVxuICAgICAgICAgICAgICBhbHQ9XCJyb2JvdE5GVFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZm9udFNpemU6IDMwIH19PlxuICAgICAgICAgICAgICBST0JPVCBORlRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMiB9fT5cbiAgICAgICAgICAgICAgQ2hvb3NlIHlvdXIgUm9ib3RORlQgYW5kIGpvaW4gb3VyIGNvbW11bml0eSFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMywgbWFyZ2luQm90dG9tOiAzIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZzogMiwgd2lkdGg6IDE1MCwgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXJjaGFzZU5GVChjdXJyZW50TkZUKX0+XG4gICAgICAgICAgICAgIFBVUkNIQVNFXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc3dpdGNoTkZUKCl9PlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uIHN4PXt7IGZvbnRTaXplOiA1MCB9fSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkNhcmQiLCJDb250YWluZXIiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJDYXJkQWN0aW9ucyIsIkFycm93QmFja0lvc0ljb24iLCJBcnJvd0ZvcndhcmRJb3NJY29uIiwiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwibmZ0QnVpbGQiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIiwibmV0d29ya3MiLCJhZGRyZXNzIiwibW5lbW9uaWMiLCJwcml2YXRlS2V5IiwiSW5kZXgiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRORlQiLCJzZXRDdXJyZW50IiwibmZ0cyIsInN3aXRjaE5GVCIsImxlbmd0aCIsInB1cmNoYXNlTkZUIiwiX2N1cnJlbnQiLCJjb3N0IiwibmZ0VHlwZSIsInR4Iiwic2lnblByb21pc2UiLCJtZXRob2RzIiwiY2FsbCIsInRvU3RyaW5nIiwiZnJvbSIsInRvIiwiZ2FzIiwiZGF0YSIsIm1pbnRSb2JvdCIsImFjY291bnRzIiwic2lnblRyYW5zYWN0aW9uIiwidGhlbiIsInNpZ25lZFR4Iiwic2VuZFNpZ25lZFRyYW5zYWN0aW9uIiwicmF3VHJhbnNhY3Rpb24iLCJlcnIiLCJoYXNoIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImNvbG9yIiwib25DbGljayIsImZvbnRTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29tcG9uZW50IiwiaW1hZ2UiLCJ0aXRsZSIsImFsdCIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ })

});