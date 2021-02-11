/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/burger.js":
/*!**********************************!*\
  !*** ./src/components/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const activateBurger = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar');
    const aside = document.querySelector('.aside');

    const toggleMenu = () => {
        document.body.classList.toggle('closed');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        aside.classList.toggle('active');
    }

    burger.addEventListener('click', toggleMenu);
    aside.addEventListener('click', toggleMenu)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateBurger);

/***/ }),

/***/ "./src/components/formFunctions.js":
/*!*****************************************!*\
  !*** ./src/components/formFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInputs": () => (/* binding */ getInputs),
/* harmony export */   "getValues": () => (/* binding */ getValues),
/* harmony export */   "handleSubmit": () => (/* binding */ handleSubmit),
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
const getInputs = (form, checked) => {
    return form.querySelectorAll(`input${checked ? ':checked' : ''}`);
}

const getValues = (...inputs) => {
    return inputs.map(input => input.value);
}

const handleSubmit = (props) => {
    props.event.preventDefault();
    const inputs = getInputs(props.form, props.checked);
    const values = getValues(...inputs);

    props.callback(values, {inputs, ...props});
}

const addEventListeners = ({elements, events, actionCreator, props}) => {
    elements.forEach((element, i) => {
        events.forEach(event => {
            element.addEventListener(event, actionCreator(props.forElemActions[i]));
        })
    })
}

const isNumeric = (num) =>!isNaN(num);


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
/* harmony import */ var _minMaxBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minMaxBlock */ "./src/components/minMaxBlock.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./src/components/timer.js");
/* harmony import */ var _testBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testBlock */ "./src/components/testBlock.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./burger */ "./src/components/burger.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");









window.addEventListener('DOMContentLoaded', () => {
    (0,_nameBlock__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_triangleBlock__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_wordsBlock__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_minMaxBlock__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_timer__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_testBlock__WEBPACK_IMPORTED_MODULE_5__.default)();
    (0,_burger__WEBPACK_IMPORTED_MODULE_6__.default)();
    (0,_navbar__WEBPACK_IMPORTED_MODULE_7__.default)();
})

/***/ }),

/***/ "./src/components/inputError.js":
/*!**************************************!*\
  !*** ./src/components/inputError.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkForTextError = (input) => {
    return input.previousElementSibling && input.previousElementSibling.classList.contains('error-text') ? input.previousElementSibling : null;
}

const addInputErrorValidation = ({input, error, errorCheck}) => {
    const textError = checkForTextError(input) || addTextError(input, error);

    return (e) => {
        if (errorCheck()) activateError(input, textError)
        else deactivateError(input, textError);
    }
}

const addTextError = (input, error) => {
    const textError = document.createElement('span');
    textError.classList.add('error-text');
    textError.innerHTML = error;
    textError.style.display = 'none';
    input.before(textError);
    return textError;
}

const activateError = (input, textError) => {
    input.classList.add('error-input');
    textError.style.display = 'inline-block'
}

const deactivateError = (input, textError) => {
    input.classList.remove('error-input');
    textError.style.display = 'none'
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addInputErrorValidation);


/***/ }),

/***/ "./src/components/minMaxBlock.js":
/*!***************************************!*\
  !*** ./src/components/minMaxBlock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions */ "./src/components/formFunctions.js");
/* harmony import */ var _inputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputError */ "./src/components/inputError.js");



const error = 'Введите число!';

const activateMinMaxBlock = () => {
    const minMaxForm = document.querySelector('.minmax-form');
    const inputs = (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.getInputs)(minMaxForm);

    minMaxForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input: inputs[0],
        error: 'Введите числа!',
        errorCheck: () => inputs[0].value.split(',').some(num => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(num) || !inputs[0].value.length)
    }))

    inputs.forEach(input => {
        input.addEventListener('input', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
            input,
            error: 'Введите числа!',
            errorCheck: () => input.value.split(',').some(num => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(num) || !input.value.length)
        }))
    });

    const findMinMax = (values, props) => {
        let [numValues] = values;
        if(numValues.split(',').some(num => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(num)) || !numValues.length) return;
        numValues = numValues.trim().split(',').map(num => +num);



        const {form} = props;
        const min = form.querySelector('.min');
        const max = form.querySelector('.max');



        min.innerHTML = `<span style="color: #bf5050">Min</span>: ${Math.min(...numValues)}`;
        max.innerHTML = `<span style="color: #70b35f">Max</span>: ${Math.max(...numValues)}`;
    }

    minMaxForm.addEventListener('submit', event => (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)({
        event,
        form: minMaxForm,
        callback: findMinMax
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateMinMaxBlock);

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
/* harmony import */ var _inputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputError */ "./src/components/inputError.js");




const setName = (name) => localStorage.setItem('name', name);
const getName = () => localStorage.getItem('name');
const deleteName = () => localStorage.removeItem('name');
const logoutFunc = (e, form, label, title) => {
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
const error = 'Имя не может быть пустым';

const activateNameBlock = () => {
    const nameForm = document.querySelector('.name-form');
    const input = nameForm.querySelector('input');

    startCheck(nameForm);
    input.addEventListener('input', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input,
        error,
        errorCheck: () => input.value.trim().length === 0
    }));
    nameForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input,
        error,
        errorCheck: () => input.value.trim().length === 0
    }));

    const getNameInput = (values, props) => {
        const {form} = props;
        const [input] = props.inputs;
        if (input.value.trim().length === 0) return;

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

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const activateNavbar = () => {
    const navbar = document.querySelector('.navbar');
    const links = navbar.querySelectorAll('.navbar-link');

    const selectButton = (link) => {
        disableActive();
        addActive(link);
    }

    const disableActive = () => {
        links.forEach(link => link.classList.remove('active'));
    }

    const addActive = (link) => link.classList.add('active');

    links.forEach(link => link.addEventListener('click', () => selectButton(link)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateNavbar);

/***/ }),

/***/ "./src/components/testBlock.js":
/*!*************************************!*\
  !*** ./src/components/testBlock.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions */ "./src/components/formFunctions.js");


const activateTest = () => {
    const testForm = document.querySelector('.test-form');
    const testTitle = document.querySelector('.test-title');

    const submitForm = (values, props) => {
        const rightAnswers = values.reduce((total, answer, i) => total + (answer.toLowerCase().trim() === props.rightAnswers[i] ? 1 : 0), 0);
        const againBtn = document.createElement('button');
        againBtn.classList.add('btn');
        againBtn.innerHTML = 'Пройти заново';
        againBtn.style.margin = '1em auto';

        let color;
        let additionalText;

        if (rightAnswers <= 3) {
            color = '#bf5050';
            additionalText = 'вам нужно подтянуть свои знания!'
        }
        else if (rightAnswers <= 7 ) {
            color = '#edd640';
            additionalText = 'не плохой результат!'
        }
        else {
            color = '#70b35f';
            additionalText = 'отличный результат!'
        }



        const resultTest = document.createElement('p');
        resultTest.innerHTML = `${rightAnswers} / 10, ${additionalText}`;
        resultTest.style.textAlign = 'center';
        resultTest.style.color = `${color}`;
        props.form.style.display = 'none';

        againBtn.addEventListener('click', ev => {
            props.form.style.display = 'block';
            resultTest.remove();
            againBtn.remove();
            props.inputs.forEach(input => input.checked = false);
        })

        props.title.innerHTML = 'Результат';
        props.title.insertAdjacentElement('afterend', resultTest);
        resultTest.insertAdjacentElement('afterend', againBtn);



    }

    testForm.addEventListener('submit', event => (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)({
        event,
        form: testForm,
        checked: true,
        callback:submitForm,
        title: testTitle,
        rightAnswers: [
            'max',
            'min',
            'date',
            'forinterval',
            'tripleeq',
            'ceil',
            'floor',
            'same',
            'no',
            'node'
        ]
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateTest);

/***/ }),

/***/ "./src/components/timer.js":
/*!*********************************!*\
  !*** ./src/components/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const activateTimer = () => {
    const timer = document.querySelector('.timer');
    const hrs = timer.querySelector('.hours');
    const min = timer.querySelector('.minutes');
    const sec = timer.querySelector('.seconds');

    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const resetBtn = document.querySelector('.reset-btn');

    let isStopped = false;
    let oldTimeStart;
    let firstTime = true;

    const start = () => {
        let time;
        if (firstTime) {
            time = Date.parse(new Date());
            oldTimeStart = time;
            firstTime = false;
        }
        else {
            time = Date.parse(new Date()) - oldTimeStart;
        }
        startBtn.style.display = 'none';
        stopBtn.style.display = 'flex';
        resetBtn.disabled = false;
        isStopped = false;
        const timeInterval = setInterval(() => updateTime(time, timeInterval), 1000);
    }

    const stop = () => {
        const h = +hrs.innerHTML,
            m = +min.innerHTML,
            s = +sec.innerHTML;
        isStopped = true;
        startBtn.style.display = 'flex';
        stopBtn.style.display = 'none';
        oldTimeStart = h * 1000 * 60 * 60 + m * 60 * 1000 + s * 1000
    }

    const reset = () => {
        isStopped = true;
        startBtn.style.display = 'flex';
        stopBtn.style.display = 'none';
        resetBtn.disabled = true;
        firstTime = true;
        hrs.innerHTML = `00`;
        min.innerHTML = `00`;
        sec.innerHTML = `00`;
    }

    const updateTime = (startTime, interval) => {
        if(isStopped) {
            clearInterval(interval);
            return;
        }

        const nowTime = Date.parse(new Date());

        const diff = nowTime - startTime;

        const s = getZero(Math.floor(diff / 1000 % 60));
        const m = getZero(Math.floor((diff / 1000  / 60) % 60));
        const h = getZero(Math.floor((diff / 1000 / 60 / 24) % 24));

        hrs.innerHTML = `${h}`;
        min.innerHTML = `${m}`;
        sec.innerHTML = `${s}`;
    }

    const getZero = (num) => num >= 0 && num < 10 ? `0${num}` : num;

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);
    resetBtn.addEventListener('click', reset);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateTimer);

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
/* harmony import */ var _inputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputError */ "./src/components/inputError.js");



const activateTriangleBlock = () => {
    const triangleForm = document.querySelector('.triangle-form');
    const triangleCanvas = document.querySelector('#triangle-canvas');
    const triangleCanvasContext = triangleCanvas.getContext('2d');

    const inputs = (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.getInputs)(triangleForm);
    const ERROR_NUM = 'Введи число, больше 0';

    triangleForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input: inputs[0],
        error: ERROR_NUM,
        errorCheck: () => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(inputs[0].value) || +inputs[0].value <= 0

    }))

    triangleForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input: inputs[1],
        error: ERROR_NUM,
        errorCheck: () => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(inputs[1].value) || +inputs[1].value <= 0

    }))

    ;(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)({
        elements: inputs,
        events: ['input'],
        actionCreator: _inputError__WEBPACK_IMPORTED_MODULE_1__.default,
        props: {
            forElemActions: [{
                input: inputs[0],
                error: ERROR_NUM,
                errorCheck: () => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(inputs[0].value) || +inputs[0].value <= 0

            },
                {
                    input: inputs[1],
                    error: ERROR_NUM,
                    errorCheck: () => !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(inputs[1].value) || +inputs[1].value <= 0
                }]


        }
    })

    const calculateTriangleArea = (values, props) => {
        let [height, length] = values.map(value => +value);
        if (!(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(height) || !(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(length) || height <= 0 || length <= 0) return;
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
/* harmony import */ var _inputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputError */ "./src/components/inputError.js");



const activateWordsBlock = () => {
    const wordsForm = document.querySelector('.words-form');
    const inputs = (0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.getInputs)(wordsForm);
    const ERROR = 'Введите слово';

    wordsForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input: inputs[0],
        error: ERROR,
        errorCheck: () => inputs[0].value.length === 0
    }))
    wordsForm.addEventListener('submit', (0,_inputError__WEBPACK_IMPORTED_MODULE_1__.default)({
        input: inputs[1],
        error: ERROR,
        errorCheck: () => inputs[1].value.length === 0
    }))

    ;(0,_formFunctions__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)({
        elements: inputs,
        events: ['input'],
        actionCreator: _inputError__WEBPACK_IMPORTED_MODULE_1__.default,
        props: {
            forElemActions: [{
                input: inputs[0],
                error: ERROR,
                errorCheck: () => inputs[0].value.length === 0

            },
                {
                    input: inputs[1],
                    error: ERROR,
                    errorCheck: () => inputs[0].value.length === 0
                }]
        }});

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