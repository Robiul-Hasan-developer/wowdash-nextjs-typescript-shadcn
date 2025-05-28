"use client"

import React, { useState } from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const TypographyPage = () => {

  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);
  const [switch4, setSwitch4] = useState(true);
  const [inactiveSwitch1, setinactiveSwitch1] = useState(false);
  const [inactiveSwitch2, setinactiveSwitch2] = useState(false);
  const [inactiveSwitch3, setinactiveSwitch3] = useState(false);
  const [inactiveSwitch4, setinactiveSwitch4] = useState(false);

  const [switchTwo1, setSwitchTwo1] = useState(true);
  const [switchTwo2, setSwitchTwo2] = useState(true);
  const [switchTwo3, setSwitchTwo3] = useState(true);
  const [switchTwo4, setSwitchTwo4] = useState(true);
  const [inactiveSwitchTwo1, setinactiveSwitchTwo1] = useState(false);
  const [inactiveSwitchTwo2, setinactiveSwitchTwo2] = useState(false);
  const [inactiveSwitchTwo3, setinactiveSwitchTwo3] = useState(false);
  const [inactiveSwitchTwo4, setinactiveSwitchTwo4] = useState(false);

  const [switchWithText1, setSwitchWithText1] = useState(false);
  const [switchWithText2, setSwitchWithText2] = useState(false);

  return (
    <>
      <DashboardBreadcrumb title="Switch" text="Switch" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DefaultCardComponent title="Default Switch">
          <div className="flex items-center flex-wrap gap-8">
            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="switch1"
                  checked={switch1}
                  onCheckedChange={setSwitch1}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="switch1"
                  className={switch1 ? "text-blue-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switch2"
                  checked={switch2}
                  onCheckedChange={setSwitch2}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Label
                  htmlFor="switch2"
                  className={switch2 ? "text-purple-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switch3"
                  checked={switch3}
                  onCheckedChange={setSwitch3}
                  className="data-[state=checked]:bg-green-600"
                />
                <Label
                  htmlFor="switch3"
                  className={switch3 ? "text-green-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switch4"
                  checked={switch4}
                  onCheckedChange={setSwitch4}
                  className="data-[state=checked]:bg-yellow-500"
                />
                <Label
                  htmlFor="switch4"
                  className={switch4 ? "text-yellow-500 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitch1"
                  checked={inactiveSwitch1}
                  onCheckedChange={setinactiveSwitch1}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="inactiveSwitch1"
                  className={inactiveSwitch1 ? "text-blue-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitch2"
                  checked={inactiveSwitch2}
                  onCheckedChange={setinactiveSwitch2}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Label
                  htmlFor="inactiveSwitch2"
                  className={inactiveSwitch2 ? "text-purple-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitch3"
                  checked={inactiveSwitch3}
                  onCheckedChange={setinactiveSwitch3}
                  className="data-[state=checked]:bg-green-600"
                />
                <Label
                  htmlFor="inactiveSwitch3"
                  className={inactiveSwitch3 ? "text-green-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitch4"
                  checked={inactiveSwitch4}
                  onCheckedChange={setinactiveSwitch4}
                  className="data-[state=checked]:bg-yellow-500"
                />
                <Label
                  htmlFor="inactiveSwitch4"
                  className={inactiveSwitch4 ? "text-yellow-500 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
            </div>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Switch Disable">
          <div className="flex items-center flex-wrap gap-8">
            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="switchTwo1"
                  checked={switchTwo1}
                  onCheckedChange={setSwitchTwo1}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="switchTwo1"
                  className={switchTwo1 ? "text-blue-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switchTwo2"
                  checked={switchTwo2}
                  onCheckedChange={setSwitchTwo2}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Label
                  htmlFor="switchTwo2"
                  className={switchTwo2 ? "text-purple-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switchTwo3"
                  checked={switchTwo3}
                  onCheckedChange={setSwitchTwo3}
                  className="data-[state=checked]:bg-green-600"
                />
                <Label
                  htmlFor="switchTwo3"
                  className={switchTwo3 ? "text-green-600 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="switchTwo4"
                  checked={switchTwo4}
                  onCheckedChange={setSwitchTwo4}
                  className="data-[state=checked]:bg-yellow-500"
                />
                <Label
                  htmlFor="switchTwo4"
                  className={switchTwo4 ? "text-yellow-500 font-medium" : ""}
                >
                  Switch Active
                </Label>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitchTwo1"
                  checked={inactiveSwitchTwo1}
                  onCheckedChange={setinactiveSwitchTwo1}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="inactiveSwitchTwo1"
                  className={inactiveSwitchTwo1 ? "text-blue-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitchTwo2"
                  checked={inactiveSwitchTwo2}
                  onCheckedChange={setinactiveSwitchTwo2}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Label
                  htmlFor="inactiveSwitchTwo2"
                  className={inactiveSwitchTwo2 ? "text-purple-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitchTwo3"
                  checked={inactiveSwitchTwo3}
                  onCheckedChange={setinactiveSwitchTwo3}
                  className="data-[state=checked]:bg-green-600"
                />
                <Label
                  htmlFor="inactiveSwitchTwo3"
                  className={inactiveSwitchTwo3 ? "text-green-600 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inactiveSwitchTwo4"
                  checked={inactiveSwitchTwo4}
                  onCheckedChange={setinactiveSwitchTwo4}
                  className="data-[state=checked]:bg-yellow-500"
                />
                <Label
                  htmlFor="inactiveSwitchTwo4"
                  className={inactiveSwitchTwo4 ? "text-yellow-500 font-medium" : ""}
                >
                  Switch Inactive
                </Label>
              </div>
            </div>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Switch With Tex">
          <div className="flex items-center flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="switchWithText1"
                checked={switchWithText1}
                onCheckedChange={setSwitchWithText1}
                className="data-[state=checked]:bg-blue-600"
              />
              <Label
                htmlFor="switchWithText1"
                className={switchWithText1 ? "text-blue-600 font-medium" : ""}
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="switchWithText2"
                checked={switchWithText2}
                onCheckedChange={setSwitchWithText2}
                className="data-[state=checked]:bg-blue-600"
              />
              <Label
                htmlFor="switchWithText2"
                className={switchWithText2 ? "text-blue-600 font-medium" : ""}
              >
                No
              </Label>
            </div>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Default Switch">
          DataContentGoesHereee
        </DefaultCardComponent>


      </div>
    </>
  );
};
export default TypographyPage;
