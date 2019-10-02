import React, { Component } from 'react';
import Map from './Map';


class Home extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: -37.8142176, lng: 144.9631608}}
       height='300px'
       zoom={15}
      />
        )
    }
  }

export default Home;