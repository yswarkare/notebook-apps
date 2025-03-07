import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductType, productSchema, ProductType } from "../../models/products.model";
import { getProductList, updateProduct, deleteProduct } from "../../store/slices/products";
import { toast } from 'react-toastify';
import ProductRowUi from "./product-row-ui"
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

type PropTypes = {
  item: ProductType;
  index: number;
}

const ProductRow = ({ item, index }: PropTypes) => {
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.products.loading);
  const itemsPerPage = useSelector((state) => state.products.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.products.listInfo.pageNumber)
  const { control, setValue, handleSubmit, formState: { isValid, errors }, reset } = useForm<CreateProductType>({
    resolver: yupResolver<CreateProductType>(productSchema),
  });
  const [openDialog, setOpenDialog] = useState<boolean>(false);

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

  const confirmYesHandler = () => {
    setOpenDialog(false)
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

  const deleteHandler = () => {
    setOpenDialog(true)
  }

  const confirmNoHandler = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <ProductRowUi
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
      {openDialog &&
        <ConfirmationDialog
          id={item.id}
          open={openDialog}
          content={`Are you sure you want to delete ${item.name}?`}
          handleNo={confirmNoHandler}
          handleYes={confirmYesHandler}
        />
      }
    </>
  )
}

export default ProductRow;
