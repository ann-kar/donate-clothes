import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "./UserMenu.scss";

const UserMenu = (props) => {

    return (
        <>
            <ul className="UserMenu">
                { props.match.url === "/logowanie" ? null : <li className={`UserMenu__element ${props.loginPage}`}><Link to="/logowanie">Zaloguj</Link></li> }
                { props.match.url === "/rejestracja" ? null : <li className={`UserMenu__element ${props.loginPage}`}><Link to="/rejestracja">Załóż konto</Link></li> }
                { props.match.url === "/" ? null : <li className="UserMenu__element login"><Link to="/">Start</Link></li> }
            </ul>
        </>
    )
};

export default withRouter(UserMenu);