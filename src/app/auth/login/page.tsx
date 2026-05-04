"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-md bg-white rounded-xl p-10 shadow-sm border border-slate-200">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8 group">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Kembali
        </Link>

        <div className="mb-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Masuk ke Finwise Z</h1>
          <p className="text-sm text-slate-500">Lanjutkan perjalanan finansialmu</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <Input type="email" placeholder="john@example.com" className="h-11 rounded-md border-slate-200 focus:ring-primary focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <Input type="password" placeholder="••••••••" className="h-11 rounded-md border-slate-200 focus:ring-primary focus:border-primary" />
          </div>
          
          <Button className="w-full h-11 bg-primary hover:bg-slate-800 text-white rounded-md text-sm font-medium shadow-sm transition-all mt-6">
            Masuk Sekarang
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Belum punya akun? <Link href="/auth/register" className="text-primary font-medium hover:underline underline-offset-4">Daftar gratis</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
