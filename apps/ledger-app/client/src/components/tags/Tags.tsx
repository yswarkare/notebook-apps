import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { NotebookTagsAndRefs } from "../../models/notebook.model";
import TagsList from "../tags/TagsList";
import CreateTag from "../tags/CreateTag";
import { AxiosResponse } from "axios";
import { CreateTagFor, TagType } from "../../models/tags.model";
import LoadingAndError from "../LoadingAndError";

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
      <LoadingAndError loading={loading} error={error} />
    </div>
  )
}

export default Tags;
