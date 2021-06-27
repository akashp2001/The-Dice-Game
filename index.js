function onclicking() {

  // for image one

  randomNumber1 = Math.ceil(Math.random() * 6);

  var randomImage1="images/dice" + randomNumber1+ ".png";

  //
  // if (randomNumber1 === 1) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice1.png");
  // } else if (randomNumber1 === 2) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice2.png");
  // } else if (randomNumber1 === 3) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice3.png");
  // } else if (randomNumber1 === 4) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice4.png");
  // } else if (randomNumber1 === 5) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice5.png");
  // } else if (randomNumber1 === 6) {
  //   document.querySelector(".imga").setAttribute("src", "images/dice6.png");
  // }
  //

  //for image two


  //
  // if (randomNumber2 === 1) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice1.png");
  // } else if (randomNumber2 === 2) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice2.png");
  // } else if (randomNumber2 === 3) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice3.png");
  // } else if (randomNumber2 === 4) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice4.png");
  // } else if (randomNumber2 === 5) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice5.png");
  // } else if (randomNumber2 === 6) {
  //   document.querySelector(".imgb").setAttribute("src", "images/dice6.png");
  // }


randomNumber2 = Math.ceil(Math.random() * 6);

var randomImage2="images/dice"+randomNumber2+".png";

document.querySelector(".imga").setAttribute("src",randomImage1);

document.querySelector(".imgb").setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").style.fontSize = "2.5rem";
    document.querySelector("h1").innerHTML = "Both the players are winners";
  }

}
