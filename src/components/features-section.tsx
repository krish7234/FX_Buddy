"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Shield, Smartphone, Globe, Zap, Users, TrendingUp, Clock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Charting",
    description:
      "Professional-grade charts with 50+ technical indicators, multiple timeframes, and customizable layouts.",
  },
  {
    icon: Zap,
    title: "Lightning Execution",
    description: "Execute trades in milliseconds with our high-performance trading engine and direct market access.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your funds are protected with enterprise-level security, encryption, and regulatory compliance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on the go with our responsive web platform and dedicated mobile applications.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access major, minor, and exotic currency pairs from markets around the world.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 customer support from forex trading experts to help you succeed.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Data",
    description: "Live market data, news feeds, and economic calendar to stay ahead of market movements.",
  },
  {
    icon: Clock,
    title: "24/5 Trading",
    description: "Trade forex markets 24 hours a day, 5 days a week with our always-on platform.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Everything You Need to Trade Forex
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Professional tools and features designed to give you the edge in forex trading
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card">
                <CardContent className="p-6">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
