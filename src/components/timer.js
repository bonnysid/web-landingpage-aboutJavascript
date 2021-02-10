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

export default activateTimer;