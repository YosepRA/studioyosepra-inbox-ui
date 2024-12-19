import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  selectMessageList,
  fetchMessageList,
} from '@Features/message/message-slice.js';

import MessageCard from '@Components/MessageCard.jsx';
import Pagination from '@Components/Pagination.jsx';

import styles from './styles/home.module.scss';

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
      <Col key={msg._id} className={styles.messageListCol}>
        <MessageCard message={msg} />
      </Col>
    ));

  return (
    <section className="message-list">
      <Container>
        <div className={styles.messageListItems}>
          <Row xs={1}>{messageListComponent}</Row>
        </div>

        <div className="message-list__pagination">
          <Row>
            <Col>
              <Pagination page={page} pageCount={pageCount} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Home;
