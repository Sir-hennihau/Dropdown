import React, { useContext } from "react";
import styled from "styled-components";
import { DropdownContext } from "../../Utils/dropdownContext";

import { DropdownOptions } from "../../Utils/dropdownTypes";
import { DropdownMenuItem } from "./Components/dropdownMenuItem";

interface DropdownMenuProps {
  options: DropdownOptions;
}

export const DropdownMenu = ({ options }: DropdownMenuProps) => {
  // --- STATE ---

  const { isActive } = useContext(DropdownContext);

  if (!isActive) {
    return <> </>;
  }

  return (
    <DropdownMenuContainer>
      {options.map((option, index) => (
        <DropdownMenuItem item={option} key={index} />
      ))}
    </DropdownMenuContainer>
  );
};

const DropdownMenuContainer = styled.div`
  position: absolute;
`;
