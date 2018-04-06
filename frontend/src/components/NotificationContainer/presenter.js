import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import styles from './styles.scss';

const NotificationContainer = props => {
  return (
    <div>
      <div />
      <div className={styles.notificationContainer}>
        <ul>
          {props.loading ? (
            <Loading />
          ) : (
            <RenderNotifications notifications={props.notifications} />
          )}
        </ul>
      </div>
    </div>
  );
};

const RenderNotifications = props => {
  return props.notifications.map(notification => (
    <Notification key={notification.id} notification={notification} />
  ));
};

const Notification = props => {
  const { notification } = props;
  return (
    <li className={styles.notificationItem}>
      <div className={styles.profileImageContainer}>
        <div className={styles.profileImageBlock}>
          <a className={styles.profileImageAnchor}>
            <img
              className={styles.profileImage}
              src={
                notification.creator.profile_image ||
                require('images/noPhoto.jpg')
              }
              alt={notification.creator.name}
            />
          </a>
        </div>
      </div>
      <div className={styles.notificationContent}>Notification body</div>
      <div className={styles.notificationAction}>Follow</div>
    </li>
  );
};

NotificationContainer.propTypes = {
  loading: PropTypes.bool.isRequired
};

RenderNotifications.propTypes = {
  notifications: PropTypes.array
};

export default NotificationContainer;
