import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPage, setItemsPerPage, setPageNumber, setOrderBy } from '../../store/slices/products';
import ProductsTableUi from './products-table-ui'

const ProductsTable = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.products.list)
  const loading = useSelector((state) => state.products.loading)
  const totalPages = useSelector((state) => state.products.listInfo.totalPages)
  const itemsPerPage = useSelector((state) => state.products.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.products.listInfo.pageNumber)
  const orderBy = useSelector((state) => state.products.listInfo.orderBy)

  useEffect(() => {
    dispatch(getProductsPage())
    console.log(list)
  }, [])

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value))
    dispatch(getProductsPage())
  };

  const handleItemsPerPage = (value: number) => {
    dispatch(setItemsPerPage(value))
    dispatch(getProductsPage())
  }

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(value))
    dispatch(getProductsPage())
  }

  return (
    <ProductsTableUi 
      list={list}
      loading={loading}
      orderBy={orderBy}
      totalPages={totalPages}
      pageNumber={pageNumber}
      itemsPerPage={itemsPerPage}
      handleChange={handleChange}
      handleOrderBy={handleOrderBy}
      handleItemsPerPage={handleItemsPerPage}
    />
  );
}

export default ProductsTable;


