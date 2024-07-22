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

//function to show selected page no
function show(pageNo) {
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

//target league containers
const league1 = document.getElementById("leagueContainer1");
const league2 = document.getElementById("leagueContainer2");
const league3 = document.getElementById("leagueContainer3");
const league4 = document.getElementById("leagueContainer4");
const league5 = document.getElementById("leagueContainer5");
const league6 = document.getElementById("leagueContainer6");

//var for current slide index
var currIndex = 1;

function hideSlides(){
  league1.classList.remove("is-active");
  league2.classList.remove("is-active");
  league3.classList.remove("is-active");
  league4.classList.remove("is-active");
  league5.classList.remove("is-active");
  league6.classList.remove("is-active");
}

function showSlides(){
  hideSlides();
  //toggles container
  if(currIndex == 1){
    league1.classList.add('is-active');
  }
  if(currIndex == 2){
    league2.classList.add('is-active');
  }
  if(currIndex == 3){
    league3.classList.add('is-active');
  }
  if(currIndex == 4){
    league4.classList.add('is-active');
  }
  if(currIndex == 5){
    league5.classList.add('is-active');
  }
  if(currIndex == 6){
    league6.classList.add('is-active');
  }
}

function changeSlide(n){
  //increase index by n (left if negative, right if pos)
  currIndex += n;
  if(currIndex > 6){
    currIndex = 1;
  }
  if(currIndex < 1){
    currIndex = 6;
  }
  console.log("BALLS");
}

hideSlides();
showSlides();

//target left and right buttons for switching slides
document.getElementById("leftButton").addEventListener("click", function () {
  changeSlide(-1);
  showSlides();
});
document.getElementById("rightButton").addEventListener("click", function () {
  changeSlide(1);
  showSlides();
});

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
