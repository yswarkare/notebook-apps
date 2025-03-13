import { useState } from 'react';
import { Controller } from "react-hook-form";
import Grid from '@mui/material/Grid2';
import { IconButton, styled, TextField, Tooltip, Typography } from "@mui/material";
import Save from "@mui/icons-material/Save";
import Cancel from "@mui/icons-material/Cancel";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import ArticleIcon from '@mui/icons-material/Article';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';

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
  item: ItemType
  index: number
  errors: any
  loading: boolean
  control: any
  pageNumber: number
  itemsPerPage: number
  setEdit: CallableFunction
  goToItemPage?: CallableFunction
  submitHandler: CallableFunction
  handleSubmit: CallableFunction
  deleteHandler: CallableFunction
}

const CustomTableRowUi = ({
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
  goToItemPage,
  handleSubmit,
  deleteHandler,
}: Props) => {

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const confirmYesHandler = () => {
    setOpenDialog(false)
    deleteHandler()
  }

  const openConfirmationDialogBox = () => {
    setOpenDialog(true)
  }

  const confirmNoHandler = () => {
    setOpenDialog(false)
  }

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
          {
            goToItemPage &&
            <Tooltip placement="top" title="Product Page">
              <IconButton onClick={() => { goToItemPage() }}>
                <ArticleIcon />
              </IconButton >
            </Tooltip>
          }
          <Tooltip placement="top" title="Edit">
            <IconButton onClick={() => setEdit(true)}>
              <Edit />
            </IconButton >
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <IconButton loading={loading} onClick={() => { openConfirmationDialogBox() }}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Item>
      </Grid>
      {openDialog &&
        <ConfirmationDialog
          id={item.id}
          open={openDialog}
          content={`Are you sure you want to delete ${item.name}?`}
          handleNo={confirmNoHandler}
          handleYes={confirmYesHandler}
        />
      }
    </>;
}

export default CustomTableRowUi;