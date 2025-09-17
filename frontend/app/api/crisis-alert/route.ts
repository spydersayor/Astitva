import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const alert = await req.json()

    // Log the crisis alert
    console.log("[CRISIS INTERVENTION SYSTEM]", {
      severity: alert.severity,
      timestamp: alert.timestamp,
      requiresImmediate: alert.requiresImmediate,
      userId: alert.userId,
    })

    // In a real application, this would:
    // 1. Store in database with high priority
    // 2. Send immediate notifications to counsellors
    // 3. Trigger emergency protocols for HIGH severity
    // 4. Send SMS/email to crisis response team
    // 5. Create incident report

    // Simulate counsellor notification
    const counsellorNotification = {
      id: `crisis-${Date.now()}`,
      severity: alert.severity,
      message:
        alert.severity === "HIGH"
          ? "URGENT: High-risk student requires immediate intervention"
          : `Crisis alert: Student showing ${alert.severity.toLowerCase()} risk indicators`,
      timestamp: new Date().toISOString(),
      status: "pending",
      assignedCounsellor: alert.severity === "HIGH" ? "emergency-team" : "on-call",
      estimatedResponse: alert.severity === "HIGH" ? "5 minutes" : "30 minutes",
    }

    // Return success response with intervention details
    return NextResponse.json({
      success: true,
      alertId: counsellorNotification.id,
      message: "Crisis alert processed successfully",
      interventionTriggered: true,
      counsellorNotified: true,
      estimatedResponse: counsellorNotification.estimatedResponse,
    })
  } catch (error) {
    console.error("Crisis alert processing failed:", error)
    return NextResponse.json({ success: false, error: "Failed to process crisis alert" }, { status: 500 })
  }
}
