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
  fetch("http://api.mediastack.com/v1/news?access_key=ec41cb210a6b426bd03c4f44f9f7fd03&keywords=mario%20nintendo&countries=es")
    .then((response) => response.json())
    .then((json) => {
      const news = json.data;
      console.log(news);
      news.forEach((element) => {
        const newsContainer = document.getElementById("marioNews");
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `<h2>${element.title}</h2>
        <p>${element.description}</p>
        <p>${element.url}</p>
        <p>${element.published_at}</p>
        <p>${element.source}</p>
        <p>${element.author}</p>
        <p>${element.image}</p>
        <p>${element.image_url}</p>
        `;
        newsContainer.appendChild(newsItem);
      });
    });
  }

console.log(fetchFunction());

/* Copyright year */

document.getElementById(
  "copyright-year"
).textContent = new Date().getFullYear();

/*Burger menu*/
/*
$(".burger").click(function() {
    $(this).toggleClass('active');
    $("ul.menu li").slideToggle('fast');
})

$(window).resize(function() {
    if ($(window).width() > 650) {
        $('ul.menu li').removeAttr('style');
    }
})*/


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  alert("Your message has been sent to Mario");
}
