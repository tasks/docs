---
id: caldav_setup_account
title: Adding a CalDAV account
---

Select ```Tasks settings > Synchronization > Add account > CalDAV``` and enter
the following details:

* **User** for authentication with your CalDAV server
* **Password** for authentication with your CalDAV server
  * Android 6+: Passwords will be encrypted with the Android KeyStore
  * Android 4 and 5: Passwords will be stored in **plain text**
* **URL** to your CalDAV home set
  * Tasks will follow the ```./well-known/caldav``` redirect for URLs that use
    SSL. As an example you can enter ```https://my.owndrive.com``` and Tasks
    will find your home set
  * For servers that do not provide a redirect you will need to enter the home
    set URL yourself. This URL will vary by server, but will look something
    like ```https://example.com/remote.php/caldav/calendars/myusername/```
* **Let server schedule recurring tasks** Some servers, such as mailbox.org,
  will schedule recurring tasks for you. Enable this option to prevent Tasks
  from scheduling the next instance of a recurring task
