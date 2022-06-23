var randomNumber = Math.floor(Math.random() * 100);
var guessTries = 0;


function guessTheNumber() {

    guessTries = guessTries +1;

    var guessNumber = document.querySelector("#guessNumber").value;

    console.log(randomNumber);
    console.log(guessNumber);
    console.log(guessTries);

    document.getElementById("numberZero").style.visibility = "hidden";

    if (randomNumber > guessNumber && guessNumber > 0) {
        console.log('zu niedrig');
        document.getElementById("toLow").style.visibility = "visible";
        document.getElementById("toHigh").style.visibility = "hidden";
    }

    else if (randomNumber < guessNumber) {
        console.log('zu hoch');
        document.getElementById("toHigh").style.visibility = "visible";
        document.getElementById("toLow").style.visibility = "hidden";
    }

    else if (randomNumber == guessNumber) {
        console.log('gewonnen');
        document.getElementById("youWon").style.visibility = "visible";
        document.getElementById("outputTries").innerHTML = guessTries;
    }

    else if (guessNumber == 0) {
        document.getElementById("numberZero").style.visibility = "visible";
    }

    if (guessNumber > 100 || guessNumber < 0) {
        document.getElementById("alertNumb").style.visibility = "visible";
    }

}

function closeAlert() {
   document.getElementById("alertNumb").style.visibility = "hidden";
}