import React, { createContext, useMemo, useState } from "react";
import styled from "styled-components";

import { DropdownInput } from "./Components/DropdownInput/dropdownInput";
import { DropdownMenu } from "./Components/DropdownMenu/dropdownMenu";
import { DropdownContext } from "./Utils/dropdownContext";
import { DropdownOption, DropdownOptions } from "./Utils/dropdownTypes";

interface DropdownProps {
  options: DropdownOptions;
  onMenuItemClick: (menuItem: DropdownOption) => void;
}

export const Dropdown = ({ options, onMenuItemClick }: DropdownProps) => {
  // --- STATE ---

  const [isActive, setIsActive] = useState(false);

  const [search, setSearch] = useState("");

  // --- MEMOIZED ---

  const dropdownContextValue = useMemo(
    () => ({ isActive, search, setIsActive, setSearch }),
    [isActive, search]
  );

  return (
    <DropdownContext.Provider value={dropdownContextValue}>
      <DropdownContainer isActive={isActive}>
        <DropdownInput />
        <DropdownMenu onMenuItemClick={onMenuItemClick} options={options} />
      </DropdownContainer>
    </DropdownContext.Provider>
  );
};

const DropdownContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  padding: 11px;
  width: 300px;
  height: 180px;
  z-index: 1;

  ${({ isActive }) =>
    isActive &&
    `
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
    `}
`;
