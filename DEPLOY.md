# Deployment Guide (Vercel)

To publish your website to the world, follow these steps:

## Option 1: Using the Terminal (Recommended)
1.  Open your terminal in the `jiwon-prep` folder.
2.  Run the following command:
    ```bash
    npx vercel
    ```
3.  Follow the prompts:
    -   Log in via browser (GitHub recommended).
    -   "Set up and deploy?" -> **Y**
    -   "Which scope?" -> (Select your account)
    -   "Link to existing project?" -> **N**
    -   "Project name?" -> **jiwon-prep**
    -   "Directory?" -> **./**
    -   "Want to modify settings?" -> **N**

## Option 2: Using GitHub
1.  Push this code to a GitHub repository.
2.  Go to [Vercel.com](https://vercel.com) and click "Add New Project".
3.  Import your GitHub repository.
4.  **Important**: In the "Environment Variables" section, add the Sanity keys from your `.env.local` file.
5.  Click "Deploy".

## Final Step
Once deployed, Vercel will give you a URL (e.g., `jiwon-prep.vercel.app`).
You can share this link with anyone!
