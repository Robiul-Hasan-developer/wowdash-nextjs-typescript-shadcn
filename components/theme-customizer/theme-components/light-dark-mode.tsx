"use client";

import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const LightDarkMode = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    // ✅ Ensure theme is available only after mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Don't render until mounted to avoid hydration mismatch or wrong theme
    if (!isMounted) return null;


    return (
        <div className="theme-setting-item">
            <h6 className="font-medium text-base mb-3">Theme Mode</h6>
            <div className="grid grid-cols-3 gap-4">
                <div className="">
                    <div
                        className={`cursor-pointer border border-neutral-300 flex items-center justify-center hover:bg-blue-500/10 duration-300 h-[68px] rounded-md ring-2 dark:border-slate-500 ${theme === "light" ? "ring-blue-600 text-blue-600 dark:text-blue-500" : "ring-transparent text-neutral-500 dark:text-white"}`}
                        onClick={() => setTheme("light")}
                    >
                        <Sun />
                    </div>
                    <h6
                        className={`text-center text-sm font-medium pt-2 cursor-pointer hover:text-blue-500 ${theme === "light" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}
                        onClick={() => setTheme("light")}
                    >Light</h6>
                </div>
                <div className="">
                    <div
                        className={`cursor-pointer border border-neutral-300 flex items-center justify-center hover:bg-blue-500/10 duration-300 h-[68px] rounded-md ring-2 dark:border-slate-500 ${theme === "dark" ? "ring-blue-600 text-blue-600 dark:text-blue-500" : "ring-transparent text-neutral-500 dark:text-white"}`}
                        onClick={() => setTheme("dark")}
                    >
                        <Moon />
                    </div>
                    <h6
                        className={`text-center text-sm font-medium pt-2 cursor-pointer hover:text-blue-500 ${theme === "dark" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}
                        onClick={() => setTheme("dark")}
                    >Dark</h6>
                </div>
                <div className="">
                    <div
                        className={`cursor-pointer border border-neutral-300 flex items-center justify-center hover:bg-blue-500/10 duration-300 h-[68px] rounded-md ring-2 dark:border-slate-500 ${theme === "system" ? "ring-blue-600 text-blue-600 dark:text-blue-500" : "ring-transparent text-neutral-500 dark:text-white"}`}
                        onClick={() => setTheme("system")}
                    >
                        <LaptopMinimal />
                    </div>
                    <h6
                        className={`text-center text-sm font-medium pt-2 cursor-pointer hover:text-blue-500 ${theme === "system" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}
                        onClick={() => setTheme("system")}
                    >System</h6>
                </div>

            </div>
        </div>
    );
};

export default LightDarkMode;