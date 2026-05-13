"use client";

import { PolicySection } from "@/types/legal";

interface PolicySidebarProps {
  sections: PolicySection[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function PolicySidebar({
  sections,
  activeSection,
  onSectionClick,
}: PolicySidebarProps) {
  return (
    <aside className="w-full flex-shrink-0">
      <nav className="sticky top-8 bg-blue-600 rounded-lg p-4">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="mr-2">{section.number}.</span>
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}