import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabsWithTableCard = () => {
    return (
        <>
            <Tabs defaultValue="latestRegistered" className="">
                <TabsList className='active-gradient'>
                    <TabsTrigger value="latestRegistered" className='py-2.5 px-4 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 data-[state=active]:bg-gradient h-[50px] border-0 border-t-2 border-neutral-200 data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                        Latest Registered
                        <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                    </TabsTrigger>
                    <TabsTrigger value="latestSubscribe" className='py-2.5 px-4 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 data-[state=active]:bg-gradient h-[50px] border-0 border-t-2 border-neutral-200 data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                        Latest Subscribe
                        <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="latestRegistered">Make changes to your latestRegistered here.</TabsContent>
                <TabsContent value="latestSubscribe">Change your latestSubscribe here.</TabsContent>
            </Tabs>

        </>
    );
};

export default TabsWithTableCard;