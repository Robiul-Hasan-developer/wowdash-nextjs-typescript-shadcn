import { useState } from "react";
import HeliumIcon from "../svg-icons/helium-icon";

const layouts = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon"];

const ThemeLayout = () => {

    const [layout, setLayout] = useState("hydrogen");


    const handleLayoutClick = (selectedLayout: any) => {
        setLayout(selectedLayout);
        document.documentElement.setAttribute("layout", selectedLayout);
    };

    return (
        <div className="theme-setting-item">
            <h6 className="font-medium text-base mb-3">Theme Layout</h6>

            <div className="grid grid-cols-3 gap-4">
                {layouts.map((item, index) => (
                    <div className="" key={index}>
                        <div
                            className={`cursor-pointer border border-neutral-300 flex items-center justify-center hover:bg-primary/10 duration-300 h-[92px] rounded-md ring-2 dark:border-slate-500 ${layout === item ? "ring-primary text-primary dark:text-primary" : "ring-transparent text-neutral-500 dark:text-white"}`}
                            onClick={() => handleLayoutClick(item)}
                        >
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 56" fill="none" aria-label="hydrogen" className="h-[92px] w-full"><path fill="currentColor" fillRule="evenodd" d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z" clipRule="evenodd" opacity="0.1"></path><path fill="currentColor" d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path><path fill="currentColor" d="M32 9a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H37a5 5 0 0 1-5-5V9Zm-5-8h1v54h-1V1Z" opacity="0.1"></path><path fill="currentColor" d="M5 17.5A1.5 1.5 0 0 1 6.5 16h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 5 17.5Z" opacity="0.7"></path><path fill="currentColor" d="M5 23.5A1.5 1.5 0 0 1 6.5 22h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 5 23.5Z" opacity="0.4"></path></svg> */}
                            <HeliumIcon />
                        </div>
                        <h6
                            className={`text-center capitalize text-sm font-medium pt-2 cursor-pointer hover:text-blue-500 ${layout === item ? "text-primary dark:text-primary" : "text-neutral-500 dark:text-neutral-200"}`}
                            onClick={() => handleLayoutClick(item)}
                        >{item}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeLayout;