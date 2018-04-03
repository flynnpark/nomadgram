import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Notification from 'components/Notification';

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <div className={styles.logo} alt={context.t('Logo')} />
        </Link>
      </div>
      <div className={styles.column}>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder={context.t('Search')}
            className={styles.searchInput}
            value={props.value}
            onChange={props.onInputChange}
          />
        </form>
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <div className={styles.explore} />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <div
            className={styles.notification}
            onClick={props.openNotifications}
          />
          {props.seeingNotifications && <Notification />}
        </div>
        <div className={styles.navIcon}>
          <Link to={{ pathname: `/${props.username}` }}>
            <div className={styles.profile} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

Navigation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  openNotifications: PropTypes.func.isRequired
};

export default Navigation;
