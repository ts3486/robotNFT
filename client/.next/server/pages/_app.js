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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeb3 */ \"./getWeb3.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//Drizzle\n// const { DrizzleContext } = require(\"@drizzle/react-plugin\");\n// const { Drizzle } = require(\"@drizzle/store\");\n// const drizzle = new Drizzle(drizzleOptions);\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: account , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Is there is an injected web3 instance?\n        (0,_getWeb3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then((currentAccount)=>{\n            setAccount(currentAccount);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        account: account\n    }, void 0, false, {\n        fileName: \"/Users/Tao.S/Desktop/blockchain/RobotNFT/source/client/pages/_app.tsx\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp); // <DrizzleContext.Provider drizzle={drizzle}>\n //   <DrizzleContext.Consumer>\n //     {(drizzleContext: any) => {\n //       const { drizzle, drizzleState, initialized } = drizzleContext;\n //       if (!initialized) {\n //         //Improve error ui\n //         console.log(\"initializing...\");\n //         return \"Loading...\";\n //       }\n //       {\n //         console.log(\"initialized\");\n //         return (\n //           <div className=\"App\">\n //             <Component {...pageProps} drizzle={drizzle} drizzleState={drizzleState} />\n //           </div>\n //         );\n //       }\n //     }}\n //   </DrizzleContext.Consumer>\n // </DrizzleContext.Provider>\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFbEI7QUFFRjtBQUU5QixFQUFTO0FBQ1QsRUFBK0Q7QUFDL0QsRUFBaUQ7QUFFakQsRUFBK0M7U0FFdENJLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUV6Q0MsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBeUM7UUFDekNDLG9EQUFPLEdBQUdNLElBQUksRUFBRUMsY0FBYyxHQUFLLENBQUM7WUFDbENGLFVBQVUsQ0FBQ0UsY0FBYztRQUMzQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQUVMLFNBQVM7V0FBS0MsU0FBUztRQUFFQyxPQUFPLEVBQUVBLE9BQU87Ozs7OztBQUNuRCxDQUFDO0FBQ0QsaUVBQWVILEtBQUssRUFFcEIsQ0FBOEM7QUFDOUMsQ0FBOEI7QUFDOUIsQ0FBa0M7QUFDbEMsQ0FBdUU7QUFFdkUsQ0FBNEI7QUFDNUIsQ0FBNkI7QUFDN0IsQ0FBMEM7QUFDMUMsQ0FBK0I7QUFDL0IsQ0FBVTtBQUVWLENBQVU7QUFDVixDQUFzQztBQUN0QyxDQUFtQjtBQUNuQixDQUFrQztBQUNsQyxDQUF5RjtBQUN6RixDQUFtQjtBQUNuQixDQUFhO0FBQ2IsQ0FBVTtBQUNWLENBQVM7QUFDVCxDQUErQjtBQUMvQixDQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbi8vRHJpenpsZVxuLy8gY29uc3QgeyBEcml6emxlQ29udGV4dCB9ID0gcmVxdWlyZShcIkBkcml6emxlL3JlYWN0LXBsdWdpblwiKTtcbi8vIGNvbnN0IHsgRHJpenpsZSB9ID0gcmVxdWlyZShcIkBkcml6emxlL3N0b3JlXCIpO1xuXG4vLyBjb25zdCBkcml6emxlID0gbmV3IERyaXp6bGUoZHJpenpsZU9wdGlvbnMpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSXMgdGhlcmUgaXMgYW4gaW5qZWN0ZWQgd2ViMyBpbnN0YW5jZT9cbiAgICBnZXRXZWIzKCkudGhlbigoY3VycmVudEFjY291bnQpID0+IHtcbiAgICAgIHNldEFjY291bnQoY3VycmVudEFjY291bnQpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGFjY291bnQ9e2FjY291bnR9IC8+O1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbi8vIDxEcml6emxlQ29udGV4dC5Qcm92aWRlciBkcml6emxlPXtkcml6emxlfT5cbi8vICAgPERyaXp6bGVDb250ZXh0LkNvbnN1bWVyPlxuLy8gICAgIHsoZHJpenpsZUNvbnRleHQ6IGFueSkgPT4ge1xuLy8gICAgICAgY29uc3QgeyBkcml6emxlLCBkcml6emxlU3RhdGUsIGluaXRpYWxpemVkIH0gPSBkcml6emxlQ29udGV4dDtcblxuLy8gICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuLy8gICAgICAgICAvL0ltcHJvdmUgZXJyb3IgdWlcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmcuLi5cIik7XG4vLyAgICAgICAgIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcbi8vICAgICAgIH1cblxuLy8gICAgICAge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemVkXCIpO1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGRyaXp6bGU9e2RyaXp6bGV9IGRyaXp6bGVTdGF0ZT17ZHJpenpsZVN0YXRlfSAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICApO1xuLy8gICAgICAgfVxuLy8gICAgIH19XG4vLyAgIDwvRHJpenpsZUNvbnRleHQuQ29uc3VtZXI+XG4vLyA8L0RyaXp6bGVDb250ZXh0LlByb3ZpZGVyPlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRXZWIzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInRoZW4iLCJjdXJyZW50QWNjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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