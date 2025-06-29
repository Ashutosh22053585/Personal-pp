# Gmail Integration Setup Guide

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Follow the steps to enable 2-Step Verification if not already enabled

## Step 2: Generate App Password
1. After enabling 2-Step Verification, go back to Security settings
2. Under "Signing in to Google", click on "App passwords"
3. Select "Mail" as the app and "Other (Custom name)" as the device
4. Enter "Portfolio Contact Form" as the custom name
5. Click "Generate"
6. Copy the 16-character app password (it will look like: abcd efgh ijkl mnop)

## Step 3: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## Step 4: Install Dependencies and Run
1. Install the new dependency:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. In another terminal, start the React app:
   ```bash
   npm start
   ```

## Step 5: Test the Contact Form
1. Go to your portfolio website
2. Navigate to the "Let's Connect" section
3. Fill out the form and click "Send"
4. Check your Gmail inbox for the message

## Troubleshooting
- If you get authentication errors, double-check your app password
- Make sure 2-Step Verification is enabled on your Google account
- Ensure the .env file is in the project root directory
- Check that there are no extra spaces in your .env file values

## Security Notes
- Never commit your .env file to version control
- The .env file is already added to .gitignore
- Use App Passwords instead of your regular Gmail password for security