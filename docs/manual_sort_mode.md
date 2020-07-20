---
id: manual_sort_mode
title: Manual sorting
---

`My order` sort mode allows you to manually rearrange your task lists. Long
press to intiate a drag-and-drop gesture, then move your task up or down to
re-arrange it, or move it to the side to turn it into a subtask

`My order` is supported for:

* Local lists
* Google Task lists
* CalDAV lists
* EteSync lists

`My order` is not yet supported for:

* Tags
* Filters

### Google Tasks

You must toggle on `☰ > Synchronization > Google Tasks > Custom order
synchronization fix` to workaround a [long-standing
bug](https://issuetracker.google.com/issues/132432317) in the Google Tasks API.
This setting will force Tasks to always perform a full synchronization of your
custom ordering and subtask information

### CalDAV and EteSync lists

Tasks implements `My order` using `x-apple-sort-order`, a non-standard
extension to the iCalendar protocol. This sort order is compatible with Apple
Reminders and Nextcloud Tasks.

### DAVx⁵ and EteSync Android client

`My order` is only supported when Tasks synchronizes directly with your CalDAV
or EteSync host. Due to technical limitiations, `My order` is not supported
when synchronizing through DAVx⁵ or the EteSync Android client

### Astrid manual sorting

Tasks supports Astrid's legacy manual sort mode for 'My Tasks', 'Today', and
tags

* This sort mode will be replaced in a future release
* Toggle on `☰ > Advanced > Astrid manual sorting` to enable this sort mode
* `Show hidden` and `Show completed` toggles are not supported
* Manual order changes in this sort mode are not reflected in `My order`
* Subtasks created in this sort mode are not visible in the edit screen
* Subtasks created in this sort mode are not visible in other sort modes
* Subtasks created in this sort mode are not collapsible

