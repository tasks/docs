---
id: caldav_setup_account
title: Setup your account
---

To add a CalDAV account, select ```Tasks settings > Synchronization > CalDAV > Add account```

* **Name** to be displayed in the navigation drawer
* **URL** to your CalDAV home set
  * Tasks will synchronize all collections that support ```VTODO```
  * Tasks will follow the ```./well-known/caldav``` for URLs that use SSL. As an example you can enter ```https://my.owndrive.com``` and Tasks will find your home set
  * For servers that do not provide a redirect you will need to enter the home set URL yourself. This URL will vary by server, but will look something like ```https://example.com/remote.php/caldav/calendars/myusername/```
* **User** for authentication with your CalDAV server
* **Password** for authentication with your CalDAV server
  * Android 6+: Passwords will be encrypted with the Android KeyStore
  * Android 4 and 5: Passwords will be stored in **plain text**
