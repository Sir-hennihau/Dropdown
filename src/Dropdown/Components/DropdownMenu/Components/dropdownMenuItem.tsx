import React, { MouseEvent } from "react";
import styled from "styled-components";

import { DropdownOption } from "../../../Utils/dropdownTypes";

interface DropdownMenuItemProps {
  item: DropdownOption;
  onMenuItemClick: (menuItem: DropdownOption) => void;
}

export const DropdownMenuItem = ({
  item,
  onMenuItemClick,
}: DropdownMenuItemProps) => {
  // --- CALLBACKS ---

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("click");

    onMenuItemClick(item);
  };

  return (
    <StyledDropdownMenuItemContainer onClick={onClick}>
      <StyledDropdownMenuItemText>{item.label}</StyledDropdownMenuItemText>
    </StyledDropdownMenuItemContainer>
  );
};

const StyledDropdownMenuItemContainer = styled.div`
  width: calc(100% + 20px);
  cursor: pointer;
  z-index: 5;

  :hover {
    color: white;
    background: #5981bd;
  }
`;

const StyledDropdownMenuItemText = styled.p`
  margin: 0;
  padding: 10px;
`;
