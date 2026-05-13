"use client";

import { Card } from "@/components/ui/card";

const features = [
  {
    id: 1,
    title: "Purchase with Absolute Confidence",
    description:
      "Whether you are a first-time buyer needing safety reassurance or an investor evaluating neighborhood stability for rental potential, get the clear guidance you need. Prioritize safe, family-friendly environments and validate property value with reliable location insights before making a commitment",
    variant: "white",
  },
  {
    id: 2,
    title: "Validate Your Next Neighborhood",
    description:
      "Quickly evaluate community safety and neighborhood risks before signing a lease. From instant safety scores for short-term stays to in-depth crime insights for long-term stability, find an environment that fits your lifestyle and personal safety needs.",
    variant: "dark",
  },
  {
    id: 3,
    title: "Real Estate Agents",
    description:
      "Deliver professional safety reports to easily answer client questions and close residential deals faster. Use crime trend reports and area comparison tools to advise investment clients and elevate your brokerage's credibility",
    variant: "white",
  },
];

export default function PropertyDecision() {
  return (
    <section className="bg-[#f0f5ff] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16 md:mb-20">
          Built Every Property Decision
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`relative p-8 rounded-2xl border-0 shadow-sm h-full min-h-[420px] flex flex-col justify-between ${
                feature.variant === "dark"
                  ? "bg-[#111111] text-white md:mt-15"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="flex flex-col h-full justify-between gap-8">
                <h3
                  className={`text-xl font-medium leading-snug ${
                    feature.variant === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    feature.variant === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}