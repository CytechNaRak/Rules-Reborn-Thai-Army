import Navbar from "@/components/Navbar";
import { scenarios } from "@/data/scenarios";
import { notFound } from "next/navigation";
import ScenarioViewer from "@/components/ScenarioViewer";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ScenarioPage({ params }: PageProps) {
    const { id } = await params;
    const scenario = scenarios.find((s) => s.id === id);

    if (!scenario) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <ScenarioViewer scenario={scenario} />
                </div>
            </main>
        </div>
    );
}
