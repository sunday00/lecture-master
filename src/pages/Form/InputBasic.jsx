import React from 'react'

export default class InputBasic extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            textValue: ''
        };
  
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.table({
          input: this.state.inputValue,
          text: this.state.textValue
        });
      }
  
    handleInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleTextChange(e) {
        this.setState({textValue: e.target.value});
    }

      
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Name : 
                <input type="text" value={this.state.inputValue}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                Essay : 
                <textarea value={this.state.textValue}
                    onChange={this.handleTextChange} />
                </label>
                <input type="submit" value="submit" />
            </form> 
        );
    }
}