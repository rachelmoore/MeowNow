import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import { getReviews } from '../../actions/review_actions';
import { fetchRandomCat } from '../../actions/cats_actions';
import LocationShow from './location_show';

const mapStateToProps = (state, ownProps) => {
  return {
  location: state.locations[ownProps.match.params.locationId],
  locationId: ownProps.match.params.locationId,
  reviews: state.reviews, 
  currentUser: state.session.currentUser,
  cat: state.cats
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLocation: (location) => dispatch(fetchLocation(location)), 
  getReviews: (reviews) => dispatch(getReviews(reviews)),
  fetchRandomCat: (cat) => dispatch(fetchRandomCat(cat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationShow);
