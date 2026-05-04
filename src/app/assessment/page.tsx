"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

const questions = [
  {
    q: 'Berapa persen penghasilanmu yang kamu tabung setiap bulan?',
    sub: 'Tidak ada jawaban benar atau salah — jawab sejujurnya.',
    opts: ['Aku belum menabung sama sekali', 'Kurang dari 10%', '10–20%', 'Lebih dari 20%'],
    scores: [0, 10, 20, 30]
  },
  {
    q: 'Bagaimana kamu mengelola tagihan PayLater atau cicilan?',
    sub: '',
    opts: ['Aku tidak punya cicilan apapun', 'Selalu bayar tepat waktu', 'Kadang telat bayar', 'Sering kesulitan bayar'],
    scores: [20, 25, 10, 0]
  },
  {
    q: 'Apakah kamu punya dana darurat?',
    sub: 'Dana darurat idealnya 3–6 bulan pengeluaran.',
    opts: ['Belum punya sama sekali', 'Ada, tapi kurang dari 1 bulan', '1–3 bulan pengeluaran', 'Lebih dari 3 bulan'],
    scores: [0, 5, 15, 25]
  },
  {
    q: 'Apakah kamu sudah mulai berinvestasi?',
    sub: '',
    opts: ['Belum, dan belum tahu mau mulai dari mana', 'Belum, tapi sudah ada rencana', 'Sudah, di reksa dana atau deposito', 'Sudah, di beberapa instrumen berbeda'],
    scores: [0, 5, 10, 20]
  }
];

export default function AssessmentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [isFinished, setIsFinished] = useState(false);

  const progress = ((currentStep) / questions.length) * 100;

  const handleSelect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentStep] === -1) return;
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    let total = 0;
    answers.forEach((ans, i) => {
      if (ans >= 0) total += questions[i].scores[ans];
    });
    const pct = Math.round((total / 100) * 100);
    
    let label, desc;
    if (pct < 30) {
      label = 'Perlu Perhatian Segera';
      desc = 'Kondisi finansialmu butuh perbaikan mendasar. Jangan khawatir — dengan langkah yang tepat, kamu bisa membangun pondasi keuangan yang kuat dalam 3–6 bulan ke depan.';
    } else if (pct < 60) {
      label = 'Sedang Berkembang';
      desc = 'Kamu sudah di jalur yang benar! Beberapa kebiasaan finansialmu perlu diperkuat — terutama dalam hal tabungan dan pengelolaan utang.';
    } else if (pct < 80) {
      label = 'Cukup Baik — Siap Naik Level';
      desc = 'Kamu punya pemahaman dasar yang solid. Saatnya fokus ke strategi yang lebih advanced: optimasi investasi dan perencanaan jangka panjang.';
    } else {
      label = 'Financial Champion! 🏆';
      desc = 'Kamu sudah sangat melek finansial. Finwise Z bisa membantu kamu mempertahankan dan mengoptimalkan kondisi keuangan yang sudah baik ini.';
    }

    return { score: pct, label, desc };
  };

  const result = isFinished ? calculateResult() : null;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Simple Header for Onboarding */}
      <header className="h-20 flex items-center justify-center px-6 bg-white border-b border-slate-200">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-secondary">Finwize</span>
            <span className="text-primary ml-1">Z</span>
          </span>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col justify-center py-20 px-6">
        <div className="max-w-2xl mx-auto w-full">
          {!isFinished ? (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 space-y-10">
              <div>
                <Progress value={progress} className="h-2 bg-slate-100" />
                <div className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">Langkah {currentStep + 1} dari {questions.length}</div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                  {questions[currentStep].q}
                </h2>
                {questions[currentStep].sub && (
                  <p className="text-lg text-slate-500 font-medium">{questions[currentStep].sub}</p>
                )}
              </div>

              <div className="grid gap-3">
                {questions[currentStep].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={cn(
                      "w-full text-left p-5 border-2 rounded-xl transition-all flex items-center gap-4 group",
                      answers[currentStep] === i 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors",
                      answers[currentStep] === i 
                        ? "bg-primary text-white" 
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                    )}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-base font-semibold">{opt}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6">
                <Button 
                  variant="ghost" 
                  onClick={handlePrev} 
                  className={cn("px-8 h-12 text-slate-500 font-bold", currentStep === 0 && "invisible")}
                >
                  ← Kembali
                </Button>
                <Button 
                  onClick={handleNext} 
                  disabled={answers[currentStep] === -1}
                  className="px-10 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-sm disabled:opacity-50 disabled:bg-slate-200"
                >
                  {currentStep === questions.length - 1 ? "Lihat Hasil →" : "Lanjut →"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-4xl font-bold text-primary">{result?.score}</div>
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Skor Literasi Finansialmu</div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{result?.label}</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-md mx-auto">
                {result?.desc}
              </p>

              <Button 
                onClick={() => router.push('/dashboard')}
                className="px-12 h-14 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-md mb-12"
              >
                Ke Dashboard Saya →
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <RecommendationCard 
                  title="Prioritas #1" 
                  text="Lunasi utang PayLater berbunga tinggi sebelum mulai investasi" 
                />
                <RecommendationCard 
                  title="Langkah Awal" 
                  text="Selesaikan modul 'Kelola PayLater' dalam minggu pertama" 
                />
                <RecommendationCard 
                  title="Rekomendasi" 
                  text="Ikuti Small Group Coaching untuk bimbingan langsung" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

const RecommendationCard = ({ title, text }: { title: string, text: string }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{title}</div>
    <p className="text-sm text-slate-700 leading-relaxed font-semibold">{text}</p>
  </div>
);
