import React from 'react';
import LocationsIndexItem from './locations_index_item';
import LocationMap from '../maps/location_map';

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
              <LocationMap />
            </div>
          </div>
        </div>
    );
  }

}

export default LocationsIndex;
