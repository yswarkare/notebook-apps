import { useEffect } from "react"
import { BlocksShuffle } from "yw-icons"
import ApiError from "../ApiError"
import useApiCall from "../../hooks/useApiCall"
import { AxiosResponse } from "axios"
import MarkdownIt from "../MarkdownIt/MarkdownIt"
import Tags from "../tags/Tags"
import { CreateTagFor } from "../../models/tags.model"

type Props = {
  id: string
  getApi: (args: string) => Promise<AxiosResponse>
  getTagsApi: (args: string) => Promise<AxiosResponse>
  createTagApi: (args: CreateTagFor) => Promise<AxiosResponse>
}

function LoadContent<ContentType>({ id, getApi, getTagsApi, createTagApi }: Props) {
  const { value, loading, error, callApi } = useApiCall<string, Array<ContentType>>()

  useEffect(() => {
    callApi(getApi, id)
  }, []);

  return (
    <div id={id} className="w-full py-4 flex flex-col justify-center items-center">
      <Tags notebookId={id} getApi={getTagsApi} createApi={createTagApi} />
      {value?.content && <MarkdownIt key={`${id.slice(10)}_content`} content={value.content} />}
      {value?.question && <MarkdownIt key={`${id.slice(10)}_question`} content={value.question} />}
      {value?.answer && <MarkdownIt key={`${id.slice(10)}_answer`} content={value.answer} />}
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
  );
}

export default LoadContent;
