import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputUi } from "yw-daisyui";
import { BlocksShuffle, DotsMove } from "yw-icons";
import ApiError from "./ApiError";
import useApiCall from "../hooks/useApiCall";
import { AnyObject, Maybe, ObjectSchema } from "yup";
import { AxiosResponse } from "axios";

type Props<InputType> = {
  title: string,
  inputProps: object,
  inputSchema: ObjectSchema<InputType, AnyObject, InputType, "">,
  redirectPath: string,
  apiFunction: Promise<AxiosResponse<InputType, InputType>>
}

type InputType2 = {
  [x: string]: FieldValues | AnyObject | Maybe<AnyObject>
}

function InputForm<InputType extends InputType2, >({ title, inputProps, inputSchema, redirectPath, apiFunction }: Props<InputType>) {
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<InputType>({
    resolver: yupResolver<InputType>(inputSchema),
  });
  const { error, loading, callApi } = useApiCall<InputType, InputType>()
  const navigate = useNavigate()

  const submitHandler = async (data) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(apiFunction, data)
        reset()
        navigate(redirectPath)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center ">
      {title && <h1>{title}</h1>}
      <form className="w-full flex flex-col gap-3 justify-center items-center " onSubmit={handleSubmit(submitHandler)} >
        {
          Object.entries(inputProps).map(([key, value]) => (
            <Controller
              name={key}
              key={key}
              control={control}
              render={({ field }) => (
                <InputUi
                  type={key}
                  id={key}
                  label={value}
                  position="left"
                  key={key}
                  disabled={loading}
                  error={(touched?.[key] && errors?.[key]?.message)}
                  {...field}
                />
              )}
            />
          ))
        }
        <div className="relative flex justify-center">
          <button className="btn btn-primary" title="sign-up" type="submit" disabled={loading}>
            create notebook
          </button>
          {
            loading &&
            <div className="absolute">
              <DotsMove />
            </div>
          }
        </div>
        {
          loading &&
          <div className="absolute">
            <BlocksShuffle size="3rem" />
          </div>
        }
        {
          error! &&
          <ApiError error={error} />
        }
      </form>
    </div>
  )
}
export default InputForm
