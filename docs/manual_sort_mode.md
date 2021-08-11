---
id: manual_sort_mode
title: Manual sorting
---

`My order` sort mode allows you to manually rearrange your tasks in a 
particular task list. Select a task list, open the overflow menu sort options, 
choose `My order`. Then long press to intiate a drag-and-drop gesture, then 
move your task up or down to re-arrange it, or move it to the side to turn it 
into a subtask

`My order` is supported for:

* Local lists
* Google Task lists
* CalDAV lists
* EteSync lists
* DAVx⁵ lists

`My order` is not yet supported for:

* Tags
* Filters

### Google Tasks

You must toggle on `☰ > Synchronization > Google Tasks > Custom order
synchronization fix` to workaround a [long-standing
bug](https://issuetracker.google.com/issues/132432317) in the Google Tasks API.
This setting will force Tasks to always perform a full synchronization of your
custom ordering and subtask information

### CalDAV, DAVx⁵, and EteSync lists

Tasks implements `My order` using `x-apple-sort-order`, a non-standard
extension to the iCalendar protocol. This sort order is compatible with Apple
Reminders and Nextcloud Tasks.

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

