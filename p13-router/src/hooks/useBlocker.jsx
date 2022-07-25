import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const useBlocker = () => {
  const navigate = useNavigate()

  return useCallback((path) => {
    if(window.confirm('sure?')){
      navigate(path)
    }
  }, [])
}
