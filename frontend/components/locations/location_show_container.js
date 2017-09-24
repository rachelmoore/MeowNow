import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import LocationShow from './location_show';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
  location: state.locations[ownProps.match.params.locationId]
}};

const mapDispatchToProps = dispatch => ({
  fetchLocation: (location) => dispatch(fetchLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationShow);
