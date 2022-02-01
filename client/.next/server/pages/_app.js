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

/***/ "./getWeb3.js":
/*!********************!*\
  !*** ./getWeb3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/detect-provider */ \"@metamask/detect-provider\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getWeb3 = ()=>new Promise((resolve, reject)=>{\n        // Wait for loading completion to avoid race conditions with web3 injection timing.\n        window.addEventListener(\"load\", async ()=>{\n            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();\n            if (provider) {\n                try {\n                    //Metamask page should be prompted by user (ex: button click event). \"eth_requestAccounts\" prompts the browser to provide eth address, and prompts metamask page to appear\n                    const accounts1 = await provider.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const account = accounts1[0];\n                    console.log(\"current account: \" + account);\n                    provider.on(\"accountsChanged\", (accounts)=>{\n                        // Time to reload your interface with accounts[0]!\n                        console.log(\"current account: \" + accounts[0]);\n                    });\n                    resolve(account);\n                } catch (error) {\n                    reject(error);\n                }\n            } else {\n                const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"http://127.0.0.1:7545\");\n                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n                console.log(\"No web3 instance injected, using Local web3.\");\n                resolve(web3);\n            }\n        });\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeb3); //else { console.log('Please install MetaMask!');}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nZXRXZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVCO0FBQ3VDO0FBRTlELEtBQUssQ0FBQ0UsT0FBTyxPQUNYLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1FBQ2hDLEVBQW1GO1FBQ25GQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLENBQU0saUJBQWMsQ0FBQztZQUMzQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNQLGdFQUFzQjtZQUU3QyxFQUFFLEVBQUVPLFFBQVEsRUFBRSxDQUFDO2dCQUNiLEdBQUcsQ0FBQyxDQUFDO29CQUNILEVBQTBLO29CQUMxSyxLQUFLLENBQUNDLFNBQVEsR0FBRyxLQUFLLENBQUNELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7d0JBQUNDLE1BQU0sRUFBRSxDQUFxQjtvQkFBQyxDQUFDO29CQUN6RSxLQUFLLENBQUNDLE9BQU8sR0FBR0gsU0FBUSxDQUFDLENBQUM7b0JBQzFCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQixxQkFBR0YsT0FBTztvQkFDekNKLFFBQVEsQ0FBQ08sRUFBRSxDQUFDLENBQWlCLG1CQUFHTixRQUFRLEdBQUssQ0FBQzt3QkFDNUMsRUFBa0Q7d0JBQ2xESSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQixxQkFBR0wsUUFBUSxDQUFDLENBQUM7b0JBQzlDLENBQUM7b0JBRURMLE9BQU8sQ0FBQ1EsT0FBTztnQkFDakIsQ0FBQyxDQUFDLEtBQUssRUFBRUksS0FBSyxFQUFFLENBQUM7b0JBQ2ZYLE1BQU0sQ0FBQ1csS0FBSztnQkFDZCxDQUFDO1lBQ0gsQ0FBQyxNQVNJLENBQUM7Z0JBQ0osS0FBSyxDQUFDUixRQUFRLEdBQUcsR0FBRyxDQUFDUixvRUFBMkIsQ0FBQyxDQUF1QjtnQkFDeEUsS0FBSyxDQUFDbUIsSUFBSSxHQUFHLEdBQUcsQ0FBQ25CLDZDQUFJLENBQUNRLFFBQVE7Z0JBQzlCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QztnQkFDMURWLE9BQU8sQ0FBQ2UsSUFBSTtZQUNkLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs7QUFFSCxpRUFBZWpCLE9BQU8sRUFFdEIsQ0FBa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9nZXRXZWIzLmpzP2E0Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gXCJAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyXCI7XG5cbmNvbnN0IGdldFdlYjMgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gV2FpdCBmb3IgbG9hZGluZyBjb21wbGV0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyB3aXRoIHdlYjMgaW5qZWN0aW9uIHRpbWluZy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyKCk7XG5cbiAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vTWV0YW1hc2sgcGFnZSBzaG91bGQgYmUgcHJvbXB0ZWQgYnkgdXNlciAoZXg6IGJ1dHRvbiBjbGljayBldmVudCkuIFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIHByb21wdHMgdGhlIGJyb3dzZXIgdG8gcHJvdmlkZSBldGggYWRkcmVzcywgYW5kIHByb21wdHMgbWV0YW1hc2sgcGFnZSB0byBhcHBlYXJcbiAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByb3ZpZGVyLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgYWNjb3VudDogXCIgKyBhY2NvdW50KTtcbiAgICAgICAgICBwcm92aWRlci5vbihcImFjY291bnRzQ2hhbmdlZFwiLCAoYWNjb3VudHMpID0+IHtcbiAgICAgICAgICAgIC8vIFRpbWUgdG8gcmVsb2FkIHlvdXIgaW50ZXJmYWNlIHdpdGggYWNjb3VudHNbMF0hXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgYWNjb3VudDogXCIgKyBhY2NvdW50c1swXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXNvbHZlKGFjY291bnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzLi4uXG4gICAgICAvLyBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgLy8gICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgLy8gICBjb25zdCB3ZWIzID0gd2luZG93LndlYjM7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC5cIik7XG4gICAgICAvLyAgIHJlc29sdmUod2ViMyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBGYWxsYmFjayB0byBsb2NhbGhvc3Q7IHVzZSBkZXYgY29uc29sZSBwb3J0IGJ5IGRlZmF1bHQuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXCJodHRwOi8vMTI3LjAuMC4xOjc1NDVcIik7XG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gd2ViMyBpbnN0YW5jZSBpbmplY3RlZCwgdXNpbmcgTG9jYWwgd2ViMy5cIik7XG4gICAgICAgIHJlc29sdmUod2ViMyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWIzO1xuXG4vL2Vsc2UgeyBjb25zb2xlLmxvZygnUGxlYXNlIGluc3RhbGwgTWV0YU1hc2shJyk7fVxuIl0sIm5hbWVzIjpbIldlYjMiLCJkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIiwiZ2V0V2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb3ZpZGVyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImVycm9yIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwid2ViMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./getWeb3.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeb3 */ \"./getWeb3.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//Drizzle\n// const { DrizzleContext } = require(\"@drizzle/react-plugin\");\n// const { Drizzle } = require(\"@drizzle/store\");\n// const drizzle = new Drizzle(drizzleOptions);\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: account , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Is there is an injected web3 instance?\n        (0,_getWeb3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then((currentAccount)=>{\n            setAccount(currentAccount);\n        });\n    }, []);\n    return(// <DrizzleContext.Provider drizzle={drizzle}>\n    //   <DrizzleContext.Consumer>\n    //     {(drizzleContext: any) => {\n    //       const { drizzle, drizzleState, initialized } = drizzleContext;\n    //       if (!initialized) {\n    //         //Improve error ui\n    //         console.log(\"initializing...\");\n    //         return \"Loading...\";\n    //       }\n    //       {\n    //         console.log(\"initialized\");\n    //         return (\n    //           <div className=\"App\">\n    //             <Component {...pageProps} drizzle={drizzle} drizzleState={drizzleState} />\n    //           </div>\n    //         );\n    //       }\n    //     }}\n    //   </DrizzleContext.Consumer>\n    // </DrizzleContext.Provider>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        account: account\n    }, void 0, false, {\n        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFbEI7QUFHRjtBQUU5QixFQUFTO0FBQ1QsRUFBK0Q7QUFDL0QsRUFBaUQ7QUFFakQsRUFBK0M7U0FFdENJLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUV6Q0MsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBeUM7UUFDekNDLG9EQUFPLEdBQUdNLElBQUksRUFBRUMsY0FBYyxHQUFLLENBQUM7WUFDbENGLFVBQVUsQ0FBQ0UsY0FBYztRQUMzQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sQ0FDSixFQUE4QztJQUM5QyxFQUE4QjtJQUM5QixFQUFrQztJQUNsQyxFQUF1RTtJQUV2RSxFQUE0QjtJQUM1QixFQUE2QjtJQUM3QixFQUEwQztJQUMxQyxFQUErQjtJQUMvQixFQUFVO0lBRVYsRUFBVTtJQUNWLEVBQXNDO0lBQ3RDLEVBQW1CO0lBQ25CLEVBQWtDO0lBQ2xDLEVBQXlGO0lBQ3pGLEVBQW1CO0lBQ25CLEVBQWE7SUFDYixFQUFVO0lBQ1YsRUFBUztJQUNULEVBQStCO0lBQy9CLEVBQTZCO2dGQUM1QkwsU0FBUztXQUFLQyxTQUFTO1FBQUVDLE9BQU8sRUFBRUEsT0FBTzs7Ozs7O0FBRTlDLENBQUM7QUFDRCxpRUFBZUgsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgZHJpenpsZU9wdGlvbnMgZnJvbSBcIi4uL2RyaXp6bGVPcHRpb25zXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuLy9Ecml6emxlXG4vLyBjb25zdCB7IERyaXp6bGVDb250ZXh0IH0gPSByZXF1aXJlKFwiQGRyaXp6bGUvcmVhY3QtcGx1Z2luXCIpO1xuLy8gY29uc3QgeyBEcml6emxlIH0gPSByZXF1aXJlKFwiQGRyaXp6bGUvc3RvcmVcIik7XG5cbi8vIGNvbnN0IGRyaXp6bGUgPSBuZXcgRHJpenpsZShkcml6emxlT3B0aW9ucyk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJcyB0aGVyZSBpcyBhbiBpbmplY3RlZCB3ZWIzIGluc3RhbmNlP1xuICAgIGdldFdlYjMoKS50aGVuKChjdXJyZW50QWNjb3VudCkgPT4ge1xuICAgICAgc2V0QWNjb3VudChjdXJyZW50QWNjb3VudCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICAvLyA8RHJpenpsZUNvbnRleHQuUHJvdmlkZXIgZHJpenpsZT17ZHJpenpsZX0+XG4gICAgLy8gICA8RHJpenpsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgLy8gICAgIHsoZHJpenpsZUNvbnRleHQ6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGNvbnN0IHsgZHJpenpsZSwgZHJpenpsZVN0YXRlLCBpbml0aWFsaXplZCB9ID0gZHJpenpsZUNvbnRleHQ7XG5cbiAgICAvLyAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgLy8gICAgICAgICAvL0ltcHJvdmUgZXJyb3IgdWlcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nLi4uXCIpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuICAgIC8vICAgICAgIH1cblxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZWRcIik7XG4gICAgLy8gICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgIC8vICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZHJpenpsZT17ZHJpenpsZX0gZHJpenpsZVN0YXRlPXtkcml6emxlU3RhdGV9IC8+XG4gICAgLy8gICAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH19XG4gICAgLy8gICA8L0RyaXp6bGVDb250ZXh0LkNvbnN1bWVyPlxuICAgIC8vIDwvRHJpenpsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBhY2NvdW50PXthY2NvdW50fSAvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFdlYjMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwidGhlbiIsImN1cnJlbnRBY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@metamask/detect-provider":
/*!********************************************!*\
  !*** external "@metamask/detect-provider" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();