import Navbar from "@/components/Navbar";
import { laws } from "@/data/laws";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Share2 } from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function LawDetail({ params }: PageProps) {
    // Await the params object (Next.js 15+)
    const { id } = await params;

    const law = laws.find((l) => l.id === id);

    if (!law) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />

            <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">

                    <div className="mb-8">
                        <Link
                            href="/laws"
                            className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            กลับไปยังคลังกฎหมาย
                        </Link>

                        <div className="border-b border-slate-800 pb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-bold text-white font-sarabun text-glow leading-tight">
                                        {law.title}
                                    </h1>
                                    <p className="mt-2 text-slate-400 font-light">
                                        {law.description}
                                    </p>
                                </div>
                                <button className="p-2 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-primary">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {law.sections.length > 0 ? (
                            law.sections.map((section) => (
                                <article
                                    key={section.id}
                                    className="glass-card p-6 sm:p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-semibold text-primary mb-4 font-sarabun border-l-4 border-primary pl-3">
                                        {section.title}
                                    </h3>
                                    <div className="prose prose-invert prose-slate max-w-none leading-relaxed font-sarabun">
                                        {section.content.split('\n').map((line, i) => (
                                            <p key={i} className="mb-4">{line}</p>
                                        ))}
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-dashed border-slate-800">
                                <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                                <p className="text-slate-500">ยังไม่มีข้อมูลในส่วนนี้</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
}
