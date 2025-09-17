import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowLeft, Volume2 } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function DemoPage() {
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
            <Badge variant="secondary">Platform Demo</Badge>
            <h1 className="text-4xl font-bold text-balance">See MindCare in Action</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Watch how our platform provides comprehensive mental health support for students.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-primary/90 hover:bg-primary">
                  <Play className="w-6 h-6 mr-2" />
                  Play Demo Video
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Interactive Features</CardTitle>
                <CardDescription>Experience key platform capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Play className="w-4 h-4 mr-2" />
                  Crisis Intervention Demo
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Play className="w-4 h-4 mr-2" />
                  Assessment Process
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Play className="w-4 h-4 mr-2" />
                  Wellness Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Play className="w-4 h-4 mr-2" />
                  Gamified Activities
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Audio Testimonials</CardTitle>
                <CardDescription>Hear from students who've benefited</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Priya's Recovery Journey
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Rahul's Exam Stress Management
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Counselor Perspective
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Parent Testimonial
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/get-started">
              <Button size="lg" className="animate-pulse-glow">
                Ready to Get Started?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
