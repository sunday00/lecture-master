import React from 'react';
import List from './List';

export default class MainList extends React.Component
{

    spanStyle = {
        display: 'inline-block',
        width: '30%',
        paddingLeft: "40px",
    }

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            items:[]
        }
    }

    componentDidMount(){
        window.axios.get('./db.json').then((res) => {
            let categories = [];

            res.data.forEach((item) => {
                if( categories.indexOf(item.category) < 0 ) categories.push(item.category);
            });

            this.setState({
                categories,
                items: res.data
            });
        })
    }

    makeList(category, index){
        let items = this.state.items.filter((item) => {
            return item.category === category
        });

        if( this.props.search ){
            items = items.filter((item) => {
                return item.name.toLowerCase().indexOf(this.props.search.toLowerCase()) >= 0
            })
        }

        if (this.props.toggleOnlyStock) {
            items = items.filter((item) => {
                return item.stocked;
            })
        }

        return(
            <List key={index} category={category} items={items} search={this.props.search} />
        );
    }

    render(){
        return(
            <div>
                <p><span style={this.spanStyle}>Name</span><span>Price</span></p>
                {
                    this.state.categories.map((category, index) => {
                        return this.makeList(category, index); 
                    })
                }
            </div>
        );
    }
}