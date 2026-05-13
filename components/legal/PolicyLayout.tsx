"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import HamburgerMenuIcon from "../ui/hamburgerMenu";
import { PolicyPageData } from "@/types/legal";
import PolicySidebar from "./PolicySidebar";
import PolicySection from "./PolicySection";

interface PolicyLayoutProps {
  data: PolicyPageData;
}

export default function PolicyLayout({ data }: PolicyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(
    data.sections[0]?.id || ""
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const sectionElements = data.sections.map((section) => ({
      id: section.id,
      element: document.getElementById(section.id),
    }));

    const scrollPosition = window.scrollY + 200;

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const { id, element } = sectionElements[i];
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(id);
        break;
      }
    }
  }, [data.sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(id);
  }, []);

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
  };

  const handleMobileSectionClick = (id: string) => {
    setIsSheetOpen(false);
    // Wait for Sheet close animation to complete (300ms default)
    setTimeout(() => {
      scrollToSection(id);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {data.title}
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="mb-4 flex justify-end lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open sections menu"
              >
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <SheetHeader className="sr-only">
                <SheetTitle>Sections</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <PolicySidebar
                  sections={data.sections}
                  activeSection={activeSection}
                  onSectionClick={handleMobileSectionClick}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <PolicySidebar
                sections={data.sections}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-4">
              {data.sections.map((section) => (
                <PolicySection key={section.id} section={section} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}