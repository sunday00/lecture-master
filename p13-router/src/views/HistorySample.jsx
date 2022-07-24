import {useEffect, useState} from "react";
// import {useNavigate, usePrompt} from "react-router-dom";

export default () => {
  // const navigate = useNavigate()
  const [isBlocking, setIsBlocking] = useState(true)

  const handleGoBack = () => {
    // navigate.goBack()
  }

  const handleGoHome = () => {
    // navigate.push('/')
  }

  // const unblock = usePrompt('sure?', isBlocking)

  useEffect(() => {
    return () => {
      // if(unblock) unblock()
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button className={'btn btn-info'} onClick={handleGoBack}>back</button>
      <button className={'btn btn-info'} onClick={handleGoHome}>home</button>
      <p>작동하는게 없다... react-router-dom v6 fuck!</p>
    </div>
  )
}