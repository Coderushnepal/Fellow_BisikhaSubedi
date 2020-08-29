import React, { Component } from 'react';
import './App.css';
import Router from "./Router";
import { Portfolio } from './Portfolio/Portfolio';

const App = () => (
  <Router />
);

export default App;

// export class App extends Component {
//     constructor() {
//       super();

//       this.state = {
//         selectedSection: "",
//       };
//     }

//     handleSectionClick = () => {
//       alert("Hello there");
//     }

//     render() {
//       return(
//         <div className="App">
//           <Portfolio clickEvent={this.handleSectionClick} hello="hello"/>
//         </div>
//       )
//     }
// }

// export default App;
