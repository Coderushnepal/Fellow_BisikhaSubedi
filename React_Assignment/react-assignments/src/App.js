import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/assign_1/Counter';
import EnhancedNumberCounter from './Components/assign_1/NumberCounter';

import EnhancedUser from './Components/assign_2/User';


function App() {
  const NAMES = ["bisikha" , "sindhu" , "kirtee" , "srijana" , "elisha" , "neha" , "nita", "pooza"];
  const PEOPLE = ["bisikha" , "sindhu" , "kirtee" , "srijana" , "elisha" , "neha" , "nita", "pooza"];
  return (
    <div>
      {NAMES.map((NAMES, index) => (
              <Counter key={index} NAMES={NAMES} />
      ))}
      <EnhancedNumberCounter label="My label" />

      {/* Map function for HOC assignment */}
      {PEOPLE.map((PEOPLE , index) => (
            <EnhancedUser key={index} PEOPLE={PEOPLE} />
      ))}
    </div>
  );
}

export default App;
