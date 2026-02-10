import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center text-white p-4 text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-6">ไม่พบหน้าที่คุณกำลังตามหา</h2>
                <p className="text-slate-400 mb-10 max-w-md">อาจเป็นเพราะที่อยู่อีเมลไม่ถูกต้อง หรือหน้านี้ถูกย้ายไปแล้ว</p>
                <Link
                    to="/"
                    className="bg-primary text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-white transition-all"
                >
                    กลับหน้าหลัก
                </Link>
            </div>
        </div>
    );
}
