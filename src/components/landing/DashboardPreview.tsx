export const DashboardPreview = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ruang Kontrol Finansialmu</h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            Begitu masuk, kamu akan disambut dengan dashboard personal yang memvisualisasikan seluruh target, utang, dan aktivitasmu secara transparan.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/80 mx-auto transform hover:-translate-y-1 transition-transform duration-500">
          {/* Top Window Bar (Mac style) */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 border-b border-slate-200 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-md shadow-sm">
              Dashboard Premium
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] bg-slate-50">
            {/* Sidebar Mockup */}
            <div className="hidden md:flex flex-col bg-white border-r border-slate-200 min-h-[500px]">
              <div className="p-6">
                <span className="text-xl font-black tracking-tighter">
                  <span className="text-secondary">Finwize</span>
                  <span className="text-primary ml-1">Z</span>
                </span>
              </div>
              <div className="px-4 py-2 space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Menu Utama</div>
                <div className="flex items-center gap-3 px-3 py-2 bg-slate-100 text-slate-900 rounded-lg text-sm font-semibold">
                  <LayoutGrid size={16} /> Dashboard
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-sm font-medium">
                  <TrendingUp size={16} /> Tracking
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-sm font-medium">
                  <Users size={16} /> Coaching
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-sm font-medium">
                  <BookOpen size={16} /> Materi
                </div>
              </div>
              <div className="mt-auto p-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                    RR
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Raehanah</div>
                    <div className="text-[10px] text-primary font-bold">Premium</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Mockup */}
            <div className="p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Selamat siang, Raehanah</h3>
                  <div className="text-sm text-slate-500 font-medium mt-1">Berikut ringkasan finansialmu hari ini.</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Saldo Bersih</div>
                  <div className="text-xl font-bold text-slate-900 mb-2">Rp 2.450.000</div>
                  <div className="text-xs font-bold text-emerald-600">↗ +12% bulan ini</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Utang PayLater</div>
                  <div className="text-xl font-bold text-slate-900 mb-2">Rp 850.000</div>
                  <div className="text-xs font-bold text-rose-600 flex items-center gap-1"><AlertCircle size={12}/> Jatuh tempo 12 Mei</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Target Tercapai</div>
                  <div className="text-xl font-bold text-slate-900 mb-2">65%</div>
                  <div className="text-xs font-bold text-secondary">↗ Dana Darurat</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-bold text-slate-900 mb-6 flex justify-between">
                    Target Keuangan <span className="text-primary text-[10px] uppercase tracking-widest">Lihat Semua</span>
                  </div>
                  <div className="space-y-4">
                    <ProgressItem label="Dana darurat (3 bln)" percent={65} color="bg-primary" />
                    <ProgressItem label="Tabungan liburan" percent={38} color="bg-slate-300" />
                    <ProgressItem label="Lunasi PayLater" percent={80} color="bg-slate-800" />
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-bold text-slate-900 mb-6">Aktivitas Terbaru</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><CheckCircle2 size={14} className="text-slate-600"/></div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Modul PayLater Selesai</div>
                        <div className="text-[10px] font-medium text-slate-400">Hari ini, 09.15</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><Users size={14} className="text-slate-600"/></div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Sesi Coaching dgn Dr. Andi</div>
                        <div className="text-[10px] font-medium text-slate-400">Kemarin, 19.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgressItem = ({ label, percent, color }: { label: string, percent: number, color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold text-slate-600">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full transition-all duration-500", color)} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

import { LayoutGrid, TrendingUp, Users, BookOpen, AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
