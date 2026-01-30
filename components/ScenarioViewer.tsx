"use client";

import { useState } from "react";
import { Scenario, Choice } from "@/data/scenarios";
import { AlertCircle, CheckCircle, XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ScenarioViewer({ scenario }: { scenario: Scenario }) {
    const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelect = (choice: Choice) => {
        if (isSubmitted) return;
        setSelectedChoice(choice);
    };

    const handleSubmit = () => {
        if (!selectedChoice) return;
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setSelectedChoice(null);
        setIsSubmitted(false);
    };

    return (
        <div className="space-y-8">
            {/* Navigation */}
            <Link href="/roleplay" className="inline-flex items-center text-slate-400 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                กลับไปยังหน้ารวม
            </Link>

            {/* Header */}
            <div className="border-b border-secondary pb-6">
                <div className="flex items-center gap-3 mb-2">
                    <span className={clsx(
                        "px-2 py-0.5 rounded text-xs font-mono",
                        scenario.difficulty === "พื้นฐาน" ? "bg-emerald-500/20 text-emerald-400" :
                            scenario.difficulty === "ปานกลาง" ? "bg-amber-500/20 text-amber-400" :
                                "bg-red-500/20 text-red-400"
                    )}>
                        {scenario.difficulty}
                    </span>
                    <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Scenario ID: {scenario.id}</span>
                </div>
                <h1 className="text-3xl font-bold text-white font-sarabun text-glow">{scenario.title}</h1>
            </div>

            {/* Situation Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 rounded-xl border-l-4 border-l-primary"
            >
                <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    สถานการณ์
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed font-sarabun">
                    {scenario.situation}
                </p>
            </motion.div>

            {/* Choices Grid */}
            <div className="grid gap-4">
                <h3 className="text-slate-400 font-medium mb-2">เลือกการตัดสินใจของคุณ:</h3>
                {scenario.choices.map((choice) => {
                    const isSelected = selectedChoice?.id === choice.id;
                    let containerClass = "p-6 rounded-lg border text-left transition-all duration-200 relative overflow-hidden";

                    if (isSubmitted) {
                        if (choice.isCorrect) {
                            containerClass += " bg-emerald-900/20 border-green-500/50";
                        } else if (isSelected && !choice.isCorrect) {
                            containerClass += " bg-red-900/20 border-red-500/50";
                        } else {
                            containerClass += " bg-slate-800/20 border-slate-800 opacity-50";
                        }
                    } else {
                        if (isSelected) {
                            containerClass += " bg-primary/10 border-primary shadow-[0_0_15px_-5px_var(--primary)]";
                        } else {
                            containerClass += " bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-slate-600";
                        }
                    }

                    return (
                        <button
                            key={choice.id}
                            onClick={() => handleSelect(choice)}
                            disabled={isSubmitted}
                            className={containerClass}
                        >
                            <div className="flex items-start gap-4">
                                <div className={clsx(
                                    "mt-1 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                                    isSubmitted && choice.isCorrect ? "bg-emerald-500 border-emerald-500 text-black" :
                                        isSubmitted && isSelected && !choice.isCorrect ? "bg-red-500 border-red-500 text-white" :
                                            isSelected ? "bg-primary border-primary text-black" : "border-slate-500"
                                )}>
                                    {isSubmitted && choice.isCorrect ? <CheckCircle className="w-4 h-4" /> :
                                        isSubmitted && isSelected && !choice.isCorrect ? <XCircle className="w-4 h-4" /> :
                                            <div className={clsx("w-2 h-2 rounded-full", isSelected ? "bg-black" : "bg-transparent")} />
                                    }
                                </div>
                                <div className="flex-1">
                                    <p className={clsx("text-lg font-sarabun", isSelected || isSubmitted ? "text-white" : "text-slate-300")}>
                                        {choice.text}
                                    </p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Action / Result */}
            <div className="flex justify-end pt-4">
                {!isSubmitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedChoice}
                        className="bg-primary text-slate-900 font-bold py-3 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                    >
                        ยืนยันคำสั่ง
                    </button>
                ) : (
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        เริ่มสถานการณ์ใหม่
                    </button>
                )}
            </div>

            {/* Result Feedback Animation */}
            <AnimatePresence>
                {isSubmitted && selectedChoice && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className={clsx(
                            "p-6 rounded-xl border mt-6",
                            selectedChoice.isCorrect ? "bg-emerald-900/10 border-emerald-500/30" : "bg-red-900/10 border-red-500/30"
                        )}>
                            <h3 className={clsx(
                                "text-xl font-bold mb-2 flex items-center gap-2",
                                selectedChoice.isCorrect ? "text-emerald-400" : "text-red-400"
                            )}>
                                {selectedChoice.isCorrect ? "ดำเนินการถูกต้อง" : "ควรพิจารณาใหม่"}
                            </h3>
                            <p className="text-white text-lg mb-4">
                                {selectedChoice.outcome}
                            </p>
                            <div className="bg-black/20 p-4 rounded-lg">
                                <p className="text-slate-300 text-sm font-mono">
                                    <span className="text-primary">NOTE: </span>
                                    {selectedChoice.feedback}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
