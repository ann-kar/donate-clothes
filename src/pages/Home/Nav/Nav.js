import React from "react";

import "./Nav.scss";
import { UserMenu, SiteMenu } from "../../../components";

const Nav = (props) => {

    const burger = <div className="Nav__burger">
        <UserMenu/>
        <SiteMenu/>
    </div>;
    return (
        <div id="nav" className="Nav">
            <img className="Nav__menuIcon"
                 alt="menu icon"
                 src="https://img.icons8.com/ios/100/000000/menu--v1.png"
                 onClick={props.menuClick}/>
            {props.menuClicked ? burger : null}
            <div className="Nav__menus">
                <UserMenu/>
                <SiteMenu/>
            </div>
        </div>
    )
};

export default Nav;