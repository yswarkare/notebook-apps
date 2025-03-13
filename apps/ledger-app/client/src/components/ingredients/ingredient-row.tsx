import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateIngredientType, ingredientSchema, IngredientType } from "../../models/ingredient.model";
import { getIngredientList, updateIngredient, deleteIngredient } from "../../store/slices/ingredients";
import { toast } from 'react-toastify';
import IngredientRowUi from "./ingredient-row-ui"
import CustomTableRowUi from "../CustomTable/custom-table-row-ui";

type PropTypes = {
  item: IngredientType;
  index: number;
}

const IngredientRow = ({ item, index }: PropTypes) => {
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.ingredients.loading);
  const itemsPerPage = useSelector((state) => state.ingredients.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.ingredients.listInfo.pageNumber)
  const { control, setValue, handleSubmit, formState: { isValid, errors }, reset } = useForm<CreateIngredientType>({
    resolver: yupResolver<CreateIngredientType>(ingredientSchema),
  });

  useEffect(() => {
    setValue('name', item.name);
    setValue('description', item.description)
  }, [item])

  const submitHandler = async (data: CreateIngredientType) => {
    try {
      if (isValid && (data.name !== item.name || data.description !== item.description)) {
        console.log({ isValid, data })
        await dispatch(updateIngredient({ id: item.id, ...data }))
        toast.success('Updated ingredient!')
        reset()
        await dispatch(getIngredientList())
        setEdit(false)
      } else {
        setEdit(false)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to update ingredient! ${error.response.data.message}`)
      } else {
        toast.error('Failed to update ingredient!')
      }
    }
  }

  const deleteHandler = async () => {
    try {
      await dispatch(deleteIngredient())
      await dispatch(getIngredientList())
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to delete ingredient! ${error.response.data.message}`)
      } else {
        toast.error('Failed to delete ingredient!')
      }
    }
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
      submitHandler={submitHandler}
      handleSubmit={handleSubmit}
      deleteHandler={deleteHandler}
    />
  )
}

export default IngredientRow;
