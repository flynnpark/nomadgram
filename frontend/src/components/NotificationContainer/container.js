import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationContainer from './presenter';

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getNotifications: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getNotifications } = this.props;
    if (!this.props.notifications) {
      getNotifications();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.notifications) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { notifications } = this.props;
    return (
      <NotificationContainer {...this.state} notifications={notifications} />
    );
  }
}

export default Container;
