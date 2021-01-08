import React from "react";
import { Dropdown } from "./Dropdown/dropdown";

const MOCK_INPUT_VALUES = [
  { label: "Fahrradhelm", value: 1 },
  { label: "Tomaten", value: 2 },
  { label: "Zimmerpflanze", value: 3 },
];

function App() {
  return (
    <div>
      <h1> Dropdown </h1>

      <Dropdown options={MOCK_INPUT_VALUES} />
    </div>
  );
}

export default App;
