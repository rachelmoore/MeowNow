# MeowNow

See [MeowNow.io](https://meownowdotio.herokuapp.com/#/ "MeowNow.io") in action!

MeowNow, a Yelp clone, is a social media application that allows users to search for locations where public cats are available, read reviews about each location, and post their own reviews for a location.

## Core Features & Implementation Details 

* Create and sign in to accouts using Ruby's BCrypt hash algorithm. 
* Demo account so interested parties can see full functionality of the site. 
* Harness the power of Google Maps' [geolocation API](https://developers.google.com/maps/documentation/geolocation/intro "geolocation API") to search for 'public cats' by city. 
* List search results with corresponding map. 
* Update search results instantly as map bounds are changed (via zoom-in and zoom-out) without refreshing the page (thanks, React! :heart:)
* Display details for each location: location name, address, contact info. 
* Create and delete reviews for each location upon registering for an account or signing in to the demo account. 
