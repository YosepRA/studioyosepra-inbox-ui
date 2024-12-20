import React from 'react';
import { Link } from 'react-router';
import PaginationBS from 'react-bootstrap/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles/pagination.module.scss';

function createPaginationItems(page, pageCount) {
  const prevPageNum = page > 1 ? page - 1 : 1;
  const nextPageNum = page < pageCount ? page + 1 : pageCount;

  return (
    <>
      <Link
        to={{ search: `?page=${prevPageNum}` }}
        className={styles.paginationControl}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </Link>

      <span className={styles.paginationNumber}>{page}</span>

      <Link
        to={{ search: `?page=${nextPageNum}` }}
        className={styles.paginationControl}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </Link>
    </>
  );
}

const Pagination = function PaginationComponent({ page, pageCount }) {
  const paginationItems = createPaginationItems(page, pageCount);

  return (
    <PaginationBS className={styles.pagination}>{paginationItems}</PaginationBS>
  );
};

export default Pagination;
