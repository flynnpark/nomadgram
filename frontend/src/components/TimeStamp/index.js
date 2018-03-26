import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const TimeStamp = (props, context) => (
  <span className={styles.time}>{props.time}</span>
);

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStamp;
