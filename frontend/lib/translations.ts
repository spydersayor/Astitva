export const translations = {
  en: {
    // Common phrases
    greeting: "Hello",
    welcome: "Welcome to Astitva",
    mentalHealth: "Mental Health",
    support: "Support",
    resources: "Resources",
    help: "Help",

    // Mental health terms
    anxiety: "Anxiety",
    depression: "Depression",
    stress: "Stress",
    wellness: "Wellness",
    mindfulness: "Mindfulness",
    meditation: "Meditation",
    breathing: "Breathing Exercise",

    // Student-specific
    examStress: "Exam Stress",
    academicPressure: "Academic Pressure",
    careerAnxiety: "Career Anxiety",
    familyExpectations: "Family Expectations",
    peerPressure: "Peer Pressure",

    // Resources
    copingStrategies: "Coping Strategies",
    selfCare: "Self Care",
    emergencyHelp: "Emergency Help",
    counselling: "Counselling",
  },
  hi: {
    // Common phrases
    greeting: "नमस्ते",
    welcome: "अस्तित्व में आपका स्वागत है",
    mentalHealth: "मानसिक स्वास्थ्य",
    support: "सहायता",
    resources: "संसाधन",
    help: "मदद",

    // Mental health terms
    anxiety: "चिंता",
    depression: "अवसाद",
    stress: "तनाव",
    wellness: "कल्याण",
    mindfulness: "सचेतना",
    meditation: "ध्यान",
    breathing: "सांस की एक्सरसाइज",

    // Student-specific
    examStress: "परीक्षा का तनाव",
    academicPressure: "शैक्षणिक दबाव",
    careerAnxiety: "करियर की चिंता",
    familyExpectations: "पारिवारिक अपेक्षाएं",
    peerPressure: "साथियों का दबाव",

    // Resources
    copingStrategies: "मुकाबला करने की रणनीति",
    selfCare: "स्व-देखभाल",
    emergencyHelp: "आपातकालीन सहायता",
    counselling: "परामर्श",
  },
  ta: {
    // Common phrases
    greeting: "வணக்கம்",
    welcome: "அஸ்திவாவிற்கு வரவேற்கிறோம்",
    mentalHealth: "மனநலம்",
    support: "ஆதரவு",
    resources: "வளங்கள்",
    help: "உதவி",

    // Mental health terms
    anxiety: "கவலை",
    depression: "மனச்சோர்வு",
    stress: "மன அழுத்தம்",
    wellness: "நல்வாழ்வு",
    mindfulness: "கவனத்துடன் இருத்தல்",
    meditation: "தியானம்",
    breathing: "மூச்சுப் பயிற்சி",

    // Student-specific
    examStress: "தேர்வு மன அழுத்தம்",
    academicPressure: "கல்வி அழுத்தம்",
    careerAnxiety: "தொழில் கவலை",
    familyExpectations: "குடும்ப எதிர்பார்ப்புகள்",
    peerPressure: "சக அழுத்தம்",

    // Resources
    copingStrategies: "சமாளிக்கும் உத்திகள்",
    selfCare: "சுய பராமரிப்பு",
    emergencyHelp: "அவசர உதவி",
    counselling: "ஆலோசனை",
  },
  te: {
    // Common phrases
    greeting: "నమస్కారం",
    welcome: "అస్తిత్వకు స్వాగతం",
    mentalHealth: "మానసిక ఆరోగ్యం",
    support: "మద్దతు",
    resources: "వనరులు",
    help: "సహాయం",

    // Mental health terms
    anxiety: "ఆందోళన",
    depression: "నిరాశ",
    stress: "ఒత్తిడి",
    wellness: "శ్రేయస్సు",
    mindfulness: "అవగాహన",
    meditation: "ధ్యానం",
    breathing: "శ్వాస వ్యాయామం",

    // Student-specific
    examStress: "పరీక్ష ఒత్తిడి",
    academicPressure: "విద్యా ఒత్తిడి",
    careerAnxiety: "కెరీర్ ఆందోళన",
    familyExpectations: "కుటుంబ అంచనలు",
    peerPressure: "స్నేహితుల ఒత్తిడి",

    // Resources
    copingStrategies: "తట్టుకునే వ్యూహాలు",
    selfCare: "స్వీయ సంరక్షణ",
    emergencyHelp: "అత్యవసర సహాయం",
    counselling: "కౌన్సెలింగ్",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang]?.[key] || translations.en[key] || key
}
