for (var i = 0; i < 7; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", play);

  function play() {
    var buttonClicked = this.innerHTML;
    switch1 (buttonClicked);
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  }
}
function switch1 (buttonClicked) {
switch (buttonClicked) {
  case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  default:
    console.log(buttonClicked);
}
}

document.addEventListener("keydown", function (event1) {
console.log(event1.key);
var buttonClicked = event1.key;
switch1 (buttonClicked);
}
)
// document.addEventListener("keydown", event1);
// function (event1) {
//
// console.log(event1.key);
// var pressedKey = event1.key;
//     switch (event1.key) {
//           case "w":
//        var crash = new Audio("sounds/crash.mp3");
//        crash.play();
//        break;
//      case "a":
//        var kick = new Audio("sounds/kick-bass.mp3");
//        kick.play();
//        break;
//
//      case "s":
//        var snare = new Audio("sounds/snare.mp3");
//        snare.play();
//        break;
//
//      case "d":
//        var tom1 = new Audio("sounds/tom-1.mp3");
//        tom1.play();
//        break;
//      case "j":
//        var tom2 = new Audio("sounds/tom-2.mp3");
//        tom2.play();
//        break;
//      case "k":
//        var tom3 = new Audio("sounds/tom-3.mp3");
//        tom3.play();
//        break;
//      case "l":
//        var tom4 = new Audio("sounds/tom-4.mp3");
//        tom4.play();
//        break;
//      default:
//        console.log(buttonClicked);
//    }



// document.querySelectorAll("button")[0].addEventListener("click", function () {alert("Clicked");});
