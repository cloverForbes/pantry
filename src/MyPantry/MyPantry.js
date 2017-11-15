import React from 'react';

export class MyPantry extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ingredients : this.props.ingredients
        }
    }

    render(){
        return (
            <div className="Panel">
                <h3 className="panel-title">My Pantry</h3>
            </div>
        );
    }
}