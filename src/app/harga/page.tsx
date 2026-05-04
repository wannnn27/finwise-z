import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/landing/PricingSection";

export default function HargaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      
      <div className="pt-20">
        <PricingSection />
        
        <section className="pb-20 px-6 md:px-10 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Semua paket sudah termasuk akses ke komunitas belajar finansial dan financial assessment awal. <br />
            Ada pertanyaan? <a href="#" className="text-brand-green font-medium underline underline-offset-4">Hubungi kami</a>
          </p>
        </section>
      </div>

      <Suspense fallback={<div className="h-20 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
