---
id: backups
title: Backups
---

## Automatic backups

Tasks creates daily backup files at midnight. Tasks will prune automatic backup
files, keeping only the latest seven files

## Manual backups

Select `Export tasks` to create a manual backup file. Manual backup files will
not be pruned

## Copy to Google Drive

Tasks can upload your backup files to Google Drive. Tasks will only upload
files created after this option is enabled, it will not upload files created
prior to enabling this option

This feature requires you to grant the OAuth 2.0 scope
[`drive.files`](https://developers.google.com/drive/api/v2/about-auth). This
permission grants Tasks access to files that are created or opened by the app.
Tasks will not have access to any other files on your Google Drive. You may
revoke this permission by visiting your Google [security
settings](https://myaccount.google.com/permissions)

## Android Backup Service

If your device is opted in to the Android Backup Service then Tasks will
automatically upload your latest backup file when Android runs the backup
service. When you re-install Tasks this backup file will be imported
automatically

## Backup location

Backup files are stored in Tasks' [private
directory](https://developer.android.com/training/data-storage/files.html#PrivateFiles).
**Android will delete this directory if Tasks is uninstalled!** Choose a
`Backup location` outside of Tasks' private directory to prevent Android from
deleting your backup files

## Attachments

File attachments are not backed up, however this functionality is planned for a
future release
