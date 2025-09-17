"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, Shield } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "10,000+",
      label: "Students Supported",
      description: "Across 500+ colleges in India",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "Crisis Support",
      description: "Real-time intervention available",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "85%",
      label: "Improvement Rate",
      description: "Students report better mental health",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "100%",
      label: "Privacy Protected",
      description: "End-to-end encrypted conversations",
    },
  ]

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group"
          >
            <CardContent className="space-y-4 p-0">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
