import { Box, Typography } from "@mui/material";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../../components/ApiError";
import { useSelector } from "react-redux";
import CreateProducts from "../../components/products/create-products";
import ProductsTable from "../../components/products/products-table";
import ShowHide from "../../components/show-hide";
import path from "../../routes/path";
import RoutedTabs from "../../components/Tabs/RoutedTabs";
import { Outlet } from "react-router-dom";

const tabs = [
  { label: 'Products List', url: path.product_pages.table },
  { label: 'Create Product', url: path.product_pages.create },
]

const Products = () => {
  const error = useSelector((state) => state.products.error);

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
        p: 3,
        gap: 2,
      }}
    >
      <Typography variant={'h1'}>Products</Typography>
      <RoutedTabs id="product" tabs={tabs} nestedLevel={2} />
      <Outlet />
      {
        error! &&
        <ApiError error={error} />
      }
    </Box>
  );
}

export default Products;
