"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/5 py-20 sm:py-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            Professional Forex Trading Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Trade Forex Like a <span className="text-accent">Professional</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            Advanced trading tools, real-time market data, and professional-grade charts. Start your forex trading
            journey with FX Buddy today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg" asChild>
              <Link href="/register">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
              <Link href="/demo">Try Demo Account</Link>
            </Button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Advanced Charts</h3>
              <p className="text-sm text-muted-foreground">Professional trading charts with 50+ indicators</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Execute trades in milliseconds with our platform</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Bank-Grade Security</h3>
              <p className="text-sm text-muted-foreground">
                Your funds and data are protected with enterprise security
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
