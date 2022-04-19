/*Pipe Mario*/

const pipe = document.getElementById("pipe");

const clickMe = document.getElementById("clickMe");

pipe.addEventListener("mouseover", changeMarioDisplay);
pipe.addEventListener("mouseout", changeMarioDisplay);
clickMe.addEventListener("click", fetchFunction);

function changeMarioDisplay() {
  const marioBehindPipe = document.getElementById("marioBehindPipe");
  marioBehindPipe.classList.toggle("show-mario");
}

/* FETCH DATA FROM API */

function fetchFunction() {
  console.log("Hola");
  //TODO Noticias
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

/* Copyright year */

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

/*Burger menu*/
// selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".navbar").classList.toggle("is_active");
  event.preventDefault();
}
// event
menu.addEventListener("click", toggleMenu, false);

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  alert("Your message has been sent to Mario");
}
