const hour = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const result = document.querySelector('#result');


const resultX = () => {
    const cornerMinutes = 360 - minutes.value * 6;
    const cornerHour = 360 - hour.value * 30;
    const y = (minutes.value / 60) * 30;
    let angle = (cornerHour - cornerMinutes - y);
    if (angle > 180) {
        angle = 360 - (cornerHour - cornerMinutes - y)  
    }
    result.textContent = `${angle}`
};

minutes.addEventListener('change', resultX);
hour.addEventListener('change', resultX);

