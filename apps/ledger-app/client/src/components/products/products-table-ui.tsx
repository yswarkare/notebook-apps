import { ChangeEvent } from "react";
import { Box, InputLabel, MenuItem, Pagination, Paper, Select, Stack, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { LightCircle } from 'yw-icons';
import { ProductType } from "../../models/products.model"
import ProductRow from './product-row';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignContent: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {
  list: Array<ProductType>
  loading: boolean
  orderBy: string
  totalPages: number
  pageNumber: number
  itemsPerPage: number
  handleChange: (event: ChangeEvent<unknown>, value: number) => void,
  handleOrderBy: CallableFunction
  handleItemsPerPage: CallableFunction;
}

const ProductsTableUi = ({
  list,
  loading,
  orderBy,
  totalPages,
  pageNumber,
  itemsPerPage,
  handleChange,
  handleOrderBy,
  handleItemsPerPage,
}: Props) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Paper sx={{ width: '100%', flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          <Grid size={1}>
            <Item><Typography variant={'h5'}>#</Typography></Item>
          </Grid>
          <Grid size={4}>
            <Item align={'left'}><Typography variant={'h5'}>Name</Typography></Item>
          </Grid>
          <Grid size={4}>
            <Item align={'left'}><Typography variant={'h5'}>Description</Typography></Item>
          </Grid>
          <Grid size={3}>
            <Item><Typography variant={'h5'}>Actions</Typography></Item>
          </Grid>
          {
            !loading && list.length > 0 && list.map((item, index) => (
              <ProductRow
                page={pageNumber}
                item={item}
                index={index}
              />
            ))
          }
          {
            loading &&
            <Grid size={12} alignItems={'center'} justifyContent={'center'}>
              <div className="w-full relative flex flex-row justify-center items-center">
                <LightCircle size='3rem' />
              </div>
            </Grid>
          }
          <Grid size={12} alignItems={'center'} justifyContent={'center'}>
            <Stack
              direction='row'
              alignItems={'center'}
              justifyContent={'center'}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Pagination
                className='p-2 flex justify-center items-center '
                count={totalPages}
                page={pageNumber}
                disabled={loading}
                color="primary" variant='outlined' shape='rounded'
                onChange={handleChange}
              />
            </Stack>
            <Stack
              direction='row'
              alignItems={'center'}
              justifyContent={'center'}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <InputLabel id="items-per-page--select-label">Items per page</InputLabel>
              <Select
                labelId="items-per-page-select-label"
                id="items-per-page-select"
                value={itemsPerPage}
                size="small"
                disabled={loading}
                onChange={(e) => { handleItemsPerPage(e.target.value) }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
              <InputLabel id="order-by-select-label">Order By</InputLabel>
              <Select
                labelId="order-by-select-label"
                id="order-by-simple-select"
                value={orderBy}
                size="small"
                disabled={loading}
                onChange={(e) => { handleOrderBy(e.target.value) }}
              >
                <MenuItem value={'asc'}>Ascending</MenuItem>
                <MenuItem value={'desc'}>Descending</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProductsTableUi;
