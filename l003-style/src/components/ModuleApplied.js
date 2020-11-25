import React from 'react';
// import styles from '../resources/ModuleApplied.module.css';
import styles from '../resources/ModuleApplied.module.scss';

const ModuleApplied = () => {
    return (
        // <div className={styles.inner}>
        <div className={`${styles.inner} ${styles.border}`}>
            <h2>applied</h2>
        </div>
    );
};

export default ModuleApplied;
