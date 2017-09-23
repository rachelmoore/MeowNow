import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
// import { allLocations } from '../../reducers/selector';
import { logout } from '../../actions/session_actions';
import LocationsIndex from './locations_index';

const mapStateToProps = state => ({
  locations: Object.values(state.locations)
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsIndex);
