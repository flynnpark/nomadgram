import React, { Component } from 'react';
import CommentBox from './presenter';

class Container extends Component {
  state = {
    comment: ''
  };

  render() {
    return (
      <CommentBox
        {...this.state}
        {...this.props}
        handleInputChange={this._handleInputChange}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      comment: value
    });
  };

  _handleKeyPress = event => {
    const { submitComment } = this.props;
    const { comment } = this.state;
    const { key } = event;
    if (key === 'Enter') {
      event.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ''
      });
    }
  };
}

export default Container;
