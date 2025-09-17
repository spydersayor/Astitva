import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, Heart, Users, Gamepad2, Wifi, Menu, Play } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import { FeatureCard } from "@/components/feature-card"
import { StatsSection } from "@/components/stats-section"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Flowing Background Animation */}
      <FlowingBackground />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Astitva</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
            Support
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/signin">
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Sign In
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="animate-pulse-glow">Get Started</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="animate-float">
                🇮🇳 Made for Indian Students
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Your Mental Health, <span className="text-primary">Our Priority.</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                A culturally-aware digital intervention system providing 24/7 crisis support, proactive wellness
                tracking, and gamified self-care for students across India.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="How are you feeling today?"
                className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button size="lg" className="animate-pulse-glow">
                  Start Free Assessment
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="group bg-transparent">
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-primary" />
                <span>Works Offline</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse"></div>
            <Card className="relative bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Crisis Support</CardTitle>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <CardDescription>Real-time intervention when you need it most</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mood Assessment</span>
                    <span className="text-primary">Active</span>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Counselor available in 2 minutes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary">Core Features</Badge>
          <h2 className="text-4xl font-bold text-balance">Comprehensive Mental Health Support</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our platform combines AI-driven insights with human empathy to provide culturally-sensitive mental health
            care for Indian students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Crisis Intervention"
            description="Real-time detection and immediate response for high-risk situations with 24/7 professional support."
            priority="🔴 Highest Impact"
            delay="0"
          />

          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Cultural Adaptation"
            description="Tailored content in multiple Indian languages addressing academic stress, family pressure, and hostel life."
            priority="🟠 High Impact"
            delay="200"
          />

          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Proactive Support"
            description="Context-aware assistance that syncs with exam schedules and placement periods for timely intervention."
            priority="🟠 High Impact"
            delay="400"
          />

          <FeatureCard
            icon={<Wifi className="w-8 h-8" />}
            title="Offline Access"
            description="Essential resources available without internet connectivity, ensuring support in rural areas."
            priority="🟡 Medium Impact"
            delay="600"
          />

          <FeatureCard
            icon={<Gamepad2 className="w-8 h-8" />}
            title="Gamified Wellness"
            description="Engaging mood tracking, journaling, and self-care challenges with rewards and progress streaks."
            priority="🟢 Good Add-on"
            delay="800"
          />

          <FeatureCard
            icon={<Search className="w-8 h-8" />}
            title="Smart Assessment"
            description="PHQ-9 and GAD-7 screening with AI-powered risk assessment and personalized recommendations."
            priority="🟠 High Impact"
            delay="1000"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-balance">Ready to Transform Student Mental Health?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Join thousands of students already using Astitva for better mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="animate-pulse-glow">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
