import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './styles/main-footer.module.scss';

const MainFooter = function MainFooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.mainFooter}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className={styles.mainFooterBrand}>StudioYosepRA</h3>
          </Col>

          <Col xs={12}>
            <p className={styles.mainFooterCopy}>
              &copy; {currentYear} StudioYosepRA. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
