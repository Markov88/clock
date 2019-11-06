const hour = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const result = document.querySelector('#result');
const clockMinutes = document.querySelector('.minutes');
const clockHour = document.querySelector('.hour');



let resultX = () => {
    if (hour.value > 0 && hour.value <= 12 && minutes.value > 0 && minutes.value <= 60) {

        const cornerMinutes = 360 - minutes.value * 6;
        let cornerHour = 360 - hour.value * 30;
        const y = (minutes.value / 60) * 30;
        let angle;

        if (hour.value === 12) {
            cornerHour = 0
        }

        if (cornerHour -y> cornerMinutes) {
            angle = cornerHour - cornerMinutes - y;
        } else if (cornerMinutes > cornerHour-y) {
            angle = cornerMinutes - cornerHour + y;
        } else {
            angle = 0;
        }
        if (angle > 180) {
            angle = 360 - angle;
        }
        if (angle < 0) {
            angle = Math.abs(angle);
        }

        clockHour.style.transform = `rotate(${hour.value * 30 + y}deg)`
        clockMinutes.style.transform = `rotate(${minutes.value * 6}deg)`
        result.textContent = `${angle}`;
    }

};



minutes.addEventListener('change', resultX);
hour.addEventListener('change', resultX);

