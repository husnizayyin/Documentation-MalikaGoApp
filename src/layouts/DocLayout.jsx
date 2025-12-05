import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


const DocLayout = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
      <Header />
      <div className="max-w-[1600px] mx-auto pt-16 flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-8 py-10">
          <div className="max-w-3xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocLayout;
