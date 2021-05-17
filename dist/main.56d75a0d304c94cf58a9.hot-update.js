/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiploma"]("main",{

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar form = function form() {\n  var form = document.querySelector('.modal-callback'),\n      inputs = form.querySelectorAll('input[type=\"text\"]');\n  var message = {\n    loading: 'идет отправка',\n    success: 'отправлено',\n    failure: 'ошибка'\n  };\n  var statusMessage = document.createElement('div');\n\n  var postData = function postData(formData) {\n    return fetch('server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n  };\n\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    statusMessage.classList.add('status');\n    form.appendChild(statusMessage);\n    var formData = new FormData(form);\n    statusMessage.textContent = message.loading;\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (res) {\n      if (res.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = message.success;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = message.failure;\n      console.error(error);\n    })[\"finally\"](function () {\n      inputs.forEach(function (input) {\n        return input.value = '';\n      });\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 5000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://Diploma/./src/modules/form.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dbef97259f6f726ce8e")
/******/ })();
/******/ 
/******/ }
);