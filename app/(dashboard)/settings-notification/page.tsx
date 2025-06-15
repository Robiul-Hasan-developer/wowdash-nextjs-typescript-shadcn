// import React from "react";
// import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// const ViewProfile = () => {
//     return (
//         <>
//             <DashboardBreadcrumb title="Notification" text="Notification" />

//             <div>
//                 <div className="card h-full rounded-xl overflow-hidden border-0 p-6">
//                     <div className="card-body p-0">
//                         <form action="#">
//                             <div className="grid md:grid-cols-2 gap-x-5">
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseSecretKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase secret key</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseSecretKey" placeholder="Firebase secret key" value="AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebasePublicVapidKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase public vapid key (key pair)</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebasePublicVapidKey" placeholder="Firebase public vapid key (key pair)" value="BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseAPIKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  API Key</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseAPIKey" placeholder="Firebase  API Key" value="AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseAuthDomain" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  AUTH Domain</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseAuthDomain" placeholder="Firebase  AUTH Domain" value="wowdash.firebaseapp.com" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseProjectID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase Project ID</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseProjectID" placeholder="Firebase Project ID" value="wowdash.com" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseStorageBucket" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase Storage Bucket</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseStorageBucket" placeholder="Firebase Storage Bucket" value="wowdash.appsport.com" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseMessageSenderID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  Message Sender ID</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseMessageSenderID" placeholder="Firebase  Message Sender ID" value="52362145" />
//                                 </div>
//                                 <div className="mb-5">
//                                     <Label htmlFor="firebaseAppID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  App ID</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseAppID" placeholder="Firebase  App ID" value="1:843456771665:web:ac1e3115e9e17ee1582a70" />
//                                 </div>
//                                 <div className="mb-5 col-span-2">
//                                     <Label htmlFor="firebaseMeasurmentID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  Measurement ID</Label>
//                                     <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="firebaseMeasurmentID" placeholder="Firebase  Measurement ID" value="G-GSJPS921XW" />
//                                 </div>

//                                 <div className="flex items-center justify-center gap-3 mt-6 col-span-2">
//                                     <Button type="button" className="h-[48px] border border-red-600 bg-transparent hover:bg-red-600/20 dark:hover:bg-red-600/20 text-red-600 text-base px-14 py-[11px] rounded-lg">
//                                         Reset
//                                     </Button>
//                                     <Button type="button" className="h-[48px] text-base px-14 py-3 rounded-lg">
//                                         Save Changes
//                                     </Button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };
// export default ViewProfile;



'use client';

import React from 'react';
import DashboardBreadcrumb from '@/components/layout/dashboard-breadcrumb';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const firebaseFields = [
    { id: 'firebaseSecretKey', label: 'Firebase Secret Key', value: 'AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP' },
    { id: 'firebasePublicVapidKey', label: 'Firebase Public Vapid Key (key pair)', value: 'BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA' },
    { id: 'firebaseAPIKey', label: 'Firebase API Key', value: 'AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM' },
    { id: 'firebaseAuthDomain', label: 'Firebase AUTH Domain', value: 'wowdash.firebaseapp.com' },
    { id: 'firebaseProjectID', label: 'Firebase Project ID', value: 'wowdash.com' },
    { id: 'firebaseStorageBucket', label: 'Firebase Storage Bucket', value: 'wowdash.appsport.com' },
    { id: 'firebaseMessageSenderID', label: 'Firebase Message Sender ID', value: '52362145' },
    { id: 'firebaseAppID', label: 'Firebase App ID', value: '1:843456771665:web:ac1e3115e9e17ee1582a70' },
    { id: 'firebaseMeasurementID', label: 'Firebase Measurement ID', value: 'G-GSJPS921XW', colSpan: 2 },
];

const ViewProfile = () => {
    return (
        <>
            <DashboardBreadcrumb title="Notification" text="Notification" />

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
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
