import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, Users, Activity, Target, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FiturPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-white relative border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent blur-3xl pointer-events-none" />
        
        <section className="px-6 md:px-10 mb-20 relative z-10">
          <div className="max-w-7xl mx-auto text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 text-primary rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <Target size={14} /> Platform Terpadu
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Dirancang untuk <span className="text-secondary italic">keseharian</span> Anda
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Bukan sekadar aplikasi pencatat angka. Finwise Z memadukan edukasi praktis, pendampingan ahli, dan pemantauan otomatis dalam satu ekosistem yang intuitif.
            </p>
          </div>
        </section>

        {/* Feature Explanations */}
        <section className="px-6 md:px-10 space-y-32">
          
          {/* Feature 1: Edukasi */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-secondary"></span> 01 • Edukasi
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                Belajar keuangan yang akhirnya masuk akal
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Konten edukasi kami disusun oleh praktisi dan disajikan dalam format yang menyenangkan. Tersedia video pendek, e-book visual, dan modul interaktif yang langsung bisa dipraktikkan.
              </p>
              <ul className="space-y-4 pt-2">
                <FeatureItem text="Lebih dari 50 video edukasi terstruktur" />
                <FeatureItem text="Studi kasus nyata tentang PayLater" />
                <FeatureItem text="Akses materi kapan saja tanpa batas" />
              </ul>
            </div>
            <div className="bg-slate-100/50 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden border border-slate-200">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
              <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                    <PlayCircle size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Modul Sedang Dipelajari</div>
                    <div className="text-base font-bold text-slate-900">Kelola PayLater dengan Bijak</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Progres</span>
                    <span>72% Selesai</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[72%] rounded-full" />
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100 mt-4 relative z-10">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Rekomendasi Selanjutnya</div>
                <div className="text-sm font-bold text-slate-900">Investasi Pertama untuk Pemula</div>
              </div>
            </div>
          </div>

          {/* Feature 2: Coaching */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
               <div className="relative z-10">
                 <div className="text-[11px] text-white/50 uppercase tracking-widest font-bold mb-8">Sesi Terjadwal • 1-on-1</div>
                 
                 <div className="flex items-center gap-4 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                   <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg border border-primary/30">
                     DA
                   </div>
                   <div>
                     <div className="text-lg font-bold text-white">Dr. Andi</div>
                     <div className="text-xs text-primary font-bold">Certified Financial Planner</div>
                   </div>
                 </div>
                 
                 <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
                   <p className="italic text-sm text-white/80 font-medium leading-relaxed">
                     "Melihat rasio utangmu saat ini, mari kita prioritaskan pelunasan PayLater berbunga tinggi sebelum menyisihkan dana untuk investasi agresif. Kita buat plan-nya sekarang."
                   </p>
                 </div>
                 
                 <div className="flex items-center justify-between text-xs font-bold text-white/50 bg-white/5 px-4 py-3 rounded-xl">
                   <span>Via Zoom Meeting</span>
                   <span className="text-white">Minggu, 4 Mei • 10.00 WIB</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span> 02 • Coaching
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                Pendampingan ahli yang benar-benar personal
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Bukan respons bot atau saran template. Mentor keuangan kami akan menganalisis kondisi finansial spesifik Anda dan menyusun rencana aksi yang realistis untuk dicapai.
              </p>
              <ul className="space-y-4 pt-2 mb-6">
                <FeatureItem text="Konsultasi privat via video call" />
                <FeatureItem text="Rencana keuangan yang bisa dieksekusi" />
                <FeatureItem text="Mentor bersertifikasi resmi (CFP/CFA)" />
              </ul>
              <Link href="/dashboard/coaching">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 h-auto text-base font-bold shadow-lg shadow-primary/20 group">
                  Lihat Profil Mentor 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature 3: Tracking */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-emerald-600"></span> 03 • Tracking
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                Kendali penuh atas setiap rupiah Anda
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Sistem pintar kami mengkategorikan pengeluaran, memantau batas anggaran bulanan, dan yang terpenting: memberikan notifikasi proaktif sebelum tagihan PayLater Anda membengkak.
              </p>
              <ul className="space-y-4 pt-2">
                <FeatureItem text="Visualisasi arus kas yang indah" />
                <FeatureItem text="Peringatan dini jatuh tempo tagihan" />
                <FeatureItem text="Keamanan data tingkat bank" color="text-emerald-600" />
              </ul>
            </div>
            <div className="bg-slate-100/50 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden border border-slate-200">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="p-6 border-b border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Total Utang Berjalan</div>
                  <div className="text-3xl font-bold text-slate-900">Rp 1.250.000</div>
                </div>
                <div className="p-6 space-y-4 bg-slate-50/50">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-rose-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">ShopeePayLater</div>
                        <div className="text-[10px] font-bold text-rose-500 uppercase mt-0.5">Sisa 3 hari</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Rp 450.000</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm opacity-70">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">GoPayLater</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Sisa 12 hari</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Rp 800.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-32 px-6 md:px-10 py-24 bg-secondary text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
           <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20">
                <ShieldCheck size={16} /> Keamanan Terjamin
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Mulai bangun kebebasan finansial Anda
              </h2>
              <p className="text-white/80 font-medium text-lg leading-relaxed max-w-md mx-auto">
                Daftar sekarang dan dapatkan akses ke simulasi kesehatan keuangan tanpa syarat.
              </p>
              <Link href="/assessment">
                <Button className="bg-white hover:bg-slate-50 text-secondary rounded-xl px-10 py-7 h-auto text-lg font-bold shadow-xl group">
                  Mulai Analisis Gratis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
           </div>
        </section>
      </div>

      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

const FeatureItem = ({ text, color = "text-secondary" }: { text: string, color?: string }) => (
  <li className="flex items-center gap-3 text-slate-600 font-medium">
    <CheckCircle2 className={cn("w-5 h-5 shrink-0", color)} />
    {text}
  </li>
);
