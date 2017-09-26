export const fetchLocations = (input, bounds) => (
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    data: { input, bounds }
  })
);

export const fetchLocation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
);
