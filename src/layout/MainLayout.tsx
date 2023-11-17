import React from 'react';
import { Header } from './_components';

declare interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='min-h-screen bg-weather bg-cover text-white'>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
