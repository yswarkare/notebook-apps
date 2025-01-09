import { useState } from "react";
import BootstrapIcon from "../BootstrapIcons/BootstrapIcon";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useApiCall from "../../hooks/useApiCall";
import { InputUi } from "yw-daisyui";
import { BlocksShuffle, DotsMove } from "yw-icons";
import ApiError from "../ApiError";
import ArticleService from "../../services/article.service";
import { ArticleType, createArticleSchema, CreateArticleType, CreateArticleType2 } from "../../models/article.model";
import IconButton from "../BootstrapIcons/IconButton";

const articleProps = {
  name: "Name"
}

type PropType = {
  notebookId: string
}

const CreateArticle = ({ notebookId }: PropType) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateArticleType>({
    resolver: yupResolver<CreateArticleType>(createArticleSchema),
  });
  const { error, loading, callApi } = useApiCall<CreateArticleType2, ArticleType>()

  const submitHandler = async (data: CreateArticleType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(ArticleService.creteArticle, { name: data.name, notebookId })
        reset()
        setShowInput(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
        showInput ?
          <form className="w-full flex flex-col gap-3 justify-center items-center " onSubmit={handleSubmit(submitHandler)} >
            <IconButton icon="x-circle" onClick={() => setShowInput(false)} />
            {
              Object.entries(articleProps).map(([key, value]) => (
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
            <div className="relative flex flex-col justify-center">
              <button className="btn btn-primary" title="sign-up" type="submit" disabled={loading}>
                create article
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
            Article
            <BootstrapIcon icon="newspaper" />
          </button>
      }
    </div>
  );
}

export default CreateArticle;
