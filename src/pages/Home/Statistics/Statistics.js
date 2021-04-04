import React from "react";
import "./Statistics.scss";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = () => {

    const statsData = [
        {
            title: "10",
            subtitle: "oddanych worków",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia porro quos ullam."
        },
        {
            title: "5",
            subtitle: "wspartych organizacji",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia porro quos ullam."
        },
        {
            title: "7",
            subtitle: "zorganizowanych zbiórek",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia porro quos ullam."
        },
    ];

    return (
        <section className="Statistics">
            {statsData.map((el, i) => (

                <StatisticsItem title={el.title}
                                subtitle={el.subtitle}
                                text={el.text}
                                key={i}/>
            ))}

        </section>
    )
};

export default Statistics;