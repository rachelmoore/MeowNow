import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    this.props.fetchLocation(this.props.match.params.locationId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.locationId !== this.props.match.params.locationId){
      this.props.fetchLocation(newProps.match.params.locationId);
    }
    this.setState(newProps);
  }

  render() {
    const location = this.state.location;
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
