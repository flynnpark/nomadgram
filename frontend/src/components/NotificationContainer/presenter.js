import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

const NotificationContainer = props => (
  <div>
    <div />
    <div>{props.loading ? <Loading /> : <div />}</div>
  </div>
);

const RenderNotifications = props =>
  props.list.map(notification => <Notification notification={notification} />);

const Notification = props => (
  <li>
    <div>Profile</div>
    <div>Notification body</div>
    <div>Follow</div>
  </li>
);

export default NotificationContainer;
