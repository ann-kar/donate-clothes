import React from "react";

import "./Orgs.scss";
import {SectionTitle, Button} from "../../../components";
import OrgList from "./OrgList/OrgList";

class Orgs extends React.Component {

    state = {
        data: "",
        name: "",
        currentPage: 1,
        currentType: "",
        currentData: ""
    };

    fetchData = (name) => {

        let output;

        fetch('db.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                output = myJson[`${name}`];
                return output;
            })
            .then((output) => {
                this.setState({currentData: output});
            })
    };


    handleClick = (e) => {

        this.setState({
            currentType: e.target.name,
            currPage: 1
        }, () => {
            this.fetchData(this.state.currentType)
        });

    };

    render() {

        let renderResults;
        if (this.state.currentData) {
            renderResults = <OrgList data={this.state.currentData}/>
        } else {
            renderResults = null
        }

        return (
            <section className="Orgs" id="Orgs">
                <SectionTitle title="Komu pomagamy?"/>
                <div className="Orgs__types">
                    <Button name="foundations"
                            className="Orgs__types__button"
                            handleClick={this.handleClick}
                            text="Fundacjom"/>

                    <Button name="ngos"
                            className="Orgs__types__button"
                            handleClick={this.handleClick}
                            text="Organizacjom NGO"/>

                    <Button name="collections"
                            className="Orgs__types__button"
                            handleClick={this.handleClick}
                            text="Zbiórkom"/>
                </div>
                <div className="Orgs__results">

                    {renderResults}

                </div>
            </section>
        )
    }
}

export default Orgs;