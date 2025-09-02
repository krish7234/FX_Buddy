"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="bg-green-50 p-4 rounded-lg">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Email Sent!</h3>
          <p className="text-green-700 text-sm">
            We've sent a password reset link to <strong>{email}</strong>. Please check your email and follow the
            instructions to reset your password.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Didn't receive the email? Check your spam folder or{" "}
            <button
              onClick={() => {
                setIsSuccess(false)
                setEmail("")
              }}
              className="text-accent hover:text-accent/80 underline"
            >
              try again
            </button>
          </p>

          <Button asChild className="w-full bg-accent hover:bg-accent/90">
            <Link href="/login">Back to Sign In</Link>
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-card-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-input border-border focus:ring-accent focus:border-accent"
          required
        />
        <p className="text-xs text-muted-foreground">We'll send you a link to reset your password</p>
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending Reset Link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      {/* Back to Login */}
      <div className="text-center">
        <Link href="/login" className="text-sm text-accent hover:text-accent/80 transition-colors">
          Back to Sign In
        </Link>
      </div>
    </motion.form>
  )
}
