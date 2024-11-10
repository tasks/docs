---
id: troubleshooting_notifications
title: Notification troubleshooting
sidebar_label: Notifications
---

The most common causes of notification trouble are listed below. If your
problem isn't solved here please send me an e-mail by tapping on `☰ > Help &
feedback > Contact developer` and I will help you out!

### Perform a quick notification test

You can perform a quick test to ensure notifications are enabled and working
when the app is in the foreground

1. Tap on `+` to create a new task
2. Set the due date to `Yesterday`
3. Add a `When due` reminder
4. Tap save

A few moments later you should receive a notification

### Missed notifications appear when I open the app

Some manufacturers terminate background apps to conserve battery. Please visit
[dontkillmyapp.com](https://dontkillmyapp.com) for help disabling your
manufacturer's battery restrictions

### Notifications are late (Android 6+)

Android can delay notifications to conserve battery while your device is idle.
To prevent Android from delaying Tasks' notifications:

1. Tap on `☰ > Settings > Notifications > Disable battery optimizations`
2. Tap on the dropdown and select "All apps"
3. Tap on "Tasks" and select "Don't optimize"

### I disabled battery optimizations and notifications are still late

Please visit [dontkillmyapp.com](https://dontkillmyapp.com) and make sure you
have disabled your manufacturer's battery restrictions

### Notifications only appear while the app is open

Please visit [dontkillmyapp.com](https://dontkillmyapp.com) and make sure you
have disabled your manufacturer's battery restrictions

### Notifications are silent or do not appear at all (Android 8+)

It is easy to inadvertently silence or disable reminders from the notification
shade. To check your settings tap on `☰ > Settings > Notifications > More
settings` and make sure `Notifications` are toggled on.

### Notifications don't appear on my watch

Wearable devices will not display persistent reminders. Toggle off `☰ >
Settings > Notifications > Persistent reminders`

### Notifications don't appear on my lock screen

Some lock screens exclude persistent reminders. Toggle off `☰ > Settings >
Notifications > Persistent reminders`

### Notifications are not persistent anymore

As noted in the [release notes](https://developer.android.com/about/versions/14/behavior-changes-all#non-dismissable-notifications)
of Android 14, persistent/sticky/non-dismissable notifications are no longer 
supported. There is a new "swipe to snooze" feature which can be configured to recreate
a notification immediately after it is dismissed.

### Notifications still don't work!!!

Open up the navigation drawer, tap on `☰ > Help & feedback > Contact developer` and
let me know!
