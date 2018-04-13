---
id: caldav_icloud
title: Set up iCloud synchronization
---

Tasks can synchronize data using iCloud Calendar's CalDAV interface. You may use iCloud's calendar sharing feature to share task lists with other iCloud users

### Prepare your iCloud account

**An iPhone, iPad, or macOS device is required to enable iCloud Calendar and two-factor authentication**

* Register for a free account at [icloud.com](https://www.icloud.com)
* [Enable two-factor authentication](https://support.apple.com/en-us/HT204915) on your account
* [Enable iCloud Calendar](https://support.apple.com/en-us/HT208681) on your account

### Locate your CalDAV URL

Log in to [icloud.com/calendar](https://www.icloud.com/calendar)

1. Open the 'Calendar Sharing' dialog on any calendar
2. Click the check mark next to 'Public calendar'
3. Note the host name for your public calendar. In this example image the host is ```p11-calendars.icloud.com``` 
4. Click 'Cancel' so that your calendar is not made public
5. Use the host from step three when setting up your account in Tasks. In this example the user would enter ```https://p11-calendars.icloud.com```

![iCloud setup](/img/icloud_setup.png)

### Generate an app-specific password

Third party apps must use app-specific passwords in order to access iCloud data. Follow [these instructions](https://support.apple.com/en-us/HT204397) to generate an app-specific password. You will enter this app-specific password when adding your iCloud account to Tasks