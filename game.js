let dialogBox = document.querySelector(".result");
let images = document.querySelectorAll("img");
let userWinNum=document.querySelector('#youSpan');
let comWinNum=document.querySelector('#cmpSpan');
let comCount=0;
let userCount=0;

//event listener for all images individually
images.forEach((pic) => {
  pic.addEventListener("click", () => {
    let userChoice = pic.getAttribute("id");
    game(userChoice); //game is called and userChoice is passed to it.
  });
});

//game function
const game = (userChoice) => {
  console.log("user selected: ", userChoice);
  let compChoice = compGeneratedChoice(); //random computer generator is called.
  console.log("computer selected: ", compChoice);
  logic(userChoice, compChoice); //logic function is called
};

//generating computer choice
const compGeneratedChoice = () => {
  let possibleChoices = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  let compChoice = possibleChoices[rand];
  return compChoice;
};

// main logic function if else etc.
//if user and computer choises are same,then this will be called.
const logic = (userChoice, compChoice) => {
  if (userChoice == compChoice) {
    dialogBox.innerText='Game is Draw!';
    dialogBox.style.backgroundColor='yellow';
    dialogBox.style.color='black';
  } else {
    newLogic(userChoice, compChoice);
  }
};

//newLogic function when game is not draw
const newLogic = (uc, cc) => {
  let userWinningTracker = true;

  if (uc == "rock") {
    //computer have paper & scissor
    cc == "paper" ? (userWinningTracker = false) : (userWinningTracker = true);
  } else if (uc == "paper") {
    //computer have rock and scissor
    cc == "rock" ? (userWinningTracker = true) : (userWinningTracker = false);
  } else {
    //computer have rock and paper
    cc == "rock" ? (userWinningTracker = false) : (userWinningTracker = true);
  }
  result(userWinningTracker, uc, cc);
};

//function for winning results
const result = (userWinningTracker, uc, cc) => {
  if (userWinningTracker == true) {
    userCount++;
    userWinNum.innerText=userCount;
    dialogBox.innerText = `Congratulations! your ${uc} beats computer's ${cc}`;
    dialogBox.style.backgroundColor = "green";
    dialogBox.style.color='white';
  } else {
    comCount++;
    comWinNum.innerText=comCount;
    dialogBox.innerText =`You Lose! computer's ${cc} beats your ${uc}`;
    dialogBox.style.backgroundColor = "red";
    dialogBox.style.color='yellow';
  }
};
