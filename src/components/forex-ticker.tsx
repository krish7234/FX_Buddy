"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface CurrencyPair {
  pair: string
  price: string
  change: string
  isPositive: boolean
}

export function ForexTicker() {
  const [pairs, setPairs] = useState<CurrencyPair[]>([
    { pair: "EUR/USD", price: "1.0856", change: "+0.0023", isPositive: true },
    { pair: "GBP/USD", price: "1.2634", change: "-0.0012", isPositive: false },
    { pair: "USD/JPY", price: "149.82", change: "+0.45", isPositive: true },
    { pair: "AUD/USD", price: "0.6523", change: "+0.0034", isPositive: true },
    { pair: "USD/CAD", price: "1.3567", change: "-0.0021", isPositive: false },
    { pair: "EUR/GBP", price: "0.8592", change: "+0.0015", isPositive: true },
  ])

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPairs((prevPairs) =>
        prevPairs.map((pair) => ({
          ...pair,
          price: (Number.parseFloat(pair.price) + (Math.random() - 0.5) * 0.01).toFixed(4),
          change: ((Math.random() - 0.5) * 0.01).toFixed(4),
          isPositive: Math.random() > 0.5,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-card border-y border-border py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll space-x-8">
          {[...pairs, ...pairs].map((pair, index) => (
            <div key={`${pair.pair}-${index}`} className="flex items-center space-x-3 whitespace-nowrap px-4">
              <span className="font-semibold text-card-foreground">{pair.pair}</span>
              <span className="text-lg font-mono">{pair.price}</span>
              <div className={`flex items-center space-x-1 ${pair.isPositive ? "text-green-600" : "text-red-600"}`}>
                {pair.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span className="text-sm font-medium">{pair.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
