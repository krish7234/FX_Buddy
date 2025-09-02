import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProfileSettings } from "@/components/dashboard/profile-settings"
import { SecuritySettings } from "@/components/dashboard/security-settings"
import { PaymentSettings } from "@/components/dashboard/payment-settings"
import { KYCDocuments } from "@/components/dashboard/kyc-documents"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and security settings.</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SecuritySettings />
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <PaymentSettings />
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <KYCDocuments />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
