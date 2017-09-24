import React from 'react';
import { Link } from 'react-router-dom';

const LocationsIndexItem = ({ location }) => {
  return (
    <li>
      <div className="locations-index-item-all">

        <div className="locations-index-item-name">
          <Link className="locations-index-item-name-link" to={`/locations/${location.id}`}>
            { location.location_name }
          </Link>
        </div>

        <div className="locations-index-item-info">
          <div className="locations-index-item-photo">
            <img src="https://pbs.twimg.com/media/CpPmkGJUkAAjbL6.jpg" height="100px" width="100px" />
          </div>
          <div className="locations-index-item-details-container">
            <div className="locations-index-item-details">
            <p className="locations-index-item-rating">5 STARS</p>
            <p>{location.street_address}</p>
            <p>{location.city} {location.state}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default LocationsIndexItem;
