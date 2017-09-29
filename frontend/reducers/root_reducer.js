import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import LocationsReducer from './locations_reducer';
import MapReducer from './map_reducer';
import ReviewReducer from './review_reducer';
import CatsReducer from './cats_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  locations: LocationsReducer,
  bounds: MapReducer, 
  reviews: ReviewReducer, 
  cats: CatsReducer
});

export default RootReducer;
