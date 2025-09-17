export interface OfflineResource {
  id: string
  title: string
  titleHi: string
  titleTa: string
  titleTe: string
  type: "audio" | "guide" | "exercise" | "video"
  category: "breathing" | "meditation" | "stress-relief" | "sleep" | "anxiety" | "depression"
  duration?: string
  description: string
  descriptionHi: string
  descriptionTa: string
  descriptionTe: string
  content: string
  audioUrl?: string
  downloadable: boolean
  studentRelatable: boolean
}

export const offlineResources: OfflineResource[] = [
  {
    id: "breathing-4-7-8",
    title: "4-7-8 Breathing for Exam Anxiety",
    titleHi: "परीक्षा की चिंता के लिए 4-7-8 सांस तकनीक",
    titleTa: "தேர்வு கவலைக்கான 4-7-8 மூச்சுப் பயிற்சி",
    titleTe: "పరీక్ష ఆందోళనకు 4-7-8 శ్వాస వ్యాయామం",
    type: "audio",
    category: "breathing",
    duration: "5 minutes",
    description: "A simple breathing technique to calm pre-exam nerves and reduce anxiety before important tests.",
    descriptionHi: "महत्वपूर्ण परीक्षाओं से पहले चिंता को कम करने और नर्वस को शांत करने की एक सरल सांस तकनीक।",
    descriptionTa: "முக்கியமான தேர்வுகளுக்கு முன் கவலையைக் குறைக்க மற்றும் நரம்புகளை அமைதிப்படுத்த ஒரு எளிய மூச்சுப் பயிற்சி.",
    descriptionTe: "ముఖ్యమైన పరీక్షలకు ముందు ఆందోళనను తగ్గించడానికి మరియు నరాలను శాంతపరచడానికి ఒక సాధారణ శ్వాస వ్యాయామం.",
    content: `
**4-7-8 Breathing Technique for Students**

Perfect for: Before exams, presentations, or when feeling overwhelmed

**Steps:**
1. Sit comfortably in your study chair
2. Exhale completely through your mouth
3. Close your mouth, inhale through nose for 4 counts
4. Hold your breath for 7 counts
5. Exhale through mouth for 8 counts
6. Repeat 3-4 times

**When to use:**
- 10 minutes before entering exam hall
- During study breaks when stressed
- Before important interviews or presentations
- When family pressure feels overwhelming

**Student Tip:** Practice this during regular study sessions so it becomes automatic during stressful moments.
    `,
    audioUrl: "/audio/breathing-4-7-8.mp3",
    downloadable: true,
    studentRelatable: true,
  },
  {
    id: "study-stress-meditation",
    title: "Quick Study Break Meditation",
    titleHi: "त्वरित अध्ययन विराम ध्यान",
    titleTa: "விரைவான படிப்பு இடைவேளை தியானம்",
    titleTe: "త్వరిత అధ్యయన విరామ ధ్యానం",
    type: "guide",
    category: "meditation",
    duration: "3 minutes",
    description: "A short meditation designed for busy students to reset their mind during study sessions.",
    descriptionHi: "व्यस्त छात्रों के लिए डिज़ाइन किया गया एक छोटा ध्यान जो अध्ययन सत्र के दौरान मन को रीसेट करता है।",
    descriptionTa: "படிப்பு அமர்வுகளின் போது மனதை மீட்டமைக்க व்यस्त மாணவர்களுக்காக வடிவமைக்கப்பட்ட ஒரு குறுகிய தியானம்.",
    descriptionTe: "అధ్యయన సెషన్లలో మనసును రీసెట్ చేయడానికి బిజీ విద్యార్థుల కోసం రూపొందించిన చిన్న ధ్యానం.",
    content: `
**3-Minute Study Break Meditation**

**Perfect for:** Between study sessions, after difficult topics, when mind feels cluttered

**Steps:**
1. **Minute 1 - Settle In**
   - Sit in your study space
   - Close your eyes or soften your gaze
   - Take 3 deep breaths
   - Notice the weight of your body in the chair

2. **Minute 2 - Mind Reset**
   - Focus on your natural breathing
   - When thoughts about studies arise, gently return to breath
   - Imagine your mind like a computer restarting - clearing all tabs

3. **Minute 3 - Prepare to Return**
   - Set an intention for your next study session
   - Wiggle fingers and toes
   - Open eyes slowly
   - Take one more deep breath

**Student Benefits:**
- Improves focus for next study session
- Reduces mental fatigue
- Helps retain information better
- Prevents burnout during long study days
    `,
    downloadable: true,
    studentRelatable: true,
  },
  {
    id: "career-anxiety-guide",
    title: "Managing Career Uncertainty",
    titleHi: "करियर की अनिश्चितता का प्रबंधन",
    titleTa: "தொழில் நிச்சயமின்மையை நிர்வகித்தல்",
    titleTe: "కెరీర్ అనిశ్చితత్వాన్ని నిర్వహించడం",
    type: "guide",
    category: "anxiety",
    duration: "10 minutes read",
    description: "Practical strategies for Indian students dealing with career pressure and future uncertainty.",
    descriptionHi: "करियर के दबाव और भविष्य की अनिश्चितता से निपटने वाले भारतीय छात्रों के लिए व्यावहारिक रणनीतियां।",
    descriptionTa: "தொழில் அழுத்தம் மற்றும் எதிர்கால நிச்சயமின்மையை எதிர்கொள்ளும் இந்திய மாணவர்களுக்கான நடைமுறை உத்திகள்.",
    descriptionTe: "కెరీర్ ఒత్తిడి మరియు భవిష్యత్ అనిశ్చితత్వంతో వ్యవహరించే భారతీయ విద్యార్థులకు ఆచరణాత్మక వ్యూహాలు.",
    content: `
**Managing Career Uncertainty: A Guide for Indian Students**

**Understanding the Pressure**
- Family expectations vs personal interests
- Competitive job market reality
- Social comparison with peers
- Traditional career paths vs new opportunities

**Practical Strategies:**

**1. Reframe Your Thinking**
- "I must have it all figured out" → "I'm exploring and learning"
- "Everyone else knows what they're doing" → "Everyone is figuring it out"
- "There's only one right path" → "There are multiple paths to success"

**2. Take Small Actions**
- Research 3 career options that interest you
- Talk to professionals in fields you're curious about
- Take online courses to explore new skills
- Join student clubs related to your interests

**3. Manage Family Conversations**
- Share your research and thought process
- Explain your interests with concrete examples
- Ask for time to explore before making decisions
- Show you're being responsible, not reckless

**4. Build Your Support Network**
- Connect with seniors in your field of interest
- Find mentors through college or online platforms
- Join student communities facing similar challenges
- Consider professional counseling for major decisions

**Remember:** Your career is a journey, not a destination. It's okay to change directions as you grow and learn more about yourself.
    `,
    downloadable: true,
    studentRelatable: true,
  },
  {
    id: "sleep-routine-students",
    title: "Healthy Sleep for Students",
    titleHi: "छात्रों के लिए स्वस्थ नींद",
    titleTa: "மாணவர்களுக்கான ஆரோக்கியமான தூக்கம்",
    titleTe: "విద్యార్థులకు ఆరోగ్యకరమైన నిద్ర",
    type: "guide",
    category: "sleep",
    duration: "8 minutes read",
    description: "Evidence-based sleep strategies tailored for Indian student lifestyle and academic demands.",
    descriptionHi: "भारतीय छात्र जीवनशैली और शैक्षणिक मांगों के लिए तैयार की गई साक्ष्य-आधारित नींद रणनीतियां।",
    descriptionTa: "இந்திய மாணவர் வாழ்க்கை முறை மற்றும் கல்வித் தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட சான்று அடிப்படையிலான தூக்க உத்திகள்.",
    descriptionTe: "భారతీయ విద్యార్థి జీవనశైలి మరియు విద్యా అవసరాలకు అనుగుణంగా రూపొందించిన సాక్ష్య-ఆధారిత నిద్ర వ్యూహాలు.",
    content: `
**Healthy Sleep Guide for Indian Students**

**The Student Sleep Challenge:**
- Late night study sessions
- Early morning classes
- Screen time before bed
- Stress and anxiety affecting sleep
- Irregular meal times
- Caffeine dependency

**Creating Your Sleep Routine:**

**1. Set Consistent Sleep Schedule**
- Same bedtime and wake time (even on weekends)
- Aim for 7-9 hours of sleep
- Use phone alarms for both sleep and wake times

**2. Optimize Your Study Environment**
- Study in bright light during day
- Dim lights 1 hour before bed
- Keep bedroom cool and dark
- Use your bed only for sleep, not studying

**3. Manage Evening Routine**
- Stop studying 1 hour before bed
- No screens 30 minutes before sleep
- Try reading, light stretching, or journaling
- Avoid heavy meals 3 hours before bed

**4. Handle Study Stress**
- Write tomorrow's to-do list before bed
- Practice 5-minute breathing exercise
- Keep a worry journal - write concerns down to address tomorrow
- Use progressive muscle relaxation

**5. Smart Caffeine Use**
- No caffeine after 2 PM
- Replace evening tea/coffee with herbal tea
- Stay hydrated throughout the day

**Quick Sleep Fixes:**
- Can't fall asleep? Try 4-7-8 breathing
- Mind racing? Count backwards from 100
- Anxious about tomorrow? Remind yourself you'll handle it better after sleep

**Remember:** Good sleep improves memory, focus, and emotional regulation - all crucial for academic success.
    `,
    downloadable: true,
    studentRelatable: true,
  },
]

export function getResourcesByCategory(category: OfflineResource["category"]): OfflineResource[] {
  return offlineResources.filter((resource) => resource.category === category)
}

export function getResourcesByType(type: OfflineResource["type"]): OfflineResource[] {
  return offlineResources.filter((resource) => resource.type === type)
}

export function getStudentRelatableResources(): OfflineResource[] {
  return offlineResources.filter((resource) => resource.studentRelatable)
}
