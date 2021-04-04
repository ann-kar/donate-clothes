import React from "react";

function Button(props) {

    const {name, className, text, handleClick} = props;

    return (
        <button name={name} className={className} onClick={handleClick}>{text}</button>
    )
}

export default Button;