require("dotenv").config();

const fetchJobs = require("./services/linkedinScraper");
const filterJobs = require("./scripts/filterJobs");
const sendTelegram = require("./services/telegramService");
const addToSheet = require("./services/sheetsService");

(async () => {
  try {
    console.log("🚀 Starting Job Pipeline...");

    const jobs = await fetchJobs();
    console.log(`📥 Fetched ${jobs.length} jobs`);

    const filtered = filterJobs(jobs);
    console.log(`🎯 Filtered ${filtered.length} relevant jobs`);

    for (let job of filtered) {
      await addToSheet(job);
      await sendTelegram(job);
    }

    console.log("✅ Pipeline completed successfully");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();
