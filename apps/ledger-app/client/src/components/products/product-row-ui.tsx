import Grid from '@mui/material/Grid2';
import { IconButton, styled, TextField, Tooltip, Typography } from "@mui/material";
import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import { ProductType } from '../../models/products.model';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  height: "100%",
  alignContent: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {
  edit: boolean
  item: ProductType
  index: number
  errors: any
  loading: boolean
  control: any
  pageNumber: number
  itemsPerPage: number
  setEdit: CallableFunction
  submitHandler: CallableFunction
  handleSubmit: CallableFunction
  deleteHandler: CallableFunction
}

const ProductRowUi = ({
  edit,
  item,
  index,
  errors,
  loading,
  control,
  pageNumber,
  itemsPerPage,
  setEdit,
  submitHandler,
  handleSubmit,
  deleteHandler,
}: Props) => {
  return edit ?
    <>
      <Grid size={1}>
        <Item>{((pageNumber * itemsPerPage) - itemsPerPage) + index}</Item>
      </Grid>
      <Grid size={4}>
        <Item>
          {item.name && (
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  size="small"
                  type={'text'}
                  label={'Name'}
                  defaultValue={item.name}
                  error={(!!errors?.name?.message)}
                  disabled={loading}
                  helperText={(errors?.name?.message)}
                  fullWidth {...field} />
              )}
            />
          )}
        </Item>
      </Grid>
      <Grid size={4}>
        <Item>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                type={'text'}
                label={'Description'}
                defaultValue={item.description}
                error={(!!errors?.description?.message)}
                disabled={loading}
                helperText={(errors?.description?.message)}
                fullWidth
                {...field}
              />
            )}
          />
        </Item>
      </Grid>
      <Grid size={3}>
        <Item>
          <Tooltip placement="top" title="Save">
            <IconButton loading={loading} type='submit' onClick={handleSubmit(submitHandler)}>
              <Save />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title="Cancel Edit">
            <IconButton onClick={() => setEdit(false)}>
              <Cancel />
            </IconButton>
          </Tooltip>
        </Item>
      </Grid>
    </>
    :
    <>
      <Grid size={1}>
        <Item>{((pageNumber - 1) * itemsPerPage) + index + 1}</Item>
      </Grid>
      <Grid size={4}>
        <Item align={'left'}>{item.name}</Item>
      </Grid>
      <Grid size={4}>
        <Item align={'left'}>{item.description}</Item>
      </Grid>
      <Grid size={3}>
        <Item>
          <Tooltip placement="top" title="Edit">
            <IconButton onClick={() => setEdit(true)}>
              <Edit />
            </IconButton >
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <IconButton loading={loading} onClick={() => { deleteHandler() }}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Item>
      </Grid>
    </>;
}

export default ProductRowUi;