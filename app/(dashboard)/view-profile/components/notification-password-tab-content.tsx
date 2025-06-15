// import React from 'react';
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";

// const NotificationPasswordTabContent = () => {
//     return (
//         <div>
//             <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
//                 <Label htmlFor="companzNew" className="absolute w-full h-full start-0 top-0"></Label>
//                 <div className="flex items-center gap-3 justify-between">
//                     <span className="form-check-Label line-height-1 font-medium text-secondary-light">Company News</span>
//                     <Input className="form-check-Input" type="checkbox" role="switch" id="companzNew" />
//                 </div>
//             </div>
//             <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
//                 <Label htmlFor="pushNotifcation" className="absolute w-full h-full start-0 top-0"></Label>
//                 <div className="flex items-center gap-3 justify-between">
//                     <span className="form-check-Label line-height-1 font-medium text-secondary-light">Push Notification</span>
//                     <Input className="form-check-Input" type="checkbox" role="switch" id="pushNotifcation" checked />
//                 </div>
//             </div>
//             <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
//                 <Label htmlFor="weeklyLetters" className="absolute w-full h-full start-0 top-0"></Label>
//                 <div className="flex items-center gap-3 justify-between">
//                     <span className="form-check-Label line-height-1 font-medium text-secondary-light">Weekly News Letters</span>
//                     <Input className="form-check-Input" type="checkbox" role="switch" id="weeklyLetters" checked />
//                 </div>
//             </div>
//             <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
//                 <Label htmlFor="meetUp" className="absolute w-full h-full start-0 top-0"></Label>
//                 <div className="flex items-center gap-3 justify-between">
//                     <span className="form-check-Label line-height-1 font-medium text-secondary-light">Meetups Near you</span>
//                     <Input className="form-check-Input" type="checkbox" role="switch" id="meetUp" />
//                 </div>
//             </div>
//             <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
//                 <Label htmlFor="orderNotification" className="absolute w-full h-full start-0 top-0"></Label>
//                 <div className="flex items-center gap-3 justify-between">
//                     <span className="form-check-Label line-height-1 font-medium text-secondary-light">Orders Notifications</span>
//                     <Input className="form-check-Input" type="checkbox" role="switch" id="orderNotification" checked />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NotificationPasswordTabContent;


"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const NotificationPasswordTabContent = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <Label htmlFor="companyNews" className="font-medium text-sm text-muted-foreground">
                    Company News
                </Label>
                <Switch id="companyNews" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
                <Label htmlFor="pushNotification" className="font-medium text-sm text-muted-foreground">
                    Push Notification
                </Label>
                <Switch id="pushNotification" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
                <Label htmlFor="weeklyLetters" className="font-medium text-sm text-muted-foreground">
                    Weekly News Letters
                </Label>
                <Switch id="weeklyLetters" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
                <Label htmlFor="meetUp" className="font-medium text-sm text-muted-foreground">
                    Meetups Near You
                </Label>
                <Switch id="meetUp" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
                <Label htmlFor="orderNotification" className="font-medium text-sm text-muted-foreground">
                    Orders Notifications
                </Label>
                <Switch id="orderNotification" defaultChecked />
            </div>
        </div>
    );
};

export default NotificationPasswordTabContent;
