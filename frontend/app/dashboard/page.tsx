"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, LogOut, Brain, Calendar, BookOpen, Users, Bot, BarChart3 } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { useAuth } from "@/lib/auth"
import Link from "next/link"

export default function DashboardPage() {
  const { user, signout, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleSignOut = () => {
    signout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Astitva</span>
          </Link>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/about">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
                  About
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
                  Features
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
                  Support
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
                  Contact
                </Button>
              </Link>
            </nav>

            <Button
              variant="outline"
              onClick={handleSignOut}
              className="bg-transparent hover:bg-primary/10 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="animate-float">
              Welcome Back!
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Hello, <span className="text-primary">{user.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to continue your mental wellness journey? Let's check in on how you're feeling today.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Link href="/chat">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-8 h-8 text-primary mx-auto mb-2 relative">
                  <Bot className="w-8 h-8" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-lg">AI Chat</CardTitle>
                <CardDescription>Talk to Astitva AI for instant support</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/assessment/phq9">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">PHQ-9 Assessment</CardTitle>
                <CardDescription>Check your depression levels</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/assessment/gad7">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">GAD-7 Assessment</CardTitle>
                <CardDescription>Assess your anxiety levels</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/counselling">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Counselling</CardTitle>
                <CardDescription>Talk to a professional</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/resources">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Resources</CardTitle>
                <CardDescription>Self-help materials</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Platform Impact Analytics</h2>
          </div>
          <AnalyticsCharts />
        </div>

        {/* Recent Activity */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Your Wellness Journey</CardTitle>
            <CardDescription>Track your progress and stay motivated</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div>
                  <h4 className="font-medium">Welcome to Astitva!</h4>
                  <p className="text-sm text-muted-foreground">Complete your first assessment to get started</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>

              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Your wellness activities will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
