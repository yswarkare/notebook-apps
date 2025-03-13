import { Outlet, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductByName } from "../../store/slices/products";
import { PageLoader } from "yw-icons";


const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.product)

  useEffect(() => {
    if (params?.productName) {
      dispatch(getProductByName(params.productName))
    }
  }, [params?.productName]);

  return (
    <Box
      display='flex'
      width={'100%'}
      flexDirection='column'
      position={'relative'}
      sx={{
        alignItems: 'center',
        justifyContent: 'start',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 2,
        gap: 2,
      }}
    >
      {product && (
        <Stack direction={'column'} width={'100%'}>
          <Typography variant={'h3'}>{product.name}</Typography>
          <Typography variant={'h5'}>{product.description}</Typography>
          <Suspense fallback={<PageLoader />}>
            <Outlet context={{ productId: product.id, productName: params.productName }} />
          </Suspense>
        </Stack>
      )}
    </Box>
  );
}

export default ProductPage;
