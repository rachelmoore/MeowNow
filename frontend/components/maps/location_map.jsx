import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class LocationMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }


  render() {
    return (
      <div className="location-map" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(LocationMap);
