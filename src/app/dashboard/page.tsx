"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertTriangle, 
  Video, 
  Wallet, 
  CreditCard, 
  PieChart, 
  ArrowRight,
  Clock,
  Calendar,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-10 space-y-8 max-w-7xl mx-auto">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Ringkasan Finansial</h1>
          <p className="text-slate-500 font-medium">Pantau performa keuangan Anda secara real-time.</p>
        </div>

        {/* Main Metrics Row */}
        <div className="grid md:grid-cols-3 gap-6">
          <MainMetricCard 
            label="TOTAL SALDO" 
            value="Rp 145.250.000" 
            sub="+2.4% dari bulan lalu" 
            trend="up" 
            icon={<Wallet className="text-secondary" size={20} />}
          />
          <MainMetricCard 
            label="PENGELUARAN BULAN INI" 
            value="Rp 12.400.000" 
            sub="-5.1% dibandingkan batas anggaran" 
            trend="down" 
            icon={<CreditCard className="text-slate-400" size={20} />}
          />
          <MainMetricCard 
            label="TABUNGAN" 
            value="Rp 8.500.000" 
            sub="70% Target" 
            trend="neutral" 
            icon={<PieChart className="text-secondary" size={20} />}
            progress={70}
          />
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Alert/Warning Card */}
            <div className="bg-white border border-rose-100 p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900">Peringatan Utang Kritis</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Rasio utang terhadap pendapatan Anda saat ini berada di angka 45%, melebihi ambang batas sehat (30%). Tindakan segera diperlukan untuk restrukturisasi kewajiban.
                  </p>
                </div>
              </div>
              <div className="pl-14">
                <Button className="bg-secondary/5 hover:bg-secondary/10 text-secondary font-bold h-10 px-6 rounded-lg text-xs border border-secondary/10">
                  Lihat Rencana Aksi
                </Button>
              </div>
            </div>

            {/* Advanced Financial Metrics */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-lg">Metrik Finansial Lanjutan</h3>
                <button className="text-xs font-bold text-secondary flex items-center gap-1">Unduh Laporan <ArrowRight size={14} /></button>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2 p-6 bg-slate-50/50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rasio Likuiditas</div>
                  <div className="text-2xl font-bold text-slate-900">1.5x</div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Sehat</div>
                </div>
                <div className="space-y-2 p-6 bg-slate-50/50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ROI Portofolio</div>
                  <div className="text-2xl font-bold text-slate-900">8.2%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">YTD</div>
                </div>
                <div className="space-y-2 p-6 bg-slate-50/50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dana Darurat</div>
                  <div className="text-2xl font-bold text-slate-900">4 Bulan</div>
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Kurang 2 bulan</div>
                </div>
                <div className="space-y-2 p-6 bg-slate-50/50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Arus Kas Bersih</div>
                  <div className="text-2xl font-bold text-slate-900">Rp 4.1M</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bulan berjalan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Scheduled Coaching */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Video size={18} className="text-secondary" />
                <h3 className="font-bold text-slate-900">Sesi Coaching Terjadwal</h3>
              </div>
              
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">Strategi Investasi Q3</div>
                  <div className="text-[11px] text-slate-400 font-medium">Bersama Dr. Andreas Halim, CFA</div>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-secondary">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Calendar size={14} />
                  </div>
                  Besok, 14:00 WIB
                </div>
              </div>
              
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl shadow-md">
                Gabung Sesi (Zoom)
              </Button>
            </div>

            {/* Recommended Materials */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Materi Rekomendasi</h3>
                <button className="text-[10px] font-bold text-secondary uppercase tracking-widest">Lihat Semua</button>
              </div>

              <div className="space-y-4">
                <RecommendedItem 
                  title="Analisis Fundamental Lanjutan" 
                  desc="Memahami rasio-rasio kunci untuk evaluasi valuasi perusahaan di sektor teknologi."
                  tag="ARTIKEL"
                  tagColor="bg-blue-50 text-blue-600"
                />
                <RecommendedItem 
                  title="Manajemen Risiko Pajak" 
                  desc="Strategi legal untuk optimasi SPT tahunan bagi profesional independen."
                  tag="VIDEO"
                  tagColor="bg-amber-50 text-amber-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const MainMetricCard = ({ label, value, sub, trend, icon, progress }: any) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
    <div className="flex items-center justify-between">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
        {icon}
      </div>
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-bold text-slate-900 tracking-tight">{value}</div>
      <div className={cn(
        "flex items-center gap-1 text-[11px] font-bold",
        trend === 'up' ? "text-emerald-600" : trend === 'down' ? "text-rose-600" : "text-slate-400"
      )}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : trend === 'down' ? <ArrowDownRight size={14} /> : null}
        {sub}
      </div>
    </div>
    {progress !== undefined && (
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-slate-400">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-1.5 bg-slate-100" />
      </div>
    )}
  </div>
);

const RecommendedItem = ({ title, desc, tag, tagColor }: any) => (
  <div className="group cursor-pointer space-y-3 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
    <div className="flex items-center justify-between">
      <span className={cn("px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase", tagColor)}>
        {tag}
      </span>
      <ExternalLink size={12} className="text-slate-300 group-hover:text-secondary transition-colors" />
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors">{title}</h4>
      <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-2">{desc}</p>
    </div>
  </div>
);
