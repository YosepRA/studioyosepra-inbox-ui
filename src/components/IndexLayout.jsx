import React from 'react';
import { Outlet } from 'react-router';

import ScrollToTop from '@Components/ScrollToTop.jsx';
import mainStyles from '@Styles/main.module.scss';

import MainNavbar from './MainNavbar.jsx';
import MainFooter from './MainFooter.jsx';

const IndexLayout = function IndexLayoutComponent() {
  return (
    <div className="index-layout">
      <ScrollToTop />

      <MainNavbar />
      <main className={mainStyles.mainContainer}>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default IndexLayout;
