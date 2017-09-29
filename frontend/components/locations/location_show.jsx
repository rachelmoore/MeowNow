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
    this.props.fetchRandomCat(this.props.match.params.locationId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.locationId !== this.props.match.params.locationId){
      this.props.fetchLocation(newProps.match.params.locationId);
    }
    this.setState(newProps);
  }

  render() {
    const location = this.state.location;
    const cat = this.props.cat;
    if (!this.props.cat) {
      return null;
    } 

    // const cat = this.props.cat;
    // if(cat.location_id)

    if (location) {
    return(
      <div>
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
                <div className="location-show-right-container">
                  <div className="corkboard">
                    <div className="location-show-post-it">
                      <p>Number of cats: 3</p>
                      <p>Adoptable: false</p>
                      <p>Free: false</p>
                    </div>
                    <div className="location-cats">
                      <center><p className="featured-cat-text">Featured Cat:</p></center>
                      <div className="featured-cat-img-container">
                        <img src={cat.img_url} className="featured-cat" />
                        <center><p className="cat-name-text">{cat.name}</p></center>
                      </div>
                    </div> 
                  </div>
                </div>

              </div>

            </div>

          </div>
          <div className="location-show-reviews-container">
            <ReviewsIndexContainer locationId={this.props.locationId}/> 
            
          </div>
        </div>
      </div>
    );
  } 
  }

}

export default LocationShow;
