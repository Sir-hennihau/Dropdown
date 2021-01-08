import React, { useContext } from "react";
import styled from "styled-components";
import { DropdownContext } from "../../Utils/dropdownContext";

import { DropdownOption, DropdownOptions } from "../../Utils/dropdownTypes";
import { DropdownMenuItem } from "./Components/dropdownMenuItem";

interface DropdownMenuProps {
  options: DropdownOptions;
  onMenuItemClick: (menuItem: DropdownOption) => void;
}

export const DropdownMenu = ({
  options,
  onMenuItemClick,
}: DropdownMenuProps) => {
  // --- STATE ---

  const { isActive, search } = useContext(DropdownContext);

  // --- HELPERS ---

  const filteredOptions = options
    .filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    )
    .map((option, index) => (
      <DropdownMenuItem
        onMenuItemClick={onMenuItemClick}
        item={option}
        key={index}
      />
    ));

  // --- RENDER ---

  if (!isActive) {
    return <></>;
  }

  return <DropdownMenuContainer>{filteredOptions}</DropdownMenuContainer>;
};

const DropdownMenuContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  z-index: 5;
  width: calc(100% - 20px);
  margin-top: 5px;
`;
