import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { BookOpen, ShieldAlert, Gavel, ChevronRight } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <main className="flex-1 flex flex-col">
                <section className="relative overflow-hidden bg-slate-900 py-12 md:py-24 sm:py-32">
                    {/* Background Grid Config */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900 z-10" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
                        {/* Emblem Image */}
                        <div className="mb-8 relative w-32 h-32 md:w-48 md:h-48 animate-in fade-in zoom-in duration-1000">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <img
                                src={`${import.meta.env.BASE_URL}images/emblem.png`}
                                alt="Constitution Court of Thailand Emblem"
                                className="object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] w-full h-full"
                            />
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full py-1 px-3 mb-8">
                            <span className="flex w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-sm text-primary font-medium">เข้าถึงข้อมูลกฎหมายล่าสุด 2026</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-sarabun text-glow">
                            [✨] เกิดใหม่ในรั้วทหารไทย<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
                                กฎหมายและวินัยทหาร
                            </span>
                        </h1>

                        <p className="mt-4 text-base md:text-lg leading-8 text-slate-400 max-w-2xl mx-auto font-light">
                            คลังกฎหมายและวินัยทหาร ของ [✨] เกิดใหม่ในรั้วทหารไทย <br />
                            พร้อมระบบ ทดสอบความเข้าใจกฏหมายและวินัยทหารแบบคร่าวๆ <br />
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 w-full sm:w-auto">
                            <Link
                                to="/laws"
                                className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-slate-900 transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]"
                            >
                                <span className="mr-2">คลังกฎหมาย</span>
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
                            </Link>
                            <Link to="/roleplay" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors py-2">
                                เริ่มทำแบบทดสอบ <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Feature Cards */}
                <section className="bg-slate-950 py-12 md:py-24 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">

                            <div className="glass-card p-6 md:p-8 rounded-2xl md:hover:bg-slate-800/50 active:bg-slate-800/50 transition-all duration-300 group touch-manipulation">
                                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20 mb-6 md:group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">คลังกฎหมายดิจิทัล</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    รวบรวมกฏหมายทั้งหมดของ [✨] เกิดใหม่ในรั้วทหารไทย ไว้ในที่เดียว
                                </p>
                            </div>

                            <div className="glass-card p-6 md:p-8 rounded-2xl md:hover:bg-slate-800/50 active:bg-slate-800/50 transition-all duration-300 group touch-manipulation">
                                <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-amber-500/20 mb-6 md:group-hover:scale-110 transition-transform">
                                    <ShieldAlert className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">แบบทดสอบ</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    มีแบบทดสอบ เพื่อทดสอบความเข้าใจคร่าวๆ
                                </p>
                            </div>

                            <div className="glass-card p-6 md:p-8 rounded-2xl md:hover:bg-slate-800/50 active:bg-slate-800/50 transition-all duration-300 group touch-manipulation">
                                <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-emerald-500/20 mb-6 md:group-hover:scale-110 transition-transform">
                                    <Gavel className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">การวินิจฉัยและบทลงโทษ</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    การลงโทษและวินิจฉัยตามกฎหมายปฏิบัติตามกฏหมายของ [✨] เกิดใหม่ในรั้วทหารไทย เท่านั้น ไม่นอกเหนือจากนี้
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
                <p>© 2026 Reborn Rules RTA. All rights reserved. v1.2</p>
                <p className="mt-2 text-xs opacity-50">กฏหมายชุดนี้ใช้สำหรับ กฏหมายของ [✨] เกิดใหม่ในรั้วทหารไทย เท่านั้น</p>
            </footer>
        </div>
    );
}
