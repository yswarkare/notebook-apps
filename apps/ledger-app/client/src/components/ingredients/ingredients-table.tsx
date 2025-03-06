import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsPage, setItemsPerPage, setPageNumber, setOrderBy } from '../../store/slices/ingredients';
import IngredientsTableUi from './ingredients-table-ui'

const IngredientsTable = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ingredients.list)
  const loading = useSelector((state) => state.ingredients.loading)
  const totalPages = useSelector((state) => state.ingredients.listInfo.totalPages)
  const itemsPerPage = useSelector((state) => state.ingredients.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.ingredients.listInfo.pageNumber)
  const orderBy = useSelector((state) => state.ingredients.listInfo.orderBy)

  useEffect(() => {
    dispatch(getIngredientsPage())
    console.log(list)
  }, [])

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value))
    dispatch(getIngredientsPage())
  };

  const handleItemsPerPage = (value: number) => {
    dispatch(setItemsPerPage(value))
    dispatch(getIngredientsPage())
  }

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(value))
    dispatch(getIngredientsPage())
  }

  return (
    <IngredientsTableUi 
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

export default IngredientsTable;


