import React from 'react';

const searchContext = React.createContext({ searchValue: '', total: 0, orderBy: 'name' });

export default searchContext;
