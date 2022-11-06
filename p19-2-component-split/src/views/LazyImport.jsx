import { useState, Suspense, lazy } from 'react';

const SplitMe = lazy(() => import('./SplitMe.jsx'))

export default () => {
  const [v, setV] = useState(false)

  const handleClick = () => setV(!v)

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >Click</button>
      <Suspense fallback={<div>loading</div>}>
        {v && <SplitMe />}
      </Suspense>
    </div>
  )
}