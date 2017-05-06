import React, { Component } from 'react';
import apiUrl from '../constants/apiUrl'
import PatioTile from '../components/PatioTile';

class PatiosIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      patios: []
    }
  }

  componentDidMount(){
    fetch(`${apiUrl}/api/v1/patios`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(patios => {
      this.setState({ patios: patios })
    })
  }

  render() {
    let patios = this.state.patios.map(patioObject => {
      let patio = patioObject.patio
      return(
        <PatioTile
          key={patio.id}
          name={patio.name}
          neighborhood={patio.neighborhood}
          description={patio.description}
        />
      )
    })

    return(
      <div>
        {patios}
      </div>
    )
  }
}

export default PatiosIndex;
