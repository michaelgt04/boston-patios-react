import React from 'react';

const PatioTile = props => {
  return(
    <div>
      <h2>{props.name}</h2>
      <h3>neighborhood: {props.neighborhood}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default PatioTile;
