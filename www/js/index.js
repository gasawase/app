function onLoad () {
    // document.getElementById('guessButt').addEventListener("click", runProg());
    document.getElementById("guessButt").onclick = function() {runProg()};//works for browser
}

 function runProg ()
 {
    var randNum = Math.round(Math.random() * 10);
    console.log("Button pressed");
    var theirNum = document.getElementsById("userGuess"); ///CONVERT TO NUM OR INT I THINK IT'S READING AS STRING
    

    //exception handling
    if (theirNum >= 0 || theirNum <= 10){

        document.getElementById("compNum").innerHTML = randNum;
        document.getElementById("userGuess").innerHTML = userGuess;

        //running the comparison
        if (theirNum == randNum){
            console.log("Win");
            document.getElementById("result").innerHTML = "You win!";
        }

        else {
            console.log("Lose");
            document.getElementById("result").innerHTML = "You lose!";
        }
        document.getElementById("hidden").style.display = "block";
    }

    else {
        window.alert("The number you entered was not in the interval. Please try again.")
        document.getElementsByName("userGuess").focus();
    }
 }