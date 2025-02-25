import { AxiosResponse } from "axios"
import { CreateTagFor } from "../../models/tags.model"
import { useState } from "react"
import useApiCall from "../../hooks/useApiCall"
import IconButton from "../BootstrapIcons/IconButton"
import { BlocksShuffle } from "yw-icons"
import ApiError from "../ApiError"
import MarkdownIt from "../MarkdownIt/MarkdownIt"
import MdEditorForUpdate from "../md-editor/MdEditorForUpdate"
import LoadingAndError from "../LoadingAndError"

type Props = {
  id: string
  content: string
  updateApi: (args: CreateTagFor) => Promise<AxiosResponse>
}

function RenderContent<ContentType>({ id, content, updateApi }: Props) {
  const [edit, setEdit] = useState<boolean>()
  const [upContent, setUpContent] = useState<string>('')
  const { value, loading, error, callApi } = useApiCall<ContentType, ContentType>()

  const setTheEdit = (edt: boolean) => {
    if (edt) setUpContent(content)
    else setUpContent('')
    setEdit(edt)
  }

  const updateContent = (upCont: string) => {
    callApi(updateApi, { content: upCont, id })
  }

  return (
    <div className="w-full gap-3 flex flex-col justify-center items-center">
      <div className="flex self-end">
        <IconButton icon={edit ? "x-circle" : "pen"} onClick={() => { setTheEdit(!edit) }} />
      </div>
      {edit
        ?
        <MdEditorForUpdate
          key={id.slice(10)}
          value={upContent}
          onChange={(value) => value ? setUpContent(value) : undefined}
        />
        :
        <MarkdownIt key={`${id.slice(10)}_content`} content={content} />
      }
      {edit &&
        <button className="btn btn-primary" type='button' onClick={() => { updateContent(upContent) }}>Update Content</button>
      }
      <LoadingAndError loading={loading} error={error} />
    </div>
  );
}

export default RenderContent;
