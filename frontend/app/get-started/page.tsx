import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function GetStartedPage() {
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
            <Badge variant="secondary">Get Started</Badge>
            <h1 className="text-4xl font-bold text-balance">Begin Your Mental Wellness Journey</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Take the first step towards better mental health with our guided onboarding process.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <CardTitle>Complete Your Profile</CardTitle>
                </div>
                <CardDescription>Help us understand your background and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Age</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your age"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Institution</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your college/university"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Course/Year</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="e.g., B.Tech 3rd Year"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                  <CardTitle>Initial Assessment</CardTitle>
                </div>
                <CardDescription>Quick screening to understand your current mental health status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                  <div>
                    <p className="font-medium">PHQ-9 & GAD-7 Screening</p>
                    <p className="text-sm text-muted-foreground">Takes about 5-10 minutes</p>
                  </div>
                  <Link href="/assessment">
                    <Button>
                      Start Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <CardTitle>Personalized Plan</CardTitle>
                </div>
                <CardDescription>Receive customized recommendations based on your assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Tailored wellness activities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Crisis support setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Resource recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="animate-pulse-glow">
              Create My Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
