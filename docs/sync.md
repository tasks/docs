---
id: sync
title: Synchronization
sidebar_label: Overview
---

Tasks can be used offline, synchronized with Tasks.org, or synchronized
with a variety of third-party apps and services:

* [Google Tasks](sync_google_tasks.md)
* [Microsoft To Do](sync_microsoft.md)
* [DAVx⁵](sync_davx5.md)
* [CalDAV](sync_caldav.md)
* [EteSync](sync_etesync.md)
* [DecSync CC](sync_decsync.md)

Tasks synchronization options, with the exception of Google Tasks and Microsoft To Do, are based on
the [iCalendar standard](https://en.wikipedia.org/wiki/ICalendar).

The following tables provide a comparison of services and features supported by Tasks

|   | Tasks.org | [Google Tasks](sync_google_tasks.md) | [DAVx⁵](sync_davx5.md) | [CalDAV](sync_caldav.md) | [EteSync app](sync_etesync.md) | [EteSync](sync_etesync.md) | [DecSync CC](sync_decsync.md) |
| -:|:---:|:---------------------------------:|:-------------------:|:---------------------:|:--------------:|:-------:|:------------:|
| In-app subscription required | Yes¹ |                No                 |         Yes         |          Yes          | Yes | Yes | Yes |
| Third-party service cost | |               Free                |      Free/Paid      |       Free/Paid       | Paid | Paid | |
| Open-source self-hosting | |                                   |        Free         |         Free          | Free | Free | |
| Subtasks | Multi-level |           Single-level            |     Multi-level     |      Multi-level      | Multi-level | Multi-level | Multi-level |
| Web interface | |                 ✓                 |          ✓²          |           ✓²           | ✓ | ✓ | |
| [Sharing](sharing.md) | ✓ |                                   |                     |           ✓           | | ✓ | |
| [Manual sorting](manual_sort_mode.md) | ✓ |                 ✓                 |          ✓          |           ✓           | ✓ | ✓ | ✓ |
| Create lists | ✓ |                 ✓                 |                     |           ✓           | | ✓ | |
| Rename lists | ✓ |                 ✓                 |                     |           ✓           | | ✓ | |
| Delete lists | ✓ |                 ✓                 |                     |           ✓           | | ✓ | |
| Change list color | ✓ |                                   |                     |           ✓           | | ✓ | |
| End-to-end encryption | |                                   |                     |                       | ✓ | ✓ | |

Not all task information synchronizes with third party services. The following
table lists the metadata currently synchronized with each service

|   | Tasks.org | Google Tasks | DAVx⁵ / EteSync app / DecSync CC| CalDAV | EteSync |
| -:|:---:|:------------:|:-----------:|:-------:|:------:|
| Title | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Due date | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Due time | ✓ |              | ✓ | ✓ | ✓ |
| Start time | ✓ |              | ✓ | ✓ | ✓ |
| Creation date | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Modification date | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Completion date | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Subtasks | ✓ |      ✓       | ✓ | ✓ | ✓ |
| Description | ✓ |      ✓³       | ✓ | ✓ | ✓ |
| Priority | ✓ |              | ✓ | ✓ | ✓ |
| Location | ✓ |              | ✓ | ✓ | ✓ |
| Tags | ✓ |              | ✓ | ✓ | ✓ |
| Recurrence | ✓ |              | ✓ | ✓ | ✓ |
| Reminders | ✓ |              | ✓ | ✓ | ✓ |
| Random reminders | |              | | | |
| Location reminders | |              | | | |
| Repeat after completion | |              | | | |
| Attachments | |              | | | |
| Calendar event | |              | | | |
| Timer | |              | | | |
| Comments | |              | | | |

¹ Google Play subscription or [GitHub
sponsorship](https://github.com/sponsors/abaker) required

² In-app subscription required to add two or more Google Task accounts

³ Limited to 8192 characters

### Sync Conditions

Tasks synchronizes under the following conditions:

* When the app is opened
* One minute after creating/updating items
* Once per hour when the app isn't open
* When you pull to sync
