---
id: location
title: Location
---

Tasks offers several location-based features

* Location-based reminders
  * Remind on arrival
  * Remind on departure
* Organize your tasks by places
  * Search for places by name
  * Look up places on a map

Your location is never transmitted to Tasks.org or shared with third-parties.
Some place search and reverse geocoding API calls are proxied through
Tasks.org. For more information visit [Task.org's privacy policy](privacy.md)

### Map tiles

* If Google Play Services are available then Tasks will use Google Maps tiles
* If Google Play Services are unavailable then OpenStreetMap tiles will be used

### Reverse geocoding

* If Tasks is installed from the Play Store it will use Mapbox for reverse
  geocoding
* If Tasks is installed from F-Droid it will use Nominatim for reverse
  geocoding

### Location search

Location search will be biased towards the center of the visible map area

* If you have a Tasks.org account then Tasks will use Google Places. Google
Places results include business phone numbers and website URLs, which will be
provided as shortcuts
* If you do not have a Tasks.org account then Tasks will use Mapbox

### Location-based reminders

Tasks can notify you when you arrive and/or depart from a location. You must
grant Tasks permission to access your location in order to use location-based
reminders

* If Google Play Services are available then Tasks will use Google Play
  Location Services to set up geofences
* If Google Play Services are unavailable then Tasks will use the [Android
  LocationManager](https://developer.android.com/reference/android/location/LocationManager)
  to set up geofences. Some Android devices may not support LocationManager
  geofencing
