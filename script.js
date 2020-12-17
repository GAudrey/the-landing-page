// let objDays = [
//     {
//         day: 'Lundi',
//         value:1
//     },
//     {
//         day: 'Mardi',
//         value:2
//     },
//     {
//         day: 'Mercredi',
//         value:3
//     },
//     {
//         day: 'Jeudi',
//         value:4
//     },
//     {
//         day: 'Vendredi',
//         value:5
//     },
//     {
//         day: 'Samedi',
//         value:6
//     },
//     {
//         day: 'Dimanche',
//         value:0
//     },
// ];

// let objMonths = [
//     {
//         month: 'janvier',
//         value:0
//     },
//     {
//         month: 'février',
//         value:1
//     },
//     {
//         month: 'mars',
//         value:2
//     },
//     {
//         month: 'avril',
//         value:3
//     },
//     {
//         month: 'mai',
//         value:4
//     },
//     {
//         month: 'juin',
//         value:5
//     },
//     {
//         month: 'juillet',
//         value:6
//     },
//     {
//         month: 'août',
//         value:7
//     },
//     {
//         month: 'septembre',
//         value:8
//     },
//     {
//         month: 'octobre',
//         value:9
//     },
//     {
//         month: 'novembre',
//         value:10
//     },
//     {
//         month: 'décembre',
//         value:11
//     },
// ];

const dateSection = document.getElementById('date-section');
const timeSection = document.getElementById('time-section');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let now;

function date(){
    now = new Date();
    let currentDate = now.toLocaleDateString(undefined, options);
    dateSection.textContent = currentDate;

    setTimeout(date, 1000);
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

fetch('https://picsum.photos/v2/list?limit=30')
.then(response => response.json())
.then(images => {
    function randomImg(){
        let i = Math.floor(Math.random() * images.length);
        document.body.style.backgroundImage = `url(${images[i].download_url})`;
    }
    randomImg();
    setInterval(randomImg, 5000)
})