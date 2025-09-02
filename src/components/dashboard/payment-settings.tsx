"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Building, Plus, Trash2 } from "lucide-react"

export function PaymentSettings() {
  const [paymentMethods] = useState([
    {
      id: "1",
      type: "bank",
      name: "Chase Bank",
      details: "****1234",
      isDefault: true,
    },
    {
      id: "2",
      type: "card",
      name: "Visa Credit Card",
      details: "****5678",
      isDefault: false,
    },
  ])

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-card-foreground">Payment Methods</CardTitle>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Method
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  {method.type === "bank" ? (
                    <Building className="h-6 w-6 text-muted-foreground" />
                  ) : (
                    <CreditCard className="h-6 w-6 text-muted-foreground" />
                  )}
                  <div>
                    <div className="font-medium text-card-foreground">{method.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {method.details} {method.isDefault && "• Default"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!method.isDefault && (
                    <Button variant="outline" size="sm">
                      Set Default
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing Information */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Billing Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Billing Address</div>
              <div className="font-medium text-card-foreground">123 Main Street</div>
              <div className="text-sm text-muted-foreground">New York, NY 10001</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Tax ID</div>
              <div className="font-medium text-card-foreground">Not provided</div>
            </div>
          </div>
          <Button variant="outline" className="mt-4 bg-transparent">
            Update Billing Info
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
