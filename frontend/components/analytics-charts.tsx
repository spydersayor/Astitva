"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, Heart, Brain, Calendar } from "lucide-react"

// Mock data for analytics - in a real app, this would come from your database
const weeklyEngagementData = [
  { day: "Mon", users: 45, assessments: 12, chatSessions: 28 },
  { day: "Tue", users: 52, assessments: 18, chatSessions: 34 },
  { day: "Wed", users: 48, assessments: 15, chatSessions: 31 },
  { day: "Thu", users: 61, assessments: 22, chatSessions: 42 },
  { day: "Fri", users: 55, assessments: 19, chatSessions: 38 },
  { day: "Sat", users: 38, assessments: 8, chatSessions: 25 },
  { day: "Sun", users: 42, assessments: 11, chatSessions: 29 },
]

const monthlyProgressData = [
  { month: "Jan", improved: 78, stable: 15, needsSupport: 7 },
  { month: "Feb", improved: 82, stable: 12, needsSupport: 6 },
  { month: "Mar", improved: 85, stable: 10, needsSupport: 5 },
  { month: "Apr", improved: 88, stable: 8, needsSupport: 4 },
  { month: "May", improved: 91, stable: 6, needsSupport: 3 },
  { month: "Jun", improved: 94, stable: 4, needsSupport: 2 },
]

const assessmentDistribution = [
  { name: "Minimal/None", value: 45, color: "#10b981" },
  { name: "Mild", value: 30, color: "#f59e0b" },
  { name: "Moderate", value: 20, color: "#f97316" },
  { name: "Severe", value: 5, color: "#ef4444" },
]

const impactMetrics = [
  { metric: "Students Helped", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
  { metric: "Wellness Improvement", value: "94%", change: "+8%", icon: TrendingUp, color: "text-green-600" },
  { metric: "Crisis Interventions", value: "23", change: "-15%", icon: Heart, color: "text-red-600" },
  { metric: "Active Sessions", value: "156", change: "+25%", icon: Brain, color: "text-purple-600" },
]

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.metric}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {metric.change} this month
                    </Badge>
                  </div>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Weekly Engagement */}
      <Card className="bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Weekly Engagement</span>
          </CardTitle>
          <CardDescription>Daily active users and platform interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyEngagementData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
                name="Active Users"
              />
              <Area
                type="monotone"
                dataKey="chatSessions"
                stackId="1"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
                name="Chat Sessions"
              />
              <Area
                type="monotone"
                dataKey="assessments"
                stackId="1"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.6}
                name="Assessments"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Progress */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Student Progress</span>
            </CardTitle>
            <CardDescription>Monthly wellness improvement trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyProgressData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="improved" stroke="#10b981" strokeWidth={3} name="Improved (%)" />
                <Line type="monotone" dataKey="stable" stroke="#f59e0b" strokeWidth={2} name="Stable (%)" />
                <Line
                  type="monotone"
                  dataKey="needsSupport"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Needs Support (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Assessment Distribution */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span>Assessment Results</span>
            </CardTitle>
            <CardDescription>Current distribution of mental health scores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={assessmentDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {assessmentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {assessmentDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Positive Impact Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800 dark:text-green-200">
            <Heart className="w-5 h-5" />
            <span>Positive Impact Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-green-600">94%</p>
              <p className="text-sm text-green-700 dark:text-green-300">Students report improved wellbeing</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">2,847</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">Lives positively impacted</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">15,000+</p>
              <p className="text-sm text-purple-700 dark:text-purple-300">Support sessions completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
