"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Upload, RefreshCw, RotateCcw } from "lucide-react"
import { DepositModal } from "@/components/dashboard/deposit-modal"
import { WithdrawModal } from "@/components/dashboard/withdraw-modal"

export function AccountActions() {
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)

  const handleResetDemo = () => {
    if (confirm("Are you sure you want to reset your demo account? This will restore your balance to $50,000.")) {
      // Reset demo account logic would go here
      alert("Demo account has been reset!")
    }
  }

  return (
    <>
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => setShowDepositModal(true)}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
            >
              <Upload className="h-4 w-4 mr-2" />
              Deposit Funds
            </Button>

            <Button
              onClick={() => setShowWithdrawModal(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Withdraw Funds
            </Button>

            <Button variant="outline" className="bg-transparent">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Balance
            </Button>

            <Button variant="outline" onClick={handleResetDemo} className="bg-transparent">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Demo Account
            </Button>
          </div>
        </CardContent>
      </Card>

      <DepositModal isOpen={showDepositModal} onClose={() => setShowDepositModal(false)} />
      <WithdrawModal isOpen={showWithdrawModal} onClose={() => setShowWithdrawModal(false)} />
    </>
  )
}
