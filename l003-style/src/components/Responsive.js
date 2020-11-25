import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
    xl: 1024,
    sm: 400,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});

const Inner = (props) => {
    return (
        <article>
            <div className={props.className}></div>
        </article>
    );
};

const StyledResponsive = styled(Inner)`
    background-color: hotpink;
    height: 300px;
    width: 100%;
    ${media.xl`background-color:gold;`};
    ${media.sm`background-color:lightgreen;`};
`;

const Responsive = () => {
    return <StyledResponsive></StyledResponsive>;
};

export default Responsive;
