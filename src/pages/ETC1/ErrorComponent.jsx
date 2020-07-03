import React from 'react'

export default class ErrorComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        console.error('Custom');
      }

    render(){
        if (this.state.hasError) {
            return(
                <>
                    <h1>ERR</h1>
                </>
            );
        }
        return (
            <>
                {this.props.children}
            </>
        );
    }
}