import { Box, Typography } from "@mui/material";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../../components/ApiError";
import { useSelector } from "react-redux";
import CreateIngredients from "../../components/ingredients/create-ingredients";
import IngredientsTable from "../../components/ingredients/ingredients-table";
import ShowHide from "../../components/show-hide";
import RoutedTabs from "../../components/Tabs/RoutedTabs";
import { Outlet } from "react-router-dom";
import path from "../../routes/path";

const tabs = [
  { label: 'Ingredients List', url: path.ingredient_pages.table },
  { label: 'Create Ingredient', url: path.ingredient_pages.create },
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
      <Outlet />
      {
        error! &&
        <ApiError error={error} />
      }
    </Box>
  );
}

export default Ingredients;
