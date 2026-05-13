"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { navConfig } from "@/lib/nav-config";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const handleSearch = (value: string) => {
    console.log("Search:", value);
    // Add your search logic here
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Brand Logo */}
          <Link
            href={navConfig.brand.href}
            className="flex-shrink-0 flex flex-col leading-[1.1] py-1"
          >
            <span className="text-lg sm:text-xl font-bold text-blue-600 tracking-tight">
              {navConfig.brand.topText}
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {navConfig.brand.bottomText}
            </span>
          </Link>

          {/* Search Bar - Desktop/Tablet */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <SearchBar
              placeholder={navConfig.search.placeholder}
              size="md"
              variant="filled"
              onSearch={handleSearch}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navConfig.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    pathname === link.href ? "text-blue-600" : "text-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Auth Button - Desktop */}
            <Button
              asChild
              className="hidden lg:inline-flex h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Link href={navConfig.auth.href}>{navConfig.auth.label}</Link>
            </Button>

            {/* Mobile Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-500 hover:text-gray-700"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>

        {/* Mobile Search Bar - Below navbar */}
        <div className="md:hidden pb-3">
          <SearchBar
            placeholder={navConfig.search.placeholder}
            size="sm"
            variant="filled"
            onSearch={handleSearch}
          />
        </div>
      </div>
    </header>
  );
}