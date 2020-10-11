function LikeButton () {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? 'Luv it' : 'Dislike';

    return React.createElement(
        'button', 
        { 
            onClick: () => setLiked(!liked), 
            className: `mt-3 btn btn-${liked ? 'success' : 'danger'}`
        },
        text
    );
}

ReactDOM.render( React.createElement(LikeButton), document.querySelector('.container') );