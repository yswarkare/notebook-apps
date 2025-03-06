import { useDispatch, useSelector } from "react-redux"
import { CreateIngredientType, ingredientSchema } from "../../models/ingredient.model";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createIngredient, getIngredientList } from "../../store/slices/ingredients";
import { Box, Button, Typography } from "@mui/material";
import TextInput from "../../components/TextInput/TextInput";
import { DotsMove } from "yw-icons";
import { toast } from 'react-toastify';

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
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <Typography variant="h3" gutterBottom>Create Ingredient</Typography>
      <form className="w-[60%] gap-3 flex flex-col items-center justify-center" onSubmit={handleSubmit(submitHandler)}>
        {
          Object.entries(ingredientProps).map(([key, { type, label }]) => (
            <Controller
              name={key}
              key={key}
              control={control}
              render={({ field }) => (
                <TextInput
                  error={(touched?.[key] && errors?.[key]?.message)}
                  label={label}
                  disabled={loading}
                  type={type}
                  helperText={touched?.[key] && errors?.[key]?.message}
                  {...field}
                />
              )}
            />
          ))
        }
        <div className="relative flex justify-center">
          <Button
            title="create-ingredient"
            variant="contained"
            type="submit"
            disabled={loading}
            loading={loading}
            loadingIndicator={<DotsMove size="3rem" />}
          >
            Create Ingredient
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default CreateIngredients