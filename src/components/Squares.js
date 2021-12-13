
import React from "react";

const style = {
    background: "ligthblue",
    border: "1px solid darkblue",
    fontize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
};

const Squares = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Squares;