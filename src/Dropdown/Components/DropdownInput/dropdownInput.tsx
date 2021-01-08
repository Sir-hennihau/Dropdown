import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import { DropdownContext } from "../../Utils/dropdownContext";
import { DropdownInputToggleIcon } from "./Components/dropdownInputToggleIcon";

interface DropdownInputProps {}

export const DropdownInput = ({}: DropdownInputProps) => {
  // --- STATE ---

  const { isActive, setIsActive, setSearch } = useContext(DropdownContext);

  // --- CALLBACKS ---

  const onFocus = () => setIsActive(true);

  const onBlur = () => setIsActive(false);

  const onChange = (event: ChangeEvent) => {
    // @ts-ignore
    setSearch(event.target.value);
  };

  return (
    <StyledDropdownContainer>
      <StyledDropdownInput
        onBlur={onBlur}
        onChange={onChange}
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;

const StyledDropdownInput = styled.input`
  border: none;
  width: 100%;
  :focus {
    outline: none;
  }
`;
