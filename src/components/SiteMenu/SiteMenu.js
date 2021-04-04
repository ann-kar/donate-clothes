import React from "react";
import { Link } from "react-scroll";

import "../UserMenu/UserMenu.scss"
import "./SiteMenu.scss"

const SiteMenu = () => {

    return (
        <>
            <ul className="SiteMenu">
                <li className="SiteMenu__element"><Link
                    to="Steps"
                    smooth="easeInOutQuart"
                >O co chodzi?</Link></li>
                <li className="SiteMenu__element"><Link to="About" smooth="easeInOutQuart">O nas</Link></li>
                <li className="SiteMenu__element"><Link to="Orgs" smooth="easeInOutQuart">Organizacje</Link></li>
                <li className="SiteMenu__element"><Link to="Contact" smooth="easeInOutQuart">Kontakt</Link></li>
            </ul>
        </>
    )
};

export default SiteMenu;