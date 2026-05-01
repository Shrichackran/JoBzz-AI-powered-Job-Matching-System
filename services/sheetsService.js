// Mock Google Sheets (replace with real API later)

async function addToSheet(job) {
  console.log("📊 Saving to sheet:", job.title);
}

module.exports = addToSheet;
