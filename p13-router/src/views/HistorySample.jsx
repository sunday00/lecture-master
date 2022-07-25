import {useBlocker} from "@/hooks/useBlocker.jsx";

export default () => {
  const leaveWithPrompt = useBlocker()

  const handleGoBack = () => {
    leaveWithPrompt(-1)
  }

  const handleGoHome = () => {
    leaveWithPrompt('/')
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button className={'btn btn-info'} onClick={handleGoBack}>back</button>
      <button className={'btn btn-info'} onClick={handleGoHome}>home</button>
      <p>작동하는게 없다... react-router-dom v6 fuck!</p>
    </div>
  )
}