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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"fullScreenVideo\": \"Home_fullScreenVideo__o_kM5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz85MTJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZ1bGxTY3JlZW5WaWRlb1wiOiBcIkhvbWVfZnVsbFNjcmVlblZpZGVvX19vX2tNNVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animejs */ \"animejs\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_6__]);\naxios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [step, setStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(-2);\n    const [timesRan, setTR] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const desktopPath = path__WEBPACK_IMPORTED_MODULE_4___default().join((__webpack_require__(/*! os */ \"os\").homedir)(), \"Desktop\");\n        const filePath = path__WEBPACK_IMPORTED_MODULE_4___default().join(desktopPath, \"presentStep.txt\");\n        if (fs__WEBPACK_IMPORTED_MODULE_5___default().existsSync(filePath)) {\n            console.log(\"fileExists\");\n            fs__WEBPACK_IMPORTED_MODULE_5___default().readFile(filePath, \"utf8\", (err, data)=>{\n                if (err) {\n                    console.log(err);\n                } else {\n                    console.log(\"fileData: \" + data);\n                    const stepact = parseInt(data);\n                    setStep(stepact);\n                }\n            });\n        } else {\n            setStep(-1);\n        }\n    }, [\n        router.isReady\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timesRan == 0 && step != -2) {\n            setTR(1);\n            nextStep(true);\n            return;\n        } else {\n            return;\n        }\n    }, [\n        step\n    ]);\n    function nextStep(flag) {\n        const desktopPath = path__WEBPACK_IMPORTED_MODULE_4___default().join((__webpack_require__(/*! os */ \"os\").homedir)(), \"Desktop\");\n        const filePath = path__WEBPACK_IMPORTED_MODULE_4___default().join(desktopPath, \"presentStep.txt\");\n        console.log(\"nextStep: step\" + step);\n        const stepInt = parseInt(step);\n        const stepAdded = stepInt + 1;\n        const stepString = stepAdded.toString();\n        console.log(stepAdded + \" stepAdded\");\n        if (flag) {\n            console.log(\"Flag\");\n            setStep(stepInt + 1);\n            console.log(\"stepString: \" + stepString);\n            fs__WEBPACK_IMPORTED_MODULE_5___default().writeFile(filePath, stepString, (err)=>{\n                if (err) {\n                    console.log(err);\n                } else {\n                    console.log(\"Written: \" + stepAdded);\n                }\n            });\n        }\n        const step0 = document.getElementById(\"0\");\n        const step0video = document.getElementById(\"step0video\");\n        const step1 = document.getElementById(\"1\");\n        const step1video = document.getElementById(\"step1video\");\n        if (stepInt + 1 == 0) {\n            step0.style.display = \"block\";\n        } else if (stepInt + 1 == 1) {\n            step0video.play();\n        } else if (stepInt + 1 == 2) {\n            step1.style.display = \"block\";\n            step1video.play();\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Presentation\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>nextStep(true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"0\",\n                        style: {\n                            display: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            id: \"step0video\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fullScreenVideo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                type: \"video/mp4\",\n                                src: \"https://assets.rygb.tech/mainassets/assets/mgrintro-rygbshow.mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 67\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"1\",\n                        style: {\n                            display: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            id: \"step1video\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fullScreenVideo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                type: \"video/mp4\",\n                                src: \"https://assets.rygb.tech/mainassets/assets/kioskintro-rygbshow.mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 67\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marcus M\\\\Documents\\\\GitHub\\\\Presentation\\\\js\\\\renderer\\\\pages\\\\home.jsx\",\n        lineNumber: 75,\n        columnNumber: 11\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7NEJBQUNFLFNBQVMsRUFBRTVDLGdGQUFzQjtzQ0FBRSw0RUFBQzhDLFFBQU07Z0NBQUNDLElBQUksRUFBQyxXQUFXO2dDQUFDQyxHQUFHLEVBQUMsa0VBQWtFOzs7OztvQ0FBVzs7Ozs7Z0NBQVE7Ozs7OzRCQUN4SztrQ0FDTiw4REFBQ1IsS0FBRzt3QkFBQ0UsRUFBRSxFQUFDLEdBQUc7d0JBQUNQLEtBQUssRUFBRTs0QkFBRUMsT0FBTyxFQUFFLE1BQU07eUJBQUU7a0NBQ3BDLDRFQUFDTyxPQUFLOzRCQUFDRCxFQUFFLEVBQUMsWUFBWTs0QkFBQ0UsU0FBUyxFQUFFNUMsZ0ZBQXNCO3NDQUFFLDRFQUFDOEMsUUFBTTtnQ0FBQ0MsSUFBSSxFQUFDLFdBQVc7Z0NBQUNDLEdBQUcsRUFBQyxvRUFBb0U7Ozs7O29DQUFXOzs7OztnQ0FBUTs7Ozs7NEJBQzFLOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNTLENBQUU7QUFDckIsQ0FBQztBQUNELGlFQUFlL0MsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS5qc3g/OGEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKC0yKTtcbiAgY29uc3QgW3RpbWVzUmFuLCBzZXRUUl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZXNrdG9wUGF0aCA9IHBhdGguam9pbihyZXF1aXJlKCdvcycpLmhvbWVkaXIoKSwgJ0Rlc2t0b3AnKTtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkZXNrdG9wUGF0aCwgJ3ByZXNlbnRTdGVwLnR4dCcpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgY29uc29sZS5sb2coXCJmaWxlRXhpc3RzXCIpXG4gICAgICBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZURhdGE6IFwiICsgZGF0YSk7XG4gICAgICAgICAgY29uc3Qgc3RlcGFjdCA9IHBhcnNlSW50KGRhdGEpO1xuICAgICAgICAgIHNldFN0ZXAoc3RlcGFjdClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RlcCgtMSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGltZXNSYW4gPT0gMCAmJiBzdGVwICE9IC0yKSB7XG4gICAgICBzZXRUUigxKVxuICAgICAgbmV4dFN0ZXAodHJ1ZSlcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW3N0ZXBdKVxuXG4gIGZ1bmN0aW9uIG5leHRTdGVwKGZsYWcpIHtcbiAgICBjb25zdCBkZXNrdG9wUGF0aCA9IHBhdGguam9pbihyZXF1aXJlKCdvcycpLmhvbWVkaXIoKSwgJ0Rlc2t0b3AnKTtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZGVza3RvcFBhdGgsICdwcmVzZW50U3RlcC50eHQnKTtcbiAgICBjb25zb2xlLmxvZyhcIm5leHRTdGVwOiBzdGVwXCIgKyBzdGVwKVxuICAgIGNvbnN0IHN0ZXBJbnQgPSBwYXJzZUludChzdGVwKTtcbiAgICBjb25zdCBzdGVwQWRkZWQgPSBzdGVwSW50ICsgMTtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcEFkZGVkLnRvU3RyaW5nKCk7XG4gICAgY29uc29sZS5sb2coc3RlcEFkZGVkICsgXCIgc3RlcEFkZGVkXCIpXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmxhZ1wiKVxuICAgICAgc2V0U3RlcChzdGVwSW50ICsgMSlcbiAgICAgIGNvbnNvbGUubG9nKFwic3RlcFN0cmluZzogXCIgKyBzdGVwU3RyaW5nKVxuICAgICAgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBzdGVwU3RyaW5nLCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV3JpdHRlbjogXCIgKyBzdGVwQWRkZWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBzdGVwMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiMFwiKTtcbiAgICBjb25zdCBzdGVwMHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwMHZpZGVvXCIpO1xuICAgIGNvbnN0IHN0ZXAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIxXCIpO1xuICAgIGNvbnN0IHN0ZXAxdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAxdmlkZW9cIik7XG4gICAgaWYgKChzdGVwSW50ICsgMSkgPT0gMCkge1xuICAgICAgc3RlcDAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0gZWxzZSBpZiAoKHN0ZXBJbnQgKyAxKSA9PSAxKSB7XG4gICAgICBzdGVwMHZpZGVvLnBsYXkoKVxuICAgIH0gZWxzZSBpZiAoKHN0ZXBJbnQgKyAxKSA9PSAyKSB7XG4gICAgICBzdGVwMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICBzdGVwMXZpZGVvLnBsYXkoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5QcmVzZW50YXRpb248L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG5leHRTdGVwKHRydWUpfT5cbiAgICAgIDxkaXYgaWQ9XCIwXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgIDx2aWRlbyBpZD1cInN0ZXAwdmlkZW9cIiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsU2NyZWVuVmlkZW99Pjxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIHNyYz1cImh0dHBzOi8vYXNzZXRzLnJ5Z2IudGVjaC9tYWluYXNzZXRzL2Fzc2V0cy9tZ3JpbnRyby1yeWdic2hvdy5tcDRcIj48LyBzb3VyY2U+PC92aWRlbz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIjFcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgPHZpZGVvIGlkPVwic3RlcDF2aWRlb1wiIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxTY3JlZW5WaWRlb30+PHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgc3JjPVwiaHR0cHM6Ly9hc3NldHMucnlnYi50ZWNoL21haW5hc3NldHMvYXNzZXRzL2tpb3NraW50cm8tcnlnYnNob3cubXA0XCI+PC8gc291cmNlPjwvdmlkZW8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9SZWFjdC5GcmFnbWVudD4pO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJwYXRoIiwiZnMiLCJheGlvcyIsImFuaW1lIiwic3R5bGVzIiwiSG9tZSIsInJvdXRlciIsInN0ZXAiLCJzZXRTdGVwIiwidXNlU3RhdGUiLCJ0aW1lc1JhbiIsInNldFRSIiwiZGVza3RvcFBhdGgiLCJqb2luIiwicmVxdWlyZSIsImhvbWVkaXIiLCJmaWxlUGF0aCIsImV4aXN0c1N5bmMiLCJjb25zb2xlIiwibG9nIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIiwic3RlcGFjdCIsInBhcnNlSW50IiwiaXNSZWFkeSIsIm5leHRTdGVwIiwiZmxhZyIsInN0ZXBJbnQiLCJzdGVwQWRkZWQiLCJzdGVwU3RyaW5nIiwidG9TdHJpbmciLCJ3cml0ZUZpbGUiLCJzdGVwMCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGVwMHZpZGVvIiwic3RlcDEiLCJzdGVwMXZpZGVvIiwic3R5bGUiLCJkaXNwbGF5IiwicGxheSIsIkZyYWdtZW50IiwidGl0bGUiLCJkaXYiLCJvbkNsaWNrIiwiaWQiLCJ2aWRlbyIsImNsYXNzTmFtZSIsImZ1bGxTY3JlZW5WaWRlbyIsInNvdXJjZSIsInR5cGUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.jsx\n");

/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("animejs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home.jsx"));
module.exports = __webpack_exports__;

})();