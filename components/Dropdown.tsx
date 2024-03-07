import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};
const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select Bank Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dark">Bank Al Habib</SelectItem>
        <SelectItem value="dark">Bank Al Habib</SelectItem>
        <SelectItem value="dark">Bank Al Habib</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
