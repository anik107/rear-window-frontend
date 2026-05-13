import { PolicySection as PolicySectionType } from "@/types/legal";

interface PolicySectionProps {
  section: PolicySectionType;
}

export default function PolicySection({ section }: PolicySectionProps) {
  return (
    <section
      id={section.id}
      className="bg-slate-100 rounded-lg p-6 md:p-8 scroll-mt-24"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {section.number}. {section.title}
      </h2>
      <div className="space-y-4">
        {section.items.map((item) => (
          <div key={item.id}>
            {item.title && (
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                {item.title}
              </h3>
            )}
            <div className="space-y-2">
              {item.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm leading-relaxed ${
                    paragraph.startsWith("•") || paragraph.startsWith("-")
                      ? "pl-4 text-gray-600"
                      : paragraph.startsWith("You can:") ||
                        paragraph.startsWith("We use") ||
                        paragraph.startsWith("Users agree") ||
                        paragraph.startsWith("To request") ||
                        paragraph.startsWith("Refunds may") ||
                        paragraph.startsWith("Refunds will")
                      ? "text-gray-700 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}