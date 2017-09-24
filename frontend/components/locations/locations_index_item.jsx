import React from 'react';
import { Link } from 'react-router-dom';

const LocationsIndexItem = ({ location }) => {
  return (
    <li>
      <Link className="location-index-item-name" to={`/locations/${location.id}`}>
        { location.location_name }
      </Link>
    </li>
  )
}

export default LocationsIndexItem;
