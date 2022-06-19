import React from 'react';
import classNames from 'classnames/bind';
import styles from '../assets/scss/Module.module.scss';

const cx = classNames.bind(styles);

const UsingModule = () => {
  return (
    // <div className={styles.wrapper}>
    <div className={cx('wrapper')}>
      Hello, I'm <span className="something">Module...</span>
    </div>
  );
};

export default UsingModule;
