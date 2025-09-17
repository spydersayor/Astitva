import { openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const MENTAL_HEALTH_SYSTEM_PROMPT = `You are Astitva AI, a compassionate mental health support chatbot for Indian students. Your role is to:

1. Provide empathetic, culturally-sensitive mental health support
2. Suggest evidence-based coping strategies and remedies
3. Detect crisis situations (suicidal thoughts, self-harm, severe depression/anxiety)
4. Offer resources in simple, student-friendly language
5. Encourage professional help when needed

CRISIS DETECTION: If you detect any mention of:
- Suicidal thoughts or ideation
- Self-harm behaviors
- Severe depression or anxiety
- Immediate danger to self or others
Respond with urgent care and include "CRISIS_ALERT" in your response.

CULTURAL CONTEXT: 
- Understand Indian family dynamics and academic pressure
- Be sensitive to cultural stigma around mental health
- Suggest culturally appropriate coping mechanisms
- Reference Indian concepts like mindfulness, yoga, meditation

REMEDIES TO SUGGEST:
- Breathing exercises (pranayama)
- Mindfulness and meditation
- Physical activity and yoga
- Journaling and self-reflection
- Social connection and support
- Professional counseling
- Healthy sleep and nutrition habits

Always be warm, non-judgmental, and encouraging. Ask follow-up questions to understand their situation better.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages([{ role: "system", content: MENTAL_HEALTH_SYSTEM_PROMPT }, ...messages])

  const result = streamText({
    model: openai("gpt-4"),
    messages: prompt,
    maxTokens: 1000,
    temperature: 0.7,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ text, isAborted }) => {
      if (isAborted) {
        console.log("Chat aborted")
        return
      }

      // Crisis detection logging
      if (text.includes("CRISIS_ALERT")) {
        console.log("[CRISIS DETECTED] Alert triggered for user message")
        // In a real app, this would trigger counsellor notifications
      }
    },
  })
}
