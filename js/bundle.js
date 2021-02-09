/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/formFunctions.js":
/*!*****************************************!*\
  !*** ./src/components/formFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInputs": () => (/* binding */ getInputs),
/* harmony export */   "getValues": () => (/* binding */ getValues),
/* harmony export */   "handleSubmit": () => (/* binding */ handleSubmit)
/* harmony export */ });
const getInputs = (form) => {
    return form.querySelectorAll(`input`);
}

const getValues = (...inputs) => {
    return inputs.map(input => input.value);
}

const handleSubmit = (props) => {
    props.event.preventDefault();
    const inputs = getInputs(props.form);
    const values = getValues(...inputs);

    props.callback(values, {...props});
}

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triangleBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangleBlock */ "./src/components/triangleBlock.js");
/* harmony import */ var _nameBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nameBlock */ "./src/components/nameBlock.js");
/* harmony import */ var _wordsBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordsBlock */ "./src/components/wordsBlock.js");




window.addEventListener('DOMContentLoaded', () => {

    (0,_nameBlock__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_triangleBlock__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_wordsBlock__WEBPACK_IMPORTED_MODULE_2__.default)();




    const minMaxForm = document.querySelector('.minmax-form');

    const testForm = document.querySelector('.test-form');


})

/***/ }),

/***/ "./src/components/nameBlock.js":
/*!*************************************!*\
  !*** ./src/components/nameBlock.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions */ "./src/components/formFunctions.js");


const setName = (name) => localStorage.setItem('name', name);
const getName = () => localStorage.getItem('name');
const deleteName = () => localStorage.removeItem('name');
const logoutFunc = (e, form, label, title) => {
    console.log(form);
    const loginContainer = document.querySelector('.login-container');
    e.preventDefault();
    deleteName();
    loginContainer.remove();
    form.style.display = 'grid';
    label.style.display = 'inline-block';
    title.innerHTML = `Привет, дорогой друг!`;
}
const activateLogin = (form, label, title) => {
    const logoContainer = document.querySelector('.logo-container');
    const login = document.createElement('div');



    login.classList.add('login-container')
    login.innerHTML = `
        <h2 class="login">${getName()}</h2>
        <svg class="logout">
            <use xlink:href="./src/assets/img/icons.svg#logout"></use>
        </svg>
        `;
    logoContainer.append(login);

    const logout = login.querySelector('.logout');
    logout.addEventListener('click', e => logoutFunc(e, form, label, title))
}
const startCheck = (form) => {
    if (getName()) {
        const formParent = form.parentElement;
        const title = formParent.querySelector('.title');
        const label = formParent.querySelector('label');

        activateLogin(form, label, title);

        form.style.display = 'none';
        label.style.display = 'none';
        title.innerHTML = `Привет, ${getName()}`;

        return true;
    }
    return false;
}

const activateNameBlock = () => {
    const nameForm = document.querySelector('.name-form');

    startCheck(nameForm);

    const getNameInput = (values, props) => {
        const {form} = props;

        if (!startCheck(form)) {
            const [name] = values;
            setName(name);

            const formParent = form.parentElement;
            const title = formParent.querySelector('.title');
            const label = formParent.querySelector('label');
            const input = form.querySelector('input');
            input.value = '';

            form.style.display = 'none';
            label.style.display = 'none';
            activateLogin(form, label, title);

            title.innerHTML = `Привет, ${getName()}`;
        }

    }

    nameForm.addEventListener('submit', event => (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)({
        event,
        form: nameForm,
        callback: getNameInput
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateNameBlock);

/***/ }),

/***/ "./src/components/triangleBlock.js":
/*!*****************************************!*\
  !*** ./src/components/triangleBlock.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions */ "./src/components/formFunctions.js");


const activateTriangleBlock = () => {
    const triangleForm = document.querySelector('.triangle-form');
    const triangleCanvas = document.querySelector('#triangle-canvas');
    const triangleCanvasContext = triangleCanvas.getContext('2d');

    const calculateTriangleArea = (values, props) => {
        let [height, length] = values.map(value => +value);
        const area = height * length / 2;
        const {ctx, width = 2, fill = '#333', canvasWidth = 100, canvasHeight = 100, form} = props;

        while (height < canvasHeight / 1.2 || length < canvasWidth / 1.2) {
            height *= 1.2;
            length *= 1.2;
        }
        while (height > canvasHeight / 1.2 || length > canvasWidth / 1.2) {
            height /= 1.2;
            length /= 1.2;
        }

        const dx = canvasWidth / 2 - length >= canvasWidth ? canvasWidth : canvasWidth / 2 - length;
        const dy = canvasHeight / 2 + height >= canvasHeight ? canvasHeight : canvasHeight / 2 + height;

        const answer = form.querySelector('.triangle-answer') ? form.querySelector('.triangle-answer') : document.createElement('span');
        answer.classList.add('text');
        answer.classList.add('triangle-answer');
        answer.innerHTML = `Ответ: ${area}`;
        form.append(answer);

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.lineWidth = width;
        ctx.fillStyle = fill;

        ctx.beginPath();
        ctx.moveTo(dx, dy);
        ctx.lineTo(dx, dy - height);
        ctx.lineTo(dx + length, dy);

        ctx.fill();
    }

    triangleForm.addEventListener('submit', evt => (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)({
        form: triangleForm,
        event: evt,
        callback: calculateTriangleArea,
        ctx: triangleCanvasContext,
        width: 3,
        fill: '#546dd8',
        canvasWidth: triangleCanvas.clientWidth,
        canvasHeight: triangleCanvas.clientHeight,
        scale: 10
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateTriangleBlock);

/***/ }),

/***/ "./src/components/wordsBlock.js":
/*!**************************************!*\
  !*** ./src/components/wordsBlock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions */ "./src/components/formFunctions.js");


const activateWordsBlock = () => {
    const wordsForm = document.querySelector('.words-form');

    const checkForEquals = (values, props) => {
        const [first, second] = values;
        const answer = props.form.querySelector('p');

        answer.innerHTML = `Равны: <span style="color: ${first.trim().length === second.trim().length ? '#70b35f' : '#bf5050'}">${first.trim().length === second.trim().length}</span>`
    }

    wordsForm.addEventListener('submit', (event) => (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)({
        event,
        form: wordsForm,
        callback: checkForEquals
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateWordsBlock);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/components/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map