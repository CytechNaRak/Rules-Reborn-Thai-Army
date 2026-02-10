import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Swords, Users, Menu, X } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [isOpen, setIsOpen] = useState(false);

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
                    <Link to="/" className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <img
                                src="/images/emblem.png"
                                alt="Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white line-clamp-1">
                            [✨] เกิดใหม่ในรั้วทหารไทย
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block w-6 h-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block w-6 h-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0 top-16 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
                                        isActive
                                            ? "bg-primary text-slate-900"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
