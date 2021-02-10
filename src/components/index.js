import activateTriangleBlock from "./triangleBlock";
import activateNameBlock from "./nameBlock";
import activateWordsBlock from "./wordsBlock";
import activateMinMaxBlock from "./minMaxBlock";
import activateTimer from "./timer";
import activateTest from "./testBlock";
import activateBurger from "./burger";
import activateNavbar from "./navbar";

window.addEventListener('DOMContentLoaded', () => {
    activateNameBlock();
    activateTriangleBlock();
    activateWordsBlock();
    activateMinMaxBlock();
    activateTimer();
    activateTest();
    activateBurger();
    activateNavbar();
})