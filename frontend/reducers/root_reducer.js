import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import LocationsReducer from './locations_reducer';
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  locations: LocationsReducer,
  bounds: MapReducer
});

export default RootReducer;
