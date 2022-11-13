import { useState } from 'react';

export default () => {
  const [SplitMe, setSplitMe] = useState(null)

  const handleCLick = async () => {
    const m = await import('./SplitMe.jsx')

    setSplitMe(m.default)
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleCLick}>Click</button>
      {SplitMe && SplitMe}
    </div>
  )
}