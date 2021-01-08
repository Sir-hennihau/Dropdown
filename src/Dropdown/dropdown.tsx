import React, { createContext, useMemo, useState } from "react";
import styled from "styled-components";

import { DropdownInput } from "./Components/DropdownInput/dropdownInput";
import { DropdownMenu } from "./Components/DropdownMenu/dropdownMenu";
import { DropdownContext } from "./Utils/dropdownContext";
import { DropdownOptions } from "./Utils/dropdownTypes";

interface DropdownProps {
  options: DropdownOptions;
}

export const Dropdown = ({ options }: DropdownProps) => {
  // --- STATE ---

  const [isActive, setIsActive] = useState(false);

  // --- MEMOIZED ---

  const dropdownContextValue = useMemo(() => ({ isActive, setIsActive }), [
    isActive,
  ]);

  return (
    <DropdownContext.Provider value={dropdownContextValue}>
      <DropdownContainer>
        <DropdownInput />
        <DropdownMenu options={options} />
      </DropdownContainer>
    </DropdownContext.Provider>
  );
};

const DropdownContainer = styled.div`
  position: relative;
`;
