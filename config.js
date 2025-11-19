// Configuration file for School Bus GPS Tracker
// Replace the URL below with your published Google Sheet CSV URL

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIhq-hzyNGzMKi0HzyvfhDae60xWZBbr7bTr1UcyrZxFl72Fp_LLTSXsqDRjgzKDdAeSlUMyl3AiQM/pub?gid=0&single=true&output=csv";

// How to get your Google Sheet CSV URL:
// 1. In Google Sheets, go to File → Share → Publish to web
// 2. Select your sheet tab and choose "Comma-separated values (.csv)" format
// 3. Check "Automatically republish when changes are made"
// 4. Click Publish and copy the URL
// 5. Paste it above, replacing 'YOUR_GOOGLE_SHEET_CSV_URL_HERE'
//
// Example URL format:
// https://docs.google.com/spreadsheets/d/e/2PACX-1vQxxxxxxxxxxxxxxxxxxx/pub?output=csv

// Don't change anything below this line
// =====================================

function parseCSV(csv) {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""));
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });
    data.push(row);
  }

  return data;
}

async function getBusLink(busNumber) {
  try {
    if (GOOGLE_SHEET_URL === "YOUR_GOOGLE_SHEET_CSV_URL_HERE") {
      throw new Error("Please configure your Google Sheet URL in config.js");
    }

    const response = await fetch(GOOGLE_SHEET_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch GPS data from Google Sheet");
    }

    const csvText = await response.text();
    const buses = parseCSV(csvText);

    const bus = buses.find((b) => b.bus_number == busNumber);

    if (bus && bus.gps_link) {
      return bus.gps_link;
    } else {
      throw new Error("Bus not found in spreadsheet");
    }
  } catch (error) {
    console.error("Error fetching bus link:", error);
    throw error;
  }
}
