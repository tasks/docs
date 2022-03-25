---
id: caldav_intro
title: CalDAV
sidebar_label: CalDAV
---

CalDAV [[Wikipedia](https://en.wikipedia.org/wiki/CalDAV)] is an open Internet
standard for synchronizing calendar events and task lists.  Tasks can
synchronize with a variety of CalDAV servers. Set up a free or paid account
with a third party service, or host your own from a selection of open-source
servers

The following is not an exhaustive list of compatible services. If any services
are missing, outdated, or incorrect, please [send me an e-mail](mailto:support@tasks.org), or open a pull request at
[github.com/tasks/docs](https://github.com/tasks/docs)

|   | Hosting | Self-hosting | List sharing | Web interface |
| -:|:-------:|:------------:|:------------:|:-------------:|
| [Nextcloud](https://nextcloud.com/providers/) | Free/Paid | ✓ | ✓ [1] | ✓ |
| [Owncloud](https://owncloud.com/partners/find-a-partner/) | Free/Paid | ✓ | ✓ [1] | ✓ |
| [Fastmail](https://fastmail.com/) | Paid | | | |
| [Mailbox.org](https://mailbox.org) | Paid | | | ✓ |
| [fruux](https://fruux.com) | Free/Paid | | ✓ [2] | ✓ |
| [xandikos](https://xandikos.org) | | ✓ | | |
| [Radicale](https://radicale.org) | | ✓ | | |
| [Baïkal](http://sabre.io/baikal/) | | ✓ | | ✓ |
| [sabre/dav](http://sabre.io/) | | ✓ | | |
| [Synology Calendar](https://www.synology.com/en-us/dsm/feature/calendar) | | ✓ | | |
| [Apple CalendarServer](https://www.calendarserver.org/) | | ✓ | | |
| [Apple iCloud](caldav_icloud.md) | Free | | | |
| Microsoft Exchange | Paid [3] | | | |
| [Office 365](https://office365.com) | Free [3] | | ✓ | ✓ |

[1]: Not all hosting providers support sharing

[2]: Requires paid account

[3]: Requires a [DavMail Gateway](http://davmail.sourceforge.net/)


For more details about Tasks' CalDAV synchronization capabilities, visit
[tasks.org/sync](sync.md)

### Adding an account

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

