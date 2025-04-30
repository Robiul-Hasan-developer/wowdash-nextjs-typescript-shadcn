import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card";

const TabsWithTableCard = () => {
    return (
        <Card className="card">
            <CardContent className="px-0">
                <Tabs defaultValue="latestRegistered" className="gap-4">
                    <TabsList className='active-gradient bg-transparent rounded-none h-[50px]'>
                        <TabsTrigger value="latestRegistered" className='py-2.5 px-4 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                            Latest Registered
                            <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                        </TabsTrigger>
                        <TabsTrigger value="latestSubscribe" className='py-2.5 px-4 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 dark:border-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                            Latest Subscribe
                            <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="latestRegistered">Make changes to your latestRegistered here.</TabsContent>
                    <TabsContent value="latestSubscribe">Change your latestSubscribe here.</TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

export default TabsWithTableCard;