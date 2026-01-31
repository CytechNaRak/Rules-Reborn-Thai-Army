import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Users, PenTool, CheckCircle, Shield, Code } from "lucide-react";

export default function Credits() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold text-white font-sarabun text-glow mb-4">
                            คณะผู้จัดทำและร่างกฎหมาย
                        </h1>
                        <p className="text-slate-400">
                            รายนามผู้มีส่วนร่วมในการร่าง ตรวจทาน และอนุมัติกฎหมาย
                        </p>
                    </div>

                    {/* Official Signatures Image */}
                    <div className="glass-card p-4 md:p-8 rounded-2xl mb-8 md:mb-12 flex justify-center items-center bg-white/5">
                        <div className="relative w-full h-auto min-h-[200px] md:min-h-[400px]">
                            <Image
                                src="/images/lawmakers.png"
                                alt="Lawmakers Signatures"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Detailed List Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* 1. Sanjure_2046 */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <PenTool className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white font-sarabun">จอมพล Sanjure_2046</h3>
                                    <p className="text-primary text-sm mb-2">ผู้บัญชาการทหารสูงสุด</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้ตรวจทาน</span>
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้ร่าง</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. aom023692 */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-500/20 p-2 rounded-lg">
                                    <PenTool className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white font-sarabun">จอมพล aom023692</h3>
                                    <p className="text-primary text-sm mb-2">รองผู้บัญชาการทหารสูงสุด</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้ร่างกฎหมาย</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. SoEarth007 */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-emerald-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-500/20 p-2 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white font-sarabun">พลเอก SoEarth007</h3>
                                    <p className="text-primary text-sm mb-2">ผู้บัญชาการทหารบก</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้ตรวจทาน</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. switx20z */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-purple-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500/20 p-2 rounded-lg">
                                    <Shield className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white font-sarabun">switx20z</h3>
                                    <p className="text-primary text-sm mb-2">ผู้ก่อตั้ง / ผู้สร้างแมพ</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้อนุมัติ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. nam890li */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-cyan-500 md:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="bg-cyan-500/20 p-2 rounded-lg">
                                    <Code className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white font-sarabun">nam890li</h3>
                                    <p className="text-primary text-sm mb-2">สิบตรีกองบัญชาการ</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">ผู้พัฒนาเว็บ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
