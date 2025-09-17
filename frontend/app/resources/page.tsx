"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  BookOpen,
  Headphones,
  Video,
  Download,
  ExternalLink,
  Heart,
  Brain,
  Zap,
  Moon,
  Globe,
  Play,
  FileText,
} from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import { offlineResources, getResourcesByCategory, type Language } from "@/lib/offline-resources"
import { getTranslation } from "@/lib/translations"
import Link from "next/link"

export default function ResourcesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredResources =
    selectedCategory === "all" ? offlineResources : getResourcesByCategory(selectedCategory as any)

  const getResourceTitle = (resource: any) => {
    switch (selectedLanguage) {
      case "hi":
        return resource.titleHi
      case "ta":
        return resource.titleTa
      case "te":
        return resource.titleTe
      default:
        return resource.title
    }
  }

  const getResourceDescription = (resource: any) => {
    switch (selectedLanguage) {
      case "hi":
        return resource.descriptionHi
      case "ta":
        return resource.descriptionTa
      case "te":
        return resource.descriptionTe
      default:
        return resource.description
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Self-Help Resources</Badge>
            <h1 className="text-4xl font-bold text-balance">
              {getTranslation(selectedLanguage, "resources")} & Wellness Materials
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Explore our curated collection of self-help materials, guided meditations, and wellness tools designed
              specifically for Indian students. Available in multiple languages with offline access.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedLanguage} onValueChange={(value: Language) => setSelectedLanguage(value)}>
                <SelectTrigger className="w-40 hover:border-primary/50 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                  <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                  <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="breathing">Breathing Exercises</SelectItem>
                <SelectItem value="meditation">Meditation</SelectItem>
                <SelectItem value="stress-relief">Stress Relief</SelectItem>
                <SelectItem value="sleep">Sleep Support</SelectItem>
                <SelectItem value="anxiety">Anxiety Management</SelectItem>
                <SelectItem value="depression">Depression Support</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Offline Resources for Students</h2>
              <p className="text-muted-foreground">
                Download and access these resources anytime, even without internet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {resource.type === "audio" && <Headphones className="w-4 h-4 text-primary" />}
                          {resource.type === "guide" && <FileText className="w-4 h-4 text-primary" />}
                          {resource.type === "exercise" && <Zap className="w-4 h-4 text-primary" />}
                          {resource.type === "video" && <Video className="w-4 h-4 text-primary" />}
                          <Badge variant="secondary" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">{getResourceTitle(resource)}</CardTitle>
                        <CardDescription className="text-sm mt-2">{getResourceDescription(resource)}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{resource.duration}</span>
                        {resource.studentRelatable && (
                          <Badge variant="outline" className="text-xs">
                            Student-focused
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 hover:bg-primary/90 transition-colors">
                          {resource.type === "audio" && <Play className="w-3 h-3 mr-1" />}
                          {resource.type === "guide" && <BookOpen className="w-3 h-3 mr-1" />}
                          {resource.type === "exercise" && <Zap className="w-3 h-3 mr-1" />}
                          {resource.type === "video" && <Video className="w-3 h-3 mr-1" />}
                          Access
                        </Button>
                        {resource.downloadable && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-primary/10 transition-colors bg-transparent"
                          >
                            <Download className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Guided Meditations</CardTitle>
                <CardDescription>Relaxation and mindfulness exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full hover:bg-primary/90 transition-colors" size="sm">
                  Listen Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Self-Help Guides</CardTitle>
                <CardDescription>Practical strategies and techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-transparent hover:bg-primary/10 transition-colors"
                  size="sm"
                  variant="outline"
                >
                  Read Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
                <CardDescription>Step-by-step wellness practices</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-transparent hover:bg-primary/10 transition-colors"
                  size="sm"
                  variant="outline"
                >
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Download className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Downloadables</CardTitle>
                <CardDescription>Worksheets and tracking tools</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-transparent hover:bg-primary/10 transition-colors"
                  size="sm"
                  variant="outline"
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Featured Resources */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Featured Resources</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Stress Management for Students</CardTitle>
                      <CardDescription>Comprehensive guide to managing academic pressure</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Learn practical techniques to handle exam stress, assignment deadlines, and academic expectations.
                    Includes breathing exercises, time management tips, and mindfulness practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>📖 15 min read</span>
                      <span>🎧 Audio available</span>
                    </div>
                    <Button size="sm">
                      Access Guide
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Anxiety Toolkit</CardTitle>
                      <CardDescription>Evidence-based techniques for anxiety management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    A collection of proven methods including cognitive behavioral techniques, grounding exercises, and
                    progressive muscle relaxation specifically adapted for Indian students.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>🎥 Video series</span>
                      <span>📱 Mobile friendly</span>
                    </div>
                    <Button size="sm">
                      Start Toolkit
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Moon className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Sleep Hygiene Guide</CardTitle>
                      <CardDescription>Improve your sleep quality and mental health</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Discover how proper sleep affects your mental health and academic performance. Includes sleep
                    tracking templates and bedtime routine suggestions for hostel life.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>📊 Sleep tracker</span>
                      <span>⏰ 21-day plan</span>
                    </div>
                    <Button size="sm">
                      Download Guide
                      <Download className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>Quick Relief Techniques</CardTitle>
                      <CardDescription>Immediate help for overwhelming moments</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Fast-acting techniques you can use anywhere - in the library, before exams, or during stressful
                    situations. Perfect for busy student schedules.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>⚡ 2-5 min each</span>
                      <span>📱 Offline access</span>
                    </div>
                    <Button size="sm">
                      Learn Techniques
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Browse by Category</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Academic Stress</CardTitle>
                  <CardDescription>
                    Resources for exam anxiety, study pressure, and performance concerns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Exam preparation strategies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Time management techniques</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Study-life balance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Performance anxiety relief</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Social & Relationships</CardTitle>
                  <CardDescription>
                    Support for friendship, family, and romantic relationship challenges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Building healthy relationships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Dealing with loneliness</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Family pressure management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Social anxiety support</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Self-Care & Wellness</CardTitle>
                  <CardDescription>Daily practices for maintaining mental and physical health</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Mindfulness and meditation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Healthy lifestyle habits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Mood tracking tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Gratitude practices</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Resources */}
          <Card className="bg-red-500/10 border-red-500/20">
            <CardHeader>
              <CardTitle className="text-red-500">Crisis Resources</CardTitle>
              <CardDescription>Immediate help when you need it most</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">National Helplines</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>KIRAN Mental Health Helpline</span>
                      <span className="text-primary font-mono">1800-599-0019</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vandrevala Foundation</span>
                      <span className="text-primary font-mono">9999-666-555</span>
                    </div>
                    <div className="flex justify-between">
                      <span>iCall Helpline</span>
                      <span className="text-primary font-mono">9152-987-821</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Immediate Actions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Call emergency services: 112</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Reach out to a trusted friend or family member</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Visit your nearest hospital emergency room</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Need More Personalized Support?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              While self-help resources are valuable, sometimes you need professional guidance. Our counsellors are here
              to provide personalized support tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/counselling">
                <Button size="lg" className="animate-pulse-glow">
                  Talk to a Counsellor
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline" size="lg">
                  Take Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
