webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Break/break.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/searchblock.css":
false,

/***/ "./src/shared/Break/Break.tsx":
false,

/***/ "./src/shared/Break/break.css":
false,

/***/ "./src/shared/Break/index.ts":
false,

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction SearchBlock(_a) {\r\n    var token = _a.token;\r\n    var _b = (0, react_1.useState)({}), data = _b[0], setData = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            console.log(resp.data);\r\n            console.log;\r\n        });\r\n        setData({ name: userData.name, iconImg: userData.icon_img });\r\n        console.log(userData);\r\n    })\r\n        .catch(console.log);\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n[];\r\nreturn (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n    react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
false,

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
false,

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
false

})