import { useDispatch, useSelector } from "react-redux"
import { CreateProductType, productSchema } from "../../models/products.model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct, getProductList } from "../../store/slices/products";
import { toast } from 'react-toastify';
import CreateItemUi from "../CustomTable/create-item-ui";

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
    <CreateItemUi
      title="product"
      itemProps={productProps}
      control={control}
      touched={touched}
      errors={errors}
      loading={loading}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
    ></CreateItemUi>
  )
}

export default CreateProducts