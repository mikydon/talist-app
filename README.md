# Talist App

**Think deeper. Understand more. See beyond.**

Talist is a personal learning application for psychology, human behaviour, critical thinking, deduction, and wider knowledge.

## Current milestone: Standalone HTML foundation

The main app is now a self-contained `index.html` file:
- Open it directly in Chrome — no Node.js, npm, build step, or external libraries required.
- Responsive dark interface for desktop and mobile.
- Home, Explore, Practice, Progress, Saved Lessons, and lesson reader views.
- Eight illustrative starter lessons across four learning fields.
- Interactive knowledge-check questions with explanations.
- Lesson completion, saved lessons, XP, accuracy and a simple streak counter.
- Progress is stored locally in the browser when browser storage is available.

## Open the app on Windows

1. Open this repository on GitHub.
2. Select **Code → Download ZIP**.
3. Extract the ZIP file.
4. Open the extracted folder.
5. Double-click `index.html`. It should open in your default browser; if not, right-click it and choose **Open with → Google Chrome**.

You do not need to install Node.js or Visual Studio Code to use this standalone version.

## Product decisions

- Platforms: Web first; Android packaging is a later milestone.
- Interface language: English.
- Audience: Personal learning.
- Accounts: Optional in the future; no account system in this version.
- Content: Curated, with adaptive learning depth planned.
- Monetization: Free.
- Gamification: Balanced, supportive rather than distracting.
- Visual direction: Hybrid — clean modern learning UI with subtle investigative character.
- Theme: Dark.

## Data and privacy

There is no backend, login, analytics, or cloud sync in this milestone. Learning progress is kept in browser storage on the current device where supported. It does not automatically transfer to another browser or device. Clearing browser data may remove it.

## Content note

The eight lessons are starter examples to shape the learning experience. They are not yet the final researched and source-verified content library. A dedicated research and editorial review phase will follow before treating the material as a finished educational resource.

## Roadmap

1. **Standalone foundation (current):** core navigation, responsive layout, lesson reader, starter quiz and local progress.
2. **Learning experience:** refine lesson structure, practice modes, saved learning paths and progress.
3. **Research and content model:** evidence-backed curated content with reliable references.
4. **Adaptive learning:** adjust explanation depth and practice to the learner.
5. **Android:** package the web experience for Android and test on real devices.
6. **Release preparation:** accessibility, data export/backup, performance, offline behaviour and broader testing.

## Technical structure

The project is intentionally a standalone web app. Its interface and application logic live in the root `index.html` file. There is no Node.js, npm, React, Vite, package manager, build step, or dependency installation required for development, local use, or GitHub Pages deployment.
