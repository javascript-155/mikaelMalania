// js event listeners

let submitBtn = document.getElementById("myBtn");

submitBtn.addEventListener("click", buttonClick);

function buttonClick() {
    document.getElementById("result").innerHTML = "Button clicked";
}