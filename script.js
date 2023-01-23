/* 
Pipe Mario

Script encargado de que la pequeña animación del separador funcione.
*/

const pipe = document.getElementById("pipe");

pipe.addEventListener("mouseover", changeMarioDisplay);
pipe.addEventListener("mouseout", changeMarioDisplay);

function changeMarioDisplay() {
  const marioBehindPipe = document.getElementById("marioBehindPipe");
  marioBehindPipe.classList.toggle("show-mario");
}

/* FETCH DATA FROM API */

// option 1
function fetchNews(obj) {

  let options = {
    method: "GET",
    headers: {
      "x-api-key": "jZLWQ8iNkSZ4ev8ZiQPBmipPMQihSxxAQz8pshUehIQ"
    }
  }

  fetch("https://api.newscatcherapi.com/v2/search?q='nintendo + mario'&page_size=8&lang=es", options)
    .then(response => response.json())
    .then(data => obj(data.articles))
    .catch(error => console.log(error));
}

// option 2 (in case option 1 doesn't work)
// function fetchNews(obj) {

//   let options = {
//     method: "GET",
//     headers: {
//       "X-Api-Key": "eb6297ad56ac4b898639f7b92a7a0243",
//   }
// }

//   fetch("https://newsapi.org/v2/everything?q='nintendo + mario'&pageSize=9&sortBy=publishedAt&language=es", options)
//   .then(response => response.json())
//   .then(data => obj(data.articles))
//   .catch(error => console.log(error));
// }

// Here we pass the arguments to the fetchNews function
fetchNews((data) => { // here we pass the data to the function
  let jsondata = data;
  console.log(jsondata);
  const newsContainer = document.getElementById("marioNews");
  Object.keys(jsondata).map(function (key) {
    let news = jsondata[key];
    let newsTitle = news.title;
    // let summary = news.summary;
    let link = news.link || news.url;
    let newsImage = news.media || news.urlToImage;
    newsContainer.innerHTML += `
        <div class="container-news__image">
          <a href="${link}" target="_blank">
            <img src="${newsImage}" alt="${newsTitle}">
            <p>${newsTitle}</p>
          </a>
        </div>
        `;
  });
});

/*Burger menu*/
// Selector
var menu = document.querySelector(".hamburger");

// Method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".navbar").classList.toggle("is_active");
  event.preventDefault();
}

// Event
menu.addEventListener("click", toggleMenu, false);

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitForm);

/*
Function para el mensaje de feedback para saber que tu mensaje ha sido enviado.
*/
function submitForm(e) {
  e.preventDefault();
  alert("Your message has been sent to Mario");
}

/* Copyright year */

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();
