import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Example = (props) => {
    const [num, setNum] = useState(0);
    return (
        <div>
            Hello example and {props.name}
            <p>{props.children}</p>
            <button
                onClick={() => {
                    setNum((num) => {
                        return num + 1;
                    });
                    setNum((num) => {
                        return num + 1;
                    });
                }}
            >
                +
            </button>
            <p>{num}</p>
        </div>
    );
};

export default Example;

Example.defaultProps = {
    name: 'anonymous',
};

Example.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
};
