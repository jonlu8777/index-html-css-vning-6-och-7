//index.js

const unActive = document.getElementsByClassName("unActive");
for (let x = 0; x < unActive.length; x++) {
    const item = unActive[x];
    item.addEventListener(
        "mouseover", over);
    item.addEventListener(
        "mouseout", out);
    function over() {
        item.style.backgroundColor = "rgba(154, 58, 13, 0.831)";
    }
    function out() {
        item.style.backgroundColor = "";
    }
}