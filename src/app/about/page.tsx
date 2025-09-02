"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const stats = [
    { label: "Active Traders", value: "50K+", icon: Users },
    { label: "Countries Served", value: "120+", icon: Globe },
    { label: "Daily Volume", value: "$2.5B", icon: TrendingUp },
    { label: "Years Experience", value: "10+", icon: Award },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/professional-woman-ceo.png",
      bio: "Former Goldman Sachs trader with 15+ years in forex markets",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/professional-cto.png",
      bio: "Ex-Google engineer specializing in high-frequency trading systems",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Trading",
      image: "/professional-woman-trader.png",
      bio: "Certified FRM with expertise in risk management and market analysis",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade security with advanced encryption and regulatory compliance",
    },
    {
      icon: Target,
      title: "Precision Trading",
      description: "Cutting-edge technology for accurate and fast trade execution",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Dedicated support and education to help traders achieve their goals",
    },
  ]

  return (
    <div className="min-h-screen bg-deep-sea-gradient relative overflow-hidden">
      <div className="wave-overlay"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About FX Buddy</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering traders worldwide with professional-grade forex trading tools and education since 2014
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-blue-100 mb-8">
              At FX Buddy, we believe that everyone should have access to professional-grade trading tools and
              education. Our mission is to democratize forex trading by providing cutting-edge technology, comprehensive
              education, and unwavering support to traders at every level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-blue-100">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-blue-100">Led by industry veterans with decades of combined experience</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 mb-3">{member.role}</p>
                    <p className="text-blue-100 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Trading?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of successful traders who trust FX Buddy for their forex trading needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600"
              >
                Start Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
