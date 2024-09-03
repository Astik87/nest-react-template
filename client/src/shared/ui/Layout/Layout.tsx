import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div>
      Header
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      Footer
    </div>
  );
};
