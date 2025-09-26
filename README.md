# Astitva – Mental Wellness Platform

Astitva is a mental wellness platform for students with:
- AI chatbot with guided assessment, culturally sensitive responses, and crisis handling
- Next.js frontend with animated chat UI
- Express backend (auth, chat history)
- Optional Streamlit app for quick deployments/demos

## Security and Secrets

Never commit API keys or secrets. This repository is configured to ignore environment files:
- `.gitignore` blocks `.env`, `.env.*`, and per-app env files in `frontend/`, `backend/`, and `streamlit/`
- `frontend/.env.example`, `backend/.env.example`, `streamlit/.env.example` are templates only
- Use hosting dashboards or local untracked `.env` files to provide secrets at runtime

Critical secrets (examples):
- `OPENAI_API_KEY` (set in server/backends or Streamlit secrets)
- `JWT_SECRET` (backend)
- `DATABASE_URL` (if using Postgres)

### Where keys are used safely
- Frontend chat API: `frontend/app/api/chat/route.ts` runs on the server. The OpenAI key is read by the SDK from server env; it is never exposed to the client.
- Backend: `backend/routes/chat.js` uses `process.env.OPENAI_API_KEY` server-side.
- Streamlit: reads from environment variables or Streamlit Secrets; never hardcodes keys.

## Setup

### 1) Backend (Express)
```bash
cd backend
cp .env.example .env  # then edit values
npm install
npm start
```
The backend runs on `http://localhost:5000` by default.

### 2) Frontend (Next.js)
```bash
cd frontend
cp .env.example .env  # optional, contains only non-secret public vars
npm install
npm run dev
```
The app runs on `http://localhost:3000`.

### 3) Streamlit (optional)
```bash
cd streamlit
python -m venv .venv && source .venv/bin/activate  # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # local dev only
streamlit run app.py
```
For Streamlit Cloud, set `OPENAI_API_KEY` in app Secrets. Do not commit real keys.

## Environment Variables

- Backend (`backend/.env`)
  - `JWT_SECRET`: Sign/verify auth tokens
  - `OPENAI_API_KEY`: For server-side AI calls (if used)
  - `DATABASE_URL`: Postgres connection string (optional)
  - `CORS_ORIGIN`: Allowed origin for CORS

- Frontend (`frontend/.env`) – public only, never secrets
  - `NEXT_PUBLIC_APP_NAME`
  - `NEXT_PUBLIC_API_BASE`

- Streamlit (`streamlit/.env` for local only; in production, use Streamlit Secrets)
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL` (optional)

## Deploy Notes

### Streamlit Community Cloud (Recommended)
1. **Push to GitHub**: Ensure your repo is on GitHub
2. **Create Streamlit App**: 
   - Go to share.streamlit.io
   - New app → Connect GitHub repo
   - App file: `streamlit/app.py`
   - Requirements: `streamlit/requirements.txt`
3. **Add Secrets** (Streamlit Dashboard → Settings → Secrets):
   ```
   OPENAI_API_KEY = sk-your_key_here
   OPENAI_MODEL = gpt-4o-mini
   ```
4. **Deploy**: Streamlit builds and runs automatically

### Other Platforms
- Frontend: Set env vars in the hosting platform; avoid putting secrets in `NEXT_PUBLIC_*` unless intended to be public.
- Backend: Provide `JWT_SECRET`, `OPENAI_API_KEY`, `DATABASE_URL` as server env vars.

## Additional Hardening
- Double-check `.gitignore` before committing; ensure no `.env` files are tracked.
- Rotate keys if a secret is ever exposed.
- Use role-based keys and least-privilege where possible.

