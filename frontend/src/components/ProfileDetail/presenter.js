import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ProfileDetail = (props, context) => (
  <header className={styles.profileHeader}>
    <div className={styles.profileImage}>
      <div
        className={styles.squareImage}
        style={{
          backgroundImage: `url(${props.profile_image ||
            require('images/noPhoto.jpg')})`
        }}
      />
    </div>
    <section className={styles.profileDetail}>
      <div className={styles.profileTop}>
        <h1>{props.username}</h1>
        <span className={styles.buttonContainer}>
          {!props.is_self && (
            <button
              className={props.is_following ? styles.following : styles.follow}
              onClick={props.handleFollow}
            >
              {props.is_following
                ? context.t('Following')
                : context.t('Follow')}
            </button>
          )}
        </span>
      </div>
      <ul className={styles.profileMiddle}>
        <li className={styles.counterList}>
          <span className={styles.counterSubject}>
            게시물 <span className={styles.counter}>{props.post_count}</span>
          </span>
        </li>
        <li className={styles.counterList}>
          <span className={styles.counterSubject}>
            팔로워{' '}
            <span className={styles.counter}>{props.followers_count}</span>
          </span>
        </li>
        <li className={styles.counterList}>
          <span className={styles.counterSubject}>
            팔로우{' '}
            <span className={styles.counter}>{props.following_count}</span>
          </span>
        </li>
      </ul>
      <div className={styles.profileBottom}>
        <h1>{props.name}</h1> <span>{props.bio}</span>
        <a className={styles.website} href={props.website}>
          {props.website}
        </a>
      </div>
    </section>
  </header>
);

ProfileDetail.contextTypes = {
  t: PropTypes.func.isRequired
};

ProfileDetail.propTypes = {
  profile: PropTypes.shape({
    bio: PropTypes.string,
    followers_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        file: PropTypes.string.isRequired,
        comment_count: PropTypes.number.isRequired,
        like_count: PropTypes.number.isRequired
      })
    ).isRequired,
    name: PropTypes.string,
    post_count: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string,
    is_self: PropTypes.bool.isRequired,
    is_following: PropTypes.bool.isRequired
  }),
  handleFollow: PropTypes.func.isRequired
};

export default ProfileDetail;
