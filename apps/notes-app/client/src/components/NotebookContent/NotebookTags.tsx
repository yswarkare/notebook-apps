import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { NotebookTagsAndRefs } from "../../models/notebook.model";
import NotebookService from "../../services/notebook.service";
import TagsList from "../tags/TagsList";
import CreateTag from "../tags/CreateTag";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../ApiError";

type PropType = {
  notebookId: string
}

const NotebookTags = ({ notebookId }: PropType) => {
  const { value, loading, error, callApi } = useApiCall<string, NotebookTagsAndRefs>()

  useEffect(() => {
    callApi(NotebookService.getNotebookTags, notebookId)
    console.log({ value })
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        {value && <TagsList tags={value.tags} />}
        <CreateTag notebookId={notebookId} />
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

export default NotebookTags;
