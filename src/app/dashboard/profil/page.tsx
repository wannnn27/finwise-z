"use client";

import { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  CreditCard, 
  Bell, 
  Globe,
  Lock,
  ChevronRight,
  CheckCircle2,
  Loader2
} from "lucide-react";

import { useUserStore } from "@/lib/store/userStore";

const profileSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  location: z.string().min(2, "Lokasi minimal 2 karakter"),
  bio: z.string().max(200, "Biografi maksimal 200 karakter"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;
type ProfileTab = "personal" | "security" | "billing" | "notifications";

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Zustand Store
  const user = useUserStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // Fix Hydration for Persist
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      bio: user.bio,
    }
  });

  // Sync form when user store changes or hydrates
  useEffect(() => {
    if (isHydrated) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
        bio: user.bio,
      });
    }
  }, [isHydrated, user, reset]);

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSaving(true);
    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Simpan ke Zustand (Persistent)
    user.setProfileData(data);
    
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        user.setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!isHydrated) return null; // Avoid flashing old data

  return (
    <DashboardLayout>
      <div className="p-8 md:p-10 space-y-10 max-w-5xl mx-auto relative">
        
        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed top-20 right-10 z-[100] bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300">
            <CheckCircle2 size={20} />
            <span className="font-bold text-sm">Profil berhasil diperbarui!</span>
          </div>
        )}

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm text-center md:text-left">
          <div className="relative group">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
            />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-4 border-slate-50 group-hover:border-secondary/20 transition-all overflow-hidden relative">
              {user.profileImage ? (
                <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={48} />
              )}
            </div>
            <button 
              onClick={triggerFileInput}
              className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-secondary text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-110 transition-transform z-20"
            >
              <Camera size={12} />
            </button>
          </div>
          
          <div className="space-y-2 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{user.name}</h1>
            <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2 text-sm">
              <Mail size={14} className="text-secondary" />
              {user.email} (Premium Member)
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-bold rounded-full uppercase tracking-widest border border-secondary/10">Mahasiswa</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-emerald-100">Verified</span>
            </div>
          </div>

          <Button variant="outline" className="h-10 md:h-11 px-6 rounded-xl border-slate-200 text-slate-600 font-bold w-full md:w-auto">
            Lihat Profil Publik
          </Button>
        </div>

        {/* Profile Content with Sidebar Tabs */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Internal Sidebar */}
          <nav className="space-y-1">
            <ProfileTabLink active={activeTab === "personal"} onClick={() => setActiveTab("personal")} label="Informasi Pribadi" icon={<User size={18} />} />
            <ProfileTabLink active={activeTab === "security"} onClick={() => setActiveTab("security")} label="Keamanan" icon={<ShieldCheck size={18} />} />
            <ProfileTabLink active={activeTab === "billing"} onClick={() => setActiveTab("billing")} label="Langganan" icon={<CreditCard size={18} />} />
            <ProfileTabLink active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} label="Notifikasi" icon={<Bell size={18} />} />
          </nav>

          {/* Form Area */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {activeTab === "personal" && (
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">Informasi Pribadi</h3>
                  <p className="text-sm text-slate-500 font-medium">Perbarui detail profil dan cara kami menghubungi Anda.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nama Lengkap</label>
                    <Input 
                      {...register("name")}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 focus:ring-secondary focus:border-secondary font-medium",
                        errors.name && "border-rose-500 focus:ring-rose-500"
                      )} 
                    />
                    {errors.name && <p className="text-[10px] text-rose-500 font-bold uppercase">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                    <Input 
                      {...register("email")}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 focus:ring-secondary focus:border-secondary font-medium",
                        errors.email && "border-rose-500 focus:ring-rose-500"
                      )} 
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 font-bold uppercase">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nomor Telepon</label>
                    <Input 
                      {...register("phone")}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 focus:ring-secondary focus:border-secondary font-medium",
                        errors.phone && "border-rose-500 focus:ring-rose-500"
                      )} 
                    />
                    {errors.phone && <p className="text-[10px] text-rose-500 font-bold uppercase">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lokasi</label>
                    <Input 
                      {...register("location")}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 focus:ring-secondary focus:border-secondary font-medium",
                        errors.location && "border-rose-500 focus:ring-rose-500"
                      )} 
                    />
                    {errors.location && <p className="text-[10px] text-rose-500 font-bold uppercase">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Biografi Singkat</label>
                  <textarea 
                    {...register("bio")}
                    className={cn(
                      "w-full min-h-[120px] p-4 rounded-xl border border-slate-200 focus:ring-1 focus:ring-secondary focus:border-secondary font-medium text-sm outline-none transition-all",
                      errors.bio && "border-rose-500 focus:ring-rose-500"
                    )}
                    placeholder="Tuliskan sedikit tentang diri Anda..."
                  />
                  {errors.bio && <p className="text-[10px] text-rose-500 font-bold uppercase">{errors.bio.message}</p>}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isSaving}
                    className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-10 rounded-xl shadow-md disabled:opacity-70 transition-all"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Menyimpan...
                      </>
                    ) : "Simpan Perubahan"}
                  </Button>
                </div>
              </form>
            )}
            {activeTab === "security" && <SecurityForm />}
            {activeTab === "billing" && <BillingView />}
            {activeTab === "notifications" && <NotificationsForm />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const ProfileTabLink = ({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
      active 
        ? "bg-secondary text-white shadow-md shadow-secondary/20" 
        : "text-slate-500 hover:bg-white hover:text-slate-900"
    )}
  >
    <span className={cn(active ? "text-white" : "text-slate-400")}>{icon}</span>
    {label}
  </button>
);

const SecurityForm = () => (
  <div className="p-8 space-y-10">
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-slate-900">Keamanan Akun</h3>
      <p className="text-sm text-slate-500 font-medium">Kelola kata sandi dan pengaturan keamanan lainnya.</p>
    </div>

    <div className="space-y-6">
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary border border-slate-200 shadow-sm">
            <Lock size={18} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Kata Sandi</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Terakhir diubah 3 bulan yang lalu</div>
          </div>
        </div>
        <Button variant="outline" className="text-xs font-bold h-9 px-4 rounded-lg border-slate-200 text-slate-600">
          Ubah Kata Sandi
        </Button>
      </div>

      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary border border-slate-200 shadow-sm">
            <ShieldCheck size={18} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Autentikasi Dua Faktor (2FA)</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Berikan lapisan keamanan tambahan pada akun Anda</div>
          </div>
        </div>
        <div className="w-12 h-6 bg-secondary rounded-full relative cursor-pointer">
          <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm" />
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-slate-100">
      <h4 className="text-sm font-bold text-rose-600 mb-2">Hapus Akun</h4>
      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
        Setelah akun dihapus, semua data finansial, riwayat coaching, dan materi Anda akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.
      </p>
      <Button variant="ghost" className="text-rose-600 hover:bg-rose-50 font-bold text-xs h-9 px-4 rounded-lg">
        Hapus Akun Saya
      </Button>
    </div>
  </div>
);

const BillingView = () => (
  <div className="p-8 space-y-10">
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-slate-900">Langganan & Pembayaran</h3>
      <p className="text-sm text-slate-500 font-medium">Kelola paket langganan dan metode pembayaran Anda.</p>
    </div>

    <div className="p-8 bg-secondary rounded-2xl text-white relative overflow-hidden">
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Paket Saat Ini</div>
            <div className="text-3xl font-bold tracking-tight">Premium Monthly</div>
          </div>
          <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full uppercase tracking-widest backdrop-blur-sm border border-white/10">Aktif</span>
        </div>
        
        <div className="flex items-center gap-10">
          <div>
            <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Tagihan Berikutnya</div>
            <div className="text-sm font-bold">12 Mei 2026</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Jumlah</div>
            <div className="text-sm font-bold">Rp 99.000 / bln</div>
          </div>
        </div>

        <div className="pt-4 flex gap-3">
          <Button className="bg-white text-secondary font-bold hover:bg-slate-50 h-10 px-6 rounded-lg text-xs">
            Upgrade Paket
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 font-bold h-10 px-6 rounded-lg text-xs">
            Batalkan Langganan
          </Button>
        </div>
      </div>
      {/* Decorative Circle */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
    </div>

    <div className="space-y-6">
      <h4 className="text-sm font-bold text-slate-900">Metode Pembayaran</h4>
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-200 shadow-sm">
            <CreditCard size={18} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Visa ending in 4242</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Exp: 12/28</div>
          </div>
        </div>
        <Button variant="ghost" className="text-secondary hover:bg-secondary/5 font-bold text-xs h-9 px-4 rounded-lg">
          Ubah
        </Button>
      </div>
    </div>
  </div>
);

const NotificationsForm = () => (
  <div className="p-8 space-y-10">
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-slate-900">Pengaturan Notifikasi</h3>
      <p className="text-sm text-slate-500 font-medium">Kontrol kapan dan bagaimana kami memberi tahu Anda.</p>
    </div>

    <div className="space-y-8">
      <NotificationToggle 
        title="Pengingat Tagihan" 
        desc="Terima pemberitahuan 3 hari sebelum jatuh tempo PayLater Anda." 
        defaultChecked
      />
      <NotificationToggle 
        title="Sesi Coaching" 
        desc="Pengingat untuk jadwal coaching 1-on-1 atau grup." 
        defaultChecked
      />
      <NotificationToggle 
        title="Materi Baru" 
        desc="Dapatkan info saat ada modul edukasi atau webinar baru." 
      />
      <NotificationToggle 
        title="Tips Mingguan" 
        desc="Koleksi tips finansial khusus mahasiswa setiap hari Senin." 
        defaultChecked
      />
    </div>
  </div>
);

const NotificationToggle = ({ title, desc, defaultChecked = false }: { title: string, desc: string, defaultChecked?: boolean }) => (
  <div className="flex items-start justify-between gap-6 pb-6 border-b border-slate-100 last:border-0">
    <div className="space-y-1">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">{desc}</p>
    </div>
    <div className={cn(
      "w-12 h-6 rounded-full relative cursor-pointer shrink-0 transition-colors",
      defaultChecked ? "bg-secondary" : "bg-slate-200"
    )}>
      <div className={cn(
        "absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all",
        defaultChecked ? "right-1" : "left-1"
      )} />
    </div>
  </div>
);
