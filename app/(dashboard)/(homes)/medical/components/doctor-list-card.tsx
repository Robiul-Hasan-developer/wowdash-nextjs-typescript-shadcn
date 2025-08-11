import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CommonLink from "@/components/shared/common-link";

const DoctorListCard = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-0 flex flex-col justify-between gap-8">
                <div>
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Doctors List</h6>
                            <CommonLink />
                        </div>
                    </div>
                    <div className="card-body py-4 px-6">

                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DoctorListCard;