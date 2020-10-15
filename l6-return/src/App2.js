import React from 'react';
import ReactDOM from 'react-dom';

export default class App2 extends React.Component {

    render(){
        return <>
            <h1>이렇게 여기에서 렌더링 되는 것은 자연스럽습니다.</h1>
            {ReactDOM.createPortal(
                <>
                    그렇지만 여기에 이렇게 index 등에서 dom.render에 미리 등록되지 않은 곳에 뜬금 렌더링 할 수 있습니다.
                </>,
                document.querySelector('.some-elements')
            )}
        </>
    };
}