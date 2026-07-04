# 🧠 NeuralGATE — GATE CSE 2027 Preparation Portal

NeuralGATE is a premium, feature-rich, and dependency-free GATE CSE preparation platform built for students to track, learn, practice, and discuss. Designed with a modern, glassmorphic dark-themed space aesthetic. 

🚀 **100% Client-Side & Static** — Uses browser `localStorage` for all user progress, streaks, lecture completion, PYQ tracking, and forum interactions.

---

## 🌟 Features

### 📊 1. Personal Student Dashboard
*   **Animated SVG Countdown Ring:** Visual tracker showing days remaining until the GATE 2027 exam (Feb 7, 2027).
*   **Aspirant Analytics:** Track watched lectures, attempted PYQs, active study streaks, and completed planner topics.
*   **Smart Study Streaks:** Auto-detects consecutive daily logins to keep motivation high.
*   **Subject Wise Trackers:** Interactive progress bars showing syllabus coverage for each core subject.

### 🎬 2. Curated Lecture Library
*   **46 Curated Videos:** Hand-picked high-quality series from top educators (PW GATE Wallah, IIT NPTEL, GeeksForGeeks, Abdul Bari, Neso Academy, Gate Smashers).
*   **Filter & Search:** Filter by Subject, Level (Foundation vs. Intermediate), or Channel. Search dynamically.
*   **Inline YouTube Modal:** Seamless custom pop-up video player with autoplay.
*   **Progress Tracking:** Click to mark watched/unwatched to save progress instantly.

### 📋 3. Interactive PYQ Bank (2018–2024)
*   **Interactive Testing:** Multiple choice questions with instant validation.
*   **Step-by-Step Explanations:** Answer reveals prompt detailed text explanations immediately.
*   **Bookmarking (⭐):** Bookmark complex questions to review later.
*   **Filtering:** Instantly sort by Year, Subject, Difficulty (Easy/Medium/Hard), and Marks (1 or 2).

### 💬 4. Live Doubt Discussion Forum
*   **Threaded Doubts:** Post doubts with subject tags, reply in threads, and mark questions as "Resolved".
*   **Upvote System:** Upvote helpful topics to bubble them to the top (session/user-restricted).
*   **Hot Topics & Search:** Real-time search filter and community statistic sidebars.

### 📅 5. 12-Week Study Planner
*   **Weekly Syllabus Breakdown:** Structured 12-week roadmap spanning the entire GATE CSE syllabus.
*   **Interactive SVG Progress Rings:** Visually tracks completion percentage week-by-week.
*   **Checkbox Controls:** Check off topics as you finish them.

### 📚 6. Resources & Formula Hub
*   **GATE 2027 Important Dates:** Keep track of registration, deadlines, and results.
*   **Quick Formula Sheets:** Mini cheatsheets for Complexity Classes, Trees, OS, Networks, DBMS, and Discrete Maths.
*   **Standard Reference Books:** Handpicked list of must-read books with direct advice.
*   **Mock Test Directory:** Links to official and community practice tests.

---

## 🛠️ Tech Stack & Design System
*   **Markup:** Semantic HTML5
*   **Styling:** Custom Vanilla CSS3 (Custom properties, grid systems, glassmorphism, responsive flex layouts)
*   **Fonts:** *Syne* (Headings) & *Inter* (Body) from Google Fonts
*   **Icons:** Scalable SVG and Emoji-based graphics (Zero external icon pack requests)
*   **Scripting:** ES6+ JavaScript (Modular architectures under `GV` global scope)
*   **Database:** Client-side local persistence (`localStorage` indexed by user profile keys to prevent collisions)

---

## 🚀 Getting Started

### Prerequisites
To run NeuralGATE locally, you only need a modern web browser. No `Node.js`, `npm`, or compilation steps are required.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/A263-abdul/Neuralgate.git
   cd Neuralgate
   ```

2. Start a simple local server (recommended to load embeds and styles properly):
   * **Python 3:**
     ```bash
     python3 -m http.server 9090
     ```
   * **Node (http-server):**
     ```bash
     npx http-server -p 9090
     ```

3. Open **`http://localhost:9090`** in your browser.

---

## 🌐 Deployment

### Netlify (Recommended)
1. Go to [app.netlify.com](https://app.netlify.com/).
2. Select **Import from Git** and authorize your GitHub account.
3. Select your `Neuralgate` repository.
4. Leave build commands **blank** (it's static) and click **Deploy**.

---

## 👤 Author
*   **Abdul Arkan Siddiqui** - [A263-abdul](https://github.com/A263-abdul)
