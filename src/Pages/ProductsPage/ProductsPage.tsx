import { Box, Grid } from '@mui/material';

import ProductCard from './ProductCard';
import products from '../../_mock/products';

const ProductsPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          {products.map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <ProductCard product={product}>xs=2</ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductsPage;
