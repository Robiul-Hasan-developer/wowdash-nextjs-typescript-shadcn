
const CheckInOut = () => {
    return (
        <div className="card rounded-xl border-0">
            <div className="card-body py-12 px-4 flex items-center justify-center gap-[100px]">
                <div className="text-center">
                    <div className="relative inline-block">
                        <svg className="radial-progress max-w-[120px] !w-full !h-full" data-percentage="70"
                            viewBox="0 0 80 80">
                            <circle className="incomplete !stroke-[8px] stroke-green" cx="40" cy="40" r="35">
                            </circle>
                            <circle className="complete !stroke-[8px] stroke-green" cx="40" cy="40" r="35">
                            </circle>
                            <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                            </text>
                        </svg>
                        <span
                            className="w-[56px] h-[56px] rounded-[50%] bg-neutral-200 text-success-600 flex justify-center items-center absolute start-[50%] top-[50%] translate-x-[-50%] rtl:translate-x-[50%] translate-y-[-50%]">
                            <i
                                className="ri-contract-left-fill w-6 h-6 bg-success-600 text-md text-white flex justify-center items-center rounded-[50%]"></i>
                        </span>
                    </div>
                    <div className="mt-1.5">
                        <h5 className="mb-1">70%</h5>
                        <span className="text-neutral-600">Check In</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative inline-block">
                        <svg className="radial-progress max-w-[120px] !w-full !h-full" data-percentage="30"
                            viewBox="0 0 80 80">
                            <circle className="incomplete !stroke-[8px] stroke-warning" cx="40" cy="40" r="35">
                            </circle>
                            <circle className="complete !stroke-[8px] stroke-warning" cx="40" cy="40" r="35">
                            </circle>
                            <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                            </text>
                        </svg>
                        <span
                            className="w-[56px] h-[56px] rounded-[50%] bg-neutral-200 text-warning-600 flex justify-center items-center absolute start-[50%] top-[50%] translate-x-[-50%] rtl:translate-x-[50%] translate-y-[-50%]">
                            <i
                                className="ri-contract-right-fill w-6 h-6 bg-warning-600 text-md text-white flex justify-center items-center rounded-[50%]"></i>
                        </span>
                    </div>
                    <div className="mt-1.5">
                        <h5 className="mb-1">30%</h5>
                        <span className="text-neutral-600">Check Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckInOut;