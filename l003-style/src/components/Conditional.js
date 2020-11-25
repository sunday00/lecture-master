import React from 'react';
import classNames from 'classnames/bind';
import '../resources/Conditional.scss';

import styles from '../resources/Conditional.module.scss';

import Local from './Local';

const cx = classNames.bind(styles);

const Conditional = () => {
    // console.log(styles);

    return (
        <div>
            <InnerElement
                color="red"
                colored={true}
                size={{ w: 50, h: 50 }}
            ></InnerElement>
        </div>
    );
};

export default Conditional;

function InnerElement(props) {
    return (
        <>
            <h2>hello inner</h2>
            <div
                className={classNames(
                    props.color,
                    { colored: props.colored },
                    `h-${props.size.h}`,
                    `w-${props.size.w}`
                )}
            >
                <h3 className={styles.color}>WHITE</h3>
                <h3 className={`${styles.color} ${styles.bold}`}>WHITE</h3>
                <h3 className={cx('color')}>WHITE TOO</h3>
                <h3 className={cx('color', 'bold')}>WHITE TOO</h3>
                <Local></Local>
            </div>
        </>
    );
}
