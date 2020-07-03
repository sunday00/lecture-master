import React from 'react'

import HocExample from './HocExample';

class HOC extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div>
                    <p>a</p>
                </div>
            </>
        );
    }
}

export default HocExample(HOC);