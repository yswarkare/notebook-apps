import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { PageLoader } from "yw-icons";
import path from "../../routes/path";
import RoutedTabs from "../../components/Tabs/RoutedTabs";

const tabs = [
  { label: 'Products List', url: path._products._manage.table },
  { label: 'Create Product', url: path._products._manage.create },
]

const ManageProducts = () => {

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
      <Typography variant={'h3'}>Manage Products</Typography>
      <RoutedTabs id="product" tabs={tabs} nestedLevel={3} />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default ManageProducts;
