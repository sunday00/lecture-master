class Gist extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            url: ''
        };
    }
    
    static defaultProps = {
    
    }
    
    
    
    render() {
        return <div>
            {this.props.username}'s last Repository is <a href={this.props.url} target="_blank">Link</a>
        </div>;
    }
}