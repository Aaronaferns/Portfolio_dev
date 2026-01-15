# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Create Account"
3. Set up your account:
   - Account name: "Your Name Portfolio"
   - Property name: "Portfolio Website"
   - Industry category: "Technology"
   - Business size: Choose appropriate size
   - How you intend to use Google Analytics: "Measure customer engagement with my website"

## Step 2: Get Your Measurement ID

1. After creating your property, you'll see a "Data Streams" section
2. Click "Add stream" → "Web"
3. Enter your website URL: `https://yourdomain.com` (or localhost for testing)
4. Give it a stream name: "Portfolio Website"
5. Copy the **Measurement ID** (starts with "G-")

## Step 3: Update Your Code

1. Open `src/utils/analytics.js`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```javascript
   export const GA_TRACKING_ID = 'G-YOUR_ACTUAL_ID_HERE';
   ```

## Step 4: Test Your Setup

1. Start your development server: `npm run dev`
2. Open your website in a browser
3. Open browser dev tools (F12)
4. Go to the Network tab
5. Look for requests to `google-analytics.com` or `googletagmanager.com`
6. You can also check the Console tab for any GA-related messages

## Step 5: Verify in Google Analytics

1. Go back to your Google Analytics dashboard
2. Click on "Realtime" in the left sidebar
3. Visit your website
4. You should see your visit appear in the realtime report within a few minutes

## What's Being Tracked

Your portfolio now tracks:

### Page Views
- Home page visits
- Projects page visits
- Section views (Hero, About, Projects, Contact, Experience)

### User Interactions
- Resume downloads
- Project clicks (GitHub links)
- Contact form submissions
- Navigation clicks

### Custom Events
- `resume_download`: When someone downloads your resume
- `project_view`: When someone clicks on a project
- `contact_form_submit`: When someone submits the contact form
- `section_view`: When someone views different sections

## Privacy Considerations

- The setup respects user privacy
- No personal data is collected beyond standard web analytics
- Users can opt out using browser settings or ad blockers
- Consider adding a privacy notice to your website

## Troubleshooting

### If GA isn't working:
1. Check that your Measurement ID is correct
2. Ensure your website is accessible (not behind a firewall)
3. Check browser console for errors
4. Verify the gtag script is loading in Network tab

### For local development:
- GA works on localhost
- Use the realtime report to verify tracking
- Consider using GA's debug mode for development

## Next Steps

1. Set up goals in Google Analytics for important actions
2. Create custom reports for portfolio-specific metrics
3. Set up email alerts for high traffic or form submissions
4. Consider adding more detailed event tracking for specific interactions

## Useful GA Reports for Portfolio

- **Audience Overview**: See who's visiting your site
- **Acquisition**: How people find your portfolio
- **Behavior**: Which pages/sections are most popular
- **Conversions**: Track resume downloads and contact form submissions
- **Realtime**: See live visitors and their actions







