"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Book, Swords, Home } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "หน้าแรก", href: "/", icon: Home },
        { name: "กฎหมายทหาร", href: "/laws", icon: Book },
        { name: "จำลองสถานการณ์", href: "/roleplay", icon: Swords },
    ];

    return (
        <nav className="border-b border-secondary bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/20 p-2 rounded-lg border border-primary/50">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Military Justice System
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={clsx(
                                            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                            isActive
                                                ? "bg-primary text-slate-900 shadow-md shadow-primary/20"
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
