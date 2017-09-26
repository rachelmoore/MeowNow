import * as ApiUtil from '../util/map_api_util';
import { fetchLocations } from './location_actions';

export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';

//needs to be input not bounds?
export const fetchCity = query => dispatch => (
  ApiUtil.fetchCity(query).then(geocodeData => dispatch(fetchLocations(geocodeData))
                            .then(() => dispatch(receiveBounds(geocodeData.results[0].geometry.location))) )
)

// dispatch(receiveBounds(geocodeData.data.result[0].geometry.bounds)))
// [:data][:results]["0"][:geometry][:bounds]

export const receiveBounds = bounds => ({
  type: RECEIVE_BOUNDS,
  bounds: bounds
})
