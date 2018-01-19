import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
    state = {
        comment: ""
    };

    render() {
        return (
            <CommentBox
                {...this.state}
                handleInputChange={this._handleInputChange}
                handleKeyPress={this._handleKeyPress} />
        );
    }

    _handleInputChange = (event) => {
        const { target: { value } } = event;
        this.setState({
            comment: value
        });
    };

    _handleKeyPress = event => {
        const { key } = event;
        if (key === "Enter") {
            event.preventDefault();
        }
        console.log(key);
    };
}

export default Container;
