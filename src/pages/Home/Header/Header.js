import React from "react";

import "./Header.scss";
import {SectionTitle, ScrollButton} from "../../../components";

function Header() {

    return (
        <section id="Header" className="Header">
            <div className="Header__main">
                <SectionTitle title="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"/>
                <ScrollButton className="Header__button"
                        to="Contact"
                        text="ODDAJ RZECZY"/>
            </div>
        </section>
    )
}

export default Header;