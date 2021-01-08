import { createContext } from "react";

export const DropdownContext = createContext<{
  isActive: boolean;
  search: string;
  setIsActive: (isActive: boolean) => void;
  setSearch: (search: string) => void;
}>({
  isActive: false,
  search: "",
  setIsActive: () => undefined,
  setSearch: () => undefined,
});
