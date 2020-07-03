import React from 'react'

export default function HocExample(WrappedComponent){
    class HocExample extends React.Component
    {
        componentDidMount(){
            console.log('HOC');
        }

        componentDidUpdate(prevProps){

        }

        render(){
            return(
                <WrappedComponent {...this.props} />
            );
        }
    }
    return HocExample;
}
