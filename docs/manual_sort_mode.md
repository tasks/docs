---
id: manual_sort_mode
title: Manual sorting
---

Google Task lists, 'My Tasks', 'Today', and tags support manual ordering. To use
manual ordering while viewing these lists, select `My order` from the sort menu

To re-order your tasks, perform a long press to intiate a drag-and-drop
gesture. Move your task up or down to re-arrange it, or move it to the side to
turn it into a subtask

### Google Tasks

You will need to toggle on `Tasks settings > Google Tasks > Custom order
synchronization fix` to workaround a [long-standing
bug](https://issuetracker.google.com/issues/132432317) in the Google Tasks API.
This setting will force Tasks to always perform a full synchronization of your
custom ordering and subtask information

### 'My Tasks', 'Today', and tags

`My order` for 'My Tasks', 'Today', and tags use legacy functionality carried
over from Astrid Tasks. Subtasks created in this sort mode are not yet
integrated with the subtask functionality used elsewhere in the app

`Show hidden` and `Show completed` toggles are not yet supported in manual sort
mode for `My Tasks`, `Today`, and tags
