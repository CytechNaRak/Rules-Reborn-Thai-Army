import Navbar from "@/components/Navbar";
import { Users, Heart } from "lucide-react";
import lawmakers from "@/assets/images/lawmakers.png";

export default function Credits() {
    const creators = [
        { name: "Reborn Team", role: "เจ้าของโปรเจกต์และผู้ก่อตั้ง" },
        { name: "NaRak Team", role: "ฝ่ายเทคโนโลยีและระบบฐานข้อมูล" },
        { name: "กองบัญชาการทหารสูงสุด", role: "ฝ่ายกฎหมายและวินัยทหาร" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4 font-sarabun">คณะผู้จัดทำ</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            ขอขอบคุณทุกท่านที่มีส่วนช่วยให้ระบบฐานข้อมูลกฎหมายและวินัยทหารนี้เกิดขึ้นมาได้
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {creators.map((creator, index) => (
                            <div key={index} className="glass-card p-8 rounded-2xl text-center border border-slate-800/50 hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">{creator.name}</h3>
                                <p className="text-primary text-sm font-medium">{creator.role}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="mb-8 inline-block glass-card p-4 rounded-xl">
                            <img
                                src={lawmakers}
                                alt="Lawmakers Signatures"
                                className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-slate-500 flex items-center justify-center gap-2">
                            จัดทำด้วย <Heart className="w-4 h-4 text-red-500 fill-red-500" /> โดย ทีมงาน Reborn Rules RTA
                        </p>
                        <p className="text-slate-600 text-xs mt-2 uppercase tracking-widest">Version 1.2.0 • Stable Release</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
