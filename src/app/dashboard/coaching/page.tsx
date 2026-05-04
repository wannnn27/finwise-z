"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Search, 
  ChevronDown, 
  User, 
  Clock, 
  CircleDollarSign, 
  TrendingUp, 
  ShieldCheck, 
  CreditCard,
  Building2,
  Check
} from "lucide-react";
import Image from "next/image";

const sessions = [
  {
    id: 1,
    tag: "INVESTASI",
    title: "Strategi Portofolio Saham Eksekutif",
    coach: "Budi Santoso, CFA",
    price: "Rp 249.000",
    duration: "60 menit",
    tagColor: "bg-blue-100 text-blue-700",
    icon: <TrendingUp size={16} />
  },
  {
    id: 2,
    tag: "PERENCANAAN",
    title: "Audit Finansial Keluarga Menengah",
    coach: "Siti Rahmawati, CFP",
    price: "Rp 149.000",
    duration: "45 menit",
    tagColor: "bg-purple-100 text-purple-700",
    icon: <Building2 size={16} />
  },
  {
    id: 3,
    tag: "RISIKO",
    title: "Optimalisasi Proteksi Aset & Asuransi",
    coach: "Hendra Wijaya, ChFC",
    price: "Rp 199.000",
    duration: "60 menit",
    tagColor: "bg-amber-100 text-amber-700",
    icon: <ShieldCheck size={16} />
  },
  {
    id: 4,
    tag: "KREDIT",
    title: "Restrukturisasi Hutang & Leverage",
    coach: "Anita Kusuma, CPA",
    price: "Rp 299.000",
    duration: "90 menit",
    tagColor: "bg-rose-100 text-rose-700",
    icon: <CreditCard size={16} />
  }
];

export default function CoachingPage() {
  const [view, setView] = useState<"sessions" | "plans">("sessions");

  return (
    <DashboardLayout>
      <div className="p-8 md:p-10 space-y-10 max-w-7xl mx-auto">
        {view === "sessions" ? (
          <>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Coaching Clinic: Pilih Sesi</h1>
                <p className="text-slate-500 font-medium text-lg">Tingkatkan literasi dan strategi finansial Anda bersama para ahli profesional.</p>
              </div>
              <Button 
                onClick={() => setView("plans")}
                variant="outline" 
                className="border-secondary text-secondary font-bold hover:bg-secondary/5 self-start h-11 px-6 rounded-lg"
              >
                Lihat Paket Layanan
              </Button>
            </div>

            {/* Filter Section */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-8">
              <FilterSelect label="Topik" placeholder="Semua Topik" />
              <FilterSelect label="Harga" placeholder="Semua Harga" />
              <FilterSelect label="Durasi" placeholder="Semua Durasi" />
            </div>

            {/* Sessions Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session) => (
                <SessionCard key={session.id} {...session} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Plans Selection Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto py-10">
              <Button 
                onClick={() => setView("sessions")}
                variant="ghost" 
                className="text-slate-400 hover:text-slate-900 font-bold mb-4"
              >
                ← Kembali ke Pilih Sesi
              </Button>
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Pilih Layanan Sesuai Kebutuhan Anda</h1>
              <p className="text-slate-500 font-medium leading-relaxed">
                Kami menyediakan berbagai pilihan metode pembelajaran dan pendampingan untuk membantu Anda mencapai tujuan finansial dengan lebih efektif.
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 pb-10">
              <PlanCard 
                title="VIP Private Coaching" 
                desc="Pendampingan eksklusif 1-on-1 dengan fokus 100% pada kebutuhan Anda."
                suitable="Cocok untuk: Anda yang ingin konsultasi personal dan mendalam."
                features={["Jadwal fleksibel", "Sesi 1-on-1", "Fokus pada kasus individu", "Prioritas akses mentor"]}
                recommended
              />
              <PlanCard 
                title="Small Group Coaching" 
                desc="Belajar bersama dalam grup kecil yang terarah dan interaktif."
                suitable="Cocok untuk: Anda yang ingin belajar bersama dan lebih hemat biaya."
                features={["Grup terbatas (3-5 orang)", "Interaksi lebih dinamis", "Kurikulum terstruktur", "Diskusi antar peserta"]}
              />
              <PlanCard 
                title="Self-Learning Access" 
                desc="Akses mandiri ke materi edukasi premium kapan saja."
                suitable="Cocok untuk: Anda yang ingin belajar mandiri dengan biaya lebih terjangkau."
                features={["E-book finansial", "Video dan Webinar", "Materi kapan saja", "Update berkala"]}
              />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

const FilterSelect = ({ label, placeholder }: { label: string, placeholder: string }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
    <button className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-slate-300 transition-colors">
      {placeholder}
      <ChevronDown size={16} className="text-slate-400" />
    </button>
  </div>
);

const SessionCard = ({ tag, title, coach, price, duration, tagColor, icon }: any) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
    <div className="p-8 flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold tracking-widest", tagColor)}>
          {tag}
        </span>
        <div className="text-slate-300 group-hover:text-primary transition-colors">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-secondary transition-colors">
        {title}
      </h3>

      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
          <User size={20} />
        </div>
        <div className="text-sm font-bold text-slate-700">{coach}</div>
      </div>

      <div className="space-y-2 pt-4">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-500">
          <CircleDollarSign size={16} className="text-secondary" />
          {price}
        </div>
        <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-500">
          <Clock size={16} className="text-secondary" />
          {duration}
        </div>
      </div>
    </div>
    
    <div className="p-6 pt-0">
      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl shadow-sm">
        Pilih Sesi
      </Button>
    </div>
  </div>
);

const PlanCard = ({ title, desc, suitable, features, recommended = false }: any) => (
  <div className={cn(
    "bg-white rounded-2xl border p-8 flex flex-col transition-all relative overflow-hidden",
    recommended ? "border-secondary ring-1 ring-secondary/20 shadow-lg shadow-secondary/5" : "border-slate-200 shadow-sm"
  )}>
    {recommended && (
      <div className="absolute top-0 right-0 px-4 py-1.5 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
        Populer
      </div>
    )}
    
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
      
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p className="text-xs font-bold text-secondary leading-relaxed">{suitable}</p>
      </div>

      <div className="space-y-4 pt-4">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fitur Layanan:</div>
        <div className="space-y-3">
          {features.map((f: string, i: number) => (
            <div key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Check size={12} />
              </div>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-10">
      <Button className={cn(
        "w-full h-12 font-bold rounded-xl transition-all shadow-sm",
        recommended 
          ? "bg-primary hover:bg-primary/90 text-white" 
          : "bg-white border-2 border-secondary/20 text-secondary hover:bg-secondary/5"
      )}>
        Pilih Paket
      </Button>
    </div>
  </div>
);
