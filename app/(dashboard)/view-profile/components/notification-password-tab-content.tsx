import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const NotificationPasswordTabContent = () => {
    return (
        <div>
            <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                <Label htmlFor="companzNew" className="absolute w-full h-full start-0 top-0"></Label>
                <div className="flex items-center gap-3 justify-between">
                    <span className="form-check-Label line-height-1 font-medium text-secondary-light">Company News</span>
                    <Input className="form-check-Input" type="checkbox" role="switch" id="companzNew" />
                </div>
            </div>
            <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                <Label htmlFor="pushNotifcation" className="absolute w-full h-full start-0 top-0"></Label>
                <div className="flex items-center gap-3 justify-between">
                    <span className="form-check-Label line-height-1 font-medium text-secondary-light">Push Notification</span>
                    <Input className="form-check-Input" type="checkbox" role="switch" id="pushNotifcation" checked />
                </div>
            </div>
            <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                <Label htmlFor="weeklyLetters" className="absolute w-full h-full start-0 top-0"></Label>
                <div className="flex items-center gap-3 justify-between">
                    <span className="form-check-Label line-height-1 font-medium text-secondary-light">Weekly News Letters</span>
                    <Input className="form-check-Input" type="checkbox" role="switch" id="weeklyLetters" checked />
                </div>
            </div>
            <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                <Label htmlFor="meetUp" className="absolute w-full h-full start-0 top-0"></Label>
                <div className="flex items-center gap-3 justify-between">
                    <span className="form-check-Label line-height-1 font-medium text-secondary-light">Meetups Near you</span>
                    <Input className="form-check-Input" type="checkbox" role="switch" id="meetUp" />
                </div>
            </div>
            <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                <Label htmlFor="orderNotification" className="absolute w-full h-full start-0 top-0"></Label>
                <div className="flex items-center gap-3 justify-between">
                    <span className="form-check-Label line-height-1 font-medium text-secondary-light">Orders Notifications</span>
                    <Input className="form-check-Input" type="checkbox" role="switch" id="orderNotification" checked />
                </div>
            </div>
        </div>
    );
};

export default NotificationPasswordTabContent;