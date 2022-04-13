const pipe = document.getElementById("pipe")
  
pipe.addEventListener("mouseover", changeMarioDisplay)
pipe.addEventListener("mouseout", changeMarioDisplay)

function changeMarioDisplay() {
  const marioBehindPipe = document.getElementById("marioBehindPipe")
  marioBehindPipe.classList.toggle("show-mario")
}