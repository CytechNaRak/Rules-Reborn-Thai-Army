import Link from "next/link";
import Navbar from "@/components/Navbar";
import { laws } from "@/data/laws";
import { Book, FileText, ArrowRight } from "lucide-react";

export default function LawsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold text-white font-sarabun text-glow mb-4">
                            คลังกฎหมายและการอ้างอิง
                        </h1>
                        <p className="text-slate-400">
                            รวบรวมเอกสารทางกฎหมายที่เกี่ยวข้องทั้งหมด เพื่อใช้ในการศึกษาและอ้างอิง
                        </p>
                    </div>

                    <div className="space-y-6">
                        {laws.map((law) => (
                            <Link
                                key={law.id}
                                href={`/laws/${law.id}`}
                                className="block group"
                            >
                                <div className="glass-card hover:bg-slate-800/60 p-6 rounded-xl transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary relative overflow-hidden">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Book className="w-8 h-8 text-primary group-hover:text-amber-300" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl font-semibold text-white group-hover:text-primary transition-colors font-sarabun">
                                                {law.title}
                                            </h2>
                                            <p className="mt-1 text-slate-400 text-sm">
                                                {law.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 font-mono">
                                                <FileText className="w-3 h-3" />
                                                อ้างอิง: {law.filename}
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex items-center justify-center self-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-6 h-6 text-primary" />
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
