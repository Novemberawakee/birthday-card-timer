function birthdayCard() {
    const birthdayDate = new Date("February 13, 2023 00:00");
    const now = new Date();
    const diff = birthdayDate - now;

    const msInSec = 1000;
    const msInMin = 60 * 1000;
    const msInHr = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHr);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHr)/msInMin);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMin)/msInSec);
    document.querySelector(".seconds").textContent = displaySecond;

    if (displayDay === 1) {
        document.querySelector(".dd").textContent = "DAY";
    }
    else {
        document.querySelector(".dd").textContent = "DAYS";
    }

    if (displayHour === 1) {
        document.querySelector(".hh").textContent = "HOUR";
    }
    else {
        document.querySelector(".hh").textContent = "HOURS";
    }

    if (displayMinute === 1) {
        document.querySelector(".mm").textContent = "MINUTE";
    }
    else {
        document.querySelector(".mm").textContent = "MINUTES";
    }

    if (displaySecond === 1) {
        document.querySelector(".ss").textContent = "SECOND";
    }
    else {
        document.querySelector(".ss").textContent = "SECONDS";
    }

    if(diff <= 0 ) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        happyBirthday();
        let song = new Audio("bd-song.mp3");
        song.play();
        happyBirthday();
    }
}

let timerID = setInterval(birthdayCard, 1000);
function happyBirthday() {
    const newBackground = document.querySelector("body");
    newBackground.classList.add("newBackground");
    const heading = document.querySelector("h1");
    heading.textContent = "HAPPY BIRTHDAY SISTER!!!";
    heading.classList.add("headingNew")
    const showUp = document.querySelector(".hidden");
    showUp.classList.add("showUp");
    const hide = document.querySelector(".container");
    hide.classList.add("hide");
}