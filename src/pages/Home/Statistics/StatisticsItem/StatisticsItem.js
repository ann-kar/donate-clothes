import React from "react";
import "./StatisticsItem.scss";

const StatisticsItem = ({title, subtitle, text}) => {
    return (
        <div className="StatisticsItem">
            <h2 className="StatisticsItem__title">{title}</h2>
            <h4 className="StatisticsItem__subtitle">{subtitle}</h4>
            <p className="StatisticsItem__text">{text}</p>
        </div>
    )
};

export default StatisticsItem;