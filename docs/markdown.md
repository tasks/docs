---
id: markdown
title: Markdown
---

Markdown ([Wikipedia](https://en.wikipedia.org/wiki/Markdown)) is a human
readable markup language

Tasks' optional Markdown support will highlight Markdown syntax while editing a
task's title and description, and display rendered Markdown in your task lists

## Enable Markdown

Navigate to `☰ > Settings > Look and feel` and toggle on `Edit screen options >
Markdown`. You may also want to toggle on `Task list options > Show full
description`

## Widgets & notifications

Due to technical limitations only strikethrough is supported in widgets and
notifications. All other Markdown features will be rendered as plain text.
Links will be highlighted but cannot be clicked

## Supported features

### Emphasis

`*italic*` or `_italic_` -> *italic*

`**bold**` or `__bold__` -> **bold**

### Typography

`~~strikethrough~~` -> ~~strikethrough~~

### Links

`[Link](https://tasks.org)` -> [Link](https://tasks.org)

### Ordered list
```
1. Item 1
2. Item 2
    1. Sub item
```
1. Item 1
2. Item 2
    1. Sub item

### Unordered list

```
- Item 1
- Item 2
  - Sub item
```
- Item 1
- Item 2
  - Sub item

### Blockquotes

```
> This is a blockquote
>> with nesting
```
> This is a blockquote
>> with nesting

### Tasks

```
- [ ] Task
  - [ ] Subtask
- [x] Completed task
```
- [ ] Task
  - [ ] Subtask
- [x] Completed task

### Thematic break

`***`
***

### Headings

`# h1` <h1>h1</h1>

`## h2` <h2>h2</h2>

`### h3` <h3>h3</h3>

`#### h4` <h4>h4</h4>

`##### h5` <h5>h5</h5>

`###### h6` <h6>h6</h6>

### Tables

```
| Column 1 | Column 2
| --- | ---
| 1A | 1B
| 2A | 2B
```
| Column 1 | Column 2
| --- | ---
| 1A | 1B
| 2A | 2B

### Code

``Example `inline` code`` -> Example `inline` code

```
    ```
    Example code block
    ```
```

```
Example code block
```