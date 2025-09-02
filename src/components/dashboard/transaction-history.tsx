"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Search, Filter, Download } from "lucide-react"

interface Transaction {
  id: string
  type: "deposit" | "withdrawal" | "trade" | "fee"
  description: string
  amount: string
  status: "completed" | "pending" | "failed"
  date: string
  time: string
}

export function TransactionHistory() {
  const [sortBy, setSortBy] = useState("date")
  const [filterBy, setFilterBy] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "deposit",
      description: "Bank Transfer Deposit",
      amount: "+$5,000.00",
      status: "completed",
      date: "2024-01-15",
      time: "14:32",
    },
    {
      id: "2",
      type: "trade",
      description: "EUR/USD Buy 0.5 lots",
      amount: "+$156.78",
      status: "completed",
      date: "2024-01-15",
      time: "13:45",
    },
    {
      id: "3",
      type: "trade",
      description: "GBP/USD Sell 0.3 lots",
      amount: "-$89.23",
      status: "completed",
      date: "2024-01-15",
      time: "12:18",
    },
    {
      id: "4",
      type: "fee",
      description: "Overnight Swap Fee",
      amount: "-$12.50",
      status: "completed",
      date: "2024-01-14",
      time: "23:59",
    },
    {
      id: "5",
      type: "withdrawal",
      description: "Bank Transfer Withdrawal",
      amount: "-$2,000.00",
      status: "pending",
      date: "2024-01-14",
      time: "16:22",
    },
    {
      id: "6",
      type: "trade",
      description: "USD/JPY Buy 0.8 lots",
      amount: "+$234.56",
      status: "completed",
      date: "2024-01-14",
      time: "11:30",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return "↗"
      case "withdrawal":
        return "↙"
      case "trade":
        return "⚡"
      case "fee":
        return "💳"
      default:
        return "•"
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Transaction History</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters and Search */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>

          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="deposit">Deposits</SelectItem>
              <SelectItem value="withdrawal">Withdrawals</SelectItem>
              <SelectItem value="trade">Trades</SelectItem>
              <SelectItem value="fee">Fees</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" onClick={() => setSortBy(sortBy === "date" ? "amount" : "date")}>
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Sort by {sortBy === "date" ? "Amount" : "Date"}
          </Button>
        </div>

        {/* Transaction Table */}
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{getTypeIcon(transaction.type)}</div>
                <div>
                  <div className="font-medium text-card-foreground">{transaction.description}</div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.date} at {transaction.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge className={`${getStatusColor(transaction.status)}`}>{transaction.status}</Badge>
                <div
                  className={`text-lg font-semibold ${
                    transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">Showing 6 of 24 transactions</div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
