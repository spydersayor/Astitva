"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

const phq9Questions = [
  "Little interest or pleasure in doing things.",
  "Feeling down, depressed, or hopeless.",
  "Trouble falling/staying asleep, or sleeping too much.",
  "Feeling tired or having little energy.",
  "Poor appetite or overeating.",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down.",
  "Trouble concentrating on things, such as reading or watching TV.",
  "Moving or speaking so slowly that other people could have noticed — or the opposite, being restless/fidgety.",
  "Thoughts that you would be better off dead or of hurting yourself in some way.",
]

const responseOptions = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
]

const getScoreCategory = (score: number) => {
  if (score <= 4) return { category: "Minimal", color: "text-green-500", severity: "minimal" }
  if (score <= 9) return { category: "Mild", color: "text-yellow-500", severity: "mild" }
  if (score <= 14) return { category: "Moderate", color: "text-orange-500", severity: "moderate" }
  if (score <= 19) return { category: "Moderately Severe", color: "text-red-500", severity: "severe" }
  return { category: "Severe", color: "text-red-600", severity: "severe" }
}

export default function PHQ9AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(9).fill(-1))
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < phq9Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0)
  }

  const getRecommendations = (severity: string, score: number) => {
    switch (severity) {
      case "minimal":
      case "mild":
        return {
          message:
            "Your responses suggest minimal to mild symptoms. This is a positive sign, but it's still important to maintain your mental wellness.",
          nextSteps: [
            "Continue with self-help resources and relaxation techniques",
            "Maintain healthy lifestyle habits",
            "Consider our guided meditation and wellness resources",
          ],
          resources: "/resources",
        }
      case "moderate":
        return {
          message:
            "Your responses indicate moderate symptoms. We recommend speaking with a mental health professional for personalized support.",
          nextSteps: [
            "Book a confidential session with our college counsellor",
            "Explore our self-help resources while seeking professional support",
            "Consider joining our peer support groups",
          ],
          resources: "/counselling",
        }
      case "severe":
        return {
          message:
            "Your responses suggest more significant symptoms that warrant immediate attention. Please reach out for professional support right away.",
          nextSteps: [
            "We strongly recommend connecting with a counsellor immediately",
            "Consider reaching out to a mental health helpline",
            "Don't hesitate to contact emergency services if you're in crisis",
          ],
          resources: "/counselling",
          urgent: true,
        }
      default:
        return {
          message: "Thank you for completing the assessment.",
          nextSteps: ["Explore our resources for mental wellness"],
          resources: "/resources",
        }
    }
  }

  if (isComplete) {
    const totalScore = calculateScore()
    const { category, color, severity } = getScoreCategory(totalScore)
    const recommendations = getRecommendations(severity, totalScore)

    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <FlowingBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <div className="space-y-4">
              <Badge variant="secondary">PHQ-9 Assessment Complete</Badge>
              <h1 className="text-4xl font-bold">Your Results</h1>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Depression Screening Results</CardTitle>
                <CardDescription>Based on your responses over the past 2 weeks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold">{totalScore}/27</div>
                  <div className={`text-xl font-semibold ${color}`}>{category}</div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-center">{recommendations.message}</p>

                  {recommendations.urgent && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-500 font-medium text-center">
                        We recommend you immediately connect with a counsellor.
                        <Link href="/counselling" className="underline ml-1">
                          Click here to go to the Counselling Page
                        </Link>
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="font-semibold">Recommended Next Steps:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {recommendations.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href={recommendations.resources} className="flex-1">
                    <Button className="w-full">{severity === "severe" ? "Get Help Now" : "Explore Resources"}</Button>
                  </Link>
                  <Link href="/assessment/gad7" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      Take GAD-7 Assessment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/dashboard" className="text-primary hover:underline">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/assessment"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Assessments
        </Link>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary">PHQ-9 Depression Screening</Badge>
            <h1 className="text-4xl font-bold">
              Question {currentQuestion + 1} of {phq9Questions.length}
            </h1>
            <p className="text-muted-foreground">
              Over the last 2 weeks, how often have you been bothered by the following problem?
            </p>
          </div>

          <div className="w-full bg-secondary/20 rounded-full h-2 mb-8">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / phq9Questions.length) * 100}%` }}
            />
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-center">{phq9Questions[currentQuestion]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {responseOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`p-4 text-left rounded-lg border transition-all ${
                      answers[currentQuestion] === option.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          answers[currentQuestion] === option.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      />
                      <span className="font-medium">{option.label}</span>
                      <span className="text-sm text-muted-foreground ml-auto">({option.value})</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button onClick={handleNext} disabled={answers[currentQuestion] === -1} className="animate-pulse-glow">
                  {currentQuestion === phq9Questions.length - 1 ? "Complete Assessment" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
