import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import { logout } from '../../actions/session_actions';
import LocationsIndex from './locations_index';
import { fetchBounds, updateBounds } from '../../actions/map_actions';

const mapStateToProps = state => ({
  locations: Object.values(state.locations),
  bounds: state.bounds
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  fetchBounds: (bounds) => dispatch(fetchBounds(bounds)), 
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsIndex);
