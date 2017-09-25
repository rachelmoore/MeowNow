import * as ApiUtil from '../util/map_api_util';

export const RECEIVE_GEOCODE_DATA = 'RECEIVE_GEOCODE_DATA';

export const fetchGeocodeData = geocodeData => dispatch => (
  ApiUtil.fetchGeocodeData(geocodeData).then(geocodeData => dispatch(receiveGeocodeData(geocodeData.results[0])))
)

export const receiveGeocodeData = geocodeData => ({
  type: RECEIVE_GEOCODE_DATA,
  geocodeData: geocodeData
})
