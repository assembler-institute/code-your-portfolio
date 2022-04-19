/*Pipe Mario*/

const pipe = document.getElementById("pipe");

pipe.addEventListener("mouseover", changeMarioDisplay);
pipe.addEventListener("mouseout", changeMarioDisplay);

function changeMarioDisplay() {
  const marioBehindPipe = document.getElementById("marioBehindPipe");
  marioBehindPipe.classList.toggle("show-mario");
}

/* FETCH DATA FROM API */

async function fetchNews(obj) {
  
  let options = {
    method: "GET",
    headers: {
      "x-api-key": "5yIvBgJxKwX0ZSKuxMcK5ZVXXith43l-SNUXXhTiaU4"
    }
  }
  
  fetch("https://api.newscatcherapi.com/v2/search?q='nintendo + mario'&page_size=6&lang=es", options)
    .then(response => response.json())
    .then(data => obj(data.articles))
    .catch(error => console.log(error));
  }

//   function fetchNews(obj) {

//   let options = {
//     method: "GET",
//     headers: {
//       "X-Api-Key": "eb6297ad56ac4b898639f7b92a7a0243",
//   }
// }

//   fetch("https://newsapi.org/v2/everything?q='nintendo + mario'&pageSize=6&sortBy=publishedAt&language=es", options)
//   .then(response => response.json())
//   .then(data => obj(data.articles))
//   .catch(error => console.log(error));
// }

  fetchNews((data) => { // here we pass the data to the function
    let jsondata = data;
    console.log(jsondata);
    const newsContainer = document.getElementById("marioNews");
    Object.keys(jsondata).map(function(key, index) {
      if (index < 6) {
        let news = jsondata[index];
        let newsTitle = news.title;
        // let summary = news.summary;
        let link = news.link || news.url;
        let newsImage = news.media || news.urlToImage;
        newsContainer.innerHTML +=
        `<figure>
        <iframe width="auto" height="315" src="${newsImage}"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <figcaption>${newsTitle}</figcaption>
        ${link}
      </figure>`;
      }
    });
  });

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
