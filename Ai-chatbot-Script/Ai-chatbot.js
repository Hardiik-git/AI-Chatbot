// Accordian Js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Ends

// Animation jS..
new WOW().init();

// ENds

// NavbAr Responsive

let navBtn = document.querySelector(".btn_stl_nav");
let navbtnClick = "none";

navBtn.addEventListener("click", () => {
  if (navbtnClick === "none") {
    navbtnClick = "block";
    document.querySelector(".nav_items").style.display = "block";
    document.querySelector(".nav_items").style.animation = "flipInY 1s";
  } else {
    navbtnClick = "none";
    document.querySelector(".nav_items").style.display = "none";
  }
});
