# 🤖 DKJ-HUD // Cyberpunk Developer Portfolio

A futuristic, cyberpunk-themed developer portfolio featuring premium sci-fi HUD telemetry interfaces, interactive terminal logs, fluid motion transitions, and customizable asset connectors. Engineered with **React + TypeScript + Vite** and styled with **Tailwind CSS**.

---

## 🚀 Key Features

*   **Cinematic Intro Video Overlay:** 
    *   Immersive, full-screen cyberpunk intro video loaded behind a setup modal prompting the user to launch in fullscreen.
    *   Includes dynamic autoplay fallback for browsers blocking audio, manual skip options, and unmuted audio overrides.
    *   Stateful tracking so the video displays on every site visit/refresh as requested.
*   **Hacker Telemetry Dashboard Logs:**
    *   Interactive HUD details panel on the **Experience** and **Academic** views that acts like a console logging terminal.
    *   Displays mission milestones (B.Tech CSE at IIIT Bhopal, 12th State Board, 10th CBSE), projects shipments, and competitive programming details.
*   **Live Coding Profile Metrics:**
    *   Integrates live statistics fetching via public endpoints for **LeetCode** and **CodeChef** profiles with zero-config local baseline fallbacks in case of API downtime or CORS blocks.
    *   Displays custom-styled brand badges using official platform PNG assets (LeetCode, CodeChef [1500+ Rating, 2★], and GeeksforGeeks).
*   **Environment Configuration:**
    *   All social links, portfolio profiles (LeetCode, CodeChef, GeeksforGeeks), resume cloud directories, and video resources are extracted into environment variables (`.env`) for ease of customization.
*   **Robust CI/CD Build Check Pipeline:**
    *   Integrates a GitHub Actions workflow (`.github/workflows/build-check.yml`) that automatically runs compilation validations (`tsc -b && vite build`) on pull requests targeting production branches.
*   **Cyberpunk Aesthetics:**
    *   Rich neon color scheme (cyan, purple, and green gradients) with interactive glowing state transitions.
    *   Custom crosshair mouse cursors with click ripple shockwaves.
    *   Navbar with light/dark cyberpunk mode selector and browser fullscreen toggle button.

---

## 🛠️ Tech Stack

*   **Frontend Core:** React 19 (TypeScript)
*   **Build Tool:** Vite
*   **Styling & Theme:** Tailwind CSS & Custom CSS Variables (Glassmorphism, custom scrollbars, neon text glows)
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Automation:** GitHub Actions (YAML CI Pipelines)
*   **Hosting:** Hosted natively on **Vercel**

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── build-check.yml   # PR build verification pipeline
├── src/
│   ├── assets/               # Local media, images, and brand PNG assets
│   ├── components/
│   │   ├── CustomCursor.tsx  # Interactive cyber crosshair + shockwaves
│   │   ├── IntroOverlay.tsx  # Immersive full-screen overlay & video
│   │   └── Navbar.tsx        # Navigation menu with fullscreen & theme controls
│   ├── pages/
│   │   ├── about.tsx         # Graphic biography & profile cards
│   │   ├── contact.tsx       # Cyber terminal-styled payload dispatch form
│   │   ├── experience.tsx    # Academic/professional timeline + interactive logs HUD
│   │   ├── projects.tsx      # System architecture cards database
│   │   └── skills.tsx        # Tech capability stats bars
│   ├── sections/             # Page sections (Hero, Stats, CTA, etc.)
│   └── App.tsx               # Client router & page transitions container
├── .env                      # Application environment variables configuration
├── vite.config.ts            # Vite compiler & bundling setup
└── tailwind.config.js        # Cyberpunk neon-cyan/purple theme colors config
```

---

## ⚙️ Environment Configuration (`.env`)

Create a `.env` file in the root folder of the project. Configure the following environment variables:

```properties
# Social Links
VITE_GITHUB_URL=https://github.com/your-github-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-linkedin-username/
VITE_EMAIL=your-email@example.com

# Coding Profiles URLs
VITE_LEETCODE_URL=https://leetcode.com/u/your-leetcode-username/
VITE_CODECHEF_URL=https://www.codechef.com/users/your-codechef-username
VITE_GEEKSFORGEEKS_URL=https://www.geeksforgeeks.org/user/your-gfg-username/

# Asset Resources URLs
VITE_RESUME_URL=https://www.dropbox.com/s/your-resume-share-id/resume.pdf
VITE_INTRO_VIDEO_URL=https://res.cloudinary.com/your-cloud-id/video/upload/v123456/intro_video.mp4

# Project Repositories URLs
VITE_GITHUB_URL_STRATA=https://github.com/your-github-username/strata
VITE_GITHUB_URL_MENTRA=https://github.com/your-github-username/mentra-ai
VITE_GITHUB_URL_TRUSTGATE=https://github.com/your-github-username/trustgate
VITE_GITHUB_URL_SECURETALK=https://github.com/your-github-username/securetalk
VITE_GITHUB_URL_GYMBASE=https://github.com/your-github-username/gymbase
VITE_GITHUB_URL_TRUEAUTH=https://github.com/your-github-username/trueauth
VITE_GITHUB_URL_ELYSIUM=https://github.com/your-github-username/elysium

# Strata Contact Form API Integration
STRATA_API_ENDPOINT=https://strata-zt3x.vercel.app/api/messages
STRATA_PROJECT_ID=YOUR_PROJECT_ID
STRATA_API_KEY=YOUR_API_KEY
```

---

## 🖥️ Local Setup & Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Verify Production Compilation
To build the static HTML/JS output inside the `dist/` directory:
```bash
npm run build
```

---

## 📦 Deployment Instructions

The project is configured for seamless deployment on **Vercel**:

1. Create a new project on **Vercel** and select your imported GitHub repository.
2. In the **Environment Variables** panel, add the 8 environment variables defined in the `.env` configuration above.
3. Click **Deploy**. Vercel will build the React bundle and configure automatic updates on every commit push to `main`/`master` branches.
