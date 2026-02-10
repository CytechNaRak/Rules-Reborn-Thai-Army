import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { scenarios } from "@/data/scenarios";
import ScenarioViewer from "@/components/ScenarioViewer";

export default function ScenarioDetail() {
    const { id } = useParams();
    const scenario = scenarios.find((s) => s.id === id);

    if (!scenario) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-950">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-white">
                    <h1 className="text-2xl font-bold mb-4">ไม่พบสถานการณ์จำลอง</h1>
                    <Link to="/roleplay" className="text-primary hover:underline">กลับไปยังหน้ารวม</Link>
                </div>
            </div>
        );
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
