import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import { fetchBounds } from '../../actions/map_actions';
import Search from './search';

const mapStateToProps = state => ({
  locations: Object.values(state.locations),
  bounds: state.bounds
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: (input, bounds) => dispatch(fetchLocations(input, bounds)),
  fetchBounds: (bounds) => dispatch(fetchBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
