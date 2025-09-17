import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, ArrowLeft } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function AboutPage() {
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
            <Badge variant="secondary">About MindCare</Badge>
            <h1 className="text-4xl font-bold text-balance">Transforming Student Mental Health in India</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're building a culturally-aware digital intervention system that understands the unique challenges faced
              by Indian students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide accessible, culturally-sensitive mental health support that addresses the specific
                  stressors of Indian student life - from academic pressure to family expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A future where every student in India has access to mental health support that understands their
                  cultural context and provides timely, effective intervention.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Why MindCare?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Users className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Student-Focused</h3>
                <p className="text-muted-foreground text-sm">Built specifically for the Indian student experience</p>
              </div>
              <div className="space-y-2">
                <Award className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Evidence-Based</h3>
                <p className="text-muted-foreground text-sm">
                  Using validated assessment tools and proven interventions
                </p>
              </div>
              <div className="space-y-2">
                <Heart className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Culturally Aware</h3>
                <p className="text-muted-foreground text-sm">
                  Respecting Indian values while promoting mental wellness
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/get-started">
              <Button size="lg" className="animate-pulse-glow">
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
