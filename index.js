var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomNumber+".png";
var randomImageSrc = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc);

var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSrc2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);

if(randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player1 wins!";
}
if(randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player2 wins!";
}
if(randomNumber === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
