const slider = document.querySelector(".panel");
const panels = document.querySelectorAll(".panel li");
const len = panels.length - 1;
let num = 0;
let timer = null;

const interval = 5000;

startRolling();
function startRolling() {
    active(num);
    timer = setInterval(rolling, interval);
}
function active(index) {
    slider.append(slider.firstElementChild);
    num = index;
}
function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    active(num);
}
