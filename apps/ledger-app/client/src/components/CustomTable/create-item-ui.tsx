import { Controller } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import { DotsMove } from "yw-icons";

type PropType = {
  type: string
  label: string
}

type ItemPropsType = {
    name: PropType,
    description: PropType,
}

type Props = {
  title: string;
  itemProps: ItemPropsType;
  control: any;
  touched: any;
  errors: any;
  loading: boolean;
  handleSubmit: CallableFunction;
  submitHandler: CallableFunction;
}

function CreateItemUi({
  title,
  itemProps,
  control,
  touched,
  errors,
  loading,
  handleSubmit,
  submitHandler,
}: Props) {

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
      <Typography variant="h3" gutterBottom>Create {title}</Typography>
      <form className="w-[60%] gap-3 flex flex-col items-center justify-center" onSubmit={handleSubmit(submitHandler)}>
        {
          Object.entries(itemProps).map(([key, { type, label }]) => (
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
            Create {title}
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default CreateItemUi
