import React from 'react';
import Categories from '../Categories';
import NewsList from '../NewsList';

const NewsPage = (props) => {
  return (
    <>
      <Categories />
      <NewsList category={props.match.params.category || 'all'} />
    </>
  );
};

export default NewsPage;
