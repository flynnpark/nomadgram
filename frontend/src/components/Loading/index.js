import React from 'react';
import styles from './styles.scss';

const Loading = props => (
  <div className={styles.container}>
    <div className={styles.loadingBounce}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  </div>
);

export default Loading;
