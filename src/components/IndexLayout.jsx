import React from 'react';
import { Outlet } from 'react-router';

import MainNavbar from './MainNavbar.jsx';
import MainFooter from './MainFooter.jsx';

const IndexLayout = function IndexLayoutComponent() {
  return (
    <>
      <MainNavbar />

      <main className="main-container">
        <Outlet />
      </main>

      <MainFooter />
    </>
  );
};

export default IndexLayout;
