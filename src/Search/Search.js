import React from 'react';
import {SearchBar} from "./SearchBar";

export class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ingredients : []
        }
    }


    getData = data => {
        this.setState({ingredients: data});
    };

    render(){
        return (
            <div className="Panel">
                <h2 className="panel-title">Search</h2>
                <SearchBar getData={this.getData}/>
                <ul>
                    {this.state.ingredients.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}