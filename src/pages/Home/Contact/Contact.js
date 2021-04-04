import React from "react";

import "./Contact.scss";
import {SectionTitle, Input, Button} from "../../../components";

class Contact extends React.Component {
    state = {
        title: "",
        name: null,
        email: null,
        message: null,
        validity: false,
        errors: {
            name: "",
            email: "",
            message: "",
        }
    };

    validateEmail = email => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    inputHandler = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.message]: e.target.value,
        });

        const {name, value} = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    value.indexOf(" ") !== -1
                        ? 'Imię musi być jednym wyrazem.'
                        : '';
                break;
            case 'email':
                errors.email =
                    this.validateEmail(value)
                        ? ''
                        : 'Email jest nieprawidłowy.';
                break;
            case 'message':
                errors.message =
                    value.length > 120
                        ? ''
                        : 'Wiadomość musi zawierać przynajmniej 120 znaków.';
                break;
            default:
                break;

        }

    };

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if ((this.validateForm(this.state.errors)) && (this.state.email) && (this.state.message) && (this.state.name)) {
            this.setState({validity: true});

            let url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

            const data = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            };

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((resp) => {
                    console.log("Success", resp);
                }).catch((error) => {
                console.error("Error")
            })
        }
    }

    render() {
        return (
            <section className="Contact" id="Contact">
                <div className="Contact__main">

                    <SectionTitle title="Skontaktuj się z nami"/>

                    {(this.state.validity) ?
                        <div className="Contact__main__success">Wiadomość wysłana!</div> : null}

                    <form onSubmit={this.handleSubmit}>

                        <div className="Contact__main__userData">

                            <div className="Contact__main__userData__name">

                                <Input label="Wpisz swoje imię" name="name" placeholder="Krzysztof"
                                       onChange={this.inputHandler}/>

                                {(this.state.errors.name) ?
                                    <div className="contactForm__formError">{this.state.errors.name}</div> :
                                    <div>&nbsp;</div>}
                            </div>

                            <div className="Contact__main__userData__email">

                                <Input label="Wpisz swój email" name="email" placeholder="abc@xyz.pl"
                                       onChange={this.inputHandler}/>

                                {(this.state.errors.email) ?
                                    <div className="contactForm__formError">{this.state.errors.email}</div> :
                                    <div>&nbsp;</div>}
                            </div>
                        </div>

                        <div className="Input__label">
                            Wpisz wiadomość
                            <textarea className="Contact__main__message Contact__input"
                                      name={"message"}
                                      placeholder="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                                      onChange={this.inputHandler}/>
                            {(this.state.errors.message) ?
                                <div className="contactForm__formError">{this.state.errors.message}</div> : null}

                        </div>
                        <Button className="Contact__main__button"
                                handleClick={this.handleSubmit}
                                text="Wyślij"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;