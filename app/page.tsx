import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f17] overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />

      {/* Divider */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      <WaitlistForm />
      <Footer />
    </main>
  );
}
