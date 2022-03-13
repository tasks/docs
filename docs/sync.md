---
id: sync
title: Synchronization
sidebar_label: Synchronization
---

Tasks can be used offline, synchronized with Tasks.org, or synchronized
with a variety of third-party apps and services

Tasks synchronization options, with the exception of Google Tasks, are based on
the [iCalendar standard](https://en.wikipedia.org/wiki/ICalendar).

The following tables provide a comparison of services and features supported by Tasks

|   | Tasks.org | [Google Tasks](google_tasks_intro.md) | [DAVx⁵](davx5.md) | [CalDAV](caldav_intro.md) | [EteSync app](etesync_intro.md) | [EteSync](etesync_intro.md) | [DecSync CC](decsync.md) |
| -:|:---:|:------------:|:-----:|:------:|:--------------:|:-------:|:------------:|
| In-app subscription required | Yes¹ | No² | Yes | Yes | Yes | Yes | Yes |
| Third-party service cost | | Free | Free/Paid | Free/Paid | Paid | Paid | |
| Open-source self-hosting | | | Free | Free | Free | Free | |
| Subtasks | Multi-level | Single-level | Multi-level | Multi-level | Multi-level | Multi-level | Multi-level |
| Web interface | | ✓ | ✓³ | ✓³ | ✓ | ✓ | |
| [Sharing](sharing.md) | ✓ | | | ✓ | | ✓ | |
| [Manual sorting](manual_sort_mode.md) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create lists | ✓ | ✓ | | ✓ | | ✓ | |
| Rename lists | ✓ | ✓ | | ✓ | | ✓ | |
| Delete lists | ✓ | ✓ | | ✓ | | ✓ | |
| Change list color | ✓ | | | ✓ | | ✓ | |
| End-to-end encryption | | | | | ✓ | ✓ | |

Not all task information synchronizes with third party services. The following
table lists the metadata currently synchronized with each service

|   | Tasks.org | Google Tasks | DAVx⁵ / EteSync app / DecSync CC| CalDAV | EteSync |
| -:|:---:|:------------:|:-----------:|:-------:|:------:|
| Title | ✓ | ✓ | ✓ | ✓ | ✓ |
| Due date | ✓ | ✓ | ✓ | ✓ | ✓ |
| Due time | ✓ | | ✓ | ✓ | ✓ |
| Start time | ✓ | | ✓ | ✓ | ✓ |
| Creation date | ✓ | ✓ | ✓ | ✓ | ✓ |
| Modification date | ✓ | ✓ | ✓ | ✓ | ✓ |
| Completion date | ✓ | ✓ | ✓ | ✓ | ✓ |
| Subtasks | ✓ | ✓ | ✓ | ✓ | ✓ |
| Description | ✓ | ✓⁴ | ✓ | ✓ | ✓ |
| Priority | ✓ | | ✓ | ✓ | ✓ |
| Location | ✓ | | ✓ | ✓ | ✓ |
| Tags | ✓ | | ✓ | ✓ | ✓ |
| Recurrence | ✓ | | ✓ | ✓ | ✓ |
| Reminders | ✓ | | ✓ | ✓ | ✓ |
| Random reminders | | | | | |
| Location reminders | | | | | |
| Repeat after completion | | | | | |
| Attachments | | | | | |
| Calendar event | | | | | |
| Timer | | | | | |
| Comments | | | | | |

¹ Google Play subscription or [GitHub
sponsorship](https://github.com/sponsors/abaker) required

² In-app subscription required to add two or more Google Task accounts

³ Support varies by CalDAV service

⁴ Limited to 8192 characters
