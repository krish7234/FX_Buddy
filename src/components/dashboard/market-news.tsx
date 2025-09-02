"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Clock, TrendingUp } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  summary: string
  time: string
  impact: "high" | "medium" | "low"
  currency: string
  category: "economic" | "political" | "market"
}

export function MarketNews() {
  const [newsItems] = useState<NewsItem[]>([
    {
      id: "1",
      title: "ECB Holds Interest Rates Steady",
      summary: "European Central Bank maintains current monetary policy stance amid inflation concerns.",
      time: "2 hours ago",
      impact: "high",
      currency: "EUR",
      category: "economic",
    },
    {
      id: "2",
      title: "US Employment Data Exceeds Expectations",
      summary: "Non-farm payrolls show stronger than expected job growth in latest report.",
      time: "4 hours ago",
      impact: "high",
      currency: "USD",
      category: "economic",
    },
    {
      id: "3",
      title: "GBP Volatility Expected Ahead of BoE Meeting",
      summary: "Bank of England policy decision could impact sterling significantly.",
      time: "6 hours ago",
      impact: "medium",
      currency: "GBP",
      category: "economic",
    },
    {
      id: "4",
      title: "Asian Markets Show Mixed Performance",
      summary: "Regional currencies display varied performance amid global uncertainty.",
      time: "8 hours ago",
      impact: "low",
      currency: "JPY",
      category: "market",
    },
    {
      id: "5",
      title: "Oil Prices Impact CAD Trading",
      summary: "Crude oil fluctuations continue to influence Canadian dollar movements.",
      time: "10 hours ago",
      impact: "medium",
      currency: "CAD",
      category: "market",
    },
  ])

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filterNewsByCategory = (category: string) => {
    if (category === "all") return newsItems
    return newsItems.filter((item) => item.category === category)
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center">
          <Newspaper className="h-5 w-5 mr-2" />
          Market News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="economic">Economic</TabsTrigger>
            <TabsTrigger value="political">Political</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-4">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-card-foreground text-sm leading-tight pr-2">{item.title}</h4>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {item.currency}
                      </Badge>
                      <Badge className={`text-xs ${getImpactColor(item.impact)}`}>{item.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{item.summary}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="economic" className="space-y-4 mt-4">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filterNewsByCategory("economic").map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-card-foreground text-sm leading-tight pr-2">{item.title}</h4>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {item.currency}
                      </Badge>
                      <Badge className={`text-xs ${getImpactColor(item.impact)}`}>{item.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{item.summary}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="political" className="space-y-4 mt-4">
            <div className="text-center py-8">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No political news at the moment</p>
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-4 mt-4">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filterNewsByCategory("market").map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-card-foreground text-sm leading-tight pr-2">{item.title}</h4>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {item.currency}
                      </Badge>
                      <Badge className={`text-xs ${getImpactColor(item.impact)}`}>{item.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{item.summary}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
