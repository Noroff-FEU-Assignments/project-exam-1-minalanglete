const carousel = document.querySelector(".container");

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

var sectionIndex = 0;

arrowLeft.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    carousel.style.transform = "translate(" + (sectionIndex) * -20 + "%)";

});

arrowRight.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
    carousel.style.transform = "translate(" + (sectionIndex) * -20 + "%)";

});