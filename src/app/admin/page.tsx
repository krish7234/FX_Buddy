"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Activity, TrendingUp, AlertTriangle, DollarSign, BarChart3, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h")

  const adminStats = [
    { title: "Total Users", value: "12,847", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Active Trades", value: "3,421", change: "+8%", icon: Activity, color: "text-green-600" },
    { title: "Platform Revenue", value: "$847,293", change: "+15%", icon: DollarSign, color: "text-purple-600" },
    { title: "System Health", value: "99.8%", change: "+0.2%", icon: Shield, color: "text-emerald-600" },
  ]

  const recentUsers = [
    { id: 1, name: "John Smith", email: "john@example.com", status: "Active", joinDate: "2024-01-15", trades: 47 },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", status: "Pending", joinDate: "2024-01-14", trades: 12 },
    { id: 3, name: "Mike Chen", email: "mike@example.com", status: "Active", joinDate: "2024-01-13", trades: 89 },
    { id: 4, name: "Emma Davis", email: "emma@example.com", status: "Suspended", joinDate: "2024-01-12", trades: 156 },
  ]

  const systemAlerts = [
    { id: 1, type: "warning", message: "High server load detected", time: "2 minutes ago" },
    { id: 2, type: "info", message: "Scheduled maintenance in 2 hours", time: "1 hour ago" },
    { id: 3, type: "error", message: "Payment gateway timeout", time: "3 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-aquatic-gradient relative overflow-hidden">
      <div className="wave-overlay"></div>
      <div className="relative z-10 p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-blue-100">Monitor and manage your FX Buddy platform</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm font-medium">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-green-300 text-sm">{stat.change} from last period</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="bg-white/10 backdrop-blur-md border-white/20">
              <TabsTrigger value="users" className="data-[state=active]:bg-white/20">
                User Management
              </TabsTrigger>
              <TabsTrigger value="trades" className="data-[state=active]:bg-white/20">
                Trading Activity
              </TabsTrigger>
              <TabsTrigger value="system" className="data-[state=active]:bg-white/20">
                System Health
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-white/20">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Recent Users</CardTitle>
                  <CardDescription className="text-blue-100">Manage user accounts and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-blue-200 text-sm">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge
                            variant={
                              user.status === "Active"
                                ? "default"
                                : user.status === "Pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {user.status}
                          </Badge>
                          <span className="text-blue-200 text-sm">{user.trades} trades</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            Manage
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trades">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Trading Activity Monitor</CardTitle>
                  <CardDescription className="text-blue-100">
                    Real-time trading statistics and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Active Positions</h3>
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">3,421</p>
                      <p className="text-green-300 text-sm">+8% from yesterday</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Volume (24h)</h3>
                        <BarChart3 className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">$2.4M</p>
                      <p className="text-blue-300 text-sm">+12% from yesterday</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Avg. Trade Size</h3>
                        <DollarSign className="h-5 w-5 text-purple-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">$1,247</p>
                      <p className="text-purple-300 text-sm">-3% from yesterday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">System Alerts</CardTitle>
                  <CardDescription className="text-blue-100">Monitor system health and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                        <AlertTriangle
                          className={`h-5 w-5 ${
                            alert.type === "error"
                              ? "text-red-400"
                              : alert.type === "warning"
                                ? "text-yellow-400"
                                : "text-blue-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-white">{alert.message}</p>
                          <p className="text-blue-200 text-sm">{alert.time}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          Resolve
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Platform Settings</CardTitle>
                  <CardDescription className="text-blue-100">
                    Configure platform-wide settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold">Trading Settings</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">Max Leverage</span>
                          <span className="text-white">1:500</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">Min Trade Size</span>
                          <span className="text-white">$10</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">Spread Markup</span>
                          <span className="text-white">0.5 pips</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold">System Settings</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">Maintenance Mode</span>
                          <Badge variant="secondary">Disabled</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">API Rate Limit</span>
                          <span className="text-white">1000/hour</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                          <span className="text-blue-100">Backup Status</span>
                          <Badge variant="default">Active</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
