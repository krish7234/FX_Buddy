"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TermsModal } from "@/components/auth/terms-modal";
import { signup } from "@/services/api";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signup(
        formData.fullName,
        formData.email,
        formData.password
      );
      console.log("Signup successful:", res);
      alert("Account created successfully!");
    } catch (err: any) {
      alert("Signup failed: " + err.message);
    } finally {
      setIsLoading(false);
    }

    // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false)
    //   alert("Account created successfully!")
    // }, 2000)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Full Name Field */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-card-foreground">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="bg-input border-border focus:ring-accent focus:border-accent"
            required
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-card-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="bg-input border-border focus:ring-accent focus:border-accent"
            required
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-card-foreground">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a strong password"
              className="bg-input border-border focus:ring-accent focus:border-accent pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-card-foreground">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="bg-input border-border focus:ring-accent focus:border-accent pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Account Type */}
        <div className="space-y-2">
          <Label htmlFor="accountType" className="text-card-foreground">
            Account Type
          </Label>
          <Select
            value={formData.accountType}
            onValueChange={(value) =>
              setFormData({ ...formData, accountType: value })
            }
          >
            <SelectTrigger className="bg-input border-border focus:ring-accent focus:border-accent">
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">
                Demo Account (Practice Trading)
              </SelectItem>
              <SelectItem value="real">Real Account (Live Trading)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, agreeToTerms: checked as boolean })
            }
            className="mt-1"
          />
          <div className="text-sm">
            <Label
              htmlFor="terms"
              className="text-card-foreground cursor-pointer"
            >
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-accent hover:text-accent/80 underline"
              >
                Terms and Conditions
              </button>{" "}
              and Privacy Policy
            </Label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </motion.form>

      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}
