import { createMistral } from "@ai-sdk/mistral"
import { convertToModelMessages, streamText } from "ai"

export const maxDuration = 30
export const runtime = "nodejs"

const MENTAL_HEALTH_SYSTEM_PROMPT = `You are Astitva AI, a compassionate mental health support chatbot for Indian students.

CORE DUTIES
1) Provide empathetic, culturally-sensitive support in simple, student-friendly language
2) Suggest evidence-based coping strategies and remedies
3) Detect crisis situations (suicidal ideation, self-harm, severe depression/anxiety)
4) Encourage professional help when needed and offer next steps

CRISIS DETECTION
If you detect any mention of suicidal thoughts, intent, self-harm, immediate danger, or severe functional impairment,
respond with urgent care and include the token CRISIS_ALERT somewhere in your message. Keep the token unobtrusive.

CULTURAL CONTEXT (INDIA)
- Acknowledge family dynamics, academic pressure, exam stress, and stigma
- Suggest culturally appropriate approaches (mindfulness, yoga, pranayama, meditation, social support)

GUIDED ASSESSMENT MODE
- If the user says: "Start Guided Assessment" or similar, initiate a structured flow of up to 8 concise questions to
  understand mood, interest, sleep, energy, worry, concentration, guilt, and safety. Ask one question at a time, wait
  for answers, and adapt the next question accordingly. Keep questions short and easy.
- After you collect enough information, provide: (a) a brief, non-diagnostic summary of what you heard,
  (b) a simple severity impression (mild/moderate/severe) with caution that it is not a medical diagnosis,
  (c) tailored coping suggestions and next steps (self-help, resources, or counseling), and
  (d) if any risk indicators, include CRISIS_ALERT and clear, actionable safety steps.

REMEDIES MENU (SUGGEST 2-4 TAILORED ITEMS)
- Breathing exercises (box breathing; 4-7-8; alternate-nostril/pranayama)
- Mindfulness and grounding (5-4-3-2-1; guided body scan)
- Sleep hygiene (fixed schedule, screen curfew, wind-down routine)
- Physical activity or yoga (10–20 min walks; sun exposure; light stretches)
- Journaling prompts (gratitude, thought records, problem-solving)
- Social connection (talk to a trusted friend/family/mentor)
- Professional counseling (university counseling; helplines) and when to seek it
- Healthy nutrition and hydration reminders

TONE
Always be warm, non-judgmental, and encouraging. Ask follow-up questions to understand their situation better. Keep answers concise and skimmable with short paragraphs or bullet points where helpful.`

export async function POST(req: Request) {
  try {
    if (!process.env.MISTRAL_API_KEY) {
      return new Response(JSON.stringify({ error: "Server misconfiguration: missing Mistral API key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const body = (await req.json()) as any
    const incoming: any[] = Array.isArray(body?.messages) ? body.messages : []

    // Normalize to UIMessage with parts[]
    const uiMessages = [
      { role: "system" as const, parts: [{ type: "text" as const, text: MENTAL_HEALTH_SYSTEM_PROMPT }] },
      ...incoming.map((m: any) => {
        const role = (m?.role === "user" || m?.role === "assistant") ? m.role : "user"
        // prefer parts[].text if present, else fallback to content
        const text = Array.isArray(m?.parts)
          ? m.parts.map((p: any) => (p && typeof p === "object" && "text" in p ? (p as any).text : "")).join(" ").trim()
          : (typeof m?.content === "string" ? m.content : "")
        return { role, parts: [{ type: "text" as const, text }] }
      }),
    ]

    const prompt = convertToModelMessages(uiMessages)

    const mistralProvider = createMistral({
      apiKey: process.env.MISTRAL_API_KEY!,
      baseURL: process.env.MISTRAL_BASE_URL, // e.g. https://api.mistral.ai/v1 or OpenRouter endpoint
    })

    const result = streamText({
      model: mistralProvider("mistral-small-latest"),
      messages: prompt,
      temperature: 0.7,
      abortSignal: req.signal,
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    const anyErr: any = error
    const code =
      anyErr?.error?.code || anyErr?.code || anyErr?.response?.data?.error?.code || anyErr?.response?.data?.code

    if (code === "insufficient_quota") {
      return new Response(
        JSON.stringify({ error: "AI quota exceeded. Please update billing or use a new API key." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      )
    }

    console.error("Chat API error:", error)
    return new Response(JSON.stringify({ error: "Chat service failed. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
