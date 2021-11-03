import React, { useState } from "react";
//import dog from "../../assets/dog.jpg";
import defaultHook from "./default.hook";

const DefaultComponent = () => {
    const {settings, value, getData, getIncrement, getDecrement} = defaultHook();

    return (
        <div>
            {/* <img src={dog} alt="" /> */}
            <button data-testid="data-btn" onClick={getData}>
                GET DATA
            </button>
            <p data-testid="data-response">{settings?.response}</p>
            <br />
            <br />
            <button data-testid="increment-btn" onClick={getIncrement}>
                INCREMENT
            </button>
            <button data-testid="decrement-btn" onClick={getDecrement}>
                DECREMENT
            </button>
            <h1 data-testid="value-response">{value}</h1>
        </div>
    );
};
/*pippo*/
export default DefaultComponent;

