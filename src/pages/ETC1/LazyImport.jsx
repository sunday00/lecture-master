import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./Other'));

export default function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}