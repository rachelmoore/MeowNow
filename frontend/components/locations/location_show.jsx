import React from 'react';
import { Link } from 'react-router-dom';
import LocationShowMap from '../maps/location_show_map';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import ReviewFormContainer from '../reviews/review_form_container';

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
      <div className="location-show-container">

        <div className="location-show-subcontainer">
          <div className="location-show-left-container">
            <div className="location-show-header-container">
              <div className="location-show-name">
                <h3>{location.location_name}</h3>
              </div>
              <div className="location-show-rating">
                <i className="fa fa-star fa-1x" aria-hidden="true"></i><i className="fa fa-star fa-1x" aria-hidden="true"></i><i className="fa fa-star fa-1x" aria-hidden="true"></i><i className="fa fa-star fa-1x" aria-hidden="true"></i><i className="fa fa-star fa-1x" aria-hidden="true"></i>
              </div>
            </div>

            <div className="location-show-map-cats-container">
              <div className="location-map-contact-container">
                <div className="location-map">
                  <LocationShowMap showLocation={location} fetchLocation={this.props.fetchLocation}/>
                </div>
                <div className="location-contact">
                  <p>{location.street_address}</p>
                  <p>{location.city} {location.state}</p>
                </div>
              </div>
              <div className="location-cats-list-container">
                <div className="location-cats">
                  <img src="https://borderlands-books.com/images/bio_ripley.jpg" height="100px" width="100px" />
                  <p>Ripley</p>
                </div>
              </div>
            </div>

          </div>

          <div className="location-show-right-container">
            <div className="location-show-properties">
              <h3>Location Properties:</h3>
              <p>Number of cats: {this.state.location.num_cats}</p>
              <p>Adoptable: false</p>
              <p>Free: false</p>
            </div>
          </div>
        </div>
        <div className="location-show-reviews-container">
          <ReviewsIndexContainer locationId={this.props.locationId}/> 
          
        </div>
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
