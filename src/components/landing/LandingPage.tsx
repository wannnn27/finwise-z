import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { DashboardPreview } from "@/components/landing/DashboardPreview";

export const LandingPage = () => {
  return (
    <main className="relative min-h-screen flex flex-col bg-slate-50">
      <Suspense fallback={<div className="h-20" />}>
        <Navbar />
      </Suspense>
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 md:px-10 bg-white relative border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Platform Edukasi Keuangan #1 untuk Gen Z
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
              Kelola keuanganmu,<br />
              <span className="text-primary">bebas dari jebakan</span><br />
              PayLater.
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed">
              Edukasi, coaching personal, dan tracking keuangan dalam satu platform yang dirancang khusus untuk mahasiswa dan pekerja muda usia 18 sampai 30 tahun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/register">
                <Button className="bg-primary hover:bg-primary/90 text-white text-sm md:text-base h-12 px-6 rounded-lg shadow-sm transition-all flex items-center group">
                  Mulai Gratis Sekarang
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/fitur">
                <Button variant="outline" className="text-sm md:text-base h-12 px-6 rounded-lg border-secondary text-secondary hover:bg-slate-50 transition-all">
                  Lihat Semua Fitur
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-10">
              <StatItem value="2.500+" label="Pengguna aktif" />
              <StatItem value="150+" label="Sesi coaching" />
              <StatItem value="12 bln" label="Target BEP" />
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl transform rotate-3 scale-105" />
            <Image 
              src="/photo.jpg" 
              alt="Finwise Z Dashboard" 
              width={600} 
              height={600} 
              className="rounded-3xl object-cover shadow-xl relative z-10 w-full aspect-square" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Dashboard Preview Section */}
      <DashboardPreview />

      {/* CTA Banner */}
      <section className="py-20 px-6 md:px-10 bg-secondary text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Mulai perjalanan finansialmu hari ini
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Bergabung dengan 2.500 lebih anak muda yang sudah lebih melek finansial dan terbebas dari jeratan hutang digital.
          </p>
          <div className="pt-4">
            <Link href="/auth/register">
              <Button className="text-base font-medium h-12 px-8 rounded-lg bg-white text-secondary hover:bg-slate-100 transition-all shadow-sm">
                Daftar Gratis tanpa perlu kartu kredit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
};

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
);
