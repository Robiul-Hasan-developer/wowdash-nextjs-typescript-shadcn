import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import RadialProgress from "./radial-progress";

const CheckInOut = () => {
    return (
        <div className="card rounded-xl border-0">
            <div className="card-body py-12 px-4 flex items-center justify-between gap-24 flex-wrap">
                <RadialProgress
                    percentage={70}
                    color="#45b369"
                    size={140}
                    strokeWidth={12}
                    icon={
                        <span className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center text-white">
                            <ArrowLeftToLine className="w-4 h-4" />
                        </span>
                    }
                    label="Check In"
                />

                <RadialProgress
                    percentage={30}
                    color="#ff9f29"
                    size={140}
                    strokeWidth={12}
                    icon={
                        <span className="w-8 h-8 bg-yellow-500 rounded-full flex justify-center items-center text-white">
                            <ArrowRightToLine className="w-4 h-4" />
                        </span>
                    }
                    label="Check Out"
                />
            </div>
        </div>
    );
};

export default CheckInOut;
