import React from "react";
import styled from "styled-components";

interface DropdownInputToggleIconProps {
  isActive: boolean;
}

/**
 * Renders an arrow that is either looking up or down depending on isActive prop.
 */
export const DropdownInputToggleIcon = ({
  isActive,
}: DropdownInputToggleIconProps) => (
  <DropdownInputToggleText>{isActive ? "^" : "v"}</DropdownInputToggleText>
);

const DropdownInputToggleText = styled.p`
  color: gray;
  margin-right: 10px;
`;
