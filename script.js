//hamburger menu icon
const menuBtn = document.querySelector(".hamburger");
const menuItems = document.querySelector(".hamburgerItems");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  menuItems.classList.toggle("is-active");
});

//target all menu buttons
const page1hambtn = document.querySelector("#hamMenuBtn1");
const page2hambtn = document.querySelector("#hamMenuBtn2");
const page4hambtn = document.querySelector("#hamMenuBtn4");

const page1mainbtn = document.querySelector("#mainMenuBtn1");
const page2mainbtn = document.querySelector("#mainMenuBtn2");
const page4mainbtn = document.querySelector("#mainMenuBtn4");

//target pages
const indexPage = document.querySelector("#indexContainer");
const leaguePage = document.querySelector("#leagueContainer");
const penaltyPage = document.querySelector("#penaltyContainer");

//hide all pages funtion
function hideAll() {
  indexPage.classList.remove("show");
  leaguePage.classList.remove("show");
  penaltyPage.classList.remove("show");
}

function show(pageNo) {
  //function to show selected page no
  hideAll();
  //show the page
  if (pageNo == 1) indexPage.classList.add("show");
  if (pageNo == 2) leaguePage.classList.add("show");
  if (pageNo == 4) penaltyPage.classList.add("show");
}

//hide all other
hideAll();
show(2);

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1hambtn.addEventListener("click", function () {
  show(1);
});
page2hambtn.addEventListener("click", function () {
  show(2);
});
page4hambtn.addEventListener("click", function () {
  show(4);
});

page1mainbtn.addEventListener("click", function () {
  show(1);
});
page2mainbtn.addEventListener("click", function () {
  show(2);
});
page4mainbtn.addEventListener("click", function () {
  show(4);
});

//league slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
  console.log("PRESSED");
}

/*function showDivs(n) {
  var i = 0;
  var imagesList = document.querySelectorAll("#leagueImages");

  imagesList.forEach(image => {
    if (n > imagesList.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = imagesList.length;
    }
    if(i!=n){
      image.style.display = "none";
      i++;
    }
    else{
      image.style.display = "flex";
    }
  })
}*/

document.querySelector("#leftButton").addEventListener("click", plusDivs(-1));
document.querySelector("#rightButton").addEventListener("click", plusDivs(+1));

//penalty game

//target game elements
const ball = document.getElementById("ball");
const gk = document.getElementById("goalkeeper");
const shootBtn = document.getElementById("shootButton");
const resetBtn = document.getElementById("resetButton");

//function that resets ball
function resetBall() {
  ball.style.right = "1150px";
}

//function to update ball css as well as display text
function moveBall(ballX, ballY) {
  ball.style.right = ballX + "%"; //set right property to ball x variable
  ball.style.top = ballY + "px"; //set top property to ball x variable
}

//to move goalkeeper
function moveGK(randY) {
  gk.style.top = "850px";
  gk.style.right = randY + "%";
}

//to shoot ball
function shootBall() {
  let randY = Math.floor(Math.random * 60) + 20; //range of 20 - 60
  moveBall(currX, 850); //moves ball forward at the
  moveGK(randY);
  console.log("shoot!");
}

//init ball moving var and bool
var moveBallX = 0;
var movingRight = true;
var currX;

//repeatedly call all the functions
function gameLoop() {
  moveBall(moveBallX, 1150);
  if (moveBallX == 10 && movingRight == true) {
    movingRight = false;
    moveBallX = moveBallX + 1;
  } else if (moveBallX == 80 && movingRight == false) {
    movingRight = true;
    moveBallX = moveBallX - 1;
  }
  currX = moveBallX;
}

//event listener for shoot and reset button
shootBtn.addEventListener("click", shootBall());
resetBtn.addEventListener("click", resetBall());

gameLoop();
