import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import { fetchBounds } from '../../actions/map_actions';
import { fetchCity } from '../../actions/map_actions';
import Search from './search';

const mapStateToProps = state => ({
  locations: Object.values(state.locations),
  bounds: state.bounds
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: (query) => dispatch(fetchLocations(query)),
  fetchCity: (query) => dispatch(fetchCity(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
