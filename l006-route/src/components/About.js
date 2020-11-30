import React from 'react';
import { Link, Route } from 'react-router-dom';

const About = (props) => {
  return (
    <div>
      <h1>ABOUT</h1>
      <ul>
        {props.routes.map((r) => (
          <li key={r.id}>
            <Link to={r.href}>{r.text}</Link>
          </li>
        ))}
      </ul>
      <article>
        <Route
          path="/about/company"
          render={() => (
            <div>
              {' '}
              <h3>COMPANY</h3>{' '}
            </div>
          )}
        ></Route>
        <Route
          path="/about/ceo"
          render={() => (
            <div>
              {' '}
              <h3>CEO</h3>{' '}
            </div>
          )}
        ></Route>
        <Route
          path="/about/vision"
          render={() => (
            <div>
              {' '}
              <h3>VISION</h3>{' '}
            </div>
          )}
        ></Route>
      </article>
    </div>
  );
};

export default About;
