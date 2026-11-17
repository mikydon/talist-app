# Talist App

**Think deeper. Understand more. See beyond.**

Talist is a personal learning application for psychology, human behaviour, critical thinking, deduction, and wider knowledge.

## Current milestone: Foundation

This repository contains the first UI foundation:
- Responsive React + TypeScript + Vite application
- Dark visual theme with a calm, investigative identity
- Home, Explore, Practice, and Progress navigation
- Sample categories and lessons (demonstration content only)
- Lesson reading view with key takeaways and examples
- Interactive practice question
- Local in-memory progress state (not persisted yet)

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Product decisions

- Platforms: Web + Android (Android packaging is a later milestone)
- Interface language: English
- Audience: Personal learning
- Accounts: Optional; no authentication in this foundation
- Content: Curated, with adaptive learning depth planned
- Monetization: Free
- Gamification: Balanced, supportive rather than distracting
- Visual direction: Hybrid — clean modern learning UI with subtle investigative character
- Theme: Dark

## Important

The current lesson content is illustrative starter material. It is not yet the researched, reviewed content library. The next content milestone will involve a dedicated research and source-verification process.

## Roadmap

1. **Foundation (current):** navigation, responsive layout, sample learning flow.
2. **Learning experience:** lesson structure, knowledge checks, saved progress.
3. **Research and content model:** evidence-backed curated content with references.
4. **Adaptive learning:** adjust explanation depth and practice based on learner needs.
5. **Android:** package the web experience for Android and test on real devices.
6. **Polish:** accessibility, performance, offline behaviour, and release preparation.
