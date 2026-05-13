import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  subtitleLink: {
    text: string;
    href: string;
  };
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  subtitleLink,
  children,
}: AuthLayoutProps) {
  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] border border-blue-100/80 overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
      {/* Left Panel - Blue Gradient */}
      <div className="hidden md:flex relative items-start justify-start bg-[linear-gradient(135deg,#1b2a6b_0%,#203a9a_45%,#3b82f6_100%)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute right-6 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />
        </div>
        <div className="relative z-10 p-10 text-white">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight">
            rear
            <br />
            window
          </h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col px-8 py-10 md:px-12 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors mb-10 w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center mb-2">
            {title}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            {subtitle}{" "}
            <Link
              href={subtitleLink.href}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {subtitleLink.text}
            </Link>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}