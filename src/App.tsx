import React from "react";
import styled from "styled-components";
import { Dropdown } from "./Dropdown/dropdown";
import { DropdownOption } from "./Dropdown/Utils/dropdownTypes";

const MOCK_INPUT_VALUES = [
  { label: "Fahrradhelm", value: 1 },
  { label: "Tomate", value: 2 },
  { label: "Zimmerpflanze", value: 3 },
];

function App() {
  const onMenuItemClick = (menuItem: DropdownOption) =>
    console.log("menuItem", menuItem);

  return (
    <AppContainer>
      <h1> Dropdown </h1>

      <Dropdown onMenuItemClick={onMenuItemClick} options={MOCK_INPUT_VALUES} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
