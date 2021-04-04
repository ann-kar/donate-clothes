import React from "react";

import "./Login.scss";
import { UserMenu, SectionTitle} from "../../components"


class Login extends React.Component {
    state = {
        email: "",
        password: "",
        validity: null,
        errors: {
            email: "",
            password: ""
        }
    };

    inputHandler = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
        });

        // walidacja

        const {name, value} = e.target;
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
        }

    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.props.validateForm(this.state.errors)
            && (this.state.email)
            && (this.state.password)) {

            this.setState({
                validity: true
            })
        } else {
            this.setState({
                validity: false
            })
        }
    };


    render() {
        return (

            <>
                <div className="Login">
                    <div className="Login__menus">
                        <UserMenu loginPage="login"/>
                    </div>
                    <div className="Login__main">
                        <SectionTitle title="Zaloguj się"/>
                        <div className="Login__form">
                            <form onSubmit={this.handleSubmit}>

                                {(this.state.validity) ? <div className="Login__form__success">
                                        Logowanie zakończone powodzeniem!</div>
                                    :
                                    null}
                                {(this.state.validity === false) ?
                                    <div className="Login__form__fail">Logowanie zakończone
                                        niepowodzeniem.</div> : null}

                                <label className="Login__form__label">
                                    Email
                                    <input className="Login__form__input"
                                           name={"email"}
                                           type="email"
                                           onChange={this.inputHandler}
                                    />

                                    {(this.state.errors.email) ?
                                        <div className="Login__form__error">{this.state.errors.email}</div> :
                                        <div>&nbsp;</div>}

                                </label>


                                <label className="Login__form__label">

                                    Hasło
                                    <input className="Login__form__input"
                                           name={"password"}
                                           type="password"
                                           onChange={this.inputHandler}/>

                                    {(this.state.errors.password) ?
                                        <div className="Login__form__error">{this.state.errors.password}</div> :
                                        <div>&nbsp;</div>}

                                </label>
                            </form>
                        </div>


                        <div className="Login__buttons">
                            <button className="Login__buttons__element" onClick={this.handleSubmit}>Wyślij</button>
                        </div>

                    </div>


                </div>
            </>

        )
    }
}

export default Login;