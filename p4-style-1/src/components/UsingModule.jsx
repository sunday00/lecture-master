import React from 'react';
import styles from '../assets/scss/Module.module.scss';

const UsingModule = () => {
  return (
    <div className={styles.wrapper}>
      Hello, I'm <span className="something">Module...</span>
    </div>
  );
};

export default UsingModule;
