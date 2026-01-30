import Link from "next/link";
import Navbar from "@/components/Navbar";
import { scenarios } from "@/data/scenarios";
import { Swords, AlertTriangle, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export default function RoleplayPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-3xl font-bold text-white font-sarabun text-glow mb-4">
                            สถานการณ์จำลอง (Simulation)
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            ทดสอบความรู้ความเข้าใจในการบังคับใช้กฎหมายและวินัยทหาร ผ่านสถานการณ์จำลองเสมือนจริง
                            เลือกการตัดสินใจที่ถูกต้องที่สุดตามหลักการบัญญัติ
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {scenarios.map((scenario) => (
                            <Link
                                key={scenario.id}
                                href={`/roleplay/${scenario.id}`}
                                className="group block"
                            >
                                <div className="glass-card h-full p-6 rounded-xl hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50 hover:border-primary/50 relative overflow-hidden">
                                    {/* Decorative background element */}
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Swords className="w-24 h-24" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className={clsx(
                                                "px-3 py-1 rounded-full text-xs font-semibold border",
                                                scenario.difficulty === "พื้นฐาน" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                                    scenario.difficulty === "ปานกลาง" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                                        "bg-red-500/10 text-red-400 border-red-500/20"
                                            )}>
                                                {scenario.difficulty}
                                            </span>
                                            <Swords className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-sarabun">
                                            {scenario.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                            {scenario.description}
                                        </p>

                                        <div className="flex items-center text-xs text-slate-500 font-mono">
                                            <span>ID: {scenario.id}</span>
                                            <span className="mx-2">•</span>
                                            <span>{scenario.choices.length} ตัวเลือก</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
