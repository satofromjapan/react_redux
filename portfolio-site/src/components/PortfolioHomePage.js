import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioHomePage = () => (
  <div>
    <h2>This is from my portfolio component.</h2>
    <p>Check out this stuff</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
)

export default PortfolioHomePage;