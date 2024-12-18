import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {
  selectMessageList,
  fetchMessageList,
} from '@Features/message/message-slice.js';

import Pagination from '@Components/Pagination.jsx';

const Home = function HomeComponent() {
  const { list, page, pageCount } = useSelector(selectMessageList);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function loadMessage() {
      const pageSearchParams = searchParams.get('page');
      const page =
        pageSearchParams !== null ? parseInt(pageSearchParams, 10) : 1;

      const queryParams = {
        page,
      };

      dispatch(fetchMessageList(queryParams));
    }

    loadMessage();
  }, [searchParams, dispatch]);

  const messageListComponent =
    list.length > 0 &&
    list.map((msg) => (
      <Col key={msg._id}>
        <Card>
          <Card.Body>
            <Card.Title>{msg.name}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {msg.email}
            </Card.Subtitle>

            <Card.Text>{msg.body}</Card.Text>

            <Card.Link as={Link} to={`/message/${msg._id}`}>
              Details
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="gy-2">
        {messageListComponent}
      </Row>

      <Row>
        <Col>
          <Pagination page={page} pageCount={pageCount} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
