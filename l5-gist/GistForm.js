class GistForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    
    static defaultProps = {
    
    }
    
    updateUsername = (e) => {
        this.setState({ username:e.target.value });
    }

    addGist = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    }
    
    render() {
        return <form onSubmit={this.addGist}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Github user name..." aria-label="Github username" aria-describedby="button-addon1" 
                    onChange={this.updateUsername} value={this.state.username} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Add</button>
                </div>
            </div>
        </form>;
    }
}
