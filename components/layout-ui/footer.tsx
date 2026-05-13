"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#0a0a0a] text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-0">
        {/* Top Section: Email + Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16 lg:mb-20">
          {/* Left: Email Form */}
          <div className="flex flex-col gap-4 max-w-sm">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white/90"
            >
              Enter your email address
            </label>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 h-11 bg-[#1a1a1a] border-0 text-white placeholder:text-gray-500 rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-fit px-8 h-11 bg-white text-blue-600 border-0 rounded-lg font-medium hover:bg-gray-100 hover:text-blue-700 transition-colors"
              >
                Send Email
              </Button>
            </form>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex gap-16 md:gap-24 lg:gap-32">
            {/* Main Menu */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium text-white mb-1">Main Menu</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/compare" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Compare
                </Link>
                <Link href="/location-insights" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Location Insights
                </Link>
              </nav>
            </div>

            {/* More Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium text-white mb-1">More Links</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/refund-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom: Large Brand Text - Centered, Fully Visible */}
        <div className="relative w-full flex justify-center mb-[72px] overflow-visible">
          <h2
            className="text-center text-[16vw] md:text-[13vw] lg:text-[11vw] font-bold leading-[0.85] tracking-[-0.04em] text-transparent bg-clip-text whitespace-nowrap select-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #2563eb 0%, #1d4ed8 35%, #0a0a0a 95%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            rear window
          </h2>
        </div>
      </div>
    </footer>
  );
}