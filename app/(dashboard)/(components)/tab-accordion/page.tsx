import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import TabsImage1 from "@/public/assets/images/tabs/tabs-image1.png";
import TabsImage2 from "@/public/assets/images/tabs/tabs-image2.png";

import DefaultCardComponent from "../components/default-card-component";
import { Home, FileText, User, Settings } from 'lucide-react';

const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Avatar" text="Avatar" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Default Tabs">
            <Tabs defaultValue="DefaultHome" className="gap-0">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-slate-600">
                <TabsList className='bg-transparent dark:bg-transparent rounded-none h-[50px]  p-0'>
                  <TabsTrigger value="DefaultHome" className='py-2.5 px-4 font-medium text-base inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 border-0 border-b-1 border-transparent dark:border-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 dark:data-[state=active]:bg-transparent rounded-[0] data-[state=active]:shadow-none cursor-pointer translate-y-px'>
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="DefaultDetails" className='py-2.5 px-4 font-medium text-base inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 border-0 border-b-1 border-transparent dark:border-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 dark:data-[state=active]:bg-transparent rounded-[0] data-[state=active]:shadow-none cursor-pointer translate-y-px'>
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="DefaultProfile" className='py-2.5 px-4 font-medium text-base inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 border-0 border-b-1 border-transparent dark:border-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 dark:data-[state=active]:bg-transparent rounded-[0] data-[state=active]:shadow-none cursor-pointer translate-y-px'>
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="DefaultSettings" className='py-2.5 px-4 font-medium text-base inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 border-0 border-b-1 border-transparent dark:border-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 dark:data-[state=active]:bg-transparent rounded-[0] data-[state=active]:shadow-none cursor-pointer translate-y-px'>
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pt-6">
                <TabsContent value="DefaultHome" className="p-0">
                  <h6 className="text-lg mb-2">Title Home </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="DefaultDetails" className="p-0">
                  <h6 className="text-lg mb-2">Title Details </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="DefaultProfile" className="p-0">
                  <h6 className="text-lg mb-2">Title Profile </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="DefaultSettings" className="p-0">
                  <h6 className="text-lg mb-2">Title Settings </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
              </div>
            </Tabs>
          </DefaultCardComponent>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Focus Tabs">
            <Tabs defaultValue="FocusHome" className="gap-0">
              <div className="flex items-center justify-between">
                <TabsList className='bg-transparent dark:bg-transparent rounded-none h-[50px]  p-0'>
                  <TabsTrigger value="FocusHome" className='h-10 px-4 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-600/10 dark:data-[state=active]:bg-blue-600/20 duration-300 !shadow-none dark:text-white'>
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="FocusDetails" className='h-10 px-4 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-600/10 dark:data-[state=active]:bg-blue-600/20 duration-300 !shadow-none dark:text-white'>
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="FocusProfile" className='h-10 px-4 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-600/10 dark:data-[state=active]:bg-blue-600/20 duration-300 !shadow-none dark:text-white'>
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="FocusSettings" className='h-10 px-4 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-600/10 dark:data-[state=active]:bg-blue-600/20 duration-300 !shadow-none dark:text-white'>
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pt-6">
                <TabsContent value="FocusHome" className="p-0">
                  <h6 className="text-lg mb-2">Title Home </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="FocusDetails" className="p-0">
                  <h6 className="text-lg mb-2">Title Details </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="FocusProfile" className="p-0">
                  <h6 className="text-lg mb-2">Title Profile </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
                <TabsContent value="FocusSettings" className="p-0">
                  <h6 className="text-lg mb-2">Title Settings </h6>
                  <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                  <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                </TabsContent>
              </div>
            </Tabs>
          </DefaultCardComponent>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Button Tabs">
            <Tabs defaultValue="ButtonHome" className="gap-0">
              <div className="flex items-center justify-between">
                <TabsList className='bg-transparent dark:bg-transparent rounded-none h-[50px]  p-0'>
                  <TabsTrigger value="ButtonHome" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 !shadow-none dark:text-white'>
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="ButtonDetails" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 !shadow-none dark:text-white'>
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="ButtonProfile" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 !shadow-none dark:text-white'>
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="ButtonSettings" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 !shadow-none dark:text-white'>
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pt-6">
                <TabsContent value="ButtonHome" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Home</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ButtonDetails" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage2} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Details</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ButtonProfile" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Profile</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ButtonSettings" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage2} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Settings</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </DefaultCardComponent>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Icon Button Tabs">
            <Tabs defaultValue="IconButtonHome" className="gap-0">
              <div className="flex items-center justify-between">
                <TabsList className='bg-transparent dark:bg-transparent rounded-none h-[50px]  p-0'>
                  <TabsTrigger value="IconButtonHome" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 dark:data-[state=active]:bg-blue-600 !shadow-none dark:text-white flex items-center gap-2'>
                    <Home className="w-4 h-4" />
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="IconButtonDetails" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 dark:data-[state=active]:bg-blue-600 !shadow-none dark:text-white flex items-center gap-2'>
                    <Home className="w-4 h-4" />
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="IconButtonProfile" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 dark:data-[state=active]:bg-blue-600 !shadow-none dark:text-white flex items-center gap-2'>
                    <Home className="w-4 h-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="IconButtonSettings" className='h-10 px-4 data-[state=active]:text-white data-[state=active]:bg-blue-600 dark:data-[state=active]:bg-blue-600 !shadow-none dark:text-white flex items-center gap-2'>
                    <Home className="w-4 h-4" />
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pt-6">
                <TabsContent value="IconButtonHome" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Home</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="IconButtonDetails" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage2} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Details</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="IconButtonProfile" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Profile</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="IconButtonSettings" className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={TabsImage2} className="rounded-lg" alt="Image" />
                    </div>
                    <div className="grow">
                      <h6 className="text-lg mb-2">Title Settings</h6>
                      <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                      <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </DefaultCardComponent>
        </div>


        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Default Tabs">
            Datas
          </DefaultCardComponent>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <DefaultCardComponent title="Default Tabs">
            Datas
          </DefaultCardComponent>
        </div>
      </div>





      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
            <h6 className="text-lg mb-0">Default Tabs </h6>
          </div>
          <div className="card-body p-6">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold border-b-2 rounded-t-lg" id="default-home-tab" data-tabs-target="#default-home" type="button" role="tab" aria-controls="default-home" aria-selected="false">Home</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="default-details-tab" data-tabs-target="#default-details" type="button" role="tab" aria-controls="default-details" aria-selected="false">Details</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="default-profile-tab" data-tabs-target="#default-profile" type="button" role="tab" aria-controls="default-profile" aria-selected="false">Profile</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="default-settings-tab" data-tabs-target="#default-settings" type="button" role="tab" aria-controls="default-settings" aria-selected="false">Settings</button>
                </li>
              </ul>
            </div>
            <div id="default-tab-content">
              <div id="default-home" role="tabpanel" aria-labelledby="default-home-tab">
                <h6 className="text-lg mb-2">Title Home</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="default-details" role="tabpanel" aria-labelledby="default-details-tab">
                <h6 className="text-lg mb-2">Title Details</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="default-profile" role="tabpanel" aria-labelledby="default-profile-tab">
                <h6 className="text-lg mb-2">Title Profile</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="default-settings" role="tabpanel" aria-labelledby="default-settings-tab">
                <h6 className="text-lg mb-2">Title Settings</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
            <h6 className="text-lg mb-0">Focus Tabs </h6>
          </div>
          <div className="card-body p-6">
            <div className="mb-4 style-pill-focus">
              <ul className="flex flex-wrap text-sm font-medium text-center" id="focus-tab" data-tabs-toggle="#focus-tab-content" role="tablist">
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md" id="focus-home-tab" data-tabs-target="#focus-home" type="button" role="tab" aria-controls="focus-home" aria-selected="false">Home</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="focus-details-tab" data-tabs-target="#focus-details" type="button" role="tab" aria-controls="focus-details" aria-selected="false">Details</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="focus-profile-tab" data-tabs-target="#focus-profile" type="button" role="tab" aria-controls="focus-profile" aria-selected="false">Profile</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="focus-settings-tab" data-tabs-target="#focus-settings" type="button" role="tab" aria-controls="focus-settings" aria-selected="false">Settings</button>
                </li>
              </ul>
            </div>
            <div id="focus-tab-content">
              <div id="focus-home" role="tabpanel" aria-labelledby="focus-home-tab">
                <h6 className="text-lg mb-2">Title Home</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="focus-details" role="tabpanel" aria-labelledby="focus-details-tab">
                <h6 className="text-lg mb-2">Title Details</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="focus-profile" role="tabpanel" aria-labelledby="focus-profile-tab">
                <h6 className="text-lg mb-2">Title Profile</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="focus-settings" role="tabpanel" aria-labelledby="focus-settings-tab">
                <h6 className="text-lg mb-2">Title Settings</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
            <h6 className="text-lg mb-0">Button Tabs</h6>
          </div>
          <div className="card-body p-6">
            <div className="mb-4 style-pill-button">
              <ul className="flex flex-wrap text-sm font-medium text-center" id="button-tab" data-tabs-toggle="#button-tab-content" role="tablist">
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md" id="button-home-tab" data-tabs-target="#button-home" type="button" role="tab" aria-controls="button-home" aria-selected="false">Home</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-details-tab" data-tabs-target="#button-details" type="button" role="tab" aria-controls="button-details" aria-selected="false">Details</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-profile-tab" data-tabs-target="#button-profile" type="button" role="tab" aria-controls="button-profile" aria-selected="false">Profile</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-settings-tab" data-tabs-target="#button-settings" type="button" role="tab" aria-controls="button-settings" aria-selected="false">Settings</button>
                </li>
              </ul>
            </div>
            <div id="button-tab-content">
              <div id="button-home" role="tabpanel" aria-labelledby="button-home-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Home</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-details" role="tabpanel" aria-labelledby="button-details-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Details</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-profile" role="tabpanel" aria-labelledby="button-profile-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Profile</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-settings" role="tabpanel" aria-labelledby="button-settings-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Settings</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
            <h6 className="text-lg mb-0">Icon Button Tabs</h6>
          </div>
          <div className="card-body p-6">
            <div className="mb-4 style-pill-button">
              <ul className="flex flex-wrap text-sm font-medium text-center" id="button-icon-tab" data-tabs-toggle="#button-icon-tab-content" role="tablist">
                <li role="presentation">
                  <button className="px-4 py-2.5 font-semibold rounded-md flex items-center gap-2" id="button-icon-home-tab" data-tabs-target="#button-icon-home" type="button" role="tab" aria-controls="button-icon-home" aria-selected="false">
                    {/* <iconify-icon icon="solar:home-smile-angle-outline" className="text-md"></iconify-icon> */}
                    Home
                  </button>
                </li>
                <li role="presentation">
                  <button className="px-4 py-2.5 font-semibold rounded-md flex items-center gap-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-icon-details-tab" data-tabs-target="#button-icon-details" type="button" role="tab" aria-controls="button-icon-details" aria-selected="false">
                    {/* <iconify-icon icon="solar:home-smile-angle-outline" className="text-md"></iconify-icon> */}
                    Details
                  </button>
                </li>
                <li role="presentation">
                  <button className="px-4 py-2.5 font-semibold rounded-md flex items-center gap-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-icon-profile-tab" data-tabs-target="#button-icon-profile" type="button" role="tab" aria-controls="button-icon-profile" aria-selected="false">
                    {/* <iconify-icon icon="solar:home-smile-angle-outline" className="text-md"></iconify-icon> */}
                    Profile
                  </button>
                </li>
                <li role="presentation">
                  <button className="px-4 py-2.5 font-semibold rounded-md flex items-center gap-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-icon-settings-tab" data-tabs-target="#button-icon-settings" type="button" role="tab" aria-controls="button-icon-settings" aria-selected="false">
                    {/* <iconify-icon icon="solar:home-smile-angle-outline" className="text-md"></iconify-icon> */}
                    Settings
                  </button>
                </li>
              </ul>
            </div>
            <div id="button-icon-tab-content">
              <div id="button-icon-home" role="tabpanel" aria-labelledby="button-icon-home-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Home</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-icon-details" role="tabpanel" aria-labelledby="button-icon-details-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Details</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-icon-profile" role="tabpanel" aria-labelledby="button-icon-profile-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Profile</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
              <div id="button-icon-settings" role="tabpanel" aria-labelledby="button-icon-settings-tab">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image src={TabsImage1} className="rounded-lg" alt="Image" />
                  </div>
                  <div className="grow">
                    <h6 className="text-lg mb-2">Title Settings</h6>
                    <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                    <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
            <h6 className="text-lg mb-0">Vertical Nav Tabs</h6>
          </div>
          <div className="card-body p-6 flex items-start gap-6">
            <div className="style-pill-button">
              <ul className="flex flex-wrap text-sm font-medium text-center" id="vertical-tab" data-tabs-toggle="#vertical-tab-content" role="tablist">
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md" id="vertical-home-tab" data-tabs-target="#vertical-home" type="button" role="tab" aria-controls="vertical-home" aria-selected="false">Home</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="vertical-details-tab" data-tabs-target="#vertical-details" type="button" role="tab" aria-controls="vertical-details" aria-selected="false">Details</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="vertical-profile-tab" data-tabs-target="#vertical-profile" type="button" role="tab" aria-controls="vertical-profile" aria-selected="false">Profile</button>
                </li>
                <li role="presentation">
                  <button className="inline-block px-4 py-2.5 font-semibold rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="vertical-settings-tab" data-tabs-target="#vertical-settings" type="button" role="tab" aria-controls="vertical-settings" aria-selected="false">Settings</button>
                </li>
              </ul>
            </div>
            <div id="vertical-tab-content">
              <div id="vertical-home" role="tabpanel" aria-labelledby="vertical-home-tab">
                <h6 className="text-lg mb-2">Title Home</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
              </div>
              <div id="vertical-details" role="tabpanel" aria-labelledby="vertical-details-tab">
                <h6 className="text-lg mb-2">Title Details</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
              </div>
              <div id="vertical-profile" role="tabpanel" aria-labelledby="vertical-profile-tab">
                <h6 className="text-lg mb-2">Title Profile</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
              </div>
              <div id="vertical-settings" role="tabpanel" aria-labelledby="vertical-settings-tab">
                <h6 className="text-lg mb-2">Title Settings</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to </p>
                <p className="text-secondary-light mb-0"> make a type specimen book. It has survived not industry's standard dummy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-0 overflow-hidden relative rounded-xl h-full border-0">
          <div className="card-header pb-0 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600 flex items-center flex-wrap justify-between">
            <h6 className="text-lg mb-0">Card Header Tabs</h6>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="card-title-tab" data-tabs-toggle="#card-title-tab-content" role="tablist">
              <li role="presentation">
                <button className="inline-block px-4 py-2.5 pb-4 font-semibold border-b-2 rounded-t-lg" id="card-title-home-tab" data-tabs-target="#card-title-home" type="button" role="tab" aria-controls="card-title-home" aria-selected="false">Home</button>
              </li>
              <li role="presentation">
                <button className="inline-block px-4 py-2.5 pb-4 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="card-title-details-tab" data-tabs-target="#card-title-details" type="button" role="tab" aria-controls="card-title-details" aria-selected="false">Details</button>
              </li>
              <li role="presentation">
                <button className="inline-block px-4 py-2.5 pb-4 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="card-title-profile-tab" data-tabs-target="#card-title-profile" type="button" role="tab" aria-controls="card-title-profile" aria-selected="false">Profile</button>
              </li>
              <li role="presentation">
                <button className="inline-block px-4 py-2.5 pb-4 font-semibold border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="card-title-settings-tab" data-tabs-target="#card-title-settings" type="button" role="tab" aria-controls="card-title-settings" aria-selected="false">Settings</button>
              </li>
            </ul>
          </div>
          <div className="card-body p-6">
            <div id="card-title-tab-content">
              <div id="card-title-home" role="tabpanel" aria-labelledby="card-title-home-tab">
                <h6 className="text-lg mb-2">Title Home</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="card-title-details" role="tabpanel" aria-labelledby="card-title-details-tab">
                <h6 className="text-lg mb-2">Title Details</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="card-title-profile" role="tabpanel" aria-labelledby="card-title-profile-tab">
                <h6 className="text-lg mb-2">Title Profile</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
              <div id="card-title-settings" role="tabpanel" aria-labelledby="card-title-settings-tab">
                <h6 className="text-lg mb-2">Title Settings</h6>
                <p className="text-secondary-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
                <p className="text-secondary-light mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
};
export default TypographyPage;
