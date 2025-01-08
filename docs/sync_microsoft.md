---
id: sync_microsoft
title: Microsoft To Do
---

⚠️ Microsoft To Do support is in early access. This feature must be enabled by toggling
on `Settings > Advanced > Microsoft To Do sync` in Tasks v14.4+

Tasks.org can synchronize a portion of its data with Microsoft To Do, a popular task service offered by Microsoft.

Microsoft To Do support is available without a subscription. To get started tap
on `☰ > ⚙ > Not signed in > Microsoft To Do`

Microsoft To Do does not support all of Tasks.org's features so it important to understand the limitations.

| Feature | Supported | Notes                                                                                 |
|---------|-----------|---------------------------------------------------------------------------------------|
| Title | ✅ |                                                                                       |
| Start date | ❌ |                                                                                       |
| Due date | ✅ |                                                                                       |
| Recurrence | ⚠️ | To Do does not support all of Tasks.org's recurrence options                          |
| Priority | ⚠️ | `High` priority tasks are starred. `None`, `Low`, and `Medium` priority not supported |
| Tags | ✅ |                                                                                       |
| Subtasks | ⚠️ | Microsoft subtasks are simple checklists. Nested subtasks not supported.              |
| Reminders | ⚠️ | To Do only supports one reminder per task. Repeating reminders not supported          |
| Description | ✅ |                                                                                       |
| Location reminders | ❌ |                                                                                       |
| Attachments | ❌ | Tasks.org does not support attachment sync yet                                        |
| Timer | ❌ |                                                                                       |
| Comments | ❌ |                                                                                       |

### Manual sorting not supported

* The Microsoft Graph API does not support [manual sort
  mode](manual_sort_mode.md)
  * If you rearrange items in an official Microsoft To Do app this will not be reflected in Tasks.org
  * If you rearrange items in Tasks.org this will not be reflected in official Microsoft To Do apps

### Additional metadata

Icons, colors, custom filters, and places are not synchronized
