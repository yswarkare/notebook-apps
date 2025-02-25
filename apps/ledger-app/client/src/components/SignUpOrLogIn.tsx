import { useForm, Controller, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BlocksShuffle, DotsMove } from "yw-icons";
import useApiCall from "../hooks/useApiCall";
import { AnyObject, ObjectSchema } from "yup";
import AuthService from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import Footer from "../layouts/Footer";
import TextInput from "./TextInput/TextInput";

type Props = {
  title: string
  userProps: object
  userSchema: ObjectSchema<FieldValues, AnyObject, any, "">
  url: string,
  switchPage: { label: string, path: string }
}

const SignUpOrLogin = ({ title, userProps, userSchema, url, switchPage }: Props) => {
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm({
    resolver: yupResolver(userSchema),
  });
  const { error, loading, value, callApi } = useApiCall()
  const navigate = useNavigate()



  const submitHandler = async (data) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        if (url) {
          if (title === 'Sign Up') {
            await callApi(AuthService.signUp(), data)
          }
          if (title === 'Log In') {
            await callApi(AuthService.logIn(), data)
          }
          console.log(value)
          reset()
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full pt-8 flex flex-col justify-center items-center">
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
          minHeight: '56px',
        }}
      >
        <Typography variant="h1" gutterBottom>{title}</Typography>
        <form className="w-[60%] gap-3 flex flex-col items-center justify-center" onSubmit={handleSubmit(submitHandler)}>
          {
            Object.entries(userProps).map(([key, value]) => (
              <Controller
                name={key}
                key={key}
                control={control}
                render={({ field }) => (
                  <TextInput
                    error={(touched?.[key] && errors?.[key]?.message)}
                    label={value}
                    disabled={loading}
                    type={key}
                    helperText={touched?.[key] && errors?.[key]?.message}
                    {...field}
                  />
                )}
              />
            ))
          }
          <div className="relative flex justify-center">
            <Button
              title="sign-up"
              variant="contained"
              type="submit"
              disabled={loading}
              loading={loading}
              loadingIndicator={<DotsMove size="3rem" />}
            >
              {title}
            </Button>
          </div>
          {
            loading &&
            <div className="absolute">
              <BlocksShuffle size="3rem" />
            </div>
          }
          {
            error! &&
            <div className="w-full flex flex-col justify-start items-center">
              <p>{error?.status && error.status}</p>
              <p>{error?.response?.data?.message && error.response.data.message}</p>
            </div>
          }
          <div className="w-full flex flex-col items-end">
            <Link to={switchPage.path}>go to the {switchPage.label} page</Link>
          </div>
        </form>
        <Footer />
      </Box>
    </div>
  );
}

export default SignUpOrLogin;
