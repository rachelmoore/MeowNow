import React from 'react';
import { Link } from 'react-router-dom';

const LocationsIndexItem = ({ location }) => {
  return (
    <li>
      <div className="locations-index-item-all">
      <div className="locations-index-item-image">
        <img src="https://pbs.twimg.com/media/CpPmkGJUkAAjbL6.jpg" height="100px" width="100px" />
      </div>

      <div className="locations-index-item-main">
        <Link className="locations-index-item-name" to={`/locations/${location.id}`}>
          { location.location_name }
        </Link>
          <p className="locations-index-item-rating">5 STARS</p>
          <p className="locations-index-item-free">{location.free}</p>
          <p className="locations-index-item-adoptable">{location.adoptable}</p>
      </div>

      <div className="locations-index-item-contact">
        <p>{location.street_address}</p>
        <p>{location.city} {location.state}</p>
      </div>
    </div>
    </li>
  )
}

export default LocationsIndexItem;
