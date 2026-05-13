import Testimonials from "@/components/layout-ui/testimonials";
import Footer from "../components/layout-ui/footer";
import PropertyDecision from "@/components/layout-ui/property-decision";
import StepsSection from "@/components/layout-ui/step-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="w-full">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 bg-transparent">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="text-sky-300">rear</span>
            <span>window</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-200">
            <a className="transition-colors hover:text-white" href="#">
              Home
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Pricing
            </a>
            <button className="rounded-md border border-slate-200/30 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-slate-200/60">
              Log in / Sign up
            </button>
          </div>
        </nav>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-tight">
            Transparent navbar demo
          </h1>
          <p className="mt-4 text-base text-slate-300">
            The navbar above has no background, so it blends with the page.
          </p>
        </div>
      </main>
      <StepsSection />
      <PropertyDecision/>
      <Testimonials />
      <Footer />
    </div>
  );
}
