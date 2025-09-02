"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"
import { motion } from "framer-motion"

interface MarketData {
  pair: string
  price: string
  change: string
  changePercent: string
  isPositive: boolean
  volume: string
}

export function MarketOverview() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    {
      pair: "EUR/USD",
      price: "1.0856",
      change: "+0.0023",
      changePercent: "+0.21%",
      isPositive: true,
      volume: "2.4B",
    },
    {
      pair: "GBP/USD",
      price: "1.2634",
      change: "-0.0012",
      changePercent: "-0.09%",
      isPositive: false,
      volume: "1.8B",
    },
    {
      pair: "USD/JPY",
      price: "149.82",
      change: "+0.45",
      changePercent: "+0.30%",
      isPositive: true,
      volume: "3.1B",
    },
    {
      pair: "AUD/USD",
      price: "0.6523",
      change: "+0.0034",
      changePercent: "+0.52%",
      isPositive: true,
      volume: "1.2B",
    },
    {
      pair: "USD/CAD",
      price: "1.3567",
      change: "-0.0021",
      changePercent: "-0.15%",
      isPositive: false,
      volume: "1.5B",
    },
    {
      pair: "EUR/GBP",
      price: "0.8592",
      change: "+0.0015",
      changePercent: "+0.17%",
      isPositive: true,
      volume: "0.9B",
    },
  ])

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) =>
        prevData.map((item) => {
          const randomChange = (Math.random() - 0.5) * 0.01
          const newPrice = (Number.parseFloat(item.price) + randomChange).toFixed(4)
          const changeValue = randomChange.toFixed(4)
          const changePercent = ((randomChange / Number.parseFloat(item.price)) * 100).toFixed(2)

          return {
            ...item,
            price: newPrice,
            change: randomChange >= 0 ? `+${changeValue}` : changeValue,
            changePercent: randomChange >= 0 ? `+${changePercent}%` : `${changePercent}%`,
            isPositive: randomChange >= 0,
          }
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {marketData.map((data, index) => (
        <motion.div
          key={data.pair}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 border-white/20 bg-white/10 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-white flex items-center justify-between">
                {data.pair}
                <div className={`p-1 rounded-full ${data.isPositive ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  {data.isPositive ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-white">{data.price}</span>
                  <div className={`text-right ${data.isPositive ? "text-green-400" : "text-red-400"}`}>
                    <div className="text-sm font-medium">{data.change}</div>
                    <div className="text-xs">{data.changePercent}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span className="flex items-center">
                    <Activity className="h-3 w-3 mr-1" />
                    Volume
                  </span>
                  <span className="font-medium">{data.volume}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
