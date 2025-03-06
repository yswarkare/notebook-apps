import { Box, Typography } from "@mui/material";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../../components/ApiError";
import { useSelector } from "react-redux";
import CreateIngredients from "../../components/ingredients/create-ingredients";
import IngredientsTable from "../../components/ingredients/ingredients-table";
import ShowHide from "../../components/show-hide";

const Ingredients = () => {
  const loading = useSelector((state) => state.ingredients.loading);
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
      <IngredientsTable />
      <ShowHide title={'Create Ingredient'}>
        <CreateIngredients />
      </ShowHide>
      {
        loading &&
        <div className="absolute">
          <BlocksShuffle size="3rem" />
        </div>
      }
      {
        error! &&
        <ApiError error={error} />
      }
    </Box>
  );
}

export default Ingredients;
