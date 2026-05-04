import { LayoutGrid, TrendingUp, Users, BookOpen, User, Home, Search, Bell, HelpCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutGrid size={18} />, section: "Menu Utama" },
    { label: "Tracking", href: "/dashboard/tracking", icon: <TrendingUp size={18} />, section: "Menu Utama" },
    { label: "Coaching", href: "/dashboard/coaching", icon: <Users size={18} />, section: "Menu Utama" },
    { label: "Materi", href: "/dashboard/materi", icon: <BookOpen size={18} />, section: "Menu Utama" },
    { label: "Profil", href: "/dashboard/profil", icon: <User size={18} />, section: "Akun Saya" },
    { label: "Kembali ke Home", href: "/", icon: <Home size={18} />, section: "Akun Saya" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative">
      {/* Dashboard Header */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-4 md:px-6 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-8 flex-1">
          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <Menu size={22} />
          </button>

          <Link href="/" className="flex items-center gap-1.5 no-underline group shrink-0">
            <span className="text-xl font-black tracking-tighter transition-transform group-hover:scale-105">
              <span className="text-secondary">Finwize</span>
              <span className="text-primary ml-1">Z</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Cari transaksi, laporan, dll..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 md:gap-3 text-slate-400">
            <button className="hover:text-slate-600 transition-colors p-1.5"><Bell size={20} /></button>
            <button className="hidden sm:block hover:text-slate-600 transition-colors p-1.5"><HelpCircle size={20} /></button>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-slate-900">Raehanah Rezky</div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">Premium Member</div>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 border border-slate-200 text-sm">
              RR
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-[70] w-72 bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-out flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
            <span className="text-xl font-black tracking-tighter">
              <span className="text-secondary">Finwize</span>
              <span className="text-primary ml-1">Z</span>
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-6 space-y-8 overflow-y-auto">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">Menu Utama</div>
              <nav className="space-y-1">
                {menuItems.filter(i => i.section === "Menu Utama").map(item => (
                  <SidebarLink key={item.href} active={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))} {...item} />
                ))}
              </nav>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">Akun Saya</div>
              <nav className="space-y-1">
                {menuItems.filter(i => i.section === "Akun Saya").map(item => (
                  <SidebarLink key={item.href} active={pathname === item.href} {...item} />
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Desktop Sidebar */}
        <aside className="w-64 border-r border-slate-200 hidden lg:flex flex-col bg-white">
          <div className="p-6 space-y-8 flex-1">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">Menu Utama</div>
              <nav className="space-y-1">
                {menuItems.filter(i => i.section === "Menu Utama").map(item => (
                  <SidebarLink key={item.href} active={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))} {...item} />
                ))}
              </nav>
            </div>

            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">Akun Saya</div>
              <nav className="space-y-1">
                {menuItems.filter(i => i.section === "Akun Saya").map(item => (
                  <SidebarLink key={item.href} active={pathname === item.href} {...item} />
                ))}
              </nav>
            </div>
          </div>

          <div className="p-6 border-t border-slate-200 bg-slate-50">
             <div className="text-[11px] font-bold text-slate-500 uppercase mb-2">Skor Kamu</div>
             <div className="text-2xl font-bold text-slate-900 mb-2">72 <span className="text-sm font-medium text-slate-500">/ 100</span></div>
             <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
               <div className="h-full bg-primary w-[72%] rounded-full" />
             </div>
             <div className="text-xs text-slate-500 mt-3 font-medium">Naik 8 poin dari bulan lalu.</div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          {children}
        </div>
      </div>

      {/* Bottom Navigation (Mobile & Tablet) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 px-6 flex items-center justify-between z-[50]">
        <BottomNavLink active={pathname === "/dashboard"} label="Home" href="/dashboard" icon={<LayoutGrid size={20} />} />
        <BottomNavLink active={pathname.startsWith("/dashboard/tracking")} label="Track" href="/dashboard/tracking" icon={<TrendingUp size={20} />} />
        <BottomNavLink active={pathname.startsWith("/dashboard/coaching")} label="Coach" href="/dashboard/coaching" icon={<Users size={20} />} />
        <BottomNavLink active={pathname.startsWith("/dashboard/materi")} label="Materi" href="/dashboard/materi" icon={<BookOpen size={20} />} />
        <BottomNavLink active={pathname === "/dashboard/profil"} label="Profil" href="/dashboard/profil" icon={<User size={20} />} />
      </nav>
    </div>
  );
};

const SidebarLink = ({ label, icon, href, active = false }: { label: string, icon: React.ReactNode, href: string, active?: boolean }) => (
  <Link href={href} className={cn(
    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors font-medium",
    active 
      ? "bg-slate-100 text-slate-900 shadow-sm" 
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
  )}>
    <span className={cn(active ? "text-primary" : "text-slate-400")}>
      {icon}
    </span>
    {label}
  </Link>
);

const BottomNavLink = ({ label, icon, href, active = false }: { label: string, icon: React.ReactNode, href: string, active?: boolean }) => (
  <Link href={href} className="flex flex-col items-center gap-1">
    <div className={cn(
      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
      active ? "bg-secondary/10 text-secondary" : "text-slate-400"
    )}>
      {icon}
    </div>
    <span className={cn(
      "text-[10px] font-bold uppercase tracking-widest",
      active ? "text-secondary" : "text-slate-400"
    )}>
      {label}
    </span>
  </Link>
);
