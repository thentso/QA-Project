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

/***/ "(pages-dir-node)/./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"(pages-dir-node)/./lib/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"Layout.useState\": ()=>_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser\n    }[\"Layout.useState\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Layout.useEffect\": ()=>{\n            const unsub = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged({\n                \"Layout.useEffect.unsub\": (u)=>setUser(u)\n            }[\"Layout.useEffect.unsub\"]);\n            return unsub;\n        }\n    }[\"Layout.useEffect\"], []);\n    const handleSignOut = async ()=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-800 text-white px-4 py-3 flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-lg cursor-pointer\",\n                                    children: \"Q&A Portal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/ask\",\n                                className: \"hover:underline\",\n                                children: \"Ask\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSignOut,\n                            className: \"bg-gray-700 px-3 py-1 rounded hover:bg-gray-600\",\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/signin\",\n                            className: \"bg-blue-600 px-3 py-1 rounded hover:bg-blue-700\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"min-h-screen bg-gray-50\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/components/Layout.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1U7QUFDQztBQUV4QyxNQUFNTSxTQUFrRCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNuRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBOzJCQUFDLElBQU1FLCtDQUFJQSxDQUFDTSxXQUFXOztJQUV2RFQsZ0RBQVNBOzRCQUFDO1lBQ1IsTUFBTVUsUUFBUVAsK0NBQUlBLENBQUNRLGtCQUFrQjswQ0FBQ0MsQ0FBQUEsSUFBS0osUUFBUUk7O1lBQ25ELE9BQU9GO1FBQ1Q7MkJBQUcsRUFBRTtJQUVMLE1BQU1HLGdCQUFnQjtRQUNwQixNQUFNVCxzREFBT0EsQ0FBQ0QsK0NBQUlBO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNkLGtEQUFJQTtnQ0FBQ2UsTUFBSzswQ0FDVCw0RUFBQ0M7b0NBQUtGLFdBQVU7OENBQW1DOzs7Ozs7Ozs7OzswQ0FFckQsOERBQUNkLGtEQUFJQTtnQ0FBQ2UsTUFBSztnQ0FBT0QsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNGO2tDQUNFUCxxQkFDQyw4REFBQ1k7NEJBQU9DLFNBQVNQOzRCQUFlRyxXQUFVO3NDQUFrRDs7Ozs7c0RBRTVGLDhEQUFDZCxrREFBSUE7NEJBQUNlLE1BQUs7NEJBQVVELFdBQVU7c0NBQWtEOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkYsOERBQUNLO2dCQUFLTCxXQUFVOzBCQUEyQlY7Ozs7Ozs7Ozs7OztBQUdqRDtBQUVBLGlFQUFlRCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZHlsYW5raGFuZ3Nhci9EZXNrdG9wL1Byb2plY3RzL1FBIFByb2plY3QvY29tcG9uZW50cy9MYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKCkgPT4gYXV0aC5jdXJyZW50VXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YiA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHUgPT4gc2V0VXNlcih1KSk7XG4gICAgcmV0dXJuIHVuc3ViO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgY3Vyc29yLXBvaW50ZXJcIj5RJkEgUG9ydGFsPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPkFzazwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9IGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHB4LTMgcHktMSByb3VuZGVkIGhvdmVyOmJnLWdyYXktNjAwXCI+U2lnbiBPdXQ8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBweC0zIHB5LTEgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMFwiPlNpZ24gSW48L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiYXV0aCIsInNpZ25PdXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiY3VycmVudFVzZXIiLCJ1bnN1YiIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInUiLCJoYW5kbGVTaWduT3V0IiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Layout.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/firebase.ts":
/*!*************************!*\
  !*** ./lib/firebase.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAf61CDRhE2OBEi9aCrVbZVU26Nq3vCmx8\",\n    authDomain: \"qa-project-1aafd.firebaseapp.com\",\n    projectId: \"qa-project-1aafd\",\n    storageBucket: \"qa-project-1aafd.firebasestorage.app\",\n    messagingSenderId: \"197657546204\",\n    appId: \"1:197657546204:web:a2c1c653c2106ac54d9319\"\n};\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9maXJlYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDdEI7QUFDVTtBQUVsRCxNQUFNSyxpQkFBaUI7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1g7QUFFQSxNQUFNQyxNQUFNLENBQUNYLHFEQUFPQSxHQUFHWSxNQUFNLEdBQUdiLDJEQUFhQSxDQUFDSyxrQkFBa0JILG9EQUFNQTtBQUN0RSxNQUFNWSxPQUFPWCxzREFBT0EsQ0FBQ1M7QUFDckIsTUFBTUcsS0FBS1gsZ0VBQVlBLENBQUNRO0FBRUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWxhbmtoYW5nc2FyL0Rlc2t0b3AvUHJvamVjdHMvUUEgUHJvamVjdC9saWIvZmlyZWJhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcywgZ2V0QXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBZjYxQ0RSaEUyT0JFaTlhQ3JWYlpWVTI2TnEzdkNteDhcIixcbiAgICBhdXRoRG9tYWluOiBcInFhLXByb2plY3QtMWFhZmQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcInFhLXByb2plY3QtMWFhZmRcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInFhLXByb2plY3QtMWFhZmQuZmlyZWJhc2VzdG9yYWdlLmFwcFwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE5NzY1NzU0NjIwNFwiLFxuICAgIGFwcElkOiBcIjE6MTk3NjU3NTQ2MjA0OndlYjphMmMxYzY1M2MyMTA2YWM1NGQ5MzE5XCJcbn07XG5cbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKTtcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQgeyBhcHAsIGF1dGgsIGRiIH07ICJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImF1dGgiLCJkYiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/firebase.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"(pages-dir-node)/./components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylankhangsar/Desktop/Projects/QA Project/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEM7QUFDWDtBQUUvQixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2R5bGFua2hhbmdzYXIvRGVza3RvcC9Qcm9qZWN0cy9RQSBQcm9qZWN0L3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyAiXSwibmFtZXMiOlsiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();