"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Video, MessageCircle, Phone, CheckCircle } from "lucide-react"
import { FlowingBackground } from "@/components/flowing-background"
import Link from "next/link"

const sessionTypes = {
  video: { icon: Video, name: "Video Session", duration: "45-60 min", price: "Free" },
  chat: { icon: MessageCircle, name: "Chat Session", duration: "30-45 min", price: "Free" },
  phone: { icon: Phone, name: "Phone Session", duration: "30-45 min", price: "Free" },
  emergency: { icon: Phone, name: "Emergency Session", duration: "60 min", price: "Free" },
}

const counsellors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Student Counselling & Anxiety",
    languages: ["Hindi", "English"],
    experience: "8 years",
    rating: 4.9,
    image: "/professional-indian-female-counsellor.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Depression & Academic Stress",
    languages: ["Hindi", "English", "Tamil"],
    experience: "12 years",
    rating: 4.8,
    image: "/professional-indian-male-counsellor.jpg",
  },
  {
    id: 3,
    name: "Dr. Anita Patel",
    specialization: "Family Issues & Relationships",
    languages: ["Hindi", "English", "Gujarati"],
    experience: "10 years",
    rating: 4.9,
    image: "/professional-indian-female-counsellor.jpg",
  },
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState(searchParams?.get("type") || "video")
  const [selectedCounsellor, setSelectedCounsellor] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [isBooked, setIsBooked] = useState(false)

  // Generate next 14 days for booking
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date.toISOString().split("T")[0],
        display: date.toLocaleDateString("en-IN", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      })
    }
    return dates
  }

  const availableDates = getAvailableDates()

  const handleBooking = () => {
    // Simulate booking process
    setIsBooked(true)
  }

  const canProceedToStep = (stepNumber: number) => {
    switch (stepNumber) {
      case 2:
        return selectedType
      case 3:
        return selectedCounsellor
      case 4:
        return selectedDate
      case 5:
        return selectedTime
      default:
        return true
    }
  }

  if (isBooked) {
    const selectedCounsellorData = counsellors.find((c) => c.id === selectedCounsellor)
    const sessionTypeData = sessionTypes[selectedType as keyof typeof sessionTypes]

    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <FlowingBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                Booking Confirmed
              </Badge>
              <h1 className="text-4xl font-bold">Session Booked Successfully!</h1>
              <p className="text-muted-foreground">
                Your counselling session has been scheduled. You'll receive a confirmation email shortly.
              </p>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Session Type:</span>
                      <span className="font-medium">{sessionTypeData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{sessionTypeData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {availableDates.find((d) => d.date === selectedDate)?.display}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Counsellor:</span>
                      <span className="font-medium">{selectedCounsellorData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialization:</span>
                      <span className="font-medium text-xs">{selectedCounsellorData?.specialization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Languages:</span>
                      <span className="font-medium text-xs">{selectedCounsellorData?.languages.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cost:</span>
                      <span className="font-medium text-green-500">Free</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2">What's Next?</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• You'll receive a confirmation email with session details</li>
                    <li>• A reminder will be sent 24 hours before your session</li>
                    <li>• Join link/call details will be provided 15 minutes before</li>
                    <li>• You can reschedule or cancel up to 2 hours before</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg">Go to Dashboard</Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsBooked(false)
                  setStep(1)
                  setSelectedCounsellor(null)
                  setSelectedDate("")
                  setSelectedTime("")
                }}
              >
                Book Another Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FlowingBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/counselling"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Counselling
        </Link>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Book a Session</Badge>
            <h1 className="text-4xl font-bold">Schedule Your Counselling Session</h1>
            <p className="text-muted-foreground">
              Follow these simple steps to book your session with one of our qualified counsellors
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 5 && <div className={`w-8 h-0.5 ${step > stepNumber ? "bg-primary" : "bg-secondary"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Session Type */}
          {step === 1 && (
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Step 1: Choose Session Type</CardTitle>
                <CardDescription>Select your preferred method of counselling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(sessionTypes).map(([key, type]) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedType(key)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          selectedType === key
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{type.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Duration: {type.duration}</div>
                          <div>Cost: {type.price}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>
                <div className="flex justify-end mt-6">
                  <Button onClick={() => setStep(2)} disabled={!canProceedToStep(2)}>
                    Next: Choose Counsellor
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Choose Counsellor */}
          {step === 2 && (
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Step 2: Choose Your Counsellor</CardTitle>
                <CardDescription>Select a counsellor that matches your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {counsellors.map((counsellor) => (
                    <button
                      key={counsellor.id}
                      onClick={() => setSelectedCounsellor(counsellor.id)}
                      className={`w-full p-4 rounded-lg border text-left transition-all ${
                        selectedCounsellor === counsellor.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={counsellor.image || "/placeholder.svg"}
                          alt={counsellor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold">{counsellor.name}</h3>
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm">{counsellor.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{counsellor.specialization}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Experience: {counsellor.experience}</span>
                            <span>Languages: {counsellor.languages.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(3)} disabled={!canProceedToStep(3)}>
                    Next: Choose Date
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Choose Date */}
          {step === 3 && (
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Step 3: Choose Date</CardTitle>
                <CardDescription>Select your preferred date for the session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date.date}
                      onClick={() => setSelectedDate(date.date)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedDate === date.date
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-sm font-medium">{date.display}</div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(4)} disabled={!canProceedToStep(4)}>
                    Next: Choose Time
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Choose Time */}
          {step === 4 && (
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Step 4: Choose Time</CardTitle>
                <CardDescription>Select your preferred time slot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedTime === time
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium">{time}</div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(5)} disabled={!canProceedToStep(5)}>
                    Review Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Review and Confirm */}
          {step === 5 && (
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Step 5: Review Your Booking</CardTitle>
                <CardDescription>Please review your session details before confirming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Session Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span>{sessionTypes[selectedType as keyof typeof sessionTypes].name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span>{availableDates.find((d) => d.date === selectedDate)?.display}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time:</span>
                          <span>{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span>{sessionTypes[selectedType as keyof typeof sessionTypes].duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Counsellor</h4>
                      {selectedCounsellor && (
                        <div className="flex items-center space-x-3">
                          <img
                            src={counsellors.find((c) => c.id === selectedCounsellor)?.image || "/placeholder.svg"}
                            alt=""
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">
                              {counsellors.find((c) => c.id === selectedCounsellor)?.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {counsellors.find((c) => c.id === selectedCounsellor)?.specialization}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-green-500">This session is completely free</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      All counselling sessions are provided at no cost as part of our student mental health initiative.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(4)}>
                    Previous
                  </Button>
                  <Button onClick={handleBooking} className="animate-pulse-glow">
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
