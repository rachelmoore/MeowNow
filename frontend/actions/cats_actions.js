import * as ApiUtil from '../util/cats_api_util';
export const RECEIVE_CAT = 'RECEIVE_CAT';

export const fetchRandomCat = (location_id) => dispatch => (
    ApiUtil.fetchRandomCat(location_id).then(cat => dispatch(receiveCat(cat)))
);

export const receiveCat = (cat) => ({
    type: RECEIVE_CAT,
    cat
});

