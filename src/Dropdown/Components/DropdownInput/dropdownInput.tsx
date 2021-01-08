import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DropdownContext } from "../../Utils/dropdownContext";
import { DropdownInputToggleIcon } from "./Components/dropdownInputToggleIcon";

interface DropdownInputProps {}

export const DropdownInput = ({}: DropdownInputProps) => {
  // --- STATE ---

  const { isActive, setIsActive } = useContext(DropdownContext);

  // --- CALLBACKS ---

  const onFocus = () => setIsActive(true);

  const onBlur = () => setIsActive(false);

  return (
    <StyledDropdownContainer>
      <StyledDropdownInput
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="Search"
      />

      <DropdownInputToggleIcon isActive={isActive} />
    </StyledDropdownContainer>
  );
};

const StyledDropdownContainer = styled.div`
  border-radius: 4px;
  border: 1px solid gray;
  display: flex;
  padding: 5px;
  width: 200px;
`;

const StyledDropdownInput = styled.input`
  border: none;

  :focus {
    outline: none;
  }
`;
