"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SearchBar } from "@/components/ui/search-bar";
import { navConfig } from "@/lib/nav-config";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    console.log("Mobile search:", value);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-gray-700 hover:text-gray-900"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-6">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        {/* Mobile Brand */}
        <div className="mb-8">
          <Link href={navConfig.brand.href} className="flex flex-col leading-none">
            <span className="text-xl font-bold text-blue-600">{navConfig.brand.topText}</span>
            <span className="text-xl font-bold text-gray-900">{navConfig.brand.bottomText}</span>
          </Link>
        </div>

        {/* Mobile Search */}
        {/* <div className="mb-6">
          <SearchBar
            placeholder={navConfig.search.placeholder}
            size="sm"
            variant="filled"
            onSearch={handleSearch}
          />
        </div> */}

        {/* Mobile Links */}
        <nav className="flex flex-col gap-4">
          {navConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={navConfig.auth.href}
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center justify-center h-10 px-6 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {navConfig.auth.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}