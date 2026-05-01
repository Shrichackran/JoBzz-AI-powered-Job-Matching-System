function scoreJob(job) {
  let score = 0;

  if (job.title.toLowerCase().includes("ai")) score += 50;
  if (job.title.toLowerCase().includes("backend")) score += 30;

  return score;
}

module.exports = scoreJob;
