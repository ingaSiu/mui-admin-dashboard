import { Box, Link } from '@mui/material';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { productsProps } from '../../_mock/products';

type product = {
  product: productsProps;
};

const ProductCard = ({ product }: product) => {
  return (
    <Card key={product.id} sx={{ width: 345 }}>
      <CardMedia sx={{ height: 250 }} image={product.cover} title={product.name} />
      <CardContent>
        <Typography gutterBottom component="div">
          <Link sx={{ textDecoration: 'none', color: 'black' }}>{product.name}</Link>
        </Typography>
        {product.priceSale ? (
          <Box component="span">
            <Typography variant="subtitle2">
              Sale: ${product.priceSale}
              <Typography variant="subtitle2" component="span" sx={{ paddingLeft: 2 }}>
                ${product.price}
              </Typography>
            </Typography>
          </Box>
        ) : (
          <Typography variant="body2">${product.price}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
