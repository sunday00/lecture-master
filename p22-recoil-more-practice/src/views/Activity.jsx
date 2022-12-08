import { getOneActivity } from '@a/boredapi.jsx';
import { useEffect } from 'react';

export default () => {
  const generateRandomActivity = () => {
    getOneActivity().then(console.log)
  }

  useEffect(() => {
    generateRandomActivity()
  }, [])
}
