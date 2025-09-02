"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, RotateCcw, TrendingUp, TrendingDown, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DemoTradingPage() {
  const [isTrading, setIsTrading] = useState(false)
  const [balance, setBalance] = useState(10000)
  const [profit, setProfit] = useState(0)
  const [trades, setTrades] = useState<Array<{
    id: number;
    pair: string;
    type: string;
    amount: number;
    openPrice: number;
    timestamp: string;
    profit: number;
    status: string;
  }>>([])

  const currencyPairs = [
    { pair: "EUR/USD", price: 1.0847, change: 0.0012, changePercent: 0.11 },
    { pair: "GBP/USD", price: 1.2634, change: -0.0023, changePercent: -0.18 },
    { pair: "USD/JPY", price: 149.82, change: 0.45, changePercent: 0.3 },
    { pair: "AUD/USD", price: 0.6721, change: 0.0008, changePercent: 0.12 },
  ]

  const [selectedPair, setSelectedPair] = useState(currencyPairs[0])
  const [tradeAmount, setTradeAmount] = useState(1000)
  const [tradeType, setTradeType] = useState("buy")

  const executeTrade = () => {
    const newTrade = {
      id: Date.now(),
      pair: selectedPair.pair,
      type: tradeType,
      amount: tradeAmount,
      openPrice: selectedPair.price,
      timestamp: new Date().toLocaleTimeString(),
      profit: 0,
      status: "open",
    }

    setTrades((prev) => [newTrade, ...prev.slice(0, 4)])
    setBalance((prev) => prev - tradeAmount)
  }

  const closeAllTrades = () => {
    const totalProfit = trades.reduce((sum, trade) => {
      const randomProfit = (Math.random() - 0.5) * 200
      return sum + randomProfit
    }, 0)

    setProfit((prev) => prev + totalProfit)
    setBalance((prev) => prev + trades.reduce((sum, trade) => sum + trade.amount, 0) + totalProfit)
    setTrades([])
  }

  const resetDemo = () => {
    setBalance(10000)
    setProfit(0)
    setTrades([])
    setIsTrading(false)
  }

  return (
    <div className="min-h-screen bg-aquatic-gradient relative overflow-hidden">
      <div className="wave-overlay"></div>
      <div className="relative z-10 p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Demo Trading Simulator</h1>
            <p className="text-blue-100">Practice forex trading with virtual funds - no risk involved!</p>
          </div>

          {/* Account Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Demo Balance</p>
                    <p className="text-2xl font-bold text-white">${balance.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Total P&L</p>
                    <p className={`text-2xl font-bold ${profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                      ${profit.toFixed(2)}
                    </p>
                  </div>
                  {profit >= 0 ? (
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  ) : (
                    <TrendingDown className="h-8 w-8 text-red-400" />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Open Trades</p>
                    <p className="text-2xl font-bold text-white">{trades.length}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => setIsTrading(!isTrading)}
                      className="bg-white/20 hover:bg-white/30"
                    >
                      {isTrading ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" onClick={resetDemo} className="bg-white/20 hover:bg-white/30">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trading Panel */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Place Demo Trade</CardTitle>
                <CardDescription className="text-blue-100">
                  Select a currency pair and execute virtual trades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency Pairs */}
                <div className="space-y-3">
                  <label className="text-white font-medium">Currency Pair</label>
                  <div className="grid grid-cols-2 gap-3">
                    {currencyPairs.map((pair) => (
                      <button
                        key={pair.pair}
                        onClick={() => setSelectedPair(pair)}
                        className={`p-3 rounded-lg border transition-all ${
                          selectedPair.pair === pair.pair
                            ? "bg-white/20 border-white/40"
                            : "bg-white/5 border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="text-white font-medium">{pair.pair}</div>
                        <div className="text-sm text-blue-200">{pair.price}</div>
                        <div className={`text-xs ${pair.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                          {pair.change >= 0 ? "+" : ""}
                          {pair.changePercent}%
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trade Amount */}
                <div className="space-y-2">
                  <label className="text-white font-medium">Trade Amount</label>
                  <div className="flex space-x-2">
                    {[500, 1000, 2500, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setTradeAmount(amount)}
                        className={`px-3 py-2 rounded text-sm transition-all ${
                          tradeAmount === amount
                            ? "bg-white/20 text-white"
                            : "bg-white/5 text-blue-200 hover:bg-white/10"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trade Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => {
                      setTradeType("buy")
                      executeTrade()
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={balance < tradeAmount}
                  >
                    BUY {selectedPair.pair}
                  </Button>
                  <Button
                    onClick={() => {
                      setTradeType("sell")
                      executeTrade()
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white"
                    disabled={balance < tradeAmount}
                  >
                    SELL {selectedPair.pair}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Open Trades */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Open Positions</CardTitle>
                <CardDescription className="text-blue-100">Monitor your active demo trades</CardDescription>
              </CardHeader>
              <CardContent>
                {trades.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-blue-200">No open trades</p>
                    <p className="text-blue-300 text-sm">Execute a trade to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {trades.map((trade) => (
                      <div key={trade.id} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <Badge
                              variant={trade.type === "buy" ? "default" : "destructive"}
                              className={trade.type === "buy" ? "bg-green-600" : "bg-red-600"}
                            >
                              {trade.type.toUpperCase()}
                            </Badge>
                            <span className="text-white font-medium">{trade.pair}</span>
                          </div>
                          <span className="text-blue-200 text-sm">{trade.timestamp}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-200">Amount: ${trade.amount}</span>
                          <span className="text-blue-200">Entry: {trade.openPrice}</span>
                        </div>
                      </div>
                    ))}
                    <Button onClick={closeAllTrades} className="w-full bg-white/20 hover:bg-white/30 text-white">
                      Close All Positions
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
