const keywords = require("../utils/keywords");

function filterJobs(jobs) {
  return jobs.filter(job =>
    keywords.some(keyword =>
      job.title.toLowerCase().includes(keyword)
    )
  );
}

module.exports = filterJobs;
