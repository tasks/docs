---
id: tasker
title: Tasker Plugins
---

[Tasker](https://tasker.joaoapps.com/) is an Android app used for performing automated actions based on contexts such as time and location. Tasker plugins may also be used with [Automate](http://llamalab.com/automate/)

## List Notification

Work in progress

## Create task

[Tasker variables](http://tasker.dinglisch.net/userguide/en/variables.html) may be used in all available fields. At present you can only set the title, due date, due time, priority, and description from Tasker. Support for additional fields will be added in the future.

* **Due date** in ISO-8601 extended format, e.g. `2017-12-28`
* **Due time** in ISO-8601 extended format, e.g. `13:45`. If the due time field is set but the due date field is blank then Tasks will use the current date
* **Priority** can be set from `0` (highest) to `3` (lowest)

***

One easy way to work with dates and times is to use a 'Run Shell' action with `date`, storing the output in a variable. If you need to refer to a date in the future you can use a Tasker variable set with math. Keep in mind that the global %TIMES variable is a UTC timestamp and that Tasks expects values in your local time.

* Current local date: `date +%Y-%m-%d`
* Current local time: `date +%H:%M`
* Current local timestamp: `date +%s`
* Date from timestamp: `date -d @%mytimestamp +%Y-%m-%d`
* Time from timestamp: `date -d @%mytimestamp +%H:%M`
