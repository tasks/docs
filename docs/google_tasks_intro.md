---
id: google_tasks_intro
title: Google Tasks
sidebar_label: Google Tasks
---

[Google Tasks](https://support.google.com/calendar/answer/106237) is a basic
task list service provided by Google. Google Tasks can be accessed from GMail,
Google Calendar, or a variety of third party clients.

Tasks can synchronize a portion of its data through Google Tasks. Given the
limited amount of information supported by Google Tasks you will only be able
to synchronize the following:

* Title
* Due date ([without time of day](https://issuetracker.google.com/issues/128979662))
* Description

No other data can be synchronized through Google Tasks

**Please note:** Tasks.org will be flagged in your Google Security Checkup
because I am an unverified developer. Unfortunately it costs approximately
$15,000-75,000 USD to get verified, so this situation is unlikely to change

### Recurrence, reminders, and due times

Recurrence, reminders, and due times were added to the Google Tasks service in
early 2019. Unfortunately the third-party Google Tasks API did not receive a
similar update, so this data is not available to third-party clients like Tasks.

You can read more on Google's public issue tracker
[here](https://issuetracker.google.com/issues/128979662) and
[here](https://issuetracker.google.com/issues/36759725)

### Additional features

* Re-order tasks and create subtasks using [manual sort
  mode](manual_sort_mode.md)
* Create, rename, and delete Google Task lists
* Move tasks between Google Task lists

### Adding an account

To get started tap on ```☰ > Settings > Synchronization > Add account >
Google Tasks```

### Grant the contacts permission (Android 6 + 7 only)

Tasks requires the `contacts` permission on versions of Android prior to 8.0.
This permission is needed to access the Google accounts registered on your
device

### Choose an account

Select the Google account that you would like to synchronize with. A
[subscription](subscribe.md) is required to synchronize with two or more Google
accounts

### Grant OAuth 2.0 access

Tasks requires permission to use the Google Task web API with your account. If
you no longer use Google Task synchronization you may revoke this permission by
visiting your Google [security
settings](https://myaccount.google.com/permissions).

