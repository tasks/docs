---
id: caldav_setup_account
title: Add your account to Tasks
---

Select ```Tasks settings > Synchronization > CalDAV > Add account``` and enter the following details:

* **Name** to be displayed in the navigation drawer
* **URL** to your CalDAV home set
  * Tasks will follow the ```./well-known/caldav``` redirect for URLs that use SSL. As an example you can enter ```https://my.owndrive.com``` and Tasks will find your home set
  * Tasks does not support self-signed certificates. Support for self-signed certificates will be added in a future release
  * For servers that do not provide a redirect you will need to enter the home set URL yourself. This URL will vary by server, but will look something like ```https://example.com/remote.php/caldav/calendars/myusername/```
* **User** for authentication with your CalDAV server
* **Password** for authentication with your CalDAV server
  * Android 6+: Passwords will be encrypted with the Android KeyStore
  * Android 4 and 5: Passwords will be stored in **plain text**
