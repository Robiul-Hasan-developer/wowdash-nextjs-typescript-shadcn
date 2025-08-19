"use client";

import { cn } from "@/lib/utils";
import { Settings, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import LightDarkMode from "./theme-components/light-dark-mode";


const ThemeCustomizer = () => {
    const [customizationOpen, setCustomizationOpen] = useState(true);

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


            <div className={`fixed max-w-[420px] w-full h-screen bg-white dark:bg-slate-800 end-0 top-0 z-[11] shadow-2xl duration-500 transition-transform ${customizationOpen ? 'translate-x-[0]' : 'translate-x-full'}`}>
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


                <div className="flex flex-col gap-10 px-6 py-6 h-[600px] overflow-y-auto">
                    <LightDarkMode />
                </div>


            </div>
        </>
    );
};

export default ThemeCustomizer;