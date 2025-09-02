export const mockPrices = {
  EURUSD: { price: 1.0856, change: 0.0023, changePercent: 0.21 },
  GBPUSD: { price: 1.2734, change: -0.0045, changePercent: -0.35 },
  USDJPY: { price: 149.82, change: 0.67, changePercent: 0.45 },
  USDCHF: { price: 0.8923, change: -0.0012, changePercent: -0.13 },
  AUDUSD: { price: 0.6598, change: 0.0034, changePercent: 0.52 },
  USDCAD: { price: 1.3567, change: 0.0089, changePercent: 0.66 },
  NZDUSD: { price: 0.6123, change: -0.0023, changePercent: -0.37 },
}

export const mockNews = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cut in Q2 2024",
    summary: "Federal Reserve officials hint at possible interest rate adjustments following inflation data.",
    time: "2 hours ago",
    impact: "high",
    currency: "USD",
  },
  {
    id: 2,
    title: "ECB Maintains Hawkish Stance on Inflation",
    summary: "European Central Bank reiterates commitment to fighting inflation despite economic slowdown.",
    time: "4 hours ago",
    impact: "medium",
    currency: "EUR",
  },
  {
    id: 3,
    title: "UK GDP Growth Exceeds Expectations",
    summary: "British economy shows resilience with stronger than expected quarterly growth figures.",
    time: "6 hours ago",
    impact: "medium",
    currency: "GBP",
  },
]

export const mockTransactions = [
  {
    id: "TXN001",
    type: "deposit",
    amount: 5000,
    currency: "USD",
    date: new Date("2024-01-15"),
    status: "completed",
    method: "Bank Transfer",
  },
  {
    id: "TXN002",
    type: "trade",
    amount: -150.5,
    currency: "USD",
    date: new Date("2024-01-14"),
    status: "completed",
    method: "EURUSD Trade",
  },
  {
    id: "TXN003",
    type: "withdrawal",
    amount: -1000,
    currency: "USD",
    date: new Date("2024-01-12"),
    status: "pending",
    method: "PayPal",
  },
]

export const mockUserData = {
  name: "John Trader",
  email: "john@example.com",
  accountType: "Premium",
  balance: 12450.75,
  demoBalance: 50000,
  totalProfit: 2340.5,
  totalTrades: 156,
  winRate: 68.5,
  joinDate: new Date("2023-06-15"),
}
