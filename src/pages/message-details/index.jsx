import React from 'react';
import { useParams, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './styles/message-details.module.scss';

const MessageDetails = function MessageDetailsComponent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="message">
        <Container>
          <Row>
            <Col xs={12}>
              <div className={styles.sender}>
                <p className={styles.senderName}>John Doe</p>
                <p className={styles.senderEmail}>johndoe@mail.com</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="message-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nostrum optio architecto accusantium explicabo
                  quisquam corrupti, eum, cupiditate rerum vero eveniet
                  aspernatur voluptatibus placeat reprehenderit amet libero,
                  ratione dicta nemo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta sint aliquid quod saepe exercitationem sit iste ducimus
                  amet itaque earum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  obcaecati facere voluptatem natus ullam cumque id incidunt
                  quam officia! Tenetur nobis dicta dignissimos facere dolores
                  perspiciatis tempora aliquid amet. Labore ipsa optio nostrum
                  sapiente, voluptate eius? Placeat, consequuntur ipsam ea
                  exercitationem eaque deleniti fugit veniam illum minus natus
                  quia repellat!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="message-nav">
        <Container>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleGoBack}>
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MessageDetails;
