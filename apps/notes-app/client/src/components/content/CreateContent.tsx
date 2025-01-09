import { useState } from "react";
import BootstrapIcon from "../BootstrapIcons/BootstrapIcon";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useApiCall from "../../hooks/useApiCall";
import { InputUi } from "yw-daisyui";
import { BlocksShuffle, DotsMove } from "yw-icons";
import ApiError from "../ApiError";
import { AnyObject, ObjectSchema } from "yup";
import { AxiosResponse } from "axios";
import TheMdEditor from "../md-editor/TheMdEditor";
import IconButton from "../BootstrapIcons/IconButton";

type PropType<CreateContentType> = {
  contentName: string
  contentProps: object
  parentId: string
  parentIdName: string
  contentSchema: ObjectSchema<FieldValues, AnyObject, any, "">
  createApi: (args: CreateContentType) => Promise<AxiosResponse>
}

function CreateContent<CreateContentType, ContentType>({ contentName, contentProps, parentId, parentIdName, contentSchema, createApi, }: PropType<CreateContentType>) {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm({
    resolver: yupResolver(contentSchema),
  });
  const { error, loading, callApi } = useApiCall<CreateContentType, ContentType>()

  const submitHandler = async (data) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(createApi, { ...data, [parentIdName]: parentId })
        reset()
        setShowInput(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full py-4 flex flex-col justify-center items-center">
      {
        showInput ?
          <form className="w-full flex flex-col gap-3 justify-center items-left text-left" onSubmit={handleSubmit(submitHandler)} >
            <IconButton icon="x-circle" onClick={() => setShowInput(false)} />
            <p>{contentName}</p>
            {
              Object.entries(contentProps).map(([key, { label, type }]) => (
                <Controller
                  name={key}
                  key={key}
                  control={control}
                  render={({ field }) => type === 'content' ?
                    (
                      <>
                        <label>{label}</label>
                        <TheMdEditor
                          key={key}
                          disabled={loading}
                          error={(touched?.[key] && errors?.[key]?.message)}
                          {...field} />
                      </>
                    )
                    : (
                      <InputUi
                        type={type}
                        id={key}
                        label={label}
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
                create {contentName}
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
          :
          <button className="w-fit btn btn-outline btn-secondary" type="button" onClick={() => { setShowInput(!showInput) }} >
            <BootstrapIcon icon="plus" />
            {contentName}
          </button>
      }
    </div>
  );
}

export default CreateContent;
