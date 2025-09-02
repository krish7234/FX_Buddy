import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AccountSummary } from "@/components/dashboard/account-summary"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
import { AccountActions } from "@/components/dashboard/account-actions"
import { NotificationsPanel } from "@/components/dashboard/notifications-panel"

export default function AccountPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">
                Your account is performing well. Here&apos;s your latest trading summary.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Account Type</div>
              <div className="text-lg font-semibold text-accent">Premium Trader</div>
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <AccountSummary />

        {/* Account Actions */}
        <AccountActions />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaction History */}
          <div className="lg:col-span-2">
            <TransactionHistory />
          </div>

          {/* Notifications */}
          <div>
            <NotificationsPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
