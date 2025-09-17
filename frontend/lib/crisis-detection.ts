// Crisis detection keywords and patterns
const CRISIS_KEYWORDS = [
  // Suicidal ideation
  "suicide",
  "kill myself",
  "end my life",
  "want to die",
  "better off dead",
  "no point living",
  "end it all",
  "take my own life",
  "harm myself",

  // Self-harm
  "cut myself",
  "hurt myself",
  "self harm",
  "self-harm",
  "cutting",
  "burning myself",
  "hitting myself",

  // Severe depression indicators
  "completely hopeless",
  "nothing matters",
  "no way out",
  "can't go on",
  "unbearable pain",
  "too much pain",
  "can't take it anymore",

  // Crisis situations
  "emergency",
  "crisis",
  "desperate",
  "can't cope",
  "breaking down",
  "losing control",
  "going crazy",
  "mental breakdown",
]

const SEVERITY_PATTERNS = {
  HIGH: [
    /\b(suicide|kill\s+myself|end\s+my\s+life|want\s+to\s+die)\b/i,
    /\b(better\s+off\s+dead|no\s+point\s+living|end\s+it\s+all)\b/i,
    /\b(take\s+my\s+own\s+life|harm\s+myself)\b/i,
  ],
  MEDIUM: [
    /\b(cut\s+myself|hurt\s+myself|self\s*harm|cutting)\b/i,
    /\b(completely\s+hopeless|nothing\s+matters|no\s+way\s+out)\b/i,
    /\b(can't\s+go\s+on|unbearable\s+pain|too\s+much\s+pain)\b/i,
  ],
  LOW: [/\b(emergency|crisis|desperate|can't\s+cope)\b/i, /\b(breaking\s+down|losing\s+control|going\s+crazy)\b/i],
}

export interface CrisisAlert {
  severity: "HIGH" | "MEDIUM" | "LOW"
  keywords: string[]
  message: string
  timestamp: Date
  userId?: string
  requiresImmediate: boolean
}

export function detectCrisis(message: string, userId?: string): CrisisAlert | null {
  const lowerMessage = message.toLowerCase()
  const detectedKeywords: string[] = []
  let severity: "HIGH" | "MEDIUM" | "LOW" | null = null

  // Check for high severity patterns first
  for (const pattern of SEVERITY_PATTERNS.HIGH) {
    if (pattern.test(message)) {
      severity = "HIGH"
      break
    }
  }

  // Check medium severity if not high
  if (!severity) {
    for (const pattern of SEVERITY_PATTERNS.MEDIUM) {
      if (pattern.test(message)) {
        severity = "MEDIUM"
        break
      }
    }
  }

  // Check low severity if not medium or high
  if (!severity) {
    for (const pattern of SEVERITY_PATTERNS.LOW) {
      if (pattern.test(message)) {
        severity = "LOW"
        break
      }
    }
  }

  // Collect detected keywords
  CRISIS_KEYWORDS.forEach((keyword) => {
    if (lowerMessage.includes(keyword.toLowerCase())) {
      detectedKeywords.push(keyword)
    }
  })

  if (severity || detectedKeywords.length > 0) {
    return {
      severity: severity || "LOW",
      keywords: detectedKeywords,
      message,
      timestamp: new Date(),
      userId,
      requiresImmediate: severity === "HIGH",
    }
  }

  return null
}

export async function triggerCrisisAlert(alert: CrisisAlert) {
  // In a real application, this would:
  // 1. Send immediate notification to on-call counsellors
  // 2. Log to crisis intervention database
  // 3. Trigger emergency protocols if severity is HIGH
  // 4. Send SMS/email alerts to crisis response team

  console.log("[CRISIS ALERT]", {
    severity: alert.severity,
    timestamp: alert.timestamp,
    requiresImmediate: alert.requiresImmediate,
    keywords: alert.keywords,
    userId: alert.userId,
  })

  // Simulate API call to crisis response system
  try {
    const response = await fetch("/api/crisis-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alert),
    })

    if (!response.ok) {
      throw new Error("Failed to send crisis alert")
    }

    return await response.json()
  } catch (error) {
    console.error("Crisis alert failed:", error)
    // Fallback: log to local storage for offline scenarios
    const alerts = JSON.parse(localStorage.getItem("crisis-alerts") || "[]")
    alerts.push(alert)
    localStorage.setItem("crisis-alerts", JSON.stringify(alerts))
  }
}
