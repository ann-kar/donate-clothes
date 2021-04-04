import React from "react";

import "./Home.scss";
import { Nav, Header, Statistics, Steps, About, Orgs, Contact} from "../Home";

class Home extends React.Component {
    state = {
        menuClicked: false
    };

    menuClick = () => {
        if (!this.state.menuClicked) {
            this.setState({menuClicked: true})
        } else {
            this.setState({menuClicked: false})
        }
    };

    render() {
        return (
            <div className="Home">
                <Nav menuClicked={this.state.menuClicked} menuClick={this.menuClick}/>
                <Header />
                <Statistics />
                <Steps />
                <About />
                <Orgs />
                <Contact />
            </div>
        )
    }
}

export default Home;