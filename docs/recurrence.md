---
id: recurrence
title: Recurring tasks
---

Tasks.org supports recurring tasks _and_ [recurring reminders](notifications#recurring-reminders). These two features
can be used together, but they serve different purposes!

Some tasks must be completed at a regular interval, like taking your trash to the curb Wednesday nights,
or paying a bill on the first of the month. For these you will want to set up a recurring task.

Tap on `+` to create a new task, then tap on `Does not repeat`. This will bring up a dialog
offering some preset recurrence options. You can tap on `Custom...` if you want to set up more
advanced recurrence.

### Repeats every X minutes/hours/days/weeks/months/years

You can configure a task to repeat after a given interval

### Weekly recurrence

When the weekly interval is selected you can optionally configure which days of the week to recur on.

A common use case is a task performed every day at work. To set this up choose `Repeats every 1 week`,
then toggle on the bubbles for each day of your work week.

### Monthly recurrence

When the monthly interval is selected you are given additional options based on the selected due date

### Ends

Tasks can repeat forever, or they can be configured to end in the future.
* **Never:** The task will repeat indefinitely
* **On \<date\>:** The task will not repeat after the given date
* **After \<X\> occurrences:** The task will end after it is completed X times

### Repeats from due date or completion date

Recurring tasks _must_ have a due date. If you do not select a due date before configuring
recurrence then the app will set a due date for you.

Recurring tasks can be configured to calculate the next due date based on either the original due date,
or the date when you completed the task

Some recurring tasks must be performed at a specific interval after the previous task was completed, not after 
the previous task was originally due. If you want to `Get a haircut` every four weeks, but you get your hair cut
three weeks late, you don't want to get another hair cut in one week. If you configure this task as
`Repeats from completion date`, then your next hair cut will always be four weeks after your previous
hair cut.
