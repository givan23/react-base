import React from "react";
import useDefaultOne from "./useDefaultOne";

const DefaultOneComponent = () => {
    const {placeholder = "", toggle, handleToggle} = useDefaultOne();

    return (
        <div>
            <h1>{placeholder}</h1>
            <button onClick={handleToggle}>Click me!</button>
            {toggle && <p>Hello!</p>}
        </div>
    );
};

export default DefaultOneComponent;
