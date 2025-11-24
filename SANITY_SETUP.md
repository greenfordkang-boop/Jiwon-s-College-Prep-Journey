# Sanity CMS Setup Guide

To enable the "Login" and "Admin Dashboard" features for your website, follow these steps:

## 1. Create a Sanity Project
1.  Go to [Sanity.io](https://www.sanity.io) and sign up (free).
2.  Create a new project (e.g., "Jiwon Prep").
3.  Find your **Project ID** in the dashboard settings.

## 2. Connect Your Project
1.  Create a file named `.env.local` in the root folder (`jiwon-prep` folder).
2.  Add the following lines to it:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id_here` with the ID you got from Sanity.

## 3. Access the Admin Panel
1.  Restart the server if it's running (`Ctrl+C` then `npm run dev`).
2.  Go to [http://localhost:3000/studio](http://localhost:3000/studio).
3.  You will see a login screen. Log in with your Sanity account.
4.  Now you can write posts and add portfolio items!
