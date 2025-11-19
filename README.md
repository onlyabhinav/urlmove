# School Bus GPS Redirect System

A simple standalone HTML solution for managing GPS tracking links for school buses.

## 📁 Files Included

- `admin.html` - Admin panel for updating GPS links
- `bus1.html` - Permanent link for Bus 1
- `bus2.html` - Permanent link for Bus 2
- `bus3.html` - Permanent link for Bus 3
- `bus4.html` - Permanent link for Bus 4
- `bus5.html` - Permanent link for Bus 5

## 🚀 How to Use

### For School Administrators:

1. **Initial Setup:**
   - Open `admin.html` in any web browser
   - Paste the current GPS tracking link for each bus
   - Click "Save All Changes"

2. **Weekly Updates:**
   - When your GPS provider gives you new links, simply open `admin.html`
   - Update the links for each bus
   - Click "Save All Changes"
   - That's it! No need to inform parents

3. **Backup & Restore:**
   - Use "Export Backup" to save your current links
   - Use "Import Backup" to restore from a saved file

### For Parents:

Parents will use these permanent links (you only share these once):
- Bus 1: `bus1.html`
- Bus 2: `bus2.html`
- Bus 3: `bus3.html`
- Bus 4: `bus4.html`
- Bus 5: `bus5.html`

These links will automatically redirect to the current GPS tracking link.

## 🌐 Hosting Options

### Option 1: Google Drive (Easiest)
1. Upload all HTML files to Google Drive
2. Right-click each file → Get Link → Set to "Anyone with the link can view"
3. Share these links with parents

### Option 2: Dropbox
1. Upload all files to Dropbox
2. Create shareable links for each bus file
3. Share the links with parents

### Option 3: GitHub Pages (Free hosting)
1. Create a free GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Share the URLs (e.g., `yourusername.github.io/yourrepo/bus1.html`)

### Option 4: Any Web Hosting
Upload all files to your school's web hosting and share the URLs.

## ⚠️ Important Notes

- All files must be in the same folder/directory
- The admin must open `admin.html` and each bus file (bus1.html, etc.) at least once in the same browser before sharing links with parents
- Links are stored in the browser's localStorage, so use the same browser for updates
- The Export/Import backup feature helps you transfer settings between computers

## 💡 Tips

- Bookmark `admin.html` for quick access
- Set a weekly reminder to update links
- Keep a backup of your GPS links in a spreadsheet as well
- Test each bus link after updating to ensure it works

## 🔧 Troubleshooting

**Q: The redirect doesn't work**
A: Make sure you opened `admin.html` first and saved the links before sharing bus links with parents.

**Q: Can I customize bus names?**
A: Yes! Open each bus HTML file in a text editor and change "Bus 1" to your preferred name.

**Q: Do parents need to do anything when I update links?**
A: No! The permanent links automatically redirect to the new GPS links.

**Q: Can I use this on mobile?**
A: Yes! It works on any device with a web browser.

## 📝 License

Free to use and modify for your school's needs.
