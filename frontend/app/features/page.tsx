import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Heart,
  Users,
  Gamepad2,
  Wifi,
  Search,
  ArrowLeft,
  Bot,
  Globe,
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Headphones,
} from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import { FeatureCard } from "@/components/feature-card"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Platform Features</Badge>
            <h1 className="text-4xl font-bold text-balance">Comprehensive Mental Health Support</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our platform combines AI-driven insights with human empathy to provide culturally-sensitive mental health
              care for Indian students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bot className="w-8 h-8" />}
              title="AI Mental Health Chatbot"
              description="24/7 intelligent support with culturally-aware responses, remedy suggestions, and real-time crisis detection."
              priority="🔴 Highest Impact"
              delay="0"
            />

            <FeatureCard
              icon={<AlertTriangle className="w-8 h-8" />}
              title="Crisis Detection & Alerts"
              description="Advanced AI monitoring for high-risk situations with instant counselor notifications and emergency protocols."
              priority="🔴 Highest Impact"
              delay="100"
            />

            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Real-time Analytics Dashboard"
              description="Live data visualization showing positive impact metrics, engagement trends, and student progress tracking."
              priority="🟠 High Impact"
              delay="200"
            />

            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Multi-language Support"
              description="Resources in Hindi, Tamil, Telugu, Bengali, and more with student-relatable examples and cultural context."
              priority="🟠 High Impact"
              delay="300"
            />

            <FeatureCard
              icon={<Headphones className="w-8 h-8" />}
              title="Offline Core Resources"
              description="Essential audio guides, breathing exercises, and coping strategies available without internet connectivity."
              priority="🟠 High Impact"
              delay="400"
            />

            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Crisis Intervention"
              description="Real-time detection and immediate response for high-risk situations with 24/7 professional support."
              priority="🔴 Highest Impact"
              delay="500"
            />

            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Cultural Adaptation"
              description="Tailored content addressing academic stress, family pressure, hostel life, and placement anxiety."
              priority="🟠 High Impact"
              delay="600"
            />

            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Proactive Support"
              description="Context-aware assistance that syncs with exam schedules and placement periods for timely intervention."
              priority="🟠 High Impact"
              delay="700"
            />

            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Interactive Assessments"
              description="PHQ-9 and GAD-7 screening with AI-powered risk assessment and personalized recommendations."
              priority="🟠 High Impact"
              delay="800"
            />

            <FeatureCard
              icon={<Wifi className="w-8 h-8" />}
              title="Offline Access"
              description="Essential resources available without internet connectivity, ensuring support in rural areas."
              priority="🟡 Medium Impact"
              delay="900"
            />

            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8" />}
              title="Gamified Wellness"
              description="Engaging mood tracking, journaling, and self-care challenges with rewards and progress streaks."
              priority="🟢 Good Add-on"
              delay="1000"
            />

            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title="Smart Resource Discovery"
              description="AI-powered content recommendations based on your current mood, stress levels, and personal preferences."
              priority="🟡 Medium Impact"
              delay="1100"
            />
          </div>

          <div className="text-center">
            <Link href="/get-started">
              <Button size="lg" className="animate-pulse-glow">
                Try These Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
