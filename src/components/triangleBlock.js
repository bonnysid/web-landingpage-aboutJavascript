import {handleSubmit} from "./formFunctions";

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

    triangleForm.addEventListener('submit', evt => handleSubmit(evt, triangleForm, calculateTriangleArea, {
        ctx: triangleCanvasContext,
        width: 3,
        fill: '#546dd8',
        canvasWidth: triangleCanvas.clientWidth,
        canvasHeight: triangleCanvas.clientHeight,
        scale: 10
    }))
}

export default activateTriangleBlock;