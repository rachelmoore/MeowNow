import React from 'react';
import LocationsIndexItem from './locations_index_item';
import LocationsIndexMap from '../maps/locations_index_map';

class LocationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchLocations();
  }

  render() {
    const locations = this.props.locations;
      return (
        <div className="locations-index-container">
          <div className="locations-list-and-map">

            <div className="locations-list">
              <ul>
                {locations.map((location) => (
                  <LocationsIndexItem key={location.id} location={location} />
                ))}
              </ul>
            </div>

            <div className="locations-list-map">
              <LocationsIndexMap catLocations={locations} fetchLocations={this.props.fetchLocations} bounds={this.props.bounds}/>
            </div>

          </div>
        </div>
    );
  }

}

export default LocationsIndex;
