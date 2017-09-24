import { RECEIVE_LOCATIONS, RECEIVE_LOCATION } from '../actions/location_actions';
import { merge } from 'lodash';

const LocationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations;
    case RECEIVE_LOCATION:
      return merge({}, state, {[action.location.id]: action.location});
    default:
      return state;
  }
};

export default LocationsReducer;
