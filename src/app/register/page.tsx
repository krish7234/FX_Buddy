import { RegisterForm } from "@/components/auth/register-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join thousands of traders using FX Buddy to trade forex professionally"
    >
      <RegisterForm />
    </AuthLayout>
  )
}
