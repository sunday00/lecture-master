import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Room ({ match }) {
    console.log(match);
    return (
        <div>
            <h2>Room</h2>

            <ul>
                <li><Link to={`${match.url}/blue`}>BLUE</Link></li>
                <li><Link to={`${match.url}/red`}>RED</Link></li>
            </ul>

            <article>
                <Route exact path={match.url} component={R}></Route>
                <Route path={`${match.url}/:color`} component={R}></Route>
            </article>
        </div>
    );
}

function R ({ match }) {
    console.log(match);

    if( Object.keys(match.params).length === 0 ) return <h3>No colors selected yet</h3>;

    return (<div>
        <h3>{ match.params.color }</h3>

        <div style={{
            width: '80%',
            height: '500px',
            margin: '0 auto',
            backgroundColor: match.params.color
        }}></div>
    </div>);
}