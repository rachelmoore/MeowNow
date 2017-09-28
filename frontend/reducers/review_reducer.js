import { merge } from 'lodash';
import { RECEIVE_ALL_REVIEWS, RECEIVE_SINGLE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_SINGLE_REVIEW:
        debugger;
            let newState = merge({}, state);
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            let deleteState = merge({}, state);
            delete deleteState[action.review.id];
            return deleteState;
        default: 
            return state;
    }
};

export default ReviewReducer;