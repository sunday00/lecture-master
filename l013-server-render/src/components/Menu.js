import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/red">RED</Link>
        </li>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
