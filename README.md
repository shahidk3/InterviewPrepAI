A MERN app where authenticated users can:

generate AI-powered interview questions (per role/level/topic)

create/manage interview sessions (multiple rounds, assign questions)

view question breakdowns (difficulty, topics, hints, model answer)

track session history and analytics

Stack: React (v18) + React Router + Node.js/Express + MongoDB (Mongoose) + JWT auth. AI generation is a backend call to your chosen LLM (OpenAI, Anthropic, etc.) — shown as a stub.
--------------------------------------------------------------------------------

Key Features:

1. User Authentication – Register and log in with JWT-based authentication.
2. Role-Based Interview Sessions – Generate questions based on job role & experience.
3. AI-Powered Q&A – Automatically generate high-quality technical questions and answers using the Gemini API.
4. Accordion Learning UI – View Q&A in an expandable UI for a clean study flow.
5. Dynamic AI Explanations – On-demand concept breakdowns using AI
6. Pinning Important Questions  – Pin important questions for quick access.
7. MongoDB Storage – Save and manage sessions and questions for future review.
8. Clean UI with Tailwind – Responsive, modern frontend with smooth UX.

-----------------------------------------------------------------------------------------------------

🖥️ Tech Stack

🔧 Backend
Node.js
Express.js
MongoDB + Mongoose
bcryptjs
jsonwebtoken
dotenv
multer

🌐 Frontend
React.js
Tailwind CSS
React Router
Axios
React Hot Toast
Framer Motion
