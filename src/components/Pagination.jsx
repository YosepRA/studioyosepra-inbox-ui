import React from 'react';
import { Link } from 'react-router';
import PaginationBS from 'react-bootstrap/Pagination';

import style from './styles/pagination.module.scss';

function createPaginationItems(page, pageCount) {
  const prevPageNum = page > 1 ? page - 1 : 1;
  const nextPageNum = page < pageCount ? page + 1 : pageCount;

  return (
    <>
      <PaginationBS.Prev
        as={Link}
        to={{ search: `?page=${prevPageNum}` }}
        disabled={page === 1}
      />
      <PaginationBS.Item>{page}</PaginationBS.Item>
      <PaginationBS.Next
        as={Link}
        to={{ search: `?page=${nextPageNum}` }}
        disabled={page === pageCount}
      />
    </>
  );
}

const Pagination = function PaginationComponent({ page, pageCount }) {
  const paginationItems = createPaginationItems(page, pageCount);

  return (
    <PaginationBS className={style.pagination}>{paginationItems}</PaginationBS>
  );
};

export default Pagination;
