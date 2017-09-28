export const getReviews = (locationId) => (
    $.ajax({
        method: 'GET', 
        url: `api/locations/${locationId}/reviews`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: 'POST', 
        url: `api/locations/${review.location_id}/reviews`, 
        data: review 
    })
);

export const updateReview = (review) => (
    $.ajax({
        method: 'PATCH', 
        url: `api/gyms/${review.location_id}/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = (review) => (
    $.ajax({
        method: 'DELETE', 
        url: `api/reviews/${review.id}`
    })
);