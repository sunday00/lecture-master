import React, { useEffect } from 'react';

const HistoryComponent = (props) => {
  const handleGoBack = () => {
    props.history.goBack();
  };

  const handleGoHome = () => {
    props.history.push('/');
  };

  useEffect(() => {
    const unblock = props.history.block('sure?');
    // Router 의 history.block 은 그 자체로는 나가기 방지.
    // return 되는 함수는 이때는 필요는 없지만 나중에 unmount 될때 실행될 "막는 거 이제 그만"을 생성해줌.
    // useEffect는 return 함수에서 unmount 되면서 함수를 실행함.
    // 아래 unmount 함수 없으면 일단 이 컴포넌트 랜더링 이후 모든 함수에서 블락됨.
    return () => {
      unblock();
    };
  }, [props.history]);

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <button onClick={handleGoHome}>Home</button>
    </div>
  );
};

export default HistoryComponent;
