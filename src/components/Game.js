import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import "../styles.css"


import Board from "./Board";

const styles = {
    width: "200px",
    margin: "20px, auto"
};
const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xisNext, setxisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xisNext ? "X" : "O";
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setxisNext(!xisNext);
    };
    const jumpTo = (step) => {
        setStepNumber(step);
        setxisNext(step % 2 === 0);
    };

    const renderMovers = () =>
        history.map((_step, move) => {

            const destination = move ? `Go To Move${move}` : `Restart`;
            return (
                <>

                    <li key={move} >
                        <button className="buttons" onClick={() => jumpTo(move)}> {destination}</button>
                    </li>
                </>
            );
        });

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p className="players">


                    {winner
                        ? "Winner: " + winner
                        : "Next Player: " + (xisNext ? "X" : "O")}

                </p>

                {renderMovers()}
            </div>
        </>
    );
};

export default Game;
