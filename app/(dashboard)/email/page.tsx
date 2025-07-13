"use client";

import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import EmailSidebar from "@/app/(dashboard)/components/email-sidebar";
import EmailList from "@/app/(dashboard)/email/components/email-list";
import EmailHeader from "@/app/(dashboard)/email/components/email-header";
import EmailSidebarToggleButton from "@/app/(dashboard)/email/components/email-sidebar-toggle-button";
import EmailSidebarOverlay from "@/app/(dashboard)/components/email-sidebar-overlay";

const EmailPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-6 relative">
                <EmailSidebarOverlay />

                {/* Sidebar */}
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <EmailSidebar />
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <EmailSidebarToggleButton />

                    <div className="card h-full !p-0 border-0 email-card">
                        <div className="card-header border-b border-neutral-200 dark:border-slate-700 bg-white dark:bg-[#273142] py-4 px-6">
                            <EmailHeader />
                        </div>
                        <div className="card-body p-0">
                            <EmailList />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default EmailPage;