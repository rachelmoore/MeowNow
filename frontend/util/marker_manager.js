export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(locations){
    const locationsObj = {};
    locations.forEach(location => locationsObj[location.id] = location);

    locations
      .filter(location => !this.markers[location.id])
      .forEach(newLocation => this.createMarkerFromLocation(newLocation, this.handleClick))

    Object.keys(this.markers)
      .filter(locationId => !locationsObj[locationId])
      .forEach((locationId) => this.removeMarker(this.markers[locationId]))
  }

  createMarkerFromLocation(location) {
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id
    });

    marker.setMap(this.map);
    this.markers[location.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.locationId].setMap(null);
    delete this.markers[marker.locationId];
  }
}
