import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import { getReviews } from '../../actions/review_actions';
import LocationShow from './location_show';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
  location: state.locations[ownProps.match.params.locationId],
  locationId: ownProps.match.params.locationId,
  reviews: state.reviews, 
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLocation: (location) => dispatch(fetchLocation(location)), 
  getReviews: (reviews) => dispatch(getReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationShow);
