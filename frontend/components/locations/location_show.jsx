import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocation(this.props.match.params.locationId);
  }

  render() {
    const location = this.props.location;
    if (location) {
    return(
      <div>
        {location.location_name}
      </div>
    )
  } else {
    return (
      <div><h1>Loading...</h1></div>
    )
    }
  }

}

export default LocationShow;
