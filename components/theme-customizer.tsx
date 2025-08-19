// "use client";
// import { Button } from "@/components/ui/button";
// import { Laptop, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useState } from "react";

// export default function ThemeCustomizer() {
//     const { theme, setTheme } = useTheme();
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="fixed bottom-6 right-6 z-50">
//             <Button
//                 onClick={() => setOpen(!open)}
//                 className="rounded-full shadow-lg"
//                 variant="outline"
//                 size="icon"
//             >
//                 {theme === "dark" ? <Moon /> : <Sun />}
//             </Button>

//             {open && (
//                 <div className="absolute bottom-14 right-0 p-4 bg-white dark:bg-neutral-800 shadow-xl rounded-2xl space-y-2 w-48">
//                     <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Choose Theme</p>
//                     <div className="flex gap-2">
//                         <Button
//                             onClick={() => setTheme("light")}
//                             variant={theme === "light" ? "default" : "outline"}
//                             size="sm"
//                         >
//                             <Sun className="mr-2 h-4 w-4" /> Light
//                         </Button>
//                         <Button
//                             onClick={() => setTheme("dark")}
//                             variant={theme === "dark" ? "default" : "outline"}
//                             size="sm"
//                         >
//                             <Moon className="mr-2 h-4 w-4" /> Dark
//                         </Button>
//                         <Button
//                             onClick={() => setTheme("system")}
//                             variant={theme === "system" ? "default" : "outline"}
//                             size="sm"
//                         >
//                             <Laptop className="mr-2 h-4 w-4" /> System
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



import { cn } from "@/lib/utils";
import { Settings, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "./ui/button";


const ThemeCustomizer = () => {

    const [customizationOpen, setCustomizationOpen] = useState(true);

    const { theme, setTheme } = useTheme();
    console.log(theme);


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


            <div className={`fixed max-w-[320px] w-full h-screen overflow-y-auto bg-white dark:bg-slate-800 end-0 top-0 z-[11] shadow-2xl duration-500 transition-transform ${customizationOpen ? 'translate-x-[0]' : 'translate-x-full'}`}>
                <div className="flex items-center gap-6 p-4 border-b border-neutral-200 dark:border-slate-700 justify-between">
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
            </div>
        </>
    );
};

export default ThemeCustomizer;