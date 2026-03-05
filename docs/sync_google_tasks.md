---
id: sync_google_tasks
title: Google Tasks
---

Google Tasks is a basic task list service provided by Google. Google Tasks can be accessed from GMail, Google Calendar,
or a variety of third party clients.

Google Tasks support is available without a subscription. To get started tap
on `⚙ > Not signed in > Google Tasks`

Google Tasks does not support all of Tasks.org's features so it important to understand the limitations.

| Feature | Supported | Notes                                                                                             |
|---------|-----------|---------------------------------------------------------------------------------------------------|
| Title | ✅ |                                                                                                   |
| Start date | ❌ |                                                                                                   |
| Due date | ⚠️ | [Time of day not supported by Google Tasks API](https://issuetracker.google.com/issues/128979662) |
| Recurrence | ❌ | [Not available through Google Tasks API](https://issuetracker.google.com/issues/36759725)         |
| Priority | ❌ |                                                                                                   |
| Tags | ❌ |                                                                                                   |
| Subtasks | ⚠️ | Nested subtasks not supported                                                                     |
| Reminders | ❌ | [Not available through Google Tasks API](https://issuetracker.google.com/issues/36759725)         |
| Description | ⚠️ | Limited to 8192 characters                                                                        |
| Location reminders | ❌ |                                                                                                   |
| Attachments | ❌ |                                                                                                   |
| Timer | ❌ |                                                                                                   |
| Comments | ❌ |                                                                                                   |

### Privacy and security

Tasks.org synchronizes directly with Google Tasks' servers,
and I never have access to your Google Tasks data.

Tasks.org will be flagged in your Google Security Checkup
because I am an unverified developer. It costs $15,000-75,000 USD to get verified,
which is cost prohibitive.

### Recurrence, reminders, and due times

Recurrence, reminders, and due times were added to the Google Tasks service in
early 2019. Unfortunately the third-party Google Tasks API did not receive a
similar update, so this data is not available to third-party clients like Tasks.org.

### Additional features

* Re-order tasks and create subtasks using [manual sort
  mode](manual_sort_mode.md)
* Create, rename, and delete Google Task lists
* Move tasks between Google Task lists

### Grant OAuth 2.0 access

Tasks.org requires permission to use the Google Task web API with your account. If
you no longer use Google Task synchronization you may revoke this permission by
visiting your Google [security
settings](https://myaccount.google.com/permissions).
