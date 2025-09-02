"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Plus, Trash2, TrendingUp, TrendingDown } from "lucide-react"

interface WatchlistItem {
  id: string
  pair: string
  price: string
  change: string
  isPositive: boolean
}

export function Watchlist() {
  const [watchlistItems, setWatchlistItems] = useState<WatchlistItem[]>([
    { id: "1", pair: "EUR/USD", price: "1.0856", change: "+0.21%", isPositive: true },
    { id: "2", pair: "GBP/USD", price: "1.2634", change: "-0.09%", isPositive: false },
    { id: "3", pair: "USD/JPY", price: "149.82", change: "+0.30%", isPositive: true },
    { id: "4", pair: "AUD/USD", price: "0.6523", change: "+0.52%", isPositive: true },
  ])

  const [newPair, setNewPair] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddToWatchlist = () => {
    if (newPair.trim()) {
      const newItem: WatchlistItem = {
        id: Date.now().toString(),
        pair: newPair.toUpperCase(),
        price: "0.0000",
        change: "0.00%",
        isPositive: true,
      }
      setWatchlistItems([...watchlistItems, newItem])
      setNewPair("")
      setShowAddForm(false)
    }
  }

  const handleRemoveFromWatchlist = (id: string) => {
    setWatchlistItems(watchlistItems.filter((item) => item.id !== id))
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Watchlist
          </CardTitle>
          <Button variant="outline" size="sm" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Add New Pair Form */}
        {showAddForm && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex space-x-2">
              <Input
                placeholder="e.g., EUR/GBP"
                value={newPair}
                onChange={(e) => setNewPair(e.target.value)}
                className="flex-1"
              />
              <Button size="sm" onClick={handleAddToWatchlist} className="bg-accent">
                Add
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Watchlist Items */}
        <div className="space-y-2">
          {watchlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1 rounded-full ${item.isPositive ? "bg-green-100" : "bg-red-100"}`}>
                  {item.isPositive ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-card-foreground">{item.pair}</div>
                  <div className="text-sm font-mono text-muted-foreground">{item.price}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {item.change}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFromWatchlist(item.id)}
                  className="text-muted-foreground hover:text-destructive p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {watchlistItems.length === 0 && (
          <div className="text-center py-8">
            <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Your watchlist is empty</p>
            <p className="text-sm text-muted-foreground">Add currency pairs to track their performance</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
