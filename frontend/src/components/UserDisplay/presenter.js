import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const UserDisplay = (props, context) => (
  <div className={props.horizontal ? styles.horizontal : styles.vertical}>
    <div className={styles.column}>
      <div
        className={props.big ? styles.bigAvatar : styles.avatar}
        style={{
          backgroundImage: `url(${props.user.profile_image ||
            require('images/noPhoto.jpg')})`
        }}
      />
      <div className={styles.user}>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.name}>{props.user.name}</span>
      </div>
    </div>
    <div className={styles.column}>
      {!props.user.is_self && (
        <button
          className={props.user.is_following ? styles.following : styles.follow}
          onClick={props.handleClick}
        >
          {props.user.is_following
            ? context.t('Following')
            : context.t('Follow')}
        </button>
      )}
    </div>
  </div>
);

UserDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    is_following: PropTypes.bool.isRequired,
    is_self: PropTypes.bool.isRequired
  }).isRequired,
  big: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
};

UserDisplay.defaultProps = {
  big: false
};

export default UserDisplay;
