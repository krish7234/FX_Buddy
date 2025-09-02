"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners learning forex trading",
      icon: Star,
      features: [
        "Demo account with $10,000 virtual funds",
        "Basic market analysis tools",
        "Educational resources",
        "Email support",
        "Mobile app access",
        "Basic charting tools",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced tools for serious traders",
      icon: Zap,
      features: [
        "Live trading account",
        "Advanced technical indicators",
        "Real-time market data",
        "Priority support",
        "Risk management tools",
        "Custom alerts",
        "API access",
        "Advanced charting",
      ],
      buttonText: "Start Trading",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Complete solution for professional traders",
      icon: Crown,
      features: [
        "Multiple trading accounts",
        "Institutional-grade tools",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "Premium market insights",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-ocean-gradient relative overflow-hidden">
      <div className="wave-overlay"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose Your Trading Plan</h1>
            <p className="text-xl text-blue-100 mb-8">
              Start with our free demo account or upgrade to live trading with professional tools
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full bg-white/10 backdrop-blur-md border-white/20 ${
                    plan.popular ? "ring-2 ring-yellow-400/50 scale-105" : ""
                  }`}
                >
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-blue-100">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-blue-200">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-100">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                          : "bg-white/20 hover:bg-white/30 border-white/20"
                      }`}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 text-left">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">Can I switch plans anytime?</h3>
                  <p className="text-blue-100">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-blue-100">
                    Our Starter plan is completely free with demo trading. Professional and Enterprise plans offer
                    14-day free trials.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-blue-100">
                    We accept all major credit cards, PayPal, and bank transfers for your convenience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
