import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";

import "./App.scss";
import {Home, Login, Register, Logout} from "./pages"

function App() {

    const validateEmail = email => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    return (
        <div className="app">
            <HashRouter>
                <Switch>
                    <Route
                        path='/logowanie'
                        render={(props) => <Login {...props}
                                                  validateEmail={validateEmail}
                                                  validateForm={validateForm}/>}
                    />
                    <Route
                        path='/rejestracja'
                        render={(props) => <Register {...props} validateEmail={validateEmail}
                                                     validateForm={validateForm}/>}
                    />
                    <Route path='/wylogowano' component={Logout}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;