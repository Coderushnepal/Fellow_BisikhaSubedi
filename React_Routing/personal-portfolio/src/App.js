import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Home from './components/';

//cssbaseline removes the unwanted margins and paddings

function App() {
  return(
    <>
      <CssBaseline/>
      <Home />
    </>
  )
}
export default App;