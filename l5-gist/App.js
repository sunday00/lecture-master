class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            gists: [
                
            ]
        };
    }
    
    static defaultProps = {
    
    }
    
    newGist = (gist) => {
        return <Gist key={gist.username} username={gist.username} url={gist.url} />;
    }
    
    addGist = (username) => {
        let url = `https://api.github.com/users/${username}/repos`;
            // I don't have and I can't find any friend for having gist, so I want to this app show just repository.
        $.get(url, (result) => {
            let username = result[0].owner.login;
            let url = result[0].html_url;

            let gists = this.state.gists;
            gists.push( {username, url} );

            this.setState({
                gists
            });
        });
    }

    render() {
        return <div>
            <h1>Git Repositories Box</h1>

            <GistForm onAdd={this.addGist} />

            { this.state.gists.map(this.newGist) }
        </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));