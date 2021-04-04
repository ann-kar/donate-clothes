import React from "react";

import "./SectionTitle.scss";

const SectionTitle = ({ title }) =>  {

        return (
            <div className="SectionTitle">
                <h2 className="SectionTitle__header">{title}</h2>
                <div className="SectionTitle__decoration"></div>
            </div>
        )
}
export default SectionTitle;