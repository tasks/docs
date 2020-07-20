---
id: sync
title: Synchronization
sidebar_label: Synchronization
---

Tasks.org does not host any synchronization services or have access to your
data. Tasks can be used offline, or it can be synchronized with third-party
services, with support for [Google Tasks](google_tasks_intro.md),
[CalDAV](caldav_intro.md), and [EteSync](etesync_intro.md)

The following tables provide a comparison of each service

|   | Google Tasks | CalDAV | EteSync |
| -:|:------------:|:------:|:-------:|
| In-app subscription required | No [1] | Yes | Yes |
| Third-party service cost | Free | Free/Paid | Paid |
| Open-source self-hosting | | Free | Free |
| Share task lists | | ✓ [2] | ✓ |
| Web interface | ✓ | ✓ [2] | ✓ |
| Manual sorting | ✓ | ✓ | ✓ |
| Subtasks | Single-level | Multi-level | Multi-level |
| End-to-end encryption | | | ✓ |

Not all task information synchronizes with third party services. The following
table lists the metadata currently synchronized with each service

|   | Google Tasks | CalDAV | EteSync |
| -:|:------------:|:------:|:-------:|
| Title | ✓ | ✓ | ✓ |
| Due date | ✓ | ✓ | ✓ |
| Due time | | ✓ | ✓ |
| Creation date | ✓ | ✓ | ✓ |
| Modification date | ✓ | ✓ | ✓ |
| Completion date | ✓ | ✓ | ✓ |
| Subtasks | ✓ | ✓ | ✓ |
| Description | ✓[3] | ✓ | ✓ |
| Priority | | ✓ | ✓ |
| Location | | ✓ | ✓ |
| Tags | | ✓ | ✓ |
| Recurrence | | ✓ | ✓ |
| Repeat after completion | | | |
| Reminders | | | |
| Location reminders | | | |
| Attachments | | | |
| Hide until | | | |
| Calendar event | | | |
| Timer | | | |
| Comments | | | |

[1]: In-app subscription required to add two or more Google Task accounts

[2]: Support varies by CalDAV service

[3]: Limited to 8192 characters
