import React from "react";

import "./About.scss";
import { SectionTitle } from "../../../components"

function About () {
    return (
        <section className="About" id="About">
            <div className="About__left">
                <div className="About__left__cnt">
                    <SectionTitle title="O nas"/>
                    <p className="About__left__cnt__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid dicta esse
                        fuga ipsam magni molestias nam necessitatibus quas rem voluptas.</p>
                </div>
            </div>
            <div className="About__right"/>
        </section>
    )
}

export default About;