// Mock scraper (replace with real API later)

async function fetchJobs() {
  return [
    {
      title: "AI Engineer",
      company: "TechNova",
      location: "Bangalore, India",
      link: "https://example.com/1"
    },
    {
      title: "Marketing Manager",
      company: "ABC Corp",
      location: "Mumbai",
      link: "https://example.com/2"
    },
    {
      title: "Backend Developer",
      company: "InnovateX",
      location: "Remote",
      link: "https://example.com/3"
    }
  ];
}

module.exports = fetchJobs;
