import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { MarketOverview } from "@/components/dashboard/market-overview"
import { PriceCharts } from "@/components/dashboard/price-charts"
import { MarketNews } from "@/components/dashboard/market-news"
import { CurrencyConverter } from "@/components/dashboard/currency-converter"
import { Watchlist } from "@/components/dashboard/watchlist"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Market Overview Cards */}
        <MarketOverview />

        {/* Main Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts and Trading Tools */}
          <div className="lg:col-span-2 space-y-6">
            <PriceCharts />
            <CurrencyConverter />
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <Watchlist />
            <MarketNews />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
