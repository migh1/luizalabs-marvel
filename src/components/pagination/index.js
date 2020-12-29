import React, { useContext } from 'react';
import searchContext from '../../utils/context';

import './index.css';

const page = {
  plus: 1,
  minus: -1,
};

const Pagination = () => {
  const [context, setContext] = useContext(searchContext);

  const onChangePaginationHandler = (operation) => {
    const newPage = context.page + page[operation] || 1;
    setContext({ ...context, offset: (newPage - 1) * 20, page: newPage });
  };

  return (
    <div className="pagination-container">
      <div onClick={() => onChangePaginationHandler('minus')}>{'<'}</div>
      <div>{context.page}</div>
      <div onClick={() => onChangePaginationHandler('plus')}>{'>'}</div>
    </div>
  );
};

export default Pagination;
