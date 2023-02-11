import React from "react";
import './Counter.css'

const Counter = ({titulo, numero}) => {
    return (
        <div className="counter">
            <p className="counterNumber">{numero}</p>
            <h3 className="counterText">{titulo}</h3>
        </div>
    )
}

export default Counter