document.addEventListener("DOMContentLoaded", function(){

  var circle = document.querySelectorAll(".circle");
  var result = document.querySelector(".result");
  var popup = document.querySelector(".popup");
  var board = document.querySelector(".board");
  var reload = document.getElementById("reload");
  var start = document.getElementById("start");
  var welcome = document.querySelector(".welcome");

  start.addEventListener("click", function(){
    welcome.style.display="none";
  })

  for(let i=0; i<circle.length; i++){
    var score = circle.length;
    var winner = Math.floor(Math.random() * (circle.length - 0) + 0);
    circle[i].addEventListener("click", function(){
      score = score - 1;
      this.classList.toggle("hide");
      if (i == winner) {
        popup.style.display="flex";
        //board.style.display="none";
        result.innerText="Your score is " + score;
      } if ( i != winner) {

      }

    })

  }
  reload.addEventListener("click", function(){
    location.reload();

  })


});
