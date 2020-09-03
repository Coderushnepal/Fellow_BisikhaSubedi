import React from "react";
import "./App.css";
// import withCount from "./withCount";
import EnhancedNumberCounter from "./Components/assign_1/Counter";

import EnhancedUser from "./Components/assign_2/User";

function App() {
  const NAMES = ["Bisikha", "Elisha", "Kirtee", "Eliza", "Sindhu"];
  const PEOPLE = ["bisudha", "sindhu", "kirtee", "srijana"];
  return (
    <div className="main">
      <h1>First Assignment</h1>
      {NAMES.map((NAMES, index) => (
        <EnhancedNumberCounter key={index} NAMES={NAMES} />
      ))}

      {/* Map function for HOC assignment */}
      <h1>Second Assignment</h1>
      {PEOPLE.map((PEOPLE, index) => (
        <EnhancedUser key={index} PEOPLE={PEOPLE} />
      ))}
    </div>
  );
}
export default App;
