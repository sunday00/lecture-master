import React from 'react';
import ReactDOM from 'react-dom';

const name = "Hello world";
const element = <h1>{name}</h1>;
    
const objStyleElement = React.createElement(
    'h1',
    {className : 'hello2'},
    'hello object?'
);

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <div>
      {element}
      {objStyleElement}
    </div>,
    document.getElementById('go-react')
  );

function tick() {
    const element2 = (
        <div>
        <h2>Hello tick...</h2>
        <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(
        <div>
        {element}
        {objStyleElement}
        {element2},
        </div>,
        document.getElementById('go-react')
    );
}

setInterval(tick, 1000);

// functional component
function MyFirstComponent (props) {
    return <h1>Hello, {props.name}</h1>
}

// class es6 component

class MyClassComponent extends React.Component
{
    render(){
        return <p style={{color:this.props.color}}>COLOR!</p>
    }
}

//nested

function Skill(props){
    return <p>{props.skill}</p>
}

function Nested(props){
    return (
        <div>
        <Skill skill="php" />
        <Skill skill="java" />
        <Skill skill="javascript" />
        </div>
    );
}


// refactoring practice 
function Avatar(props){
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return (
        <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
        </div>
    );
}

function CommentText(props) {
    return (
        <div className="Comment-text">
        {props.text}!! {/* this is ok. not modify prop directly. */}
        {/*props.text = props.text+"!!"*/} {/* this is not. don't modify props directly */}
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function CommentDate(props){
    return (
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
    );
}

function Refactoring(props) {
    return (
        <div className="Comment">
        <UserInfo user={props.author}/>
        <CommentText></CommentText>
        <CommentDate date={props.date} />
        </div>
    );
}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

export default class Basic extends React.Component {
    render () {
        return <div>
            <MyFirstComponent name="COMPONENT!!" />
            <MyClassComponent color='blue' />
            <Nested></Nested>
            
            <hr/>

            <Refactoring 
                date={comment.date}
                text={comment.text}
                author={comment.author}>
            </Refactoring>
        </div>
    }
}