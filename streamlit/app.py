import os
import time
from typing import List, Dict

import streamlit as st

try:
    # New OpenAI SDK (>=1.0)
    from openai import OpenAI
    _OPENAI_NEW_SDK = True
except Exception:
    # Fallback to legacy
    import openai
    _OPENAI_NEW_SDK = False


APP_TITLE = "Astitva AI – Guided Mental Wellness Chat"
DEFAULT_MODEL = os.environ.get("OPENAI_MODEL", "gpt-4o-mini")

MENTAL_HEALTH_SYSTEM_PROMPT = (
    "You are Astitva AI, a compassionate mental health support chatbot for Indian students.\n\n"
    "CORE DUTIES\n"
    "1) Provide empathetic, culturally-sensitive support in simple, student-friendly language\n"
    "2) Suggest evidence-based coping strategies and remedies\n"
    "3) Detect crisis situations (suicidal ideation, self-harm, severe depression/anxiety)\n"
    "4) Encourage professional help when needed and offer next steps\n\n"
    "CRISIS DETECTION\n"
    "If you detect any mention of suicidal thoughts, intent, self-harm, immediate danger, or severe functional impairment,\n"
    "respond with urgent care and include the token CRISIS_ALERT somewhere in your message. Keep the token unobtrusive.\n\n"
    "CULTURAL CONTEXT (INDIA)\n"
    "- Acknowledge family dynamics, academic pressure, exam stress, and stigma\n"
    "- Suggest culturally appropriate approaches (mindfulness, yoga, pranayama, meditation, social support)\n\n"
    "GUIDED ASSESSMENT MODE\n"
    "- If the user says: \"Start Guided Assessment\" or similar, initiate a structured flow of up to 8 concise questions to\n"
    "  understand mood, interest, sleep, energy, worry, concentration, guilt, and safety. Ask one question at a time, wait\n"
    "  for answers, and adapt the next question accordingly. Keep questions short and easy.\n"
    "- After you collect enough information, provide: (a) a brief, non-diagnostic summary of what you heard,\n"
    "  (b) a simple severity impression (mild/moderate/severe) with caution that it is not a medical diagnosis,\n"
    "  (c) tailored coping suggestions and next steps (self-help, resources, or counseling), and\n"
    "  (d) if any risk indicators, include CRISIS_ALERT and clear, actionable safety steps.\n\n"
    "REMEDIES MENU (SUGGEST 2-4 TAILORED ITEMS)\n"
    "- Breathing exercises (box breathing; 4-7-8; alternate-nostril/pranayama)\n"
    "- Mindfulness and grounding (5-4-3-2-1; guided body scan)\n"
    "- Sleep hygiene (fixed schedule, screen curfew, wind-down routine)\n"
    "- Physical activity or yoga (10–20 min walks; sun exposure; light stretches)\n"
    "- Journaling prompts (gratitude, thought records, problem-solving)\n"
    "- Social connection (talk to a trusted friend/family/mentor)\n"
    "- Professional counseling (university counseling; helplines) and when to seek it\n"
    "- Healthy nutrition and hydration reminders\n\n"
    "TONE\n"
    "Always be warm, non-judgmental, and encouraging. Ask follow-up questions to understand their situation better. Keep answers concise and skimmable."
)


def _get_client():
    api_key = os.environ.get("OPENAI_API_KEY") or st.secrets.get("OPENAI_API_KEY", None)
    if not api_key:
        st.stop()
    if _OPENAI_NEW_SDK:
        return OpenAI(api_key=api_key)
    openai.api_key = api_key
    return None


def _call_openai(messages: List[Dict[str, str]], model: str) -> str:
    client = _get_client()
    if _OPENAI_NEW_SDK:
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.7,
            max_tokens=900,
        )
        return resp.choices[0].message.content or ""
    else:
        resp = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            temperature=0.7,
            max_tokens=900,
        )
        return resp["choices"][0]["message"]["content"]


def _inject_css():
    st.markdown(
        """
        <style>
          /* Gradient background */
          .stApp {
            background: radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.08), transparent 60%),
                        radial-gradient(1000px 500px at 90% 20%, rgba(16,185,129,0.08), transparent 60%),
                        linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,1) 100%);
            color: #e5e7eb;
          }
          /* Card-like chat container */
          .chat-card {
            background: rgba(30,41,59,0.6);
            border: 1px solid rgba(148,163,184,0.2);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.25);
            padding: 16px;
            animation: fadeIn 500ms ease both;
          }
          /* Subtle fade-in */
          @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }

          /* Message bubbles */
          .bubble-user { background:#6366f1; color:white; border-radius:12px; padding:10px 12px; }
          .bubble-ai   { background:#0f172a; color:#e2e8f0; border:1px solid rgba(148,163,184,0.18); border-radius:12px; padding:10px 12px; }

          /* Pulsing online badge */
          .online-dot { display:inline-block; width:8px; height:8px; background:#22c55e; border-radius:9999px; box-shadow:0 0 0 0 rgba(34,197,94,0.7); animation:pulse 2s infinite; }
          @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(34,197,94,0.7);} 70%{box-shadow:0 0 0 10px rgba(34,197,94,0);} 100%{box-shadow:0 0 0 0 rgba(34,197,94,0);} }
        </style>
        """,
        unsafe_allow_html=True,
    )


def _header():
    st.markdown(
        """
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:36px; height:36px; display:flex; align-items:center; justify-content:center; background:#6366f1; color:white; border-radius:10px;">🤖</div>
            <div>
              <div style="font-weight:700; font-size:18px;">Astitva AI</div>
              <div style="font-size:12px; color:#94a3b8;">Your mental wellness companion</div>
            </div>
          </div>
          <div style="font-size:12px; color:#a3e635; display:flex; align-items:center; gap:6px;">
            <span class="online-dot"></span> Online
          </div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def _render_history(history: List[Dict[str, str]]):
    for msg in history:
        role = msg.get("role")
        content = msg.get("content", "")
        with st.chat_message("user" if role == "user" else "assistant"):
            bubble_class = "bubble-user" if role == "user" else "bubble-ai"
            st.markdown(f"<div class='{bubble_class}'>{content.replace('CRISIS_ALERT', '')}</div>", unsafe_allow_html=True)


def main():
    st.set_page_config(page_title=APP_TITLE, page_icon="💬", layout="centered")
    _inject_css()

    st.markdown("<div class='chat-card'>", unsafe_allow_html=True)
    _header()

    if "messages" not in st.session_state:
        st.session_state.messages = [
            {"role": "system", "content": MENTAL_HEALTH_SYSTEM_PROMPT},
            {"role": "assistant", "content": "Hi! I’m here to support your mental wellness. You can share what’s on your mind, or say ‘Start Guided Assessment’ to begin a short check-in."},
        ]

    # Render history (skip system)
    _render_history([m for m in st.session_state.messages if m["role"] != "system"])

    # Quick actions row
    c1, c2, c3 = st.columns(3)
    with c1:
        if st.button("I'm stressed about studies", use_container_width=True):
            st.session_state._prefill = "I'm feeling stressed about my studies"
    with c2:
        if st.button("I can't sleep well", use_container_width=True):
            st.session_state._prefill = "I'm having trouble sleeping"
    with c3:
        if st.button("Start Guided Assessment", use_container_width=True):
            st.session_state._prefill = "Start Guided Assessment"

    # Chat input
    prefill = st.session_state.pop("_prefill", "") if "_prefill" in st.session_state else ""
    user_input = st.chat_input("Type your message...", key="chat_input", disabled=False)
    if prefill and not user_input:
        # Lightweight visual cue
        with st.chat_message("user"):
            st.markdown(f"<div class='bubble-user'>{prefill}</div>", unsafe_allow_html=True)
        user_input = prefill

    if user_input:
        st.session_state.messages.append({"role": "user", "content": user_input})

        with st.chat_message("assistant"):
            placeholder = st.empty()
            placeholder.markdown("<div class='bubble-ai'>Thinking…</div>", unsafe_allow_html=True)

            # Compose messages: include the system + prior conversation
            model_messages = st.session_state.messages
            try:
                reply = _call_openai(model_messages, DEFAULT_MODEL)
            except Exception as e:
                reply = f"Sorry, I ran into an issue reaching the AI service. {e}"

            # Simulate typing effect
            shown = ""
            for token in reply.split(" "):
                shown += (" " if shown else "") + token
                placeholder.markdown(f"<div class='bubble-ai'>{shown}</div>", unsafe_allow_html=True)
                time.sleep(0.015)

        st.session_state.messages.append({"role": "assistant", "content": reply})

        # Crisis alert banner
        if "CRISIS_ALERT" in reply:
            st.warning(
                "If you’re having thoughts of self-harm or feel unsafe, please seek immediate help: "
                "AASRA 91-22-27546669 | National Helpline 9152987821 | Contact a trusted adult or local emergency services.",
                icon="🚨",
            )

    st.markdown("</div>", unsafe_allow_html=True)


if __name__ == "__main__":
    main()


