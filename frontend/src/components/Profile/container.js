import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };

    static propTypes = {
        getUserProfile: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { getUserProfile } = this.props;
        getUserProfile();
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.profile) {
            this.setState({
                loading: false
            });
        }
    };

    render() {
        const { profile } = this.props;
        console.log(profile);
        return <Profile {...this.state} profile={profile} />;
    };
}

export default Container;
