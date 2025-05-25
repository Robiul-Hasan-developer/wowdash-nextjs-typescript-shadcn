import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";


const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Tooltip & Popover" text="Tooltip & Popover" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DefaultCardComponent title="Default Tooltip">
          <div className="flex flex-wrap items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-purple-600/10 hover:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded-lg px-8 py-[11px]">
                    Secondary
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Secondary</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-green-600/10 hover:bg-green-600/25 text-green-600 dark:text-green-400 rounded-lg px-8 py-[11px]">
                    Success
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Success</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-cyan-600/10 hover:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400 rounded-lg px-8 py-[11px]">
                    Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Info</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-yellow-600/10 hover:bg-yellow-600/25 text-yellow-600 dark:text-yellow-400 rounded-lg px-8 py-[11px]">
                    Warning
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Warning</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-red-600/10 hover:bg-red-600/25 text-red-600 dark:text-red-400 rounded-lg px-8 py-[11px]">
                    Danger
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Danger</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] bg-neutral-600/10 hover:bg-neutral-600/25 text-neutral-600 dark:text-neutral-400 rounded-lg px-8 py-[11px]">
                    Dark
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Dark</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Default Position">
          <div className="flex flex-wrap items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border border-neutral-400 bg-transparent text-neutral-600 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg px-8 py-[11px]">
                    Tooltip On Top
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p>Tooltip On Top</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border border-neutral-400 bg-transparent text-neutral-600 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg px-8 py-[11px]">
                    Tooltip On Right
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  <p>Tooltip On Right</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border border-neutral-400 bg-transparent text-neutral-600 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg px-8 py-[11px]">
                    Tooltip On Left
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" align="center">
                  <p>Tooltip On Left</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border border-neutral-400 bg-transparent text-neutral-600 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg px-8 py-[11px]">
                    Tooltip On bottom
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  <p>Tooltip On bottom</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Tooltip Animation">
          <div className="flex flex-wrap items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-purple-600 hover:bg-purple-600/10 text-purple-600 dark:text-purple-400 rounded-lg px-8 py-[11px]">
                    Secondary
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Secondary</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-green-600 hover:bg-green-600/10 text-green-600 dark:text-green-400 rounded-lg px-8 py-[11px]">
                    Success
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Success</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-cyan-600 hover:bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 rounded-lg px-8 py-[11px]">
                    Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Info</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-yellow-600 hover:bg-yellow-600/10 text-yellow-600 dark:text-yellow-400 rounded-lg px-8 py-[11px]">
                    Warning
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Warning</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-red-600 hover:bg-red-600/10 text-red-600 dark:text-red-400 rounded-lg px-8 py-[11px]">
                    Danger
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Danger</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn border bg-transparent border-neutral-600 hover:bg-neutral-600/10 text-neutral-600 dark:text-neutral-400 rounded-lg px-8 py-[11px]">
                    Dark
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip Dark</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Tooltip Popover Positions">
          <div className="flex flex-wrap items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-8 py-[11px]">
                    Secondary
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Secondary</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-green-600 hover:bg-green-700 text-white rounded-lg px-8 py-[11px]">
                    Success
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Success</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-8 py-[11px]">
                    Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Info</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-8 py-[11px]">
                    Warning
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Warning</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-red-600 hover:bg-red-700 text-white rounded-lg px-8 py-[11px]">
                    Danger
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Danger</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-[46px] btn bg-neutral-600 hover:bg-neutral-700 text-white rounded-lg px-8 py-[11px]">
                    Dark
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="tooltip-arrow-white max-w-[255px] bg-white border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                  <div className="px-3 py-2 w-full">
                    <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark</h6>
                    <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Tooltip Text popup">
          CardDatasGoesHere
        </DefaultCardComponent>

        <DefaultCardComponent title="Tooltip Text with icon popup ">
          CardDatasGoesHere
        </DefaultCardComponent>

      </div>





      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <div className="card h-full p-0 border-0 overflow-hidden">
            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
              <h6 className="text-lg font-semibold mb-0">Tooltip Text popup</h6>
            </div>
            <div className="card-body p-6">
              <div className="flex flex-wrap items-center gap-3">
                <ul className="list-decimal ps-5">
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description1" data-popover-placement="right" className="text-blue-600" type="button"> popup </Button>
                  </li>
                  <li data-popover id="popover-description1" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-blue-600 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark 1 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description2" data-popover-placement="right" className="text-blue-600" type="button"> popup </Button>
                  </li>
                  <li data-popover id="popover-description2" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-blue-600 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark 2 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description3" data-popover-placement="right" className="text-blue-600" type="button"> popup </Button>
                  </li>
                  <li data-popover id="popover-description3" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-blue-600 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark 3 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description4" data-popover-placement="right" className="text-blue-600" type="button"> popup </Button>
                  </li>
                  <li data-popover id="popover-description4" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-blue-600 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark 4 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light">
                    This is tooltip text
                    <Button data-popover-target="popover-description5" data-popover-placement="right" className="text-blue-600" type="button"> popup </Button>
                  </li>
                  <li data-popover id="popover-description5" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-blue-600 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Title Dark 5 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div data-popper-arrow></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-full p-0 border-0 overflow-hidden">
            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
              <h6 className="text-lg font-semibold mb-0">Tooltip Text with icon popup </h6>
            </div>
            <div className="card-body p-6">
              <div className="flex flex-wrap items-center gap-3">
                <ul className="list-decimal ps-5">
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description11" data-popover-placement="right" className="text-neutral-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-600" type="button"> <i className="ri-question-line"></i> </Button>
                  </li>
                  <li data-popover id="popover-description11" className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-blue-600 border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-white dark:text-white">Title Dark 1 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description12" data-popover-placement="right" className="text-neutral-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-600" type="button"> <i className="ri-question-line"></i> </Button>
                  </li>
                  <li data-popover id="popover-description12" className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-blue-600 border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-white dark:text-white">Title Dark 2 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description13" data-popover-placement="right" className="text-neutral-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-600" type="button"> <i className="ri-question-line"></i> </Button>
                  </li>
                  <li data-popover id="popover-description13" className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-blue-600 border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-white dark:text-white">Title Dark 3 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light mb-2">
                    This is tooltip text
                    <Button data-popover-target="popover-description14" data-popover-placement="right" className="text-neutral-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-600" type="button"> <i className="ri-question-line"></i> </Button>
                  </li>
                  <li data-popover id="popover-description14" className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-blue-600 border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-white dark:text-white">Title Dark 4 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li className="text-secondary-light">
                    This is tooltip text
                    <Button data-popover-target="popover-description15" data-popover-placement="right" className="text-neutral-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-600" type="button"> <i className="ri-question-line"></i> </Button>
                  </li>
                  <li data-popover id="popover-description15" className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-blue-600 border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 shadow-lg">
                    <div className="px-3 py-2 w-full">
                      <h6 className="font-semibold text-lg mb-1 text-white dark:text-white">Title Dark 5 </h6>
                      <p className="text-neutral-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};
export default TypographyPage;
