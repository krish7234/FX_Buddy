"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, X, AlertTriangle, Info, CheckCircle, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Notification {
  id: string
  type: "alert" | "info" | "success" | "warning"
  title: string
  message: string
  time: string
  isRead: boolean
}

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "alert",
      title: "Price Alert Triggered",
      message: "EUR/USD has reached your target price of 1.0900",
      time: "2 min ago",
      isRead: false,
    },
    {
      id: "2",
      type: "success",
      title: "Trade Executed",
      message: "Your GBP/USD buy order has been successfully executed",
      time: "15 min ago",
      isRead: false,
    },
    {
      id: "3",
      type: "info",
      title: "Market Update",
      message: "ECB interest rate decision scheduled for tomorrow",
      time: "1 hour ago",
      isRead: true,
    },
    {
      id: "4",
      type: "warning",
      title: "Margin Warning",
      message: "Your account margin level is below 150%",
      time: "2 hours ago",
      isRead: true,
    },
  ])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <TrendingUp className="h-4 w-4 text-blue-600" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "info":
        return <Info className="h-4 w-4 text-gray-600" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const handleDismiss = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
            {unreadCount > 0 && <Badge className="ml-2 bg-accent text-accent-foreground">{unreadCount}</Badge>}
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Mark all read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                  notification.isRead ? "bg-muted/20 border-border/50" : "bg-muted/40 border-accent/20 shadow-sm"
                }`}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="mt-0.5">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-card-foreground text-sm">{notification.title}</h4>
                        {!notification.isRead && <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{notification.message}</p>
                      <div className="text-xs text-muted-foreground mt-2">{notification.time}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDismiss(notification.id)
                    }}
                    className="p-1 h-auto text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No notifications</p>
            <p className="text-sm text-muted-foreground">You're all caught up!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
