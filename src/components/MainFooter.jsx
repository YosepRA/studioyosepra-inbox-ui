import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainStyles from '@Styles/main.module.scss';

const MainFooter = function MainFooterComponent() {
  return (
    <footer className={mainStyles.mainFooter}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3>StudioYosepRA</h3>
          </Col>

          <Col xs={12}>
            <p>Copyright 2024 StudioYosepRA. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
