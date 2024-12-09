import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = function HomeComponent() {
  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                johndoe@mail.com
              </Card.Subtitle>

              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                nobis eos qui ullam quibusdam perferendis. Ipsam sequi earum
                ullam facilis.
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
