import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';

import styles from './styles/main-navbar.module.scss';

const MainNavbar = function MainNavbarComponent() {
  return (
    <nav className={styles.mainNavbar}>
      <Container className={styles.mainNavbarContainer}>
        <Link to="/" className={styles.mainNavbarBrand}>
          StudioYosepRA Inbox
        </Link>
      </Container>
    </nav>
  );
};

export default MainNavbar;
