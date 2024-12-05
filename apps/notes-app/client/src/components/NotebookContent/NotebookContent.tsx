import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { NotebookType } from "../../models/notebook.model";
import { TagType } from "../../models/tags.model";
import CreateTag from "../tags/CreateTag";
import TagService from "../../services/TagService";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../ApiError";
import TagsList from "../tags/TagsList";

type Props = {
  notebook: NotebookType
}

const NotebookContent = ({ notebook }: Props) => {

  const { value, loading, error, callApi } = useApiCall<string, Array<TagType>>()

  const getNotebookTags = async () => {
    try {
      await callApi(TagService.getTagList, notebook.id)
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    getNotebookTags()
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {notebook.title}
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        {value && <TagsList tags={value} />}
        <CreateTag notebookId={notebook.id} />
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
  );
}

export default NotebookContent;
