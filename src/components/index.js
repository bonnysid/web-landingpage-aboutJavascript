import activateTriangleBlock from "./triangleBlock";
import activateNameBlock from "./nameBlock";
import activateWordsBlock from "./wordsBlock";
import activateMinMaxBlock from "./minMaxBlock";
import activateTimer from "./timer";

window.addEventListener('DOMContentLoaded', () => {

    activateNameBlock();
    activateTriangleBlock();
    activateWordsBlock();
    activateMinMaxBlock();
    activateTimer();
    const testForm = document.querySelector('.test-form');
})