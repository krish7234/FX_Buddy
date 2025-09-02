"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Settings } from "lucide-react"

export function PriceCharts() {
  const [selectedPair, setSelectedPair] = useState("EUR/USD")
  const [timeframe, setTimeframe] = useState("1H")
  const [indicator, setIndicator] = useState("RSI")

  const timeframes = ["1M", "5M", "15M", "30M", "1H", "4H", "1D", "1W"]
  const indicators = ["RSI", "MACD", "Bollinger Bands", "Moving Average", "Stochastic"]
  const currencyPairs = ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD", "EUR/GBP"]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Price Charts
          </CardTitle>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Chart Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Chart Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-card-foreground">Pair:</label>
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencyPairs.map((pair) => (
                  <SelectItem key={pair} value={pair}>
                    {pair}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-card-foreground">Timeframe:</label>
            <div className="flex space-x-1">
              {timeframes.map((tf) => (
                <Button
                  key={tf}
                  variant={timeframe === tf ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeframe(tf)}
                  className={timeframe === tf ? "bg-accent" : ""}
                >
                  {tf}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-muted/30 rounded-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {selectedPair} Chart ({timeframe})
            </h3>
            <p className="text-muted-foreground">Interactive trading chart would be displayed here</p>
            <p className="text-sm text-muted-foreground mt-2">
              Integration with TradingView or similar charting library
            </p>
          </div>
        </div>

        {/* Technical Indicators */}
        <Tabs defaultValue="indicators" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="indicators">Indicators</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="indicators" className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-card-foreground">Technical Indicator:</label>
              <Select value={indicator} onValueChange={setIndicator}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {indicators.map((ind) => (
                    <SelectItem key={ind} value={ind}>
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                Add to Chart
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">RSI (14)</div>
                <div className="text-lg font-bold text-card-foreground">67.3</div>
                <div className="text-xs text-yellow-600">Neutral</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">MACD</div>
                <div className="text-lg font-bold text-green-600">+0.0012</div>
                <div className="text-xs text-green-600">Bullish</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">MA (20)</div>
                <div className="text-lg font-bold text-card-foreground">1.0834</div>
                <div className="text-xs text-green-600">Above</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">Stoch</div>
                <div className="text-lg font-bold text-card-foreground">45.2</div>
                <div className="text-xs text-yellow-600">Neutral</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold text-card-foreground mb-2">Market Analysis</h4>
              <p className="text-sm text-muted-foreground">
                EUR/USD is showing bullish momentum with price breaking above the 20-period moving average. RSI
                indicates neutral conditions with room for further upside movement.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-card-foreground">Price Alerts</h4>
              <Button size="sm" className="bg-accent">
                Create Alert
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium text-card-foreground">EUR/USD &gt; 1.0900</div>
                  <div className="text-sm text-muted-foreground">Price alert</div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
