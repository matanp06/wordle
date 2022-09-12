import React from "react";
import { riddle } from "./App";
function GameOver({won, restartGame, exitGame}){

    return(
        <div className="game-over">
            <h1>{won ? "You Won" : "Better Luck Next Time" }</h1>
            {!won && <p>The word was: {riddle}</p>}
            <div>
                <button onClick={restartGame}>
                    <img src="/images/restart.svg"/>
                    <p>Restart</p>
                </button>
                <button onClick={exitGame}>
                    <img src="/images/exit.svg"/>
                    <p>Quit</p>
                </button>
            </div>
        </div>
    );

}

export default GameOver;
