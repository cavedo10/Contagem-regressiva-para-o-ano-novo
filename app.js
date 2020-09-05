const getSeconds = document.querySelector("#seconds");
const getMinutes = document.querySelector("#minutes");
const getHours = document.querySelector("#hours");
const getDays = document.querySelector("#days");
const getYears = document.querySelector("#year");
const spinnerLoading = document.querySelector("#loading");
const countdown = document.querySelector(".countdown");

const nextYear = new Date().getFullYear() + 1;
const newYear = new Date(`January 01 ${nextYear} 00:00:00`);

setTimeout(() => {
    spinnerLoading.remove();
    countdown.classList.replace("countdown", "countdowncurrent");
}, 1000);

setInterval(getTime, 1000);



//obtem diferença entre o ano atual e o proximo ano em milessegundos
function yearDif(currentYear, nextYear){
    return Math.floor(nextYear - currentYear);
};

// atribui os valores aos elementos do DOM
const getTimeUnit = unit => unit < 10 ? "0" + unit : unit;
function pushtime(seconds, minutes, hours, days){
    getDays.textContent = getTimeUnit(days);
    getHours.textContent = getTimeUnit(hours);
    getMinutes.textContent = getTimeUnit(minutes);
    getSeconds.textContent = getTimeUnit(seconds);
    getYears.textContent = nextYear;
};

// Obtem os contadores
function getTime(){
    const currentYear = new Date();
    const yearDiff = yearDif(currentYear, newYear);
    const seconds = Math.floor(yearDiff /1000) % 60;
    const minutes = Math.floor(yearDiff / 1000 / 60) %60;
    const hours = Math.floor(yearDiff/1000/60/60) %24;
    const days = Math.floor(yearDiff/1000/60/60/24);
    
    pushtime(seconds, minutes, hours, days);
};



