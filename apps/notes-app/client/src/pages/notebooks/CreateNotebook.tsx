import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import useApiCall from "../../hooks/useApiCall";
import { useNavigate } from "react-router-dom";
import { InputUi } from "yw-daisyui";
import { BlocksShuffle, DotsMove } from "yw-icons";
import NotebookService from "../../services/notebook.service";
import path from "../../routes/path";
import ApiError from "../../components/ApiError";
import { CreateNotebookType, notebookSchema, NotebookType } from "../../models/notebook.model";

const notebookProps = {
  name: 'Name',
}

function CreateNotebook() {
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<CreateNotebookType>({
    resolver: yupResolver<CreateNotebookType>(notebookSchema),
  });
  const { error, loading, callApi } = useApiCall<CreateNotebookType, NotebookType>()
  const navigate = useNavigate()

  const submitHandler = async (data: CreateNotebookType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(NotebookService.creteNotebook, data)
        reset()
        navigate(path.notebook_pages.list)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center ">
      <h1>Create Notebook</h1>
      <form className="w-full flex flex-col gap-3 justify-center items-center " onSubmit={handleSubmit(submitHandler)} >
        {
          Object.entries(notebookProps).map(([key, value]) => (
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
export default CreateNotebook