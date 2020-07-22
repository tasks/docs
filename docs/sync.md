---
id: sync
title: Synchronization
sidebar_label: Synchronization
---

Tasks.org does not host any synchronization services or have access to your
data. Tasks can be used offline, or it can be synchronized with third-party
services, with support for [Google Tasks](google_tasks_intro.md),
[CalDAV](caldav_intro.md), and [EteSync](etesync_intro.md).

Currently in [alpha testing](pre_release_testing.md): Tasks can also synchronize with
[DAVx⁵](https://play.google.com/store/apps/details?id=at.bitfire.davdroid) or
the [EteSync Android
client](https://play.google.com/store/apps/details?id=com.etesync.syncadapter&hl=en_US)

The following tables provide a comparison of services and features supported by
Tasks

|   | Google Tasks | DAVx⁵ | CalDAV | EteSync client | EteSync |
| -:|:------------:|:-----:|:------:|:--------------:|:-------:|
| In-app subscription required | No¹ | Yes | Yes | Yes | Yes |
| Third-party service cost | Free | Free/Paid | Free/Paid | Paid | Paid |
| Open-source self-hosting | | Free | Free | Free | Free |
| Subtasks | Single-level | Multi-level | Multi-level | Multi-level | Multi-level |
| Web interface | ✓ | ✓² | ✓² | ✓ | ✓ |
| Share task lists | | ✓² | ✓² | ✓ | ✓ |
| [Manual sorting](manual_sort_mode.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create lists | ✓ | | ✓ | | ✓ |
| Rename lists | ✓ | | ✓ | | ✓ |
| Delete lists | ✓ | | ✓ | | ✓ |
| Change list color | | | ✓ | | ✓ |
| End-to-end encryption | | | | ✓ | ✓ |

Not all task information synchronizes with third party services. The following
table lists the metadata currently synchronized with each service

|   | Google Tasks | CalDAV/DAVx⁵| EteSync |
| -:|:------------:|:-----------:|:-------:|
| Title | ✓ | ✓ | ✓ |
| Due date | ✓ | ✓ | ✓ |
| Due time | | ✓ | ✓ |
| Creation date | ✓ | ✓ | ✓ |
| Modification date | ✓ | ✓ | ✓ |
| Completion date | ✓ | ✓ | ✓ |
| Subtasks | ✓ | ✓ | ✓ |
| Description | ✓³ | ✓ | ✓ |
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

¹ In-app subscription required to add two or more Google Task accounts

² Support varies by CalDAV service

³ Limited to 8192 characters
