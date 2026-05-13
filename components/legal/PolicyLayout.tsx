"use client";

import { useState, useEffect } from "react";
import { PolicyPageData } from "@/types/legal";
import PolicySidebar from "./PolicySidebar";
import PolicySection from "./PolicySection";

interface PolicyLayoutProps {
  data: PolicyPageData;
}

export default function PolicyLayout({ data }: PolicyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(data.sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.sections]);

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
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

        {/* Content with Sidebar */}
        <div className="flex gap-8 lg:gap-12">
          <PolicySidebar
            sections={data.sections}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />

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