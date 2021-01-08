import React from "react";

interface DropdownInputToggleIconProps {
  isActive: boolean;
}

/**
 * Renders an arrow that is either looking up or down depending on isActive prop.
 */
export const DropdownInputToggleIcon = ({
  isActive,
}: DropdownInputToggleIconProps) => (isActive ? <p>^</p> : <p>v</p>);
