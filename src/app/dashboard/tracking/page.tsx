"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Plus, 
  Search, 
  ArrowUpRight, 
  ArrowDownLeft, 
  AlertTriangle, 
  CreditCard, 
  PieChart, 
  Calendar,
  MoreHorizontal,
  LayoutGrid,
  Home,
  TrendingUp
} from "lucide-react";

type Tab = "ringkasan" | "utang" | "anggaran";

export default function TrackingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("ringkasan");

  return (
    <DashboardLayout>
      <div className="p-8 md:p-10 space-y-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tracker Transaksi Anda</h1>
            <p className="text-slate-500 font-medium">Pantau dan kelola arus kas Anda dengan presisi.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-6 rounded-lg shadow-sm flex items-center gap-2 self-start">
            <Plus size={18} />
            Tambah Transaksi
          </Button>
        </div>

        {/* Custom Tabs */}
        <div className="border-b border-slate-200">
          <div className="flex gap-8">
            <TabButton 
              active={activeTab === "ringkasan"} 
              onClick={() => setActiveTab("ringkasan")} 
              label="Ringkasan Transaksi" 
            />
            <TabButton 
              active={activeTab === "utang"} 
              onClick={() => setActiveTab("utang")} 
              label="Manajemen Utang" 
            />
            <TabButton 
              active={activeTab === "anggaran"} 
              onClick={() => setActiveTab("anggaran")} 
              label="Perencanaan Anggaran" 
            />
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "ringkasan" && <RingkasanView />}
        {activeTab === "utang" && <UtangView />}
        {activeTab === "anggaran" && <AnggaranView />}
      </div>
    </DashboardLayout>
  );
}

const TabButton = ({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) => (
  <button 
    onClick={onClick}
    className={cn(
      "pb-4 text-sm font-bold transition-all relative",
      active ? "text-primary" : "text-slate-400 hover:text-slate-600"
    )}
  >
    {label}
    {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
  </button>
);

const RingkasanView = () => (
  <div className="grid lg:grid-cols-[1fr_320px] gap-8">
    <div className="space-y-6">
      {/* Sub-tabs & Filter */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex gap-2">
          {["Semua", "Pemasukan", "Pengeluaran"].map((t) => (
            <button key={t} className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-full transition-colors",
              t === "Semua" ? "bg-secondary text-white" : "text-slate-500 hover:bg-slate-100"
            )}>
              {t}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari transaksi..." 
            className="pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-48"
          />
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4">Deskripsi</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Jumlah (Rp)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <TransactionRow date="12 Okt 2023" desc="Pembayaran Klien A" cat="Pendapatan" status="SELESAI" amount="+15.000.000" />
            <TransactionRow date="10 Okt 2023" desc="Lisensi Software" cat="Operasional" status="SELESAI" amount="-2.500.000" />
            <TransactionRow date="08 Okt 2023" desc="Makan Siang Tim" cat="Konsumsi" status="PROSES" amount="-450.000" />
            <TransactionRow date="05 Okt 2023" desc="Tagihan Internet" cat="Utilitas" status="SELESAI" amount="-1.200.000" />
            <TransactionRow date="01 Okt 2023" desc="Investasi Reksadana" cat="Investasi" status="SELESAI" amount="-5.000.000" />
          </tbody>
        </table>
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Menampilkan 1-5 dari 42 transaksi</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 px-3 rounded-md text-[11px]">Sebelumnya</Button>
            <Button variant="outline" size="sm" className="h-8 px-3 rounded-md text-[11px]">Selanjutnya</Button>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      {/* Budget Status Sidebar */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Calendar size={16} className="text-secondary" />
          Status Anggaran Bulan Ini
        </div>
        <div className="space-y-5">
          <MiniProgress label="Operasional" val="2.5M" target="10M" pct={25} color="bg-secondary" />
          <MiniProgress label="Pemasaran" val="4M" target="5M" pct={80} color="bg-primary" />
          <MiniProgress label="Pengembangan" val="1M" target="8M" pct={12} color="bg-slate-400" />
        </div>
        <Button variant="outline" className="w-full text-xs font-bold text-secondary border-secondary/20 bg-secondary/5 hover:bg-secondary/10">
          Atur Anggaran
        </Button>
      </div>

      {/* Total Active Balance Card */}
      <div className="bg-secondary p-6 rounded-xl shadow-md text-white space-y-4">
        <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Total Saldo Aktif</div>
        <div className="text-3xl font-bold">Rp 124.500.000</div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
          <ArrowUpRight size={14} />
          +12% dari bulan lalu
        </div>
      </div>
    </div>
  </div>
);

const UtangView = () => (
  <div className="space-y-8">
    {/* Alert Warning */}
    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-4">
      <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
      <div className="text-sm">
        <div className="font-bold text-amber-900 mb-1">Peringatan Pembayaran Mendatang</div>
        <p className="text-amber-800 font-medium">Tagihan Kartu Kredit Bank Mega jatuh tempo dalam 3 hari (Rp 4.500.000). Pastikan dana tersedia di rekening utama.</p>
      </div>
    </div>

    {/* Metrics Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      <MetricCard2 
        label="Total Utang" 
        value="Rp 125.000.000" 
        sub="+2.5% dari bulan lalu" 
        trend="up" 
        icon={<CreditCard className="text-rose-600" size={20} />}
      />
      <MetricCard2 
        label="Rasio Utang (DTI)" 
        value="32%" 
        sub="Batas aman: < 35%" 
        trend="safe" 
        icon={<PieChart className="text-secondary" size={20} />}
        progress={32}
      />
      <MetricCard2 
        label="Rata-rata Sisa Tenor" 
        value="24 Bulan" 
        sub="Pelunasan tercepat: 3 bulan" 
        trend="neutral" 
        icon={<Calendar className="text-slate-600" size={20} />}
      />
    </div>

    {/* Active Debts Table */}
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">Daftar Utang Aktif</h3>
        <Button size="sm" className="bg-secondary text-white font-bold rounded-lg text-xs h-9 px-4">
          <Plus size={14} className="mr-2" /> Tambah Data
        </Button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <th className="px-6 py-4">Nama Kreditur</th>
            <th className="px-6 py-4">Sisa Pokok</th>
            <th className="px-6 py-4 text-center">Bunga (P.A)</th>
            <th className="px-6 py-4">Jatuh Tempo</th>
            <th className="px-6 py-4">Progress Pelunasan</th>
            <th className="px-6 py-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <DebtRow name="Kartu Kredit BCA" type="Konsumtif" amount="Rp 15.000.000" rate="21%" due="15 Mar 2024" pct={45} />
          <DebtRow name="KKB Mandiri" type="Aset Produktif" amount="Rp 85.000.000" rate="4.5%" due="10 Apr 2024" pct={70} />
          <DebtRow name="KPR BNI" type="Aset Tetap" amount="Rp 25.000.000" rate="7.2%" due="25 Mar 2024" pct={90} />
        </tbody>
      </table>
    </div>
  </div>
);

const AnggaranView = () => (
  <div className="grid lg:grid-cols-[1fr_320px] gap-8">
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <PieChart size={20} className="text-secondary" />
            Ikhtisar Bulanan - November 2023
          </h3>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-widest">Aktif</span>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <BudgetStat label="Total Dianggarkan" val="Rp 15.000.000" />
          <BudgetStat label="Total Terpakai" val="Rp 8.250.000" />
          <BudgetStat label="Sisa Anggaran" val="Rp 6.750.000" highlight />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-bold text-slate-500">
            <span>Penggunaan Anggaran (55%)</span>
            <span>Target: Rp 15.000.000</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '55%' }} />
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 font-bold text-slate-900 flex items-center gap-2">
          <LayoutGrid size={18} className="text-secondary" />
          Rincian Kategori
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4 text-center">Dialokasikan</th>
              <th className="px-6 py-4 text-center">Terpakai</th>
              <th className="px-6 py-4 text-right">Sisa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <CategoryRow label="Kebutuhan Pokok" icon={<Home size={14} />} alloc="Rp 5.000.000" spent="Rp 4.500.000" remaining="Rp 500.000" color="bg-secondary" />
            <CategoryRow label="Transportasi" icon={<Plus size={14} />} alloc="Rp 2.000.000" spent="Rp 1.200.000" remaining="Rp 800.000" color="bg-amber-500" />
            <CategoryRow label="Investasi & Tabungan" icon={<TrendingUp size={14} />} alloc="Rp 4.000.000" spent="Rp 0" remaining="Rp 4.000.000" color="bg-primary" />
            <CategoryRow label="Gaya Hidup" icon={<Plus size={14} />} alloc="Rp 3.000.000" spent="Rp 2.500.000" remaining="Rp 500.000" color="bg-rose-500" />
          </tbody>
        </table>
      </div>
    </div>

    {/* Analytics Sidebar */}
    <div className="bg-secondary p-8 rounded-xl shadow-md text-white space-y-6">
      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
        <PieChart size={20} className="text-white" />
      </div>
      <h3 className="text-xl font-bold">Insight Analitik</h3>
      <p className="text-white/80 text-sm leading-relaxed font-medium">
        Pengeluaran kategori 'Gaya Hidup' Anda mendekati batas alokasi. Pertimbangkan untuk menunda pembelian tidak esensial minggu ini.
      </p>
      <div className="pt-4">
        <Button className="w-full bg-white text-secondary font-bold hover:bg-slate-100 h-11">
          Sesuaikan Anggaran
        </Button>
      </div>
    </div>
  </div>
);

const TransactionRow = ({ date, desc, cat, status, amount }: { date: string, desc: string, cat: string, status: string, amount: string }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 text-sm font-medium text-slate-500">{date}</td>
    <td className="px-6 py-4 text-sm font-bold text-slate-900">{desc}</td>
    <td className="px-6 py-4 text-sm font-medium text-slate-500">{cat}</td>
    <td className="px-6 py-4">
      <span className={cn(
        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
        status === "SELESAI" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
      )}>
        {status}
      </span>
    </td>
    <td className={cn(
      "px-6 py-4 text-sm font-bold text-right",
      amount.startsWith('+') ? "text-emerald-600" : "text-rose-600"
    )}>
      {amount}
    </td>
  </tr>
);

const MiniProgress = ({ label, val, target, pct, color }: { label: string, val: string, target: string, pct: number, color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span className="text-slate-700 font-bold">{label}</span>
      <span className="text-slate-400 font-medium">Rp {val} / Rp {target}</span>
    </div>
    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={cn("h-full transition-all duration-500 rounded-full", color)} style={{ width: `${pct}%` }} />
    </div>
  </div>
);

const MetricCard2 = ({ label, value, sub, trend, icon, progress }: { label: string, value: string, sub: string, trend: string, icon: React.ReactNode, progress?: number }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
    <div className="flex items-center justify-between">
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className={cn(
        "text-[10px] font-bold mt-1",
        trend === "up" ? "text-rose-600" : trend === "safe" ? "text-emerald-600" : "text-slate-400"
      )}>
        {sub}
      </div>
    </div>
    {progress !== undefined && (
      <div className="space-y-1.5">
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-secondary rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>
    )}
  </div>
);

const DebtRow = ({ name, type, amount, rate, due, pct }: { name: string, type: string, amount: string, rate: string, due: string, pct: number }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
          <CreditCard size={14} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{name}</div>
          <div className="text-[10px] text-slate-400 font-medium">{type}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-sm font-bold text-slate-700">{amount}</td>
    <td className="px-6 py-4 text-sm font-bold text-slate-900 text-center">{rate}</td>
    <td className="px-6 py-4 text-sm font-medium text-slate-500">{due}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-secondary rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[10px] font-bold text-slate-900">{pct}%</span>
      </div>
    </td>
    <td className="px-6 py-4">
      <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={18} /></button>
    </td>
  </tr>
);

const BudgetStat = ({ label, val, highlight }: { label: string, val: string, highlight?: boolean }) => (
  <div className="space-y-2">
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    <div className={cn("text-2xl font-bold", highlight ? "text-secondary" : "text-slate-900")}>{val}</div>
  </div>
);

const CategoryRow = ({ label, icon, alloc, spent, remaining, color }: { label: string, icon: React.ReactNode, alloc: string, spent: string, remaining: string, color: string }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white", color)}>
          {icon}
        </div>
        <div className="text-sm font-bold text-slate-900">{label}</div>
      </div>
    </td>
    <td className="px-6 py-4 text-sm font-bold text-slate-700 text-center">{alloc}</td>
    <td className="px-6 py-4 text-sm font-bold text-slate-900 text-center">{spent}</td>
    <td className="px-6 py-4 text-sm font-bold text-secondary text-right">{remaining}</td>
  </tr>
);
