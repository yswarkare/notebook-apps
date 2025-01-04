import { useState } from "react";
import { InputUi } from "yw-daisyui";
import { notebookSchema, NotebookType } from "../../models/notebook.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import useApiCall from "../../hooks/useApiCall";
import { RingWithBg } from "yw-icons";
import NotebookService from "../../services/notebook.service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import path from "../../routes/path";
import IconButton from "../BootstrapIcons/IconButton";

const notebookProps = {
  name: '',
}

type Props = {
  notebook: NotebookType,
  index: number
}

const NotebookRow = ({ notebook: { id, name }, index }: Props) => {
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm<NotebookType>({
    resolver: yupResolver<NotebookType>(notebookSchema),
  });
  const { error, loading, callApi } = useApiCall<NotebookType, NotebookType>()
  const [edited, setEdited] = useState<boolean>();

  const updateNotebook = async (data: NotebookType) => {
    try {
      console.log(data)
      if (isValid) {
        console.log({ isValid, data })
        await callApi(NotebookService.updateNotebook, { ...data, id })
        reset()
      }
      toast('Updated successfully!', { type: 'info' })
    } catch (err) {
      console.log(err)
      if (error?.response?.data?.message) {
        toast(error.response.data.message, { type: 'error' })
      }
    } finally {
      setEdited(false)
    }
  }

  return (
    <tr className="hover" key={id} >
      <th>{index + 1}</th>
      <td>{edited ?
        Object.entries(notebookProps).map(([key]) => (
          <Controller
            name={key}
            key={key}
            control={control}
            render={({ field }) => (
              <InputUi
                type={key}
                id={key}
                position="left"
                key={key}
                defaultValue={name}
                disabled={loading}
                error={(touched?.[key] && errors?.[key]?.message)}
                {...field}
              />
            )}
          />
        ))
        : name}
      </td>
      <td></td>
      <td>
        <div className="w-full relative flex flex-row justify-around">
          {edited ?
            <>
              <IconButton icon={'check-circle'} disabled={loading} onClick={handleSubmit(updateNotebook)} tooltip="Update" />
              <IconButton icon={'x-circle'} disabled={loading} onClick={() => setEdited(false)} tooltip="Cancel" />
            </>
            :
            <IconButton icon={'pen'} disabled={loading} onClick={() => setEdited(true)} tooltip="Edit" />
          }
          <IconButton icon={'trash3'} disabled={loading} onClick={() => { }} tooltip="Delete" />
          <Link to={`${path.notebook_pages.create}`} aria-disabled={loading}>
            <IconButton icon={'plus-circle'} disabled={loading} onClick={() => { }} tooltip="Create New" />
          </Link>
          <Link to={`${path.notebook_pages.notebook}/${id}`} aria-disabled={loading}>
            <IconButton icon={'card-heading'} disabled={loading} tooltip="Open" />
          </Link>
          {
            loading &&
            <div className="absolute">
              <RingWithBg />
            </div>
          }
        </div>
      </td>
    </tr>
  );
}

export default NotebookRow;
