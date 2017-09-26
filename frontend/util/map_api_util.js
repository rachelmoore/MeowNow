export const fetchCity = (query) => (
  $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyC0ZuCkgAxaQGXoIaSo10c7mDi-NRlbYgI`
  })
)
