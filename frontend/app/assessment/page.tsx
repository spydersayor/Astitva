import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Clock } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Mental Health Assessment</Badge>
            <h1 className="text-4xl font-bold text-balance">Understanding Your Mental Health</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              This confidential assessment helps us provide personalized support for your mental wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>PHQ-9 Depression Screening</span>
                </CardTitle>
                <CardDescription>Assesses symptoms of depression over the past 2 weeks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Duration</span>
                    <span className="text-primary">3-5 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Questions</span>
                    <span className="text-primary">9 items</span>
                  </div>
                </div>
                <Link href="/assessment/phq9">
                  <Button className="w-full">Start PHQ-9 Assessment</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>GAD-7 Anxiety Screening</span>
                </CardTitle>
                <CardDescription>Evaluates anxiety symptoms and their severity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Duration</span>
                    <span className="text-primary">2-4 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Questions</span>
                    <span className="text-primary">7 items</span>
                  </div>
                </div>
                <Link href="/assessment/gad7">
                  <Button className="w-full">Start GAD-7 Assessment</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
              <CardDescription>Your privacy and comfort are our top priorities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Completely Confidential</p>
                    <p className="text-sm text-muted-foreground">Your responses are private and secure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">No Right or Wrong Answers</p>
                    <p className="text-sm text-muted-foreground">Answer honestly based on your experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Immediate Results</p>
                    <p className="text-sm text-muted-foreground">Get personalized recommendations instantly</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/assessment/phq9">
              <Button size="lg" className="animate-pulse-glow">
                Begin Complete Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
