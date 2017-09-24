import React from 'react';
import { Link } from 'react-router-dom';

const LocationsIndexItem = ({ location }) => {
  return (
    <li>
      <div className="location-index-item-main">
        <div className="location-index-item-image">
          <img src="https://pbs.twimg.com/media/CpPmkGJUkAAjbL6.jpg" height="100px" width="100px" />
        </div>
        <div id="location-index-item-main-info">
          <Link className="location-index-item-name" to={`/locations/${location.id}`}>
            { location.location_name }
          </Link>
          <p className="location-index-item-rating">5 STARS</p>
          <p className="location-index-item-free">{location.free}</p>
          <p className="location-index-item-adoptable">{location.adopatble}</p>
        </div>
      </div>
      <div className="location-index-item-contact">
        <p>{location.address}</p>
      </div>
    </li>
  )
}

export default LocationsIndexItem;
