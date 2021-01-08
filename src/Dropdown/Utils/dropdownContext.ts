import { createContext } from "react";

export const DropdownContext = createContext<{
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}>({ isActive: false, setIsActive: () => undefined });
