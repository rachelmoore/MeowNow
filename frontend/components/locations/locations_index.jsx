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
    if (locations) {
      return (
      <ul className="locations-list">
        {locations.map((location, idx) => (
          <li>{location.id}</li>
        ))}
      </ul>
    );
  } else {
    return <p>fail</p>
  }
  }

}

export default LocationsIndex;
