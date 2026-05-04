import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Calendar, Clock, Video } from "lucide-react";

export default function WebinarPage() {
  const webinars = [
    {
      title: "Cara Keluar dari Jeratan PayLater: Strategi Praktis 30 Hari",
      date: "Senin, 4 Mei 2026",
      time: "19.00 WIB",
      platform: "Zoom",
      price: "GRATIS",
      seats: "48 peserta bergabung",
      badge: "Live Sekarang",
      badgeType: "live",
      image: "/paylater.jpg"
    },
    {
      title: "Investasi Reksa Dana untuk Fresh Graduate: Mulai dari Rp10rb",
      date: "Selasa, 5 Mei 2026",
      time: "19.30 WIB",
      platform: "Zoom",
      price: "Rp25.000",
      seats: "32 kursi tersisa",
      badge: "Besok",
      badgeType: "soon",
      image: "/investasi.jpg"
    },
    {
      title: "Mengelola Keuangan Pasangan Muda: Dua Penghasilan, Satu Tujuan",
      date: "Sabtu, 10 Mei 2026",
      time: "10.00 WIB",
      platform: "Zoom",
      price: "Rp50.000",
      seats: "20 kursi tersisa",
      badge: "Minggu depan",
      badgeType: "soon",
      image: "/kelola keuangan.jpg"
    },
    {
      title: "Budgeting 50/30/20: Formula Sederhana yang Terbukti Berhasil",
      date: "Rekaman Tersedia",
      time: "58 Menit",
      platform: "Video On-Demand",
      price: "GRATIS (Member)",
      seats: "⭐ Rating 4.9 / 5",
      badge: "Rekaman",
      badgeType: "rec",
      image: "/budgeting.jpg"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      
      {/* Hero Section */}
      <div className="pt-32 pb-24 bg-white relative border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl pointer-events-none" />
        
        <section className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/5 border border-secondary/10 text-secondary rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
            <Video size={14} /> Live Event & Webinar
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Belajar langsung dari para <span className="text-primary italic">praktisi keuangan</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Ikuti sesi interaktif dengan perencana keuangan tersertifikasi. Mulai dari melunasi utang, hingga merancang strategi investasi untuk masa depan.
          </p>
        </section>
      </div>

      {/* Grid Section */}
      <div className="py-20 px-6 md:px-10">
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {webinars.map((web, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-200 flex flex-col">
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image 
                  src={web.image} 
                  alt={web.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                  <Badge className={cn(
                    "text-[10px] uppercase tracking-widest px-3 py-1.5 border-none shadow-sm rounded-lg backdrop-blur-md",
                    web.badgeType === 'live' ? "bg-rose-500/90 text-white animate-pulse" : 
                    web.badgeType === 'soon' ? "bg-primary/90 text-white" : "bg-slate-800/90 text-white"
                  )}>
                    {web.badgeType === 'live' && <span className="mr-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block animate-ping" />}
                    {web.badge}
                  </Badge>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {web.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {web.time}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {web.title}
                </h3>
                
                <div className="mt-auto flex items-end justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Investasi</div>
                    <div className={cn(
                      "text-2xl font-bold tracking-tight",
                      web.price.includes("GRATIS") ? "text-emerald-600" : "text-slate-900"
                    )}>{web.price}</div>
                    <div className="text-xs font-bold text-slate-400 mt-1.5">{web.seats}</div>
                  </div>
                  <Button className={cn(
                    "rounded-xl px-8 py-6 text-sm font-bold shadow-sm transition-all group-hover:shadow-md",
                    web.badgeType === 'rec' 
                      ? "bg-slate-800 hover:bg-slate-900 text-white" 
                      : "bg-primary hover:bg-primary/90 text-white"
                  )}>
                    {web.badgeType === 'rec' ? "Tonton Ulang" : "Daftar Sekarang"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
