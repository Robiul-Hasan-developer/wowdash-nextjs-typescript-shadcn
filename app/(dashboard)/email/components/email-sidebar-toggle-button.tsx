"use client"

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React from 'react';

type EmailSidebarToggleButtonPropsType = {
    onToggle: () => void;
    isOpen: boolean;
};


const EmailSidebarToggleButton = ({ onToggle }: EmailSidebarToggleButtonPropsType) => {
    return (
        <div className="flex justify-end mb-4">
            <Button className="bg-neutral-200 dark:bg-slate-600 text-neutral-900 xl:hidden lg:block" onClick={onToggle}>
                <Menu className='w-6' />
            </Button>
        </div>
    );
};

export default EmailSidebarToggleButton;