"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calculator } from "lucide-react"

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("EUR")
  const [toCurrency, setToCurrency] = useState("USD")
  const [amount, setAmount] = useState("1000")
  const [result, setResult] = useState("1085.60")

  const currencies = [
    { code: "EUR", name: "Euro" },
    { code: "USD", name: "US Dollar" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
  ]

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleConvert = () => {
    // Simulate conversion calculation
    const rate = 1.0856 // Mock exchange rate
    const convertedAmount = (Number.parseFloat(amount) * rate).toFixed(2)
    setResult(convertedAmount)
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center">
          <Calculator className="h-5 w-5 mr-2" />
          Currency Converter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* From Currency */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">From</label>
            <div className="flex space-x-2">
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="flex-1"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSwapCurrencies}
              className="rounded-full p-2 bg-transparent"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {/* To Currency */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">To</label>
            <div className="flex space-x-2">
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input type="text" value={result} readOnly className="flex-1 bg-muted/30" />
            </div>
          </div>

          {/* Convert Button */}
          <Button onClick={handleConvert} className="w-full bg-accent hover:bg-accent/90">
            Convert
          </Button>

          {/* Exchange Rate Info */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Exchange Rate</span>
              <span className="font-medium text-card-foreground">
                1 {fromCurrency} = 1.0856 {toCurrency}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-muted-foreground">Last Updated</span>
              <span className="text-muted-foreground">2 minutes ago</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
