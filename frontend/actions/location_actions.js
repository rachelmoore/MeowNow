import * as ApiUtil from '../util/locations_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const fetchLocations = (query) => dispatch => (
  ApiUtil.fetchLocations(query).then(locations => dispatch(receiveLocations(locations)))
);

export const fetchLocation = (id) => dispatch => (
  ApiUtil.fetchLocation(id).then(location => dispatch(receiveLocation(location)))
)

export const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location
});
