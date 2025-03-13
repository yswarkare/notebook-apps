import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateRecipeType, recipeSchema } from "../../models/recipes.model";
import { getRecipeList, updateRecipe, deleteRecipe, setRecipeId } from "../../store/slices/recipes";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import path from "../../routes/path";
import { ItemType } from "../../models";
import CustomTableRowUi from "../CustomTable/custom-table-row-ui";

type PropTypes = {
  item: ItemType;
  index: number;
}

const RecipeRow = ({ item, index }: PropTypes) => {
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.recipes.loading);
  const itemsPerPage = useSelector((state) => state.recipes.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.recipes.listInfo.pageNumber)
  const { control, setValue, handleSubmit, formState: { isValid, errors }, reset } = useForm<CreateRecipeType>({
    resolver: yupResolver<CreateRecipeType>(recipeSchema),
  });

  useEffect(() => {
    setValue('name', item.name);
    setValue('description', item.description)
  }, [item])

  const submitHandler = (data: CreateRecipeType) => {
    try {
      if (isValid && (data.name !== item.name || data.description !== item.description)) {
        console.log({ isValid, data })
        dispatch(updateRecipe({ id: item.id, ...data }))
        toast.success('Updated recipe!')
        reset()
        dispatch(getRecipeList())
        setEdit(false)
      } else {
        setEdit(false)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to update recipe! ${error.response.data.message}`)
      } else {
        toast.error('Failed to update recipe!')
      }
    }
  }

  const deleteHandler = () => {
    try {
      dispatch(deleteRecipe())
      dispatch(getRecipeList())
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to delete recipe! ${error.response.data.message}`)
      } else {
        toast.error('Failed to delete recipe!')
      }
    }
  }

  const goToRecipePage = () => {
    dispatch(setRecipeId(item.id))
    navigate(`${path._products._recipes.recipe}/${item.name.toLowerCase().replace(" ", '-')}`);
  }

  return (
    <CustomTableRowUi
      edit={edit}
      item={item}
      index={index}
      errors={errors}
      loading={loading}
      control={control}
      pageNumber={pageNumber}
      itemsPerPage={itemsPerPage}
      setEdit={setEdit}
      goToItemPage={goToRecipePage}
      submitHandler={submitHandler}
      handleSubmit={handleSubmit}
      deleteHandler={deleteHandler}
    />
  )
}

export default RecipeRow;
