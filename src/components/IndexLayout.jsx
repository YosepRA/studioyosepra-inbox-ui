import React from 'react';
import { Outlet } from 'react-router';

import mainStyles from '@Styles/main.module.scss';

import MainNavbar from './MainNavbar.jsx';
import MainFooter from './MainFooter.jsx';

const IndexLayout = function IndexLayoutComponent() {
  return (
    <>
      <MainNavbar />

      <main className={mainStyles.mainContainer}>
        <Outlet />
      </main>

      <MainFooter />
    </>
  );
};

export default IndexLayout;
