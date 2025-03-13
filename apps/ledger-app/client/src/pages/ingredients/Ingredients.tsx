import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { PageLoader } from "yw-icons";
import ApiError from "../../components/ApiError";
import RoutedTabs from "../../components/Tabs/RoutedTabs";
import path from "../../routes/path";

const tabs = [
  { label: 'Ingredients List', url: path._ingredient.table },
  { label: 'Create Ingredient', url: path._ingredient.create },
]

const Ingredients = () => {
  const error = useSelector((state) => state.ingredients.error);

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
      <Typography variant={'h1'}>Ingredients</Typography>
      <RoutedTabs id="ingredient" tabs={tabs} nestedLevel={2} />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      {
        error! &&
        <ApiError error={error} />
      }
    </Box>
  );
}

export default Ingredients;
