import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Book, Users, ArrowLeft, ExternalLink } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function SupportPage() {
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
            <Badge variant="secondary">Support Center</Badge>
            <h1 className="text-4xl font-bold text-balance">We're Here to Help</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Access immediate support, resources, and guidance whenever you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 border-red-500/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-red-500" />
                  <CardTitle className="text-red-500">Crisis Support</CardTitle>
                </div>
                <CardDescription>Immediate help for urgent situations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you're in crisis or having thoughts of self-harm, please reach out immediately.
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Crisis Helpline
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Counselor
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Book className="w-6 h-6 text-primary" />
                  <CardTitle>Self-Help Resources</CardTitle>
                </div>
                <CardDescription>Tools and guides for self-care</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Link
                    href="/resources/breathing"
                    className="block p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Breathing Exercises</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link
                    href="/resources/meditation"
                    className="block p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Guided Meditation</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link
                    href="/resources/journal"
                    className="block p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Mood Journal</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle>Community Support</CardTitle>
              </div>
              <CardDescription>Connect with others on similar journeys</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                  <span className="font-medium">Peer Groups</span>
                  <span className="text-xs text-muted-foreground">Join support circles</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                  <span className="font-medium">Forums</span>
                  <span className="text-xs text-muted-foreground">Share experiences</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                  <span className="font-medium">Workshops</span>
                  <span className="text-xs text-muted-foreground">Learn coping skills</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/assessment">
              <Button size="lg" className="animate-pulse-glow">
                Start Mental Health Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
