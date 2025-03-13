import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductType, productSchema } from "../../models/products.model";
import { getProductList, updateProduct, deleteProduct, setProductId } from "../../store/slices/products";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import path from "../../routes/path";
import { ItemType } from "../../models";
import CustomTableRowUi from "../CustomTable/custom-table-row-ui";

type PropTypes = {
  item: ItemType;
  index: number;
}

const ProductRow = ({ item, index }: PropTypes) => {
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.products.loading);
  const itemsPerPage = useSelector((state) => state.products.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.products.listInfo.pageNumber)
  const { control, setValue, handleSubmit, formState: { isValid, errors }, reset } = useForm<CreateProductType>({
    resolver: yupResolver<CreateProductType>(productSchema),
  });

  useEffect(() => {
    setValue('name', item.name);
    setValue('description', item.description)
  }, [item])

  const submitHandler = (data: CreateProductType) => {
    try {
      if (isValid && (data.name !== item.name || data.description !== item.description)) {
        console.log({ isValid, data })
        dispatch(updateProduct({ id: item.id, ...data }))
        toast.success('Updated product!')
        reset()
        dispatch(getProductList())
        setEdit(false)
      } else {
        setEdit(false)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to update product! ${error.response.data.message}`)
      } else {
        toast.error('Failed to update product!')
      }
    }
  }

  const deleteHandler = () => {
    try {
      dispatch(deleteProduct())
      dispatch(getProductList())
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        toast.error(`Failed to delete product! ${error.response.data.message}`)
      } else {
        toast.error('Failed to delete product!')
      }
    }
  }

  const goToProductPage = () => {
    dispatch(setProductId(item.id))
    navigate(`${path._products.product}/${item.name.toLowerCase().replace(" ", '-')}`);
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
      goToItemPage={goToProductPage}
      submitHandler={submitHandler}
      handleSubmit={handleSubmit}
      deleteHandler={deleteHandler}
    />
  )
}

export default ProductRow;
