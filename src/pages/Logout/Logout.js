import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./Logout.scss";
import { SiteMenu, UserMenu, SectionTitle} from "../../components"

class Logout extends Component {
    render () {
        return (
            <>
                <div className="login">
                    <div className="container menuCnt">
                        <UserMenu/>
                        <SiteMenu/>
                    </div>
                    <div className="login__mainCnt">
                        <div className="logout__main">
                            <SectionTitle text="Wylogowanie nastąpiło pomyślnie!"/>
                                <Link to="/">
                                    <button className="button login__button">Strona główna</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Logout