"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Play, 
  Clock, 
  ChevronRight, 
  Search, 
  FileText, 
  CheckCircle2, 
  Download,
  ArrowLeft,
  Circle,
  Video
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Fundamental Akuntansi",
    desc: "Memahami laporan keuangan dasar, neraca, dan laporan laba rugi untuk pengambilan keputusan strategis.",
    level: "DASAR",
    duration: "2.5 Jam",
    icon: <BookOpen size={18} />,
    levelColor: "bg-slate-100 text-slate-600"
  },
  {
    id: 2,
    title: "Analisis Investasi Korporat",
    desc: "Metodologi evaluasi proyek, perhitungan NPV, IRR, dan mitigasi risiko investasi jangka panjang.",
    level: "MENENGAH",
    duration: "4.0 Jam",
    icon: <TrendingUp size={18} />,
    levelColor: "bg-blue-50 text-blue-600"
  },
  {
    id: 3,
    title: "Struktur Modal Lanjutan",
    desc: "Optimalisasi struktur modal, kebijakan dividen, dan implikasi pajak pada pembiayaan perusahaan.",
    level: "LANJUTAN",
    duration: "5.5 Jam",
    icon: <Building2 size={18} />,
    levelColor: "bg-amber-50 text-amber-600"
  }
];

import { TrendingUp, Building2 } from "lucide-react";

export default function MateriPage() {
  const [view, setView] = useState<"list" | "detail">("list");

  return (
    <DashboardLayout>
      <div className="p-8 md:p-10 space-y-10 max-w-7xl mx-auto">
        {view === "list" ? (
          <>
            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Pusat Edukasi</h1>
              <p className="text-slate-500 font-medium text-lg">Tingkatkan literasi finansial Anda melalui modul terstruktur.</p>
            </div>

            {/* Continue Learning Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">Lanjutkan Belajar</div>
                  <h2 className="text-2xl font-bold text-slate-900">Manajemen Arus Kas</h2>
                  <p className="text-sm text-slate-500 font-medium">Modul 3: Strategi Optimalisasi Likuiditas Perusahaan</p>
                </div>
                <Button 
                  onClick={() => setView("detail")}
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 px-8 rounded-xl shadow-sm"
                >
                  Lanjutkan Sesi
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2 bg-slate-100" />
              </div>
            </div>

            {/* Modules List Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 pb-4">Modul Tersedia</h3>
              <div className="flex gap-8">
                {["Semua", "Terbaru", "Populer"].map((t) => (
                  <button key={t} className={cn(
                    "pb-4 text-sm font-bold transition-all relative",
                    t === "Semua" ? "text-secondary" : "text-slate-400 hover:text-slate-600"
                  )}>
                    {t}
                    {t === "Semua" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Modules */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m) => (
                <div key={m.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-secondary/5 group-hover:text-secondary transition-colors">
                      {m.icon}
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold tracking-widest", m.levelColor)}>
                      {m.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{m.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
                    {m.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <Clock size={14} />
                      {m.duration}
                    </div>
                    <button 
                      onClick={() => setView("detail")}
                      className="text-xs font-bold text-secondary flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Mulai Modul <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <MateriDetailView onBack={() => setView("list")} />
        )}
      </div>
    </DashboardLayout>
  );
}

const MateriDetailView = ({ onBack }: { onBack: () => void }) => (
  <div className="space-y-8 pb-20">
    {/* Navigation & Search */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
        <ArrowLeft size={16} />
        Kembali ke Pusat Edukasi
      </button>
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Cari materi..." 
          className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium w-full md:w-80 focus:outline-none focus:ring-1 focus:ring-secondary shadow-sm"
        />
      </div>
    </div>

    <div className="grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-8">
        {/* Video Player Mock */}
        <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
              <Play size={24} fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-lg">
            45:00
          </div>
        </div>

        {/* Content Heading */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full tracking-widest">LANJUTAN</span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <Clock size={14} />
              45 Menit
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Manajemen Utang Tingkat Lanjut</h1>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Materi ini membahas strategi komprehensif untuk merestrukturisasi portofolio kewajiban korporasi dan individu berpenghasilan tinggi, meminimalkan risiko likuiditas di tengah volatilitas suku bunga.
          </p>
        </div>

        {/* Article Content */}
        <div className="space-y-10 prose prose-slate max-w-none">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">1. Anatomi Restrukturisasi</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Restrukturisasi utang bukan sekadar menunda pembayaran, melainkan mendesain ulang arsitektur modal. Hal ini melibatkan negosiasi ulang covenant, penyesuaian tenor, dan dalam beberapa kasus, debt-to-equity swaps. Pemahaman mendalam tentang siklus arus kas operasional adalah fondasi utama sebelum mengajukan proposal kepada kreditor.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <ul className="space-y-3 m-0 list-none">
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Identifikasi aset non-inti yang dapat dilikuidasi.
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Proyeksi skenario stress-test pada arus kas masa depan.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">2. Instrumen Hedging Suku Bunga</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Untuk utang dengan suku bunga mengambang (floating rate), risiko lonjakan beban bunga dapat mematikan likuiditas. Penggunaan instrumen derivatif seperti Interest Rate Swaps (IRS) menjadi krusial untuk mengunci biaya dana. Keputusan untuk melakukan hedging harus didasarkan pada analisis yield curve dan proyeksi makroekonomi jangka menengah.
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <BookOpen size={18} className="text-secondary" />
            DAFTAR MATERI
          </h4>
          <div className="space-y-1">
            <LessonItem title="Pengantar Kewajiban" duration="15 Menit" completed />
            <LessonItem title="Manajemen Utang Tingkat Lanjut" duration="45 Menit" active />
            <LessonItem title="Studi Kasus: Krisis Likuiditas" duration="30 Menit" locked />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <FileText size={18} className="text-secondary" />
            MATERI TERKAIT
          </h4>
          <div className="space-y-4">
            <DownloadItem title="Template Kalkulator Restrukturisasi" info="PDF • 2.4 MB" />
            <DownloadItem title="Panduan Analisis Yield Curve" info="PDF • 1.8 MB" />
          </div>
        </div>
      </div>
    </div>

    {/* Floating Footer Bar */}
    <div className="fixed bottom-0 left-64 right-0 h-20 bg-white/80 backdrop-blur-md border-t border-slate-200 px-10 flex items-center justify-between z-40">
      <div className="flex items-center gap-8 flex-1">
        <div className="space-y-1.5 flex-1 max-w-xs">
          <div className="flex justify-between text-[10px] font-bold text-slate-400">
            <span>Progres Modul</span>
            <span>33% Selesai</span>
          </div>
          <Progress value={33} className="h-1.5 bg-slate-100" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="h-11 px-6 rounded-lg border-slate-200 text-slate-600 font-bold gap-2">
          <Download size={16} /> Unduh PDF
        </Button>
        <Button className="h-11 px-8 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold gap-2 shadow-sm shadow-primary/20">
          <CheckCircle2 size={16} /> Tandai Selesai
        </Button>
      </div>
    </div>
  </div>
);

const LessonItem = ({ title, duration, completed = false, active = false, locked = false }: any) => (
  <div className={cn(
    "flex items-start gap-3 p-3 rounded-xl transition-colors cursor-pointer group",
    active ? "bg-secondary/5 border border-secondary/10" : "hover:bg-slate-50"
  )}>
    <div className="mt-0.5">
      {completed ? (
        <CheckCircle2 size={18} className="text-emerald-500" />
      ) : active ? (
        <Circle size={18} className="text-secondary" />
      ) : (
        <Circle size={18} className="text-slate-300" />
      )}
    </div>
    <div className="flex-1">
      <div className={cn("text-xs font-bold transition-colors", active ? "text-secondary" : "text-slate-700")}>{title}</div>
      <div className="text-[10px] text-slate-400 font-medium mt-0.5">{duration}</div>
    </div>
  </div>
);

const DownloadItem = ({ title, info }: { title: string, info: string }) => (
  <div className="flex items-start gap-3 group cursor-pointer">
    <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-100 transition-colors">
      <FileText size={18} />
    </div>
    <div className="flex-1">
      <div className="text-xs font-bold text-slate-700 group-hover:text-secondary transition-colors line-clamp-1">{title}</div>
      <div className="text-[10px] text-slate-400 font-medium mt-0.5">{info}</div>
    </div>
  </div>
);
