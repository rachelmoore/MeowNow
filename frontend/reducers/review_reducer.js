import merge from 'lodash-merge';
import { RECEIVE_REVIEWS, RECEIVE_SINGLE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_SINGLE_REVIEW:
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