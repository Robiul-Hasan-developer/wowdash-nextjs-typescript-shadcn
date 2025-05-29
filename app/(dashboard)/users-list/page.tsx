import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SearchBox from "@/components/shared/search-box";
import UsersListTable from './../../../components/table/users-list-table';
import CustomSelect from "@/components/shared/custom-select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const LineChartPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Users List" text="Users List" />

            <Card className="card h-full !p-0 !block border-0 overflow-hidden">
                <CardHeader className="border-b !block border-neutral-200 dark:border-slate-600 !py-4 px-6">
                    <CardTitle className="text-lg font-semibold">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center flex-wrap gap-3 justify-between">
                            <div className="flex items-center flex-wrap gap-3">
                                <span className="text-base font-medium text-secondary-light mb-0">Show</span>
                                <CustomSelect
                                    placeholder="1"
                                    options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                                />
                                <SearchBox />
                                <CustomSelect
                                    placeholder="Status"
                                    options={["Status", "Active", "Inactive"]}
                                />
                            </div>
                            <Button className={cn(`w-auto h-11`)} asChild>
                                <Link href="#">
                                    <Plus className="w-5 h-5" />
                                    Add New User
                                </Link>
                            </Button>
                        </div>
                    </CardTitle>
                </CardHeader>

                <CardContent className="card-body p-6">
                    <UsersListTable />
                </CardContent>
            </Card>

        </>
    );
};
export default LineChartPage;
