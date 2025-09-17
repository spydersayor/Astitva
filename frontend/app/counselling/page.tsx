import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Clock, Shield, Phone, MessageCircle, Video, Calendar } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

export default function CounsellingPage() {
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

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Professional Support</Badge>
            <h1 className="text-4xl font-bold text-balance">Counselling Services</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Connect with qualified mental health professionals who understand the unique challenges faced by Indian
              students. All sessions are completely confidential and culturally sensitive.
            </p>
          </div>

          {/* Crisis Support Banner */}
          <Card className="bg-red-500/10 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-red-500" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-500">Crisis Support Available 24/7</h3>
                  <p className="text-muted-foreground">
                    If you're experiencing a mental health crisis, immediate help is available.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Call Crisis Helpline
                  </Button>
                  <Link href="/booking?type=emergency">
                    <Button className="bg-red-500 hover:bg-red-600">Emergency Session</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Counselling Options */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Video Counselling</CardTitle>
                <CardDescription>Face-to-face sessions from the comfort of your space</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-primary">45-60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-primary">7 days a week</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="text-primary">Hindi, English</span>
                  </div>
                </div>
                <Link href="/booking?type=video">
                  <Button className="w-full">Book Video Session</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Chat Counselling</CardTitle>
                <CardDescription>Text-based support for those who prefer writing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-primary">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-primary">24/7 support</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response:</span>
                    <span className="text-primary">Real-time</span>
                  </div>
                </div>
                <Link href="/booking?type=chat">
                  <Button className="w-full bg-transparent" variant="outline">
                    Book Chat Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Phone Counselling</CardTitle>
                <CardDescription>Voice-only sessions for privacy and convenience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-primary">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-primary">6 AM - 11 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="text-primary">Multiple</span>
                  </div>
                </div>
                <Link href="/booking?type=phone">
                  <Button className="w-full bg-transparent" variant="outline">
                    Book Phone Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>What to Expect from Counselling</CardTitle>
              <CardDescription>
                Understanding the counselling process can help you feel more comfortable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <Shield className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Complete Confidentiality</h4>
                  <p className="text-sm text-muted-foreground">Everything you share is private and protected</p>
                </div>
                <div className="text-center space-y-3">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Cultural Understanding</h4>
                  <p className="text-sm text-muted-foreground">Counsellors trained in Indian cultural contexts</p>
                </div>
                <div className="text-center space-y-3">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Sessions that fit your academic schedule</p>
                </div>
                <div className="text-center space-y-3">
                  <Calendar className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">Regular sessions and follow-up care</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialized Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Specialized Support Areas</CardTitle>
                <CardDescription>Our counsellors have expertise in areas common to student life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Academic stress and exam anxiety</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Family pressure and expectations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Relationship and social issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Career confusion and future planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Hostel life and homesickness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Depression and anxiety management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Simple steps to begin your counselling journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Choose Your Preferred Method</p>
                      <p className="text-sm text-muted-foreground">
                        Video, chat, or phone - whatever feels comfortable
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Book Your Session</p>
                      <p className="text-sm text-muted-foreground">Select a time that works with your schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Connect with Your Counsellor</p>
                      <p className="text-sm text-muted-foreground">Begin your journey to better mental health</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Take the First Step?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remember, seeking help is a sign of strength, not weakness. Our counsellors are here to support you
              through any challenges you're facing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="animate-pulse-glow">
                  Book a Session Now
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg">
                  Explore Self-Help Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
