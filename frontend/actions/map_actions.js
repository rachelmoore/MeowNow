import * as ApiUtil from '../util/map_api_util';

export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';

//needs to be input not bounds?
export const fetchBounds = bounds => dispatch => (
  ApiUtil.fetchBounds(bounds).then(geocodeData => dispatch(receiveBounds(geocodeData.results[0])))
)

export const receiveBounds = bounds => ({
  type: RECEIVE_BOUNDS,
  bounds: bounds
})
