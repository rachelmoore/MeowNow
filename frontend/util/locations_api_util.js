export const fetchLocations = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    data: { data }
  })
);

export const fetchLocation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
);
