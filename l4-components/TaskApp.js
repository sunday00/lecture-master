class TaskApp extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            value: ''
        }
    }

    static defaultProps = {
    
    }

    addTask = (e) => {
        e.preventDefault();
        this.state.items.push(this.state.value);
        let items = this.state.items;
        let value = '';
        this.setState({ items, value });
    }

    subTask = (e) => {
        let items = this.state.items;
        items.splice(this.state.items.indexOf(e), 1);
        this.setState({items});
    }

    changeInputValue = (e) => {
        let value = e.target.value;
        this.setState({ value });
    }
    
    render() {
        return <div>
            <h1 className="h1 mt-3">My tasks</h1>
            <TaskList items={this.state.items} onSub={this.subTask} />
            <hr />  
            <form onSubmit={this.addTask}>
                <input className="form-control-text" value={this.state.value} onChange={this.changeInputValue} />
                <button className="btn btn-info ml-2">Add</button>
            </form>
        </div>;
    }
}

ReactDOM.render(<TaskApp />, document.querySelector('.container'));