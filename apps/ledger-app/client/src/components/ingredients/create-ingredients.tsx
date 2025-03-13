import { useDispatch, useSelector } from "react-redux"
import { CreateIngredientType, ingredientSchema } from "../../models/ingredient.model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createIngredient, getIngredientList } from "../../store/slices/ingredients";
import { toast } from 'react-toastify';
import CreateItemUi from "../CustomTable/create-item-ui";

const ingredientProps = {
  name: { type: 'text', label: 'Name' },
  description: { type: 'textarea', label: 'Description' },
}

const CreateIngredients = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.ingredients.loading);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateIngredientType>({
    resolver: yupResolver<CreateIngredientType>(ingredientSchema),
  });

  const submitHandler = async (data: CreateIngredientType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await dispatch(createIngredient(data))
        toast.success('Created ingredient!')
        reset()
        await dispatch(getIngredientList())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CreateItemUi
      title="ingredient"
      control={control}
      errors={errors}
      touched={touched}
      loading={loading}
      itemProps={ingredientProps}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
    ></CreateItemUi>
  )
}

export default CreateIngredients