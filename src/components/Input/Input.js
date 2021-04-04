import React from "react";
import "./Input.scss";

const Input = ({label, name, placeholder, onChange}) => {

    return (

        <label className="Input__label">
            {label}
            <input className="Input__input"
                   name={`${name}`}
                   type={`${name}`}
                   placeholder={`${placeholder}`}
                   onChange={onChange}
            />
        </label>
    )
};

export default Input;