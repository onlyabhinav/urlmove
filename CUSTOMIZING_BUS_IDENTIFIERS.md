# Customizing Bus Identifiers

You can use **ANY format** for your bus identifiers! Numbers, registration plates, route names, anything!

## 📝 Examples of Valid Bus Identifiers:

- Vehicle registration numbers: `MH12XY1234`, `DL8CAF5678`
- Simple numbers: `1`, `2`, `3`, `4`, `5`
- Route names: `Route-A`, `Morning-Route`, `Downtown`
- Bus names: `Yellow-Bus`, `Blue-Express`, `School-Bus-01`
- Mixed: `Bus-MH12-001`, `Vehicle#123`

## 🔧 How to Set Custom Identifiers

### Step 1: Update Your Google Sheet

Your Google Sheet should look like this:

| bus_number | gps_link |
|------------|----------|
| MH12XY1234 | https://your-gps-link |
| MH12XY5678 | https://your-gps-link |
| MH12XY9012 | https://your-gps-link |
| MH12XY3456 | https://your-gps-link |
| MH12XY7890 | https://your-gps-link |

**Important:** The identifiers MUST match EXACTLY (case-sensitive) in both the Google Sheet and the HTML files.

### Step 2: Update HTML Files

Open each bus HTML file (bus1.html, bus2.html, etc.) in a text editor and find this line:

```javascript
const busNumber = 'MH12XY1234'; // You can change this to any identifier
```

Change it to match your Google Sheet. For example:

**bus1.html:**
```javascript
const busNumber = 'MH12XY1234';
```

**bus2.html:**
```javascript
const busNumber = 'MH12XY5678';
```

**bus3.html:**
```javascript
const busNumber = 'MH12XY9012';
```

**bus4.html:**
```javascript
const busNumber = 'MH12XY3456';
```

**bus5.html:**
```javascript
const busNumber = 'MH12XY7890';
```

### Step 3: Update Display Names (Optional)

You can also change what's shown on the page. Find this line in each HTML file:

```html
<h1>Bus 1 GPS Tracking</h1>
```

Change it to show your bus identifier:

```html
<h1>Bus MH12XY1234 GPS Tracking</h1>
```

## 📋 Complete Example

Let's say you have these buses:
1. Registration: MH12AB1111 - Route A (Morning)
2. Registration: MH12AB2222 - Route B (Afternoon)
3. Registration: MH12AB3333 - Route C (Evening)
4. Registration: MH12AB4444 - Route D (Special)
5. Registration: MH12AB5555 - Route E (Weekend)

### Your Google Sheet:

| bus_number | gps_link |
|------------|----------|
| MH12AB1111 | https://gps.example.com/track/abc123 |
| MH12AB2222 | https://gps.example.com/track/def456 |
| MH12AB3333 | https://gps.example.com/track/ghi789 |
| MH12AB4444 | https://gps.example.com/track/jkl012 |
| MH12AB5555 | https://gps.example.com/track/mno345 |

### Your bus1.html:

```javascript
const busNumber = 'MH12AB1111';
```

And in the HTML:
```html
<h1>Route A - MH12AB1111</h1>
```

## ⚠️ Important Rules

1. **Exact Match Required**: The identifier in your HTML file MUST exactly match what's in your Google Sheet
2. **Case Sensitive**: `MH12XY1234` is different from `mh12xy1234`
3. **No Extra Spaces**: `MH12XY1234` is different from `MH12XY1234 ` (note the space)
4. **Use Quotes**: In HTML files, always wrap the identifier in single quotes: `'MH12XY1234'`

## 🎯 Quick Checklist

- [ ] Updated Google Sheet with your bus identifiers
- [ ] Updated bus1.html with matching identifier
- [ ] Updated bus2.html with matching identifier
- [ ] Updated bus3.html with matching identifier
- [ ] Updated bus4.html with matching identifier
- [ ] Updated bus5.html with matching identifier
- [ ] (Optional) Updated display names in HTML
- [ ] Uploaded all files to GitHub Pages
- [ ] Tested each bus link

## 🔍 Troubleshooting

If you get "Bus not found in spreadsheet" error:

1. Open browser console (F12)
2. Look for: `Looking for bus number: MH12XY1234`
3. Check if this exactly matches your Google Sheet
4. Check for:
   - Extra spaces
   - Wrong case (uppercase vs lowercase)
   - Typos

The identifier in the console MUST match exactly what's in your Google Sheet's `bus_number` column.
