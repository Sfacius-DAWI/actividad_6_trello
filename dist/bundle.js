/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f4f5f7;\r\n}\r\n\r\nheader {\r\n  background-color: #0079bf;\r\n  color: white;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n#tablero {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  overflow-x: auto;\r\n}\r\n\r\n.lista {\r\n  background-color: #ebecf0;\r\n  border-radius: 5px;\r\n  width: 300px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.lista-titulo {\r\n  font-weight: bold;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tarjeta {\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  padding: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.crear-tarjeta {\r\n  background-color: #0079bf;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.eliminar-lista {\r\n  background-color: #bf0030;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.Eliminar_caja {\r\n  background-color: #bf0030;\r\n  color: white;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin-top: 0.5rem;\r\n} \r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://img/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://img/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://img/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://img/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://img/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _utils_CrearCajitas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/CrearCajitas.js */ \"./src/utils/CrearCajitas.js\");\n/* harmony import */ var _utils_gestionar_tarjetas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/gestionar_tarjetas.js */ \"./src/utils/gestionar_tarjetas.js\");\n\r\n\r\n\r\n\r\nconsole.log('el js sigue funcionando');\r\n\r\naddEventListener('DOMContentLoaded', function () {\r\n    console.log('el evento DOMContentLoaded ha ocurrido');\r\n    boton_crear()\r\n    cargartarjetas();\r\n\r\n    var boton_crear_selector = document.getElementById('boton_crear_cajita')\r\nboton_crear_selector.addEventListener('click', function () {\r\n  var titulo = prompt('Introduce el título de la lista');\r\n  if (titulo) {\r\n    (0,_utils_CrearCajitas_js__WEBPACK_IMPORTED_MODULE_1__.tarjeta_generica)(titulo);\r\n  }\r\n})\r\n\r\n});\r\n\r\n\r\n// Delegación de eventos para botones eliminación creados dinámicamente\r\n document.addEventListener('click', function (e) {\r\n    if ( e.target.matches('.boton-eliminar') || e.target.matches('.eliminar-lista') ) {\r\n        console.log('se ha seleccionado para eliminar');\r\n        (0,_utils_gestionar_tarjetas_js__WEBPACK_IMPORTED_MODULE_2__.eliminar_tarjeta)(e.target);\r\n    }\r\n\r\n    if(e.target.matches('.crear-tarjeta')) {\r\n      console.log('se ha seleccionado para añadir una tarjeta');\r\n      var parentId = e.target.parentElement.id;\r\n      console.log(parentId);\r\n      (0,_utils_gestionar_tarjetas_js__WEBPACK_IMPORTED_MODULE_2__[\"boton_añadir\"])(parentId);\r\n  }\r\n\r\n  if(e.target.matches('.Eliminar_caja')) {\r\n    console.log('ha entrado en eliminar lista')\r\n    console.log(e.target.parentElement.id)\r\n    ;(0,_utils_gestionar_tarjetas_js__WEBPACK_IMPORTED_MODULE_2__.eliminar_cajista)(e.target.parentElement.id)\r\n\r\n  }\r\n});\r\n\r\ndocument.addEventListener('dblclick', function (event) {\r\n  var tarjeta = event.target.closest('.tarjeta');\r\n  if (tarjeta) {\r\n      (0,_utils_gestionar_tarjetas_js__WEBPACK_IMPORTED_MODULE_2__.modificarTarjeta)(tarjeta);\r\n  }\r\n});\r\n \r\n\r\n\r\n\r\n\r\nvar cargartarjetas = function () {\r\n    (0,_utils_CrearCajitas_js__WEBPACK_IMPORTED_MODULE_1__.tarjeta_generica)('por_hacer');\r\n    (0,_utils_CrearCajitas_js__WEBPACK_IMPORTED_MODULE_1__.tarjeta_generica)('processo');\r\n    (0,_utils_CrearCajitas_js__WEBPACK_IMPORTED_MODULE_1__.tarjeta_generica)('finalizada');\r\n}\r\n\r\nvar boton_crear = function () {\r\n  var div_principal = document.getElementById('tablero')\r\n  var boton_crear_cajita = document.createElement('button')\r\n  boton_crear_cajita.textContent = '+' \r\n  boton_crear_cajita.setAttribute('id', 'boton_crear_cajita')\r\n  div_principal.append(boton_crear_cajita)\r\n  \r\n}\r\n\r\n\n\n//# sourceURL=webpack://img/./src/index.js?");

/***/ }),

/***/ "./src/utils/CrearCajitas.js":
/*!***********************************!*\
  !*** ./src/utils/CrearCajitas.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tarjeta_generica: () => (/* binding */ tarjeta_generica)\n/* harmony export */ });\nvar tarjeta_generica = function (titulo) {\r\n    var por_hacer = document.createElement('div')\r\n    por_hacer.setAttribute('class', 'lista');\r\n    por_hacer.setAttribute('id', titulo)\r\n    var tablero = document.getElementById('tablero');\r\n    tablero.append(por_hacer);\r\n\r\n    var h1 = document.createElement('h1');\r\n    h1.setAttribute('class', 'lista-titulo')\r\n    h1.textContent = titulo;\r\n    por_hacer.append(h1)\r\n\r\n    // Eliminamos el antiguo div y sus listeners, y lo reemplazamos:\r\n    var div_todas_tarjetas = document.createElement('div')\r\n    div_todas_tarjetas.setAttribute('class', 'div_tarjetas')\r\n    // NUEVO: Aseguramos que tenga área droppable aun vacio\r\n    div_todas_tarjetas.style.minHeight = '50px';\r\n    // Agregamos eventos para permitir drop de tarjetas individuales\r\n    div_todas_tarjetas.addEventListener('dragover', function (e) {\r\n        e.preventDefault();\r\n    });\r\n    div_todas_tarjetas.addEventListener('drop', function (e) {\r\n        e.preventDefault();\r\n        var draggedId = e.dataTransfer.getData('text/plain');\r\n        var draggedCard = document.getElementById(draggedId);\r\n        if(draggedCard && draggedCard.classList.contains('tarjeta-item')){\r\n            div_todas_tarjetas.appendChild(draggedCard);\r\n        }\r\n    });\r\n    por_hacer.append(div_todas_tarjetas)\r\n    \r\n    // Se agrega drop en el contenedor padre para reordenar el div draggable\r\n    por_hacer.addEventListener('dragover', function (e) {\r\n        e.preventDefault();\r\n    });\r\n    por_hacer.addEventListener('drop', function (e) {\r\n        e.preventDefault();\r\n        var draggedId = e.dataTransfer.getData('text/plain');\r\n        var draggedElement = document.getElementById(draggedId);\r\n        if(draggedElement && draggedElement.classList.contains('div_tarjetas')){\r\n            // Se inserta el contenedor arrastrado antes del botón de agregar\r\n            var btn = por_hacer.querySelector('.crear-tarjeta');\r\n            por_hacer.insertBefore(draggedElement, btn);\r\n        }\r\n    });\r\n    \r\n    var boton_añadir = document.createElement('button');\r\n    boton_añadir.setAttribute('class','crear-tarjeta' )\r\n    boton_añadir.textContent = 'Agregar';\r\n    por_hacer.append(boton_añadir);\r\n\r\n    // Se restaura la clase original para eliminar la lista (por ejemplo, \"eliminar-lista\")\r\n    var boton_eliminar = document.createElement('button');\r\n    boton_eliminar.setAttribute('class', 'eliminar-lista');\r\n    boton_eliminar.textContent = 'Eliminar';\r\n    por_hacer.append(boton_eliminar);\r\n    \r\n\r\n    var Eliminar_caja = document.createElement('button');\r\n    Eliminar_caja.setAttribute('class', 'Eliminar_caja');\r\n    Eliminar_caja.textContent = 'Elimina caja';\r\n    por_hacer.append(Eliminar_caja);\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://img/./src/utils/CrearCajitas.js?");

/***/ }),

/***/ "./src/utils/gestionar_tarjetas.js":
/*!*****************************************!*\
  !*** ./src/utils/gestionar_tarjetas.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boton_añadir\": () => (/* binding */ boton_añadir),\n/* harmony export */   eliminar_cajista: () => (/* binding */ eliminar_cajista),\n/* harmony export */   eliminar_tarjeta: () => (/* binding */ eliminar_tarjeta),\n/* harmony export */   modificarTarjeta: () => (/* binding */ modificarTarjeta)\n/* harmony export */ });\nvar boton_añadir = function (id) {\r\n\r\nvar texto = document.createElement('p')\r\ntexto.textContent = 'ejemplo'\r\ntexto.setAttribute('class', 'tarjeta')\r\nvar elemnto_padre = document.getElementById(id)\r\nvar tarjeta = document.createElement('div');\r\n// Se marca la tarjeta como draggable y se asigna un id único\r\ntarjeta.setAttribute('draggable', true);\r\ntarjeta.id = 'tarjeta-' + Date.now();\r\ntarjeta.classList.add('tarjeta-item');\r\ntarjeta.append(texto)\r\nvar div_tarjetas = elemnto_padre.querySelector('.div_tarjetas')\r\ndiv_tarjetas.append(tarjeta);\r\n\r\n// Se agrega manejador para iniciar el drag sobre la tarjeta\r\ntarjeta.addEventListener('dragstart', function (e) {\r\n    e.dataTransfer.setData('text/plain', tarjeta.id);\r\n});\r\n\r\nvar boton_tarjeta = document.createElement('button')\r\nboton_tarjeta.setAttribute('class', 'boton-eliminar')\r\nboton_tarjeta.textContent = 'x' \r\n\r\ntarjeta.append(boton_tarjeta)\r\n}\r\n\r\nvar modificarTarjeta = function (tarjetaElement) {\r\n\r\n    var currentText = tarjetaElement.textContent;\r\n    \r\n    var inputElement = document.createElement('input');\r\n    inputElement.type = 'text';\r\n    inputElement.value = currentText;\r\n    inputElement.style.width = '100%';\r\n    \r\n    tarjetaElement.textContent = '';\r\n    tarjetaElement.append(inputElement);\r\n    \r\n    inputElement.focus();\r\n    \r\n    var saveEdit = function () {\r\n      var newText = inputElement.value;\r\n      tarjetaElement.textContent = newText;\r\n    };\r\n    \r\n    inputElement.addEventListener('keydown', function (e) {\r\n      if (e.key === 'Enter') {\r\n        saveEdit();\r\n      }\r\n    });\r\n    \r\n}\r\n\r\nvar eliminar_tarjeta = function (element) {\r\n  // Si el botón corresponde a una tarjeta individual (creada en boton_añadir)\r\n  var card = element.closest('.tarjeta-item');\r\n  if (card) {\r\n      card.remove();\r\n      return;\r\n  }\r\n  // Si se ha hecho clic en el botón de eliminar de la lista (eliminar-lista)\r\n  var lista_tarjetas = element.closest('.lista');\r\n  if (lista_tarjetas) {\r\n      var divTarjetas = lista_tarjetas.querySelector('.div_tarjetas');\r\n      console.log(divTarjetas);\r\n\r\n      if (divTarjetas) {\r\n          // Elimina solo las tarjetas dentro de la lista correspondiente\r\n          while (divTarjetas.firstChild) {\r\n              divTarjetas.firstChild.remove();\r\n          }\r\n      }\r\n  }\r\n}\r\nvar eliminar_cajista = function (id) {\r\nvar cajita = document.getElementById(id)\r\n  cajita.remove()\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://img/./src/utils/gestionar_tarjetas.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;