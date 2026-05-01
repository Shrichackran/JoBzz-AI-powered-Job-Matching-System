const axios = require("axios");

async function sendTelegram(job) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;

  const message = `
🚨 New Job Alert!
💼 Role: ${job.title}
🏢 Company: ${job.company}
📍 Location: ${job.location}
🔗 Apply: ${job.link}
`;

  await axios.post(url, {
    chat_id: process.env.CHAT_ID,
    text: message
  });
}

module.exports = sendTelegram;
