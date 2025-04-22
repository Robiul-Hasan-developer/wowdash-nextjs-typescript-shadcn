import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

import LanguageImg1 from "../../public/assets/images/flags/flag1.png";
import LanguageImg2 from "../../public/assets/images/flags/flag6.png";
import LanguageImg6 from "../../public/assets/images/flags/flag2.png";
import LanguageImg3 from "../../public/assets/images/flags/flag3.png";
import LanguageImg4 from "../../public/assets/images/flags/flag4.png";
import LanguageImg5 from "../../public/assets/images/flags/flag5.png";
import LanguageImg7 from "../../public/assets/images/flags/flag7.png";
import LanguageImg8 from "../../public/assets/images/flags/flag8.png";



const LanguageSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <span className="">
              <Image
                src={LanguageImg1}
                className="rounded-[50%]"
                width={24}
                height={24}
                alt="Flag"
              />
            </span>
            En
          </SelectItem>
          <SelectItem value="bn">
            <span className="">
              <Image
                src={LanguageImg2}
                className="rounded-[50%]"
                width={24}
                height={24}
                alt="Flag"
              />
            </span>
            Bn
          </SelectItem>
          <SelectItem value="ar">
            <span className="">
              <Image
                src={LanguageImg3}
                className="rounded-[50%]"
                width={24}
                height={24}
                alt="Flag"
              />
            </span>
            Ar
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;