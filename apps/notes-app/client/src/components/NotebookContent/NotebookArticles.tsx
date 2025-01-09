import ArticlesList from "../Articles/ArticlesList";
import CreateArticle from "../Articles/CreateArticle";

import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { NotebookTagsAndRefs } from "../../models/notebook.model";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../ApiError";
import ArticleService from "../../services/article.service";

type PropType = {
  notebookId: string
}

const NotebookArticles = ({ notebookId }: PropType) => {

  const { value, loading, error, callApi } = useApiCall<string, NotebookTagsAndRefs>()

  useEffect(() => {
    callApi(ArticleService.getArticleList, notebookId)
    console.log({ value })
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        {value && <ArticlesList list={value} />}
        <CreateArticle notebookId={notebookId} />
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

export default NotebookArticles;