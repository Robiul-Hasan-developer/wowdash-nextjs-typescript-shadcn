"use-client"
import { MySelect } from "@/components/shared/my-select";

export default function DemoSelect() {
  return (
    <div className="p-4">
      <MySelect
        placeholder="Yearly"
        options={["Yearly", "Monthly", "Weekly", "Today"]}
      />
    </div>
  );
}
