import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { NotebookTagsAndRefs } from "../../models/notebook.model";
import TagsList from "../tags/TagsList";
import CreateTag from "../tags/CreateTag";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../ApiError";
import { AxiosResponse } from "axios";
import { CreateTagFor, TagType } from "../../models/tags.model";

type Props = {
  notebookId: string
  createApi: (args: CreateTagFor) => Promise<AxiosResponse<CreateTagFor, TagType>>
  getApi: (args: string) => Promise<AxiosResponse<string, NotebookTagsAndRefs>>
}

const Tags = ({ notebookId, createApi, getApi }: Props) => {
  const { value, loading, error, callApi } = useApiCall<string, NotebookTagsAndRefs>()

  useEffect(() => {
    callApi(getApi, notebookId)
    console.log({ value })
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        {value && <TagsList tags={value.tags} />}
        <CreateTag notebookId={notebookId} createApi={createApi} />
      </div>
      <div className="relative">
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
      </div>
    </div>
  )
}

export default Tags;
