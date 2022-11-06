import { useState } from 'react';
import loadable from '@loadable/component'

const SplitMe = loadable(() => import('./SplitMe.jsx'), {
  fallback: <div>loading</div>
})

export default () => {
  const [v, setV] = useState(false)

  const handleClick = () => setV(!v)

  const handleMouseOver = () => {
    SplitMe.preload()
  }

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >Click</button>

      {v && <SplitMe />}

    </div>
  )
}