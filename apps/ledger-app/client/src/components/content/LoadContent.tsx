import { useEffect } from "react"
import useApiCall from "../../hooks/useApiCall"
import { AxiosResponse } from "axios"
import Tags from "../tags/Tags"
import { CreateTagFor } from "../../models/tags.model"
import RenderContent from "./RenderContent"
import LoadingAndError from "../LoadingAndError"

type Props = {
  id: string
  getApi: (args: string) => Promise<AxiosResponse>
  getTagsApi: (args: string) => Promise<AxiosResponse>
  createTagApi: (args: CreateTagFor) => Promise<AxiosResponse>
  updateContentApi: (args: CreateTagFor) => Promise<AxiosResponse>
}

function LoadContent<ContentType>({ id, getApi, getTagsApi, createTagApi, updateContentApi }: Props) {

  const { value, loading, error, callApi } = useApiCall<string, Array<ContentType>>()


  useEffect(() => {
    callApi(getApi, id)
  }, []);

  return (
    <div id={id.slice(20)} className="w-full gap-3 flex flex-col justify-start items-start text-left">
      <Tags notebookId={id} getApi={getTagsApi} createApi={createTagApi} />
      {
        value?.content &&
        <RenderContent
          id={`${id}_content`}
          content={value.content}
          updateApi={updateContentApi}
        />
      }
      {
        value?.question &&
        <RenderContent
          id={`${id}_question`}
          content={value.question}
          updateApi={updateContentApi}
        />
      }
      {value?.answer &&
        <RenderContent
          id={`${id}_answer`}
          content={value.answer}
          updateApi={updateContentApi}
        />
      }
      <LoadingAndError loading={loading} error={error} />
    </div>
  );
}

export default LoadContent;
