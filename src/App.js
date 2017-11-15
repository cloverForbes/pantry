import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Search } from "./Search/Search";
import {MyPantry} from "./MyPantry/MyPantry";

class App extends Component {
  render() {
    return (
       <div className="App">
           <div className="App-header">
               <h1 className="App-title">Pantry</h1>
           </div>

           <div className="container">
               <div className="row">
                   <div className="col-sm-6">
                       <Search/>
                   </div>
                   <div className="col-sm-6">
                       <MyPantry/>
                   </div>
               </div>
           </div>
       </div>
    );
  }
}

export default App;
