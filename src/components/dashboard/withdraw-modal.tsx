"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building, Loader2 } from "lucide-react"

interface WithdrawModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      alert("Withdrawal request submitted successfully!")
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Withdrawal Amount</Label>
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
            <p className="text-xs text-muted-foreground">Available balance: $12,847.32</p>
          </div>

          <div className="space-y-2">
            <Label>Withdrawal Method</Label>
            <div className="p-3 border rounded-lg border-border">
              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="font-medium text-card-foreground">Bank Transfer</div>
                  <div className="text-sm text-muted-foreground">To: ****1234 • Processing time: 1-3 business days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium text-card-foreground mb-2">Important Information</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Minimum withdrawal: $10.00</li>
              <li>• Processing time: 1-3 business days</li>
              <li>• No withdrawal fees</li>
              <li>• Funds will be sent to your registered bank account</li>
            </ul>
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
              disabled={isLoading || !amount}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Withdraw Funds"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
