# AI-Powered Q&A Portal

## Overview
A real-time Q&A web app where users can sign in, ask questions, answer others, vote, accept answers, and summon AI-generated summaries of top answers.

### Tech Stack
- **Front-end:** Next.js (TypeScript), React, Tailwind CSS
- **Back-end / Data:** Firebase Auth, Firestore (NoSQL)
- **Serverless Functions:** Google Cloud Functions (Node.js)
- **AI Integration:** OpenAI API (via Cloud Function)
- **Hosting & Deployment:** Vercel (Next.js) + Firebase Hosting (optional)

### Core Features
- Authentication (Email/password + Google sign-in)
- Real-time question feed with tag filtering
- Ask/answer questions, vote, accept answers
- User profiles
- AI-powered answer summaries

### Folder Structure
```
/pages
  index.tsx
  ask.tsx
  questions/[id].tsx
  api/summarize.ts
/lib
  firebase.ts
/contexts
  AuthContext.tsx
/components
  Layout.tsx
  QuestionCard.tsx
  AnswerCard.tsx
  VoteButton.tsx
  SummaryDisplay.tsx
/functions
  summarizeAnswers.js
/tailwind.config.js
/README.md
```

### Setup Instructions
1. Clone the repo and install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Copy `.env.local.example` to `.env.local` and fill in your Firebase and OpenAI credentials.
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Deploy Cloud Function (`functions/summarizeAnswers.js`) using Google Cloud CLI.

---

## Environment Variables
See `.env.local.example` for required variables.

## License
MIT 