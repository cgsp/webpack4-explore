/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~lodash":"vendors~lodash"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./src/index.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./src/index.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#src-index__root--3s_mBpM1 {\\n  color: red; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"root\": \"src-index__root--3s_mBpM1\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMi4xLjFAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvX3Nhc3MtbG9hZGVyQDcuMS4wQHNhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/ZjMwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDIuMS4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNzcmMtaW5kZXhfX3Jvb3QtLTNzX21CcE0xIHtcXG4gIGNvbG9yOiByZWQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwic3JjLWluZGV4X19yb290LS0zc19tQnBNMVwiXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./src/index.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.8.6@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/_react-dom@16.8.6@react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n// import '@babel/polyfill'\n\n\n\n\nconst getComponent = async () => {\n  // 获取lodash，然后赋值给_这个变量\n  // return import(/* webpackChunkName:\"lodash\"*/'lodash').then(({ default: _ }) => {\n  //   var ele = document.createElement('div')\n  //   ele.innerHTML = _.join(['g', 's'], '^^^')\n  //   return ele\n  // })\n  const {\n    default: _\n  } = await __webpack_require__.e(/*! import() | lodash */ \"vendors~lodash\").then(__webpack_require__.t.bind(null, /*! lodash */ \"./node_modules/_lodash@4.17.11@lodash/lodash.js\", 7));\n  const ele = document.createElement('div');\n  ele.innerHTML = _.join(['g', 's'], '^^^');\n  return ele;\n};\n\ndocument.addEventListener('click', () => {\n  getComponent().then(ele => {\n    document.body.appendChild(ele);\n  });\n});\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6211\\u662F\\u4E00\\u4E2Areact9992\");\n  }\n\n}\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBnZXRDb21wb25lbnQgPSBhc3luYyAoKSA9PiB7XG4gIC8vIOiOt+WPlmxvZGFzaO+8jOeEtuWQjui1i+WAvOe7mV/ov5nkuKrlj5jph49cbiAgLy8gcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOlwibG9kYXNoXCIqLydsb2Rhc2gnKS50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xuICAvLyAgIHZhciBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAvLyAgIGVsZS5pbm5lckhUTUwgPSBfLmpvaW4oWydnJywgJ3MnXSwgJ15eXicpXG4gIC8vICAgcmV0dXJuIGVsZVxuICAvLyB9KVxuXG4gIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6XCJsb2Rhc2hcIiAqLydsb2Rhc2gnKVxuICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGUuaW5uZXJIVE1MID0gXy5qb2luKFsnZycsICdzJ10sICdeXl4nKVxuICByZXR1cm4gZWxlXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRDb21wb25lbnQoKVxuICAgIC50aGVuKGVsZSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZSlcbiAgICB9KVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+5oiR5piv5LiA5LiqcmVhY3Q5OTkyPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RG9tLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTkE7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!../node_modules/_postcss-loader@3.0.0@postcss-loader/src!./index.scss */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./src/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ \"./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzPzkyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAyLjEuMUBjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi9ub2RlX21vZHVsZXMvX3Nhc3MtbG9hZGVyQDcuMS4wQHNhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIzLjFAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMi4xLjFAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vbm9kZV9tb2R1bGVzL19zYXNzLWxvYWRlckA3LjEuMEBzYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAyLjEuMUBjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi9ub2RlX21vZHVsZXMvX3Nhc3MtbG9hZGVyQDcuMS4wQHNhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ });