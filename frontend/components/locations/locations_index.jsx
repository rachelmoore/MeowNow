import React from 'react';
import LocationsIndexItem from './locations_index_item';

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
        <div className="locations-search-container">
          <div className="locations-list-and-map">
            <ul className="locations-list">
              {locations.map((location) => (
                <LocationsIndexItem key={location.id} location={location} />
              ))}
            </ul>
            <div className="locations-list-map">
              <p>Map Here.</p>
            </div>
          </div>
        </div>
    );
  }

}

export default LocationsIndex;
