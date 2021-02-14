import React from 'react';
import { Link } from 'react-router-dom';

export const MainNavigation = () => (
  <nav style={{ margin: `25px` }}>
    <Link style={{ marginRight: `25px` }} to="/">Home Page</Link>
    &nbsp;
    <Link to="/tabs">Tabs Page</Link>
  </nav>
);
