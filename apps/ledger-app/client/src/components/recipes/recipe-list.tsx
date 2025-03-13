import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesPage, setItemsPerPage, setPageNumber, setOrderBy } from '../../store/slices/recipes';
import CustomTableUi from '../CustomTable/custom-table-ui';
import RecipeRow from './recipe-row';

const RecipeList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.recipes.list)
  const loading = useSelector((state) => state.recipes.loading)
  const totalPages = useSelector((state) => state.recipes.listInfo.totalPages)
  const itemsPerPage = useSelector((state) => state.recipes.listInfo.itemsPerPage)
  const pageNumber = useSelector((state) => state.recipes.listInfo.pageNumber)
  const orderBy = useSelector((state) => state.recipes.listInfo.orderBy)

  useEffect(() => {
    dispatch(getRecipesPage())
    console.log(list)
  }, [])

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value))
    dispatch(getRecipesPage())
  };

  const handleItemsPerPage = (value: number) => {
    dispatch(setItemsPerPage(value))
    dispatch(getRecipesPage())
  }

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(value))
    dispatch(getRecipesPage())
  }

  return (
    <CustomTableUi 
      id="recipes"
      list={list}
      loading={loading}
      orderBy={orderBy}
      totalPages={totalPages}
      pageNumber={pageNumber}
      itemsPerPage={itemsPerPage}
      handleChange={handleChange}
      handleOrderBy={handleOrderBy}
      handleItemsPerPage={handleItemsPerPage}
      RowElement={RecipeRow}
    />
  );
}

export default RecipeList;


