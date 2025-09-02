"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Building, Smartphone, Loader2 } from "lucide-react"

interface DepositModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const paymentMethods = [
    { id: "bank", name: "Bank Transfer", icon: Building, fee: "Free", time: "1-3 business days" },
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, fee: "2.5%", time: "Instant" },
    { id: "wallet", name: "Digital Wallet", icon: Smartphone, fee: "1.5%", time: "Instant" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      alert("Deposit request submitted successfully!")
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deposit Funds</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Deposit Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="10"
              step="0.01"
              required
            />
            <p className="text-xs text-muted-foreground">Minimum deposit: $10.00</p>
          </div>

          <div className="space-y-2">
            <Label>Payment Method</Label>
            <div className="space-y-2">
              {paymentMethods.map((paymentMethod) => (
                <div
                  key={paymentMethod.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    method === paymentMethod.id ? "border-accent bg-accent/5" : "border-border hover:bg-muted/30"
                  }`}
                  onClick={() => setMethod(paymentMethod.id)}
                >
                  <div className="flex items-center space-x-3">
                    <paymentMethod.icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium text-card-foreground">{paymentMethod.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Fee: {paymentMethod.fee} • {paymentMethod.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !amount || !method}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Deposit Funds"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
