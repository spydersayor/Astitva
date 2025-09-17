"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle, Phone, Heart, Clock } from "lucide-react"

interface CrisisSupportModalProps {
  isOpen: boolean
  onClose: () => void
  severity: "HIGH" | "MEDIUM" | "LOW"
}

export function CrisisSupportModal({ isOpen, onClose, severity }: CrisisSupportModalProps) {
  const [alertSent, setAlertSent] = useState(false)

  const emergencyContacts = [
    { name: "National Suicide Prevention", number: "9152987821", available: "24/7" },
    { name: "AASRA Helpline", number: "91-22-27546669", available: "24/7" },
    { name: "Sneha Foundation", number: "91-44-24640050", available: "24/7" },
    { name: "Vandrevala Foundation", number: "9999666555", available: "24/7" },
  ]

  const handleEmergencyBooking = () => {
    setAlertSent(true)
    // In real app, this would trigger immediate counsellor alert
    setTimeout(() => {
      setAlertSent(false)
      onClose()
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <span>Crisis Support Available</span>
          </DialogTitle>
          <DialogDescription>We're here to help. You don't have to face this alone.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Immediate Support Alert */}
          {severity === "HIGH" && (
            <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Immediate Support Needed:</strong> A counsellor has been automatically notified and will contact
                you within 5 minutes.
              </AlertDescription>
            </Alert>
          )}

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span>Emergency Helplines</span>
              </CardTitle>
              <CardDescription>Available 24/7 for immediate support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">Available {contact.available}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {contact.available}
                      </Badge>
                      <Button size="sm" asChild>
                        <a href={`tel:${contact.number}`}>
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-purple-600" />
                <span>Professional Support</span>
              </CardTitle>
              <CardDescription>Connect with trained counsellors</CardDescription>
            </CardHeader>
            <CardContent>{/* Placeholder for professional support content */}</CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
