//Array with the correct answers

let correctAnswers = [2, 3, 1, 3, 2, 3, 3, 2, 1, 3];

//Array where are saved the answers selected by the user

let UsersAnswers = [];

let amount_correct = 0;
let amount_incorrect = amount_correct != correctAnswers;

//Function which selects the number of question and the input that was selected as an answer

function answer(number_question, selected) {
  //For saving the selected option:
  UsersAnswers[number_question] = selected.value;

  //Next code is for making the backgroud of the inputs white, when the user selects another option,
  //the ID is to select the right option
  id = "p" + number_question;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //Giving color to the selected option

  selected.parentNode.style.backgroundColor = "#cec0fc";
}

//Function that compares the arrays to know how many answers are correct

function score() {
  amount_correct = 0;
  amount_incorrect = 0;

  for (i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] == UsersAnswers[i]) {
      amount_correct++;
    } else {
      amount_incorrect++;
    }

    document.getElementById("result").innerHTML = amount_correct;
    document.getElementById("result2").innerHTML = amount_incorrect;
  }

  //Added a div with a button to refresh the page in order to reset the game
  document.getElementById("alert").style.display = "block"; //showing back the hidden div with the button
}

//Function to reset the game, or to refresh the web
const restart = document.getElementById("restart");

restart.addEventListener("click", function () {
  location.reload();
});

//To force the scrollTop after refreshing with location.reload()
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//
