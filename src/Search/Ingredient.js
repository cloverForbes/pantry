import React from 'react';

export class Ingredient extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visible: true,
            name: this.props.children[1]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            visible: false
        });

        this.props.getIngredient(this.state.name);
    }


    render(){
        let style = {
            display : this.state.visible ? null : 'none'
        };
        return(
          <div onClick={this.handleClick} style={style} className="Ingredient container">
              <div className="row">
                  <a><div className="col-sm-1">+</div></a>
                  <div className="col-sm-3">{this.state.name}</div>
              </div>
          </div>
        );
    }
}