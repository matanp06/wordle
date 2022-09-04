import React, { useEffect, useState } from "react";
import Header from "./Header";
import Board from "./Board";
import wordsList from "./wordsList";
import KeyBoard from "./KeyBoard";

const riddle = wordsList[Math.floor(Math.random()*wordsList.length)];
console.log(riddle);

function App() {

  //hooks
  const [attemptedWords,setAttemptedWords] = useState([null,null,null,null,null,null]);
  const [attemptNumber, setAttemptNumber] = useState(0);
  const [attempt, setAttempt] = useState("");
  const [notIncludedLetters, setNotIncludedLetters] = useState([]);
  const [incorrectPlaceLetters, setIncorrectPlaceLetters] = useState([]);
  const [correctPlaceLetters,setCorrectPlaceLetters] = useState([]);
  const [win,setWin] = useState(false);

  useEffect(()=>{
    win ? alert("success") : attemptNumber==6&&alert("GAME OVER")
  },[win,attemptNumber]);

  // update the guess word (before submitted)
  function updateAttempt(value){
    if(value === "DELETE"){
      setAttempt(attempt.substring(0,attempt.length-1));
    } else if(attempt.length < 5) {
      setAttempt(attempt+value);
    }
  }

  // submit a guess
  function submitWord(){
    if(attempt.length === 5){
      if(wordsList.includes(attempt)){
        checkWord();
      } else {
        alert("your word isn't on the list");
      }
    }
  }

  // Checks if a guess is correct
  function checkWord(){
    let word = attempt.toString().split("");
    let attemptOutput = word.map((letter,index) => {
      // console.log(letter);
      // console.log(index);

      //Checks if the letter is in the word
      if(riddle.includes(letter)){

        // Checks if a letter is in the right place of the word
        if(riddle.charAt(index) == letter){


          !correctPlaceLetters.includes(letter) && 
            setCorrectPlaceLetters(correctLetters => [...correctLetters,letter])
          return({letter:letter,style:{backgroundColor:"green"}})

        } else { // the letter is in the wrong place
          !correctPlaceLetters.includes(letter) && !incorrectPlaceLetters.includes(letter) &&
            setIncorrectPlaceLetters(incorrectLetters=> [...incorrectLetters,letter]);
          return({letter:letter,style:{backgroundColor:"yellow"}});
        }

      }
      else { // the letter is not in the riddle word
        !notIncludedLetters.includes(letter) && 
          setNotIncludedLetters(excludedLetters=>[...excludedLetters,letter]);
        return({letter:letter,style:{}});
      }
    })
    // adds the attempted words to the attempted words array
    setAttemptedWords(attemptedWords =>{
      attemptedWords[attemptNumber] = attemptOutput;
      return attemptedWords;
    });
    if(attempt === riddle){// the guess was correct -> game won
      setWin(true);
    } 

    setAttempt("");
    setAttemptNumber(attemptNumber+1);
  }

  return (
    <div className="App">
      <Header/>
      <Board attempts={attemptedWords} attemptNO={attemptNumber} currentWord={attempt} />
      <KeyBoard 
        changeAttemptedWord={updateAttempt} 
        enter={submitWord}
        letterStatus={
          {
            notIncluded:notIncludedLetters,
            incorrectPlacement: incorrectPlaceLetters,
            correctPlacement: correctPlaceLetters
          }
        }
      />
    </div>
  );
}

export default App;
