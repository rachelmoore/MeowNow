
import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const getReviews = (id) => dispatch => (
    ApiUtil.getReviews(id).then(reviews => dispatch(RECEIVE_ALL_REVIEWS(reviews)))
);

export const createReview = (review) => dispatch => (
    ApiUtil.createReview(review).then(review => dispatch(receiveSingleReview(review)))
);

export const updateReview = (review) => dispatch => (
    ApiUtil.updateReview(review).then(review => dispatch(receiveAllReviews(review)))
);

export const deleteReview = (review) => dispatch => (
    ApiUtil.deleteReview(review).then(review => dispatch(removeReview(review)))
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

