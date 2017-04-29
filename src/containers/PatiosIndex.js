import React, { Component } from 'react';
import PatioTile from '../components/PatioTile';

class PatiosIndex extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <PatioTile
        name={'Atwood Tavern'}
      />
    )
  }
}

export default PatiosIndex;
