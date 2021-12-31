---
id: intents
title: Missing intents
sidebar_label: Intents
---

Android allows apps to handle requests from other apps. For example, web links
are handled by your browser app.

Tasks relies on third-party apps to capture images from your camera, record
audio from your microphone, play back audio, select images from a gallery, and
perform speech recognition.

This improves the privacy and security of Tasks because it does not need access
to your camera or microphone. These specialized apps are also able to provide
more features and a better user experience.

### Audio recorder

In order to attach an audio note to a task your device must have an audio
recorder that responds to the
[`android.provider.MediaStore.RECORD_SOUND`](https://developer.android.com/reference/android/provider/MediaStore.Audio.Media#RECORD_SOUND_ACTION)
intent. If your device does not include a preinstalled audio recorder you may
find one on the Play Store or F-Droid

### Camera

### Gallery

### Speech recognizer

