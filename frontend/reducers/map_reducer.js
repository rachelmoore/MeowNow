import { RECEIVE_BOUNDS} from '../actions/map_actions';
import { merge } from 'lodash';

const defaultMapBounds = { northeast: { lat: 37.9298239, lng: -122.28178 }, southwest: { lat: 37.6398299, lng: -123.173825} }

const MapReducer = (state = defaultMapBounds, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOUNDS:
      return action.bounds;
    default:
      return state;
  }
}

export default MapReducer;
