import { useEffect } from "react";
import { useOutletContext } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CreateRecipeType, recipeSchema } from "../../models/recipes.model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe, getRecipeList } from "../../store/slices/recipes";
import { toast } from 'react-toastify';
import CreateItemUi from "../CustomTable/create-item-ui";

const recipeProps = {
  name: { type: 'text', label: 'Name' },
  description: { type: 'textarea', label: 'Description' },
}

const CreateRecipes = () => {
  const context = useOutletContext<{ productId: string, productName: string }>();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recipes.loading);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateRecipeType>({
    resolver: yupResolver<CreateRecipeType>(recipeSchema),
  });

  useEffect(() => {
    console.log({ context })
  }, [context])

  const submitHandler = async (data: CreateRecipeType) => {
    try {
      data.productId = context.productId
      console.log(data)
      console.log(isValid)
      if (isValid) {
        console.log({ isValid, data })
        await dispatch(createRecipe(data))
        toast.success('Created recipe!')
        control._reset()
        await dispatch(getRecipeList())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CreateItemUi
      title="recipe"
      itemProps={recipeProps}
      control={control}
      touched={touched}
      errors={errors}
      loading={loading}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
    ></CreateItemUi>
  )
}

export default CreateRecipes