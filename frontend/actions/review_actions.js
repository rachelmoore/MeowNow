
import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const getReviews = (id) => dispatch => (
    ApiUtil.getReviews(id).then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const createReview = (review) => dispatch => (
    ApiUtil.createReview(review).then(thisReview => dispatch(receiveSingleReview(thisReview)))
);

export const updateReview = (review) => dispatch => (
    ApiUtil.updateReview(review).then(thisReview => dispatch(receiveAllReviews(thisReview)))
);

export const deleteReview = (review) => dispatch => (
    ApiUtil.deleteReview(review).then(thisReview => dispatch(removeReview(thisReview)))
);

export const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS, 
    reviews 
});

export const receiveSingleReview = review => ({
    type: RECEIVE_SINGLE_REVIEW, 
    review
});

export const removeReview = review => ({
    type: REMOVE_REVIEW, 
    review 
});

