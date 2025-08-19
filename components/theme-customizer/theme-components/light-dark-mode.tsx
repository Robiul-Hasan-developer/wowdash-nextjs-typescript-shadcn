"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LaptopMinimal, Moon, Settings, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const LightDarkMode = () => {
    const [customizationOpen, setCustomizationOpen] = useState(true);
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    // ✅ Ensure theme is available only after mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Don't render until mounted to avoid hydration mismatch or wrong theme
    if (!isMounted) return null;


    return (
        <>
            <Button
                className="fixed bottom-12 end-8 !p-0 shadow-xl rounded-full w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center overflow-hidden"
                onClick={() => setCustomizationOpen(true)}
            >
                <Settings className="!w-7 !h-7 animate-spin fill-curren" />
            </Button>

            {
                customizationOpen && (
                    <div
                        className="overlay fixed w-full h-full bg-black/50 dark:bg-black/50 z-10"
                        onClick={() => setCustomizationOpen(false)}
                    >
                    </div>
                )
            }


            <div className={`fixed max-w-[420px] w-full h-screen overflow-y-auto bg-white dark:bg-slate-800 end-0 top-0 z-[11] shadow-2xl duration-500 transition-transform ${customizationOpen ? 'translate-x-[0]' : 'translate-x-full'}`}>
                <div className="flex items-center gap-6 px-6 py-4 border-b border-neutral-200 dark:border-slate-700 justify-between">
                    <div className="">
                        <h6 className="text-sm dark:text-white">Theme Settings</h6>
                        <p className="text-xs text-neutral-500 dark:text-neutral-200">Customize and preview instantly</p>
                    </div>
                    <div className="">
                        <Button
                            className={cn(`!py-0 !px-0 h-[unset] text-neutral-900  bg-transparent shadow-none rounded-md hover:bg-transparent hover:text-blue-600 hover:rotate-90 duration-300`)}
                            onClick={() => setCustomizationOpen(false)}
                        >
                            <X className="!w-5 !h-5" />
                        </Button>
                    </div>
                </div>


                <div className="flex flex-col gap-10 px-6 py-6">
                    <div className="theme-setting-item">
                        <h6 className="font-medium text-sm mb-3">Color Scheme</h6>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="">
                                <div
                                    className={`cursor-pointer border border-neutral-300 flex items-center justify-center h-[68px] rounded-md ring-2 text-neutral-500 dark:text-white dark:border-slate-500 ${theme === "light" ? "ring-blue-600" : "ring-transparent"}`}
                                    onClick={() => setTheme("light")}
                                >
                                    <Sun />
                                </div>
                                <h6 className={`text-center text-sm font-medium mt-2 ${theme === "light" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}>Light</h6>
                            </div>
                            <div className="">
                                <div
                                    className={`cursor-pointer border border-neutral-300 flex items-center justify-center h-[68px] rounded-md ring-2 text-neutral-500 dark:text-white dark:border-slate-500 ${theme === "dark" ? "ring-blue-600" : "ring-transparent"}`}
                                    onClick={() => setTheme("dark")}
                                >
                                    <Moon />
                                </div>
                                <h6 className={`text-center text-sm font-medium mt-2 ${theme === "dark" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}>Dark</h6>
                            </div>
                            <div className="">
                                <div
                                    className={`cursor-pointer border border-neutral-300 flex items-center justify-center h-[68px] rounded-md ring-2 text-neutral-500 dark:text-white dark:border-slate-500 ${theme === "system" ? "ring-blue-600" : "ring-transparent"}`}
                                    onClick={() => setTheme("system")}
                                >
                                    <LaptopMinimal />
                                </div>
                                <h6 className={`text-center text-sm font-medium mt-2 ${theme === "system" ? "text-blue-600 dark:text-blue-500" : "text-neutral-500 dark:text-neutral-200"}`}>System</h6>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default LightDarkMode;