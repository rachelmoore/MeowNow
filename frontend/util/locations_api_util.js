export const fetchLocations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/locations'
  })
);

export const fetchLocation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
);
