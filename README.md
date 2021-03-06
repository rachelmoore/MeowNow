# MeowNow

![MeowNow](http://res.cloudinary.com/df9oqycdp/image/upload/v1506718564/catfacedoodle_etknl9.png)

See [MeowNow.io](https://meownowdotio.herokuapp.com/#/ "MeowNow.io") in action!

MeowNow, a Yelp clone, is a social media application that allows users to search for locations where public cats are available, read reviews about each location, and post their own reviews for a location.

## Core Features
* Create and sign in to accouts using Ruby's BCrypt hash algorithm. 
* Demo account so interested parties can see full functionality of the site. 
* Harness the power of Google Maps' [geolocation API](https://developers.google.com/maps/documentation/geolocation/intro "geolocation API") to search for 'public cats' by city. 
* List search results with corresponding map. 
* Update search results instantly as map bounds are changed (via zoom-in and zoom-out) without refreshing the page (thanks, React! :heart:)
* Display details for each location: location name, address, contact info. 
* Create and delete reviews for each location upon registering for an account or signing in to the demo account. 

## Design 

I wanted MeowNow.io to have a stark overall look with increasingly playful/haphazard design accents. My color palette was inspired by the Google Maps "retro" theme that I styled my map with: https://mapstyle.withgoogle.com/ 

* #E68958 - orange
* #F8C967 - light orange
* #A5B076 - green
* #B9D3C2 - blue
* #F76058 - red orange
* #EBE3CD - neutral

## Homepage & Modal login 

![](http://res.cloudinary.com/df9oqycdp/image/upload/v1506720858/Screen_Shot_2017-09-29_at_1.35.31_PM_dmww2v.png)
![](http://res.cloudinary.com/df9oqycdp/image/upload/v1506720859/Screen_Shot_2017-09-29_at_1.35.46_PM_tjhrup.png)

## Search

![](http://res.cloudinary.com/df9oqycdp/image/upload/v1506721989/FINALCATSSEARCH-min_dkiyey.gif)

The React magic happens in my LocationsIndexMap React component. When I create a map, `mapOptions` are passed in to style the map. I initialize with SF bounds but no matter what the search is it will render the map based on the search query even if no 'cat locations' exist there. 

The map re-renders based on `this.props.bounds`.

The markers and locations index data update when the bounds change via the event listener.
```
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.catLocations);
    this.props.catLocations.forEach(catLocation => this.locationMarker(catLocation));

    this.map.addListener('bounds_changed', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const newBounds = {
        northEast: { lat:north, lng: east },
        southWst: { lat: south, lng: west }
        };
      this.props.updateBounds(newBounds);
      this.MarkerManager.updateMarkers(this.props.catLocations);
      this.props.catLocations.forEach(catLocation => this.locationMarker(catLocation));
    });
}
```

## Reviews Creation & Deletion

![](http://res.cloudinary.com/df9oqycdp/image/upload/v1506722355/REVIEWS-min_fibxkw.gif)

## Random Location Cat Generator

![RandomCatGenerator](http://res.cloudinary.com/df9oqycdp/image/upload/v1506721141/catsgenerator-min_rwqtl8.gif)

## Built With 

* Heroku
* Ruby On Rails
* jBuilder
* PostgreSQL
* React/Redux
* JavaScript
* CSS
* npm
* Webpack

## Future Directions for the Project

* Users can add locations to the database for admin vetting.
* Locations have a user-submitted gallery of images. 
* Reviewers can upload images. 
* Implement [react-rating](https://www.npmjs.com/package/react-rating "react-rating")

