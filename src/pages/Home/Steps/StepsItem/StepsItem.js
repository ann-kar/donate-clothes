import React from "react";

import "./StepsItem.scss";

function StepsItem({title, text, icon}) {
    return (
        <div className="StepsItem">
            <img alt="ikona ubrań" src={icon} className="StepsItem__icon"/>
            <h4 className="StepsItem__title">{title}</h4>
            <p className="StepsItem__text">{text}</p>
        </div>
    )
}

export default StepsItem;