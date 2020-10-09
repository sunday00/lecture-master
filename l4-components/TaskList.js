class TaskList extends React.Component {
    
    static defaultProps = {
    
    }
    
    subTask = (e) => {
        this.props.onSub(e.target.innerText);
    }

    displayTask = (task) => <li key={task} onClick={this.subTask}>{task}</li>;
    
    render() {
        return <ul>
            { this.props.items.map(this.displayTask) }
        </ul>;
    }
}
