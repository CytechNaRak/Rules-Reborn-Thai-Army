"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Shield, Book, Swords, Home, Users } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "หน้าแรก", href: "/", icon: Home },
        { name: "กฎหมายทหาร", href: "/laws", icon: Book },
        { name: "แบบทดสอบ", href: "/roleplay", icon: Swords },
        { name: "คณะผู้จัดทำ", href: "/credits", icon: Users },
    ];

    return (
        <nav className="border-b border-secondary bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/images/emblem.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            [✨] เกิดใหม่ในรั้วทหารไทย
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
