import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        const { username, password } = this.state;
        return <LoginForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            usernameValue={username}
            passwordValue={password} />;
    }

    _handleInputChange = event => {
        const { target : {value, name} } = event;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = event => {
        event.preventDefault();
    }

    _handleFacebookLogin = response => {
        console.log(response);
    }
}

export default Container;
