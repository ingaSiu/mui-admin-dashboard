import { Box, Grid } from '@mui/material';

import ProductCard from './ProductCard';

const ProductsPage = () => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={1} sm={2} md={4} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsPage;
