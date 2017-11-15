import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Search } from "./Search/Search";
import {MyPantry} from "./MyPantry/MyPantry";

class App extends Component {
  constructor(props){
   super(props);

   this.state = {
       myIngredients: []
   };

   this.getIngredients = this.getIngredients.bind(this);
  }

  getIngredients(ingredients){
      this.setState({myIngredients: ingredients});
  }

  render() {
    return (
       <div className="App">
           <div className="App-header">
               <h1 className="App-title">Pantry</h1>
           </div>

           <div className="container-fluid">
               <div className="row">
                   <div className="col-sm-6">
                       <Search getIngredients={this.getIngredients}/>
                   </div>
                   <div className="col-sm-6">
                       <MyPantry ingredients={this.state.myIngredients}/>
                   </div>
               </div>
           </div>
       </div>
    );
  }
}

export default App;
