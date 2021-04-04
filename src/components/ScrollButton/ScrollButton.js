import React from "react";
import {Link} from "react-scroll/modules";

function ScrollButton({className, text, to}) {

    return (
        <button className={className}>
            <Link to={to} smooth="easeInOutQuart">
                {text}
            </Link>
        </button>
    )
}

export default ScrollButton;