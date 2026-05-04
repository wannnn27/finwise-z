"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, User, Users as UsersIcon, BookOpen } from "lucide-react";

export const PricingSection = () => {
  const [billing, setBilling] = useState<'month' | 'year'>('month');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  const plans = [
    {
      name: "VIP Private Coaching",
      tagline: "Pendampingan eksklusif dengan fleksibilitas penuh",
      price: billing === 'month' ? "Rp100rb" : "Rp80rb",
      period: "per sesi",
      note: "Jadwal fleksibel, booking kapan saja",
      icon: <User size={24} className="text-secondary" />,
      iconBg: "bg-blue-50",
      tag: "VIP",
      tagClass: "bg-blue-100 text-secondary border border-blue-200",
      features: [
        "Jadwal bebas, pilih hari dan waktu sesuai kebutuhanmu",
        "Sesi tatap muka eksklusif bersama mentor tersertifikasi",
        "Fokus penuh pada kondisi finansial dan tujuan pribadimu",
        "Prioritas akses ke mentor terbaik kami"
      ],
      cocok: "Ingin hasil cepat, personal, dan fleksibel tanpa kompromi",
      btnVariant: "outline" as const
    },
    {
      name: "Small Group Coaching",
      tagline: "Belajar bersama dalam grup kecil yang terarah",
      price: billing === 'month' ? "Rp40rb" : "Rp32rb",
      period: "per bulan",
      note: "Sistem angkatan, maksimal 3 orang",
      icon: <UsersIcon size={24} className="text-primary" />,
      iconBg: "bg-orange-50",
      tag: "Grup Kecil",
      tagClass: "bg-orange-100 text-primary border border-orange-200",
      featured: true,
      features: [
        "Grup dibatasi maksimal 3 orang agar tetap intensif",
        "Jadwal sudah ditentukan agar belajar lebih konsisten",
        "Kurikulum terstruktur dari dasar hingga tingkat lanjut",
        "Ruang diskusi dan saling berbagi pengalaman antar peserta"
      ],
      cocok: "Ingin belajar terjangkau namun tetap interaktif dan terarah",
      btnVariant: "default" as const
    },
    {
      name: "Akses Mandiri",
      tagline: "Kebebasan akses ke seluruh materi edukasi premium",
      price: billing === 'month' ? "Rp25rb" : "Rp20rb",
      period: "per bulan",
      note: "Akses selamanya, belajar kapan saja",
      icon: <BookOpen size={24} className="text-slate-600" />,
      iconBg: "bg-slate-100",
      tag: "Mandiri",
      tagClass: "bg-slate-100 text-slate-700 border border-slate-200",
      features: [
        "Buku elektronik finansial yang lengkap dan terstruktur",
        "Lebih dari 50 video pembelajaran kualitas tinggi",
        "Akses penuh tanpa batas waktu harian",
        "Pembaruan materi berkala mengikuti tren keuangan terbaru"
      ],
      cocok: "Ingin belajar mandiri dengan biaya paling hemat",
      btnVariant: "outline" as const
    }
  ];

  return (
    <section className="pt-10 pb-32 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <div className="text-[11px] font-bold tracking-widest text-primary uppercase">Pilih Paketmu</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Investasi terbaik dimulai dari diri sendiri</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Tiga cara belajar, satu tujuan pasti: keuanganmu jauh lebih sehat dan terencana.
          </p>

          <div className="mt-8 flex items-center justify-center p-1.5 bg-white border border-slate-200 rounded-xl w-fit mx-auto shadow-sm">
            <button 
              onClick={() => setBilling('month')}
              className={cn(
                "px-8 py-2.5 text-sm font-bold rounded-lg transition-all",
                billing === 'month' ? "bg-secondary text-white shadow-md" : "text-slate-500 hover:text-slate-900"
              )}
            >
              Bulanan
            </button>
            <button 
              onClick={() => setBilling('year')}
              className={cn(
                "px-8 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center gap-2",
                billing === 'year' ? "bg-secondary text-white shadow-md" : "text-slate-500 hover:text-slate-900"
              )}
            >
              Tahunan
              <span className={cn(
                "text-[10px] px-2 py-0.5 rounded-full",
                billing === 'year' ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
              )}>Hemat 20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => {
            const isFeatured = hoveredIndex === i;
            return (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(1)}
              className={cn(
                "relative bg-white rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-500 cursor-pointer",
                isFeatured ? "border-2 border-primary shadow-2xl shadow-primary/10 z-10 scale-105" : "border border-slate-200 shadow-lg shadow-slate-200/50 mt-4 lg:mt-6 scale-100 opacity-90"
              )}
            >
              {isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md transition-all duration-300">
                  Pilihan Tepat
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300", plan.iconBg)}>
                  {plan.icon}
                </div>
                <div className={cn("inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full", plan.tagClass)}>
                  {plan.tag}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{plan.tagline}</p>
              </div>

              <div className="mb-2 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                <span className="text-sm font-bold text-slate-400">{plan.period}</span>
              </div>
              <p className="text-xs font-bold text-slate-400 mb-8">{plan.note}</p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300", isFeatured ? "bg-orange-100 text-primary" : "bg-slate-100 text-secondary")}>
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className={cn("p-5 rounded-2xl mb-8 border transition-colors duration-300", isFeatured ? "bg-orange-50/50 border-orange-100" : "bg-slate-50 border-slate-100")}>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Cocok untuk kamu yang</div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{plan.cocok}</p>
              </div>

              <Button 
                variant={plan.btnVariant} 
                className={cn(
                  "w-full py-6 text-base font-bold rounded-xl transition-all shadow-sm group",
                  isFeatured ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "border-slate-200 text-slate-700 hover:border-secondary hover:text-secondary hover:bg-slate-50"
                )}
              >
                {plan.tag === 'VIP' ? "Pesan Sesi Sekarang" : plan.tag === 'Mandiri' ? "Mulai Belajar" : "Daftar Sekarang"}
              </Button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
