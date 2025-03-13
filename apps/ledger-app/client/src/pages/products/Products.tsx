import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { PageLoader } from "yw-icons";

const Products = () => {

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
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default Products;
