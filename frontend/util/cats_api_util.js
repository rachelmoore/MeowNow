
export const fetchRandomCat = (location_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/locations/${location_id}/cats/random_cat_by_location`,
    })
);