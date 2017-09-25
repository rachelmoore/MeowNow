export const fetchGeocodeData = (input) => (
  $.ajax({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=#{input}&key=AIzaSyC0ZuCkgAxaQGXoIaSo10c7mDi-NRlbYgI'
  })
)
