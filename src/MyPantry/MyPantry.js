import React from 'react';

export class MyPantry extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ingredients : this.props.ingredients
        }
    }

    render(){
        console.log(this.props.ingredients);
        return (
            <div className="Panel">
                <h3 className="panel-title">My Pantry</h3>
                <ul>
                    {this.props.ingredients.map((ingredient,key) => {
                        return <li key={key}>{ingredient}</li>
                    })}
                </ul>
            </div>
        );
    }
}