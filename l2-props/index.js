class Avatar extends React.Component {
            
    static defaultProps = {
        path : "https://via.placeholder.com/",
        size : 130
    }
    
    render() {

        return <div>
            <a href={this.props.path + 300}>
                <img src={this.props.path + this.props.size} />
            </a>
        </div>;
    }
}

function Avatars () {
    return (
        <article>
            <Avatar path="https://via.placeholder.com/" size="150" />
            <Avatar path="https://via.placeholder.com/" size="150" />
            <Avatar />
        </article>
    );
}

ReactDOM.render(<Avatars />, document.querySelector('.container'));