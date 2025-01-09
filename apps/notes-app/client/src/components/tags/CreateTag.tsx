import { useState } from "react";
import BootstrapIcon from "../BootstrapIcons/BootstrapIcon";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateTagFor, createTagSchema, CreateTagType, TagType } from '../../models/tags.model';
import useApiCall from "../../hooks/useApiCall";
import { InputUi } from "yw-daisyui";
import { BlocksShuffle, DotsMove } from "yw-icons";
import ApiError from "../ApiError";
import { AxiosResponse } from "axios";
import IconButton from "../BootstrapIcons/IconButton";

const tagProps = {
  name: "Tag Name"
}

type Props = {
  notebookId: string
  createApi: (args: CreateTagFor) => Promise<AxiosResponse<CreateTagFor, TagType>>
}

const CreateTag = ({ notebookId, createApi }: Props) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateTagType>({
    resolver: yupResolver<CreateTagType>(createTagSchema),
  });
  const { error, loading, callApi } = useApiCall<CreateTagFor, TagType>()

  const submitHandler = async (data: CreateTagType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(createApi, { tag: data, id: notebookId })
        reset()
        setShowInput(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[50%] flex flex-col gap-3 justify-center items-center">
      {
        showInput ?
          <form className="w-full flex flex-col gap-3 justify-center items-center " onSubmit={handleSubmit(submitHandler)} >
            <IconButton icon="x-circle" onClick={() => setShowInput(false)} />
            {
              Object.entries(tagProps).map(([key, value]) => (
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
                create tag
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
          <button className="btn btn-outline btn-secondary" type="button" onClick={() => { setShowInput(!showInput) }} >
            <BootstrapIcon icon="plus" />
            <BootstrapIcon icon="tag" />
          </button>
      }
    </div>
  );
}

export default CreateTag;
