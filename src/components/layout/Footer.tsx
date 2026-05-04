import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 px-6 md:px-10 py-14 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-1.5">
          <Link href="/" className="flex items-center gap-1 mb-4 no-underline group">
            <span className="text-xl font-black tracking-tighter">
              <span className="text-secondary">Finwize</span>
              <span className="text-primary ml-1">Z</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
            Platform edukasi keuangan berbasis digital untuk generasi muda Indonesia.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-widest mb-4">Produk</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-light">
            <li><Link href="/fitur" className="hover:text-white transition-colors">Fitur</Link></li>
            <li><Link href="/harga" className="hover:text-white transition-colors">Harga</Link></li>
            <li><Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link></li>
            <li><Link href="/webinar" className="hover:text-white transition-colors">Webinar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-widest mb-4">Perusahaan</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-light">
            <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-widest mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-light">
            <li><Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-500 font-light">
        <p>© 2026 Finwise Z · Universitas Ahmad Dahlan Yogyakarta</p>
        <p>Made with care for Gen Z</p>
      </div>
    </footer>
  );
};
