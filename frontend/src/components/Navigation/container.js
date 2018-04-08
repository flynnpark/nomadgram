import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './presenter';

class Container extends Component {
  state = {
    term: '',
    seeingNotifications: false
  };

  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  };

  render() {
    return (
      <Navigation
        {...this.state}
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        openNotifications={this._openNotifications}
        value={this.state.term}
        username={this.props.username}
      />
    );
  }

  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };

  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ''
    });
  };

  _openNotifications = () => {
    this.setState({
      seeingNotifications: true
    });
  };

  _closeNotifications = () => {
    this.setState({
      seeingNotifications: false
    });
  };
}

export default Container;
