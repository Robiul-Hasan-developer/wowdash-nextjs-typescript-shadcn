import AudienceStatsChart from '@/components/charts/audience-stats-chart';
import CustomSelect from '@/components/shared/custom-select';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronUp } from 'lucide-react';

const PodcastEarningsOverviewCard = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-6">
                <div className="flex items-center flex-wrap gap-2 justify-between pb-6">
                    <h6 className="mb-0 font-bold text-lg">Earnings Overview</h6>
                    <CustomSelect
                        placeholder="Yearly"
                        options={["Yearly", "Monthly", "Weekly", "Today"]}
                    />
                </div>

                <ul className="flex flex-wrap items-center justify-center mb-3 gap-3">
                    <li className="flex items-center gap-2">
                        <span className="w-[12px] h-[8px] rounded-[50rem] bg-blue-500"></span>
                        <span className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">Income:
                            <span className="text-blue-light font-bold text-xl ms-1"> $26,201</span>
                        </span>
                        <div className="flex items-center gap-1 font-semibold text-success-600 dark:text-success-500">
                            <span className="text-success-600 dark:text-success-500">10%</span>
                            <ChevronUp />
                        </div>
                    </li>
                </ul>

                <div className="-mx-6">
                    <AudienceStatsChart />
                </div>

            </CardContent>
        </Card>
    );
};

export default PodcastEarningsOverviewCard;