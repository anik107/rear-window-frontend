"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Cris James",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
    image: "/avatars/avatar1.jpg",
  },
  {
    id: 2,
    name: "Cris James",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
    image: "/avatars/avatar2.jpg",
  },
  {
    id: 3,
    name: "Cris James",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
    image: "/avatars/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-5 max-w-sm lg:pt-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              Testimonials
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Hear from users who rely on our insights to choose the right
              locations with confidence.
            </p>

            <Button className="w-fit px-8 py-2.5 h-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium mt-2">
              View All
            </Button>
          </div>

          {/* Right Cards */}
          <div className="relative flex flex-col items-center w-full max-w-xl">
            {/* Card 1 */}
            <Card className="relative w-[92%] ml-auto min-h-[145px] p-5 bg-white border-0 rounded-r-md rounded-l-none shadow-sm overflow-hidden">
              {/* Left Border */}
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gray-300 rounded-none" />

              <div className="flex items-start gap-4 pl-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {testimonials[0].name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonials[0].text}
                  </p>
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="relative w-full min-h-[160px] p-5 bg-blue-50 border-0 rounded-r-md rounded-l-none shadow-md overflow-hidden mt-1 -translate-x-6 z-10">
              {/* Blue Blur Border */}
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-blue-500 blur-[0.5px] rounded-none" />

              <div className="flex items-start gap-4 pl-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {testimonials[1].name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonials[1].text}
                  </p>
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="relative w-[92%] ml-auto min-h-[145px] p-5 bg-white border-0 rounded-r-md rounded-l-none shadow-sm overflow-hidden mt-1">
              {/* Left Border */}
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gray-300 rounded-none" />

              <div className="flex items-start gap-4 pl-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {testimonials[2].name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonials[2].text}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}