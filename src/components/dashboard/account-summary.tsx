"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { TrendingUp, TrendingDown, DollarSign, Activity, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"

export function AccountSummary() {
  const [isDemoAccount, setIsDemoAccount] = useState(false)
  const [showBalance, setShowBalance] = useState(true)

  const accountData = {
    balance: isDemoAccount ? "50,000.00" : "12,847.32",
    equity: isDemoAccount ? "50,000.00" : "13,156.78",
    margin: isDemoAccount ? "0.00" : "2,340.50",
    freeMargin: isDemoAccount ? "50,000.00" : "10,816.28",
    openTrades: isDemoAccount ? 0 : 3,
    todayPnL: isDemoAccount ? "0.00" : "+309.46",
    todayPnLPercent: isDemoAccount ? "0.00%" : "+2.41%",
    isPositive: true,
  }

  return (
    <div className="space-y-6">
      {/* Account Type Toggle */}
      <Card className="border-border bg-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isDemoAccount ? "bg-blue-100" : "bg-green-100"}`}>
                <DollarSign className={`h-5 w-5 ${isDemoAccount ? "text-blue-600" : "text-green-600"}`} />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {isDemoAccount ? "Demo Account" : "Live Account"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isDemoAccount ? "Practice trading with virtual funds" : "Real money trading account"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Demo</span>
              <Switch checked={!isDemoAccount} onCheckedChange={(checked) => setIsDemoAccount(!checked)} />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Account Balance</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowBalance(!showBalance)} className="p-1 h-auto">
                  {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {showBalance ? `$${accountData.balance}` : "••••••"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {isDemoAccount ? "Virtual Balance" : "Available Balance"}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Equity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {showBalance ? `$${accountData.equity}` : "••••••"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Current Value</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{accountData.openTrades}</div>
              <div className="text-xs text-muted-foreground mt-1">Active Positions</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's P&L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${accountData.isPositive ? "text-green-600" : "text-red-600"}`}>
                {showBalance ? `$${accountData.todayPnL}` : "••••••"}
              </div>
              <div
                className={`text-xs mt-1 flex items-center ${accountData.isPositive ? "text-green-600" : "text-red-600"}`}
              >
                {accountData.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {accountData.todayPnLPercent}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Additional Account Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Used Margin</div>
                <div className="text-lg font-semibold text-card-foreground">
                  {showBalance ? `$${accountData.margin}` : "••••••"}
                </div>
              </div>
              <Activity className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Free Margin</div>
                <div className="text-lg font-semibold text-card-foreground">
                  {showBalance ? `$${accountData.freeMargin}` : "••••••"}
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
