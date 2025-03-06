import { useDispatch, useSelector } from "react-redux"
import { CreateProductType, productSchema } from "../../models/products.model";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct, getProductList } from "../../store/slices/products";
import { Box, Button, Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import { DotsMove } from "yw-icons";
import { toast } from 'react-toastify';

const productProps = {
  name: { type: 'text', label: 'Name' },
  description: { type: 'textarea', label: 'Description' },
}

const CreateProducts = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.products.loading);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateProductType>({
    resolver: yupResolver<CreateProductType>(productSchema),
  });

  const submitHandler = async (data: CreateProductType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await dispatch(createProduct(data))
        toast.success('Created product!')
        reset()
        await dispatch(getProductList())
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
      <Typography variant="h3" gutterBottom>Create Product</Typography>
      <form className="w-[60%] gap-3 flex flex-col items-center justify-center" onSubmit={handleSubmit(submitHandler)}>
        {
          Object.entries(productProps).map(([key, { type, label }]) => (
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
            title="create-product"
            variant="contained"
            type="submit"
            disabled={loading}
            loading={loading}
            loadingIndicator={<DotsMove size="3rem" />}
          >
            Create Product
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default CreateProducts