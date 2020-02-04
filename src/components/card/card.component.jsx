import React from 'react';

const Card = ({ id, children }) => (
  <div className='card' id={id}>
    {children}
  </div>
);

export default Card;
