import React, {Component} from "react";

import "./Register.scss";
import { UserMenu, SectionTitle} from "../../components"

class Register extends Component {

    state = {
        email: "",
        password: "",
        password2: "",
        errors: {
            email: "",
            password: "",
            password2: "",
        },
        validity: null
    };

    inputHandler = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
        });

        // walidacja

        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    this.props.validateEmail(value)
                        ? ''
                        : 'Email jest nieprawidłowy.';
                break;
            case 'password':
                errors.password =
                    value.length >= 6
                        ? ''
                        : 'Hasło musi zawierać przynajmniej 6 znaków.';
                break;
            case 'password2':
                errors.password2 =
                    value === this.state.password
                        ? ''
                        : 'Powtórz to samo hasło.';
                break;
            default:
                break;

        }

    };

    handleSubmit = e => {
        e.preventDefault();

        if ((this.props.validateForm(this.state.errors)) && (this.state.email) && (this.state.password) && (this.state.password2)) {

            this.setState({validity: true});
        } else {
            this.setState({validity: false})
        }
    };

    render () {
        return (
            <>
                <div className="Login">
                    <div className="Login__menus">
                        <UserMenu loginPage="login"/>
                    </div>
                        <div className="Login__main">
                            <SectionTitle title="Zarejestruj się"/>
                            <div className="Register__form">
                                <form onSubmit={this.handleSubmit}>

                                    {(this.state.validity) ? <div className="Login__form__success">
                                            Rejestracja zakończona powodzeniem!</div>
                                        :
                                        null}
                                    {(this.state.validity === false) ? <div className="Login__form__fail">Rejestracja zakończona niepowodzeniem.</div> : null}



                                    <label className="Login__form__label">
                                        Email
                                    <input
                                        className="Login__form__input"
                                        name={"email"}
                                        type="email"
                                        onChange={this.inputHandler}/>

                                        {(this.state.errors.email) ? <div className="Login__form__error">{this.state.errors.email}</div> : <div>&nbsp;</div> }

                                    </label>

                                    <label className="Login__form__label">
                                        Hasło
                                       <input
                                           className="Login__form__input"
                                           name={"password"}
                                           type="password"
                                           onChange={this.inputHandler} />

                                        {(this.state.errors.password) ? <div className="contactForm__formError">{this.state.errors.password}</div> : <div>&nbsp;</div>}

                                    </label>

                                    <label className="Login__form__label">
                                        Powtórz hasło
                                        <input
                                            className="Login__form__input"
                                            name={"password2"}
                                            type="password"
                                            onChange={this.inputHandler} />

                                        {(this.state.errors.password2) ? <div className="contactForm__formError">{this.state.errors.password2}</div> : <div>&nbsp;</div>}

                                    </label>
                                </form>

                            </div>
                            <div className="Login__buttons">
                                 <button className="Login__buttons__element" onClick={this.handleSubmit}>Załóż konto</button>

                            </div>

                        </div>


                </div>

                </>
        )
    }
}

export default Register