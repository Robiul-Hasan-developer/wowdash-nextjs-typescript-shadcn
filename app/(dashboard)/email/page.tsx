"use client";

import React, { useState } from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import EmailSidebar from "../components/email-sidebar";
import EmailList from "./components/email-list";
import EmailHeader from "./components/email-header";
import EmailSidebarToggleButton from "./components/email-sidebar-toggle-button";

const EmailPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <DashboardBreadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-6 relative">
                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[5] xl:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <EmailSidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <EmailSidebarToggleButton
                        onToggle={() => setIsSidebarOpen(true)}
                        isOpen={isSidebarOpen}
                    />

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