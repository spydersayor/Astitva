"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Send, Bot, User, AlertTriangle, ArrowLeft, Sparkles } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import { useAuth } from "@/lib/auth"
import Link from "next/link"

export default function ChatPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [inputValue, setInputValue] = useState("")
  const [showCrisisAlert, setShowCrisisAlert] = useState(false)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onFinish: (message) => {
      // Check for crisis alerts
      if (message.content.includes("CRISIS_ALERT")) {
        setShowCrisisAlert(true)
      }
    },
  })

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

  if (!user) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && status !== "in_progress") {
      sendMessage({ content: inputValue })
      setInputValue("")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Astitva AI</h1>
                <p className="text-sm text-muted-foreground">Your mental wellness companion</p>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" />
            Online
          </Badge>
        </div>

        {/* Crisis Alert */}
        {showCrisisAlert && (
          <Alert className="mb-6 border-red-500 bg-red-50 dark:bg-red-950">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              <strong>Crisis Support Available:</strong> If you're having thoughts of self-harm, please reach out
              immediately:
              <div className="mt-2 space-y-1">
                <p>• National Suicide Prevention: 9152987821</p>
                <p>• AASRA: 91-22-27546669</p>
                <p>
                  •{" "}
                  <Link href="/booking" className="underline font-medium">
                    Book Emergency Counselling
                  </Link>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Chat Messages */}
        <Card className="flex-1 bg-card/80 backdrop-blur-sm border-border/50 mb-6 flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Chat with Astitva AI</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-96">
              {messages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Welcome to Astitva AI!</p>
                  <p>I'm here to support your mental wellness journey. Feel free to share what's on your mind.</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue("I'm feeling stressed about my studies")
                      }}
                      className="text-xs"
                    >
                      "I'm feeling stressed about studies"
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue("I'm having trouble sleeping")
                      }}
                      className="text-xs"
                    >
                      "I'm having trouble sleeping"
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue("I feel anxious about my future")
                      }}
                      className="text-xs"
                    >
                      "I feel anxious about my future"
                    </Button>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`flex-1 max-w-xs sm:max-w-md ${message.role === "user" ? "text-right" : ""}`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content.replace("CRISIS_ALERT", "")}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.role === "user" ? "You" : "Astitva AI"}
                    </p>
                  </div>
                </div>
              ))}

              {status === "in_progress" && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Astitva AI is typing...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                disabled={status === "in_progress"}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={!inputValue.trim() || status === "in_progress"}
                className="hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Link href="/assessment/phq9">
            <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary/10">
              Take PHQ-9 Assessment
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary/10">
              Book Counselling
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary/10">
              View Resources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
