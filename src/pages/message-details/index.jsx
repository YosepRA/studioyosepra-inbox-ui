import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {
  selectMessageDetails,
  fetchMessageDetails,
  resetMessageDetails,
} from '@Features/message/message-slice.js';

import styles from './styles/message-details.module.scss';

const MessageDetails = function MessageDetailsComponent() {
  const { message } = useSelector(selectMessageDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMessage() {
      dispatch(fetchMessageDetails(id));
    }

    loadMessage();

    return () => dispatch(resetMessageDetails());
  }, [id, dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="message">
      {message !== null && (
        <>
          <div className="message-details">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className={styles.sender}>
                    <p className={styles.senderName}>{message.name}</p>
                    <p className={styles.senderEmail}>{message.email}</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="message-body">
                    <p>{message.body}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="message-nav">
            <Container>
              <Row>
                <Col>
                  <Button variant="primary" onClick={handleGoBack}>
                    Back
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </section>
  );
};

export default MessageDetails;
