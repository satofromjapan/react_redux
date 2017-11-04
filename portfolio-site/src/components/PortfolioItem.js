import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>Something I've done</h1>
    <p>This is a project with item {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;