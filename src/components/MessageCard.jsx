import React from 'react';
import { Link } from 'react-router';
import { formatDistanceToNow } from 'date-fns';

import styles from './styles/message-card.module.scss';

const MessageCard = function MessageCardComponent({ message }) {
  return (
    <Link
      to={`/message/${message._id}`}
      className={styles.messageCardLinkWrapper}
    >
      <article className={styles.messageCard}>
        <div className={styles.messageCardBody}>
          <p>{message.body}</p>
        </div>

        <div className={styles.messageCardMeta}>
          <p>
            {formatDistanceToNow(message.createdAt, { addSuffix: true })} -{' '}
            {message.name} - {message.email}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MessageCard;
