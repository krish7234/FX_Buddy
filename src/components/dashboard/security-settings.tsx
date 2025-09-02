"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Shield, Key, Smartphone } from "lucide-react"
import { ChangePasswordModal } from "./change-password-modal"

export function SecuritySettings() {
  const [show2FA, setShow2FA] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  return (
    <>
      <div className="space-y-6">
        {/* Two-Factor Authentication */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Two-Factor Authentication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-card-foreground">Authenticator App</h4>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app to generate secure codes for login
                </p>
              </div>
              <Switch checked={show2FA} onCheckedChange={setShow2FA} />
            </div>
            {show2FA && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-800">Two-factor authentication is enabled</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Password Settings */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center">
              <Key className="h-5 w-5 mr-2" />
              Password & Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-card-foreground">Password</h4>
                  <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                </div>
                <Button variant="outline" onClick={() => setShowChangePasswordModal(true)}>
                  Change Password
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-card-foreground">Login Alerts</h4>
                  <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                </div>
                <Switch checked={loginAlerts} onCheckedChange={setLoginAlerts} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Security Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-card-foreground">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive security alerts via email</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium text-card-foreground">Current Session</div>
                  <div className="text-sm text-muted-foreground">Chrome on Windows • New York, NY</div>
                </div>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium text-card-foreground">Mobile App</div>
                  <div className="text-sm text-muted-foreground">iOS App • Last active 2 hours ago</div>
                </div>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ChangePasswordModal isOpen={showChangePasswordModal} onClose={() => setShowChangePasswordModal(false)} />
    </>
  )
}
