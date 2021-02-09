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

    const start = (startTime, oldTime = 0) => {
        oldTimeStart = startTime;
        time = startTime + oldTime;
        startBtn.style.display = 'none';
        stopBtn.style.display = 'flex';
        resetBtn.disabled = false;
        isStopped = false;
        const timeInterval = setInterval(() => updateTime(startTime, timeInterval), 1000);
    }

    const stop = () => {
        isStopped = true;
        oldTimeStart = oldTimeStart -
        startBtn.style.display = 'flex';
        stopBtn.style.display = 'none';
    }

    const reset = () => {
        isStopped = true;
        startBtn.style.display = 'flex';
        stopBtn.style.display = 'none';
        hrs.innerHTML = `00`;
        min.innerHTML = `00`;
        sec.innerHTML = `00`;
    }

    const updateTime = (startTime, interval) => {
        if(isStopped) clearInterval(interval);

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

    startBtn.addEventListener('click', () => {
        start(Date.parse(new Date()));
    });
    stopBtn.addEventListener('click', stop);
    resetBtn.addEventListener('click', reset);
}

export default activateTimer;