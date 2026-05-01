# 🚀 JoBzz – AI-Powered Job Matching & Alert System

![Demo](./assets/demo.gif)

> ⚡ Stop scrolling job boards. Start getting **ranked, relevant, real-time opportunities**.

---

## 🧠 What is JoBzz?

JoBzz is an **AI-driven job intelligence system** that automates job discovery, filters high-quality opportunities, and delivers **personalized job alerts** using **smart filtering + automation pipelines**.

💡 Built to eliminate noise and focus only on **high-relevance roles**.

---

## 🔥 Why This Project Stands Out

* ❌ Not just keyword filtering
* ✅ Uses **intelligent matching logic**
* ❌ Not just alerts
* ✅ Acts as a **decision system for job selection**
* ❌ Not static
* ✅ Runs as an **automated pipeline (n8n + APIs)**

---

## ⚙️ Core Features

### 🔍 Automated Job Discovery

* Fetches job listings from platforms (LinkedIn / APIs)
* Runs on scheduled automation (n8n workflows)

### 🧠 Smart Filtering Engine

* Filters irrelevant roles instantly
* Extendable to semantic matching

### 📊 Data Pipeline Integration

* Stores structured job data in Google Sheets
* Enables tracking + analytics

### 📩 Real-Time Alerts

* Sends instant job notifications via Telegram Bot
* Zero manual effort required

---

## 🏗️ System Architecture

![Architecture](./assets/architecture.png)

```text
Job APIs / Scrapers
        ↓
n8n Automation Workflow
        ↓
Processing Layer (JavaScript Filtering)
        ↓
Storage (Google Sheets)
        ↓
Notification System (Telegram Bot)
```

---

## 🛠️ Tech Stack

* ⚡ **Automation**: n8n
* 💻 **Backend Logic**: JavaScript (Node.js)
* 📡 **APIs**: LinkedIn / Google Sheets API
* 📊 **Storage**: Google Sheets
* 📩 **Notifications**: Telegram Bot API

---

## 📂 Project Structure

```bash
jobzz-automated-job-alert/
│── scripts/
│   └── filterJobs.js
│── services/
│   ├── linkedinScraper.js
│   ├── sheetsService.js
│   └── telegramService.js
│── utils/
│   └── keywords.js
│── workflows/
│   └── jobzz-n8n-workflow.json
│── assets/
│   ├── demo.gif
│   ├── workflow.png
│   ├── sheets.png
│   ├── telegram.png
│   └── architecture.png
│── README.md
```

---

## 🚀 How It Works

1️⃣ Fetch job listings
2️⃣ Filter relevant roles
3️⃣ Store structured data
4️⃣ Send alerts instantly

✔ Fully automated pipeline
✔ Runs without human intervention

---

## 📸 OUTPUT

### 🧠 Workflow Execution (n8n)

![Workflow](./assets/workflow.png)

### 📊 Processed Job Data (Google Sheets)

![Sheets](./assets/sheets.png)

### 📩 Telegram Alert Output

![Telegram](./assets/telegram.png)

---

### 📩 Sample Output

```text
🚨 New Job Alert!
Role: AI Engineer
Company: TechNova
Location: Bangalore, India
Match Score: 92%
Apply: https://example.com/1
```

---

## 🔮 Future Enhancements

* 🤖 AI Resume Matching (LLM-based)
* 📈 Job Ranking Algorithm
* 🧠 Vector Search (FAISS / Pinecone)
* 🌐 Web Dashboard (React)
* 📧 Multi-channel alerts

---

## 📊 Impact

* ⏱ Saves hours of manual job searching
* 🎯 Improves relevance of job applications
* ⚡ Enables faster response to opportunities

---

## 👨‍💻 About Me

**Shrichackran K M**
🎓 B.Tech ECE @ SASTRA University (CGPA: 7.85)
💻 Full Stack Developer | AI Enthusiast

### 🔧 Skills

* Languages: Java, Python, JavaScript, SQL
* Frameworks: Node.js, Express.js, React
* AI/ML: TensorFlow, PyTorch, LLMs
* Tools: GitHub, REST APIs

---

## 🤝 Connect

* 🔗 LinkedIn: https://linkedin.com/in/shrichackran-k-m
* 💻 GitHub: https://github.com/shrichackran

---

## ⭐ Support

If you find this project useful, give it a ⭐ — it helps visibility!

---

## 📄 License

This project is licensed under the MIT License.
