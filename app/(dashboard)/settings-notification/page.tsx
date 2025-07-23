'use client';

import type { Metadata } from "next";
import React from 'react';
import DashboardBreadcrumb from '@/components/layout/dashboard-breadcrumb';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: "Notification Settings & Preferences | WowDash Admin Dashboard",
    description:
        "Configure and customize notification settings and preferences in the WowDash Admin Dashboard built with Next.js and Tailwind CSS.",
};

const firebaseFields = [
    {
        id: 'firebaseSecretKey',
        label: 'Firebase Secret Key',
        value: 'AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP'
    },
    {
        id: 'firebasePublicVapidKey',
        label: 'Firebase Public Vapid Key (key pair)',
        value: 'BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA'
    },
    {
        id: 'firebaseAPIKey',
        label: 'Firebase API Key',
        value: 'AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM'
    },
    {
        id: 'firebaseAuthDomain',
        label: 'Firebase AUTH Domain',
        value: 'wowdash.firebaseapp.com'
    },
    {
        id: 'firebaseProjectID',
        label: 'Firebase Project ID',
        value: 'wowdash.com'
    },
    {
        id: 'firebaseStorageBucket',
        label: 'Firebase Storage Bucket',
        value: 'wowdash.appsport.com'
    },
    {
        id: 'firebaseMessageSenderID',
        label: 'Firebase Message Sender ID',
        value: '52362145'
    },
    {
        id: 'firebaseAppID',
        label: 'Firebase App ID',
        value: '1:843456771665:web:ac1e3115e9e17ee1582a70'
    },
    {
        id: 'firebaseMeasurementID',
        label: 'Firebase Measurement ID',
        value: 'G-GSJPS921XW',
        colSpan: 2
    },
];

const ViewProfile = () => {
    return (
        <>
            <DashboardBreadcrumb title="Notification" text="Notification" />

            <div className="rounded-xl border border-border bg-white dark:bg-[#273142] p-6 shadow-sm">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-5">
                        {firebaseFields.map(({ id, label, value, colSpan }) => (
                            <div key={id} className={`${colSpan === 2 ? 'md:col-span-2' : ''}`}>
                                <Label htmlFor={id} className="text-sm font-semibold mb-2 block text-foreground">
                                    {label}
                                </Label>
                                <Input
                                    id={id}
                                    type="text"
                                    defaultValue={value}
                                    placeholder={label}
                                    className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0"
                                />
                            </div>
                        ))}

                        <div className="flex items-center justify-center gap-4 mt-6 md:col-span-2">
                            <Button
                                type="reset"
                                variant="outline"
                                className="border-destructive text-destructive hover:bg-destructive/10 h-12 px-10"
                            >
                                Reset
                            </Button>
                            <Button type="submit" className="h-12 px-10">
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ViewProfile;
