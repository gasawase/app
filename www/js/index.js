/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var randNum = Math.round(Math.random() * 10);

function onLoad () {
    document.getElementById('guessButt').addEventListener("click", runProg());
}

 function runProg (){
    console.log("Button pressed");
    var theirNum = document.getElementsById("userGuess");

    //exception handling
    if (theirNum >= 0 && theirNum <= 10){

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