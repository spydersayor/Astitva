"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  priority: string
  delay: string
}

export function FeatureCard({ icon, title, description, priority, delay }: FeatureCardProps) {
  return (
    <Card
      className="group hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border-border/50 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <Badge variant="outline" className="text-xs">
            {priority}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
