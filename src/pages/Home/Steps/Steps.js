import React from "react";

import "./Steps.scss";
import StepsItem from "./StepsItem/StepsItem";
import {SectionTitle, ScrollButton} from "../../../components";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";

const Steps = () => {

    const stepsData = [
        {
            title: "Wybierz rzeczy",
            text: "ubrania, zabawki, sprzęt i inne",
            icon: icon1,
        },
        {
            title: "Spakuj",
            text: "ubrania, zabawki, sprzęt i inne",
            icon: icon2,
        },
        {
            title: "Zdecyduj, komu pomóc",
            text: "ubrania, zabawki, sprzęt i inne",
            icon: icon3,
        },
        {
            title: "Zamów kuriera",
            text: "ubrania, zabawki, sprzęt i inne",
            icon: icon4,
        },
   ];

    return (

        <section id="Steps" className="Steps">

            <SectionTitle title="Wystarczą cztery proste kroki"/>
            <div className="Steps__main">
                {stepsData.map((el, i) => (

                    <StepsItem title={el.title}
                               text={el.text}
                               icon={el.icon}
                               key={`key-${i}`}/>
                ))}
            </div>

            <ScrollButton className="button Steps__button"
                          to="Contact"
                          text="ODDAJ RZECZY"/>

        </section>
    )
};

export default Steps;