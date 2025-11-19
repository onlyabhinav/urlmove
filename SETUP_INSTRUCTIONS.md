# School Bus GPS Tracker - Google Sheets Version

## 📋 Setup Instructions

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "School Bus GPS Tracker"
4. Set up the sheet with these exact column headers in Row 1:
   - Column A: `bus_number`
   - Column B: `gps_link`

5. Fill in your data like this:

| bus_number | gps_link |
|------------|----------|
| 1 | https://your-gps-provider.com/track/bus1/xyz123 |
| 2 | https://your-gps-provider.com/track/bus2/abc456 |
| 3 | https://your-gps-provider.com/track/bus3/def789 |
| 4 | https://your-gps-provider.com/track/bus4/ghi012 |
| 5 | https://your-gps-provider.com/track/bus5/jkl345 |

### Step 2: Publish the Sheet

1. In your Google Sheet, click **File** → **Share** → **Publish to web**
2. In the popup:
   - Under "Link", select the specific sheet tab (usually "Sheet1")
   - Under format, select **"Comma-separated values (.csv)"**
   - Check "Automatically republish when changes are made"
   - Click **Publish**
3. Copy the published URL - it will look like:
   ```
   https://docs.google.com/spreadsheets/d/e/XXXXXXXXXX/pub?output=csv
   ```
4. **IMPORTANT**: Save this URL! You'll need it in Step 3.

### Step 3: Configure the HTML Files

1. Open `config.js` file in a text editor
2. Replace `YOUR_GOOGLE_SHEET_CSV_URL_HERE` with the URL you copied in Step 2
3. Save the file

### Step 4: Upload to Hosting

Upload these files to your web hosting (GitHub Pages, Google Drive, or any web host):
- `bus1.html`
- `bus2.html`
- `bus3.html`
- `bus4.html`
- `bus5.html`
- `config.js` (with your Google Sheet URL)
- `index.html` (optional - shows all bus links)

### Step 5: Share Links with Parents

Share these permanent links with parents:
- Bus 1: `https://your-website.com/bus1.html`
- Bus 2: `https://your-website.com/bus2.html`
- Bus 3: `https://your-website.com/bus3.html`
- Bus 4: `https://your-website.com/bus4.html`
- Bus 5: `https://your-website.com/bus5.html`

## 🔄 Weekly Updates

When your GPS provider gives you new links:

1. Open your Google Sheet
2. Update the GPS links in column B
3. Save (Ctrl+S or Cmd+S)
4. That's it! Changes are live immediately (may take 1-2 minutes to propagate)

## 🌐 Hosting Options

### Option A: GitHub Pages (Recommended - Free & Reliable)

1. Create a free GitHub account at [github.com](https://github.com)
2. Create a new repository (name it something like "school-bus-gps")
3. Upload all the HTML and JS files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site will be at: `https://yourusername.github.io/school-bus-gps/`

### Option B: Netlify (Easy Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for free
3. Drag and drop all your files
4. Get instant hosting with a custom URL

### Option C: Google Drive (Simple but has limitations)

1. Upload all files to Google Drive
2. Right-click each file → Get Link → Share to "Anyone with the link"
3. Share individual file links with parents
4. Note: This method may have some CORS issues with Google Sheets

## ⚠️ Important Notes

- Keep your Google Sheet organized and don't change the column headers
- The sheet must be published to web (not just shared)
- Changes may take 1-2 minutes to appear after updating the sheet
- Make sure "Automatically republish when changes are made" is checked
- You can add more columns to your sheet for notes, but don't change columns A and B

## 🔒 Privacy

- The Google Sheet is published as CSV (read-only)
- No one can edit your sheet unless you give them edit permissions
- Parents only see the redirect pages, not your Google Sheet

## 🔧 Troubleshooting

**Q: Links aren't updating**
A: Make sure the sheet is published to web and "Automatically republish" is enabled

**Q: Getting a CORS error**
A: This happens sometimes with Google Drive hosting. Use GitHub Pages or Netlify instead

**Q: How long until changes appear?**
A: Usually 1-2 minutes after saving your Google Sheet

**Q: Can multiple people update the sheet?**
A: Yes! Share the Google Sheet with edit permissions to your team

## 📞 Support

If you need help with setup, just ask!
