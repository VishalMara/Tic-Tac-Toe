
import React from "react";
import Squares from "./Squares";

const style = {
    // background: "ligthblue",
    border: "4px solid darkblue",
    borderRadius: "10px",
    height: "250px",
    width: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Squares key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default Board;