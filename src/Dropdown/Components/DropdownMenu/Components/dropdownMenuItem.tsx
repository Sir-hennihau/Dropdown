import React from "react";

import { DropdownOption } from "../../../Utils/dropdownTypes";

interface DropdownMenuItemProps {
  item: DropdownOption;
}

export const DropdownMenuItem = ({ item }: DropdownMenuItemProps) => {
  return <p>{item.label}</p>;
};
