import React from 'react';
import request from 'request';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {value: '', results: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(){
        let search = this.state.value;
        let options = {
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=${search}`,
            headers : {
                'X-Mashape-Key' : 'vos3qIVKbemshFfm5IbM0uPPvUYKp1i7TgCjsnkQ8sA6uNsjYY',
                'Accept' : 'application/json'
            }
        };

        request.get(options, (err,res,body) => {
            if(err){console.log(err); return;}

            let array = JSON.parse(body).map(item => {
                return item.name;
            });

            this.setState({
                results : array
            });

            this.props.getData(this.state.results);
            this.setState({
                value: ''
            })
        })

    }

    render(){
        return (
            <div>
                <input type="text" className="form-control" placeholder="Ingredient" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} className="btn btn-secondary">Search</button>
            </div>
        );
    }
}