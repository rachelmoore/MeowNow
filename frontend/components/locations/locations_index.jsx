import React from 'react';

class LocationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const locations = this.props.locations;
      return (
      <ul className="locations-list">
        {locations.map((location, idx) => (
          <center><li>{location.location_name}</li></center>
        ))}
      </ul>
    );
  }

}

export default LocationsIndex;
