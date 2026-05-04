import { BookOpen, Users, Activity, CheckSquare } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      title: "Edukasi Keuangan Digital",
      description: "Video, e-book, dan modul interaktif yang dirancang praktis sehingga langsung bisa diterapkan dalam kehidupan sehari-hari.",
      icon: <BookOpen size={22} className="text-secondary" />,
      bg: "bg-blue-50/50"
    },
    {
      title: "Coaching Personal",
      description: "Sesi 1-on-1 atau grup kecil bersama financial coach berpengalaman untuk menyusun rencana keuangan yang sesuai dengan kondisimu.",
      icon: <Users size={22} className="text-secondary" />,
      bg: "bg-blue-50/50"
    },
    {
      title: "Tracking Otomatis",
      description: "Pantau pemasukan, pengeluaran, dan utang PayLater secara real-time. Dapatkan peringatan sebelum jatuh tempo.",
      icon: <Activity size={22} className="text-primary" />,
      bg: "bg-orange-50/50"
    },
    {
      title: "Financial Assessment",
      description: "Tes kondisi keuanganmu saat pertama daftar dan dapatkan rekomendasi cetak biru yang dipersonalisasi.",
      icon: <CheckSquare size={22} className="text-primary" />,
      bg: "bg-orange-50/50"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Semua yang kamu butuhkan</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Lebih dari sekadar catatan pengeluaran</h3>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
            Dari pemula hingga ahli, platform kami menyediakan fondasi kokoh untuk mencapai kebebasan finansialmu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {features.map((feat, idx) => (
            <div key={idx} className="group flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${feat.bg}`}>
                {feat.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">{feat.title}</h4>
                <p className="text-base text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

