import React from 'react';
import {SearchBar} from "./SearchBar";
import './Search.css';
import {Ingredient} from "./Ingredient";

export class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ingredients : [],
            myIngredients: [],
            searches : 0
        }
    }


    getData = data => {
        this.setState({ingredients: data});
    };

    getIngredient = ingredient => {
        let tempIngredients = this.state.myIngredients;
        tempIngredients.push(ingredient);
        this.setState({
            myIngredients: tempIngredients,
        });

        setTimeout(()=>{
            this.props.getIngredients(this.state.myIngredients)
        }, 100);
    };

    getSearches= num =>{
        this.setState({searches: num});
    };

    render(){
        return (
            <div className="Panel">
                <h2 className="panel-title">Search</h2>
                <SearchBar getSearches={this.getSearches}  getData={this.getData}/>
                <ul>
                    {this.state.ingredients.map((item, key) => {
                        return <Ingredient visible={true} getIngredient={this.getIngredient} name={item} key={this.state.searches +''+key} />
                    })}
                </ul>
            </div>
        );
    }
}