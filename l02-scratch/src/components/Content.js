import { Grid } from '@material-ui/core';
import React, { useCallback } from 'react';
import ProductCard from './ProductCard';
import products from '../resources/constants';

const Content = () => {
  const makeProductCard = useCallback(() => {
    return products.map((p, i) => (
      <ProductCard
        key={i}
        title={p.title}
        avatarSrc={p.avatarUrl}
        subtitle={p.price}
        imgSrc={p.imageUrl}
        description={p.description}
      />
    ));
  }, []);

  return (
    <Grid container spacing={4}>
      <ProductCard
        title={'Hamilton Beach Flexbrew'}
        avatarSrc="https://picsum.photos/50/50"
        subtitle="$99.99"
        imgSrc="https://picsum.photos/200/200"
        description="hello picture, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique, inventore reprehenderit optio reiciendis nulla sint quidem culpa laborum quibusdam, ratione, velit aliquam unde dolores porro. Dolorem optio natus nisi."
      ></ProductCard>
      {products && makeProductCard()}
    </Grid>
  );
};

export default Content;
