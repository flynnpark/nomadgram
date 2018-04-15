import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import styles from './styles.scss';

const NotificationContainer = props => {
  return (
    <div>
      <div
        className={styles.notificationBackground}
        onClick={props.closeNotifications}
      />
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
    <Notification key={notification.id} {...notification} />
  ));
};

const Notification = props => {
  return (
    <li className={styles.notificationItem}>
      <div className={styles.profileImageContainer}>
        <div className={styles.profileImageBlock}>
          <a className={styles.profileImageAnchor}>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage: `url(${props.creator.profile_image ||
                  require('images/noPhoto.jpg')})`
              }}
            />
          </a>
        </div>
      </div>
      <div className={styles.notificationContent}>
        <span className={styles.username}>{props.creator.username}</span>{' '}
        {props.notification_type === 'follow' && 'started following you'}
        {props.notification_type === 'comment' && `commented: ${props.comment}`}
        {props.notification_type === 'like' && 'liked your post'}
      </div>
      <div className={styles.notificationAction}>
        {props.notification_type === 'follow' ? (
          <button
            className={
              props.creator.is_following ? styles.following : styles.follow
            }
          >
            {props.creator.is_following ? 'Following' : 'Follow'}
          </button>
        ) : (
          <a className={styles.imageContainer}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${props.image.file})` }}
            />
          </a>
        )}
      </div>
    </li>
  );
};

NotificationContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  closeNotifications: PropTypes.func.isRequired
};

RenderNotifications.propTypes = {
  notifications: PropTypes.array
};

Notification.propTypes = {
  comment: PropTypes.string,
  creator: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    is_following: PropTypes.bool.isRequired,
    is_self: PropTypes.bool.isRequired
  }),
  id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    file: PropTypes.string.isRequired
  }),
  notification_type: PropTypes.string.isRequired,
  to: PropTypes.number.isRequired
};

export default NotificationContainer;
