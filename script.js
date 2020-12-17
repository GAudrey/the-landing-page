const dateSection = document.getElementById('date-section');
const timeSection = document.getElementById('time-section');

let now;

function date(){
    now = new Date();
    let day = now.getDay();
    let currentDay;
    let date = now.getDate();
    let month = now.getMonth();
    let currentMonth;
    let fullyear = now.getFullYear();

    for (let d of objDays){
        if (day == d.value){
            currentDay = `${d.day}`;
        }
    }
    for (let m of objMonths){
        if (month == m.value){
            currentMonth = `${m.month}`;
        }
    }

    dateSection.textContent = `${currentDay}, ${date} ${currentMonth} ${fullyear}`
}
date();

function twoDigit(n){
    if (n < 10){
        return "0" + n;
    }
    return n;
}

function clock(){
    now = new Date();
    let hours = twoDigit(now.getHours());
    let minutes = twoDigit(now.getMinutes());
    let seconds = twoDigit(now.getSeconds());

    timeSection.textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(clock, 1000)
}
clock();